# MNM Apparel

Landing page and e-commerce platform for MNM Apparel.

## Project Structure

This repository follows a best-practice modular architecture with distinct compartments:

```
mnmapparel/
├── client/           # Frontend Application (Next.js + React)
├── server/           # Backend API (FastAPI + Python)
├── provision/        # DevOps, Scripts, Testing & Automation
├── docs/             # Documentation
├── docker-compose.yml
├── Makefile
└── README.md
```

### Directory Overview

####  **client/** - Frontend Application
Modern React-based frontend using Next.js 15 with TypeScript.

- **Technology**: Next.js, React, TypeScript
- **Features**: SSR, SSG, API routes, optimized performance
- [📖 Client Documentation](client/README.md)

####  **server/** - Backend API
RESTful API built with FastAPI and Python.

- **Technology**: FastAPI, Python 3.11+, SQLAlchemy
- **Features**: Auto-generated docs, async support, type safety
- [ Server Documentation](server/README.md)

####  **provision/** - DevOps & Automation
Infrastructure as code, CI/CD pipelines, testing utilities, and Docker configurations.

- **Includes**: Docker configs, CI/CD pipelines, automation scripts, tests
- [ Provision Documentation](provision/README.md)

####  **docs/** - Documentation
Comprehensive project documentation including API specs, architecture, and guides.

- **Includes**: API docs, architecture diagrams, developer guides
- [ Documentation Index](docs/README.md)

##  Quick Start

### Prerequisites

- Node.js >= 18.0.0
- Python >= 3.11
- Docker (optional, but recommended)

### Option 1: Docker (Recommended)

```bash
# Start all services with Docker Compose
docker-compose up -d

# Access the applications
# Frontend: http://localhost:3000
# Backend: http://localhost:8000
# API Docs: http://localhost:8000/docs
```

### Option 2: Manual Setup

```bash
# Run the setup script
cd provision/scripts
chmod +x setup.sh
./setup.sh

# Start the backend (Terminal 1)
cd server
uvicorn main:app --reload

# Start the frontend (Terminal 2)
cd client
npm run dev
```

##  Documentation

- [Getting Started Guide](docs/guides/getting-started.md)
- [API Documentation](docs/api/overview.md)
- [System Architecture](docs/architecture/system-overview.md)
- [Development Workflow](docs/guides/development-workflow.md)

##  Development

### Common Commands

Using the Makefile for convenience:

```bash
make setup          # Initial project setup
make dev            # Start development servers
make test           # Run all tests
make lint           # Run linters
make build          # Build for production
make clean          # Clean up generated files
```

### Running Tests

```bash
# Frontend tests
cd client && npm test

# Backend tests
cd server && pytest

# Integration tests
cd provision/tests && pytest
```

##  Architecture

```
┌─────────────┐
│   Client    │  Next.js Frontend (Port 3000)
│  (Next.js)  │
└──────┬──────┘
       │ HTTP/REST
       │
┌──────▼──────┐
│   Server    │  FastAPI Backend (Port 8000)
│  (FastAPI)  │
└──────┬──────┘
       │
┌──────▼──────┐
│  Database   │  PostgreSQL
│    (PG)     │
└─────────────┘
```

##  Environment Variables

Create `.env` files in the respective directories:

**client/.env.local**
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

**server/.env**
```env
DATABASE_URL=postgresql://user:password@localhost:5432/mnmapparel
JWT_SECRET=your-secret-key
```

##  Tech Stack

### Frontend
- **Framework**: Next.js 14
- **UI Library**: React 18
- **Language**: TypeScript
- **Styling**: CSS Modules

### Backend
- **Framework**: FastAPI
- **Language**: Python 3.11+
- **ORM**: SQLAlchemy
- **Database**: PostgreSQL

### DevOps
- **Containerization**: Docker
- **Orchestration**: Docker Compose
- **CI/CD**: GitHub Actions
- **Testing**: Pytest, Jest

##  Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

See [Contributing Guidelines](docs/guides/contributing.md) for more details.

##  License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file.

##  Contact

For questions or support, please contact:
- Email: support@mnmapparel.com
- Website: https://mnmapparel.com

##  Acknowledgments

Built with modern best practices and industry-standard tools. 
