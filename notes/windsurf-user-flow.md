# Windsurf User Flow — Teacher↔Student Coding Course (Trading Journal SaaS)

This file explains exactly **how you interact with Windsurf** to learn full‑stack by shipping a real app. It's optimized for a teacher‑generated coursework workflow (Teacher Packs with README, scaffolds, failing tests, rubrics, and hints).

---

## 1) What you do vs what Windsurf does

### You (Student)

- Set today's goal and timebox (two 25/5 sprints by default).
- Run the `check` script, read the failing tests, implement TODOs.
- Ask for help only after attempting (use the Stuck Protocol).
- Open a small PR and request strict review.
- Write "What I learned" bullets and schedule spaced review.

### Windsurf (Teacher)

- Generates the **Teacher Pack** per session: `README.md`, `starter/`, `tests/`, `hints.md` (3 tiers), `rubric.md`, and `scripts/check-<session>.sh`.
- Runs quizzes (recall + 10‑minute gates), reviews PRs against the rubric, and tailors next sessions from your gaps.

---

## 2) Before you start (one‑time)

1. Create repo with monorepo layout (`apps/web`, `apps/api`, `packages/db|ui|types`).
2. Add **Windsurf customizations** (Rules/Workflows/Memories). See `windsurf/` folder.
3. Install dependencies and Postgres locally; confirm basic commands run.

---

## 3) Daily loop (15‑minute setup → 2×25/5 work → 5‑minute reflection)

### A) Initiate teacher mode

```text
@teacher-mode
```

### B) Generate the Teacher Pack for today

```text
@create-teacher-pack
Phase: A1  Session: S1  Timebox: 50 minutes
Goal: implement sumPnL(), FastAPI /health, SQL Top 5 losers. Include failing tests and scripts.
```

### C) Quick recall

Windsurf gives a 60–90 sec quiz. Answer from memory.

### D) See what's failing

```bash
./scripts/check-a1s1.sh
```

Scan the failing tests and read `teacher/<phase-session>/README.md`.

### E) Work the first TODO (≤25 min)

- Edit the `starter/` files with `// TODO(student)` markers.
- Run the `check` script again.
- If still red, **attempt once more** before asking for help.

### F) If stuck, invoke the Stuck Protocol

```text
@stuck-protocol
I'm failing test <name>. Here's the minimal repro, inputs/outputs, and my hypothesis: ...
```

Windsurf reveals **Tier‑1 hint** first; ask explicitly for Tier‑2 or Tier‑3.

### G) Finish second 25‑min sprint

Get all baseline tests green for the session.

### H) Reflection & spaced review

- Add `What I learned` (3–5 bullets) to the PR description.
- Ask Windsurf to generate review items:

```text
Create 10 flashcards and a 10‑min quiz from today's commits. Schedule +24h and +7d.
```

---

## 4) Pull Request flow (strict reviewer)

### Open a PR

With:

- A clear title (`A1S1: sumPnL + /health + Top5 losers`).
- Description sections: _Goal_, _Implementation_, _Tests_, _What I learned_.

### Request strict review

```text
@strict-reviewer
Review against the rubric. Block merge unless: tests green, functions <50 lines, names are clear, and README is updated. Suggest one <10‑line refactor and one stretch test.
```

### Merge when approved

And the CI is green.

---

## 5) Level‑up gates (advance phases)

Trigger a gate when your last two sessions are green:

```text
@gate-check
Run the A1→A2 gate. Start with a 10‑minute quiz and ask me for an explain‑back. If I pass, generate the A2S1 Teacher Pack with rotated language focus.
```

Gate criteria:

- Timed quiz ≥80%.
- Coherent explain‑back of last 3 topics (no notes).
- From scratch: write one function, one route, one SQL query, and one unit test.

---

## 6) Files you'll touch each session

- `teacher/<phase-session>/README.md` — your instructions and checkpoints.
- `apps/*/lesson-*/starter/*` — edit here to satisfy tests.
- `tests/*` — read failing tests; don't edit unless instructed.
- `teacher/<phase-session>/hints.md` — Windsurf reveals tiers on request.
- `scripts/check-<phase-session>.sh` — your one‑liner to run lint/type/tests.

---

## 7) Stuck Protocol (what to paste when blocked)

```text
@stuck-protocol
Goal: <behavior under test>
Minimal repro: <tiny file/function>
Inputs/Outputs observed: <logs>
What I tried: <2 concrete attempts>
My hypothesis: <short guess>
Request: reveal Tier‑1 hint only.
```

---

## 8) Weekly rhythm

- **Mon:** pick 3–5 micro‑goals; request a Teacher Pack for each.
- **Tue–Thu:** interleaved sessions (TS ↔ Python ↔ SQL).
- **Fri:** mini feature end‑to‑end + tests + PR.
- **Sun:** 15‑minute spaced review quiz covering the week.

---

## 9) Common commands you'll reuse

```text
@teacher-mode
@create-teacher-pack  # generate today's coursework
@stuck-protocol       # structured debug help (tiered hints)
@strict-reviewer      # rubric-based PR review
@next-from-gaps       # design next session from my failures
@gate-check           # level‑up gate and new phase pack
```

---

## 10) Success signals (how you know it's working)

- Time from red → green is decreasing.
- You can re‑implement last topic **from scratch** without looking.
- You explain design choices clearly in PRs.
- Your quiz and spaced‑review scores trend up.

---

## 11) FAQ

**Q: Can I peek at solutions?**  
A: Ask explicitly. Windsurf should keep solutions in a separate branch (e.g., `solutions/a1s1`). Prefer hints first.

**Q: How big should my PR be?**  
A: One session = one PR. Keep it small; include "What I learned."

**Q: How do I rotate languages?**  
A: Ask `@next-from-gaps` to prioritize your weakest area and alternate TS/Python/SQL weekly.

---

## 12) First run quickstart

1. Activate `@teacher-mode`.
2. `@create-teacher-pack` for **A1S1** (50 minutes).
3. Run `./scripts/check-a1s1.sh`, read failures, implement TODOs.
4. PR → `@strict-reviewer` → merge when green.
5. Request spaced‑review flashcards for +24h.
