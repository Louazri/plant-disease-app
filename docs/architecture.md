# System Architecture

## Overview

The project uses a service-oriented monorepo with three runtime services:

1. **Frontend** (`frontend/`): React app (Vite build), served by Nginx in Docker.
2. **Backend** (`backend/`): Spring Boot API handling authentication and business logic.
3. **AI Service** (`ai-service/`): FastAPI service for ML inference and health endpoints.

Persistence is handled by **MySQL**.

## Responsibilities by Service

### Frontend (React + Tailwind)

- Renders UI and sends API requests to backend.
- Uses `VITE_API_BASE_URL` to target backend.

### Backend (Spring Boot)

- Exposes auth endpoints under `/api/auth/**`.
- Validates requests and stores user data in MySQL.
- Applies security rules (auth endpoints public; others protected).
- Integrates with AI service through `AI_SERVICE_URL` (current integration placeholder).

### AI Service (FastAPI)

- Exposes `/health` endpoint.
- Will host disease prediction endpoints (next phase).

### Database (MySQL)

- Stores application data (users and future domain entities).
- Backend connects via service name `mysql` inside Docker network.

## Runtime Communication Flow

1. User accesses frontend (`:3000`).
2. Frontend calls backend (`:8080`).
3. Backend reads/writes MySQL (`mysql:3306`).
4. Backend can call AI service (`ai-service:8000`) for inference operations.

## Deployment View (Docker Compose)

- Single Docker network created by Compose.
- Health checks:
  - MySQL health check gates backend startup.
  - AI service health check gates backend startup.
- Frontend depends on backend startup.

## Architectural Notes for PFE

- Current implementation establishes base infrastructure and auth flow.
- Next major step is adding plant-image inference endpoints and model versioning.
- Add diagrams in `docs/diagrams/` and sequence diagrams in `docs/uml/` as implementation evolves.

