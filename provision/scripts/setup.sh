#!/bin/bash

# Setup script for MNM Apparel project
# This script installs all dependencies and sets up the development environment

set -e

echo "=========================================="
echo "MNM Apparel - Project Setup"
echo "=========================================="

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js >= 18.0.0"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Check for Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Python is not installed. Please install Python >= 3.11"
    exit 1
fi

echo "✅ Python version: $(python3 --version)"

# Install client dependencies
echo ""
echo "📦 Installing client dependencies..."
cd ../client
npm install
echo "✅ Client dependencies installed"

# Install server dependencies
echo ""
echo "📦 Installing server dependencies..."
cd ../server
if [ -f "requirements.txt" ]; then
    pip3 install -r requirements.txt
    echo "✅ Server dependencies installed"
elif [ -f "package.json" ]; then
    npm install
    echo "✅ Server dependencies installed"
fi

# Create .env files from examples
echo ""
echo "🔧 Setting up environment files..."
cd ../server
if [ -f ".env.example" ] && [ ! -f ".env" ]; then
    cp .env.example .env
    echo "✅ Created server/.env from .env.example"
fi

cd ../client
if [ -f ".env.example" ] && [ ! -f ".env.local" ]; then
    cp .env.example .env.local
    echo "✅ Created client/.env.local from .env.example"
fi

echo ""
echo "=========================================="
echo "✅ Setup completed successfully!"
echo "=========================================="
echo ""
echo "Next steps:"
echo "  1. Update .env files with your configuration"
echo "  2. Start the development servers:"
echo "     - Client: cd client && npm run dev"
echo "     - Server: cd server && uvicorn main:app --reload"
echo "  3. Visit http://localhost:3000 to see your app"
echo ""
