# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-045

## Revision
2

## Risk Class
SOURCE_SENSITIVE

## Revision Note
Revision 1 / PR #79 was closed without merge after Director review. The article correctly preserved Benham's verified quotation, but then treated Benham's term `thin` as automatically equivalent to `faint`, `lightly etched`, and line depth/clarity. The verified evidence does not establish that equivalence. Revision 2 must either independently verify that Benham's `thin` line refers to the same observable quality this article calls faint/shallow/lightly etched, or narrow/reframe the article so no interpretation is transferred from `thin` to `faint` without evidence. Also remove or neutralize the unsupported prevalence/generalization statement that faintness and shortness "get confused constantly" and any equivalent wording.

## Objective
Publish the approved Next 25 companion article `Faint Life Line Meaning in Palmistry` as a narrowly source-bounded Life Line variation article. Keep faintness/depth separate from line length and do not turn a faint line into a health, vitality, lifespan, weakness, danger, or deterministic personality claim without directly verified approved evidence.

## Scope
Primary:
- `src/content/blog/beginner/faint-life-line-meaning.md`

Supporting only as directly necessary:
- reciprocal navigation from the existing Life Line pillar if useful
- `docs/editorial-backlog.md` published count/status after the article is actually added
- `docs/source-verification-log.md`
- `docs/CHANGELOG.md`
- `.ai-ops/results/PP-RELAY-045-r2.json`

Do not rewrite the canonical Life Line lesson/pillar, modify claim-risk tooling, or expand into other Life Line variations.

## Evidence boundary
- Treat existing Life Line lesson/pillar prose only as a map to candidate claims; repetition in repository prose is not automatic proof.
- The previously verified Benham quotation uses the word `thin`. Its quotation fidelity is not the issue in revision 2. The issue is semantic equivalence: do not claim that `thin` means faint/shallow/lightly etched/depth unless a specifically approved source or verified surrounding context establishes that equivalence.
- If that equivalence cannot be independently established, do not use Benham's hardship interpretation as the meaning of a visually faint/shallow line. Narrow the article to observation/safety/differentiation that is actually supportable, or return `HUMAN_REQUIRED` if a useful article cannot be produced without additional source acquisition or genuine editorial judgment.
- Independently identify approved named source(s) that support any retained interpretation of faint/shallow/weak Life Line quality before drafting interpretive prose.
- Do not infer that a faint Life Line predicts short life, poor health, weak constitution, fatigue, illness, danger, low vitality, low resilience, or any medical/psychological outcome.
- Do not create a stronger-with-degree rule such as `the fainter, the weaker` unless directly established and explicitly safe.
- Do not assert prevalence, normal/average depth, fixed measurement thresholds, vague practitioner consensus, or anonymous authority.
- Do not synthesize combinations with length, breaks, forks, double lines, mounts, hand shape, color, texture, or other features.
- Do not use commercial SEO/palmistry sites as evidence.

## Required remediation
1. Resolve the `thin` versus `faint/shallow/depth` evidence issue explicitly in `docs/source-verification-log.md` and the result artifact.
2. If verified context establishes equivalence, cite that evidence and keep the interpretation no broader than the source supports.
3. If equivalence is not established, remove/reframe every sentence that transfers Benham's `thin` interpretation to a faint/shallow/lightly etched line.
4. Remove or neutralize `the two get confused constantly` and search for equivalent unsupported prevalence/generalization wording throughout the article.
5. Re-run the full SOURCE_SENSITIVE preflight against the final prose rather than relying on revision 1's clean heuristic scan.

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
3. Search final prose for prevalence/consensus/generalization terms and remove/narrow unsupported usage.
4. Search for precision/degree language and retain only source-supported bounded wording.
5. Search for health/vitality/lifespan language and ensure it is excluded or clearly separated as historical material, never diagnosis/prediction.
6. Confirm faintness/depth is kept separate from length, breaks, forks, double lines, endpoints, mounts, and other features; no combination reading is synthesized.
7. Keep observation, named historical interpretation, and Palmistry Path editorial/safety policy clearly distinguishable.
8. Explicitly verify whether every use of `thin`, `faint`, `shallow`, `lightly etched`, `depth`, and `clarity` is observational terminology or a source-supported equivalence; do not silently interchange them.
9. Record concise claim-level evidence/disposition notes in `docs/source-verification-log.md` and the durable result.

## Acceptance criteria
1. A useful beginner-readable faint-Life-Line companion article exists and serves a distinct query from the short-Life-Line article, or a truthful `HUMAN_REQUIRED` result explains why approved evidence is insufficient.
2. Identification is comparative/observational and does not invent an average, fixed depth threshold, or population norm.
3. Every retained palmistry interpretation is grounded in a named approved source; in particular, Benham's `thin` reading is not transferred to `faint/shallow/depth` unless equivalence is independently verified.
4. No medical diagnosis, lifespan prediction, danger claim, deterministic health/vitality conclusion, unsupported prevalence/consensus, or stronger-with-degree rule appears.
5. Faintness/depth remains distinct from length and other Life Line variables; no unsupported combination reading is introduced.
6. The unsupported `get confused constantly` prevalence language and equivalents are removed/neutralized.
7. Internal links and backlog/bookkeeping updates are bounded and accurate.
8. SOURCE_SENSITIVE preflight is complete and truthful; required validation passes.

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
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-045-r2.json` on a pushed `claude/relay-PP-RELAY-045-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object. For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.