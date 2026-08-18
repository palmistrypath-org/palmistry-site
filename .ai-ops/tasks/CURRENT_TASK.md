# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-014

## Revision
2

## Revision 2 rework
Director review of PR #27 found one bounded documentation error: the new `docs/ROADMAP.md` reconciliation says the remaining **3F** scope includes both the capstone body revision and the Sun/Mercury quote-fidelity rewrite. The Sun/Mercury rewrite belongs to **3E**, not 3F. Correct that classification only: 3F's remaining work is the capstone body revision/second worked reading; 3E's unresolved Sun/Mercury source rewrite remains separate. Preserve the otherwise accepted reconciliation and update the existing PR #27 rather than opening another PR.

## Objective
Reconcile the canonical roadmap/status documentation with the curriculum and learning-structure work that is already merged on current `main`, so future task selection is not driven by stale statements that the 25th lesson or Batch 3F practice/checkpoint work is still outstanding.

## Why this task is authorized
Current `main` now contains 25 lessons, including `advanced/combining-what-you-see.mdx`, plus the audited Practice/Checkpoint rollout across Advanced, Foundations, Lines, and Mounts from PP-RELAY-008 through PP-RELAY-012. `docs/CURRENT_STATE.md` was corrected to 25 lessons in PP-RELAY-013, but canonical operating docs contained stale statements about 24 lessons and unshipped 3F work. Revision 1 correctly reconciled those statements except for the single 3E/3F classification error identified above.

## Authorized scope
1. Start from the existing PP-RELAY-014 PR #27 branch and preserve its already-reviewed documentation reconciliation.
2. In `docs/ROADMAP.md`, correct the new 2026-08-18 PP-RELAY-014 entry so it does not classify the Sun/Mercury quote-fidelity rewrite as remaining 3F work.
3. State clearly that the remaining 3F work is the capstone body revision/second worked reading, while the Sun/Mercury quote-fidelity rewrite in `advanced/01-minor-lines-overview.mdx` remains separate unresolved 3E work.
4. Recheck the revision-1 edits in `docs/ACTIVE_TASK.md` and `docs/AI_HANDOFF.md` only to confirm they already preserve this distinction; do not churn them if they are accurate.
5. Preserve unresolved/source-sensitive work as unresolved, including the Sun/Mercury quotation/source rewrite, Gettings/West/Fincham quotation fidelity, and the life-line testing phrase.
6. Do not invent a new product milestone or broaden the task.

## Guardrails
- Documentation/status reconciliation only. Do not change runtime code, lesson/article content, frontmatter, routes, ordering, components, SEO/indexability behavior, monetization, deployment, dependencies, or external services.
- Do not rewrite historical changelog/audit records except for already-authorized dated correction context.
- Do not erase unresolved source/editorial caveats.
- Keep revision-2 implementation to the smallest correction needed on PR #27.
- Follow `AGENTS.md`: implementation is authoritative when docs disagree.

## Acceptance criteria
- `docs/ROADMAP.md` no longer implies that the Sun/Mercury rewrite is part of 3F.
- Remaining 3F scope is accurately described as the capstone body revision/second worked reading.
- The unresolved Sun/Mercury source rewrite remains clearly identified as separate 3E work.
- The accepted revision-1 lesson-count, Combining What You See, and Practice/Checkpoint reconciliation remains intact.
- No production/runtime/content behavior changes.
- Final revision-2 diff is limited to the necessary roadmap correction, result artifact/update, and only directly necessary Relay metadata.

## Verification
- Inspect the final PP-RELAY-014 PR #27 diff and confirm the 3E/3F distinction is consistent across `ROADMAP.md`, `ACTIVE_TASK.md`, and `AI_HANDOFF.md`.
- Search the changed canonical docs for wording that classifies Sun/Mercury as 3F.
- Run `git diff --check`.
- A site build is not required for this docs-only rework unless runtime files are unexpectedly touched.

## v2B durable-result contract — REQUIRED
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-014-r2.json`, commit it on the existing pushed `claude/relay-PP-RELAY-014-...` branch, and use one terminal result: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 1
- `task_id`: `PP-RELAY-014`
- `revision`: 2
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: `27` for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `human_action`: exact action only when applicable, otherwise `null`

For `READY_FOR_REVIEW`, commit the bounded correction plus the revision-2 result artifact, push the existing PP-RELAY-014 branch, and update the existing PR #27. Do not open a second PR. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the revision-2 result artifact; a dummy PR is not required.

## Result
Stop after producing the revision-2 durable result and updating the existing Relay branch/PR as applicable. Do not merge and do not select subsequent work.
