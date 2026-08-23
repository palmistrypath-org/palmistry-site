# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-046

## Revision
3

## Risk Class
SOURCE_SENSITIVE

## Objective
Produce the approved companion article `Curved vs Straight Life Line` (`curved-life-line-meaning`) as an evidence-bounded clarification article. Do not manufacture a standalone curved-vs-straight personality interpretation. Explain what the path/arc can be observed to do, what the Director-verified Benham evidence actually supports about its relationship to the Mount of Venus, and what Palmistry Path cannot currently support as an independent interpretation.

## Revision note
Revision 1 returned `HUMAN_REQUIRED` because Claude could not access primary sources and correctly found no repository-held mount-independent curved/straight interpretation. The Director independently verified the available public-domain Benham evidence and recorded the controlling boundary in `.ai-ops/evidence/PP-RELAY-046-director-life-line-curvature.md`.

Revision 2 produced a cleanly built article, but cumulative Director review found that it exceeded that boundary by importing a Peter West wide-arc interpretation and synthesizing additional mount-development language such as a `well-resourced Venus`, `amplifying` warmth/vitality, and a paired wide-arc/narrow-arc energy/personality system. The controlling evidence note verifies only the Benham mount-bound relationship: a Life Line close to the thumb reduces the territory/operation of the Mount of Venus. Revision 3 must remove the unsupported extension rather than treating legacy site prose or an unverified West attribution as proof.

## Scope
Primary:
- `src/content/blog/beginner/curved-life-line-meaning.md`

Supporting only as directly necessary:
- reciprocal navigation from the existing Life Line pillar/lesson and/or Mount of Venus material
- `docs/editorial-backlog.md` published count/status after the article is actually added
- `docs/source-verification-log.md`
- `docs/CHANGELOG.md`
- `.ai-ops/results/PP-RELAY-046-r3.json`

Do not rewrite the canonical Life Line lesson/pillar, alter claim-risk tooling, or expand into other Life Line variations.

## Controlling evidence boundary
Read `.ai-ops/evidence/PP-RELAY-046-director-life-line-curvature.md` before editing.

- Benham's Director-verified historical evidence supports one narrow mount-bound claim: a Life Line lying close to the thumb reduces the territory/operation of the Mount of Venus.
- Current Life Line/Venus material may be used to explain the observable fact that the arc bounds Venus territory, but legacy interpretive prose is not automatic evidence for a new companion article.
- Do not retain Peter West as an interpretive source in this article unless his exact relevant claim is independently verified under the repository source policy during this revision. Existing copyright-era attribution elsewhere on the site is not sufficient by itself.
- Do not infer a positive opposite from Benham's narrow-arc claim. In particular, do not turn `more room` into `well-resourced Venus`, amplified warmth/vitality, adventurousness, expansive energy, or any other wide-arc interpretation unless that exact claim is independently verified and recorded.
- Palmistry Path currently has no approved evidence for an independent mount-free `straight Life Line` interpretation. State that limitation directly if useful.
- Do not claim that no palmistry source anywhere has ever offered a separate interpretation; the verified conclusion is only that Palmistry Path's approved evidence does not currently establish one.

## Article intent and differentiation
- Primary query: `curved life line meaning` / `straight life line palmistry`.
- Beginner-readable and useful even though it declines to invent a symmetrical interpretation.
- Identification must be comparative/observational only: wider sweep versus path closer to the thumb, without population average, fixed angle, or fixed cutoff.
- Clearly distinguish: (1) direct visual observation, (2) Benham's named historical mount-bound claim, and (3) Palmistry Path editorial guidance/limits.
- Differentiate from short/faint/broken Life Line articles: this task concerns path/arc only, not length, depth, breaks, branches, endpoints, or timing.
- Calm, non-alarmist framing. Palmistry Path does not use Life Line shape to diagnose health or predict lifespan.

## Required revision-3 corrections
1. Remove the Peter West wide-arc/adventurousness interpretation unless it is independently verified in this revision and logged claim-by-claim.
2. Remove the synthesized claim that a wider arc/wider Venus territory means a `well-resourced` mount or amplifies warmth, vitality, physical energy, outward engagement, adventurousness, or appetite for experience unless each exact retained interpretation has independent approved evidence.
3. Remove the synthesized opposite that a narrow arc means contained/conserved energy, a smaller sphere, or equivalent personality/energy language unless independently verified beyond Benham's narrower statement that it checks the operation of the mount.
4. Keep Benham's historical claim explicitly attributed and do not translate `checks the operation of that Mount` into a stronger modern psychological or vitality claim.
5. Review the FAQ, common-mistakes, summary, description/frontmatter, source footer, and source-verification log for equivalent extensions; do not fix only the main body paragraph.
6. If removing those interpretations leaves the article primarily explanatory/observational, that is acceptable and preferred to filling the gap by inference.

## Prohibited claims
- No invented curved-vs-straight symmetry or independent straight-line personality meaning.
- No positive-opposite inference from Benham's narrow-arc statement.
- No population norm, average curvature, fixed angle/cutoff, prevalence/rarity, anonymous consensus, or `more curve = more meaning` rule.
- No inference from hand shape, Mount of Venus development beyond the specifically verified boundary relationship, line length, depth, breaks, branches, endpoints, or other features.
- No medical, health, vitality-as-empirical-fact, lifespan, disease, danger, deterministic personality, relationship, or predictive claim.
- No broad claims such as `the tradition says`, `modern palmists believe`, or `classical sources agree` unless specifically supported and named.

## Required SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`:
1. Run `npm run audit:claim-risk -- src/content/blog/beginner/curved-life-line-meaning.md` and truthfully disposition every finding.
2. Add/update a concise claim-level evidence map in `docs/source-verification-log.md` for every retained historical interpretation.
3. Search final prose for prevalence/consensus/generalization terms and remove/narrow unsupported usage.
4. Search for precision/degree language, including average/normal curvature, fixed zones/angles, and monotonic extrapolation.
5. Search every statement connecting wide/narrow arc to Venus qualities and verify that it is either direct observation, the narrow Benham claim, or explicitly Palmistry Path editorial limitation—not inferred combination meaning.
6. Search for health/vitality/lifespan/danger language and ensure such concepts are only excluded/editorially bounded, never diagnosed or predicted.
7. Keep direct observation, named historical material, and Palmistry Path editorial policy distinguishable.
8. Verify quotation fidelity for any direct quotation.

## Acceptance criteria
1. A beginner-readable article exists and answers the query without pretending the evidence supports an independent two-sided interpretation.
2. Curvature/path identification is comparative with no population norm, average, fixed angle, or cutoff.
3. Every retained historical interpretation is traceable to independently approved evidence; the Director Benham note is sufficient only for the narrow mount-bound claim recorded there.
4. The article clearly explains that the verified Benham reading is mount-bound and that Palmistry Path does not currently have approved evidence for a separate straight-Life-Line meaning.
5. No imported legacy West interpretation, positive-opposite inference, invented combination reading, prevalence/consensus claim, stronger-with-degree rule, medical/lifespan/danger claim, or deterministic personality claim appears unless independently verified within this revision and logged.
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
Return `HUMAN_REQUIRED` only if revision 3 encounters a genuinely unresolved source/editorial decision that cannot be resolved from this controlling boundary. Do not return it merely because the article has fewer traditional interpretations after unsupported extensions are removed.
Return `BLOCKED` only for a bounded technical blocker that cannot safely be repaired within scope.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-046-r3.json` on a pushed `claude/relay-PP-RELAY-046-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object. For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.