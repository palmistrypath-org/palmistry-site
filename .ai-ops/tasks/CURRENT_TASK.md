# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-034

## Revision
2

## Risk Class
SOURCE_SENSITIVE

## Objective
Complete the bounded empirical/anatomical cleanup in `src/content/lessons/advanced/01-minor-lines-overview.mdx` by removing or narrowing the two residual claims that still exceed approved repository evidence, while preserving the otherwise acceptable revision-1 corrections.

## Revision 2 note
Revision 1 correctly removed several unsupported claims, but independent Director review found two remaining evidence-boundary problems in the revised prose:
1. `part of why they appear, in some form, on essentially every hand` turns the verified fetal-development timing of the three principal flexion creases into an unsupported near-universal prevalence claim. The repository evidence establishes developmental timing, not that prevalence/legibility conclusion.
2. `the ordinary effects of aging` still implies an unsupported causal mechanism for the surface markings immediately described. Revision 1 was explicitly tasked to avoid unsupported aging/movement causation.

Also review the phrase `The fate line and the minor lines are less fixed in that way` so it does not imply an anatomical/developmental mechanism or comparative stability that is not directly supported by approved evidence. Preserve the practical distinction only if it can be framed as observation/editorial guidance without an unsupported empirical inference.

## Required remediation
1. Keep the supported statement that the heart, head, and life lines are the three principal palmar flexion creases and that repository-held Kimura & Kitagawa evidence places their formation during fetal development before spontaneous fetal hand movement.
2. Remove/narrow the `essentially every hand` prevalence inference unless a repository-held source directly supports that exact prevalence claim.
3. Remove/narrow the residual aging-causation wording. The practical point may simply state that fine surface markings can exist without being interpretive minor lines; do not assign an anatomical cause unless approved evidence supports it.
4. Ensure the fate-line/minor-line transition does not imply unsupported fetal-development anatomy, causal mechanism, or comparative physical stability. If necessary, separate the verified principal-crease statement from the site's observational statement that minor-line presence/clarity varies among hands.
5. Update the per-claim source-verification disposition so it accurately describes the final wording and does not claim evidence beyond what was verified.
6. Preserve all acceptable revision-1 changes and do not expand into adjacent named-source interpretations or new content.

## Allowed scope
- `src/content/lessons/advanced/01-minor-lines-overview.mdx`, only the opening/general-method wording directly necessary for this remediation.
- `docs/source-verification-log.md` for corrected dispositions.
- Canonical current-state/changelog/handoff docs only as directly necessary to keep the record accurate.
- Necessary Relay result/bookkeeping files.

## Out of scope
- No new palmistry meanings, combination readings, prevalence estimates, medical/scientific claims, or vague authority.
- No new Via Lascivia, Ring of Solomon, or other planned article work.
- No material rewrite of Sun, Mercury, relationship-line, Girdle, or other named-source interpretations.
- Do not wholesale replay or merge `feat/curriculum-wave-3e-3f`.

## Source-sensitive preflight — mandatory before READY_FOR_REVIEW
Explicitly verify/disposition:
- every empirical/anatomical/developmental/prevalence assertion retained or edited in the remediated passages;
- all prevalence/frequency/consensus wording in those passages;
- no unsupported causal wording about aging, movement, line formation, or stability;
- no invented combination reading or replacement interpretation;
- no vague anonymous authority;
- clear separation of direct observation/anatomy, historical interpretation, and Palmistry Path editorial guidance;
- quotation fidelity for any quotation retained or introduced;
- no medical, legal, financial, deterministic relationship, or predictive-science claim.

## Acceptance checks
- The final lesson no longer infers near-universal prevalence from the fetal-development source unless directly supported by repository-held evidence.
- The final lesson no longer implies aging or habitual movement causes the surface markings unless directly supported by repository-held evidence.
- Fate-line/minor-line wording does not imply unsupported anatomy/development or physical stability.
- The source-verification log accurately matches the final wording and evidence boundary.
- No new palmistry meaning or prevalence estimate is introduced.
- `npm run build`, `npm run content-audit`, `npm run audit:all`, `npm run audit:claim-risk -- src/content/lessons/advanced/01-minor-lines-overview.mdx`, and `git diff --check` all run; remaining heuristic findings are manually dispositioned.
- Final diff remains bounded to this remediation and directly necessary documentation/bookkeeping.

## v2C durable-result contract
For every terminal outcome after startup gate, create `.ai-ops/results/PP-RELAY-034-r2.json` on a pushed `claude/relay-PP-RELAY-034-...` branch. Allowed terminal results are `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, and `PAUSED_USAGE_LIMIT`. A non-change terminal outcome does not require a dummy PR. The result must include `task_id`, `revision`, `risk_class: SOURCE_SENSITIVE`, terminal `result`, verification performed, changed paths, tests/checks, blocker/gate details when applicable, and a completed `source_preflight` object for a changed source-sensitive result.

## PR contract
If changed work is `READY_FOR_REVIEW`, continue using exactly one Relay PR targeting `main` for this task with footers updated to:

RELAY_TASK_ID: PP-RELAY-034
RELAY_TASK_REVISION: 2
RELAY_RESULT: READY_FOR_REVIEW
