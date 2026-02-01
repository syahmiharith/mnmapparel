# API Overview

## Introduction

The MNM Apparel API is a RESTful API that provides access to the platform's core functionality.

## Base URL

- **Development**: `http://localhost:8000/api`
- **Production**: `https://api.mnmapparel.com/api`

## Authentication

All API requests require authentication using JWT (JSON Web Tokens).

### Obtaining a Token

```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "your-password"
}
```

Response:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer",
  "expires_in": 604800
}
```

### Using the Token

Include the token in the Authorization header:

```bash
GET /api/products
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Request/Response Format

### Request Headers

```
Content-Type: application/json
Authorization: Bearer <token>
Accept: application/json
```

### Response Format

Successful responses:
```json
{
  "data": { /* response data */ },
  "message": "Success",
  "status": 200
}
```

Error responses:
```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": { /* additional error details */ }
  },
  "status": 400
}
```

## HTTP Status Codes

- `200 OK` - Request succeeded
- `201 Created` - Resource created successfully
- `204 No Content` - Request succeeded with no response body
- `400 Bad Request` - Invalid request parameters
- `401 Unauthorized` - Authentication required
- `403 Forbidden` - Insufficient permissions
- `404 Not Found` - Resource not found
- `422 Unprocessable Entity` - Validation error
- `429 Too Many Requests` - Rate limit exceeded
- `500 Internal Server Error` - Server error

## Pagination

List endpoints support pagination:

```bash
GET /api/products?page=1&limit=20
```

Response includes pagination metadata:
```json
{
  "data": [ /* items */ ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "pages": 5
  }
}
```

## Filtering and Sorting

### Filtering

```bash
GET /api/products?category=shirts&price_min=20&price_max=50
```

### Sorting

```bash
GET /api/products?sort=price&order=desc
```

## Rate Limiting

- **Rate Limit**: 100 requests per minute
- **Burst**: 10 requests per second

Rate limit headers in response:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1704067200
```

## Versioning

The API uses URL versioning:

```
/api/v1/products
/api/v2/products
```

Current version: `v1` (default)

## CORS

Cross-Origin Resource Sharing (CORS) is enabled for:
- Development: `http://localhost:3000`
- Production: `https://mnmapparel.com`

## API Documentation

Interactive API documentation is available at:
- **Swagger UI**: `/docs`
- **ReDoc**: `/redoc`

## Support

For API support, contact: api@mnmapparel.com
