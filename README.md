# Stoa of Attalos - Full-Stack Learning Environment

> **Structured, test-driven learning** for building a Trading Journal SaaS using proven cognitive science principles.

A complete development environment with automated quality checks, progressive learning materials, and production-ready tooling for teaching full-stack development (TypeScript, Python, PostgreSQL).

## 🎥 Meet Nova: Your AI Professor for Full-Stack Development

**Watch the intro video** to see what you'll build in 8 sessions:

[![Meet Nova - Your AI Professor](https://img.youtube.com/vi/op6XMqsVWnk/maxresdefault.jpg)](https://youtu.be/op6XMqsVWnk)

> ⏱️ **Duration:** ~1 minute  
> 📚 **Topics:** Course structure, tech stack, learning approach  
> 🔗 **Watch on YouTube:** [youtu.be/op6XMqsVWnk](https://youtu.be/op6XMqsVWnk)
>
> **Note:** Currently 3 sessions are complete (Phase A: Foundation). 5 more sessions planned for Phases B & C.

## ✨ Features

- 🎨 **Student Portal** - Beautiful Next.js web interface for navigating lessons, tracking progress, and accessing resources
- 🐳 **Dev Container** - Node.js 20, Python 3.12, PostgreSQL 16 (zero setup)
- 🔄 **GitHub Actions CI** - 8 parallel checks on every commit
- 📏 **Quality Enforcement** - 300-line files, 50-line functions, 70% coverage
- 🧪 **Test Pyramid** - Vitest (unit), Pytest (Python), Playwright (E2E)
- 📚 **Teacher Packs** - Complete session guides with progressive hints
- 🎓 **Learning Science** - Chunking, active recall, spaced repetition, TDD

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20+ and npm 10+
- **Python** 3.12+
- **Docker Desktop** (for database)
- **Git** for version control

### Option 1: Dev Container (Recommended)

**Zero configuration, instant consistency:**

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
2. Install [VS Code Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
3. Open this project in VS Code
4. Click **"Reopen in Container"**
5. ☕ Wait 2-3 minutes - you're ready!

See [`.devcontainer/README.md`](.devcontainer/README.md) for details.

### Option 2: Local Setup

**1. Clone the repository**

```bash
git clone https://github.com/stoicfive/stoa-of-attalos.git
cd stoa-of-attalos
```

**2. Install Node.js dependencies**

```bash
npm install
```

**3. Install Python dependencies**

```bash
# Install Poetry (if not already installed)
pip3 install poetry

# Install Python packages
poetry install
```

**4. Set up the database**

```bash
# Start PostgreSQL with Docker Compose
docker-compose -f .devcontainer/docker-compose.yml up -d

# Verify database is running
docker-compose -f .devcontainer/docker-compose.yml ps
```

**5. Configure environment variables**

```bash
# Copy example environment file
cp .env.example .env

# Edit .env with your settings (optional for local dev)
```

**6. Verify setup**

```bash
# Run all checks
npm run check:all

# Run tests in watch mode
npm run test:watch
```

**7. Start the Student Portal (Optional)**

```bash
# Start the web interface
cd apps/student-portal
npm install
npm run dev

# Open in browser: http://localhost:3000
```

**8. Start learning!**

```bash
# Option A: Use the Student Portal
open http://localhost:3000

# Option B: Use the command line
open lessons/START_HERE.md

# Or start first lesson directly
cd lessons/01-typescript-basics
cat README.md
```

### Quick Commands

```bash
# Student Portal
cd apps/student-portal && npm run dev    # Start portal (http://localhost:3000)

# Development
npm run test:watch          # Watch tests (recommended during coding)
npm run check:all           # Run all quality checks
npm run db:adminer          # Open database UI (http://localhost:8080)

# Python
poetry run pytest           # Run Python tests
poetry run ruff check .     # Lint Python code

# Database
docker-compose -f .devcontainer/docker-compose.yml up -d    # Start
docker-compose -f .devcontainer/docker-compose.yml down     # Stop
docker-compose -f .devcontainer/docker-compose.yml ps       # Status
```

## 📁 Project Structure

```
.
├── lessons/             # 🎓 STUDENT WORKSPACE (start here!)
│   ├── START_HERE.md   # Entry point guide
│   ├── 01-typescript-basics/
│   ├── 02-database-models/
│   └── 03-api-endpoints/
├── apps/
│   ├── student-portal/ # Next.js learning portal
│   ├── api/            # FastAPI backend (reference)
│   └── web/            # (empty - future frontend)
├── teacher/            # Teacher materials (hints, rubrics, solutions)
│   ├── a1s1/          # Session A1S1 materials
│   ├── a1s2/          # Session A1S2 materials
│   └── index.json     # Course structure
├── .devcontainer/     # Docker dev environment
├── .github/workflows/ # CI/CD pipeline (8 parallel jobs)
├── tests/             # Root-level test fixtures
└── scripts/           # Validation and setup scripts
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

### Student Portal

The **Student Portal** is a modern web interface built with Next.js that provides:

- 📊 **Dashboard** - Track your progress across all sessions
- 📚 **Lesson Browser** - Navigate sessions with clear objectives and prerequisites
- ✅ **Task Checklists** - Interactive task cards with code examples
- 🎯 **Progress Tracking** - See completion status and time estimates
- 🔗 **IDE Integration** - Open files directly in VS Code
- 💡 **Resources** - Access hints, rubrics, and documentation

**Access the portal:**

```bash
cd apps/student-portal
npm install
npm run dev
# Open http://localhost:3000
```

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
# Start here
open lessons/START_HERE.md

# Or go directly to first lesson
cd lessons/01-typescript-basics
cat README.md

# After completing work, validate from root
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
