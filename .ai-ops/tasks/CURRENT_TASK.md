# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-042

## Revision
1

## Risk Class
SOURCE_SENSITIVE

## Objective
Perform a bounded source-integrity cleanup of the legacy Head Line pillar article before the next Head Line variation article ships. Remove or narrow unsupported prevalence/consensus, anonymous-authority, fixed-norm, and stronger-with-degree claims, and bring the article's direction/path wording inside the already Director-verified Benham evidence boundary.

## Why this task
PP-RELAY-041's cumulative review identified a separate legacy issue in `src/content/blog/beginner/head-line.md`: the pillar still contains unsupported monotonic direction claims and other prevalence/consensus wording that the newer Head Line companion articles were explicitly prohibited from using. The next approved backlog item is Broken Head Line Meaning, so correcting the pillar first reduces the chance that new source-sensitive work copies stale unsupported framing.

This is a cleanup task, not a rewrite of every Head Line interpretation in the article.

## Scope
Primary content scope:
- `src/content/blog/beginner/head-line.md`

Supporting scope:
- `docs/source-verification-log.md` for claim disposition;
- `docs/CHANGELOG.md` for the meaningful cleanup;
- `docs/editorial-backlog.md` only if a directly affected status/note needs correction;
- `.ai-ops/results/PP-RELAY-042-r1.json`.

Do not create the Broken Head Line article yet, rewrite the canonical Head Line lesson, modify claim-risk tooling, alter unrelated Head Line meanings, or broaden into other articles.

## Required cleanup categories
Review the complete final pillar for the following categories and correct every occurrence within this task's bounded scope:

1. **Prevalence / ranking / consensus.** Remove or narrow unsupported statements such as `typically`, `usually`, `most`, `generally the most positively read`, `consistent Western formulation`, `other writers confirm`, `contemporary writers`, `commonly`, `frequently`, or equivalent claims unless an independently verified approved repository source directly supports the frequency/consensus statement.
2. **Fixed norms / averages.** Do not define a normal, moderate, usual, central, average, or default Head Line position/gap/endpoint unless approved evidence establishes that norm. Purely observational comparative wording is acceptable.
3. **Monotonic degree extrapolation.** Remove or narrow rules equivalent to `the wider/longer/steeper X, the more/longer/stronger Y` unless that precise degree relationship is independently verified. In particular, the direction/path section must not say that a steeper slope automatically means more imagination/creativity.
4. **Direction/path evidence boundary.** Use `.ai-ops/evidence/PP-RELAY-041-benham-head-line-direction.md` as the controlling approved evidence for direction: straight-running Head Line -> Benham/practical mentality; sloping toward Luna -> Benham/imagination/departure from purely material thought. Historical writer/poet examples may be illustrations only. Do not add fixed-angle rules, prevalence, or degree scaling.
5. **Anonymous authority / unsupported modernization.** Remove or explicitly reframe anonymous authority such as `contemporary writers`, `modern palmists`, `popular palmistry`, or unattributed `tradition says` claims when used to establish a material interpretation or consensus. Palmistry Path editorial policy may be stated as site policy when that is what is actually intended.
6. **No replacement invention.** If a risky sentence lacks approved evidence, removal or neutral observation is preferable to inventing a new historical meaning, prevalence claim, modern consensus, or combination reading.

## Explicitly out of scope
This revision is not required to independently re-source every separate interpretation for start-point psychology, depth/clarity, forks, chains, breaks, islands, branches, double Head Line, timing, or cross-feature synthesis unless a sentence in those sections falls into one of the cleanup categories above. Record any separate material source concern discovered there for a later bounded task rather than silently expanding this one.

## Source boundary
- `.ai-ops/evidence/PP-RELAY-041-benham-head-line-direction.md` is approved evidence for the narrow straight/practical and sloping/imagination direction meanings.
- Existing canonical lesson/article prose is a navigation map, not automatic proof.
- Existing source-verification records may be used where they explicitly verify the exact retained claim/quotation.
- Copyright-era sources that remain unverified must not be treated as newly verified merely because they appear in a source footer.
- Keep direct observation, named historical interpretation, and Palmistry Path editorial guidance distinguishable.

## Required source-sensitive preflight
Before `READY_FOR_REVIEW`:
1. Run the targeted claim-risk audit on the final article and disposition every finding.
2. Manually inspect the complete article for equivalent wording the heuristic may miss, especially prevalence/ranking, anonymous authority, fixed norms, and stronger-with-degree relationships.
3. Verify every retained direction/path interpretation against the Director Benham evidence note.
4. Confirm no removed risky sentence was replaced by an equivalent unsupported synonym or new combination reading.
5. Record concise claim-by-claim disposition in `docs/source-verification-log.md` and the durable result.

A clean heuristic scan is not proof of source sufficiency.

## Acceptance criteria
1. The article remains useful as the Head Line pillar and existing navigation remains functional.
2. No unsupported prevalence/ranking/consensus statement remains in the scoped cleanup categories.
3. No unsupported fixed norm/default/average remains in the scoped cleanup categories.
4. No unsupported monotonic wider/longer/steeper -> stronger/more interpretation remains.
5. Direction/path wording stays inside the Director-verified Benham boundary and does not reintroduce the degree-scaling issue corrected in PP-RELAY-041.
6. Anonymous authority is removed, specifically attributed to verified evidence, or clearly reframed as Palmistry Path editorial policy.
7. No new palmistry meaning, scientific claim, medical/clinical claim, deterministic relationship claim, or combination reading is invented to replace removed prose.
8. Any material out-of-scope source concern discovered is logged for a future bounded task rather than expanded here.
9. SOURCE_SENSITIVE preflight is complete and truthful.
10. Required build/content/link/audit validation passes.

## Validation
Run at minimum:
- `npm run audit:claim-risk -- src/content/blog/beginner/head-line.md`
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `git diff --check`

## No-change / stop conditions
Return `NO_CHANGE` only if independent review demonstrates that none of the scoped risk categories actually remain on current `main` and the source-verification log records that disposition.

Return `HUMAN_REQUIRED` only if retaining a material scoped claim requires source evidence that cannot be safely obtained or removed/narrowed without a genuine editorial decision. Routine removal/narrowing of unsupported prevalence, norms, degree rules, or anonymous authority is not a human gate.

Return `BLOCKED` for a bounded technical blocker that prevents implementation/validation and cannot safely be repaired within scope.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-042-r1.json` on a pushed `claude/relay-PP-RELAY-042-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object covering claim-level source verification, unsupported prevalence/consensus, scientific/historical claims where encountered, combination readings, vague authority, quotation fidelity, precision/degree extrapolation, and observation-vs-interpretation framing.

For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.

## Revision history
- Revision 1: bounded cleanup of legacy Head Line pillar prevalence/consensus, fixed-norm, anonymous-authority, and monotonic degree-scaling language before the next Head Line variation article.