# Relay Current Task

Status: AUTHORIZED

## Task ID
PP-RELAY-003

## Revision
1

## Objective
Independently audit the existing unmerged remote branch `feat/curriculum-wave-3e-3f` against current `main` and the already-recorded approved Batch 3E/3F curriculum plan, without shipping or rewriting curriculum in this task.

The branch predates the Relay pilot and canonical docs explicitly say it contains apparent 3E/3F progress that has not been inspected or verified. Establish a trustworthy, repository-grounded readiness assessment so the next implementation decision does not rely on assumptions.

## Authorized scope
- Start from current `main`; read `AGENTS.md`, `docs/ACTIVE_TASK.md`, `docs/AI_HANDOFF.md`, `docs/DECISIONS.md`, and only the minimum relevant curriculum/remediation planning records needed to identify the approved 3E/3F scope.
- Fetch/inspect `feat/curriculum-wave-3e-3f` without treating it as authoritative.
- Compare that branch to current `main` and classify each changed file/change cluster as one of: approved 3E scope, approved 3F scope, stale/conflicting with current `main`, unrelated/out of scope, or unclear/requires human/product judgment.
- Check whether the branch can be cleanly replayed/rebased conceptually onto current `main`, noting conflicts or changes already superseded by merged work.
- Inspect the actual lesson/component changes enough to identify correctness, source/provenance, curriculum-order, route/frontmatter, and integration risks, but do not expand into a fresh content rewrite.
- Run repository validation against the branch state where practical (`npm ci` if needed, `npm run build`, `npm run content-audit`, `npm run audit:all`, `git diff --check`) and distinguish branch-caused failures from environment/pre-existing issues.
- Add one concise audit record under `docs/audits/` summarizing findings, evidence, file-by-file disposition, validation, and a recommended bounded next step.
- Update `docs/ACTIVE_TASK.md` and/or `docs/AI_HANDOFF.md` only if needed to replace the current "uninspected/unverified" statement with objective audit findings. Keep any unresolved human/product decisions explicit.
- Add a concise changelog entry if required by `AGENTS.md`.

## Non-goals / prohibited changes
- Do not merge, rebase, force-push, delete, or modify `feat/curriculum-wave-3e-3f`.
- Do not copy curriculum/runtime changes from that branch into the Relay branch.
- No new lesson prose, palmistry claims, citations, curriculum decisions, SEO strategy, monetization, visual changes, dependency changes, deployments, or external-service changes.
- Do not implement Batch 3E or 3F in this task.
- Do not mark branch work as shipped merely because it exists or validates.
- Do not choose work beyond the already-recorded 3E/3F plan.

## Acceptance criteria
- The branch's actual delta versus current `main` is fully inventoried and classified.
- The audit clearly states which parts, if any, remain reusable for approved 3E and 3F work, which are stale/conflicting, and what should happen next.
- Any source/provenance or curriculum-integrity concerns visible from the branch are called out with concrete file/line or commit evidence rather than assumptions.
- Validation results are recorded accurately.
- Final Relay diff is documentation-only and does not alter curriculum, runtime behavior, dependencies, CI, deployment, or the audited branch itself.
- One PR is opened to `main` with title prefix `[RELAY PP-RELAY-003]`.

## Required verification
- Inspect `git log`/merge-base/diff evidence for both current `main` and `feat/curriculum-wave-3e-3f`.
- Review the complete changed-file list and relevant diffs from the branch.
- Run the existing build/audit commands against the branch state where practical and record exact results.
- `git diff --check` on the Relay documentation diff.
- Confirm the Relay PR touches documentation only.

## Human gates
If evaluating any branch change requires a new palmistry interpretation, new source choice, change to the approved curriculum direction, dependency upgrade, deployment permission, or other product decision not already recorded, do not decide it. Mark it clearly as requiring human/product judgment in the audit.

## Expected result
Push a `claude/relay-PP-RELAY-003-...` branch and open exactly one PR to `main` titled with `[RELAY PP-RELAY-003]`. Include the branch-readiness summary, validation evidence, recommended bounded next step, risks, and:

`RELAY_TASK_ID: PP-RELAY-003`

`RELAY_TASK_REVISION: 1`

`RELAY_RESULT: READY_FOR_REVIEW`

Stop after the PR/result.