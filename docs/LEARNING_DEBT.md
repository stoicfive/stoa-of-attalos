# Learning Debt Log

This file tracks concepts that students struggled with during sessions. Use this to improve future lessons and identify knowledge gaps.

## How to Use

When tests fail with specific patterns or students get stuck repeatedly:
1. Add an entry below with the date, session, and issue
2. Note the root cause and potential fixes
3. Update teaching materials accordingly

---

## Active Learning Debt

| Date | Session | Concept | Issue | Root Cause | Action Items | Status |
|------|---------|---------|-------|------------|--------------|--------|
| 2024-01-15 | A1S1 | Type validation | Students confused about `typeof` vs `instanceof` | Insufficient examples in hints | Add comparison table to hints.md | 🟡 Pending |
| 2024-01-16 | A1S1 | React state | Mutating state directly instead of using setter | Common React pitfall | Add explicit warning in README | 🟡 Pending |

## Resolved Learning Debt

| Date Resolved | Session | Concept | Solution Applied |
|---------------|---------|---------|------------------|
| - | - | - | - |

---

## Common Patterns

### Pattern: Type Confusion
**Symptoms**: Tests fail with type errors, students use wrong type guards
**Fix**: Add type comparison cheat sheet to docs
**Sessions Affected**: A1S1, A1S2

### Pattern: Async/Await Misuse
**Symptoms**: Promises not awaited, race conditions
**Fix**: Add async flow diagram to hints
**Sessions Affected**: B1S1

### Pattern: SQL Injection Vulnerability
**Symptoms**: Raw SQL strings instead of parameterized queries
**Fix**: Add security warning in A2S2
**Sessions Affected**: A2S2, A2S3

---

## Metrics

### By Session
- **A1S1**: 2 active issues
- **A1S2**: 0 active issues
- **A1S3**: 0 active issues

### By Category
- **Type System**: 1 issue
- **React Patterns**: 1 issue
- **Async Programming**: 0 issues
- **Database**: 0 issues
- **Security**: 0 issues

---

## Auto-Generated Entries

<!-- This section is auto-populated by scripts/track-learning-debt.sh -->
<!-- Do not edit manually -->

### Recent Test Failures (Last 7 Days)

*No automated entries yet. Run `npm run track:debt` to populate.*

---

## Notes for Teachers

### High-Priority Fixes
1. Add type guard comparison table (affects 40% of students)
2. Create React state mutation warning banner
3. Add async/await flow diagram

### Low-Priority Improvements
- More edge case examples in fixtures
- Video walkthrough for complex concepts
- Interactive quiz for type checking

### Feedback from Students
> "I wish I understood the difference between `typeof` and `instanceof` earlier"
> — Student feedback from A1S1

> "The hints were helpful but I needed more examples of what NOT to do"
> — Student feedback from A1S1

---

## Action Plan

### This Week
- [ ] Add type comparison table to A1S1 hints
- [ ] Create React anti-patterns guide
- [ ] Review all sessions for similar gaps

### This Month
- [ ] Analyze test failure patterns
- [ ] Survey students on confusing concepts
- [ ] Update teacher pack templates

### This Quarter
- [ ] Build interactive learning modules
- [ ] Create video supplements
- [ ] Implement adaptive hints based on failures

---

**Last Updated**: 2024-01-15
**Next Review**: 2024-01-22
