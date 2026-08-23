# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-046

## Revision
1

## Risk Class
SOURCE_SENSITIVE

## Objective
Produce the approved Next 25 companion article `Curved vs Straight Life Line` (`curved-life-line-meaning`) only if the curved/straight Life Line observation and any retained interpretation can be grounded in approved evidence. Keep the article useful and observational without inventing a traditional meaning from the visible geometry alone.

## Scope
Primary:
- `src/content/blog/beginner/curved-life-line-meaning.md`

Supporting only as directly necessary:
- reciprocal navigation from the existing Life Line pillar/lesson
- `docs/editorial-backlog.md` published count/status after the article is actually added
- `docs/source-verification-log.md`
- `docs/CHANGELOG.md`
- `.ai-ops/results/PP-RELAY-046-r1.json`

Do not rewrite the canonical Life Line lesson/pillar, alter claim-risk tooling, or expand into other Life Line variations.

## Evidence boundary
- The backlog authorizes the search intent and companion-article slot; it is not evidence for palmistry meaning.
- Existing Life Line lesson/pillar prose is a map to candidate claims, not automatic proof.
- Independently verify every retained historical/traditional interpretation against a specifically named approved source.
- If repository-held evidence does not establish a curved-vs-straight interpretation, do not infer one from nearby Life Line meanings, Mount of Venus material, hand shape, line length, depth, breaks, branches, endpoints, or other independently supported features.
- No population norm, average curvature, fixed angle, fixed geometric cutoff, prevalence/rarity claim, anonymous consensus, or monotonic `more curve = more meaning` rule.
- No health, vitality, lifespan, disease, danger, deterministic personality, relationship, or predictive claim.
- Keep observation, named historical interpretation, and Palmistry Path editorial guidance clearly separate.

## Article intent and differentiation
- Primary query: `curved life line meaning` / `straight life line palmistry`.
- Differentiate from `short-life-line-meaning` and `faint-life-line-meaning`: this task concerns path/curvature only, not length or depth.
- Identification must be comparative/observational and must not imply a universal normal curve.
- If evidence supports only one side of the comparison or only a narrow named-source interpretation, state that limitation directly rather than manufacturing symmetry.
- Calm, non-alarmist framing. Palmistry Path does not use Life Line shape to diagnose health or predict lifespan.

## Required SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`:
1. Run `npm run audit:claim-risk -- src/content/blog/beginner/curved-life-line-meaning.md` and truthfully disposition every finding.
2. Build a concise claim-level evidence map in `docs/source-verification-log.md` for every retained interpretation.
3. Search final prose for prevalence/consensus/generalization terms and remove/narrow unsupported usage.
4. Search for precision/degree language, including average/normal curvature, fixed zones/angles, and `more curve = more` extrapolation.
5. Confirm no interpretation is synthesized from mounts, length, depth, breaks, branches, endpoints, hand shape, or other features unless that exact combination is independently supported.
6. Search for health/vitality/lifespan/danger language and ensure it is editorially excluded, never interpreted diagnostically or predictively.
7. Keep direct observation, named historical material, and Palmistry Path editorial policy distinguishable.
8. Verify quotation fidelity for any direct quotation.

## Acceptance criteria
1. A beginner-readable companion article exists only if useful source-bounded content can be produced; otherwise return truthful `HUMAN_REQUIRED` when genuine additional source acquisition/judgment is required.
2. Curved/straight identification is observational with no population norm, average, fixed angle, or cutoff.
3. Every retained palmistry interpretation is traceable to a named approved source.
4. No invented curved-vs-straight symmetry, combination reading, prevalence/consensus claim, or stronger-with-degree rule appears.
5. No medical, lifespan, danger, health/vitality, deterministic personality, relationship, or predictive claim appears.
6. Internal links and backlog bookkeeping remain bounded and accurate.
7. SOURCE_SENSITIVE preflight is complete and truthful; required validation passes.

## Validation
Run at minimum:
- `npm run audit:claim-risk -- src/content/blog/beginner/curved-life-line-meaning.md` when the article exists
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `git diff --check`

## Stop conditions
Return `HUMAN_REQUIRED` if a useful article cannot be produced within approved evidence and genuine additional source/editorial judgment is required. Do not pad with guesses or manufacture a balanced two-sided interpretation.
Return `BLOCKED` only for a bounded technical blocker that cannot safely be repaired within scope.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-046-r1.json` on a pushed `claude/relay-PP-RELAY-046-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object. For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.