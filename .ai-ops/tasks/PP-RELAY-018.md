# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-018

## Revision
1

## Objective
Publish the already-prioritized beginner article **“Reading Both Hands: How to Compare Your Active and Passive Hand”** at `src/content/blog/beginner/reading-both-hands-palmistry.md`, serving the follow-up intent after “which hand should I read?” while strengthening the Foundations learning path without duplicating the existing which-hand article.

## Why this task is authorized
`docs/editorial-backlog.md` ranks this article #2 in its “Next 10” queue with priority score 13. The backlog explicitly distinguishes its intent from `which-hand-to-read-palmistry`: the existing article answers which hand to start with; this one should answer how to compare the two hands once the active/passive roles are understood. Current repository evidence already supports the comparison method through `src/content/lessons/foundations/04-active-and-passive-hand.mdx`, so this is approved, bounded editorial work rather than a new interpretation.

## Authorized scope
1. Start from current `main` and verify `src/content/blog/beginner/reading-both-hands-palmistry.md` does not already exist.
2. Compare the intended search/user intent against `src/content/blog/beginner/which-hand-to-read-palmistry.md` before drafting. Preserve a clear division: the existing article remains the “which hand / active vs passive” explainer; the new article must be a practical side-by-side comparison workflow.
3. Follow `AGENTS.md`, `docs/editorial-style-guide.md`, and `docs/article-template.md` with targeted context loading only.
4. Build the article primarily from source-supported material already established in `src/content/lessons/foundations/04-active-and-passive-hand.mdx`, the existing which-hand article, other current approved corpus material, and repository-verified Tier 1/2 source evidence. Do not use commercial astrology/SEO sites as authorities.
5. Teach a beginner comparison workflow focused on observation first: identify active/passive hand, align both palms, compare the same feature across both hands, and note differences in depth/clarity, length, direction/branching, presence/absence, and broad structural agreement where supported by the current corpus. Keep interpretation secondary and explicitly qualified.
6. Make the practical distinction from `which-hand-to-read-palmistry` obvious in the opening and metadata. Link to that article for readers who still need the active/passive basics rather than reteaching its full history/tradition section.
7. Link naturally to the existing Foundations lesson `/learn/foundations/04-active-and-passive-hand` and only to other current routes where they genuinely help the workflow.
8. Add a concise reciprocal navigation link from `which-hand-to-read-palmistry.md` to the new article if it can be done without changing substantive palmistry claims. Do not broadly rewrite that existing article.
9. Update canonical docs required by `AGENTS.md`, including marking the backlog item shipped if appropriate. Do not alter unrelated editorial priorities.

## Editorial/source guardrails
- Never invent palmistry meanings, scientific support, prevalence claims, consensus, quotations, citations, or historical claims.
- Do not turn differences between hands into deterministic claims. Use qualified language such as “traditionally associated with,” “may suggest,” and “within this framework.”
- Preserve the explicit distinction between palmistry tradition and demonstrated fact.
- Do not make medical, lifespan, legal, financial, or relationship-outcome claims from hand differences.
- Do not repeat unsupported cross-tradition consensus claims. Historical gender conventions may be referenced only when necessary and accurately sourced; the new article’s center of gravity should be the practical active/passive comparison workflow.
- Do not duplicate the current which-hand article’s role. If, after inspecting the current corpus, a distinct article cannot be produced without substantial cannibalization or repetition, return `NO_CHANGE` with evidence rather than forcing a thin duplicate.
- If a material interpretation requires source support that cannot be established from approved repository evidence, narrow the claim or return `HUMAN_REQUIRED` rather than guessing.

## Acceptance criteria
- A new `reading-both-hands-palmistry.md` exists only if it serves a clearly distinct practical comparison intent from `which-hand-to-read-palmistry.md`.
- The opening explicitly positions the article as the next step after deciding which hand is active/passive.
- The article gives a concrete, beginner-usable side-by-side observation workflow grounded in already-approved source material.
- Interpretive statements about differences between hands are qualified and do not overstate predictive or scientific certainty.
- The existing which-hand article, if touched, receives navigation-only reciprocal linking with no substantive claim rewrite.
- Relevant internal links and `relatedLesson` resolve; frontmatter follows current schema/conventions.
- Build/content audits pass and the final diff remains bounded to the new article, navigation-only reciprocal link(s), directly necessary canonical docs, and the Relay result artifact.

## Verification
- Run `npm run build`.
- Run `npm run content-audit`.
- Run `npm run audit:all` because this adds an indexable article and internal links.
- Verify the new article’s title/description/opening are materially distinct from `which-hand-to-read-palmistry.md` and do not compete for the same primary intent.
- Verify all new internal links and `relatedLesson` resolve.
- Inspect any edit to the existing which-hand article and confirm it is navigation-only.
- Run `git diff --check` and inspect the final diff for source, SEO, scope, and editorial drift.

## v2B durable-result contract — REQUIRED
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-018-r1.json`, commit it on a pushed `claude/relay-PP-RELAY-018-...` branch, and use one terminal result: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 1
- `task_id`: `PP-RELAY-018`
- `revision`: 1
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR number for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `human_action`: exact action only when applicable, otherwise `null`
- `execution`: truthful compact execution telemetry per current Relay contract; do not invent model names, token counts, hidden reasoning, or subagent activity.

For `READY_FOR_REVIEW`, commit implementation/docs plus the result artifact, push one `claude/relay-PP-RELAY-018-...` branch, and open exactly one PR to `main` with title prefix `[RELAY PP-RELAY-018]` and matching Relay footers. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and do not create a dummy PR merely to signal completion. Absence of a PR is valid for non-change terminal outcomes.

## Result
Stop after producing the durable result, pushing the Relay branch, and opening a PR only if the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.
