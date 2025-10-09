# Quick Start Guide v2.0

**New to the project?** This guide gets you productive in 10 minutes.

---

## 🚀 Setup (5 minutes)

### 1. Open in Dev Container
```bash
# In VS Code:
# 1. Install Docker Desktop
# 2. Install "Dev Containers" extension
# 3. Open project folder
# 4. Click "Reopen in Container" when prompted
# ☕ Wait 2-3 minutes
```

### 2. Install Pre-commit Hooks
```bash
npm run hooks:install
```

### 3. Copy Environment Template
```bash
cp .env.example .env
```

### 4. Verify Setup
```bash
npm run check:all
```

✅ **You're ready!**

---

## 💻 Daily Workflow

### Start Your Day
```bash
# Pull latest changes
git pull origin develop

# Create feature branch
git checkout -b a1s2-your-feature

# Start tests in watch mode
npm run test:watch
```

### While Coding

**Use VS Code Tasks** (Cmd+Shift+P → "Tasks: Run Task"):
- **Run All Checks** - Lint, typecheck, test, format
- **Watch Tests** - Auto-run tests on save
- **Format Code** - Prettier + Ruff
- **Start Web App** - Next.js dev server
- **Start API Server** - FastAPI with reload

**Or use npm scripts**:
```bash
npm run test:watch       # Watch mode
npm run format           # Format code
npm run lint             # Check code quality
```

### Database Management

**Visual UI (Adminer)**:
```bash
npm run db:adminer
# Opens http://localhost:8080
# Login: postgres/postgres
```

**Reseed Database**:
```bash
npm run db:seed
```

**CLI Access**:
```bash
psql $DATABASE_URL
```

### Before Committing

Pre-commit hooks run automatically, but you can test them:
```bash
npm run hooks:run
```

Hooks check:
- ✅ Code formatting (Prettier, Ruff)
- ✅ Linting (ESLint, Ruff)
- ✅ Secrets detection
- ✅ Commit message format
- ✅ File size limits

### Submit Work

```bash
# Run session check
./scripts/check-a1s1.sh

# Or all checks
npm run check:all

# Commit (conventional format)
git add .
git commit -m "feat(a1s1): implement trade validation"

# Push
git push origin a1s2-your-feature
```

---

## 📖 Learning a Session

### 1. Read the Session Guide
```bash
# Open in editor
open teacher/a1s1/README.md
```

### 2. Take the Quiz (60-90 seconds)
Answer the recall questions at the bottom of README.

### 3. Sprint 1 (25 minutes)
- Implement TODOs in starter files
- Run tests: `npm run test:watch`
- Use Tier 1 hints if stuck (10 min rule)

### 4. Break (5 minutes)
Stretch, hydrate, reflect.

### 5. Sprint 2 (25 minutes)
- Complete remaining TODOs
- Ensure all tests pass
- Run: `./scripts/check-a1s1.sh`

### 6. Submit PR
- Include "What I Learned" (3-5 bullets)
- Reference session ID in title
- Wait for CI to pass

---

## 🔍 Finding Information

### Commands
```bash
# All npm scripts
npm run

# Check teacher pack index
cat teacher/index.json | jq '.sessions'

# View glossary
open docs/GLOSSARY.md

# Check learning debt
open docs/LEARNING_DEBT.md
```

### Documentation
- **Glossary**: 80+ terms with metaphors
- **Teacher Index**: Course structure and progress
- **Learning Debt**: Concepts students struggle with
- **Upgrades Applied**: Latest enhancements

### When Stuck
1. Check hints (Tier 1 → 2 → 3)
2. Search glossary for terms
3. Review test fixtures for examples
4. Ask for help (>15 min rule)

---

## 🎯 Common Tasks

### Run Specific Session Check
```bash
./scripts/check-a1s1.sh
./scripts/check-a1s2.sh  # When available
```

### Track Learning Debt
```bash
npm run track:debt
# Analyzes test failures and updates LEARNING_DEBT.md
```

### View Test Coverage
```bash
npm run test:coverage
open coverage/index.html
```

### E2E Tests
```bash
npm run test:e2e          # Headless
npm run test:e2e:ui       # Interactive UI
npm run test:e2e:debug    # Debug mode
```

### Python Development
```bash
poetry run pytest         # Run tests
poetry run ruff check .   # Lint
poetry run mypy .         # Type check
poetry run ruff format .  # Format
```

---

## 🐛 Troubleshooting

### Pre-commit Hooks Failing
```bash
# Run manually to see errors
npm run hooks:run

# Fix formatting
npm run format

# Skip hooks (emergency only)
git commit --no-verify
```

### Database Issues
```bash
# Restart database
docker-compose -f .devcontainer/docker-compose.yml restart db

# Reseed data
npm run db:seed

# Check connection
psql $DATABASE_URL -c "SELECT 1"
```

### Dev Container Issues
```bash
# Rebuild container
# Cmd+Shift+P → "Dev Containers: Rebuild Container"

# Check logs
docker-compose -f .devcontainer/docker-compose.yml logs
```

### Tests Failing
```bash
# Run specific test
npm test -- validators.test.ts

# Verbose output
npm test -- --reporter=verbose

# Update snapshots (if using)
npm test -- -u
```

---

## 📊 Progress Tracking

### Check Your Progress
```bash
# View teacher pack index
cat teacher/index.json | jq '.progressTracking'
```

### Session Status
- ✅ **Complete**: A1S1
- 🟡 **Planned**: A1S2, A1S3, B1S1, B1S2, C1S1, C1S2

### Completion
- **Current**: 12.5% (1/8 sessions)
- **Next**: A1S2 - Database Models with SQLAlchemy

---

## 🎓 Learning Tips

### Time Management
- **Pomodoro**: 25 min work, 5 min break
- **Timebox**: Don't exceed 50 min per session
- **Stuck Rule**: Ask for help after 15 min

### Test-Driven Development
1. Read the test
2. Run it (should fail)
3. Write minimal code to pass
4. Refactor
5. Repeat

### Using Hints
- **Tier 1**: Conceptual (try first)
- **Tier 2**: Implementation patterns (after 10 min)
- **Tier 3**: Detailed solutions (last resort)

### Active Recall
- Take pre-session quiz seriously
- Write "What I Learned" before looking at notes
- Review 24h and 7d later

---

## 🔗 Quick Links

### Local Services
- **Web App**: http://localhost:3000
- **API Server**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs
- **Adminer**: http://localhost:8080

### Documentation
- **Glossary**: [docs/GLOSSARY.md](GLOSSARY.md)
- **Teacher Index**: [teacher/index.json](../teacher/index.json)
- **Learning Debt**: [docs/LEARNING_DEBT.md](LEARNING_DEBT.md)
- **Upgrades**: [docs/UPGRADES_APPLIED.md](UPGRADES_APPLIED.md)

### External Resources
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)
- [FastAPI Docs](https://fastapi.tiangolo.com/)
- [Vitest Guide](https://vitest.dev/)
- [Playwright Docs](https://playwright.dev/)

---

## 💡 Pro Tips

1. **Use VS Code Tasks** - Cmd+Shift+B for quick actions
2. **Watch Mode** - Keep tests running while coding
3. **Adminer** - Visual database is faster than CLI
4. **Glossary** - Search for unfamiliar terms
5. **Pre-commit** - Catches issues before CI
6. **Small PRs** - Aim for < 500 lines
7. **Conventional Commits** - Enforced by hooks
8. **Learning Debt** - Check if others struggled too

---

## 🆘 Getting Help

### Self-Service
1. Check glossary for terminology
2. Review hints (progressive tiers)
3. Examine test fixtures for examples
4. Search learning debt log

### Ask for Help
- **Slack/Discord**: #learning-support
- **GitHub Issues**: Use templates
- **Office Hours**: Schedule 1:1

### Report Issues
- **Bug from Test**: Use issue template
- **Lesson Request**: Suggest new sessions
- **Refactor Debt**: Flag technical debt

---

**Ready to learn?** Start with [teacher/a1s1/README.md](../teacher/a1s1/README.md)! 🚀
