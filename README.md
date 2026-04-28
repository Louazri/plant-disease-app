# Plant Disease Detection Web Application

Monorepo for a PFE project: plant disease detection with a React frontend, Spring Boot API, and FastAPI AI service.

## Stack
- `frontend/`: React + Vite + Tailwind CSS
- `backend/`: Spring Boot + Spring Security + JWT + MySQL
- `ai-service/`: FastAPI (health endpoint; prediction endpoint required by backend)
- `docs/`: architecture, setup, API docs, troubleshooting, roadmap

## Quickstart (Docker)

```powershell
docker compose up --build
```

Stop the stack:

```powershell
docker compose down
```

## Service URLs (local)
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:8080`
- AI service: `http://localhost:8000`
- MySQL host port: `3307` (container uses `3306`)

## Environment Notes
- Copy `.env.example` to `.env` and update secrets.
- `VITE_API_BASE_URL` should include `/api` (example: `http://localhost:8080/api`).
- Cloudinary credentials are required for image upload in the backend.

## API Quick Reference
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/scan` (multipart form, `file`, JWT required)
- `GET /api/scan/history` (JWT required)

## Documentation
Start with `docs/README.md` for setup, architecture, and API details.
