# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-023

## Revision
1

## Objective
Publish the approved Next 10 beginner article `Where Does Your Fate Line Start? What Each Starting Point Means` as a focused fate-line origin companion, using only repository-approved fate-line meanings and source-safe framing, with bounded reciprocal navigation and required canonical-doc updates.

## Why this task
PP-RELAY-022 is merged and the experiment has one accepted iteration remaining after this task plus one final iteration. The two higher-scored remaining Next 10 items (`via-lascivia-palmistry` and `ring-of-solomon-palmistry`) would require source-heavy interpretation not currently established in the approved curriculum. The existing Fate Line lesson already contains a substantial, attributed section on origin points, making this lower-ranked Next 10 item safer and mechanically reviewable without inventing new palmistry meanings.

## Authorized scope
1. Create `src/content/blog/beginner/fate-line-starting-points.md` with the backlog title/slug and a distinct specific-intent angle from the general `fate-line` article.
2. Ground substantive interpretation in existing approved repository evidence, especially `src/content/lessons/lines/05-fate-line.mdx`, the existing general fate-line article, and already-verified Tier 1–3 sources represented there.
3. Cover only starting points that approved repository evidence directly establishes, including wrist/base, Mount of Luna, life line, and higher/mid-palm where supported. Do not invent additional origins merely for completeness.
4. Preserve the site's non-deterministic framing: starting point is a traditional association with direction/path, not a prediction of career, wealth, relationship outcome, or fixed destiny.
5. Where the lesson distinguishes a historical source claim from a later/contemporary extension, preserve that distinction and do not broaden the scope of consensus.
6. Add only bounded reciprocal/navigation links from the most relevant existing fate-line page(s) when useful; do not broadly rewrite them.
7. Update `docs/editorial-backlog.md` plus canonical current-state/changelog/handoff docs only as required by the repository definition of done.
8. Do not implement Via Lascivia, Ring of Solomon, or any other backlog article in this task.

## Editorial/source guardrails
- Follow `AGENTS.md`, `docs/editorial-style-guide.md`, and `docs/article-template.md`.
- Never invent palmistry meanings, quotations, prevalence, consensus, source attributions, historical claims, or scientific findings.
- Quotation marks require verified verbatim wording from the cited edition; prefer paraphrase unless quotation fidelity is already established in repository evidence.
- Do not claim that “most,” “all,” “modern,” “classical,” or “Western” practitioners agree unless approved repository evidence directly supports that scope.
- Do not make medical, legal, financial, lifespan, or deterministic relationship claims.
- Do not create new interpretive rules by combining a fate-line starting point with depth, endpoint, breaks, mounts, other lines, hand shape, or any other independently supported feature unless the exact combination is established in approved evidence.
- Treat the lesson's Luna discussion carefully: Benham's historical opposite-sex formulation and any broader contemporary/public/collaboration framing must remain clearly distinguished rather than collapsed into a timeless consensus claim.
- If a materially new interpretation or source claim is needed to make the article viable, return `HUMAN_REQUIRED` rather than guessing.

## Acceptance criteria
- `src/content/blog/beginner/fate-line-starting-points.md` exists and directly serves fate-line-origin search intent without duplicating the general fate-line overview.
- The article teaches readers to locate the fate line and identify its origin using relative palm landmarks, not invented fixed measurements.
- Every substantive starting-point meaning is directly supported by approved repository evidence and keeps historical/source distinctions intact.
- No unsupported prevalence, consensus, historical, scientific, cross-tradition generalization, or newly synthesized combination meaning is introduced.
- The article clearly states that fate-line readings are traditional associations and not fixed destiny or guaranteed outcomes.
- Sources footer contains only sources actually used and allowed by repository policy.
- Navigation additions are reciprocal/useful and bounded.
- Required canonical docs accurately reflect shipment and article counts/status.

## Verification
- Compare every substantive interpretation against `src/content/lessons/lines/05-fate-line.mdx` and `src/content/blog/beginner/fate-line.md`.
- For every sentence combining a starting point with another feature, verify the exact combined reading exists in approved repository evidence; otherwise remove it or reduce it to separate observation guidance.
- Search the new article and changed docs for `most`, `generally`, `typically`, `always`, `never`, `consensus`, `modern`, `classical`, `Western`, `scientific`, `study`, `research`, `proves`, `predicts`, `career`, `wealth`, `relationship`, `Luna`, `life line`, `wrist`, `mid`, and equivalent certainty/prevalence/synthesis wording; inspect every material occurrence.
- Run `npm run build`, `npm run content-audit`, `npm run audit:all`, and `git diff --check`.
- Inspect the complete diff for source integrity, SEO intent separation, navigation quality, and scope drift.

## Explicit no-change condition
Return `NO_CHANGE` only if durable `main` history shows that an equivalent indexed `fate-line-starting-points` article already exists and satisfies this task’s intent and guardrails. Do not create a duplicate merely to consume an iteration.

## v2B durable-result contract — REQUIRED
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-023-r1.json`, commit it on a pushed `claude/relay-PP-RELAY-023-...` branch, and use one terminal result: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 1
- `task_id`: `PP-RELAY-023`
- `revision`: 1
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR number for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `human_action`: exact action only when applicable, otherwise `null`
- `execution`: truthful compact execution telemetry; do not invent model names, token counts, hidden reasoning, or subagent activity.

For `READY_FOR_REVIEW`, commit implementation/docs plus the result artifact, push the matching `claude/relay-PP-RELAY-023-...` branch, and open exactly one PR to `main` with title prefix `[RELAY PP-RELAY-023]` and matching revision-1 Relay footers. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and do not create a dummy PR merely to signal completion.

## Result
Stop after producing the durable revision-1 result, pushing the Relay branch, and opening the single Relay PR only when the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.