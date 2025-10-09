# Contributing Guide

Thank you for contributing to Stoa of Attalos! This guide will help you get started.

## Development Environment

### Using Dev Containers (Recommended)

The fastest way to get a consistent development environment:

1. Install Docker Desktop and VS Code Dev Containers extension
2. Open the project in VS Code
3. Click "Reopen in Container"
4. Everything is configured automatically!

### Local Development

If you prefer to develop locally:

```bash
# Clone the repository
git clone <repository-url>
cd stoa-of-attalos

# Install dependencies
npm install

# Verify installation
npm run lint
npm run typecheck
npm test
```

## Workflow

1. **Create a branch** from `develop`:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our code standards

3. **Run checks locally** before committing:

   ```bash
   npm run lint        # Check for linting errors
   npm run format      # Auto-format code
   npm run typecheck   # Check types
   npm test            # Run tests
   ```

4. **Commit your changes** with clear messages:

   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

5. **Push and create a pull request**:
   ```bash
   git push origin feature/your-feature-name
   ```

## Code Standards

### TypeScript

- Use TypeScript for all new code
- Enable strict mode
- Avoid `any` types when possible
- Use descriptive variable names

### Formatting

- Code is automatically formatted with Prettier on save (in Dev Container)
- Run `npm run format` before committing
- 2 spaces for indentation
- Single quotes for strings
- Semicolons required

### Linting

- ESLint checks run automatically in CI
- Fix issues with `npm run lint`
- No unused variables or imports
- Use `_` prefix for intentionally unused parameters

### Testing

- Write tests for new features
- Use Vitest for testing
- Aim for good test coverage
- Run `npm test` before committing

## Commit Messages

Follow conventional commit format:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:

```
feat: add student progress tracking
fix: resolve login authentication issue
docs: update README with setup instructions
```

## Pull Request Process

1. Ensure all CI checks pass
2. Update documentation if needed
3. Add tests for new features
4. Request review from maintainers
5. Address review feedback
6. Squash commits if requested

## Project Structure

```
.
├── apps/           # Application packages
├── packages/       # Shared packages
├── teacher/        # Teacher resources
│   ├── hints-*.md      # Student hints
│   ├── rubric-*.md     # Grading rubrics
│   └── solutions/      # Reference solutions
├── tests/          # Test files
└── scripts/        # Build scripts
```

## Adding Teacher Resources

When adding new teacher materials:

1. Use consistent naming: `hints-a1s1.md`, `rubric-a1s1.md`
2. Place solutions in `teacher/solutions/`
3. Include clear documentation
4. Add tests if applicable

## Questions?

- Check existing issues and discussions
- Ask in pull request comments
- Reach out to maintainers

Thank you for contributing! 🎉
