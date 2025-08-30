# Contribution Guidelines

## Development Workflow

1. **Fork and Clone**: Fork the repository and clone it locally
2. **Install Dependencies**: Run `npm run install:all` to install all dependencies
3. **Create Branch**: Create a feature branch from `main`
4. **Develop**: Make your changes following the coding standards
5. **Test**: Ensure all tests pass with `npm test`
6. **Lint**: Fix any linting issues with `npm run lint`
7. **Commit**: Use conventional commit messages
8. **Push**: Push your branch and create a pull request

## Coding Standards

### General
- Use consistent indentation (2 spaces)
- Follow ESLint configurations
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

### Frontend (React)
- Use functional components with hooks
- Follow React best practices
- Use CSS modules or styled components for styling
- Write comprehensive tests with Vitest

### Backend (Node.js)
- Use async/await for asynchronous operations
- Implement proper error handling
- Follow RESTful API conventions
- Write tests for all endpoints

## Code Review Process

1. All code must be reviewed before merging
2. Ensure CI/CD checks pass
3. Address review feedback promptly
4. Maintain clean commit history

## Issue Reporting

When reporting issues:
- Use the issue template
- Provide clear reproduction steps
- Include environment details
- Add relevant screenshots or logs