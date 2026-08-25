# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-049

## Revision
1

## Risk Class
SOURCE_SENSITIVE

## Objective
Correct the two legacy Fate Line break passages that PP-RELAY-048 documented as exceeding the Director-verified Cheiro evidence boundary. Keep the cleanup narrow: remove unsupported smooth/planned/sharp-transition and multiple-life-chapters readings while preserving an accurate named historical account and the distinction between an absent Fate Line and a broken one.

## Why this task now
PP-RELAY-048 revision 3 merged through PR #87 and published `broken-fate-line-meaning.md`. Its completed source preflight identified two pre-existing defects in `fate-line.md` and `no-fate-line-meaning.md` that were outside that article task's scope. The defects now have a safe, bounded remedy using existing repository evidence, so they should be corrected before the Relay selects another new source-heavy article.

## Scope
Primary:
- `src/content/blog/beginner/fate-line.md`
- `src/content/blog/beginner/no-fate-line-meaning.md`

Supporting only as directly necessary:
- `docs/source-verification-log.md`
- `docs/CHANGELOG.md`
- `.ai-ops/results/PP-RELAY-049-r1.json`

Do not rewrite either article beyond the break/fragmentation passages and directly equivalent FAQ wording. Do not modify `broken-fate-line-meaning.md` unless a concrete link defect prevents this cleanup from validating; if so, return `BLOCKED` with the exact cause rather than broadening scope silently.

## Controlling evidence
Read `.ai-ops/evidence/PP-RELAY-048-cheiro-fate-line-break.md` and the PP-RELAY-048 revision-3 entry in `docs/source-verification-log.md` before editing. Those repository files are the complete evidence boundary for this task.

Verified boundary:
- Cheiro historically associates a Fate Line broken or made up of small pieces with troubles/breaks in the career and lack of settled or continuous success.
- For an overlapping break—one segment beginning before the other ends—Cheiro historically associates the configuration with a complete change in surroundings and position.
- Cheiro adds an advancement-in-position reading only when the new segment is good and straight.

Keep these as Cheiro's named historical claims, not empirical facts, tradition-wide consensus, or Palmistry Path predictions.

## Required corrections
1. In `fate-line.md`, revise the `Breaks and interruptions` subsection and its matching FAQ answer so they no longer claim or imply that:
   - any break generally means a significant vocational/purposive change;
   - an overlapping break is planned, smooth, gradual, managed, or softened;
   - a clean break means a sharper shift; or
   - neither form implies crisis as though that negative outcome claim were sourced.
2. Preserve the useful observational distinction between a clean break and an overlapping break. A clean break may be described as a gap along the line's course, but no separate interpretation for it is verified here.
3. Where the pillar retains historical interpretation, attribute it to Cheiro by name and keep it inside the controlling evidence. The conditional good-and-straight advancement reading may be omitted; if retained, its condition must stay attached.
4. In `no-fate-line-meaning.md`, revise the `Broken or fragmented fate line` paragraph so it no longer claims unattributed significant changes of direction, varied direction, or “multiple chapters rather than one thread.” Preserve the observational distinction from absence and direct the reader naturally to `broken-fate-line-meaning.md` for the verified treatment.
5. Keep Palmistry Path policy visibly separate from Cheiro's historical reading. This task does not teach timing and does not predict or guarantee any event or outcome, but it must not claim that Cheiro's own historical system contained no timing, event, or outcome.

## Prohibited claims
- No `overlap = smooth/planned/managed/gradual/beneficial transition` rule.
- No `clean break = sharper/sudden/crisis transition` rule.
- No generic `break = career change` or `break = life change` rule.
- No `fragmented line = multiple chapters`, varied careers, multiple callings, or equivalent synthesis.
- No gap-size scale, timing/age mapping, fixed event, guaranteed career/financial/relationship outcome, danger, illness, death, trauma, or medical claim.
- No prevalence/rarity/consensus language or anonymous authority.
- No combinations with mounts, endpoints, branches, forks, depth, islands, or other lines.
- Do not infer that source silence means a claim is false or absent across palmistry traditions.
- Do not sanitize Cheiro's actual predictive/historical wording. Accurately attribute it, then state Palmistry Path policy separately where needed.

## Required SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`:
1. Run `npm run audit:claim-risk -- src/content/blog/beginner/fate-line.md src/content/blog/beginner/no-fate-line-meaning.md` and disposition every finding truthfully, including pre-existing findings in the changed files.
2. Build a claim-level evidence map for every break/fragmentation interpretation retained or introduced by this diff.
3. Confirm every retained Cheiro claim stays within `.ai-ops/evidence/PP-RELAY-048-cheiro-fate-line-break.md`.
4. Search both final files for `planned|smooth|gradual|managed|softened|sharp|multiple chapters|significant change|varied direction` and remove or narrowly disposition every occurrence in the break/fragmentation context.
5. Search final changed prose for prevalence, consensus, frequency, anonymous authority, timing, event, outcome, and stronger-with-degree claims.
6. Search for synthesis with mounts, other lines, endpoints, branches, forks, depth, islands, and gap size; remove it unless the exact combination is independently supported within the controlling evidence (none currently is).
7. Verify every direct quotation verbatim; otherwise paraphrase.
8. Confirm direct observation, Cheiro's historical interpretation, and Palmistry Path editorial policy remain distinguishable.
9. Compare the corrected passages with `broken-fate-line-meaning.md` so the canonical article, pillar, and absence companion do not contradict one another.

## Acceptance criteria
1. Both documented legacy defects are removed without a broad rewrite of either article.
2. The pillar's break subsection and FAQ use internally consistent clean-break versus overlapping-break observation vocabulary and contain no unsupported interpretation for a clean break.
3. The absence companion keeps broken/fragmented Fate Lines distinct from absence without the unsupported “multiple chapters” or generic direction-change reading.
4. Every retained historical break interpretation is attributed to Cheiro and traceable to the controlling evidence at claim level.
5. No unsupported smooth/planned/sharp transition, generic career/life-change, multi-chapter, prevalence, precision, timing, danger, or outcome claim remains in the changed passages.
6. Internal navigation to `broken-fate-line-meaning.md` is natural, accurate, and non-duplicative.
7. Required SOURCE_SENSITIVE preflight and project validation pass.

## Validation
Run at minimum:
- `npm run audit:claim-risk -- src/content/blog/beginner/fate-line.md src/content/blog/beginner/no-fate-line-meaning.md`
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `git diff --check`

## Stop conditions
Return `HUMAN_REQUIRED` only if correcting the documented claims genuinely requires material evidence unavailable under repository policy. Return `BLOCKED` only for a technical blocker that cannot safely be repaired within this scope. Return `PAUSED_USAGE_LIMIT` immediately if a usage/credit safeguard triggers.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-049-r1.json` on a pushed `claude/relay-PP-RELAY-049-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a truthful completed `source_preflight` object when content has been reviewed or changed. For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.
