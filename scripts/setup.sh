#!/bin/bash

# Setup Script for Stoa of Attalos
# This script helps new contributors get started quickly

set -e

echo "🏛️  Welcome to Stoa of Attalos Setup"
echo "===================================="
echo ""

# Check if running in Dev Container
if [ -f "/.dockerenv" ] || [ -n "$REMOTE_CONTAINERS" ]; then
    echo "✓ Running in Dev Container - dependencies should already be installed"
    echo ""
else
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Make verify script executable
chmod +x scripts/verify-setup.sh

# Run verification
echo "🔍 Verifying setup..."
echo ""
./scripts/verify-setup.sh

echo ""
echo "🎉 Setup complete!"
echo ""
echo "📚 Useful commands:"
echo "  npm run lint          - Check code quality"
echo "  npm run format        - Format code"
echo "  npm run typecheck     - Check types"
echo "  npm test              - Run tests"
echo "  npm run test:watch    - Run tests in watch mode"
echo ""
echo "📖 Documentation:"
echo "  README.md             - Project overview"
echo "  CONTRIBUTING.md       - Contribution guidelines"
echo "  .devcontainer/README.md - Dev container info"
echo ""
echo "Happy coding! 🚀"
