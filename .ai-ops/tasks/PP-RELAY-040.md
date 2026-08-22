# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-040

## Revision
2

## Risk Class
SOURCE_SENSITIVE

## Objective
Complete the bounded source-integrity cleanup of the canonical Head Line lesson by correcting the residual unsupported prevalence/consensus and universalized observation wording identified during independent Director review of revision 1.

## Why this revision
Revision 1 substantially improved the lesson but cumulative Director review found several statements that still exceed the approved evidence boundary:
- `one that is consistently read across the Western tradition` still asserts broad cross-tradition consistency without named repository evidence;
- `a moderate downward slope is a normal middle case` replaces unsupported frequency wording with an unsupported norm/distribution claim;
- `It comes to a clear terminus somewhere in the outer half of the palm` turns the prior unsupported `In most hands...` statement into an effectively universal anatomical/prevalence claim;
- `a reading popular palmistry gets wrong` still attributes a behavior/error to a vague population (`popular palmistry`) without evidence, despite this task's explicit vague-authority guardrail.

These are narrow source-boundary corrections, not a request to reopen already accepted revision-1 edits or expand lesson meaning.

## Scope
Primary content scope:
- `src/content/lessons/lines/03-head-line.mdx`

Supporting scope:
- `docs/source-verification-log.md` only as needed to record revision-2 disposition;
- `docs/CHANGELOG.md` only if directly necessary to keep the existing PP-RELAY-040 entry accurate;
- `.ai-ops/results/PP-RELAY-040-r2.json`.

Do not create a companion article, modify claim-risk tooling, rewrite the lesson, add new palmistry meanings, or replay stale branch content.

## Required remediation
1. Remove or narrow the four residual claims above so the final wording does not imply unsupported cross-source consensus, population norms, universal physical prevalence, or vague anonymous authority.
2. Prefer direct observation or explicit Palmistry Path editorial framing where appropriate.
3. Do not replace a removed prevalence/consensus claim with a synonym such as `normal`, `usual`, `standard`, `generally`, `consistently`, or equivalent unless directly supported by approved repository evidence.
4. Preserve all sound revision-1 corrections unless a directly adjacent wording change is required for grammatical coherence.
5. Re-run the complete SOURCE_SENSITIVE preflight against the final lesson, including a manual pass for semantically equivalent wording not detected by the heuristic.
6. No new combination readings, prevalence claims, scientific/historical claims, fixed cutoffs, or monotonic degree extrapolations may be introduced.

## Acceptance criteria
1. The four Director-identified residual statements are corrected without introducing equivalent unsupported claims.
2. Final Head Line lesson contains no unsupported broad `Western tradition` consistency claim for path/slope, no unsupported `normal middle case` distribution wording, no universalized endpoint-location claim, and no vague `popular palmistry gets wrong` authority/behavior claim.
3. Existing source-safe interpretations, lesson structure, figures, learning flow, and accepted revision-1 corrections remain intact.
4. Final durable result explicitly dispositions each of these four revision-2 findings.
5. Required source preflight is complete and truthful.
6. Validation passes.

## Validation
Run at minimum:
- `npm run audit:claim-risk -- src/content/lessons/lines/03-head-line.mdx`
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `git diff --check`

## No-change / stop conditions
Do not return `NO_CHANGE`; revision 1's reviewed PR contains the four residual claims above and revision 2 exists specifically to remediate them.

Return `HUMAN_REQUIRED` only if removing/narrowing one of these statements would unexpectedly require a consequential curriculum/source decision that cannot be resolved from approved repository evidence. Do not guess.

Return `BLOCKED` for a bounded technical blocker preventing the required correction/validation that cannot safely be repaired within scope.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-040-r2.json` on a pushed `claude/relay-PP-RELAY-040-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object covering unsupported prevalence/consensus, scientific/historical claims, combination readings, vague authority, quotation fidelity, precision/degree extrapolation, and observation-vs-interpretation framing.

For `READY_FOR_REVIEW`, update the existing task branch/PR when practical or open exactly one revision-2 Relay PR targeting `main` if the existing review surface cannot safely carry the revision. Ensure matching Relay footers identify revision 2. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.

## Revision history
- Revision 1: initial bounded canonical Head Line source-integrity cleanup after PP-RELAY-039 tooling improvement.
- Revision 2: Director remediation for residual unsupported cross-tradition consistency, norm/distribution, universal endpoint, and vague `popular palmistry` claims left after revision 1.
