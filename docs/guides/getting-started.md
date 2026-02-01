# Getting Started

This guide will help you set up the MNM Apparel project on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 18.0.0
- **Python** >= 3.11
- **PostgreSQL** >= 14 (or MongoDB)
- **Git**
- **Docker** (optional, for containerized development)

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/syahmiharith/mnmapparel.git
cd mnmapparel
```

### 2. Run the Setup Script

```bash
cd provision/scripts
chmod +x setup.sh
./setup.sh
```

This will:
- Install all dependencies
- Create environment files from examples
- Set up the database

### 3. Configure Environment Variables

#### Client (.env.local)

```bash
cd client
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_NAME=MNM Apparel
```

#### Server (.env)

```bash
cd ../server
cp .env.example .env
```

Edit `.env`:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/mnmapparel
JWT_SECRET=your-secure-random-secret
ALLOWED_ORIGINS=http://localhost:3000
```

### 4. Start the Development Servers

#### Using Docker (Recommended)

```bash
cd provision/docker
docker-compose -f docker-compose.dev.yml up
```

#### Manual Start

**Terminal 1 - Backend:**
```bash
cd server
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```

### 5. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs

## Project Structure

```
mnmapparel/
├── client/              # Frontend application
│   ├── src/
│   │   ├── app/        # Next.js app directory
│   │   ├── components/ # React components
│   │   ├── styles/     # CSS styles
│   │   └── utils/      # Utility functions
│   └── package.json
├── server/              # Backend API
│   ├── routes/         # API routes
│   ├── controllers/    # Request handlers
│   ├── models/        # Data models
│   ├── config/        # Configuration
│   └── requirements.txt
├── provision/           # DevOps and automation
│   ├── scripts/       # Automation scripts
│   ├── tests/         # Integration tests
│   ├── ci/            # CI/CD configs
│   └── docker/        # Docker files
└── docs/               # Documentation
    ├── api/           # API docs
    ├── architecture/  # Architecture docs
    └── guides/        # User guides
```

## Development Workflow

### Creating a New Feature

1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes

3. Run tests:
   ```bash
   # Frontend tests
   cd client && npm test
   
   # Backend tests
   cd server && pytest
   ```

4. Commit your changes:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. Push and create a pull request:
   ```bash
   git push origin feature/your-feature-name
   ```

## Common Commands

### Frontend

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm test         # Run tests
```

### Backend

```bash
uvicorn main:app --reload  # Start dev server
pytest                      # Run tests
black .                     # Format code
flake8 .                    # Lint code
```

### Docker

```bash
docker-compose up          # Start all services
docker-compose down        # Stop all services
docker-compose logs -f     # View logs
docker-compose build       # Rebuild containers
```

## Troubleshooting

### Port Already in Use

If ports 3000 or 8000 are already in use:

```bash
# Find and kill the process
lsof -ti:3000 | xargs kill
lsof -ti:8000 | xargs kill
```

### Database Connection Issues

1. Ensure PostgreSQL is running:
   ```bash
   sudo service postgresql status
   ```

2. Check database credentials in `.env`

3. Create the database if it doesn't exist:
   ```bash
   psql -U postgres
   CREATE DATABASE mnmapparel;
   ```

### Module Not Found Errors

```bash
# Reinstall dependencies
cd client && rm -rf node_modules && npm install
cd ../server && pip install -r requirements.txt
```

## Next Steps

- Read the [Development Workflow](development-workflow.md) guide
- Check out the [API Documentation](../api/overview.md)
- Review the [Contributing Guidelines](contributing.md)
- Explore the [Architecture Documentation](../architecture/system-overview.md)

## Getting Help

- Check the documentation in the [docs](../README.md) directory
- Review [existing issues](https://github.com/syahmiharith/mnmapparel/issues)
- Contact: support@mnmapparel.com
