# MNM Apparel - Project Structure Summary

This document provides a quick reference to the project structure and where to find things.

## 📁 Quick Navigation

### Need to work on the Frontend?
👉 Go to [`client/`](../client/README.md)

### Need to work on the Backend?
👉 Go to [`server/`](../server/README.md)

### Need to set up CI/CD or Docker?
👉 Go to [`provision/`](../provision/README.md)

### Need documentation?
👉 Go to [`docs/`](../docs/README.md)

## 🚀 Quick Start Commands

```bash
# First time setup
make setup

# Start development servers
make dev

# Run tests
make test

# Build for production
make build

# View all available commands
make help
```

## 📂 Directory Tree

```
mnmapparel/
├── client/           # Frontend (Next.js + React)
│   ├── src/
│   │   ├── app/      # Next.js app directory
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── utils/
│   └── package.json
│
├── server/           # Backend (FastAPI + Python)
│   ├── config/       # Configuration
│   ├── controllers/  # Request handlers
│   ├── models/       # Database models
│   ├── routes/       # API routes
│   ├── middleware/   # Custom middleware
│   └── main.py
│
├── provision/        # DevOps & Automation
│   ├── scripts/      # Automation scripts
│   ├── docker/       # Docker configs
│   ├── ci/           # CI/CD pipelines
│   └── tests/        # Integration tests
│
├── docs/            # Documentation
│   ├── api/         # API documentation
│   ├── architecture/# System design docs
│   └── guides/      # How-to guides
│
├── docker-compose.yml
├── Makefile
└── README.md
```

## 🔑 Key Files

| File | Description |
|------|-------------|
| `README.md` | Project overview and quick start |
| `Makefile` | Convenient commands for common tasks |
| `docker-compose.yml` | Multi-container orchestration |
| `client/package.json` | Frontend dependencies |
| `server/requirements.txt` | Backend dependencies |
| `server/main.py` | Backend entry point |
| `provision/scripts/setup.sh` | Automated project setup |

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 15
- **Library**: React 18
- **Language**: TypeScript

### Backend
- **Framework**: FastAPI
- **Language**: Python 3.11+
- **Database**: PostgreSQL 15

### DevOps
- **Container**: Docker
- **CI/CD**: GitHub Actions
- **Orchestration**: Docker Compose

## 📚 Documentation Structure

| Document | Purpose |
|----------|---------|
| [Getting Started](guides/getting-started.md) | Setup and installation |
| [API Overview](api/overview.md) | API documentation |
| [System Overview](architecture/system-overview.md) | Architecture details |
| [Tech Stack](architecture/tech-stack.md) | Technology choices |
| [Contributing](guides/contributing.md) | Contribution guidelines |

## 🔐 Environment Setup

1. **Client** - Create `client/.env.local`:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```

2. **Server** - Create `server/.env`:
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/mnmapparel
   JWT_SECRET=your-secure-secret-here
   ```

## 🐳 Docker Setup

```bash
# Development
docker-compose -f provision/docker/docker-compose.dev.yml up

# Production
docker-compose up
```

## 🧪 Testing

```bash
# All tests
make test

# Frontend only
cd client && npm test

# Backend only
cd server && pytest
```

## 📞 Getting Help

- 📖 Check the [Documentation](../docs/README.md)
- 🐛 [Report Issues](https://github.com/syahmiharith/mnmapparel/issues)
- 📧 Email: support@mnmapparel.com

## 🎯 Common Tasks

### Add a new API endpoint
1. Create route in `server/routes/`
2. Add controller in `server/controllers/`
3. Update API docs

### Add a new React component
1. Create component in `client/src/components/`
2. Import and use in pages
3. Add styles if needed

### Add a new database model
1. Create model in `server/models/`
2. Create migration with Alembic
3. Update schemas

### Deploy the application
1. Build Docker images: `make build`
2. Push to registry
3. Deploy using CI/CD pipeline

## 📝 Best Practices

✅ Follow the existing code structure
✅ Write tests for new features
✅ Update documentation
✅ Use meaningful commit messages
✅ Keep dependencies updated
✅ Never commit secrets or credentials

## 🚧 Development Workflow

1. Create feature branch
2. Make changes
3. Run tests: `make test`
4. Run linters: `make lint`
5. Commit changes
6. Push and create PR
7. Wait for CI checks
8. Merge when approved

---

**Last Updated**: 2026-02-01

For detailed information, see the [main README](../README.md) or specific component documentation.
