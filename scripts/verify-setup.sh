#!/bin/bash

# Verify Setup Script
# This script checks that the development environment is properly configured

set -e

echo "🔍 Verifying development environment setup..."
echo ""

# Check Node.js
echo "✓ Checking Node.js..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo "  Node.js version: $NODE_VERSION"
else
    echo "  ❌ Node.js not found. Please install Node.js 20 or later."
    exit 1
fi

# Check npm
echo "✓ Checking npm..."
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    echo "  npm version: $NPM_VERSION"
else
    echo "  ❌ npm not found."
    exit 1
fi

# Check if node_modules exists
echo "✓ Checking dependencies..."
if [ -d "node_modules" ]; then
    echo "  Dependencies installed ✓"
else
    echo "  ⚠️  Dependencies not installed. Running npm install..."
    npm install
fi

# Run linting
echo "✓ Running ESLint..."
if npm run lint; then
    echo "  Linting passed ✓"
else
    echo "  ❌ Linting failed. Run 'npm run lint' to see errors."
    exit 1
fi

# Run type checking
echo "✓ Running TypeScript type check..."
if npm run typecheck; then
    echo "  Type checking passed ✓"
else
    echo "  ❌ Type checking failed. Run 'npm run typecheck' to see errors."
    exit 1
fi

# Run tests
echo "✓ Running tests..."
if npm test; then
    echo "  Tests passed ✓"
else
    echo "  ❌ Tests failed. Run 'npm test' to see errors."
    exit 1
fi

# Check formatting
echo "✓ Checking code formatting..."
if npm run format:check; then
    echo "  Code formatting is correct ✓"
else
    echo "  ⚠️  Code needs formatting. Run 'npm run format' to fix."
fi

echo ""
echo "✅ All checks passed! Your environment is ready."
echo ""
echo "Next steps:"
echo "  - Start coding!"
echo "  - Run 'npm run test:watch' for continuous testing"
echo "  - Run 'npm run format' before committing"
