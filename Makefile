.PHONY: help setup dev build test lint clean docker-up docker-down

# Colors for output
BLUE := \033[0;34m
GREEN := \033[0;32m
RESET := \033[0m

help: ## Show this help message
	@echo "$(BLUE)MNM Apparel - Available Commands$(RESET)"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(GREEN)%-15s$(RESET) %s\n", $$1, $$2}'
	@echo ""

setup: ## Initial project setup
	@echo "$(BLUE)Setting up the project...$(RESET)"
	@chmod +x provision/scripts/setup.sh
	@./provision/scripts/setup.sh

dev: ## Start development servers
	@echo "$(BLUE)Starting development servers...$(RESET)"
	@docker-compose -f provision/docker/docker-compose.dev.yml up

dev-client: ## Start only the client development server
	@echo "$(BLUE)Starting client development server...$(RESET)"
	@cd client && npm run dev

dev-server: ## Start only the server development server
	@echo "$(BLUE)Starting server development server...$(RESET)"
	@cd server && uvicorn main:app --reload --host 0.0.0.0 --port 8000

build: ## Build production images
	@echo "$(BLUE)Building production images...$(RESET)"
	@docker-compose build

build-client: ## Build client for production
	@echo "$(BLUE)Building client...$(RESET)"
	@cd client && npm run build

test: ## Run all tests
	@echo "$(BLUE)Running all tests...$(RESET)"
	@$(MAKE) test-client
	@$(MAKE) test-server

test-client: ## Run client tests
	@echo "$(BLUE)Running client tests...$(RESET)"
	@cd client && npm test

test-server: ## Run server tests
	@echo "$(BLUE)Running server tests...$(RESET)"
	@cd server && pytest

lint: ## Run linters
	@echo "$(BLUE)Running linters...$(RESET)"
	@$(MAKE) lint-client
	@$(MAKE) lint-server

lint-client: ## Lint client code
	@echo "$(BLUE)Linting client code...$(RESET)"
	@cd client && npm run lint

lint-server: ## Lint server code
	@echo "$(BLUE)Linting server code...$(RESET)"
	@cd server && flake8 . && black --check .

format: ## Format code
	@echo "$(BLUE)Formatting code...$(RESET)"
	@cd server && black .
	@cd client && npm run lint -- --fix

clean: ## Clean up generated files
	@echo "$(BLUE)Cleaning up...$(RESET)"
	@rm -rf client/node_modules client/.next
	@rm -rf server/__pycache__ server/*.pyc
	@find . -type d -name "__pycache__" -exec rm -rf {} +
	@find . -type f -name "*.pyc" -delete

docker-up: ## Start all services with Docker
	@echo "$(BLUE)Starting Docker services...$(RESET)"
	@docker-compose up -d

docker-down: ## Stop all Docker services
	@echo "$(BLUE)Stopping Docker services...$(RESET)"
	@docker-compose down

docker-logs: ## View Docker logs
	@docker-compose logs -f

docker-rebuild: ## Rebuild and restart Docker services
	@echo "$(BLUE)Rebuilding Docker services...$(RESET)"
	@docker-compose down
	@docker-compose build --no-cache
	@docker-compose up -d

install: ## Install dependencies
	@echo "$(BLUE)Installing dependencies...$(RESET)"
	@cd client && npm install
	@cd server && pip install -r requirements.txt

db-migrate: ## Run database migrations
	@echo "$(BLUE)Running database migrations...$(RESET)"
	@cd server && alembic upgrade head

db-reset: ## Reset database
	@echo "$(BLUE)Resetting database...$(RESET)"
	@docker-compose down -v
	@docker-compose up -d db
	@sleep 3
	@$(MAKE) db-migrate

docs-serve: ## Serve documentation locally
	@echo "$(BLUE)Serving documentation...$(RESET)"
	@cd docs && python -m http.server 8080

.DEFAULT_GOAL := help
