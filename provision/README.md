# Provision - Scripts, Automation, and Testing

This directory contains infrastructure provisioning, automation scripts, CI/CD configurations, and testing utilities.

## Directory Structure

```
provision/
├── scripts/           # Automation and utility scripts
├── tests/            # Integration and E2E tests
├── ci/               # CI/CD pipeline configurations
└── docker/           # Docker configurations
```

## Scripts

The `scripts/` directory contains automation scripts for:

- **setup.sh** - Initial project setup and dependencies installation
- **deploy.sh** - Deployment automation
- **backup.sh** - Database backup utilities
- **seed.sh** - Database seeding scripts

### Running Scripts

```bash
cd provision/scripts
chmod +x script-name.sh
./script-name.sh
```

## Testing

### Test Types

1. **Unit Tests** - Located in respective `client/` and `server/` directories
2. **Integration Tests** - Located in `provision/tests/integration/`
3. **E2E Tests** - Located in `provision/tests/e2e/`

### Running Tests

```bash
# Run all tests
npm run test:all

# Run integration tests
npm run test:integration

# Run E2E tests
npm run test:e2e
```

## CI/CD

The `ci/` directory contains configurations for:

- **GitHub Actions** - `.github/workflows/`
- **GitLab CI** - `.gitlab-ci.yml`
- **Jenkins** - Jenkinsfile
- **Circle CI** - `.circleci/config.yml`

### CI Pipeline Stages

1. **Lint** - Code quality checks
2. **Test** - Run test suites
3. **Build** - Build applications
4. **Security Scan** - Vulnerability scanning
5. **Deploy** - Deploy to staging/production

## Docker

The `docker/` directory contains:

- **Dockerfile.client** - Frontend container
- **Dockerfile.server** - Backend container
- **docker-compose.yml** - Multi-container setup
- **docker-compose.dev.yml** - Development environment

### Docker Commands

```bash
# Build containers
docker-compose build

# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f
```

## Environment Setup

### Development Environment

```bash
# Install all dependencies
./scripts/setup.sh

# Start development servers
docker-compose -f docker-compose.dev.yml up
```

### Production Environment

```bash
# Build production images
docker-compose -f docker-compose.yml build

# Deploy
./scripts/deploy.sh production
```

## Monitoring and Logging

- **Health Checks** - Automated health monitoring
- **Log Aggregation** - Centralized logging
- **Performance Monitoring** - APM integration
- **Error Tracking** - Sentry/Rollbar integration

## Security

### Security Practices

- Secrets management with environment variables
- Container image scanning
- Dependency vulnerability scanning
- HTTPS/TLS enforcement
- Regular security audits

### Running Security Scans

```bash
# Scan dependencies
npm audit
pip-audit

# Scan Docker images
docker scan mnmapparel-client
docker scan mnmapparel-server
```

## Backup and Recovery

### Database Backup

```bash
./scripts/backup.sh
```

Backups are stored in `./backups/` directory

### Restore from Backup

```bash
./scripts/restore.sh backup-file.sql
```

## Performance Testing

```bash
# Load testing
npm run test:load

# Stress testing
npm run test:stress
```

## Contributing

1. Add tests for new features
2. Update CI pipeline if needed
3. Document new scripts
4. Test in isolated environment
5. Submit pull request
