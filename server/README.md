# Server - Backend Application

This directory contains the backend API for MNM Apparel.

## Technology Stack

- **Framework**: FastAPI / Express.js (choose based on preference)
- **Language**: Python 3.11+ / Node.js 18+
- **Database**: PostgreSQL / MongoDB (to be configured)
- **Authentication**: JWT

## Project Structure

```
server/
├── routes/             # API route definitions
├── controllers/        # Request handlers and business logic
├── models/            # Data models and schemas
├── middleware/        # Custom middleware (auth, logging, etc.)
├── config/            # Configuration files
├── utils/             # Utility functions and helpers
├── requirements.txt   # Python dependencies (or package.json for Node.js)
├── .env.example       # Example environment variables
└── main.py           # Application entry point (or server.js)
```

## Getting Started (Python/FastAPI)

### Prerequisites

- Python >= 3.11
- pip or poetry

### Installation

```bash
cd server
pip install -r requirements.txt
# or
poetry install
```

### Development

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at `http://localhost:8000`

### API Documentation

Once running, visit:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## Getting Started (Node.js/Express)

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

```bash
cd server
npm install
```

### Development

```bash
npm run dev
```

## Environment Variables

Create a `.env` file in the server directory:

```env
# Application
NODE_ENV=development
PORT=8000

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/mnmapparel
# or
MONGODB_URI=mongodb://localhost:27017/mnmapparel

# JWT
JWT_SECRET=your-secret-key
JWT_EXPIRATION=7d

# CORS
ALLOWED_ORIGINS=http://localhost:3000
```

## API Endpoints

### Health Check
- `GET /health` - Check API status

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh token

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

## Development Guidelines

### Code Structure

- Use MVC pattern (Model-View-Controller)
- Keep controllers thin, business logic in services
- Use dependency injection where appropriate
- Follow RESTful API conventions

### Naming Conventions

- **Files**: snake_case (e.g., `user_controller.py`)
- **Classes**: PascalCase (e.g., `UserController`)
- **Functions**: snake_case (e.g., `get_user_by_id`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `DATABASE_URL`)

### Error Handling

- Use proper HTTP status codes
- Return consistent error responses
- Log errors appropriately
- Never expose sensitive information in errors

### Security

- Validate all input data
- Sanitize user inputs
- Use parameterized queries
- Implement rate limiting
- Use HTTPS in production

## Testing

```bash
pytest tests/
# or
npm test
```

## Contributing

1. Create a feature branch
2. Write tests for new features
3. Ensure all tests pass
4. Update API documentation
5. Submit a pull request
