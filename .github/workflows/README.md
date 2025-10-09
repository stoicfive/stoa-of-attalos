# GitHub Actions CI

This directory contains the Continuous Integration (CI) workflows for the project.

## CI Workflow

The main CI workflow (`.github/workflows/ci.yml`) runs automatically on:

- Push to `main` or `develop` branches
- Pull requests targeting `main` or `develop` branches

### Checks Performed

1. **Lint**: Runs ESLint to check code quality and style
2. **Type Check**: Runs TypeScript compiler to verify type safety
3. **Test**: Runs the test suite with Vitest
4. **Format Check**: Verifies code is formatted with Prettier

All checks must pass before a pull request can be merged.

## Running Checks Locally

Before pushing code, run these commands to ensure CI will pass:

```bash
# Install dependencies
npm install

# Run all checks
npm run lint
npm run typecheck
npm test
npm run format:check

# Auto-fix formatting issues
npm run format
```

## CI Status Badge

Add this badge to your README to show CI status:

```markdown
![CI](https://github.com/YOUR_USERNAME/YOUR_REPO/workflows/CI/badge.svg)
```

## Customization

To modify the CI workflow:

1. Edit `.github/workflows/ci.yml`
2. Add or remove jobs as needed
3. Adjust Node.js version if required
4. Add additional workflow files for other automation tasks

## Troubleshooting

- **CI failing but local checks pass**: Ensure you've committed all necessary config files
- **Dependency installation fails**: Check that `package.json` and `package-lock.json` are in sync
- **Timeout issues**: Increase the timeout in the workflow file if needed
