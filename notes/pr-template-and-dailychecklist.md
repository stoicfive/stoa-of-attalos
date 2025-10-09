# PR Template & Daily Checklist

Use these two blocks:

---

## 1) **`.github/pull_request_template.md`**

````md
# Title

A<phase>S<session>: Short, action‑oriented title (e.g., "A1S1: sumPnL + /health + Top‑5 losers")

## Goal

One paragraph: what behavior/skill this PR completes for the lesson.

## Changes

- [ ] Key change 1
- [ ] Key change 2
- [ ] Any schema/migration notes

## How to Run Locally

```bash
./scripts/check-<phase-session>.sh
```

- Web: `pnpm -w dev` → open [http://localhost:3000](http://localhost:3000)
- API: `uvicorn apps.api.main:app --reload`
- DB: `psql <db>` or `docker compose up`

## Tests

- Unit: `pnpm -w test`
- API: `pytest -q`
- E2E: `npx playwright test`

### Test Evidence

Paste output snippets or screenshots for the main passing path.

## Definition of Done

- [ ] Required tests pass (see Teacher Pack)
- [ ] Behavior matches README acceptance criteria

## What I Learned (3–5 bullets)

-
-
-

## Reviewer Notes

- Areas I’m unsure about / want feedback on

## Risks / Rollback

- Risk: …
- Rollback: Revert commit SHA or toggle feature flag `…`

## Links

- Teacher Pack: `teacher/<phase-session>/README.md`
- Rubric: `teacher/<phase-session>/rubric.md`
- Issue/Task: (optional)
````

> **Tip:** Add this file to your repo at `.github/pull_request_template.md` so GitHub auto‑loads it for every PR.

---

## 2) **Notes Panel — Daily Checklist (copy/paste)**

```md
# Daily Lesson Checklist (Teacher↔Student)

## Before coding

- [ ] Activate `@teacher-mode`
- [ ] `@create-teacher-pack` for **<Phase><Session>** (timebox: 50 min)
- [ ] Quick recall quiz (answer from memory)
- [ ] Run `./scripts/check-<phase-session>.sh` and skim failing tests

## Focus Sprint #1 (25 min)

- [ ] Implement first TODO in `starter/`
- [ ] Re-run check script → read failures
- [ ] If blocked → `@stuck-protocol` (ask for _Tier‑1_ only)

## Diffuse Break (5 min)

- [ ] Walk/stretch; no screens; note 1 question to explore later

## Focus Sprint #2 (25 min)

- [ ] Finish TODOs; keep functions <50 lines
- [ ] All baseline tests green

## PR

- [ ] Open PR using template
- [ ] `@strict-reviewer` for rubric review
- [ ] Merge when green

## Reflection & Review

- [ ] Write 3–5 bullets in **What I Learned**
- [ ] Ask: “Create 10 flashcards + 10‑min quiz from today’s commits; schedule +24h and +7d.”
- [ ] Log 1 weakness for deliberate practice
```

---

### Optional: Commit Message Convention (drop into `.gitmessage`)

```text
lesson(<phase-session>): short imperative summary

Context: why change was needed
Changes: list the main edits
Tests: where/how covered
```

Add to git config:

```bash
git config commit.template .gitmessage
```
