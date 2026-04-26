# Plant Disease Detection Web Application

Starter monorepo structure for a graduation project (PFE).

## Modules
- `frontend/`: React + Tailwind CSS
- `backend/`: Spring Boot + MySQL + JWT
- `ai-service/`: FastAPI + TensorFlow/Keras
- `docs/`: UML, architecture diagrams, notes, and documentation

## Quick Structure
- `frontend/src/`
- `backend/src/main/java/com/plantdisease/`
- `backend/src/main/resources/`
- `ai-service/app/`
- `docs/uml/`, `docs/diagrams/`, `docs/notes/`

## Run everything with Docker

Each service now has its own container definition and the root `docker-compose.yml` starts the full stack:

- `frontend` on http://localhost:3000
- `backend` on http://localhost:8080
- `ai-service` on http://localhost:8000
- `mysql` on port 3306

### Start the stack

```powershell
docker compose up --build
```

### Stop the stack

```powershell
docker compose down
```

### Notes

- The backend connects to MySQL using the Docker service name `mysql`.
- The backend also has an `AI_SERVICE_URL` placeholder pointing to `http://ai-service:8000`.
- The frontend image is built with Vite and served through Nginx for a production-style container.

