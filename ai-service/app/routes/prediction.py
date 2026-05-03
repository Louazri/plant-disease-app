from fastapi import APIRouter, UploadFile, File
from app.services.predictor import predict_disease

router = APIRouter()

@router.post("/predict")
async def predict(file: UploadFile = File(...)):
    result = await predict_disease(file)
    return result