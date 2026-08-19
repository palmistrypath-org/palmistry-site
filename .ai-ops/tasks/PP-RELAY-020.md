# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-020

## Revision
1

## Objective
Publish the already-prioritized beginner article **“Phalanges in Palmistry: What the Three Finger Sections Reveal”** at `src/content/blog/beginner/phalanges-palmistry.md`, using the existing Western-source framework for finger phalanges while preserving Palmistry Path’s distinction between observable anatomy, historical interpretation, and demonstrated fact.

## Why this task is authorized
`docs/editorial-backlog.md` ranks this article in the “Next 10” queue with priority score 12. Current `main` confirms the intended file does not yet exist. The existing Foundations lesson `src/content/lessons/foundations/thumb-and-fingers.mdx` explicitly identifies “the three sections of each finger” as a real classification topic in the Western literature that the lesson deliberately does not teach, while the backlog identifies Benham and Gettings as the primary sources for this dedicated treatment. This is therefore a bounded expansion of an already-approved topic, not authorization to invent a new palmistry system.

Current implementation also shows that backlog item #4 (`forked-head-line-meaning`) is already published at `src/content/blog/beginner/forked-head-line-meaning.md` even though the backlog still lists it as open. Reconcile that stale status while updating the backlog for this task; do not recreate or materially rewrite the existing forked-head-line article.

## Authorized scope
1. Start from current `main` and verify `src/content/blog/beginner/phalanges-palmistry.md` does not already exist.
2. Verify the already-live `src/content/blog/beginner/forked-head-line-meaning.md` and correct only the stale backlog status for item #4. Do not count that existing article as new work and do not substantially edit it.
3. Follow `AGENTS.md`, `docs/editorial-style-guide.md`, and `docs/article-template.md` with targeted context loading only.
4. Before drafting, establish a concise source plan from approved Tier 1/2 material. Prefer William G. Benham, *The Laws of Scientific Hand Reading* (1900), and Fred Gettings, *The Book of the Hand* (1965), as identified by the approved backlog; other approved repository sources may supplement them when directly relevant. Commercial astrology/SEO sites may not be used as authorities.
5. Explain the observable structure first: each of the four fingers has three phalanges/sections separated by joints/creases, while the thumb has two anatomical segments and is treated separately in the existing curriculum. Keep anatomy and palmistry interpretation clearly separated.
6. Teach only interpretations that are explicitly supported by verified sources. If the traditional upper/middle/lower-section framework is described, state it as a Western palmistry convention and avoid presenting physical proportions as measurements of intelligence, character, wealth, morality, or destiny.
7. Where sources disagree or use materially different terminology, describe the disagreement rather than manufacturing one unified system.
8. Keep the article complementary to `finger-shapes-palmistry` and the Foundations `thumb-and-fingers` lesson: finger shape is a whole-finger classification; this article is specifically about the three sections and how traditional Western palmistry reads their relative development.
9. Add natural reciprocal/internal links from existing directly relevant content only when navigation improves and the edit can remain claim-neutral. Do not broadly rewrite established articles or lessons.
10. Use only currently live CTAs/products and current site conventions. Do not introduce a new product, worksheet, or monetization claim.
11. Update canonical docs required by `AGENTS.md`, including marking backlog item #4 as already published and item #5 shipped if this article is successfully published. Preserve the remaining queue order and scores.

## Editorial/source guardrails
- Never invent palmistry meanings, quotations, prevalence claims, consensus, source attributions, or historical claims.
- Quotation marks require verified verbatim wording from the cited edition. Prefer paraphrase unless exact wording has been verified.
- Do not turn traditional phalange associations into claims of scientifically demonstrated personality, intelligence, aptitude, finances, health, lifespan, morality, or future outcomes.
- Avoid deterministic wording such as “reveals who you are” in body prose even if the backlog title uses search-oriented language. Use grounded phrases such as “traditionally associated with” and explicitly state the interpretive status.
- Do not imply that three finger phalanges are a universal palmistry framework across Indian, Chinese, and Western traditions unless approved evidence establishes that. Scope to Western palmistry when that is what the sources support.
- If the source evidence is insufficient to support a materially useful dedicated article, return `HUMAN_REQUIRED` with the exact missing source/fidelity issue rather than filling gaps from low-tier web material or intuition.

## Acceptance criteria
- A new `src/content/blog/beginner/phalanges-palmistry.md` exists only if a source-supported, materially useful dedicated article can be produced.
- The article clearly distinguishes observable finger anatomy from historical/traditional interpretation.
- The three phalanges/sections are explained in a beginner-usable way, including how a reader observes relative development before applying meaning.
- All material palmistry interpretations are traceable to approved Tier 1/2 sources; no unsupported universal or deterministic claims are added.
- The article is clearly differentiated from `finger-shapes-palmistry` and the thumb-specific material in the Foundations lesson.
- Existing relevant content, if touched, receives only bounded navigation/context edits with no unsupported claim expansion.
- The stale backlog status for the already-live forked-head-line article is corrected without recreating that article.
- Relevant internal links and `relatedLesson` resolve; frontmatter follows current schema/conventions.
- Build/content audits pass and the final diff remains bounded to the new article, directly relevant navigation-only edits, canonical docs, and the Relay result artifact.

## Verification
- Run `npm run build`.
- Run `npm run content-audit`.
- Run `npm run audit:all` because this adds an indexable article and may add internal links.
- Verify every quotation against the cited edition or remove quotation marks and paraphrase.
- Verify each material phalange interpretation has an approved-source basis and that Western/tradition scope is stated accurately.
- Verify title/description/opening are distinct from `finger-shapes-palmistry` and do not compete for the same primary intent.
- Verify all new internal links and `relatedLesson` resolve.
- Verify any existing content edits are bounded and do not introduce new palmistry claims.
- Verify backlog item #4 is reconciled as already published and item #5 is marked shipped only if this task publishes successfully.
- Run `git diff --check` and inspect the final diff for source, SEO, scope, accessibility, and editorial drift.

## v2B durable-result contract — REQUIRED
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-020-r1.json`, commit it on a pushed `claude/relay-PP-RELAY-020-...` branch, and use one terminal result: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 1
- `task_id`: `PP-RELAY-020`
- `revision`: 1
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR number for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `human_action`: exact action only when applicable, otherwise `null`
- `execution`: truthful compact execution telemetry per current Relay contract; do not invent model names, token counts, hidden reasoning, or subagent activity.

For `READY_FOR_REVIEW`, commit implementation/docs plus the result artifact, push one `claude/relay-PP-RELAY-020-...` branch, and open exactly one PR to `main` with title prefix `[RELAY PP-RELAY-020]` and matching Relay footers. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and do not create a dummy PR merely to signal completion. Absence of a PR is valid for non-change terminal outcomes.

## Result
Stop after producing the durable result, pushing the Relay branch, and opening a PR only if the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.
