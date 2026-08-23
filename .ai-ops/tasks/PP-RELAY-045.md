# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-045

## Revision
1

## Risk Class
SOURCE_SENSITIVE

## Objective
Publish the approved Next 25 companion article `Faint Life Line Meaning in Palmistry` as a narrowly source-bounded Life Line variation article. Keep faintness/depth separate from line length and do not turn a faint line into a health, vitality, lifespan, weakness, danger, or deterministic personality claim without directly verified approved evidence.

## Why this task now
- PP-RELAY-044 / PR #78 is verified merged at the exact Director-approved head, bringing v2C to 21 accepted iterations.
- `docs/editorial-backlog.md` identifies item 16, Faint Life Line, as the next unshipped line-variation article.
- The backlog explicitly distinguishes faintness/depth from shortness/length and notes anxiety/cannibalization risk with the existing short-life-line article.

## Scope
Primary:
- create `src/content/blog/beginner/faint-life-line-meaning.md`

Supporting only as directly necessary:
- reciprocal navigation from the existing Life Line pillar if useful
- `docs/editorial-backlog.md` published count/status after the article is actually added
- `docs/source-verification-log.md`
- `docs/CHANGELOG.md`
- `.ai-ops/results/PP-RELAY-045-r1.json`

Do not rewrite the canonical Life Line lesson/pillar, modify claim-risk tooling, or expand into other Life Line variations.

## Evidence boundary
- Treat existing Life Line lesson/pillar prose only as a map to candidate claims; repetition in repository prose is not automatic proof.
- Independently identify the approved named source(s) that actually support any retained interpretation of faint/shallow/weak Life Line quality before drafting interpretive prose.
- If repository-held or safely verifiable approved evidence supports only observation/terminology and not a substantive interpretation, narrow the article accordingly or return `HUMAN_REQUIRED` rather than inventing meaning.
- Do not infer that a faint Life Line predicts short life, poor health, weak constitution, fatigue, illness, danger, low vitality, low resilience, or any medical/psychological outcome unless a specifically approved source directly supports the exact historical claim; even then, medical/predictive framing must be excluded from Palmistry Path guidance.
- Do not create a stronger-with-degree rule such as `the fainter, the weaker` unless directly established and explicitly safe.
- Do not assert prevalence, normal/average depth, fixed measurement thresholds, vague practitioner consensus, or anonymous authority.
- Do not synthesize combinations with length, breaks, forks, double lines, mounts, hand shape, color, texture, or other features.
- Do not use commercial SEO/palmistry sites as evidence.

## Article intent and differentiation
- Primary query: `faint life line meaning` / `faint life line palmistry`.
- Opening should clearly distinguish faintness/depth/clarity from shortness/length so it does not cannibalize `short-life-line-meaning`.
- Identification must stay observational/comparative to the hand being examined; no population norm or fixed depth threshold.
- Use calm, non-alarmist framing. Palmistry Path does not use a faint Life Line to diagnose health or predict lifespan.
- Link naturally to the Life Line pillar/lesson and, where useful, the short-life-line article to clarify the difference.

## Required SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`:
1. Run `npm run audit:claim-risk -- src/content/blog/beginner/faint-life-line-meaning.md` and truthfully disposition every finding.
2. Verify every retained interpretation against a specifically named approved source; legacy lesson/pillar prose is not proof by itself.
3. Search final prose for prevalence/consensus/generalization terms (`most`, `many`, `often`, `commonly`, `typically`, `generally`, `usual`, `rare`, `popular`, `modern palmists`, `traditional readers`, `experts`, and equivalents) and remove/narrow unsupported usage.
4. Search for precision/degree language (`average`, `normal`, fixed depth thresholds, `the fainter...the more/less`, `very faint means`, and equivalents) and retain only source-supported bounded wording.
5. Search for health/vitality/lifespan language and ensure it is either excluded, clearly historical with safe editorial separation, or directly corrected as unsupported—not presented as diagnosis or prediction.
6. Confirm faintness/depth is kept separate from length, breaks, forks, double lines, endpoints, mounts, and other features; no combination reading is synthesized.
7. Keep observation, named historical interpretation, and Palmistry Path editorial/safety policy clearly distinguishable.
8. Record concise claim-level evidence/disposition notes in `docs/source-verification-log.md` and the durable result.

## Acceptance criteria
1. A useful beginner-readable faint-Life-Line companion article exists and serves a distinct query from the short-Life-Line article.
2. Identification is comparative/observational and does not invent an average, fixed depth threshold, or population norm.
3. Every retained palmistry interpretation is grounded in a named approved source; unsupported legacy prose is not laundered into the article.
4. No medical diagnosis, lifespan prediction, danger claim, deterministic health/vitality conclusion, unsupported prevalence/consensus, or stronger-with-degree rule appears.
5. Faintness/depth remains distinct from length and other Life Line variables; no unsupported combination reading is introduced.
6. Internal links and backlog/bookkeeping updates are bounded and accurate.
7. SOURCE_SENSITIVE preflight is complete and truthful; required validation passes.

## Validation
Run at minimum:
- `npm run audit:claim-risk -- src/content/blog/beginner/faint-life-line-meaning.md`
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `git diff --check`

## Stop conditions
Return `HUMAN_REQUIRED` if a useful interpretive article cannot be produced within approved evidence and additional source acquisition or genuine editorial judgment is required. Do not pad with guesses.
Return `BLOCKED` only for a bounded technical blocker that cannot safely be repaired within scope.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-045-r1.json` on a pushed `claude/relay-PP-RELAY-045-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object. For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.