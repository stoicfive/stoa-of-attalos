# A1S2: Database Models with SQLAlchemy

**Phase**: A (Foundation)  
**Session**: 2  
**Timebox**: 50 minutes (2× 25/5 Pomodoro)  
**Language Focus**: Python

## 🎯 Learning Objectives

By the end of this session, you will:

1. Define SQLAlchemy models with proper types and constraints
2. Create database migrations using Alembic
3. Write model tests with Pytest fixtures
4. Implement CRUD operations (Create, Read, Update, Delete)
5. Understand ORM (Object-Relational Mapping) concepts

## 📚 Prerequisites

- Python 3.12+ installed
- Poetry installed
- PostgreSQL running (Docker Compose)
- A1S1 complete (TypeScript validation)
- Basic SQL knowledge

## 🏗️ What You'll Build

A SQLAlchemy model that maps to the existing `trading.trades` table:

**Trade Model:**
- **id**: UUID primary key
- **symbol**: Stock ticker (VARCHAR)
- **entry_price**: Entry price (NUMERIC)
- **exit_price**: Exit price (NUMERIC)
- **shares**: Number of shares (INTEGER)
- **trade_date**: When trade occurred (TIMESTAMP)
- **notes**: Optional notes (TEXT)
- **pnl**: Computed profit/loss (NUMERIC)
- **created_at**: Record creation time
- **updated_at**: Last update time

## 📋 Steps

### Sprint 1 (25 minutes)

1. **Define the Trade model** (`apps/api/models/trade.py`)
   - Set table name and schema
   - Add all columns with proper types
   - Add CHECK constraints for positive values
   - Add computed P&L column

2. **Create database connection** (`apps/api/database.py`)
   - Configure SQLAlchemy engine
   - Create session maker
   - Add helper function for sessions

3. **Create migration** (Alembic)
   - Initialize Alembic
   - Generate migration
   - Review and apply migration

### Break (5 minutes)

### Sprint 2 (25 minutes)

4. **Write test fixtures** (`apps/api/tests/conftest.py`)
   - Create test database engine
   - Create session fixture
   - Add setup/teardown logic

5. **Complete model tests** (`apps/api/tests/test_trade_model.py`)
   - Test file already exists with TODO(student) markers
   - Find test functions with `pass` statements
   - Replace `pass` with actual test implementations
   - Test CRUD operations (create, read, update, delete)
   - Test P&L calculation
   - Test CHECK constraints (negative values should fail)
   - Test queries and filters

6. **Verify and submit**
   - Run `./scripts/check-a1s2.sh`
   - Ensure 70%+ coverage
   - Fix any issues

## 🔧 Setup

```bash
# Install dependencies
poetry install

# Start database (if not running)
docker-compose -f .devcontainer/docker-compose.yml up -d

# Initialize Alembic
poetry run alembic init alembic

# Verify database connection
poetry run python -c "from apps.api.database import engine; engine.connect()"
```

## 🧪 Testing

```bash
# Run tests
poetry run pytest apps/api/tests/ -v

# Run with coverage
poetry run pytest apps/api/tests/ --cov=apps/api/models --cov-report=term-missing

# Run validation script
./scripts/check-a1s2.sh
```

## 📖 Key Concepts

### ORM (Object-Relational Mapping)
**Metaphor:** "Translator between Python and SQL"
- Maps Python classes to database tables
- Maps objects to rows
- Handles SQL generation automatically

### Migrations
**Metaphor:** "Version control for your database"
- Track schema changes over time
- Apply/rollback changes safely
- Share schema updates with team

### Fixtures
**Metaphor:** "Test setup helpers"
- Reusable test data and connections
- Automatic setup and teardown
- Isolate tests from each other

### CRUD Operations
- **Create**: `session.add(trade)`
- **Read**: `session.query(Trade).filter_by(id=...)`
- **Update**: `trade.symbol = "AAPL"; session.commit()`
- **Delete**: `session.delete(trade)`

## 📚 Resources

- [SQLAlchemy Documentation](https://docs.sqlalchemy.org/)
- [Alembic Tutorial](https://alembic.sqlalchemy.org/en/latest/tutorial.html)
- [Pytest Fixtures](https://docs.pytest.org/en/stable/fixture.html)
- [GLOSSARY.md](../../docs/GLOSSARY.md) - See ORM, Migration, Fixture entries

## 💡 Hints

Stuck? Check the hints file for progressive guidance:
- **Tier 1**: Conceptual hints (no code)
- **Tier 2**: Implementation patterns (pseudocode)
- **Tier 3**: Detailed code examples

See [hints.md](hints.md) for details.

## ✅ Success Criteria

- [ ] Trade model defined with all columns
- [ ] CHECK constraints added for positive values
- [ ] P&L computed column working
- [ ] Migration created and applied
- [ ] Test fixtures working
- [ ] All tests passing (10+ tests)
- [ ] 70%+ test coverage
- [ ] CRUD operations working
- [ ] `./scripts/check-a1s2.sh` passes

## 🎓 What You'll Learn

**Technical Skills:**
- SQLAlchemy ORM basics
- Database migrations with Alembic
- Pytest fixtures and testing
- PostgreSQL constraints

**Software Engineering:**
- Test-Driven Development (TDD)
- Database schema design
- Data validation at DB level
- Test isolation strategies

## 📝 Submission

When complete:
1. Run `./scripts/check-a1s2.sh`
2. Commit your changes
3. Write "What I Learned" in PR description
4. Submit for review

## 🔄 Review Schedule

- **24 hours**: Quick review of key concepts
- **7 days**: Spaced repetition quiz
- **Next session**: Build on this foundation

---

**Time to build!** Start with Sprint 1, step 1. 🚀
