# Integration Flow

## Current flow

1. Frontend sends auth requests to backend.
2. Backend validates input and interacts with MySQL.
3. AI service currently exposes only `/health` endpoint.

## Target flow for prediction

1. Frontend uploads plant image to backend.
2. Backend forwards processed payload to AI service `/predict`.
3. AI service returns class + confidence.
4. Backend persists history and returns normalized response to frontend.

## Integration considerations

- Add timeout/retry policy for backend to AI calls.
- Standardize response and error format between services.
- Track model version in prediction response for traceability.

