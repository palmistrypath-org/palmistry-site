# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-042

## Revision
4

## Risk Class
SOURCE_SENSITIVE

## Objective
Complete the bounded source-integrity cleanup of the legacy Head Line pillar. Revision 3 correctly removed the Director-identified population/comparative-prevalence statements, but cumulative review found two residual anonymous-authority/consensus overstatements inside the same authorized cleanup category.

## Revision 4 remediation
Preserve all sound revision-1, revision-2, and revision-3 corrections. Make only the following cumulative source-boundary corrections in `src/content/blog/beginner/head-line.md`, plus directly necessary verification/log/result updates:

1. Writer's-fork naming sentence: do not generalize from Cheiro + Benham to all `classical texts`. The current wording says the label is `a later popular-palmistry term rather than one from the classical texts — neither Cheiro nor Benham uses it`. Narrow this to the actually verified evidence, e.g. state only that neither Cheiro nor Benham uses the label, unless approved repository evidence establishes the broader chronology/classical-text claim.
2. Intelligence/IQ FAQ + myth wording: `The tradition says nothing about cognitive ability` / `The tradition says nothing about IQ or cognitive ability` is an unsupported tradition-wide consensus statement. Preserve the intended safety point without claiming exhaustive historical consensus. State Palmistry Path's bounded interpretation directly (length is not treated here as a measure of intelligence/IQ/cognitive ability), or use a specifically verified named source if available.

Also re-read the final article once for directly equivalent anonymous-authority/consensus wording introduced or retained in these same two passages. Do not broaden into re-sourcing every separate Head Line meaning or into unrelated legacy claims.

## Scope
Primary:
- `src/content/blog/beginner/head-line.md`

Supporting only as directly necessary:
- `docs/source-verification-log.md`
- `docs/CHANGELOG.md`
- `.ai-ops/results/PP-RELAY-042-r4.json`

Do not create the Broken Head Line article, rewrite the canonical lesson, modify claim-risk tooling, or broaden into unrelated articles.

## Controlling evidence and boundaries
- `.ai-ops/evidence/PP-RELAY-041-benham-head-line-direction.md` remains controlling for direction/path wording.
- Existing article/lesson prose is a navigation map, not automatic proof.
- Existing source-verification records support only claims they explicitly verify.
- Two named authors not using a term does not establish that no classical text used it.
- Do not invent prevalence, consensus, chronology, population norms, fixed cutoffs, stronger-with-degree rules, scientific claims, medical/clinical claims, or combination readings.
- Keep observation, named historical interpretation, and Palmistry Path editorial policy distinguishable.

## Required SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`:
1. Run `npm run audit:claim-risk -- src/content/blog/beginner/head-line.md`.
2. Manually inspect the complete final article, with special attention to the two revision-4 passages and directly equivalent anonymous-authority/consensus wording.
3. Confirm all revision-1 through revision-3 corrections remain intact.
4. Confirm the writer's-fork naming statement does not generalize beyond the verified Cheiro/Benham evidence.
5. Confirm the intelligence/IQ safety statement is framed as Palmistry Path's interpretation/safety boundary rather than a claim about everything `the tradition` says.
6. Confirm no risky phrase was replaced by an equivalent unsupported synonym.
7. Record concise dispositions in `docs/source-verification-log.md` and the durable result.

## Acceptance criteria
1. All sound revision-1 through revision-3 corrections remain intact.
2. No unsupported population, comparative-prevalence, ranking, consensus, or anonymous-authority statement remains in the scoped cleanup passages.
3. Writer's-fork naming is limited to what the verified evidence establishes; no unsupported `classical texts` chronology/generalization remains.
4. Intelligence/IQ safety wording does not make an exhaustive tradition-wide consensus claim.
5. No unsupported fixed norm/default/average or monotonic degree rule is introduced or restored.
6. Direction/path wording remains inside the Director-verified Benham boundary.
7. No new palmistry meaning, prevalence claim, scientific/medical claim, deterministic relationship claim, or combination reading is invented.
8. SOURCE_SENSITIVE preflight is complete and truthful.
9. Required validation passes.

## Validation
Run at minimum:
- `npm run audit:claim-risk -- src/content/blog/beginner/head-line.md`
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `git diff --check`

## Stop conditions
Return `HUMAN_REQUIRED` only if a material scoped claim cannot be safely removed/narrowed and retaining it requires unavailable evidence or genuine editorial judgment. Routine removal/narrowing is not a human gate.

Return `BLOCKED` only for a bounded technical blocker that prevents implementation/validation and cannot safely be repaired within scope.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-042-r4.json` on a pushed `claude/relay-PP-RELAY-042-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object covering claim-level source verification, unsupported prevalence/consensus, scientific/historical claims where encountered, combination readings, vague authority, quotation fidelity, precision/degree extrapolation, comparative-prevalence wording, and observation-vs-interpretation framing.

For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.

## Revision history
- Revision 1: bounded cleanup of legacy Head Line pillar prevalence/consensus, fixed-norm, anonymous-authority, and monotonic degree-scaling language before the next Head Line variation article.
- Revision 2: cumulative Director review found residual unsupported prevalence/consensus and anonymous-authority language; required complete disposition/removal/narrowing while preserving sound revision-1 edits.
- Revision 3: cumulative Director review found residual unsupported population/comparative-prevalence claims (`many...`, `more common...`) that the worker incorrectly treated as heuristic false positives or outside scope; required removal/neutralization without changing established meanings.
- Revision 4: cumulative Director review found two residual anonymous-authority/consensus overstatements: generalizing Cheiro/Benham non-use to all `classical texts`, and asserting that `the tradition says nothing` about IQ/cognitive ability. Narrow both to the actually verified evidence/editorial boundary.