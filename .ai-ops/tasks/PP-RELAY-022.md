# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-022

## Revision
2

## Revision note
Revision 2 is bounded remediation of revision 1 after Director review. Keep the approved article structure, SEO intent, observation workflow, reciprocal navigation, and canonical-doc updates, but remove or narrow interpretive combinations that are not directly established by approved repository evidence. In particular, do not assert new meanings from combining short heart-line length with endpoint, Mount of Venus development, or whole-hand compactness/expansiveness unless an approved repository source explicitly establishes that exact combination. Also remove or narrow any equivalent unsupported cross-tradition/consensus wording discovered in the same focused pass. Do not broaden scope or add new source-heavy interpretation.

## Objective
Publish the approved Next 10 beginner article `Short Heart Line Meaning in Palmistry` as a focused heart-line variation companion, using only repository-approved heart-line meanings and source-safe framing, with reciprocal navigation and the minimum canonical-doc updates required by `AGENTS.md`.

## Why this task
`docs/editorial-backlog.md` ranks this as the highest-priority remaining Next 10 article after PP-RELAY-021. The target slug does not exist on `main`. The existing Heart Line lesson already establishes the bounded interpretation needed for a short heart line and explicitly warns against the simplistic “short equals cold” reading.

## Authorized scope
1. Create `src/content/blog/beginner/short-heart-line-meaning.md` with the backlog title/slug and a distinct specific-intent angle from the general `heart-line` article.
2. Ground the article in existing approved repository evidence, especially `src/content/lessons/lines/02-heart-line.mdx`, the existing general heart-line article, and already-verified Tier 1–3 sources represented in those files.
3. Explain how to observe whether the line is genuinely short before interpreting it; distinguish length from faintness, breaks, chains, and endpoint position where useful.
4. Preserve the approved meaning boundary: a shorter heart line may suggest focused emotional investment rather than limited feeling; do not turn it into a deterministic relationship/personality verdict.
5. Add only bounded reciprocal/navigation links from the most relevant existing heart-line page(s) when useful; do not broadly rewrite those pages.
6. Update `docs/editorial-backlog.md` plus canonical current-state/changelog/handoff docs only as required by the repository definition of done.
7. Do not select or implement any other backlog article in this task.
8. Revision-2 remediation is limited to source-safety correction of unsupported synthesis/combinations and equivalent wording. Preserve the rest of the accepted revision-1 work.

## Editorial/source guardrails
- Follow `AGENTS.md`, `docs/editorial-style-guide.md`, and `docs/article-template.md`.
- Never invent palmistry meanings, quotations, prevalence, consensus, source attributions, historical claims, or scientific findings.
- Quotation marks require verified verbatim wording from the cited edition; prefer paraphrase.
- Do not claim that “most,” “all,” “modern,” “classical,” or “Western” practitioners agree unless approved repository evidence directly supports that scope.
- Do not make medical, legal, financial, lifespan, or deterministic relationship claims.
- Do not create new interpretive rules by combining independently supported features. If approved repository evidence supports feature A and feature B separately, that does not authorize a new A+B synthesis unless the exact combination is established in approved evidence.
- Specifically for revision 2, remove or narrow unsupported claims that a short line plus a deep/faint quality, specific endpoint, Mount of Venus development, or compact/expansive whole-hand pattern produces a particular combined meaning unless exact repository evidence supports it.
- If the article would require a materially new interpretation not established in approved repository evidence, return `HUMAN_REQUIRED` rather than guessing.

## Acceptance criteria
- `src/content/blog/beginner/short-heart-line-meaning.md` exists and directly serves the “short heart line meaning” search intent without duplicating the general heart-line overview.
- The article accurately locates/defines a short heart line using relative palm observation rather than invented fixed measurements.
- The core interpretation remains source-safe and bounded: focused/selective emotional investment is not equated with lack of feeling, coldness, inability to love, or relationship outcome.
- Length is clearly distinguished from endpoint, depth/clarity, chains, breaks, and forks where these distinctions are discussed.
- No unsupported prevalence, consensus, historical, scientific, cross-tradition generalization, or newly synthesized combination meaning is introduced.
- Sources footer contains only sources actually used and allowed by repository policy.
- Navigation additions are reciprocal/useful and remain bounded.
- Required canonical docs accurately reflect shipment and do not overstate article count or scope.
- Revision 2 changes only what is needed to satisfy the source-safety remediation above.

## Verification
- Compare all substantive interpretation against `src/content/lessons/lines/02-heart-line.mdx` and the existing general/variation heart-line content.
- For every sentence that combines two or more features into one interpretation, verify that the exact combined reading exists in approved repository evidence; otherwise remove or reduce it to separate observation guidance without a new interpretive conclusion.
- Search the new article and changed docs for `most`, `generally`, `typically`, `always`, `never`, `consensus`, `modern`, `classical`, `Western`, `scientific`, `study`, `research`, `proves`, `predicts`, `cold`, `selfish`, `relationship`, `Venus`, `endpoint`, `deep`, `faint`, `compact`, and equivalent certainty/prevalence/synthesis wording; inspect every material occurrence.
- Run `npm run build`, `npm run content-audit`, `npm run audit:all`, and `git diff --check`.
- Inspect the complete diff for source integrity, SEO intent separation, navigation quality, and scope drift.

## Explicit no-change condition
Return `NO_CHANGE` only if durable `main` history shows that an equivalent indexed `short-heart-line-meaning` article already exists and satisfies this task’s intent and guardrails. Do not create a duplicate merely to consume an iteration.

## v2B durable-result contract — REQUIRED
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-022-r2.json`, commit it on a pushed `claude/relay-PP-RELAY-022-...` branch, and use one terminal result: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 1
- `task_id`: `PP-RELAY-022`
- `revision`: 2
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR number for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `human_action`: exact action only when applicable, otherwise `null`
- `execution`: truthful compact execution telemetry; do not invent model names, token counts, hidden reasoning, or subagent activity.

For `READY_FOR_REVIEW`, commit implementation/docs plus the result artifact, push the matching `claude/relay-PP-RELAY-022-...` branch, and update/open exactly one PR to `main` with title prefix `[RELAY PP-RELAY-022]` and matching revision-2 Relay footers. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and do not create a dummy PR merely to signal completion.

## Result
Stop after producing the durable revision-2 result, pushing the Relay branch, and opening/updating the single Relay PR only when the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.