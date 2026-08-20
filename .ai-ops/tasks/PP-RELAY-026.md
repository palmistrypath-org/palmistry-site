# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-026

## Revision
1

## Risk Class
STANDARD

## Objective
Add a small automated repository audit that detects future drift between the published blog-post count documented in `docs/editorial-backlog.md` and the actual current `src/content/blog` collection. Integrate the check into existing audit tooling with a fail-closed mismatch message so the count does not silently drift again.

## Why this task
PP-RELAY-025 mechanically corrected a real inventory drift from 53 to 60 published posts. Preventing recurrence is higher-value than repeatedly fixing the documentation by hand and is a bounded, objectively testable follow-up. This also gives the v2C pilot a STANDARD technical task after one SOURCE_SENSITIVE and one LOW task.

## Allowed scope
- Inspect existing audit scripts and choose the smallest maintainable integration point.
- Add a deterministic check that reads the documented published count from `docs/editorial-backlog.md` and compares it with the actual current blog collection count.
- Prefer integrating into `npm run content-audit` or another already-required audit path rather than creating an unused standalone tool.
- Emit a clear failure message showing documented vs actual counts when they differ.
- Add/update narrowly relevant tests or audit fixtures only if the repository already has a suitable pattern; otherwise prove behavior with bounded local verification, including a controlled mismatch test that does not leave repository content altered.
- Update concise canonical documentation only if the audit behavior materially changes documented project tooling.
- Necessary Relay result/bookkeeping files may be changed.

## Out of scope
- No palmistry article/lesson content changes.
- No article priority, SEO strategy, roadmap, monetization, UX, deployment, or fast-lane changes.
- Do not redesign the content audit architecture or add dependencies unless objectively necessary.
- Do not make the audit parse broad prose heuristically when a narrow stable marker/pattern can be used.

## Acceptance checks
- The normal repository state passes the updated relevant audit.
- A deliberately simulated count mismatch causes the check to fail with a clear documented-versus-actual message, without committing the simulated mismatch.
- Existing `npm run content-audit` and any directly affected audit command pass after restoration.
- The implementation is bounded, dependency-light, and does not alter published site content.
- Final diff contains no unrelated refactor or documentation churn.

## v2C durable-result contract
For every terminal outcome after startup gate, create `.ai-ops/results/PP-RELAY-026-r1.json` on a pushed `claude/relay-PP-RELAY-026-...` branch. Allowed terminal results are `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, and `PAUSED_USAGE_LIMIT`. A non-change terminal outcome does not require a dummy PR. The result must include `task_id`, `revision`, `risk_class: STANDARD`, terminal `result`, verification performed, changed paths, tests/checks, and any blocker/gate details. `source_preflight` may be null because this is not SOURCE_SENSITIVE.

## PR contract
If changed work is `READY_FOR_REVIEW`, open or update one Relay PR targeting `main` with footers:

RELAY_TASK_ID: PP-RELAY-026
RELAY_TASK_REVISION: 1
RELAY_RESULT: READY_FOR_REVIEW
