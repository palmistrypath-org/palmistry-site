# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-028

## Revision
1

## Risk Class
STANDARD

## Objective
Add a bounded, mechanically testable source-claim risk audit that helps SOURCE_SENSITIVE Relay work catch risky wording before Director review, targeting the avoidable claim patterns observed in PP-RELAY-024 without replacing human/source judgment.

## Why this task
PP-RELAY-024 required six rework revisions, mostly for unsupported scientific/historical overstatement and anonymous prevalence/consensus wording that survived the worker's manual source preflight. v2C's goal is decreasing avoidable rework without weakening safeguards. A small heuristic audit can surface those phrases earlier while leaving the Director and approved repository evidence as the final authority.

## Allowed scope
- Inspect existing content/audit tooling and package scripts before choosing the smallest maintainable implementation.
- Add or extend a script that can scan source-sensitive changed MD/MDX prose (or explicitly supplied files) for high-risk claim language such as unsupported frequency/consensus terms, anonymous authority phrases, strong empirical-disproof verbs, or equivalent patterns identified in `.ai-ops/V2C_PILOT.md`.
- The audit must report file + line/context and the matched risk category clearly enough for a worker to review the claim against approved evidence.
- Treat findings as review prompts, not proof that wording is wrong. Do not auto-rewrite prose and do not pretend regex/heuristics establish source validity.
- Prefer opt-in/targeted use for SOURCE_SENSITIVE work rather than making all existing historical content fail immediately from legacy wording.
- Add deterministic fixtures/tests or a controlled temporary test demonstrating at least: (a) risky prevalence/anonymous-authority wording is flagged, (b) strong unsupported empirical-overstatement wording is flagged, and (c) neutral observational/editorial phrasing does not trigger the same finding.
- Wire the tool into a clear npm command or documented Relay worker invocation so future SOURCE_SENSITIVE packets can require it.
- Update only narrowly relevant `.ai-ops`/canonical docs needed to document the new safeguard.
- Necessary Relay result/bookkeeping files may be changed.

## Out of scope
- Do not rewrite palmistry articles or lessons as part of this tooling task.
- Do not modify the proven dispatch, auto-merge, fast-lane, credit-guard, or one-worker-task control logic.
- Do not turn heuristic matches into hard source truth or automatically approve/reject content based solely on wording.
- No external source acquisition, SEO strategy changes, dependencies unless objectively necessary, broad audit refactor, deployment, or monetization changes.

## Acceptance checks
- A repeatable command exists for targeted claim-risk scanning of one or more source-sensitive content files.
- Output identifies the affected file/location and useful risk category/pattern.
- Controlled tests prove risky prevalence/anonymous-authority and empirical-overstatement examples are detected.
- Controlled tests prove at least one neutral/acceptable example is not falsely reported by those same patterns.
- Existing project audits/build remain passing after implementation; run the cheapest relevant checks plus `npm run build` and `npm run audit:all` if the implementation touches shared audit tooling.
- Documentation makes explicit that this is a preflight aid and does not replace approved-source verification or Director review.
- No palmistry prose or Relay dispatch/merge behavior changes.

## v2C durable-result contract
For every terminal outcome after startup gate, create `.ai-ops/results/PP-RELAY-028-r1.json` on a pushed `claude/relay-PP-RELAY-028-...` branch. Allowed terminal results are `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, and `PAUSED_USAGE_LIMIT`. A non-change terminal outcome does not require a dummy PR. The result must include `task_id`, `revision`, `risk_class: STANDARD`, terminal `result`, verification performed, changed paths, tests/checks, any discovered limitations/false-positive risks, and blocker/gate details. `source_preflight` may be null because this task is tooling rather than SOURCE_SENSITIVE content.

## PR contract
If changed work is `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with footers:

RELAY_TASK_ID: PP-RELAY-028
RELAY_TASK_REVISION: 1
RELAY_RESULT: READY_FOR_REVIEW
