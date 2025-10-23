# A1S2 Grading Rubric

**Total Points:** 100

---

## 1. Model Definition (30 points)

### Trade Model Structure (15 points)
- [ ] **5 pts** - Correct table name and schema (`trading.trades`)
- [ ] **5 pts** - All required columns defined with correct types
- [ ] **5 pts** - Proper use of nullable, default, and primary_key

### Constraints (10 points)
- [ ] **3 pts** - CHECK constraint for positive entry_price
- [ ] **3 pts** - CHECK constraint for positive exit_price
- [ ] **3 pts** - CHECK constraint for positive shares
- [ ] **1 pt** - Constraints have descriptive names

### Computed Column (5 points)
- [ ] **3 pts** - P&L computed column defined correctly
- [ ] **2 pts** - Formula is accurate: `(exit_price - entry_price) * shares`

---

## 2. Database Connection (15 points)

### Engine Configuration (8 points)
- [ ] **3 pts** - Engine created with correct DATABASE_URL
- [ ] **3 pts** - SessionLocal configured properly
- [ ] **2 pts** - Uses environment variables

### Helper Function (7 points)
- [ ] **4 pts** - `get_db()` function yields session
- [ ] **3 pts** - Proper cleanup (finally block closes session)

---

## 3. Migrations (15 points)

### Alembic Setup (8 points)
- [ ] **3 pts** - Alembic initialized correctly
- [ ] **3 pts** - `env.py` configured with Base.metadata
- [ ] **2 pts** - `alembic.ini` has correct database URL

### Migration Creation (7 points)
- [ ] **4 pts** - Migration generated with `alembic revision --autogenerate`
- [ ] **3 pts** - Migration applied successfully with `alembic upgrade head`

---

## 4. Test Fixtures (15 points)

### Engine Fixture (7 points)
- [ ] **3 pts** - Test engine created with TEST_DATABASE_URL
- [ ] **2 pts** - Tables created before tests
- [ ] **2 pts** - Tables dropped after tests

### Session Fixture (8 points)
- [ ] **3 pts** - Session created with transaction
- [ ] **3 pts** - Transaction rolled back after test
- [ ] **2 pts** - Connection properly closed

---

## 5. Model Tests (20 points)

### CRUD Tests (12 points)
- [ ] **3 pts** - Test create (add and commit)
- [ ] **3 pts** - Test read (query and filter)
- [ ] **3 pts** - Test update (modify and commit)
- [ ] **3 pts** - Test delete (delete and commit)

### Business Logic Tests (8 points)
- [ ] **4 pts** - Test P&L calculation is correct
- [ ] **2 pts** - Test constraint violations (negative prices)
- [ ] **2 pts** - Test constraint violations (negative shares)

---

## 6. Code Quality (5 points)

### Style & Standards (5 points)
- [ ] **2 pts** - No linting errors (ruff)
- [ ] **2 pts** - No type errors (mypy)
- [ ] **1 pt** - Proper docstrings and comments

---

## Bonus Points (5 points)

- [ ] **2 pts** - Additional tests beyond requirements
- [ ] **2 pts** - Test edge cases (zero values, very large numbers)
- [ ] **1 pt** - Performance considerations (indexes mentioned)

---

## Grade Scale

| Points | Grade | Description |
|--------|-------|-------------|
| 90-100 | A | Excellent - All requirements met, clean code |
| 80-89  | B | Good - Most requirements met, minor issues |
| 70-79  | C | Satisfactory - Core requirements met |
| 60-69  | D | Needs Improvement - Missing key components |
| 0-59   | F | Incomplete - Major components missing |

---

## Automatic Checks

The validation script (`./scripts/check-a1s2.sh`) verifies:
- ✅ All required files exist
- ✅ Database connection works
- ✅ All tests pass
- ✅ 70%+ test coverage
- ✅ Migrations apply successfully
- ✅ No linting errors

**Passing all automatic checks = minimum 70 points**

---

## Feedback Categories

### Excellent Work ✨
- Clean, well-organized code
- Comprehensive tests
- Proper error handling
- Good documentation

### Needs Improvement 📝
- Missing tests
- Incorrect constraint definitions
- Poor error handling
- Incomplete migrations

### Common Mistakes ⚠️
- Forgetting to commit() after add()
- Not using Decimal for money
- Hardcoding database URLs
- Not testing constraints
- Missing transaction rollback in fixtures

---

## Self-Assessment Checklist

Before submitting, verify:
- [ ] All tests pass locally
- [ ] Coverage is 70%+
- [ ] `./scripts/check-a1s2.sh` passes
- [ ] No linting errors
- [ ] Code is well-documented
- [ ] Migrations apply cleanly
- [ ] Database constraints work

---

## Resubmission Policy

If score < 70:
1. Review feedback comments
2. Fix identified issues
3. Re-run validation script
4. Resubmit within 48 hours

**Goal:** Everyone achieves 70+ through iteration and learning!
