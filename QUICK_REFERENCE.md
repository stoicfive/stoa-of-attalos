# Quick Reference Card

## 🚀 Getting Started

### Dev Container (Recommended)

```bash
# 1. Open in VS Code
# 2. Click "Reopen in Container"
# 3. Done! ✨
```

### Local Setup

```bash
npm install
npm run verify
```

## 📝 Common Commands

### Development

```bash
npm run lint          # Check code quality
npm run format        # Auto-format code
npm run typecheck     # Check types
npm test              # Run tests
npm run test:watch    # Watch mode
npm run check:all     # Run all checks
```

### Setup & Verification

```bash
npm run setup         # Initial setup
npm run verify        # Verify environment
```

## 🔄 Git Workflow

```bash
# Start new feature
git checkout -b feature/my-feature

# Make changes, then check
npm run check:all

# Commit
git add .
git commit -m "feat: description"

# Push and create PR
git push origin feature/my-feature
```

## ✅ Pre-Commit Checklist

- [ ] `npm run format` - Code formatted
- [ ] `npm run lint` - No lint errors
- [ ] `npm run typecheck` - No type errors
- [ ] `npm test` - All tests pass
- [ ] Commit message follows convention

## 📋 Commit Message Format

```
<type>: <description>

Types:
  feat:     New feature
  fix:      Bug fix
  docs:     Documentation
  style:    Formatting
  refactor: Code restructuring
  test:     Adding tests
  chore:    Maintenance
```

## 🏗️ Project Structure

```
.
├── .devcontainer/    # Dev environment config
├── .github/          # CI/CD & templates
├── apps/             # Applications
├── packages/         # Shared packages
├── teacher/          # Teacher resources
├── tests/            # Test files
└── scripts/          # Helper scripts
```

## 🔧 Configuration Files

| File               | Purpose                |
| ------------------ | ---------------------- |
| `eslint.config.js` | Linting rules          |
| `.prettierrc.json` | Formatting rules       |
| `tsconfig.json`    | TypeScript config      |
| `vitest.config.ts` | Test configuration     |
| `package.json`     | Dependencies & scripts |

## 🐛 Troubleshooting

### Dev Container won't start

```bash
# Rebuild without cache
Cmd+Shift+P → "Dev Containers: Rebuild Without Cache"
```

### Tests failing locally

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm test
```

### CI failing but local passes

```bash
# Ensure all files committed
git status

# Run exact CI checks
npm run check:all
```

### Formatting issues

```bash
# Auto-fix all files
npm run format
```

## 📚 Documentation

- `README.md` - Project overview
- `CONTRIBUTING.md` - Contribution guide
- `SETUP_SUMMARY.md` - Complete setup details
- `.devcontainer/README.md` - Dev container info
- `.github/workflows/README.md` - CI/CD info

## 🆘 Getting Help

1. Check documentation files above
2. Search existing issues
3. Ask in pull request comments
4. Create new issue with template

## 🎯 CI Checks (Must Pass)

1. ✅ ESLint
2. ✅ TypeScript
3. ✅ Tests
4. ✅ Prettier

## 💡 Pro Tips

- Use `npm run test:watch` during development
- Enable "Format on Save" in VS Code
- Run `npm run verify` before pushing
- Use Dev Container for zero-config setup
- Check CI status before requesting review

---

**Keep this handy!** Bookmark or print for quick reference.
