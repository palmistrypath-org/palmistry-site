# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-014

## Revision
1

## Objective
Reconcile the canonical roadmap/status documentation with the curriculum and learning-structure work that is already merged on current `main`, so future task selection is not driven by stale statements that the 25th lesson or Batch 3F practice/checkpoint work is still outstanding.

## Why this task is authorized
Current `main` now contains 25 lessons, including `advanced/combining-what-you-see.mdx`, plus the audited Practice/Checkpoint rollout across Advanced, Foundations, Lines, and Mounts from PP-RELAY-008 through PP-RELAY-012. `docs/CURRENT_STATE.md` was corrected to 25 lessons in PP-RELAY-013, but `docs/ROADMAP.md` still says the curriculum has 24 lessons and that Combining What You See / 3F remain outstanding. The Relay just demonstrated that stale audit/docs premises can cause unnecessary implementation tasks, so this is a bounded source-of-truth repair with objective repository evidence.

## Authorized scope
1. Start from current `main` and verify the actual lesson inventory and the merged Relay history for PP-RELAY-008 through PP-RELAY-013.
2. Inspect only canonical operating docs needed to reconcile stale curriculum/learning-structure status, especially `docs/ROADMAP.md`, `docs/AI_HANDOFF.md`, `docs/ACTIVE_TASK.md`, and `docs/CURRENT_STATE.md` where relevant.
3. Correct only statements that are objectively stale against current `main`: lesson count/25-lesson target, Combining What You See status, shipped Practice/Checkpoint rollout, and PP-RELAY-013's corrected lesson-order guard premise.
4. Preserve unresolved/source-sensitive work as unresolved, including the Sun/Mercury quotation/source rewrite, Gettings/West/Fincham quotation fidelity, and the life-line testing phrase.
5. Do not invent a new product milestone or convert historical planning docs into an approved backlog.
6. Keep edits minimal; if a canonical doc is already accurate, leave it unchanged.

## Guardrails
- Documentation/status reconciliation only. Do not change runtime code, lesson/article content, frontmatter, routes, ordering, components, SEO/indexability behavior, monetization, deployment, dependencies, or external services.
- Do not rewrite historical changelog/audit records except to add a clearly dated correction where a false current-state claim would otherwise remain actionable.
- Do not erase unresolved source/editorial caveats.
- Follow `AGENTS.md`: implementation is authoritative when docs disagree.

## Acceptance criteria
- Canonical operating docs no longer claim the core curriculum has 24 lessons or that Combining What You See is still outstanding.
- Canonical docs accurately reflect the already-merged Practice/Checkpoint rollout without implying broader unshipped 3F work is complete if it is not.
- PP-RELAY-013's lesson-order guard correction is represented consistently where current-status docs discuss that tooling gap.
- No production/runtime/content behavior changes.
- Final diff is limited to directly relevant canonical docs plus the Relay result artifact.

## Verification
- Verify current lesson count and module inventory from `src/content/lessons/`.
- Verify relevant merged PR/commit history for PP-RELAY-008 through PP-RELAY-013.
- Search canonical docs for stale `24 lessons`, `Combining What You See`, `3F`, and lesson-order-gap statements after edits.
- Run `git diff --check` and inspect the final diff. A site build is not required for docs-only changes unless runtime files are unexpectedly touched.

## v2B durable-result contract — REQUIRED
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-014-r1.json`, commit it on a pushed `claude/relay-PP-RELAY-014-...` branch, and use one terminal result: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 1
- `task_id`: `PP-RELAY-014`
- `revision`: 1
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR number for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `human_action`: exact action only when applicable, otherwise `null`

For `READY_FOR_REVIEW`, commit implementation/docs plus the result artifact, push one `claude/relay-PP-RELAY-014-...` branch, and open exactly one PR to `main` with title prefix `[RELAY PP-RELAY-014]` and matching Relay footers. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and do not create a dummy PR merely to signal completion. Absence of a PR is valid for non-change terminal outcomes.

## Result
Stop after producing the durable result, pushing the Relay branch, and opening a PR only if the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.
