# MNM Apparel - Contributing Guide

Thank you for considering contributing to MNM Apparel! This document provides guidelines for contributing to the project.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- Clear and descriptive title
- Detailed description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Environment details (OS, Node version, Python version)

### Suggesting Features

Feature suggestions are welcome! Please:

- Use a clear and descriptive title
- Provide detailed description of the feature
- Explain why this feature would be useful
- Include examples if possible

### Pull Requests

1. **Fork the repository**

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Write clean, maintainable code
   - Follow existing code style
   - Add tests for new features
   - Update documentation as needed

4. **Test your changes**
   ```bash
   make test
   make lint
   ```

5. **Commit your changes**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
   
   Follow [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting)
   - `refactor:` - Code refactoring
   - `test:` - Adding tests
   - `chore:` - Maintenance tasks

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Provide clear description of changes
   - Reference any related issues
   - Ensure CI checks pass

## Development Setup

See [Getting Started Guide](getting-started.md) for setup instructions.

## Code Style

### Python (Backend)

- Follow PEP 8
- Use type hints
- Use `black` for formatting
- Use `flake8` for linting
- Maximum line length: 100 characters

### TypeScript/JavaScript (Frontend)

- Follow ESLint configuration
- Use TypeScript for type safety
- Use functional components with hooks
- Use meaningful variable names
- Add JSDoc comments for complex functions

### General

- Write self-documenting code
- Add comments for complex logic
- Keep functions small and focused
- Use meaningful commit messages

## Testing

- Write tests for new features
- Ensure all tests pass before submitting PR
- Aim for high test coverage
- Include both unit and integration tests

## Documentation

- Update README if needed
- Add/update API documentation
- Include code examples
- Keep documentation up to date

## Questions?

Feel free to ask questions by:
- Opening an issue
- Joining our community chat
- Emailing the maintainers

Thank you for contributing! 🎉
