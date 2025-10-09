# Stoa of Attalos - Teacher Packs

A monorepo for trade journal course materials and teacher resources.

## Quick Start

### Option 1: Dev Container (Recommended)

The easiest way to get started with a consistent environment:

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
2. Install [VS Code Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
3. Open this project in VS Code
4. Click "Reopen in Container" when prompted
5. Wait for setup to complete - you're ready to code!

See [`.devcontainer/README.md`](.devcontainer/README.md) for more details.

### Option 2: Local Setup

```bash
# Install dependencies
npm install

# Run checks
npm run lint
npm run typecheck
npm test

# Format code
npm run format
```

## Project Structure

```
.
├── apps/           # Application packages
├── packages/       # Shared packages
├── teacher/        # Teacher resources (hints, rubrics, solutions)
├── tests/          # Test files
└── scripts/        # Build and utility scripts
```

## Development

### Available Scripts

- **`npm run lint`** - Check code quality with ESLint
- **`npm run format`** - Format code with Prettier
- **`npm run format:check`** - Check if code is formatted
- **`npm run typecheck`** - Type check with TypeScript
- **`npm run test`** - Run tests with Vitest
- **`npm run test:watch`** - Run tests in watch mode
- **`npm run test:coverage`** - Generate test coverage report

### Code Quality

This project enforces code quality through:

- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety
- **Vitest** for testing

All checks run automatically in CI on pull requests.

## CI/CD

GitHub Actions automatically runs all checks on:

- Pushes to `main` or `develop`
- Pull requests to `main` or `develop`

See [`.github/workflows/README.md`](.github/workflows/README.md) for details.

## Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm run format` to format code
4. Ensure all checks pass locally
5. Submit a pull request

## Teacher Resources

Teacher-specific materials are located in the `teacher/` directory:

- **Hints**: Guided hints for students
- **Rubrics**: Grading criteria
- **Solutions**: Reference implementations
