# Demo Script (PFE)

## Goal

Show end-to-end flow from user action to backend and AI service interaction.

## Demo steps

1. **Architecture intro**
   - Explain frontend, backend, AI service, and MySQL roles.
2. **Run the stack**
   - `docker compose up --build`
   - Show all containers healthy.
3. **Auth flow**
   - Register a user via `/api/auth/register`.
   - Login via `/api/auth/login`.
4. **AI service health**
   - Call `GET /health` on AI service.
5. **Frontend overview**
   - Show UI and planned prediction workflow.
6. **Roadmap close**
   - Present next implementation milestones and testing plan.

## Suggested live commands

```powershell
docker compose ps
docker compose logs --tail=50
```

## Risks during demo

- Port conflicts on host machine.
- Slow first image build.
- Missing environment values.

Prepare fallback:
- Keep stack prebuilt before presentation.
- Have screenshots for key pages and logs.

