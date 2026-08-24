# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-048

## Revision
1

## Risk Class
SOURCE_SENSITIVE

## Objective
Produce the approved Next 25 companion article **Broken Fate Line Meaning in Palmistry** (`broken-fate-line-meaning`) as a narrowly source-bounded beginner article. The existing Fate Line lesson and pillar are maps to candidate claims, not automatic evidence. Every retained interpretation of a break, overlapping break, resumed line, shifted continuation, or multi-section Fate Line must be independently grounded in named approved evidence or omitted/narrowed.

## Why this task now
PP-RELAY-047 shipped the preceding Next 25 item (`forked-fate-line-meaning`). The editorial backlog identifies Broken Fate Line as item 19, explicitly differentiated from `no-fate-line-meaning`: absence is not the same observable feature as interruption. Continue the approved variation-article sequence without duplicating shipped work.

## Scope
Primary when evidence supports a useful article:
- `src/content/blog/beginner/broken-fate-line-meaning.md`

Supporting only as directly necessary:
- one or two reciprocal navigation links from existing Fate Line content
- `docs/editorial-backlog.md` published count/status after the article is actually added
- `docs/source-verification-log.md`
- `docs/CHANGELOG.md`
- `.ai-ops/results/PP-RELAY-048-r1.json`

Do not rewrite the canonical Fate Line lesson/pillar in this task. If source review exposes separate legacy defects there, record them for a later bounded cleanup rather than expanding scope.

## Source/evidence rule
The current Fate Line lesson contains candidate prose about breaks, overlapping transitions, shifted resumptions, and multiple sections. Do **not** treat that prose as verified merely because it is already published. Independently verify each interpretation retained in the new article against approved repository-held sources/source-verification records. If public-domain primary evidence is accessible, prefer named Cheiro/Benham evidence. Copyright-era Gettings/West/Fincham claims may be retained only when already verified under repository policy; do not invent verification.

If evidence supports only a narrower article than the backlog wording suggests, publish the narrower evidence-grounded article. If a useful article genuinely cannot be supported without unavailable evidence, return `HUMAN_REQUIRED` rather than guessing.

## Article intent and differentiation
- Primary query: `broken fate line meaning` / `break in fate line palmistry`.
- Beginner-readable companion to the main Fate Line pillar.
- Open by distinguishing **absence** (no Fate Line) from **interruption** (a visible line stops/gaps and may resume), so it does not cannibalize `no-fate-line-meaning`.
- Observation first: describe exactly what counts as a gap/interruption before interpretation.
- Keep named historical interpretation separate from Palmistry Path editorial policy.
- Calm, non-deterministic framing: no fixed destiny, guaranteed career event, exact age/timing, failure, danger, or relationship/financial prediction.

## Prohibited claims
- No generic `break = career change`, `break = life change`, `overlap = smooth transition`, `shifted restart = new field`, or `multiple sections = multiple life chapters` unless that specific claim is independently verified in a named approved source and logged at claim level.
- No event timing, age mapping, guaranteed job/career change, financial outcome, relationship outcome, danger, illness, death, trauma, or medical claim.
- No prevalence/rarity/population norms, `many people`, `commonly`, `usually`, `typical`, `rare`, `normal`, or equivalent without direct evidence.
- No anonymous authority (`the tradition says`, `modern palmists`, `classical sources agree`, `readers generally`, etc.) unless specifically bounded to verified named sources.
- No fixed geometry/gap-size cutoffs or monotonic rules such as larger gap = larger change.
- No synthesized combinations with mounts, head/heart/life lines, endpoints, branches, forks, depth, islands, or other features unless that exact combination is independently verified.
- Do not infer that a source's silence means a claim is false or absent across the tradition.

## Required SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`:
1. Run `npm run audit:claim-risk -- src/content/blog/beginner/broken-fate-line-meaning.md` and disposition every finding truthfully.
2. Build a claim-level evidence map for every retained historical/interpretive statement. Existing lesson/pillar prose is not evidence by itself.
3. Search final prose for prevalence/consensus/anonymous-authority language and remove or named-source bound every instance.
4. Search for precision/degree rules, gap-size scaling, event timing, and stronger-with-degree extrapolation.
5. Search every statement about overlapping breaks, resumed lines, shifted continuations, and multiple sections; retain only what is specifically verified.
6. Search for any synthesis with mounts/other lines/features and remove it unless exact combination evidence is verified.
7. Verify every direct quotation verbatim; otherwise paraphrase.
8. Confirm observation, named historical interpretation, and Palmistry Path editorial guidance are visibly distinct.
9. Explicitly compare the final article with `no-fate-line-meaning` and the main Fate Line article to avoid duplication/cannibalization.

## Acceptance criteria
1. A useful beginner article is added at `src/content/blog/beginner/broken-fate-line-meaning.md` only if the retained meanings are source-grounded.
2. It clearly distinguishes a broken/interrupted Fate Line from an absent Fate Line and from a fork/branch as observation vocabulary.
3. Every interpretation/historical characterization is traceable to named approved evidence at claim level.
4. No unsupported transition, career-change, multi-chapter, shifted-resumption, prevalence, consensus, precision, degree-scaling, timing, danger, or outcome claim remains.
5. Palmistry Path safety/editorial framing is identified as site policy rather than attributed to historical sources.
6. Internal navigation and backlog bookkeeping are bounded and accurate.
7. The required SOURCE_SENSITIVE preflight and project validation pass.
8. If the evidence is insufficient for a useful article, return `HUMAN_REQUIRED` rather than creating speculative filler.

## Validation
Run at minimum:
- `npm run audit:claim-risk -- src/content/blog/beginner/broken-fate-line-meaning.md`
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `git diff --check`

## Stop conditions
Return `HUMAN_REQUIRED` only if a useful article genuinely requires material evidence unavailable under repository policy. Return `BLOCKED` only for a technical blocker that cannot safely be repaired within scope. Return `PAUSED_USAGE_LIMIT` immediately if a usage/credit safeguard triggers.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-048-r1.json` on a pushed `claude/relay-PP-RELAY-048-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a truthful completed `source_preflight` object when content has been drafted/reviewed. For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.