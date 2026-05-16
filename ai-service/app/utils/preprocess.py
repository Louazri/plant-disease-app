
from future import annotations

from io import BytesIO
from typing import Tuple


from PIL import Image

import numpy as np

SUPPORTED_IMAGE_SUFFIXES = {".jpg", ".jpeg", ".png", ".webp"}
MAX_IMAGE_SIZE_MB = (1024, 1024)
MIN_CONFIDENCE = 0.70

def open_image(image_bytes: bytes) -> Image.Image:
	"""Open uploaded image bytes and normalize them to RGB."""

	if not image_bytes:
		raise ValueError("Empty image file provided")

	try:
		with Image.open(BytesIO(image_bytes)) as img:
			img = img.convert("RGB")
			img.thumbnail(MAX_IMAGE_SIZE_MB)
			return img
	except Exception as exc:  # pragma: no cover - Pillow error types vary
		raise ValueError("Unsupported or corrupted image file") from exc




