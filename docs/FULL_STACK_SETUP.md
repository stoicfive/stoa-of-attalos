# Full Stack Development Environment - Complete Setup

This document describes the complete full-stack development environment for the Stoa of Attalos Trading Journal learning project.

## 🎯 Overview

A comprehensive development environment supporting:

- **Frontend**: Next.js + TypeScript
- **Backend**: FastAPI + Python 3.12
- **Database**: PostgreSQL 16
- **Testing**: Vitest (unit), Pytest (Python), Playwright (E2E)
- **CI/CD**: GitHub Actions with full stack checks
- **Dev Container**: Docker-based consistent environment

## 🏗️ Architecture

### Technology Stack

| Layer                  | Technology              | Purpose                     |
| ---------------------- | ----------------------- | --------------------------- |
| Frontend               | Next.js 14 + TypeScript | React-based web application |
| Backend API            | FastAPI + Python 3.12   | RESTful API server          |
| Database               | PostgreSQL 16           | Persistent data storage     |
| ORM                    | SQLAlchemy              | Database abstraction        |
| Testing (JS/TS)        | Vitest                  | Unit & integration tests    |
| Testing (Python)       | Pytest                  | Backend tests               |
| E2E Testing            | Playwright              | End-to-end user flows       |
| Linting (JS/TS)        | ESLint                  | Code quality                |
| Linting (Python)       | Ruff                    | Python linting & formatting |
| Type Checking (TS)     | TypeScript              | Static type checking        |
| Type Checking (Python) | MyPy                    | Python type hints           |
| Formatting             | Prettier + Ruff         | Code formatting             |
| CI/CD                  | GitHub Actions          | Automated testing           |

## 📦 Dev Container Setup

### Features

The dev container includes:

- **Node.js 20 LTS** - JavaScript/TypeScript runtime
- **Python 3.12** - Latest Python with Poetry
- **PostgreSQL 16** - Database server (via Docker Compose)
- **Git & GitHub CLI** - Version control tools
- **VS Code Extensions** - Pre-configured for full stack development

### Services

```yaml
services:
  app: # Main development container
  db: # PostgreSQL database
```

### Environment Variables

```bash
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/trading_journal
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=trading_journal
```

### Ports

- **3000**: Next.js application
- **5173**: Vite dev server
- **8000**: FastAPI backend
- **5432**: PostgreSQL database

## 🧪 Testing Strategy

### Test Pyramid (70/25/5)

```
        /\
       /E2E\      5% - End-to-end tests (Playwright)
      /------\
     /  INT   \   25% - Integration tests (Vitest, Pytest)
    /----------\
   /    UNIT    \ 70% - Unit tests (Vitest, Pytest)
  /--------------\
```

### Coverage Thresholds

- **Minimum**: 70% coverage across all metrics
- **Lines**: 70%
- **Functions**: 70%
- **Branches**: 70%
- **Statements**: 70%

### Test Commands

```bash
# JavaScript/TypeScript
npm test                  # Run unit tests
npm run test:watch        # Watch mode
npm run test:coverage     # With coverage report
npm run test:e2e          # Playwright E2E tests

# Python
poetry run pytest         # Run Python tests
poetry run pytest --cov   # With coverage
```

## 📏 Code Quality Standards

### File Size Limits

- **Maximum file length**: 300 lines (enforced by ESLint)
- **Maximum function length**: 50 lines (enforced by ESLint)

### ESLint Rules

```javascript
'max-lines': ['error', { max: 300, skipBlankLines: true, skipComments: true }]
'max-lines-per-function': ['error', { max: 50, skipBlankLines: true, skipComments: true }]
```

### Python Standards

- **Line length**: 300 characters (Ruff + Black)
- **Type hints**: Required (MyPy strict mode)
- **Docstrings**: Required for public functions

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

The CI pipeline runs 8 parallel jobs:

1. **lint** - ESLint for JavaScript/TypeScript
2. **typecheck** - TypeScript compiler
3. **test** - Vitest unit tests
4. **format-check** - Prettier formatting
5. **python-lint** - Ruff linting + MyPy type checking
6. **python-test** - Pytest with PostgreSQL service
7. **e2e-test** - Playwright end-to-end tests
8. **all-checks** - Final gate (requires all above to pass)

### Triggers

- Push to `main` or `develop` branches
- Pull requests to `main` or `develop`

### Required Checks

All PRs must pass:

- ✅ Linting (ESLint + Ruff)
- ✅ Type checking (TypeScript + MyPy)
- ✅ Unit tests (Vitest + Pytest)
- ✅ E2E tests (Playwright)
- ✅ Code formatting (Prettier + Ruff)
- ✅ Coverage thresholds (≥70%)

## 📚 Package Management

### JavaScript/TypeScript

```json
{
  "workspaces": ["apps/*", "packages/*"],
  "scripts": {
    "lint": "eslint .",
    "format": "prettier --write .",
    "typecheck": "tsc -b",
    "test": "vitest run",
    "test:e2e": "playwright test",
    "check:all": "npm run lint && npm run typecheck && npm test && npm run format:check"
  }
}
```

### Python

```toml
[tool.poetry]
python = "^3.12"

[tool.poetry.dependencies]
fastapi = "^0.115.0"
uvicorn = "^0.32.0"
sqlalchemy = "^2.0.36"
psycopg2-binary = "^2.9.10"

[tool.poetry.group.dev.dependencies]
pytest = "^8.3.0"
ruff = "^0.8.0"
mypy = "^1.13.0"
```

## 🎓 Teacher Pack Structure

Each learning session follows this structure:

```
teacher/<phase-session>/
├── README.md              # Objectives, steps, DoD, quiz
├── hints.md               # 3-tier progressive hints
├── rubric.md              # Grading criteria
└── solutions/             # Reference implementations

packages/<package>/src/
├── <feature>.ts           # Starter code with TODO comments
└── __tests__/
    └── <feature>.test.ts  # Test stubs for students

scripts/
└── check-<phase-session>.sh  # Automated validation
```

## 🚀 Getting Started

### Option 1: Dev Container (Recommended)

1. Install Docker Desktop
2. Install VS Code + Dev Containers extension
3. Open project in VS Code
4. Click "Reopen in Container"
5. Wait for setup to complete
6. Start coding! 🎉

### Option 2: Local Setup

```bash
# Install Node.js dependencies
npm install

# Install Python dependencies
poetry install

# Install Playwright browsers
npx playwright install --with-deps chromium

# Start PostgreSQL (requires Docker)
docker-compose -f .devcontainer/docker-compose.yml up -d db

# Verify setup
npm run verify
```

## 📖 Daily Workflow

### Starting a Session

```bash
# Pull latest changes
git checkout develop
git pull

# Create feature branch
git checkout -b a1s1-trade-entry

# Start tests in watch mode
npm run test:watch
```

### During Development

```bash
# Run checks frequently
npm run lint
npm run typecheck
npm test

# Format code
npm run format
```

### Before Submitting

```bash
# Run session check script
chmod +x scripts/check-a1s1.sh
./scripts/check-a1s1.sh

# Or run all checks
npm run check:all

# Commit with conventional commits
git add .
git commit -m "feat(a1s1): implement trade validation"

# Push and create PR
git push origin a1s1-trade-entry
```

## 🎯 Learning Principles Applied

### Chunking

- Sessions limited to 50 minutes (2× 25/5 Pomodoro)
- Small, focused objectives
- Incremental complexity

### Active Recall

- 60-90 second quiz before each session
- "What I Learned" required in PRs
- Spaced repetition (24h & 7d reviews)

### Interleaving

- Rotate languages weekly: TS → Python → SQL
- Mix concepts across sessions
- Prevent illusion of competence

### Deliberate Practice

- Tests fail initially (TDD approach)
- Immediate feedback via CI
- Progressive hints (3 tiers)

### Test Pyramid

- 70% unit tests (fast, isolated)
- 25% integration tests (component interactions)
- 5% E2E tests (full user flows)

## 🔧 Troubleshooting

### Dev Container Issues

```bash
# Rebuild without cache
Cmd+Shift+P → "Dev Containers: Rebuild Without Cache"

# Check logs
docker-compose -f .devcontainer/docker-compose.yml logs
```

### Database Connection Issues

```bash
# Check PostgreSQL is running
docker ps | grep postgres

# Restart database
docker-compose -f .devcontainer/docker-compose.yml restart db

# Connect to database
psql postgresql://postgres:postgres@localhost:5432/trading_journal
```

### Python Issues

```bash
# Reinstall dependencies
poetry install --no-cache

# Check Python version
python --version  # Should be 3.12.x

# Activate virtual environment
poetry shell
```

### Test Failures

```bash
# Run specific test file
npm test -- validators.test.ts

# Run with verbose output
npm test -- --reporter=verbose

# Check coverage
npm run test:coverage
```

## 📊 Monitoring & Metrics

### Code Quality Metrics

- **Test Coverage**: ≥70% (enforced)
- **ESLint Errors**: 0 (enforced)
- **TypeScript Errors**: 0 (enforced)
- **File Length**: ≤300 lines (enforced)
- **Function Length**: ≤50 lines (enforced)

### CI Performance

- **Average Build Time**: ~5-7 minutes
- **Parallel Jobs**: 8
- **Cache Hit Rate**: ~80% (npm/poetry caches)

## 🎓 Sample Teacher Pack: A1S1

A complete example teacher pack is included:

- **Location**: `teacher/a1s1/`
- **Topic**: Trading Journal - Project Setup & First Entry
- **Duration**: 50 minutes
- **Language**: TypeScript
- **Includes**:
  - Detailed README with objectives and steps
  - 3-tier progressive hints
  - Comprehensive rubric
  - Starter code with TODO comments
  - Test stubs
  - Reference solutions
  - Automated check script

## 📚 Additional Resources

- [Dev Containers Documentation](https://code.visualstudio.com/docs/devcontainers/containers)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vitest Documentation](https://vitest.dev/)
- [Playwright Documentation](https://playwright.dev/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Poetry Documentation](https://python-poetry.org/)

---

**Ready to start learning!** 🚀 Open the dev container and begin with A1S1.
