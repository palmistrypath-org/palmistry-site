# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-033

## Revision
1

## Risk Class
SOURCE_SENSITIVE

## Objective
Audit and resolve the remaining claim-risk findings in `src/content/lessons/advanced/01-minor-lines-overview.mdx` so the published minor-lines overview no longer carries unsupported prevalence/consensus, anonymous-authority, or empirical/anatomical overstatement that can be corrected from approved repository evidence without inventing new palmistry meanings.

## Why this task
PP-RELAY-031 and PP-RELAY-032 corrected focused Sun/Mercury and Benham-attribution defects in this lesson, but the targeted claim-risk audit still reports findings elsewhere in the file. Before expanding the minor-lines search-content cluster, it is higher value to finish the source-integrity cleanup of the canonical lesson that future articles will link back to. This task is a bounded current-content audit, not authorization to add new interpretations.

## Required evidence-first workflow
1. Run `npm run audit:claim-risk -- src/content/lessons/advanced/01-minor-lines-overview.mdx` and inventory every current finding with file/line and category.
2. For each finding, inspect the immediately relevant approved repository evidence: current source-verification records, source-reviewed companion articles/lessons, and editorial policy. Do not assume flagged wording is wrong merely because the heuristic found it; disposition each finding individually.
3. Correct only findings that are unsupported, overstated, or vaguely attributed. Prefer narrowing/removal or explicit Palmistry Path editorial framing over inventing a source or new traditional meaning.
4. Preserve supported named-source distinctions and established curriculum meanings when evidence is adequate.
5. Where an assertion is anatomical/empirical rather than traditional palmistry interpretation, require repository-held evidence appropriate to that assertion; otherwise narrow/remove it.
6. Re-run the claim-risk audit and manually disposition any findings that remain. A nonzero finding count is acceptable only when each retained finding is directly supported and documented.

## Allowed scope
- `src/content/lessons/advanced/01-minor-lines-overview.mdx`, limited to resolving current claim-risk findings and directly necessary local transitions.
- `docs/source-verification-log.md` for concise dispositions when source claims are changed or specifically verified.
- Canonical current-state/changelog/handoff docs only as directly necessary to record the completed audit.
- Necessary Relay result/bookkeeping files.

## Out of scope
- Do not add new minor-line topics, new combination readings, new prevalence estimates, medical interpretations, or materially expand curriculum scope.
- Do not create the Via Lascivia, Ring of Solomon, or other planned articles in this task.
- Do not rewrite supported Sun/Mercury corrections from PP-RELAY-031 or the absence-of-minor-lines correction from PP-RELAY-032 except if a current claim-risk finding exposes a direct contradiction.
- Do not wholesale replay or merge the stale `feat/curriculum-wave-3e-3f` branch.
- Do not replace unsupported wording with vague authority such as `modern palmists`, `some writers`, `experts`, `contemporary practice`, or equivalents unless an identifiable approved source directly supports the statement.

## Source-sensitive preflight — mandatory before READY_FOR_REVIEW
Explicitly verify/disposition:
- every claim-risk finding present at task start;
- all prevalence/frequency/consensus wording in each edited passage;
- every scientific/anatomical/historical assertion edited or retained in those passages;
- every named-source attribution edited or relied upon;
- no invented combination reading or replacement interpretation;
- no vague anonymous authority;
- clear separation of observation/anatomy, historical interpretation, and Palmistry Path editorial guidance;
- quotation fidelity for any quotation retained or introduced;
- no medical, legal, financial, deterministic relationship, or predictive-science claim.

## Acceptance checks
- Every starting claim-risk finding has a documented disposition: corrected, narrowed/removed, or retained with direct approved evidence.
- No unsupported prevalence/consensus, anonymous-authority, scientific/anatomical, historical, or combination-reading claim remains in the passages touched by this task.
- The lesson remains pedagogically coherent and does not gain new palmistry meanings merely to replace removed wording.
- `docs/source-verification-log.md` records materially relevant source dispositions compactly when needed.
- `npm run build`, `npm run content-audit`, `npm run audit:all`, `npm run audit:claim-risk -- src/content/lessons/advanced/01-minor-lines-overview.mdx`, and `git diff --check` are run; remaining heuristic findings, if any, are manually dispositioned in the durable result.
- Final diff remains bounded to this audit and directly necessary documentation/bookkeeping.

## v2C durable-result contract
For every terminal outcome after startup gate, create `.ai-ops/results/PP-RELAY-033-r1.json` on a pushed `claude/relay-PP-RELAY-033-...` branch. Allowed terminal results are `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, and `PAUSED_USAGE_LIMIT`. A non-change terminal outcome does not require a dummy PR. The result must include `task_id`, `revision`, `risk_class: SOURCE_SENSITIVE`, terminal `result`, starting and ending claim-risk findings/dispositions, verification performed, changed paths, tests/checks, blocker/gate details when applicable, and a completed `source_preflight` object for a changed source-sensitive result.

## PR contract
If changed work is `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with footers:

RELAY_TASK_ID: PP-RELAY-033
RELAY_TASK_REVISION: 1
RELAY_RESULT: READY_FOR_REVIEW
