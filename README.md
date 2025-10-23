# Stoa of Attalos - Full-Stack Learning Environment

> **Structured, test-driven learning** for building a Trading Journal SaaS using proven cognitive science principles.

A complete development environment with automated quality checks, progressive learning materials, and production-ready tooling for teaching full-stack development (TypeScript, Python, PostgreSQL).

## 🎥 Meet Nova: Your AI Professor for Full-Stack Development

**Watch the intro video** to see what you'll build in 8 sessions:

[![Meet Nova - Your AI Professor](https://img.youtube.com/vi/op6XMqsVWnk/maxresdefault.jpg)](https://youtu.be/op6XMqsVWnk)

> ⏱️ **Duration:** ~1 minute  
> 📚 **Topics:** Course structure, tech stack, learning approach  
> 🔗 **Watch on YouTube:** [youtu.be/op6XMqsVWnk](https://youtu.be/op6XMqsVWnk)

## ✨ Features

- 🐳 **Dev Container** - Node.js 20, Python 3.12, PostgreSQL 16 (zero setup)
- 🔄 **GitHub Actions CI** - 8 parallel checks on every commit
- 📏 **Quality Enforcement** - 300-line files, 50-line functions, 70% coverage
- 🧪 **Test Pyramid** - Vitest (unit), Pytest (Python), Playwright (E2E)
- 📚 **Teacher Packs** - Complete session guides with progressive hints
- 🎓 **Learning Science** - Chunking, active recall, spaced repetition, TDD

## 🚀 Quick Start

### Option 1: Dev Container (Recommended)

**Zero configuration, instant consistency:**

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
2. Install [VS Code Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
3. Open this project in VS Code
4. Click **"Reopen in Container"**
5. ☕ Wait 2-3 minutes - you're ready!

See [`.devcontainer/README.md`](.devcontainer/README.md) for details.

### Option 2: Local Setup

```bash
# Install dependencies
npm install

# Verify setup
npm run check:all

# Start learning with A1S1
open teacher/a1s1/README.md
```

## 📁 Project Structure

```
.
├── .devcontainer/       # Docker dev environment (Node + Python + PostgreSQL)
├── .github/workflows/   # CI/CD pipeline (8 parallel jobs)
├── apps/                # Next.js web app, FastAPI backend
├── packages/            # Shared types, UI components, database
├── teacher/             # Learning sessions with hints & rubrics
│   └── a1s1/           # Sample: Trade entry form (50 min)
├── tests/               # Unit, integration, E2E tests
└── scripts/             # Validation and setup scripts
```

## 🛠️ Tech Stack

| Layer      | Technology                   | Purpose                |
| ---------- | ---------------------------- | ---------------------- |
| Frontend   | Next.js + TypeScript         | React web application  |
| Backend    | FastAPI + Python 3.12        | RESTful API server     |
| Database   | PostgreSQL 16                | Data persistence       |
| Testing    | Vitest + Pytest + Playwright | Unit, integration, E2E |
| Linting    | ESLint + Ruff                | Code quality           |
| Formatting | Prettier + Black             | Code style             |
| CI/CD      | GitHub Actions               | Automated checks       |

## 💻 Development

### Available Scripts

**JavaScript/TypeScript:**

- `npm run lint` - ESLint code quality check
- `npm run format` - Format with Prettier
- `npm run typecheck` - TypeScript type checking
- `npm test` - Run unit tests (Vitest)
- `npm run test:e2e` - Run E2E tests (Playwright)
- `npm run check:all` - Run all checks

**Python:**

- `poetry run pytest` - Run Python tests
- `poetry run ruff check .` - Lint Python code
- `poetry run mypy .` - Type check Python

**Session Validation:**

- `./scripts/check-a1s1.sh` - Validate A1S1 session work

### Code Quality Standards

**Automatically Enforced:**

- ✅ Max 300 lines per file
- ✅ Max 50 lines per function
- ✅ 70% test coverage minimum
- ✅ TypeScript strict mode
- ✅ Python type hints required
- ✅ All tests must pass
- ✅ Code must be formatted

## 🔄 CI/CD Pipeline

**8 Parallel Jobs** run on every push and PR:

1. **lint** - ESLint for JavaScript/TypeScript
2. **typecheck** - TypeScript compiler
3. **test** - Vitest unit tests
4. **format-check** - Prettier formatting
5. **python-lint** - Ruff + MyPy
6. **python-test** - Pytest with PostgreSQL
7. **e2e-test** - Playwright browser tests
8. **all-checks** - Final gate (all must pass)

See [`.github/workflows/README.md`](.github/workflows/README.md) for details.

## Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm run format` to format code
4. Ensure all checks pass locally
5. Submit a pull request

## 🎓 Learning System

### Session Structure (50 minutes)

```
Sprint 1 (25 min) → Break (5 min) → Sprint 2 (25 min)
```

Each session includes:

- **README.md** - Objectives, steps, Definition of Done, recall quiz
- **hints.md** - 3-tier progressive hints (conceptual → implementation → detailed)
- **rubric.md** - 100-point grading criteria
- **solutions/** - Reference implementations (hidden from students)
- **starter files** - Code with `// TODO(student)` comments
- **check script** - Automated validation

### Sample Session: A1S1

**Topic**: Trading Journal - First Entry Form  
**Duration**: 50 minutes  
**Language**: TypeScript

**Student builds:**

- Trade data model (TypeScript interface)
- Validation functions (symbol, price, shares)
- Unit tests (70% coverage)
- React form component

**Try it:**

```bash
open teacher/a1s1/README.md
./scripts/check-a1s1.sh
```

### Learning Principles

- ✅ **Chunking** - Small, focused 50-min sessions
- ✅ **Active Recall** - Pre-session quizzes, "What I Learned" in PRs
- ✅ **Interleaving** - Rotate TS → Python → SQL weekly
- ✅ **Spaced Repetition** - 24h & 7d reviews
- ✅ **Deliberate Practice** - TDD approach, tests fail initially
- ✅ **Immediate Feedback** - CI + local checks

## 📚 Documentation

**Start Here:**
- **[WELCOME.md](docs/WELCOME.md)** - 🎓 Orientation & first steps
- **[CURRICULUM.md](docs/CURRICULUM.md)** - 📚 Complete course overview
- **[PHASE_A.md](docs/PHASE_A.md)** - Foundation (Sessions 1-3)
- **[PHASE_B.md](docs/PHASE_B.md)** - Integration (Sessions 4-5)
- **[PHASE_C.md](docs/PHASE_C.md)** - Advanced (Sessions 6-8)

**Reference:**
- **[GLOSSARY.md](docs/GLOSSARY.md)** - 80+ terms with metaphors
- **[QUICK_START_V2.md](docs/QUICK_START_V2.md)** - 10-minute setup guide
- **[LEARNING_DEBT.md](docs/LEARNING_DEBT.md)** - Knowledge gap tracking

**Technical:**
- **[LEARNING_SYSTEM_OVERVIEW.md](docs/LEARNING_SYSTEM_OVERVIEW.md)** - System architecture
- **[FULL_STACK_SETUP.md](docs/FULL_STACK_SETUP.md)** - Complete technical docs
- **[UPGRADES_APPLIED.md](docs/UPGRADES_APPLIED.md)** - Latest enhancements
- **[CONTRIBUTING.md](docs/CONTRIBUTING.md)** - Contribution guidelines
