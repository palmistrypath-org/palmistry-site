# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-040

## Revision
1

## Risk Class
SOURCE_SENSITIVE

## Objective
Run a bounded source-integrity cleanup of the canonical Head Line lesson, using the newly expanded claim-risk preflight to remove or narrow unsupported precision, prevalence/consensus, and degree-extrapolation wording before additional Head Line companion articles are produced.

## Why this task
PP-RELAY-037 and PP-RELAY-038 exposed unsupported fixed-cutoff, average, and stronger-with-degree language in companion drafts. PP-RELAY-039 added targeted heuristic coverage and its repository-wide sanity scan reported remaining findings in the canonical Head Line lesson. Current `main` still contains examples such as `ending before it reaches the central zone`, `Most head lines fall somewhere between the two`, `The further the slope, the more strongly...`, and other prevalence/degree wording. The canonical lesson should be reconciled before it is reused as evidence for more articles.

## Scope
Primary content scope:
- `src/content/lessons/lines/03-head-line.mdx`

Supporting scope:
- existing repository source-verification/evidence records directly relevant to Head Line claims;
- directly necessary changelog/source-verification bookkeeping;
- `.ai-ops/results/PP-RELAY-040-r1.json`.

Do not create the Straight vs Curved Head Line article in this task. Do not rewrite the whole lesson, change curriculum positioning, add new palmistry meanings, or replay the stale 3E/3F branch.

## Required source-sensitive method
1. Run the current targeted claim-risk audit against the Head Line lesson and inventory every finding.
2. Independently inspect the scoped lesson for materially equivalent unsupported claims the heuristic may miss, especially prevalence/ranking, fixed geometric thresholds, and monotonic stronger-with-degree wording.
3. For every retained palmistry interpretation, ground it in approved repository-held evidence or an already verified source record. Existing unsourced lesson prose is not automatically evidence.
4. Where support is insufficient, narrow/remove the claim rather than inventing support.
5. Keep observation separate from historical interpretation and Palmistry Path editorial guidance.
6. Do not introduce vague authority such as `modern palmists`, `most sources`, `popular palmistry`, `commonly`, `typically`, or similar unless directly supported and attributed.
7. Do not synthesize new combination readings from separately supported features.

Pay particular attention to the current lesson's slope, length, endpoint, fork, branch/break, depth/clarity, and frequency/ranking language. This is a claim-boundary cleanup, not permission to expand those sections.

## Acceptance criteria
1. Every claim-risk audit finding in the final scoped lesson is explicitly dispositioned in the durable result with evidence or a narrow explanation of why it is non-claim/procedural wording.
2. Unsupported fixed cutoffs such as the `central zone` short-line definition are removed or softened to comparative observation.
3. Unsupported prevalence/ranking language is removed/narrowed unless repository evidence directly supports it.
4. Unsupported monotonic degree extrapolations (`the further...the stronger`, equivalent) are removed/narrowed unless the exact degree relationship is supported.
5. No new palmistry meanings, prevalence claims, scientific claims, or combination readings are introduced.
6. Existing lesson structure, figures, learning flow, and source-safe interpretations remain intact where support exists.
7. `npm run audit:claim-risk -- src/content/lessons/lines/03-head-line.mdx`, build, content audit, and relevant source/content checks pass; any retained heuristic findings are documented and defensible.

## Validation
Run at minimum:
- `npm run audit:claim-risk -- src/content/lessons/lines/03-head-line.mdx`
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `git diff --check`

## No-change / stop conditions
Return `NO_CHANGE` only if current `main` already has no unsupported precision/prevalence/degree claims in the scoped lesson after evidence review, and document every current claim-risk finding and its verified support.

Return `HUMAN_REQUIRED` if a materially important interpretation cannot be safely retained or corrected without source evidence unavailable in the repository and removing/narrowing it would create a consequential curriculum decision. Preserve the exact evidence gap; do not guess.

Return `BLOCKED` for a bounded technical blocker that prevents the required audit/validation and cannot be safely repaired within scope.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-040-r1.json` on a pushed `claude/relay-PP-RELAY-040-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object covering unsupported prevalence/consensus, scientific/historical claims, combination readings, vague authority, quotation fidelity, precision/degree extrapolation, and observation-vs-interpretation framing.

For `READY_FOR_REVIEW`, commit content/bookkeeping plus the result artifact, push one Relay branch, and open exactly one PR targeting `main` with matching Relay footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.

## Revision history
- Revision 1: initial bounded canonical Head Line source-integrity cleanup after PP-RELAY-039 tooling improvement.
