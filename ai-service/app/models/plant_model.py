import tensorflow as tf
import json
import numpy as np
from PIL import Image

model = None
class_indices = None
idx_to_class = None

def load_model():
    global model, class_indices, idx_to_class

    print("Loading model...")
    model = tf.keras.models.load_model("app/models/best_model.h5")

    with open("app/models/class_indices.json") as f:
        class_indices = json.load(f)

    idx_to_class = {v: k for k, v in class_indices.items()}
    print(f"Model loaded. Classes: {len(class_indices)}")

def predict(img: Image.Image):
    from tensorflow.keras.preprocessing.image import img_to_array

    img       = img.resize((224, 224))
    img_array = img_to_array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    predictions = model.predict(img_array, verbose=0)[0]
    top_indices = np.argsort(predictions)[::-1][:3]

    top_predictions = [
        {
            "disease": idx_to_class[i].split("___")[1].replace("_", " ").capitalize()
                       if "___" in idx_to_class[i]
                       else idx_to_class[i].replace("_", " ").capitalize(),
            "confidence": float(predictions[i])
        }
        for i in top_indices
    ]

    raw   = idx_to_class[top_indices[0]]
    parts = raw.split("___")

    if len(parts) == 2:
        plant   = parts[0].lower()
        disease = parts[1].replace("_", " ").capitalize().strip()
    else:
        plant   = "unknown"
        disease = parts[0].replace("_", " ").capitalize()

    return {
        "plant":           plant,
        "disease":         disease,
        "confidence":      float(predictions[top_indices[0]]),
        "top_predictions": top_predictions
    }