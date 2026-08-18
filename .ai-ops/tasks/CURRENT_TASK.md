# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-008

## Revision
1

## Objective
Replay the already-audited, source-safe Batch 3F **Combining What You See** synthesis lesson onto current `main` as one bounded curriculum increment, without wholesale-merging the stale `feat/curriculum-wave-3e-3f` branch or pulling in the rest of Batch 3F.

## Why this task is authorized
`docs/CURRENT_STATE.md` records the approved target as 25 core lessons and identifies **Combining What You See** as the one remaining approved addition. `docs/audits/CURRICULUM_WAVE_3E_3F_BRANCH_AUDIT_2026-08.md` independently read the stale branch lesson in full and found that it closes the curriculum audit's remaining worked-reading gap, reuses associations already established elsewhere in the curriculum, preserves Palmistry Path's epistemic boundaries, and introduces no new doctrine. That audit also explicitly recommends deliberate replay against current `main` rather than merging the stale branch wholesale.

## Authorized scope
1. Start from current `main`; inspect the current Advanced module ordering, `src/content/lessons/advanced/04-how-to-give-a-reading.mdx`, the current lesson schema, and the audited branch version of `src/content/lessons/advanced/combining-what-you-see.mdx`.
2. Replay **only** the already-audited `Combining What You See` lesson onto current `main`, reconciling it with current repository conventions and any source-safe cleanup that has landed since the branch audit.
3. Add `src/components/Practice.astro` only if the lesson still requires it. Reuse the audited stateless/native-disclosure implementation from the branch rather than designing a new interaction pattern. Do not add `Checkpoint.astro` or `CheckpointItem.astro` in this task.
4. Preserve the lesson's intended Advanced-module position immediately after the Simian Line. If needed, change only the `order` frontmatter of `advanced/04-how-to-give-a-reading.mdx` from its current position to the next collision-free integer. Do not rewrite that capstone's body in this task.
5. Do not carry forward the stale branch's blank `relatedArticle: ""` value; current `main` deliberately removed blank optional `relatedArticle` metadata in PP-RELAY-007.
6. Update only directly necessary canonical docs to record the curriculum count/state after the change.

## Editorial/source guardrails
- Treat `feat/curriculum-wave-3e-3f` as evidence, not authoritative state. Do not merge/rebase/cherry-pick the branch wholesale.
- The branch audit is authorization to replay the audited synthesis lesson, not permission to invent or materially broaden its palmistry meanings.
- Preserve the lesson's explicit framing that repeated features increase weight *within the traditional reading*, not evidentiary truth about a person.
- Preserve grounded language such as "traditionally associated with" and the site's limits around predictive, medical, relationship, financial, and other unsupported claims.
- If replay against current `main` reveals a material claim that no longer matches established curriculum/source evidence, do not guess. Either use existing current-main wording to reconcile it mechanically or return `HUMAN_REQUIRED` if a source-heavy judgment is genuinely necessary.
- Do not alter the unresolved Gettings/West/Fincham quotation backlog, the Sun/Mercury source-sensitive rewrite, or any other lesson/article body outside the new synthesis lesson.

## Explicit non-goals
- No wholesale 3F replay.
- No capstone body rewrite.
- No module-wide `<Practice>` wrapping.
- No `<Checkpoint>` components or checkpoint content.
- No Sun/Mercury lesson rewrite.
- No changes to SEO/indexability architecture, routes other than the naturally generated new lesson route, monetization, ads, email flows, visual direction, dependencies, deployment, or external services.
- Do not merge the PR or choose the next task.

## Acceptance criteria
- `src/content/lessons/advanced/combining-what-you-see.mdx` exists on the worker branch as a current-main-compatible replay of the already-audited lesson.
- The Advanced module has unique sequential lesson orders with the new synthesis lesson immediately after Simian Line and before the existing capstone.
- No blank optional `relatedArticle` value is introduced.
- Any added `Practice.astro` remains stateless, accessible, and limited to what the audited lesson needs.
- No new palmistry doctrine/source claim is introduced beyond the audited lesson and established current curriculum.
- Core curriculum count becomes 25 lessons, with no broken lesson routes or cross-collection metadata.
- Final diff is bounded to the new lesson, directly required `Practice.astro`, the capstone order-only adjustment if needed, canonical docs required by `AGENTS.md`, and the Relay result artifact.

## Verification
- Run `npm run build`.
- Run `npm run content-audit` and confirm 25 lessons validate with no order collisions or blank `relatedArticle` warning regression.
- Run `npm run audit:all` because a new lesson route/component is being added.
- Run `git diff --check`.
- Inspect the generated/new lesson route as practical and review the final diff against the stale branch audit plus current-main source/editorial guardrails.

## v2B durable-result contract — REQUIRED
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-008-r1.json`, commit it on a pushed `claude/relay-PP-RELAY-008-...` branch, and use one of these terminal results: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 1
- `task_id`: `PP-RELAY-008`
- `revision`: 1
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR number for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `human_action`: exact action only when applicable, otherwise `null`

For `READY_FOR_REVIEW`, commit implementation/docs plus the result artifact, push one `claude/relay-PP-RELAY-008-...` branch, and open exactly one PR to `main` with title prefix `[RELAY PP-RELAY-008]` and matching Relay footers. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and do not create a dummy PR merely to signal completion. Absence of a PR is valid for non-change terminal outcomes.

## Result
Stop after producing the durable result, pushing the Relay branch, and opening a PR only if the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.
