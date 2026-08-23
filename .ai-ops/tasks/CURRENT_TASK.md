# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-045

## Revision
3

## Risk Class
SOURCE_SENSITIVE

## Revision Note
Revision 2 / PR #80 was closed without merge after cumulative Director review. Revision 2 correctly stopped transferring Benham's hardship interpretation from `thin` to `faint`, but the explanatory prose still made unsupported semantic equivalences among visual terms. In particular, it said a thin line "describes how narrow a line is" even though the verified evidence does not establish what visual dimension Benham meant by `thin`, and it repeatedly treated `faint`, `depth`, `clarity`, `pale/dark`, and `lightly etched` as interchangeable despite the task requiring those terms to be checked separately. Revision 3 must remove those residual equivalence claims rather than defining Benham's terminology by inference.

## Objective
Publish the approved Next 25 companion article `Faint Life Line Meaning in Palmistry` as a narrowly source-bounded Life Line variation article. Keep the article observational and beginner-useful without inventing a traditional interpretation for faintness or silently equating faintness with thinness, shallowness, depth, clarity, darkness, or any other line-quality dimension.

## Scope
Primary:
- `src/content/blog/beginner/faint-life-line-meaning.md`

Supporting only as directly necessary:
- reciprocal navigation from the existing Life Line pillar if useful
- `docs/editorial-backlog.md` published count/status after the article is actually added
- `docs/source-verification-log.md`
- `docs/CHANGELOG.md`
- `.ai-ops/results/PP-RELAY-045-r3.json`

Do not rewrite the canonical Life Line lesson/pillar, modify claim-risk tooling, or expand into other Life Line variations.

## Evidence boundary
- Existing Life Line lesson/pillar prose is a map to candidate claims, not proof.
- The previously verified Benham quotation uses `thin`. Do not define what Benham meant by `thin` unless approved source context directly establishes it.
- Do not claim that `thin` means narrow, faint, shallow, lightly etched, pale, unclear, low-depth, or any other visual property by inference.
- Do not treat `faint`, `shallow`, `depth`, `clarity`, `light/dark`, `pale`, or `lightly etched` as synonyms unless specifically supported. If needed, choose one neutral observational formulation for the article and explicitly avoid claiming equivalence to the others.
- Benham's hardship interpretation must not be applied to faintness.
- Any retained historical interpretation must be grounded in a named approved source.
- No health, vitality, lifespan, weakness, danger, personality, prevalence, normal/average depth, fixed threshold, anonymous consensus, or stronger-with-degree claim.
- No combinations with length, breaks, forks, double lines, mounts, hand shape, color, texture, or other features.

## Required remediation
1. Remove or rewrite the sentence asserting that a thin line "describes how narrow a line is" unless direct approved evidence establishes that definition.
2. Perform an article-wide terminology pass over every use of `thin`, `faint`, `shallow`, `depth`, `clarity`, `pale`, `dark`, `lightly etched`, `lighter`, and `defined`.
3. Ensure the final article does not use those terms as silently interchangeable dimensions. Prefer one explicitly editorial/observational description of the target visual feature and acknowledge where terminology is not source-standardized.
4. Keep the useful revision-2 conclusion: no traditional meaning is assigned to faintness alone because the evidence does not establish one.
5. Preserve the removal of the unsupported confusion-frequency wording and all revision-2 safety boundaries.
6. Update the source-verification log and durable result with the exact terminology decision made.

## Article intent and differentiation
- Primary query: `faint life line meaning` / `faint life line palmistry`.
- Clearly distinguish the target visual observation from line length so it does not cannibalize `short-life-line-meaning`.
- Identification must be comparative to the hand being examined; no population norm or fixed threshold.
- Calm, non-alarmist framing. Palmistry Path does not use this feature to diagnose health or predict lifespan.
- Link naturally to the Life Line pillar/lesson and short-Life-Line article where useful.

## Required SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`:
1. Run `npm run audit:claim-risk -- src/content/blog/beginner/faint-life-line-meaning.md` and truthfully disposition every finding.
2. Verify every retained interpretation against a specifically named approved source.
3. Search final prose for prevalence/consensus/generalization terms and remove/narrow unsupported usage.
4. Search for precision/degree language and retain only source-supported bounded wording.
5. Search for health/vitality/lifespan language and ensure it is editorially excluded, never diagnosed/predicted.
6. Confirm the target visual feature remains separate from length, breaks, forks, double lines, endpoints, mounts, and other features.
7. Keep observation, named historical material, and Palmistry Path editorial policy distinguishable.
8. Explicitly audit each relevant visual term listed above; no silent equivalence is allowed.
9. Record concise claim-level evidence/disposition notes in `docs/source-verification-log.md` and the durable result.

## Acceptance criteria
1. A useful beginner-readable companion article exists, or a truthful `HUMAN_REQUIRED` result explains why it cannot be produced within approved evidence.
2. Identification is comparative/observational with no average, fixed threshold, or population norm.
3. No interpretation is transferred from Benham's `thin` line to faintness, and Benham's `thin` is not given an inferred visual definition.
4. `faint`, `shallow`, `depth`, `clarity`, darkness/paleness, and related terms are not silently treated as equivalent.
5. No medical, lifespan, danger, health/vitality, deterministic personality, prevalence/consensus, or stronger-with-degree claim appears.
6. No unsupported combination reading is introduced.
7. Internal links and bookkeeping remain bounded and accurate.
8. SOURCE_SENSITIVE preflight is complete and truthful; required validation passes.

## Validation
Run at minimum:
- `npm run audit:claim-risk -- src/content/blog/beginner/faint-life-line-meaning.md`
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `git diff --check`

## Stop conditions
Return `HUMAN_REQUIRED` if a useful article cannot be produced within approved evidence and genuine additional source/editorial judgment is required. Do not pad with guesses.
Return `BLOCKED` only for a bounded technical blocker that cannot safely be repaired within scope.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-045-r3.json` on a pushed `claude/relay-PP-RELAY-045-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object. For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.