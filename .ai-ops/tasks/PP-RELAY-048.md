# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-048

## Revision
3

## Risk Class
SOURCE_SENSITIVE

## Revision 2 note
Revision 1 correctly returned HUMAN_REQUIRED because Claude could not access primary sources. Director review independently verified a narrow Cheiro evidence boundary and recorded it at `.ai-ops/evidence/PP-RELAY-048-cheiro-fate-line-break.md`. Revision 2 must use that evidence as the controlling drafting boundary and must not reintroduce broader legacy Fate Line claims as if they were verified.

## Revision 3 note
Revision 2 produced a useful, source-bounded article and passed CI plus independent Director validation, but two narrow correctness issues remain. Revise only these issues and directly equivalent wording while preserving the sound article, evidence map, navigation, and bookkeeping:
- Define a break as a discontinuity between separate line segments without saying that every "true break" requires a plain gap before a later segment resumes. Then distinguish the two observable arrangements consistently: a clean break has a gap along the line's course, while Cheiro's overlapping configuration has a separate new segment beginning before the earlier segment ends.
- Do not characterize Cheiro or the verified historical reading as containing no timing, no event, or no outcome. The controlling evidence says Cheiro's timing/date system is outside this task; it does not support a historical negative claim that he supplied none. State instead that this article intentionally does not teach timing and that Palmistry Path does not use the configuration to predict or guarantee an event or outcome.

## Objective
Produce the approved Next 25 companion article **Broken Fate Line Meaning in Palmistry** (`broken-fate-line-meaning`) as a narrowly source-bounded beginner article using the Director-verified Cheiro evidence. The existing Fate Line lesson and pillar remain maps to candidate claims, not automatic evidence.

## Scope
Primary:
- `src/content/blog/beginner/broken-fate-line-meaning.md`

Supporting only as directly necessary:
- one or two reciprocal navigation links from existing Fate Line content
- `docs/editorial-backlog.md` published count/status after the article is actually added
- `docs/source-verification-log.md`
- `docs/CHANGELOG.md`
- `.ai-ops/results/PP-RELAY-048-r3.json`

Do not rewrite the canonical Fate Line lesson/pillar in this task. If source review exposes separate legacy defects there, record them for a later bounded cleanup rather than expanding scope.

## Controlling evidence
Read `.ai-ops/evidence/PP-RELAY-048-cheiro-fate-line-break.md` before drafting.

Verified boundary:
- Cheiro historically associates a generally broken/piecemeal Fate Line with troubles/breaks and lack of settled or continuous success.
- For an overlapping break—one side beginning before the other ends—Cheiro historically associates the configuration with a complete change in surroundings and position.
- Cheiro adds a conditional advancement reading only when the new line is good and straight.

Keep these as named historical claims, not empirical facts or Palmistry Path predictions.

## Article intent and differentiation
- Primary query: `broken fate line meaning` / `break in fate line palmistry`.
- Beginner-readable companion to the main Fate Line pillar.
- Open by distinguishing **absence** (no Fate Line) from **interruption** (a visible line stops/gaps and may resume), so it does not cannibalize `no-fate-line-meaning`.
- Observation first: describe exactly what a gap/interruption looks like before interpretation.
- Distinguish a simple break from Cheiro's specifically verified overlapping-break configuration.
- Keep named historical interpretation separate from Palmistry Path editorial policy.
- Calm, non-deterministic framing: no fixed destiny, guaranteed career event, exact age/timing, failure, danger, or relationship/financial prediction.

## Prohibited claims
- Do not generalize `break = career change` or `break = life change` as a tradition-wide or modern rule.
- Do not say `overlap = smooth transition`, `planned transition`, `managed transition`, `gradual transition`, or `beneficial transition` unless independently verified in another approved named source and logged at claim level. Cheiro's verified wording is narrower: change in surroundings and position.
- Do not claim `shifted restart = new field`, `multiple sections = multiple life chapters`, or a generic meaning for resumed sections unless separately verified.
- No event timing, age mapping, guaranteed job/career change, financial outcome, relationship outcome, danger, illness, death, trauma, or medical claim.
- No prevalence/rarity/population norms, anonymous authority, fixed geometry/gap-size cutoffs, or monotonic rules such as larger gap = larger change.
- No synthesized combinations with mounts, other major lines, endpoints, branches, forks, depth, islands, or other features unless that exact combination is independently verified.
- Do not infer that source silence means a claim is false or absent across palmistry traditions.

## Required SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`:
1. Run `npm run audit:claim-risk -- src/content/blog/beginner/broken-fate-line-meaning.md` and disposition every finding truthfully.
2. Build a claim-level evidence map for every retained historical/interpretive statement.
3. Confirm every Cheiro claim stays within `.ai-ops/evidence/PP-RELAY-048-cheiro-fate-line-break.md` unless additional approved evidence is independently verified and logged.
4. Search final prose for prevalence/consensus/anonymous-authority language and remove or named-source bound every instance.
5. Search for precision/degree rules, gap-size scaling, event timing, and stronger-with-degree extrapolation. Do not turn the task's exclusion of Cheiro's timing system into a claim that Cheiro's historical system supplied no timing, event, or outcome.
6. Search every statement about overlapping breaks, resumed lines, shifted continuations, and multiple sections; retain only specifically verified meanings.
7. Search for synthesis with mounts/other lines/features and remove it unless exact combination evidence is verified.
8. Verify every direct quotation verbatim; otherwise paraphrase.
9. Confirm observation, Cheiro's historical interpretation, and Palmistry Path editorial guidance are visibly distinct.
10. Compare the final article with `no-fate-line-meaning`, `forked-fate-line-meaning`, and the main Fate Line article to avoid duplication/cannibalization.

## Acceptance criteria
1. A useful beginner article remains at `src/content/blog/beginner/broken-fate-line-meaning.md` within the verified evidence boundary.
2. It clearly distinguishes a broken/interrupted Fate Line from an absent Fate Line and from a fork/branch, and its clean-break versus overlapping-break observation vocabulary is internally consistent.
3. Every interpretation/historical characterization is traceable to named approved evidence at claim level.
4. Cheiro's overlapping-break reading is not inflated into an unsupported smooth/planned transition rule.
5. No unsupported transition, multi-chapter, shifted-resumption, prevalence, consensus, precision, degree-scaling, timing, danger, or outcome claim remains.
6. Palmistry Path safety/editorial framing is identified as site policy rather than attributed to Cheiro; the omission of Cheiro's timing system is described as this article's bounded scope, not as a historical claim that Cheiro supplied no timing, event, or outcome.
7. Internal navigation and backlog bookkeeping are bounded and accurate.
8. Required SOURCE_SENSITIVE preflight and project validation pass.

## Validation
Run at minimum:
- `npm run audit:claim-risk -- src/content/blog/beginner/broken-fate-line-meaning.md`
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `git diff --check`

## Stop conditions
Return `HUMAN_REQUIRED` only if a useful article still genuinely requires material evidence unavailable under repository policy after using the Director evidence file. Return `BLOCKED` only for a technical blocker that cannot safely be repaired within scope. Return `PAUSED_USAGE_LIMIT` immediately if a usage/credit safeguard triggers.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-048-r3.json` on a pushed `claude/relay-PP-RELAY-048-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a truthful completed `source_preflight` object when content has been drafted/reviewed. For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.
