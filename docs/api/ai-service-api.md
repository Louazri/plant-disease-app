# AI Service API

Base URL (local): `http://localhost:8000`

## Health Endpoint

### `GET /health`

Health check endpoint used by Docker Compose.

Response (200):

```json
{
  "status": "ok"
}
```

## Planned endpoints (next phase)

- `POST /predict`
  - Accept plant image input.
  - Return predicted disease class and confidence.

