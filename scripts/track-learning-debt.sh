#!/usr/bin/env bash
# Track learning debt from test failures
set -euo pipefail

DEBT_FILE="docs/LEARNING_DEBT.md"
TEMP_FILE=$(mktemp)

echo "📊 Analyzing test failures for learning debt patterns..."

# Run tests and capture failures
TEST_OUTPUT=$(npm test 2>&1 || true)

# Extract failure patterns
FAILURES=$(echo "$TEST_OUTPUT" | grep -E "FAIL|Error|Expected" || true)

if [ -z "$FAILURES" ]; then
    echo "✅ No test failures detected"
    exit 0
fi

# Count failures by type
TYPE_ERRORS=$(echo "$FAILURES" | grep -c "TypeError" || echo "0")
VALIDATION_ERRORS=$(echo "$FAILURES" | grep -c "validation" || echo "0")
ASYNC_ERRORS=$(echo "$FAILURES" | grep -c "Promise\|async\|await" || echo "0")

# Generate report
cat > "$TEMP_FILE" << EOF

### Auto-Generated Entry - $(date +%Y-%m-%d)

**Test Run Summary:**
- Type Errors: $TYPE_ERRORS
- Validation Errors: $VALIDATION_ERRORS
- Async Errors: $ASYNC_ERRORS

**Top Failure Patterns:**
EOF

# Add top 5 most common errors
echo "$FAILURES" | head -5 >> "$TEMP_FILE"

# Append to learning debt file
sed -i.bak '/<!-- This section is auto-populated/r '"$TEMP_FILE" "$DEBT_FILE"

echo "📝 Learning debt updated in $DEBT_FILE"
echo ""
echo "Summary:"
echo "  - Type Errors: $TYPE_ERRORS"
echo "  - Validation Errors: $VALIDATION_ERRORS"
echo "  - Async Errors: $ASYNC_ERRORS"

rm "$TEMP_FILE"
