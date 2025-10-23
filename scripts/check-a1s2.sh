#!/bin/bash

set -e

echo "🔍 Checking A1S2 completion..."
echo ""

# Check files exist
echo "📁 Checking required files..."
required_files=(
    "apps/api/models/trade.py"
    "apps/api/tests/test_trade_model.py"
    "apps/api/tests/conftest.py"
    "apps/api/database.py"
    "alembic.ini"
    "alembic/env.py"
)

for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ Missing: $file"
        exit 1
    fi
    echo "✅ Found: $file"
done
echo ""

# Check database is running
echo "🗄️  Checking database connection..."
poetry run python -c "from apps.api.database import engine; engine.connect()" 2>/dev/null || {
    echo "❌ Cannot connect to database. Is PostgreSQL running?"
    echo "   Try: docker-compose -f .devcontainer/docker-compose.yml up -d"
    exit 1
}
echo "✅ Database connection successful"
echo ""

# Run tests
echo "🧪 Running tests..."
poetry run pytest apps/api/tests/ -v --tb=short || {
    echo "❌ Tests failed"
    exit 1
}
echo ""

# Check coverage
echo "📊 Checking test coverage..."
poetry run pytest apps/api/tests/ \
    --cov=apps/api/models \
    --cov-report=term-missing \
    --cov-fail-under=70 || {
    echo "❌ Coverage below 70%"
    exit 1
}
echo ""

# Check migrations
echo "🗄️  Checking migrations..."
poetry run alembic upgrade head || {
    echo "❌ Migration failed"
    exit 1
}
echo "✅ Migrations applied successfully"
echo ""

# Run linters
echo "🔍 Running linters..."
poetry run ruff check apps/api/ || {
    echo "❌ Linting errors found"
    exit 1
}
echo "✅ No linting errors"
echo ""

# Check type hints
echo "🔍 Running type checker..."
poetry run mypy apps/api/ || {
    echo "❌ Type errors found"
    exit 1
}
echo "✅ No type errors"
echo ""

# Check migrations exist
echo "📁 Checking migrations..."
if [ ! "$(ls -A alembic/versions/*.py 2>/dev/null)" ]; then
    echo "❌ No migration files found in alembic/versions/"
    exit 1
fi
echo "✅ Migration files found"
echo ""

echo "🎉 All checks passed!"
echo ""
echo "✅ A1S2 validation complete!"
echo ""
echo "Next steps:"
echo "1. Commit your changes"
echo "2. Write 'What I Learned' in your PR"
echo "3. Submit for review"
