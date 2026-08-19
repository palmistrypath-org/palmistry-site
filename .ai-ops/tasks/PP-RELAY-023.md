# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-023

## Revision
2

## Objective
Publish the approved Next 10 beginner article `Where Does Your Fate Line Start? What Each Starting Point Means` as a focused fate-line origin companion, using only repository-approved fate-line meanings and source-safe framing, with bounded reciprocal navigation and required canonical-doc updates.

## Revision 2 note
Director review of revision 1 found one narrow unsupported prevalence/default claim in the new article: the FAQ answer says `There is no single typical starting point.` The approved repository evidence establishes that several starting points occur and supplies meanings for them, but it does not establish the prevalence needed to say that none is typical. Remove or narrow that sentence so it reports only what the approved sources establish. In the same focused pass, inspect directly equivalent default/prevalence wording about starting-point frequency and remove/narrow it if it is not explicitly supported. Do not broaden this revision into other editorial or implementation changes.

## Why this task
PP-RELAY-022 is merged and the experiment has one accepted iteration remaining. The two higher-scored remaining Next 10 items (`via-lascivia-palmistry` and `ring-of-solomon-palmistry`) would require source-heavy interpretation not currently established in the approved curriculum. The existing Fate Line lesson already contains a substantial, attributed section on origin points, making this lower-ranked Next 10 item safer and mechanically reviewable without inventing new palmistry meanings.

## Authorized scope
1. Keep `src/content/blog/beginner/fate-line-starting-points.md` with the backlog title/slug and a distinct specific-intent angle from the general `fate-line` article.
2. Ground substantive interpretation in existing approved repository evidence, especially `src/content/lessons/lines/05-fate-line.mdx`, the existing general fate-line article, and already-verified Tier 1–3 sources represented there.
3. Cover only starting points that approved repository evidence directly establishes, including wrist/base, Mount of Luna, life line, and higher/mid-palm where supported. Do not invent additional origins merely for completeness.
4. Preserve the site's non-deterministic framing: starting point is a traditional association with direction/path, not a prediction of career, wealth, relationship outcome, or fixed destiny.
5. Where the lesson distinguishes a historical source claim from a later/contemporary extension, preserve that distinction and do not broaden the scope of consensus.
6. Keep only bounded reciprocal/navigation links from the most relevant existing fate-line page(s); do not broadly rewrite them.
7. Keep `docs/editorial-backlog.md` plus canonical current-state/changelog/handoff docs accurate as required by the repository definition of done.
8. Do not implement Via Lascivia, Ring of Solomon, or any other backlog article in this task.
9. Revision 2 remediation is limited to the unsupported `no single typical starting point` assertion and directly equivalent unsupported default/prevalence wording in the same article.

## Editorial/source guardrails
- Follow `AGENTS.md`, `docs/editorial-style-guide.md`, and `docs/article-template.md`.
- Never invent palmistry meanings, quotations, prevalence, consensus, source attributions, historical claims, or scientific findings.
- Quotation marks require verified verbatim wording from the cited edition; prefer paraphrase unless quotation fidelity is already established in repository evidence.
- Do not claim that “most,” “all,” “modern,” “classical,” “Western,” “typical,” “usual,” or equivalent practitioner/pattern prevalence is established unless approved repository evidence directly supports that scope.
- Do not make medical, legal, financial, lifespan, or deterministic relationship claims.
- Do not create new interpretive rules by combining a fate-line starting point with depth, endpoint, breaks, mounts, other lines, hand shape, or any other independently supported feature unless the exact combination is established in approved evidence.
- Treat the lesson's Luna discussion carefully: Benham's historical opposite-sex formulation and any broader contemporary/public/collaboration framing must remain clearly distinguished rather than collapsed into a timeless consensus claim.
- If a materially new interpretation or source claim is needed to make the article viable, return `HUMAN_REQUIRED` rather than guessing.

## Acceptance criteria
- `src/content/blog/beginner/fate-line-starting-points.md` exists and directly serves fate-line-origin search intent without duplicating the general fate-line overview.
- The article teaches readers to locate the fate line and identify its origin using relative palm landmarks, not invented fixed measurements.
- Every substantive starting-point meaning is directly supported by approved repository evidence and keeps historical/source distinctions intact.
- No unsupported prevalence, default, consensus, historical, scientific, cross-tradition generalization, or newly synthesized combination meaning is introduced.
- The revision-1 sentence `There is no single typical starting point.` is removed or narrowed to a claim actually supported by approved repository evidence.
- The article clearly states that fate-line readings are traditional associations and not fixed destiny or guaranteed outcomes.
- Sources footer contains only sources actually used and allowed by repository policy.
- Navigation additions are reciprocal/useful and bounded.
- Required canonical docs accurately reflect shipment and article counts/status.

## Verification
- Compare every substantive interpretation against `src/content/lessons/lines/05-fate-line.mdx` and `src/content/blog/beginner/fate-line.md`.
- For every sentence combining a starting point with another feature, verify the exact combined reading exists in approved repository evidence; otherwise remove it or reduce it to separate observation guidance.
- Search the new article and changed docs for `most`, `generally`, `typically`, `typical`, `usually`, `usual`, `common`, `always`, `never`, `consensus`, `modern`, `classical`, `Western`, `scientific`, `study`, `research`, `proves`, `predicts`, `career`, `wealth`, `relationship`, `Luna`, `life line`, `wrist`, `mid`, and equivalent certainty/prevalence/synthesis wording; inspect every material occurrence.
- Specifically verify that no sentence infers a default/non-default frequency merely because multiple configurations are documented.
- Run `npm run build`, `npm run content-audit`, `npm run audit:all`, and `git diff --check`.
- Inspect the complete revision-2 diff for source integrity and scope drift.

## Explicit no-change condition
Return `NO_CHANGE` only if durable `main` history shows that an equivalent indexed `fate-line-starting-points` article already exists and satisfies this task’s intent and guardrails. Do not create a duplicate merely to consume an iteration.

## v2B durable-result contract — REQUIRED
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-023-r2.json`, commit it on a pushed `claude/relay-PP-RELAY-023-...` branch, and use one terminal result: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 1
- `task_id`: `PP-RELAY-023`
- `revision`: 2
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR number for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `human_action`: exact action only when applicable, otherwise `null`
- `execution`: truthful compact execution telemetry; do not invent model names, token counts, hidden reasoning, or subagent activity.

For `READY_FOR_REVIEW`, commit the bounded revision plus the result artifact, push the matching `claude/relay-PP-RELAY-023-...` branch, and keep/open exactly one PR to `main` with title prefix `[RELAY PP-RELAY-023]` and matching revision-2 Relay footers. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and do not create a dummy PR merely to signal completion.

## Result
Stop after producing the durable revision-2 result, pushing the Relay branch, and updating the single Relay PR only when the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.