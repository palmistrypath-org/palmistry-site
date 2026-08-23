# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-046

## Revision
2

## Risk Class
SOURCE_SENSITIVE

## Objective
Produce the approved companion article `Curved vs Straight Life Line` (`curved-life-line-meaning`) as an evidence-bounded clarification article. Do not manufacture a standalone curved-vs-straight personality interpretation. Explain what the path/arc can be observed to do, what the verified Benham evidence actually supports about its relationship to the Mount of Venus, and what Palmistry Path cannot currently support as an independent interpretation.

## Revision note
Revision 1 returned `HUMAN_REQUIRED` because Claude could not access primary sources and correctly found no repository-held mount-independent curved/straight interpretation. The Director independently verified the available public-domain evidence and recorded the controlling boundary in `.ai-ops/evidence/PP-RELAY-046-director-life-line-curvature.md`. This resolves the source-access gate without owner intervention. Revision 2 reframes the backlog intent rather than inventing symmetry.

## Scope
Primary:
- `src/content/blog/beginner/curved-life-line-meaning.md`

Supporting only as directly necessary:
- reciprocal navigation from the existing Life Line pillar/lesson and/or Mount of Venus material
- `docs/editorial-backlog.md` published count/status after the article is actually added
- `docs/source-verification-log.md`
- `docs/CHANGELOG.md`
- `.ai-ops/results/PP-RELAY-046-r2.json`

Do not rewrite the canonical Life Line lesson/pillar, alter claim-risk tooling, or expand into other Life Line variations.

## Controlling evidence boundary
Read `.ai-ops/evidence/PP-RELAY-046-director-life-line-curvature.md` before drafting.

- Benham's verified historical evidence supports a mount-bound observation: a Life Line lying close to the thumb reduces the territory/operation of the Mount of Venus.
- Current approved Life Line/Venus material may be used to explain that the arc is the boundary of Venus, but must not be converted into a new standalone `curved = X / straight = Y` personality system.
- Palmistry Path currently has no approved evidence for an independent mount-free `straight Life Line` interpretation. State that limitation directly if needed.
- The article may answer the search query by clarifying the distinction between visible path/curvature and the historically paired Venus-boundary reading.
- Do not claim that no palmistry source anywhere has ever offered a separate interpretation; the verified conclusion is only that Palmistry Path's approved evidence does not currently establish one.

## Article intent and differentiation
- Primary query: `curved life line meaning` / `straight life line palmistry`.
- Beginner-readable and useful even though it declines to invent a symmetrical interpretation.
- Identification must be comparative/observational only: wider sweep versus path closer to the thumb, without universal normal curve, population average, fixed angle, or fixed cutoff.
- Clearly distinguish: (1) direct visual observation, (2) Benham's historical mount-bound interpretation, and (3) Palmistry Path editorial guidance/limits.
- Differentiate from short/faint/broken Life Line articles: this task concerns path/arc only, not length, depth, breaks, branches, endpoints, or timing.
- Calm, non-alarmist framing. Palmistry Path does not use Life Line shape to diagnose health or predict lifespan.

## Prohibited claims
- No invented curved-vs-straight symmetry or independent straight-line personality meaning.
- No population norm, average curvature, fixed angle/cutoff, prevalence/rarity, anonymous consensus, or `more curve = more meaning` rule.
- No inference from hand shape, Mount of Venus development beyond the specifically verified boundary relationship, line length, depth, breaks, branches, endpoints, or other features.
- No medical, health, vitality-as-empirical-fact, lifespan, disease, danger, deterministic personality, relationship, or predictive claim.
- No broad claims such as `the tradition says`, `modern palmists believe`, or `classical sources agree` unless specifically supported and named.

## Required SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`:
1. Run `npm run audit:claim-risk -- src/content/blog/beginner/curved-life-line-meaning.md` and truthfully disposition every finding.
2. Add a concise claim-level evidence map to `docs/source-verification-log.md` for every retained historical interpretation.
3. Search final prose for prevalence/consensus/generalization terms and remove/narrow unsupported usage.
4. Search for precision/degree language, including average/normal curvature, fixed zones/angles, and monotonic extrapolation.
5. Confirm the article does not turn the Venus boundary evidence into a new mount-independent curved/straight meaning.
6. Search for health/vitality/lifespan/danger language and ensure such concepts are only excluded/editorially bounded, never diagnosed or predicted.
7. Keep direct observation, named historical material, and Palmistry Path editorial policy distinguishable.
8. Verify quotation fidelity for any direct quotation.

## Acceptance criteria
1. A beginner-readable article exists and answers the query without pretending the evidence supports an independent two-sided interpretation.
2. Curvature/path identification is comparative with no population norm, average, fixed angle, or cutoff.
3. Every retained historical interpretation is traceable to the Director evidence note and its named source boundary.
4. The article clearly explains that the verified historical reading is mount-bound and that Palmistry Path does not currently have approved evidence for a separate straight-Life-Line meaning.
5. No invented symmetry, combination reading, prevalence/consensus claim, stronger-with-degree rule, medical/lifespan/danger claim, or deterministic personality claim appears.
6. Internal links and backlog bookkeeping remain bounded and accurate.
7. SOURCE_SENSITIVE preflight is complete and truthful; required validation passes.

## Validation
Run at minimum:
- `npm run audit:claim-risk -- src/content/blog/beginner/curved-life-line-meaning.md`
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `git diff --check`

## Stop conditions
Return `HUMAN_REQUIRED` only if revision 2 still encounters a genuinely unresolved source/editorial decision that cannot be resolved from this controlling boundary. Do not return it merely because there is no independent straight-line meaning; that absence is now an authorized part of the article's answer.
Return `BLOCKED` only for a bounded technical blocker that cannot safely be repaired within scope.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-046-r2.json` on a pushed `claude/relay-PP-RELAY-046-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object. For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.