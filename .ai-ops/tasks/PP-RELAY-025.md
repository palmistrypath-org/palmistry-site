# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-025

## Revision
1

## Risk Class
LOW

## Objective
Reconcile the stale published-blog count in `docs/editorial-backlog.md` against the actual current `src/content/blog` collection and the repository's own content-audit output. Keep this strictly mechanical: correct the count/status prose only where objectively verified, without changing article priorities, scores, editorial strategy, or palmistry content.

## Why this task
The backlog currently says 53 published blog posts, while the latest successful repository content audit reports 60 valid blog posts. Accurate inventory prevents duplicate commissioning and is a bounded, mechanically verifiable task suitable for testing the v2C LOW risk class.

## Allowed scope
- Count current blog content files/entries using repository tooling or an equivalent deterministic method.
- Update `docs/editorial-backlog.md` only where needed to make the published count/status internally accurate.
- If the discrepancy cannot be resolved mechanically, return `BLOCKED` or `NO_CHANGE` rather than guessing.
- Necessary Relay result/bookkeeping files may be changed.

## Out of scope
- No new or materially rewritten palmistry content.
- No changes to article priority scores, SEO strategy, roadmap direction, monetization, site UX, source interpretations, or published article bodies.
- Do not mark individual backlog candidates published unless their exact corresponding live article is mechanically verified.
- Do not enable or modify fast-lane policy.

## Acceptance checks
- The published count in `docs/editorial-backlog.md` matches the actual current blog collection as verified by repository tooling.
- Any explanatory status text changed is factual and mechanically supported.
- `npm run content-audit` passes; run broader existing audits if the changed scope requires them.
- Diff remains bounded to the reconciliation and Relay bookkeeping.

## v2C durable-result contract
For every terminal outcome after startup gate, create `.ai-ops/results/PP-RELAY-025-r1.json` on a pushed `claude/relay-PP-RELAY-025-...` branch. Allowed terminal results are `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, and `PAUSED_USAGE_LIMIT`. A non-change terminal outcome does not require a dummy PR. The result must include `task_id`, `revision`, `risk_class: LOW`, terminal `result`, verification performed, changed paths, tests/checks, and any blocker/gate details.

## PR contract
If changed work is `READY_FOR_REVIEW`, open or update one Relay PR targeting `main` with footers:

RELAY_TASK_ID: PP-RELAY-025
RELAY_TASK_REVISION: 1
RELAY_RESULT: READY_FOR_REVIEW
