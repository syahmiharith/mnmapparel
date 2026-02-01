# System Architecture

## Overview

MNM Apparel follows a modern full-stack architecture with clear separation of concerns between the frontend, backend, and data layers.

## High-Level Architecture

```
┌─────────────────┐
│   Client (Web)  │
│   React/Next.js │
└────────┬────────┘
         │ HTTP/REST
         │
┌────────▼────────┐
│   API Gateway   │
│   (Optional)    │
└────────┬────────┘
         │
┌────────▼────────┐
│  Backend API    │
│  FastAPI/Python │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
┌───▼──┐  ┌──▼────┐
│  DB  │  │ Cache │
│ PG   │  │ Redis │
└──────┘  └───────┘
```

## Component Architecture

### Frontend (Client)

**Technology**: Next.js 14, React 18, TypeScript

**Architecture Pattern**: Component-based architecture

```
client/
├── src/
│   ├── app/           # Next.js App Router
│   ├── components/    # Reusable UI components
│   │   ├── common/   # Shared components
│   │   ├── layout/   # Layout components
│   │   └── features/ # Feature-specific components
│   ├── hooks/        # Custom React hooks
│   ├── utils/        # Utility functions
│   ├── services/     # API service layer
│   └── types/        # TypeScript type definitions
```

**Key Features**:
- Server-side rendering (SSR)
- Static site generation (SSG)
- API routes
- Optimized image loading
- Code splitting

### Backend (Server)

**Technology**: FastAPI, Python 3.11+, SQLAlchemy

**Architecture Pattern**: Layered architecture (MVC-like)

```
server/
├── routes/        # API endpoints (Controllers)
├── controllers/   # Business logic handlers
├── models/       # Database models (ORM)
├── schemas/      # Pydantic schemas
├── services/     # Business logic layer
├── middleware/   # Custom middleware
└── config/       # Configuration management
```

**Layers**:

1. **Routes Layer** - HTTP endpoint definitions
2. **Controllers Layer** - Request/response handling
3. **Services Layer** - Business logic
4. **Models Layer** - Data persistence
5. **Middleware Layer** - Cross-cutting concerns

### Database

**Primary Database**: PostgreSQL 15

**Schema Design**:

```
users
├── id (PK)
├── email
├── password_hash
├── created_at
└── updated_at

products
├── id (PK)
├── name
├── description
├── price
├── category_id (FK)
└── created_at

categories
├── id (PK)
├── name
└── description

orders
├── id (PK)
├── user_id (FK)
├── total_amount
├── status
└── created_at
```

## Communication Flow

### User Request Flow

1. **User Action** - User interacts with the UI
2. **Client Request** - Next.js sends HTTP request to API
3. **Authentication** - JWT token validated
4. **Route Handler** - Request routed to appropriate endpoint
5. **Business Logic** - Service layer processes request
6. **Data Layer** - Database query/update via ORM
7. **Response** - JSON response sent back to client
8. **UI Update** - React updates the UI

### Authentication Flow

```
1. User Login
   ↓
2. Server validates credentials
   ↓
3. Generate JWT token
   ↓
4. Return token to client
   ↓
5. Client stores token (httpOnly cookie)
   ↓
6. Include token in subsequent requests
   ↓
7. Server validates token on each request
```

## Security Architecture

### Security Layers

1. **Transport Security**
   - HTTPS/TLS encryption
   - Secure headers (HSTS, CSP)

2. **Authentication**
   - JWT-based authentication
   - Secure password hashing (bcrypt)
   - Token refresh mechanism

3. **Authorization**
   - Role-based access control (RBAC)
   - Permission validation

4. **Data Protection**
   - Input validation
   - SQL injection prevention (ORM)
   - XSS protection
   - CSRF protection

5. **Rate Limiting**
   - API rate limiting
   - DDoS protection

## Scalability Considerations

### Horizontal Scaling

- **Frontend**: Deploy multiple Next.js instances behind load balancer
- **Backend**: Multiple API server instances
- **Database**: Read replicas for read-heavy operations

### Caching Strategy

```
Browser Cache
    ↓
CDN Cache (Static Assets)
    ↓
Application Cache (Redis)
    ↓
Database Query Cache
    ↓
Database
```

### Performance Optimizations

- Database indexing
- Query optimization
- Connection pooling
- Asset minification
- Image optimization
- Lazy loading

## Deployment Architecture

### Development Environment

```
Developer Machine
└── Docker Compose
    ├── Next.js Container
    ├── FastAPI Container
    └── PostgreSQL Container
```

### Production Environment

```
Cloud Provider (AWS/Azure/GCP)
├── Load Balancer
├── Frontend Servers (Next.js)
├── Backend Servers (FastAPI)
├── Database (Managed PostgreSQL)
├── Cache (Redis)
└── Storage (S3/Cloud Storage)
```

## Monitoring and Observability

### Metrics

- Application performance metrics
- Database query performance
- API response times
- Error rates

### Logging

- Structured logging (JSON)
- Centralized log aggregation
- Log levels (DEBUG, INFO, WARNING, ERROR)

### Alerting

- Uptime monitoring
- Error rate alerts
- Performance degradation alerts

## Technology Stack Summary

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | Next.js, React, TypeScript | Web application |
| Backend | FastAPI, Python | REST API |
| Database | PostgreSQL | Data persistence |
| Cache | Redis | Performance optimization |
| Container | Docker | Containerization |
| Orchestration | Docker Compose / Kubernetes | Container orchestration |
| CI/CD | GitHub Actions | Automation |
| Hosting | Cloud Provider | Production deployment |

## Future Considerations

- Microservices architecture
- GraphQL API layer
- Real-time features (WebSocket)
- Message queue (RabbitMQ/Kafka)
- Search engine (Elasticsearch)
- Mobile application
