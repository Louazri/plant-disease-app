from fastapi import APIRouter, UploadFile, File
from fastapi.responses import JSONResponse
from app.services.predictor import predict_disease
import logging

router = APIRouter()
logger = logging.getLogger("ai-service")

ALLOWED_TYPES = {"image/jpeg", "image/png", "image/webp"}
MAX_UPLOAD_BYTES = 10 * 1024 * 1024

@router.post("/predict")
async def predict(file: UploadFile = File(...)):
    if file.content_type not in ALLOWED_TYPES:
        logger.warning("Unsupported upload type: %s", file.content_type)
        return JSONResponse(
            status_code=415,
            content={"status": "error", "message": "Unsupported image format"}
        )

    contents = await file.read()
    if not contents:
        logger.warning("Empty upload received")
        return JSONResponse(
            status_code=400,
            content={"status": "error", "message": "Empty image file"}
        )

    if len(contents) > MAX_UPLOAD_BYTES:
        logger.warning("Upload too large: %s bytes", len(contents))
        return JSONResponse(
            status_code=413,
            content={"status": "error", "message": "Image file too large (max 10MB)"}
        )

    try:
        result = await predict_disease(contents)
    except ValueError as exc:
        logger.warning("Corrupted image upload: %s", exc)
        return JSONResponse(
            status_code=400,
            content={"status": "error", "message": "Corrupted image file"}
        )
    except Exception:
        logger.exception("AI prediction failed")
        return JSONResponse(
            status_code=500,
            content={"status": "error", "message": "Prediction failed. Please try again."}
        )

    if result["confidence"] < 0.5:
        logger.info("Low confidence prediction: %s", result.get("confidence"))
        return JSONResponse(
            status_code=422,
            content={
                "status": "low_confidence",
                "message": "Low confidence prediction. Please upload a clearer leaf image."
            }
        )

    return result