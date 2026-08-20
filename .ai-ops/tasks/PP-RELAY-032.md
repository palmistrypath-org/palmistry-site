# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-032

## Revision
1

## Risk Class
SOURCE_SENSITIVE

## Objective
Resolve the documented unsupported Benham attribution in the general minor-lines introduction of `src/content/lessons/advanced/01-minor-lines-overview.mdx`: the claim that Benham said absence of minor lines on an otherwise well-formed hand should not be read as a deficiency.

## Why this task
PP-RELAY-031 independently identified and durably recorded this adjacent defect but correctly left it outside that task's Sun/Mercury scope. The repository source-verification log already establishes twice that Benham does not read line absence in the relevant Sun/Mercury source checks, and earlier corrections removed the same reassurance where it had been credited to him. This is therefore a bounded source-integrity correction with repository-held evidence, not a request for a new palmistry interpretation.

## Required evidence-first workflow
1. Inspect the current general minor-lines introduction, the PP-RELAY-031 result/PR evidence, and the directly relevant entries in `docs/source-verification-log.md`.
2. Determine whether the Benham attribution is directly supported by approved repository-held evidence. Do not infer support from silence or from unrelated Benham passages.
3. If unsupported as the durable evidence indicates, remove the attribution and either retain only source-safe Palmistry Path observational/editorial guidance or remove the sentence entirely. Do not invent a replacement historical meaning.
4. Check the immediately surrounding paragraph for any directly equivalent unsupported attribution, prevalence, or consensus wording that would make the bounded correction internally inconsistent.
5. Preserve historical records as historical records; update only current status/handoff/changelog/source-verification records directly necessary to record the correction.

## Allowed scope
- `src/content/lessons/advanced/01-minor-lines-overview.mdx`, limited to the general `Why some hands don't have them` / absence-of-minor-lines passage and directly necessary local transition wording.
- `docs/source-verification-log.md` for the concise disposition of this attribution.
- Canonical current-state/changelog/handoff docs only as directly necessary.
- Necessary Relay result/bookkeeping files.

## Out of scope
- Do not reopen the Sun/Mercury corrections accepted in PP-RELAY-031 except to avoid a direct contradiction caused by this bounded edit.
- Do not rewrite other minor-line sections, create new meanings, add combination readings, change SEO strategy, routing, design, dependencies, monetization, or unrelated curriculum.
- Do not wholesale merge/rebase/copy the stale `feat/curriculum-wave-3e-3f` branch.
- Do not replace the unsupported Benham attribution with vague anonymous authority such as `modern palmists`, `some writers`, `experts`, or equivalent.
- Do not introduce unsupported prevalence/frequency language such as `most`, `many`, `often`, `commonly`, `typically`, `generally`, `rare`, or equivalents.

## Source-sensitive preflight — mandatory before READY_FOR_REVIEW
Explicitly verify/disposition:
- the Benham absence-of-minor-lines attribution against approved evidence;
- every named-source claim changed or retained in the focused passage;
- prevalence/consensus/frequency wording in the focused passage;
- no invented replacement interpretation or synthetic combination reading;
- no vague anonymous authority;
- clear separation of observation, historical interpretation, and Palmistry Path editorial guidance;
- no medical, legal, financial, deterministic relationship, or predictive-science claim.
Run `npm run audit:claim-risk -- src/content/lessons/advanced/01-minor-lines-overview.mdx` when supported and manually disposition findings relevant to the focused passage. A clean heuristic scan is not proof of sourcing.

## Acceptance checks
- The unsupported Benham attribution is no longer presented as historical fact unless direct approved evidence establishing it is produced and recorded.
- The focused passage remains useful without inventing a new traditional meaning; neutral observational/editorial guidance is acceptable.
- No directly equivalent unsupported anonymous-authority, prevalence, consensus, scientific/historical, or combination-reading claim remains in the focused passage.
- `docs/source-verification-log.md` records the disposition compactly enough for later audit.
- `npm run build`, `npm run content-audit`, `npm run audit:all`, targeted claim-risk audit, and `git diff --check` pass, subject to the documented claim-risk command semantics for manually dispositioned findings.
- Final diff remains bounded to this source-integrity correction.

## v2C durable-result contract
For every terminal outcome after startup gate, create `.ai-ops/results/PP-RELAY-032-r1.json` on a pushed `claude/relay-PP-RELAY-032-...` branch. Allowed terminal results are `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, and `PAUSED_USAGE_LIMIT`. A non-change terminal outcome does not require a dummy PR. The result must include `task_id`, `revision`, `risk_class: SOURCE_SENSITIVE`, terminal `result`, verification performed, changed paths, tests/checks, blocker/gate details when applicable, and a completed `source_preflight` object for a changed source-sensitive result.

## PR contract
If changed work is `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with footers:

RELAY_TASK_ID: PP-RELAY-032
RELAY_TASK_REVISION: 1
RELAY_RESULT: READY_FOR_REVIEW
