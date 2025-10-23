# A1S1: Trading Journal - Project Setup & First Entry

**Phase**: A (Foundation)  
**Session**: 1  
**Timebox**: 50 minutes (2× 25/5 Pomodoro)  
**Language Focus**: TypeScript

## 🎯 Learning Objectives

By the end of this session, you will:

1. Set up a Next.js project with TypeScript
2. Create a basic data model for a trade entry
3. Implement a simple form to capture trade data
4. Write unit tests for your data validation logic
5. Understand the test pyramid (70% unit / 25% integration / 5% E2E)

## 📚 Prerequisites

- Node.js 20+ installed
- Basic understanding of TypeScript
- Familiarity with React concepts

## 🏗️ What You'll Build

A simple trade entry form that captures:

- **Symbol**: Stock ticker (e.g., "AAPL")
- **Entry Price**: Price at which you entered the trade
- **Exit Price**: Price at which you exited
- **Shares**: Number of shares traded
- **Date**: When the trade occurred

## 📋 Steps

### Sprint 1 (25 minutes)

1. **Create the Trade type** (`packages/types/src/trade.ts`)
   - Define the `Trade` interface
   - Add validation rules (symbol must be uppercase, prices must be positive, etc.)

2. **Implement validation functions** (`packages/types/src/validators.ts`)
   - `validateSymbol(symbol: string): boolean`
   - `validatePrice(price: number): boolean`
   - `validateShares(shares: number): boolean`
   - `validateTrade(trade: Trade): ValidationResult`

3. **Complete unit tests** (`packages/types/src/__tests__/validators.test.ts`)
   - Test file already exists with TODO(student) markers
   - Find test functions with `pass` statements
   - Replace `pass` with actual test implementations
   - Test each validation function
   - Test edge cases (empty strings, negative numbers, etc.)
   - Aim for 100% coverage on validation logic

### Sprint 2 (25 minutes)

4. **Create the TradeForm component** (`apps/web/src/components/TradeForm.tsx`)
   - Use controlled inputs for each field
   - Display validation errors
   - Calculate P&L automatically

5. **Complete component tests** (`apps/web/src/components/__tests__/TradeForm.test.tsx`)
   - Test file already exists with TODO(student) markers
   - Find test functions with `pass` statements
   - Replace `pass` with actual test implementations
   - Test form rendering
   - Test validation error display
   - Test P&L calculation

6. **Run validation script**
   ```bash
   ./scripts/check-a1s1.sh
   ```

## ✅ Definition of Done (DoD)

- [ ] All TypeScript files compile without errors
- [ ] All tests pass (`npm test`)
- [ ] Code coverage ≥70% (`npm run test:coverage`)
- [ ] No ESLint errors (`npm run lint`)
- [ ] Code is formatted (`npm run format`)
- [ ] Files are ≤300 lines, functions ≤50 lines
- [ ] Trade type is properly defined with JSDoc comments
- [ ] Validation functions handle edge cases
- [ ] Form displays validation errors to the user
- [ ] P&L calculation is correct

## 🧪 Test Requirements

Follow the test pyramid:

- **70% Unit Tests**: Validation functions, utility functions
- **25% Integration Tests**: Component rendering, form submission
- **5% E2E Tests**: (Not required for A1S1, will add in later sessions)

## 📊 Success Metrics

- All tests green ✅
- Coverage report shows ≥70%
- ESLint shows 0 errors
- Form works in the browser

## 🎓 Recall Quiz (60-90 seconds)

Before you start, answer these questions:

1. What are the three levels of the test pyramid?
2. Why do we validate data on the client side?
3. What's the difference between `interface` and `type` in TypeScript?
4. What does "controlled component" mean in React?

## 💡 Key Concepts

### Test Pyramid

- **Unit Tests (70%)**: Fast, isolated, test single functions
- **Integration Tests (25%)**: Test component interactions
- **E2E Tests (5%)**: Slow, test entire user flows

### Validation Strategy

- Client-side: Immediate feedback, better UX
- Server-side: Security, data integrity (we'll add this later)

### Type Safety

- Use TypeScript to catch errors at compile time
- Define clear interfaces for your data models
- Leverage type inference where possible

## 🚀 Getting Started

```bash
# Create the necessary directories
mkdir -p packages/types/src/__tests__
mkdir -p apps/web/src/components/__tests__

# Start with the tests (TDD approach)
# 1. Write a failing test
# 2. Implement the minimum code to pass
# 3. Refactor

# Run tests in watch mode
npm run test:watch
```

## 📝 What to Submit

Create a PR with:

1. All code changes
2. Test files with good coverage
3. A "What I Learned" section (3-5 bullets) in the PR description

## 🆘 Need Help?

1. Check `hints.md` for 3-tier hints (try Tier 1 first!)
2. Review the test examples in `tests/example.test.ts`
3. Ask for help if stuck for >15 minutes

---

**Remember**: Focus on learning, not perfection. Make it work, then make it better! 🎯
