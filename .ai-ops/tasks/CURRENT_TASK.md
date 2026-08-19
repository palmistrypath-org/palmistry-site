# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-019

## Revision
1

## Objective
Publish the already-prioritized beginner article **“How to Practice Palm Reading: Tips for Building Your Skills”** at `src/content/blog/beginner/how-to-practice-palm-reading.md`, serving the distinct skill-building intent that follows the existing “How to Read a Palm” method article and Foundations lesson.

## Why this task is authorized
`docs/editorial-backlog.md` ranks this article #3 in its “Next 10” queue with priority score 13. The backlog explicitly distinguishes its intent from `how-to-read-a-palm`: the existing article teaches the reading sequence/method, while this article should teach how a beginner builds fluency through repeated observation and structured practice. Current repository evidence already supports the practice method through `src/content/lessons/foundations/02-how-to-read-a-palm.mdx`, its existing `<Practice>` exercise, the established observation-first curriculum, and already-published beginner material. This is bounded, source-safe skill-development content rather than a new palmistry interpretation.

## Authorized scope
1. Start from current `main` and verify `src/content/blog/beginner/how-to-practice-palm-reading.md` does not already exist.
2. Compare the intended search/user intent against `src/content/blog/beginner/how-to-read-a-palm.md` before drafting. Preserve a clear division: the existing article remains the “how to perform a reading / observation sequence” guide; the new article must focus on repeated practice, fluency, observation habits, note-taking, comparison, and self-review.
3. Follow `AGENTS.md`, `docs/editorial-style-guide.md`, and `docs/article-template.md` with targeted context loading only.
4. Build the article primarily from source-supported material already established in `src/content/lessons/foundations/02-how-to-read-a-palm.mdx`, the existing how-to-read article, current Practice/Checkpoint patterns, other approved corpus material, and repository-verified Tier 1/2 sources where needed. Do not use commercial astrology/SEO sites as authorities.
5. Teach a practical beginner practice loop centered on observation before interpretation. Useful elements may include: work through the same general-to-specific sequence repeatedly; practice on both of your own hands; compare the same feature across multiple hands with permission; record what is visibly present before attaching meaning; choose one feature family at a time; revisit earlier notes after learning more; and explicitly note ambiguity instead of forcing a reading. Include only steps supported by current repository evidence and ordinary skill-building practice, not invented palmistry doctrine.
6. Make the distinction from `how-to-read-a-palm.md` obvious in the title/description/opening. Link to that article for readers who still need the base reading sequence rather than reteaching its full content.
7. Link naturally to `/learn/foundations/02-how-to-read-a-palm` and other current routes only where they genuinely support the practice workflow.
8. Add a concise reciprocal navigation link from `how-to-read-a-palm.md` to the new practice article if it can be done without changing substantive palmistry claims. Do not broadly rewrite the existing article.
9. Use only currently available site CTAs/products. Do not present the planned worksheet pack or any unlaunched product as available. A live Starter Guide / Learn Path CTA is acceptable if it matches current article conventions.
10. Update canonical docs required by `AGENTS.md`, including marking backlog item #3 shipped if appropriate. Do not alter unrelated editorial priorities.

## Editorial/source guardrails
- Never invent palmistry meanings, scientific support, prevalence claims, consensus, quotations, citations, or historical claims.
- Keep practice advice observational and educational. Do not convert repetition or note-taking into claims that palmistry becomes scientifically validated or objectively predictive with practice.
- Preserve the explicit distinction between palmistry tradition and demonstrated fact.
- Do not make medical, lifespan, legal, financial, or relationship-outcome claims.
- Do not encourage reading another person's hand without permission; if practicing with other people is suggested, include a concise consent/respect boundary.
- Do not duplicate the current `how-to-read-a-palm` article’s role. If, after inspecting the current corpus, a distinct skill-building article cannot be produced without substantial cannibalization or repetition, return `NO_CHANGE` with evidence rather than forcing a thin duplicate.
- If a material interpretation or source claim requires support that cannot be established from approved repository evidence, narrow the claim or return `HUMAN_REQUIRED` rather than guessing.

## Acceptance criteria
- A new `how-to-practice-palm-reading.md` exists only if it serves a clearly distinct skill-building/practice intent from `how-to-read-a-palm.md`.
- The opening explicitly positions the article as the next step after learning the basic reading method.
- The article gives a concrete, beginner-usable practice routine grounded in the current observation-first curriculum.
- Practice advice separates observable features from interpretation and encourages noting uncertainty rather than forcing conclusions.
- Any suggestion to practice on other people's hands includes permission/respect framing.
- The existing how-to-read article, if touched, receives navigation-only reciprocal linking with no substantive claim rewrite.
- Relevant internal links and `relatedLesson` resolve; frontmatter follows current schema/conventions.
- No unlaunched worksheet/product is represented as currently available.
- Build/content audits pass and the final diff remains bounded to the new article, navigation-only reciprocal link(s), directly necessary canonical docs, and the Relay result artifact.

## Verification
- Run `npm run build`.
- Run `npm run content-audit`.
- Run `npm run audit:all` because this adds an indexable article and internal links.
- Verify the new article’s title/description/opening are materially distinct from `how-to-read-a-palm.md` and do not compete for the same primary intent.
- Verify all new internal links and `relatedLesson` resolve.
- Verify any edit to the existing how-to-read article is navigation-only.
- Verify no CTA/link implies the planned worksheet pack is live unless current `main` independently proves that it is.
- Run `git diff --check` and inspect the final diff for source, SEO, scope, consent, and editorial drift.

## v2B durable-result contract — REQUIRED
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-019-r1.json`, commit it on a pushed `claude/relay-PP-RELAY-019-...` branch, and use one terminal result: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 1
- `task_id`: `PP-RELAY-019`
- `revision`: 1
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR number for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `human_action`: exact action only when applicable, otherwise `null`
- `execution`: truthful compact execution telemetry per current Relay contract; do not invent model names, token counts, hidden reasoning, or subagent activity.

For `READY_FOR_REVIEW`, commit implementation/docs plus the result artifact, push one `claude/relay-PP-RELAY-019-...` branch, and open exactly one PR to `main` with title prefix `[RELAY PP-RELAY-019]` and matching Relay footers. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and do not create a dummy PR merely to signal completion. Absence of a PR is valid for non-change terminal outcomes.

## Result
Stop after producing the durable result, pushing the Relay branch, and opening a PR only if the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.
