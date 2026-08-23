# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-042

## Revision
5

## Risk Class
SOURCE_SENSITIVE

## Objective
Complete the bounded source-integrity cleanup of the legacy Head Line pillar. Revision 4 fixed the two Director-identified statements but cumulative review found directly equivalent anonymous-authority/naming claims still retained in the same writer's-fork passage.

## Revision 5 remediation
Preserve all sound revision-1 through revision-4 corrections. Make only these cumulative corrections in `src/content/blog/beginner/head-line.md`, plus directly necessary verification/log/result updates:

1. In the writer's-fork passage, the revision-4 wording still says the fork is `a specific feature in Western palmistry` and, after noting neither Cheiro nor Benham uses the label, asserts `it is known instead as the "writer's fork," and sometimes the "lawyer's fork."` These are still broad anonymous-authority/naming claims without approved evidence. Remove or narrow them to what is actually verified. Do not imply that Cheiro/Benham used either modern label, and do not introduce a replacement prevalence/consensus/chronology claim.
2. Re-read that complete writer's-fork subsection for directly equivalent anonymous-authority, prevalence, consensus, naming-history, or chronology language. Remove/narrow any equivalent wording rather than substituting a synonym.
3. Preserve the revision-4 IQ/cognitive-ability editorial framing and all sound prior cleanup.

## Scope
Primary:
- `src/content/blog/beginner/head-line.md`

Supporting only as directly necessary:
- `docs/source-verification-log.md`
- `docs/CHANGELOG.md`
- `.ai-ops/results/PP-RELAY-042-r5.json`

Do not create another article, rewrite the canonical lesson, modify claim-risk tooling, or broaden into unrelated legacy claims.

## Controlling evidence and boundaries
- `.ai-ops/evidence/PP-RELAY-041-benham-head-line-direction.md` remains controlling for direction/path wording.
- Existing article/lesson prose is a navigation map, not automatic proof.
- Existing source-verification records support only claims they explicitly verify.
- Cheiro/Benham non-use of a label does not prove who does use it, how common it is, when it arose, or that another label is an established synonym.
- Do not invent prevalence, consensus, chronology, naming history, population norms, fixed cutoffs, stronger-with-degree rules, scientific claims, medical/clinical claims, or combination readings.
- Keep observation, named historical interpretation, and Palmistry Path editorial policy distinguishable.

## Required SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`:
1. Run `npm run audit:claim-risk -- src/content/blog/beginner/head-line.md`.
2. Manually inspect the complete final writer's-fork subsection and the revision-4 IQ passages.
3. Confirm all sound revision-1 through revision-4 corrections remain intact.
4. Confirm no statement generalizes beyond verified Cheiro/Benham evidence about naming/non-use.
5. Confirm no risky phrase was replaced by an equivalent unsupported synonym.
6. Record concise dispositions in `docs/source-verification-log.md` and the durable result.

## Acceptance criteria
1. All sound revision-1 through revision-4 corrections remain intact.
2. No unsupported population, comparative-prevalence, ranking, consensus, anonymous-authority, naming-history, or chronology statement remains in the scoped writer's-fork passage.
3. Any mention of Cheiro/Benham label usage is limited to what verified evidence establishes.
4. IQ safety wording remains Palmistry Path editorial framing, not tradition-wide consensus.
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
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-042-r5.json` on a pushed `claude/relay-PP-RELAY-042-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object covering claim-level source verification, unsupported prevalence/consensus, scientific/historical claims where encountered, combination readings, vague authority, quotation fidelity, precision/degree extrapolation, comparative-prevalence wording, naming/chronology claims, and observation-vs-interpretation framing.

For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.

## Revision history
- Revision 1: bounded cleanup of legacy Head Line pillar prevalence/consensus, fixed-norm, anonymous-authority, and monotonic degree-scaling language.
- Revision 2: removed residual unsupported prevalence/consensus and anonymous-authority language.
- Revision 3: removed residual population/comparative-prevalence claims.
- Revision 4: narrowed unsupported classical-text chronology and tradition-wide IQ consensus claims.
- Revision 5: cumulative review found equivalent unsupported anonymous-authority/naming claims still retained in the writer's-fork subsection; require evidence-bounded removal/narrowing without changing established meanings.