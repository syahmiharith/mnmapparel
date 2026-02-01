from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config.settings import settings

app = FastAPI(
    title="MNM Apparel API",
    description="Backend API for MNM Apparel",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "message": "MNM Apparel API is running"
    }

@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "Welcome to MNM Apparel API",
        "docs": "/docs",
        "redoc": "/redoc"
    }

# Import and include routers
# from routes import auth, products, users
# app.include_router(auth.router, prefix="/api/auth", tags=["authentication"])
# app.include_router(products.router, prefix="/api/products", tags=["products"])
# app.include_router(users.router, prefix="/api/users", tags=["users"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )
