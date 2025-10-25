# COMMANDS.md

Record of terminal commands executed while working on this project. Commands are grouped by purpose and include representative arguments that were used.

## Repository & Directory Inspection
- `ls -a` — Inspect repository root contents.
- `ls apps` — List application packages.
- `ls apps/api` — Inspect FastAPI backend directory.
- `ls apps/api/models` — View backend models folder.
- `ls apps/student-portal` — Inspect Next.js portal structure.
- `ls packages` / `ls packages/types` / `ls packages/ui` — Inspect shared package workspaces.
- `ls lessons` / `ls lessons/01-typescript-basics` / `ls lessons/02-database-models` / `ls lessons/03-api-endpoints` — Review lesson scaffolding.
- `ls tests` / `ls tests/fixtures` — Review shared test utilities.
- `ls docs` — List documentation assets.
- `ls scripts` — Review helper scripts.
- `ls .github/workflows` — Inspect CI workflows.
- `ls apps/student-portal/components` / `ls apps/student-portal/components/ui` / `ls apps/student-portal/components/session` — Explore shared UI components.
- `ls apps/student-portal/app/lessons/a1s1` (and `a1s2`, `a1s3`) — Inspect lesson-specific Next.js routes.
- `ls COMMANDS.md` — Check for existing command log.

## File Content Review
- `sed -n '1,160p' README.md` and `sed -n '160,320p' README.md` — Read project overview.
- `sed -n '1,200p' pyproject.toml` — Inspect Python dependencies and tooling.
- `cat package.json` — Review Node workspace configuration.
- `sed -n '1,200p' apps/student-portal/app/page.tsx` — Inspect homepage component.
- `sed -n '1,200p' apps/student-portal/app/dashboard/page.tsx` — Review dashboard UI.
- `sed -n '1,200p' apps/student-portal/app/lessons/page.tsx` — Review lessons index.
- `sed -n '1,200p' apps/student-portal/app/lessons/a1s1/page.tsx` — Inspect lesson overview page.
- `sed -n '1,200p' apps/student-portal/components/session-overview/session-overview-layout.tsx` — Review layout components.
- `sed -n '1,200p' apps/student-portal/components/ui/button.tsx` — Inspect shared button.
- `sed -n '1,200p' apps/student-portal/lib/session-metadata.ts` — Examine session metadata.
- `sed -n '1,200p' apps/student-portal/lib/utils.ts` — Review helper utilities.
- `sed -n '1,200p' apps/student-portal/hooks/use-session-state.ts` — Inspect session state hook.
- `sed -n '1,200p' apps/student-portal/lib/session-tasks.ts` — Review lesson task data.
- `sed -n '1,200p' apps/student-portal/components/session/session-activity-layout.tsx` — Inspect session layout.
- `sed -n '1,200p' lessons/01-typescript-basics/trade.ts` — Review lesson TODO scaffolding.
- `sed -n '1,200p' lessons/01-typescript-basics/validators.ts` — Review validation TODOs.
- `sed -n '1,200p' lessons/01-typescript-basics/tests/validators.test.ts` — Inspect unit test templates.
- `sed -n '1,200p' lessons/02-database-models/trade_model.py` / `database.py` — Review database lesson.
- `sed -n '1,200p' lessons/02-database-models/tests/test_trade_model.py` / `conftest.py` — Review database tests.
- `sed -n '1,200p' scripts/check-a1s1.sh` / `scripts/check-a1s2.sh` — Inspect validation scripts.
- `sed -n '1,200p' tests/example.test.ts` — Review sample Vitest file.
- `sed -n '1,200p' lessons/START_HERE.md` — Read student onboarding.
- `sed -n '1,160p' teacher/a1s1/hints.md` — Review teacher hints.
- `sed -n '1,200p' .github/workflows/ci.yml` (plus continuation) — Inspect CI configuration.
- `sed -n '1,200p' .pre-commit-config.yaml` — Review pre-commit hooks.
- `cat eslint.config.js` — Inspect ESLint settings.
- `sed -n '1,160p' apps/student-portal/next.config.ts` — Review Next.js config.
- `cat apps/student-portal/tsconfig.json` — Inspect TypeScript compiler options.
- `sed -n '1,200p' apps/student-portal/app/layout.tsx` — Review root layout.
- `sed -n '1,200p' apps/student-portal/app/globals.css` — Inspect design tokens.
- `sed -n '1,200p' apps/student-portal/components/theme-provider.tsx` / `theme-toggle.tsx` — Review theming components.
- `sed -n '1,200p' apps/student-portal/components/session/task-card.tsx` — Inspect task UI.
- `sed -n '1,200p' apps/student-portal/app/lessons/a1s1/activity/page.tsx` / `a1s2` / `a1s3` — Review activity pages.
- `sed -n '1,200p' apps/student-portal/components/session/ide-actions-card.tsx` (multiple revisions) — Inspect IDE card.
- `sed -n '1,200p' apps/student-portal/components/session/workspace-path-modal.tsx` — Review modal implementation.
- `sed -n '1,200p' apps/student-portal/hooks/use-vscode-workspace.ts` — Inspect VS Code hook.
- `nl -ba <file>` variants — View files with line numbers for targeted edits.

## Search & Discovery
- `rg "Dialog" apps/student-portal/components -g"*.tsx"` — Search for dialog usage.
- `rg "Tooltip" -g"*.tsx" apps/student-portal/components` — Search for tooltip usage.
- `rg "function getSessionTasks" -n` — Locate function definitions.

## File Status & Utilities
- `ls COMMANDS.md` — Confirm command log presence before creation.

## Database & MCP Server
- **PostgreSQL MCP Server** — Installed PostgreSQL Model Context Protocol server in Windsurf
  - **Connection URL**: `postgresql://postgres:postgres@localhost:5432/trading_journal`
  - **Purpose**: Provides AI-assisted read-only access to PostgreSQL database
  - **Features**: 
    - Execute read-only SQL queries via AI
    - Inspect database schemas and table structures
    - Query database metadata automatically
  - **Configuration**: Added to Windsurf MCP server list
  - **Usage**: Available through Windsurf AI assistant for database queries

## Lesson Starter Files
- **A1S3 FastAPI Endpoints** — Created starter code and test files for lesson 03
  - `lessons/03-api-endpoints/trades_router.py` — FastAPI router with TODO markers for all CRUD endpoints
  - `lessons/03-api-endpoints/trade_schema.py` — Pydantic schemas for request/response validation
  - `lessons/03-api-endpoints/tests/test_trades_api.py` — Test file with TODO markers for 14 test functions
  - `lessons/03-api-endpoints/tests/conftest.py` — Pytest fixtures and test configuration
  - Files include comprehensive docstrings and examples
  - Students uncomment and implement the TODO sections
  - Test files follow TDD approach: tests exist first, students fill in implementations

Commands will continue to be appended to this file as new tooling or scripts are executed.
