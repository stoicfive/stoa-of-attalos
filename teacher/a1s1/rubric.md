# A1S1 Grading Rubric

**Total Points**: 100

## Code Quality (30 points)

### TypeScript Usage (10 points)

- [ ] **10pts**: All types properly defined, no `any` types, interfaces well-documented
- [ ] **7pts**: Most types defined, minimal `any` usage, basic documentation
- [ ] **4pts**: Some types missing, frequent `any` usage, poor documentation
- [ ] **0pts**: Mostly untyped code, no interfaces

### Code Organization (10 points)

- [ ] **10pts**: Clear separation of concerns, logical file structure, reusable functions
- [ ] **7pts**: Reasonable organization, some coupling, mostly reusable
- [ ] **4pts**: Poor organization, tight coupling, duplicated code
- [ ] **0pts**: Chaotic structure, no clear organization

### Code Style (10 points)

- [ ] **10pts**: Follows all style guidelines, ≤300 lines per file, ≤50 lines per function
- [ ] **7pts**: Mostly follows guidelines, minor violations
- [ ] **4pts**: Frequent style violations, some files/functions too long
- [ ] **0pts**: Ignores style guidelines, very long files/functions

## Functionality (30 points)

### Trade Type & Validation (15 points)

- [ ] **15pts**: Complete Trade interface, all validation functions work correctly, handles all edge cases
- [ ] **11pts**: Trade interface complete, validation works for most cases, misses some edge cases
- [ ] **7pts**: Basic Trade interface, validation partially works, many edge cases missed
- [ ] **0pts**: Incomplete or non-functional validation

### Form Component (15 points)

- [ ] **15pts**: Form works perfectly, displays errors, calculates P&L correctly, good UX
- [ ] **11pts**: Form works, shows errors, P&L correct, basic UX
- [ ] **7pts**: Form partially works, some errors shown, P&L calculation issues
- [ ] **0pts**: Form doesn't work or is missing

## Testing (25 points)

### Test Coverage (10 points)

- [ ] **10pts**: ≥70% coverage, all critical paths tested
- [ ] **7pts**: 50-69% coverage, most critical paths tested
- [ ] **4pts**: 30-49% coverage, some critical paths missing
- [ ] **0pts**: <30% coverage or no tests

### Test Quality (10 points)

- [ ] **10pts**: Comprehensive tests, clear names, tests edge cases, follows AAA pattern
- [ ] **7pts**: Good tests, mostly clear names, some edge cases, reasonable structure
- [ ] **4pts**: Basic tests, unclear names, few edge cases, poor structure
- [ ] **0pts**: Poor or missing tests

### Test Pyramid (5 points)

- [ ] **5pts**: Proper distribution (~70% unit, ~25% integration, ~5% E2E)
- [ ] **3pts**: Reasonable distribution, slight imbalance
- [ ] **1pt**: Poor distribution, too many integration/E2E tests
- [ ] **0pts**: No consideration of test pyramid

## Process & Documentation (15 points)

### Git Practices (5 points)

- [ ] **5pts**: Clear, atomic commits with conventional commit messages
- [ ] **3pts**: Reasonable commits, mostly clear messages
- [ ] **1pt**: Few commits, unclear messages
- [ ] **0pts**: Single commit or very poor messages

### "What I Learned" (5 points)

- [ ] **5pts**: Insightful 3-5 bullets, demonstrates deep understanding
- [ ] **3pts**: 3-5 bullets, shows basic understanding
- [ ] **1pt**: <3 bullets or superficial understanding
- [ ] **0pts**: Missing or no understanding demonstrated

### Documentation (5 points)

- [ ] **5pts**: Clear JSDoc comments, README updated, inline comments where needed
- [ ] **3pts**: Some documentation, basic comments
- [ ] **1pt**: Minimal documentation
- [ ] **0pts**: No documentation

## Bonus Points (up to +10)

- [ ] **+5pts**: Exceptional code quality, creative solutions, goes beyond requirements
- [ ] **+3pts**: Added useful features (e.g., trade history, export functionality)
- [ ] **+2pts**: Excellent test coverage (>90%)
- [ ] **+2pts**: Accessibility considerations (ARIA labels, keyboard navigation)
- [ ] **+2pts**: Performance optimizations (memoization, lazy loading)

## Deductions

- [ ] **-5pts**: Linting errors present
- [ ] **-5pts**: TypeScript compilation errors
- [ ] **-10pts**: Tests don't pass
- [ ] **-10pts**: Missing Definition of Done items
- [ ] **-5pts**: Files >300 lines or functions >50 lines
- [ ] **-5pts**: Submitted late without prior communication

## Grade Scale

- **90-100**: Excellent - Exceeds expectations, production-ready code
- **80-89**: Good - Meets all requirements, solid implementation
- **70-79**: Satisfactory - Meets most requirements, some improvements needed
- **60-69**: Needs Improvement - Missing key requirements or poor quality
- **<60**: Unsatisfactory - Significant issues, requires rework

## Feedback Template

### Strengths

-
-
-

### Areas for Improvement

-
-
-

### Specific Recommendations

1.
2.
3.

### Next Steps

- ***

  **Grader Notes**: Focus on learning progress, not perfection. Provide actionable feedback that helps the student improve in the next session.
