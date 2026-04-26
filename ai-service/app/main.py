from fastapi import FastAPI

app = FastAPI(
    title="Plant Disease AI Service",
    description="Starter FastAPI service for model inference integration.",
    version="0.1.0",
)


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}

