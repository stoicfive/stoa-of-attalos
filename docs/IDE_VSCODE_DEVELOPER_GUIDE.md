# VS Code Deep Link System

This document explains how the student portal opens project files directly in VS Code, how the configuration is stored, and what to extend if you need to support new lessons or editors.

## Overview

Students can click **IDE Actions** buttons or in-line **Open in VS Code** links and the app will:

1. Prefer the learner's local VS Code workspace (deep link via `vscode://file/...`).
2. Fallback to **VS Code for Web** (`https://vscode.dev/github/...`) when no local workspace is configured.
3. Offer helper actions (copy command, configure workspace path) that make first-run setup friendly.

The implementation lives in:

| Area | Location | Purpose |
| --- | --- | --- |
| Hook | `apps/student-portal/hooks/use-vscode-workspace.ts` | Core logic for reading/storing the workspace path, generating links, and fallbacks |
| UI | `apps/student-portal/components/session/ide-actions-card.tsx` | Main card that exposes quick actions in the sidebar, includes starter file button |
| Modal | `apps/student-portal/components/session/workspace-path-modal.tsx` | Collects/validates the local path from the student |
| Task Links | `apps/student-portal/components/session/vscode-file-link.tsx` | Reusable button for task/file lists |
| Example usage | `apps/student-portal/app/lessons/a1s1/activity/page.tsx` | Shows how task lists push links to students and starter file integration |

All components are client components because they depend on `localStorage`, `window.open`, and Clipboard APIs.

## How the Hook Works

`useVSCodeWorkspace` is the single source of truth:

- Reads the environment variable `NEXT_PUBLIC_VSCODE_WORKSPACE_PATH` (optional).
- Reads/writes a persisted user path in `localStorage` under the key `stoa-vscode-workspace-path`.
- Exposes helpers (`openProject`, `openPath`, `openWeb`, `openWebFile`, `copyCommand`, `setWorkspacePath`, `clearWorkspacePath`) that UI components consume.
- Generates web fallbacks when no local path is available. The hook infers the GitHub repository path from `APP_CONFIG.repository` and uses `NEXT_PUBLIC_DEFAULT_BRANCH` (defaults to `main`) to build file URLs. For VS Code Web it uses direct file URLs (`https://vscode.dev/github/org/repo/blob/branch/path/to/file`) to open files directly in the editor.

```ts
const {
  openPath,
  openProject,
  openWebFile,
  copyCommand,
  workspacePath,
  hasWorkspacePath,
} = useVSCodeWorkspace();
```

> 📝 **Note:** Calling the hook in multiple components is safe; the hook reads from storage once per mount and always returns consistent functions.

## IDE Actions Card

`IDEActionsCard` uses the hook to surface:

- Open project button (local VS Code or VS Code web fallback)
- **Starter file button** - Opens the lesson's main starter file directly in VS Code Web
- Direct link buttons for top 3 lesson files (`session.ideFiles`)
- Links for hints and rubric files
- Buttons to launch VS Code for Web, configure path, copy `code ...` or `git clone ...` commands
- Tooltip context that informs students about the current mode

The modal is opened from the card and writes back via `setWorkspacePath`. Clearing the value resets to using environment fallback or VS Code web.

### Starter File Feature

Pass a `starterFile` prop to `IDEActionsCard` to enable quick access to the main file students should work on:

```tsx
<IDEActionsCard
  ideFiles={session?.ideFiles}
  testCommand={session?.testCommand}
  hintsPath={session?.hintsPath}
  rubricPath={session?.rubricPath}
  starterFile="lessons/01-typescript-basics/trade.ts"
/>
```

When provided, the "VS Code for Web" button changes to "Open Starter File in VS Code Web" and opens directly to that file in the GitHub repository. This eliminates the need for students to search for the correct file to begin working.

**URL Format:**

The `openWebFile` function generates URLs in this format:
```
https://vscode.dev/github/{org}/{repo}/blob/{branch}/{filepath}
```

Example for A1S1:
```
https://vscode.dev/github/stoicfive/stoa-of-attalos/blob/main/lessons/01-typescript-basics/trade.ts
```

This opens the file directly in VS Code Web's editor, ready for students to start coding.

**Current Implementations:**
- **A1S1**: `lessons/01-typescript-basics/trade.ts` - TypeScript trade interface
- **A1S2**: `lessons/02-database-models/trade_model.py` - SQLAlchemy model  
- **A1S3**: `lessons/03-api-endpoints/trades_router.py` - FastAPI router with TODO markers

## Task Lists

`VSCodeFileLink` wraps `useVSCodeWorkspace` and is used in lesson pages to make each file in a task clickable. In `a1s1` the "Files to Create" list now renders a grid of buttons that open local VS Code or the web fallback automatically.

To hook this up for new lesson pages:

```tsx
import { VSCodeFileLink } from "@/components/session";

{task.files?.map((file) => (
  <VSCodeFileLink key={file} path={file} />
))}
```

## Adding New Lessons / Sessions

1. Ensure the session metadata (`apps/student-portal/lib/session-metadata.ts` or `session-tasks.ts`) includes the correct relative file paths under `ideFiles` or `task.files`.
2. Use `VSCodeFileLink` wherever those file paths are presented to students.
3. If new lesson pages follow a similar pattern to `a1s1`, copy the “Files to Create” block and adjust as needed.

## Environment Variables

- `NEXT_PUBLIC_VSCODE_WORKSPACE_PATH` – optional project root path. Useful in managed environments (e.g., teacher portal demos).
- `NEXT_PUBLIC_DEFAULT_BRANCH` – branch name used for VS Code web file links (defaults to `main`).

Remember to update `.env.example` when you introduce new env vars.

## Extending the System

- **Additional Editors:** You can extend the hook to generate other URI schemes (for JetBrains, Cursor, etc.) and gate them behind feature flags.
- **Session-specific paths:** If some sessions require a different workspace root, make `useVSCodeWorkspace` accept an override (e.g., `useVSCodeWorkspace({ repositoryUrl })`) and pass per-session data.
- **Telemetry:** Wrap the returned `openPath` function to send analytics events before delegating to the hook’s handler.

## Troubleshooting

- If links still open VS Code for Web after configuring a local path, confirm the saved path appears in the card tooltip. If not, the path could be invalid or blocked by the browser (not running in HTTPS).
- Clipboard copying requires a secure context (localhost is fine). The hook falls back to `window.prompt` if the browser denies direct clipboard access.
- The modal handles focus trapping manually; if you add more inputs/buttons, ensure they are inside the modal root so the trap stays intact.
