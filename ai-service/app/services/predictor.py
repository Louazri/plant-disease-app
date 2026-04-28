from PIL import Image
import io
from app.models.plant_model import predict

SOLUTIONS = {
    "Apple scab": {
        "chemical":   "Apply fungicides like captan or myclobutanil",
        "organic":    "Use neem oil spray, remove fallen leaves",
        "prevention": "Plant resistant varieties, ensure good air circulation"
    },
    "Black rot": {
        "chemical":   "Apply copper-based fungicide every 7-10 days",
        "organic":    "Remove infected fruit and leaves immediately",
        "prevention": "Prune dead wood, avoid wetting foliage"
    },
    "Cedar apple rust": {
        "chemical":   "Apply myclobutanil fungicide in spring",
        "organic":    "Remove nearby juniper plants if possible",
        "prevention": "Plant resistant apple varieties"
    },
    "Early blight": {
        "chemical":   "Apply copper-based fungicide every 7-10 days",
        "organic":    "Neem oil spray, remove infected leaves immediately",
        "prevention": "Avoid overhead watering, ensure good air circulation"
    },
    "Late blight": {
        "chemical":   "Apply chlorothalonil or mancozeb fungicide",
        "organic":    "Remove and destroy infected plants, apply copper spray",
        "prevention": "Plant resistant varieties, avoid wet foliage"
    },
    "Leaf mold": {
        "chemical":   "Apply chlorothalonil fungicide",
        "organic":    "Improve ventilation, reduce humidity",
        "prevention": "Avoid overhead watering, space plants well"
    },
    "Septoria leaf spot": {
        "chemical":   "Apply mancozeb or chlorothalonil fungicide",
        "organic":    "Remove infected leaves, apply copper spray",
        "prevention": "Avoid wetting leaves, rotate crops yearly"
    },
    "Bacterial spot": {
        "chemical":   "Copper-based bactericide spray",
        "organic":    "Remove infected leaves, avoid working with wet plants",
        "prevention": "Use disease-free seeds, rotate crops yearly"
    },
    "Powdery mildew": {
        "chemical":   "Apply sulfur-based fungicide",
        "organic":    "Neem oil spray, remove infected leaves",
        "prevention": "Ensure good air circulation, avoid overhead watering"
    },
    "Gray leaf spot": {
        "chemical":   "Apply strobilurin fungicide",
        "organic":    "Remove infected leaves, improve air circulation",
        "prevention": "Rotate crops, avoid overhead irrigation"
    },
    "Common rust": {
        "chemical":   "Apply fungicides containing azoxystrobin",
        "organic":    "Remove infected leaves early",
        "prevention": "Plant resistant varieties, monitor regularly"
    },
    "Northern leaf blight": {
        "chemical":   "Apply propiconazole fungicide",
        "organic":    "Remove crop debris, apply neem oil",
        "prevention": "Rotate crops, use resistant hybrids"
    },
    "Haunglongbing": {
        "chemical":   "No cure available, remove infected trees",
        "organic":    "Control Asian citrus psyllid with insecticidal soap",
        "prevention": "Use certified disease-free plants, monitor for psyllids"
    },
    "Healthy": {
        "chemical":   "No treatment needed",
        "organic":    "No treatment needed",
        "prevention": "Maintain current care routine"
    }
}

SEVERITY = {
    "Early blight":        "moderate",
    "Late blight":         "high",
    "Bacterial spot":      "moderate",
    "Septoria leaf spot":  "moderate",
    "Leaf mold":           "low",
    "Powdery mildew":      "moderate",
    "Black rot":           "high",
    "Apple scab":          "moderate",
    "Cedar apple rust":    "moderate",
    "Gray leaf spot":      "moderate",
    "Common rust":         "moderate",
    "Northern leaf blight":"moderate",
    "Haunglongbing":       "high",
    "Healthy":             "none"
}

async def predict_disease(file):
    contents = await file.read()
    img      = Image.open(io.BytesIO(contents))
    result   = predict(img)

    disease     = result["disease"]
    disease_key = disease.capitalize()

    solution = SOLUTIONS.get(disease_key, {
        "chemical":   "Consult a local agricultural expert",
        "organic":    "Remove affected parts and monitor plant",
        "prevention": "Maintain good plant hygiene"
    })
    severity = SEVERITY.get(disease_key, "moderate")

    return {
        "status":          "success",
        "plant":           result["plant"],
        "disease":         disease,
        "confidence":      result["confidence"],
        "severity":        severity,
        "solutions":       solution,
        "top_predictions": result["top_predictions"]
    }