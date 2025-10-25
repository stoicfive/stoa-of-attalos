# Validation Scripts vs npm run check:all

**Important:** Students should use session-specific validation scripts, NOT `npm run check:all`

---

## ⚠️ STUDENTS: Use Session Scripts Instead

### `npm run check:all` - For Developers/CI

**What it does:**

- Runs lint, typecheck, test, and format:check on student workspace files
- Now properly ignores portal, docs, and infrastructure
- Checks apps/web, apps/api, packages

**Why students should still use session scripts:**

- `npm run check:all` checks ALL student workspaces (web + api + packages)
- Session scripts check ONLY files for that specific session
- Session scripts are scoped and focused
- Clearer, more relevant error messages

---

## ✅ USE: Session-Specific Validation Scripts

### **For A1S1:**

```bash
./scripts/check-a1s1.sh
```

**What it checks:**

- TypeScript files in `packages/types/`
- React components in `apps/web/src/components/`
- Test files for validators and components
- Only files relevant to A1S1

### **For A1S2:**

```bash
./scripts/check-a1s2.sh
```

**What it checks:**

- Python files in `apps/api/models/`
- Database files in `apps/api/database.py`
- Test files in `apps/api/tests/`
- Alembic migrations
- Only files relevant to A1S2

### **For A1S3:**

```bash
./scripts/check-a1s3.sh
```

**What it checks:**

- FastAPI routers in `apps/api/routers/`
- Pydantic schemas in `apps/api/schemas/`
- API test files
- Only files relevant to A1S3

---

## 📋 What Validation Scripts Do

Each script runs:

1. **Linting** - Check code style (only session files)
2. **Type Checking** - Verify types (only session files)
3. **Tests** - Run tests (only session tests)
4. **Coverage** - Check >= 70% coverage
5. **Formatting** - Verify code is formatted

**Scope:** Only files the student created/modified for that session

---

## 🎯 Example: A1S1 Validation

```bash
cd /path/to/stoa-of-attalos
./scripts/check-a1s1.sh
```

**Output:**

```
🏛️  A1S1 Check Script - Trading Journal Setup
==============================================

📝 Running ESLint...
✅ Linting passed

🔍 Running TypeScript type check...
✅ Type checking passed

🧪 Running unit tests...
✅ Tests passed

📊 Checking test coverage...
✅ Coverage threshold met (≥70%)

💅 Checking code formatting...
✅ Code is properly formatted

==============================================
✅ All checks passed! Ready to submit.

📝 Don't forget to add your 'What I Learned' section to the PR!
```

---

## 🔧 Individual Commands (If Needed)

Students can also run individual checks:

```bash
# Run tests only
npm test

# Check linting only
npm run lint

# Check types only
npm run typecheck

# Fix formatting
npm run format
```

**Note:** These commands run on all workspace files, not just session files. Use validation scripts for final verification.

---

## 📝 Portal Instructions

The portal now correctly instructs students to:

1. Navigate to project root
2. Run session-specific validation script
3. Fix any errors
4. Submit when all checks pass

**Example from portal:**

```
Task 6: Run Validation Script

Steps:
1. Navigate to project root directory
2. Run session validation: ./scripts/check-a1s1.sh
3. Script will check: linting, type checking, tests, coverage, formatting
4. Verify all tests pass
5. Check coverage >= 70%
6. Fix any errors reported by the script
```

---

## ✅ Summary

| Command                   | Scope                 | Use Case               |
| ------------------------- | --------------------- | ---------------------- |
| `./scripts/check-a1s1.sh` | ✅ Session files only | **Students use this**  |
| `./scripts/check-a1s2.sh` | ✅ Session files only | **Students use this**  |
| `./scripts/check-a1s3.sh` | ✅ Session files only | **Students use this**  |
| `npm run check:all`       | ❌ ALL files          | **Developers/CI only** |
| `npm test`                | ⚠️ All test files     | Individual testing     |
| `npm run lint`            | ⚠️ All source files   | Individual linting     |

**Students:** Always use `./scripts/check-{session}.sh` for validation!

---

**Last Updated:** October 23, 2025  
**Status:** Corrected in portal and teacher READMEs
