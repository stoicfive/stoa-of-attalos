# Student Work Directory Restructure Plan

**Goal:** Make student workspace simple, clear, and easy to navigate

---

## Current Structure (Confusing)

```
stoa-of-attalos/
├── packages/
│   └── types/
│       └── src/
│           ├── trade.ts
│           ├── validators.ts
│           └── __tests__/
│               └── validators.test.ts
├── apps/
│   ├── web/
│   │   └── src/
│   │       └── components/
│   │           ├── TradeForm.tsx
│   │           └── __tests__/
│   │               └── TradeForm.test.tsx
│   └── api/
│       ├── models/
│       │   └── trade.py
│       ├── routers/
│       │   └── trades.py
│       ├── schemas/
│       │   └── trade.py
│       ├── database.py
│       └── tests/
│           ├── conftest.py
│           ├── test_trade_model.py
│           └── test_trades_api.py
```

**Problems:**
- ❌ "packages" and "apps" are unclear
- ❌ Deep nesting (4-5 levels)
- ❌ No clear entry point
- ❌ Monorepo concepts confusing for beginners

---

## New Structure (Simple & Clear)

```
stoa-of-attalos/
├── 📁 lessons/                          # ← STUDENT STARTS HERE
│   ├── 📁 01-typescript-basics/         # A1S1
│   │   ├── trade.ts                     # TODO(student): Define Trade interface
│   │   ├── validators.ts                # TODO(student): Implement validators
│   │   ├── TradeForm.tsx                # TODO(student): Create form component
│   │   ├── 📁 tests/
│   │   │   ├── validators.test.ts       # TODO(student): Complete tests
│   │   │   └── TradeForm.test.tsx       # TODO(student): Complete tests
│   │   └── README.md                    # Lesson instructions
│   │
│   ├── 📁 02-database-models/           # A1S2
│   │   ├── trade_model.py               # TODO(student): Define SQLAlchemy model
│   │   ├── database.py                  # TODO(student): Setup database connection
│   │   ├── 📁 tests/
│   │   │   ├── conftest.py              # TODO(student): Create fixtures
│   │   │   └── test_trade_model.py      # TODO(student): Complete tests
│   │   └── README.md                    # Lesson instructions
│   │
│   ├── 📁 03-api-endpoints/             # A1S3
│   │   ├── trades_router.py             # TODO(student): Create API endpoints
│   │   ├── trade_schema.py              # TODO(student): Define Pydantic schemas
│   │   ├── 📁 tests/
│   │   │   └── test_trades_api.py       # TODO(student): Complete tests
│   │   └── README.md                    # Lesson instructions
│   │
│   └── START_HERE.md                    # Entry point guide
│
├── 📁 apps/
│   └── student-portal/                  # Portal (unchanged)
├── 📁 teacher/                          # Teacher materials (unchanged)
├── 📁 scripts/                          # Infrastructure (unchanged)
└── README.md
```

**Benefits:**
- ✅ Clear entry point: `lessons/`
- ✅ Numbered lessons: `01-`, `02-`, `03-`
- ✅ Descriptive names: `typescript-basics`, `database-models`, `api-endpoints`
- ✅ Flat structure: 2-3 levels max
- ✅ README in each lesson
- ✅ All student files in one place

---

## Migration Steps

### Phase 1: Create New Structure

1. **Create new directories:**
   ```bash
   mkdir -p lessons/01-typescript-basics/tests
   mkdir -p lessons/02-database-models/tests
   mkdir -p lessons/03-api-endpoints/tests
   ```

2. **Move A1S1 files:**
   ```bash
   # Move from packages/types/src/
   mv packages/types/src/trade.ts lessons/01-typescript-basics/
   mv packages/types/src/validators.ts lessons/01-typescript-basics/
   
   # Move from packages/types/src/__tests__/
   mv packages/types/src/__tests__/validators.test.ts lessons/01-typescript-basics/tests/
   
   # Move from apps/web/src/components/
   mv apps/web/src/components/TradeForm.tsx lessons/01-typescript-basics/
   mv apps/web/src/components/__tests__/TradeForm.test.tsx lessons/01-typescript-basics/tests/
   ```

3. **Move A1S2 files:**
   ```bash
   # Move from apps/api/
   mv apps/api/models/trade.py lessons/02-database-models/trade_model.py
   mv apps/api/database.py lessons/02-database-models/
   
   # Move from apps/api/tests/
   mv apps/api/tests/conftest.py lessons/02-database-models/tests/
   mv apps/api/tests/test_trade_model.py lessons/02-database-models/tests/
   ```

4. **Move A1S3 files:**
   ```bash
   # Move from apps/api/
   mv apps/api/routers/trades.py lessons/03-api-endpoints/trades_router.py
   mv apps/api/schemas/trade.py lessons/03-api-endpoints/trade_schema.py
   
   # Move from apps/api/tests/
   mv apps/api/tests/test_trades_api.py lessons/03-api-endpoints/tests/
   ```

### Phase 2: Create Entry Point Files

1. **Create `lessons/START_HERE.md`:**
   - Welcome message
   - How to navigate lessons
   - How to run checks
   - Where to get help

2. **Create lesson READMEs:**
   - `lessons/01-typescript-basics/README.md` (copy from teacher/a1s1/)
   - `lessons/02-database-models/README.md` (copy from teacher/a1s2/)
   - `lessons/03-api-endpoints/README.md` (copy from teacher/a1s3/)

### Phase 3: Update Configuration Files

1. **Update `tsconfig.json`:**
   ```json
   {
     "include": ["lessons/**/*.ts", "lessons/**/*.tsx"],
     "exclude": [
       "node_modules",
       "apps/student-portal",
       "teacher",
       "scripts"
     ]
   }
   ```

2. **Update `eslint.config.js`:**
   ```javascript
   {
     files: ['lessons/**/*.ts', 'lessons/**/*.tsx'],
     // ... rules
   }
   ```

3. **Update `vitest.config.ts`:**
   ```typescript
   export default defineConfig({
     test: {
       include: ['lessons/**/tests/**/*.test.{ts,tsx}']
     }
   })
   ```

### Phase 4: Update Validation Scripts

1. **Update `scripts/check-a1s1.sh`:**
   - Change paths to point to `lessons/01-typescript-basics/`
   - Update test paths

2. **Update `scripts/check-a1s2.sh`:**
   - Change paths to point to `lessons/02-database-models/`
   - Update test paths

3. **Update `scripts/check-a1s3.sh`:**
   - Change paths to point to `lessons/03-api-endpoints/`
   - Update test paths

### Phase 5: Update Portal

1. **Update `session-metadata.ts`:**
   ```typescript
   ideFiles: [
     "lessons/01-typescript-basics/trade.ts",
     "lessons/01-typescript-basics/validators.ts",
     "lessons/01-typescript-basics/TradeForm.tsx"
   ]
   ```

2. **Update `session-tasks.ts`:**
   - Update all file paths to new structure
   - Update code examples

3. **Update IDE Actions Card:**
   - Update `projectRoot` path handling
   - Update file opening logic

### Phase 6: Cleanup

1. **Remove old directories:**
   ```bash
   rm -rf packages/types/src/
   rm -rf apps/web/src/components/TradeForm*
   rm -rf apps/api/models/trade.py
   rm -rf apps/api/routers/trades.py
   rm -rf apps/api/schemas/trade.py
   ```

2. **Update `.gitignore`:**
   - Add any new patterns if needed

---

## Testing Checklist

After migration:

- [ ] `npm run check:a1s1` works
- [ ] `npm run check:a1s2` works
- [ ] `npm run check:a1s3` works
- [ ] Portal "Open in IDE" buttons work
- [ ] All file paths in portal are correct
- [ ] Tests run and find the right files
- [ ] ESLint checks the right files
- [ ] TypeScript checks the right files
- [ ] Build succeeds

---

## Rollback Plan

If something breaks:

1. Keep old structure in a branch: `git checkout -b backup-old-structure`
2. Commit before starting: `git commit -m "backup before restructure"`
3. Can revert: `git revert HEAD`

---

## Benefits After Migration

**For Students:**
- ✅ Know exactly where to start: `lessons/`
- ✅ See all their work in one place
- ✅ Numbered lessons show progression
- ✅ Descriptive names explain what each lesson is about
- ✅ README in each lesson for quick reference
- ✅ No confusion about "packages" vs "apps"

**For Teachers:**
- ✅ Easy to see student progress
- ✅ Clear which files belong to which lesson
- ✅ Simple to explain directory structure
- ✅ Less support questions about "where do I work?"

**For Portal:**
- ✅ Simpler file paths
- ✅ Easier to implement "Open in IDE"
- ✅ Clear lesson boundaries

---

## Estimated Time

- Phase 1 (Create & Move): 30 minutes
- Phase 2 (Entry Points): 20 minutes
- Phase 3 (Config Updates): 30 minutes
- Phase 4 (Scripts): 30 minutes
- Phase 5 (Portal): 45 minutes
- Phase 6 (Cleanup): 15 minutes
- Testing: 30 minutes

**Total: ~3 hours**

---

## Next Steps

1. Review this plan
2. Create backup branch
3. Execute Phase 1
4. Test after each phase
5. Update documentation

**Ready to proceed?**
