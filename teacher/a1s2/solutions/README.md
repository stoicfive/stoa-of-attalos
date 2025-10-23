# A1S2 Reference Solutions

**⚠️ IMPORTANT: These are reference solutions for instructors/reviewers only.**

## Purpose

These files show the complete, correct implementation of A1S2. They are:
- ✅ For reviewing student work
- ✅ For understanding the expected outcome
- ✅ For unblocking after genuine struggle
- ❌ NOT for copying directly

## When to Use Solutions

### ✅ **Good Reasons:**
1. **After completing** - Compare your solution to reference
2. **Stuck for 30+ minutes** - Check one specific part
3. **Reviewing concepts** - Understand best practices
4. **Grading/feedback** - Compare student implementations

### ❌ **Bad Reasons:**
1. **Haven't tried yet** - Defeats learning purpose
2. **First sign of difficulty** - Struggle builds understanding
3. **Copying wholesale** - You won't learn

## Files Included

| File | Purpose | Lines |
|------|---------|-------|
| `trade.py` | Complete Trade model | ~55 |
| `database.py` | Database connection | ~30 |
| `conftest.py` | Pytest fixtures | ~55 |
| `test_trade_model.py` | All 12 tests | ~200 |
| `env.py` | Alembic environment | ~80 |
| `001_initial_migration.py` | Sample migration | ~55 |

## How to Use

### 1. Compare After Implementation
```bash
# After completing your solution
diff apps/api/models/trade.py teacher/a1s2/solutions/trade.py
```

### 2. Check Specific Concept
If stuck on computed columns:
1. Look at hints.md first (Tier 1, then 2)
2. If still stuck, check `trade.py` lines 48-49 only
3. Try to implement yourself
4. Compare your result

### 3. Understand Test Patterns
Use `test_trade_model.py` to see:
- How to test constraints with `pytest.raises`
- How to test computed columns
- How to structure test data

## Important Notes

### Import Paths
⚠️ **Solutions use `apps.api.models` imports** - these assume files are in the correct project location. If copying, adjust imports accordingly.

### Not Production Code
These solutions prioritize:
- ✅ Clarity for learning
- ✅ Following session requirements
- ❌ NOT production optimizations

### Differences Are OK
Your solution may differ from reference and still be correct if:
- All tests pass
- Constraints work
- Coverage is 70%+
- Code is clean

## Learning Philosophy

**The goal is understanding, not matching exactly.**

Better to:
- Struggle for 20 minutes then check hints
- Implement your own way that works
- Learn from mistakes

Than to:
- Copy solutions immediately
- Skip the learning process
- Get "done" without understanding

## Questions?

If solutions don't make sense:
1. Review hints.md (progressive guidance)
2. Check session README.md (concepts explained)
3. Ask instructor/mentor
4. Review SQLAlchemy docs

---

**Remember: The struggle is where learning happens!** 💪
