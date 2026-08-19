# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-021

## Revision
2

## Objective
Remediate PP-RELAY-021 only: preserve the approved skeptic/accuracy article and navigation/docs work while removing, narrowing, or explicitly supporting scientific/evidence claims that exceed the repository-approved evidence base.

## Revision note
Revision 1 is not merge-approved. Independent Director review found a specific unsupported expansion: the article says that studies comparing life-line length with recorded lifespan find no consistent relationship and repeats that claim in the FAQ, but the approved Foundations evidence supplied by the task does not establish that specific study finding and the article's Sources footer contains no scientific study supporting it. The article also states that palmistry has been practiced continuously in several independent forms for centuries; retain that only if it is directly supported by approved repository evidence, otherwise narrow it to the historical framing already established in the repository. Do not broaden the task or rewrite sound sections unnecessarily.

## Authorized scope
1. Edit `src/content/blog/beginner/is-palmistry-real.md` only as needed to remediate the unsupported evidence/history wording identified above and directly equivalent claims discovered in the same focused pass.
2. Preferred safe remedy for the life-line-study claim is to remove or narrow it back to the repository-approved statements: there is no scientific support for occult predictive meaning and no palmistry tradition has been validated as reliably predictive under controlled conditions. Do not add a new scientific source merely to preserve a nonessential sentence unless a clearly approved Tier 1–3 repository source already establishes it.
3. Preserve Ray Hyman as an anecdote, not a controlled experiment.
4. Preserve the distinction between historical predictive claims and Palmistry Path's non-predictive editorial posture.
5. Keep the reciprocal navigation edit navigation-only.
6. Update canonical docs only if their revision-1 wording repeats a claim removed or narrowed from the article; otherwise avoid doc churn.
7. Do not alter unrelated content or select new work.

## Editorial/source guardrails
- Follow `AGENTS.md` and `docs/editorial-style-guide.md`, especially §§2–5.
- Never invent quotations, scientific findings, palmistry meanings, historical consensus, prevalence, or source attributions.
- Quotation marks require verified verbatim wording from the cited edition. Paraphrase is preferred.
- Do not sanitize historical primary sources to fit Palmistry Path's editorial boundary.
- Do not make medical, legal, financial, lifespan, relationship, or deterministic character claims as advice.
- No broad web research. Narrow/delete nonessential claims rather than introducing weak or unapproved sourcing.

## Acceptance criteria
- The article still directly answers the skeptic/accuracy intent and remains distinct from `what-palmistry-is.md`.
- No specific claim about scientific studies comparing life-line length with lifespan remains unless directly supported by an approved Tier 1–3 source actually cited for that claim.
- No unsupported continuity/prevalence/history generalization remains.
- Existing repository-approved phrasing about lack of scientific support for occult predictive meaning and lack of controlled predictive validation remains accurately scoped.
- Ray Hyman remains explicitly anecdotal rather than experimental evidence.
- Historical claims and Palmistry Path policy remain clearly separated.
- Sources footer contains only sources actually used and does not imply that palmistry primary sources support scientific-evidence claims.
- Revision remains bounded to remediation plus directly necessary canonical-doc corrections.

## Verification
- Compare the final article against `src/content/lessons/foundations/01-what-palmistry-is.mdx`, `src/content/blog/beginner/what-palmistry-is.md`, and `docs/editorial-style-guide.md` for claim fidelity.
- Search the article and changed docs for `studies`, `study`, `research`, `scientific`, `evidence`, `validated`, `lifespan`, `life line`, `continuous`, `independent`, `most`, `generally`, `typically`, `consensus`, and equivalent certainty/prevalence wording; inspect every material occurrence.
- Run `npm run build`, `npm run content-audit`, `npm run audit:all`, and `git diff --check`.
- Inspect the complete PR diff for source integrity, SEO, navigation, cannibalization, and scope drift.

## Explicit no-change condition
`NO_CHANGE` is not expected for this revision because revision 1 contains a concrete claim requiring remediation. Use a non-change terminal result only if durable branch history proves the flagged wording was already corrected before this revision was dispatched.

## v2B durable-result contract — REQUIRED
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-021-r2.json`, commit it on a pushed `claude/relay-PP-RELAY-021-...` branch, and use one terminal result: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 1
- `task_id`: `PP-RELAY-021`
- `revision`: 2
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR number for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `human_action`: exact action only when applicable, otherwise `null`
- `execution`: truthful compact execution telemetry; do not invent model names, token counts, hidden reasoning, or subagent activity.

For `READY_FOR_REVIEW`, commit remediation/docs plus the result artifact, push the matching `claude/relay-PP-RELAY-021-...` branch, and keep exactly one Relay PR to `main` with title prefix `[RELAY PP-RELAY-021]` and matching revision-2 Relay footers. Reuse/update PR #36 rather than opening a second PR if practical. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and do not create a dummy PR merely to signal completion.

## Result
Stop after producing the durable revision-2 result, pushing the Relay branch, and updating the single Relay PR only when the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.
