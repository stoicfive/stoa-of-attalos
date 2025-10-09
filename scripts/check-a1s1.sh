#!/usr/bin/env bash
set -euo pipefail

echo "🏛️  A1S1 Check Script - Trading Journal Setup"
echo "=============================================="
echo ""

# Track failures
FAILURES=0

# Lint
echo "📝 Running ESLint..."
if npm run lint; then
    echo "✅ Linting passed"
else
    echo "❌ Linting failed"
    ((FAILURES++))
fi
echo ""

# Type check
echo "🔍 Running TypeScript type check..."
if npm run typecheck; then
    echo "✅ Type checking passed"
else
    echo "❌ Type checking failed"
    ((FAILURES++))
fi
echo ""

# Unit tests
echo "🧪 Running unit tests..."
if npm test; then
    echo "✅ Tests passed"
else
    echo "❌ Tests failed"
    ((FAILURES++))
fi
echo ""

# Coverage check
echo "📊 Checking test coverage..."
if npm run test:coverage; then
    echo "✅ Coverage threshold met (≥70%)"
else
    echo "⚠️  Coverage below threshold"
    ((FAILURES++))
fi
echo ""

# Format check
echo "💅 Checking code formatting..."
if npm run format:check; then
    echo "✅ Code is properly formatted"
else
    echo "❌ Code needs formatting (run 'npm run format')"
    ((FAILURES++))
fi
echo ""

# Summary
echo "=============================================="
if [ $FAILURES -eq 0 ]; then
    echo "✅ All checks passed! Ready to submit."
    echo ""
    echo "📝 Don't forget to add your 'What I Learned' section to the PR!"
    exit 0
else
    echo "❌ $FAILURES check(s) failed. Review the errors above."
    echo ""
    echo "💡 Tips:"
    echo "  - Run 'npm run format' to fix formatting"
    echo "  - Run 'npm run lint' to see linting errors"
    echo "  - Run 'npm test' to see test failures"
    exit 1
fi
