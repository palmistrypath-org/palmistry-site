# AI Handoff - Palmistry Path

## Before working
1. Read `../AGENTS.md`.
2. If `ACTIVE_TASK.md` is active, read it next.
3. Read only the task-relevant portions of `PRODUCT_VISION.md`, `CURRENT_STATE.md`, recent/relevant `DECISIONS.md`, `ROADMAP.md`, and `ARCHITECTURE.md` as directed by the task.
4. For editorial work, open only relevant sections of the editorial guide/template and any directly relevant specialized planning doc.
5. Search/grep before opening large source/content files.
6. Inspect the actual relevant implementation/content and current Git state.

## Current continuation context
Current focus: none. `ACTIVE_TASK.md` is INACTIVE and awaiting the next assignment.

Latest completed implementation: on 2026-08-10 Remediation Batch 1, Trust & Technical Safety, moved the Complete Reference to waitlist-only, removed the dead paid checkout flow, preserved the Complete Reference PDF source under `src/private/`, disabled AdSense temporarily, centralized indexability policy in `src/indexability.mjs`, and added generated-output trust/indexability audit coverage.

Known follow-up: `npm audit --omit=dev` still reports 4 vulnerabilities that require the breaking `npm audit fix --force` path to Astro 7.2.0 and sharp 0.35.3. Do not force that migration without explicit approval.

Key current implementation facts are summarized in `CURRENT_STATE.md` and `ARCHITECTURE.md`; verify source before relying on them for a change.

## Immediate next action
Await the user's next Palmistry Path objective. Start it from a clean context if possible (`/clear`), reconstructing from Git plus targeted canonical docs rather than chat history.
