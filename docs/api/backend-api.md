# Backend API

Base URL (local): `http://localhost:8080`

## Authentication Endpoints

### `POST /api/auth/register`

Create a new user.

Request body:

```json
{
  "username": "user1",
  "email": "user1@example.com",
  "password": "StrongPass123"
}
```

Response (200):

```json
{
  "token": null,
  "message": "User registered successfully"
}
```

### `POST /api/auth/login`

Authenticate existing user.

Request body:

```json
{
  "email": "user1@example.com",
  "password": "StrongPass123"
}
```

Response (200):

```json
{
  "token": null,
  "message": "Login successful"
}
```

## Notes

- JWT generation is not yet wired; `token` is currently `null`.
- Endpoints under `/api/auth/**` are public in current security config.

