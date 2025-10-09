# Stoa of Attalos Learning System Breakdown

## 🎯 Core Concept

**Structured, test-driven learning** for building a Trading Journal SaaS using proven cognitive science principles.

## 🏗️ Architecture

### Tech Stack

- **Frontend**: Next.js + TypeScript
- **Backend**: FastAPI + Python
- **Database**: PostgreSQL
- **Testing**: Vitest (unit), Pytest (Python), Playwright (E2E)

### Environment

- **Dev Container**: Identical setup for everyone (Node.js + Python + PostgreSQL)
- **CI/CD**: 8 automated checks on every commit
- **Quality Gates**: 300-line files, 50-line functions, 70% test coverage

## 📚 Learning Structure

### Session Format (50 minutes)

```
Sprint 1 (25 min) → Break (5 min) → Sprint 2 (25 min)
```

### Teacher Pack Components

1. **README.md** - Objectives, steps, Definition of Done, recall quiz
2. **hints.md** - 3 progressive tiers (conceptual → implementation → detailed)
3. **rubric.md** - 100-point grading criteria
4. **solutions/** - Reference implementations (hidden)
5. **starter files** - Code with `// TODO(student)` comments
6. **check script** - Automated validation

### Test Pyramid (Enforced)

```
     5% E2E (Playwright)
    25% Integration (Component tests)
   70% Unit (Pure functions)
```

## 🧠 Learning Principles

| Principle               | Implementation                            |
| ----------------------- | ----------------------------------------- |
| **Chunking**            | 50-min sessions, small objectives         |
| **Active Recall**       | Pre-session quiz, "What I Learned" in PRs |
| **Interleaving**        | Rotate TS → Python → SQL weekly           |
| **Spaced Repetition**   | 24h & 7d reviews (Sunday)                 |
| **Deliberate Practice** | Tests fail initially (TDD)                |
| **Immediate Feedback**  | CI + local checks                         |

## 🔄 Student Workflow

```bash
1. Read session README + take quiz (2 min)
2. Implement TODOs (50 min, 2 sprints)
3. Run: ./scripts/check-a1s1.sh
4. Submit PR with "What I Learned" (3-5 bullets)
5. Address review feedback
```

## 🎓 Quality Enforcement

**Automatic Checks:**

- ✅ Linting (ESLint + Ruff)
- ✅ Type safety (TypeScript + MyPy)
- ✅ Tests pass (Vitest + Pytest + Playwright)
- ✅ Coverage ≥70%
- ✅ Code formatted (Prettier + Ruff)
- ✅ File/function size limits

**Manual Review:**

- Code quality (30 pts)
- Functionality (30 pts)
- Testing (25 pts)
- Process & docs (15 pts)

## 📊 Sample Session: A1S1

**Topic**: Trading Journal - First Entry Form  
**Duration**: 50 minutes  
**Language**: TypeScript

**Student Builds:**

- Trade data model (interface)
- Validation functions (symbol, price, shares)
- Unit tests (70% coverage)
- React form component

**Deliverables:**

- All tests green
- Coverage ≥70%
- "What I Learned" in PR

## 🚀 Key Benefits

**Consistency**: Dev Container = zero setup issues  
**Quality**: Automated enforcement of best practices  
**Feedback**: Immediate via CI, progressive hints  
**Real-world**: Production tech stack, industry standards  
**Scalable**: Template-based, easy to create new sessions

---

**Bottom Line**: A complete, automated learning environment that enforces quality while teaching full-stack development through deliberate practice and proven learning science.
