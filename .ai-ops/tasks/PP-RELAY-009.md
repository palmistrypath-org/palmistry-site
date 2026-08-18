# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-009

## Revision
1

## Objective
Replay the already-audited, source-safe Batch 3F Practice disclosure treatment onto the two existing Advanced lessons `02-marriage-relationship-lines.mdx` and `03-girdle-of-venus.mdx`, without changing their palmistry content.

## Why this task is authorized
The approved Batch 3F scope includes a stateless Practice layer. PP-RELAY-008 has now landed the audited `src/components/Practice.astro` component on current `main`. The independent branch audit classifies these two Advanced-lesson changes as mechanical: their existing “what to take away” sections are wrapped in `<Practice>` with no content change. This is a bounded, source-safe next increment that improves the structured learning path without introducing new doctrine.

## Authorized scope
1. Start from current `main` and inspect the current `Practice.astro`, the two target Advanced lessons, and the audited `feat/curriculum-wave-3e-3f` versions only as evidence.
2. In `src/content/lessons/advanced/02-marriage-relationship-lines.mdx` and `src/content/lessons/advanced/03-girdle-of-venus.mdx`, replay only the audited mechanical Practice treatment around the existing takeaway/practice material.
3. Add/import the existing `Practice.astro` only as required by current MDX conventions. Reuse it as-is unless a current-main compatibility defect is objectively necessary to fix; do not redesign the component.
4. Preserve all existing lesson wording, frontmatter, routes, ordering, source attributions, quotations, interpretations, and related-content metadata except purely mechanical markup/import changes required for the Practice wrapper.
5. Update only canonical docs genuinely required by `AGENTS.md` for this shipped learning-structure increment.

## Editorial/source guardrails
- This task is markup/learning-structure work, not editorial authorization. Do not rewrite, add, remove, soften, strengthen, or reinterpret any palmistry claim.
- Do not change quotations or source attribution.
- Treat the stale 3E/3F branch as evidence only; do not merge, rebase, or cherry-pick it wholesale.
- If the audited wrapper cannot be replayed without a material content decision, return `HUMAN_REQUIRED` rather than improvising.

## Explicit non-goals
- No Practice wrapping outside the two named Advanced lessons.
- No Checkpoint components or checkpoint content.
- No capstone body revision.
- No Sun/Mercury rewrite.
- No changes to Combining What You See beyond verifying compatibility if necessary.
- No SEO/indexability, monetization, ads, email, visual redesign, dependency, deployment, or external-service changes.
- Do not merge the PR or choose the next task.

## Acceptance criteria
- Both target lessons use the existing stateless Practice disclosure around the same audited existing material.
- Lesson prose/frontmatter is unchanged except required component import/markup.
- No new palmistry claims, interpretations, quotations, or source assertions are introduced.
- Routes, module ordering, schemas, and indexability remain unchanged.
- Final diff is bounded to the two target lessons, directly necessary canonical docs, and the Relay result artifact; `Practice.astro` itself should remain unchanged unless a concrete current-main compatibility defect is found and documented.

## Verification
- Run `npm run build`.
- Run `npm run content-audit`.
- Run `npm run audit:all` because MDX/component rendering changes.
- Run `git diff --check`.
- Inspect both generated lesson routes as practical and confirm the disclosure is accessible/native and lesson text is unchanged.
- Review the final diff against current `main` and the audited branch treatment.

## v2B durable-result contract — REQUIRED
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-009-r1.json`, commit it on a pushed `claude/relay-PP-RELAY-009-...` branch, and use one terminal result: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 1
- `task_id`: `PP-RELAY-009`
- `revision`: 1
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR number for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `human_action`: exact action only when applicable, otherwise `null`

For `READY_FOR_REVIEW`, commit implementation/docs plus the result artifact, push one `claude/relay-PP-RELAY-009-...` branch, and open exactly one PR to `main` with title prefix `[RELAY PP-RELAY-009]` and matching Relay footers. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and do not create a dummy PR merely to signal completion. Absence of a PR is valid for non-change terminal outcomes.

## Result
Stop after producing the durable result, pushing the Relay branch, and opening a PR only if the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.
