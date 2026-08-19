# Relay v2C — 50-Accepted-Iteration Pilot

Status: AUTHORIZED_BY_OWNER

## Purpose

Relay v2C is an incremental expansion of the proven v2B control plane. It intentionally preserves the working dispatch, independent Director review, exact-SHA merge approval, and mechanical auto-merge architecture while adding stronger task risk classification, source-sensitive worker preflight, and failure-category telemetry.

This is a bounded **50 accepted iteration** experiment. It is not permission for an unbounded autonomous loop.

## Stability principle

- Do not rewrite the proven Relay dispatch or auto-merge workflows for this pilot unless a concrete defect requires a bounded fix.
- Prefer additive/reversible policy and telemetry changes.
- Keep one worker task live at a time.
- Preserve all existing billing/usage safeguards and human gates.
- The hourly Director remains a watchdog/recovery path; faster event-driven paths may be used only where already proven or explicitly allowlisted.

## Risk classes

Every v2C task packet must declare exactly one `Risk Class`:

### LOW

Mechanically verifiable, narrow work with little or no semantic/editorial judgment. Examples: bounded docs reconciliation, tests/tooling, deterministic accessibility fixes, narrow internal-link hygiene, and similarly objective changes.

- Full normal worker verification still applies.
- Fast-lane eligibility is **not automatic**. The task must also be explicitly allowlisted in `.ai-ops/fastlane.json` with exact allowed paths and revision.

### STANDARD

Normal product/content/technical work that is objectively reviewable but not suitable for unattended fast-lane merge.

- Requires full independent Director review before merge approval.

### SOURCE_SENSITIVE

New or materially rewritten palmistry/editorial content, or any task where correctness depends on source fidelity, prevalence/consensus language, scientific/historical claims, interpretation boundaries, or source-backed synthesis.

- Requires full independent Director review.
- Requires the worker source-claim preflight below before `READY_FOR_REVIEW`.
- Never fast-lane eligible during the 50-run v2C pilot.

## Source-claim preflight

For every `SOURCE_SENSITIVE` task, the worker must inspect the completed diff before producing `READY_FOR_REVIEW` and explicitly check:

1. **Prevalence language:** every claim using or implying words such as `most`, `many`, `often`, `commonly`, `typically`, `generally`, `usual`, `rare`, or equivalent frequency/consensus language is directly grounded in approved repository evidence or removed/narrowed.
2. **Scientific/historical assertions:** every concrete study/result, historical continuity, chronology, or evidence claim is traceable to approved repository evidence; otherwise it is removed, narrowed, or escalated.
3. **No invented combinations:** independently supported palmistry meanings are not combined into a new interpretation unless that specific combination is itself supported by approved evidence.
4. **No vague source attribution:** avoid unsupported phrases such as `modern palmists`, `some writers`, `traditional readers`, `experts`, or equivalent anonymous authority claims unless a source is identifiable.
5. **Claim type separation:** keep observation, historical/traditional interpretation, and Palmistry Path editorial guidance distinguishable.
6. **Quotation fidelity:** quotation marks are used only for verified verbatim wording from the cited edition.
7. **Safety boundaries:** no medical, legal, financial, deterministic relationship, or predictive-science claims are introduced.

If a material claim cannot pass this preflight from approved repository evidence, return `HUMAN_REQUIRED` when genuine judgment/source acquisition is needed, or remove/narrow the claim when that resolves the issue without changing the authorized objective.

## v2C task-packet requirements

Every task packet keeps the v2B parser-compatible identity structure and durable-result contract and additionally includes:

- `## Risk Class` followed by exactly `LOW`, `STANDARD`, or `SOURCE_SENSITIVE`.
- For `SOURCE_SENSITIVE`, an explicit requirement to complete the source-claim preflight before terminal result.
- Explicit no-change conditions when applicable.
- Bounded acceptance criteria and validation appropriate to risk.

## Result telemetry additions

Worker result artifacts should include:

```json
{
  "risk_class": "STANDARD",
  "source_preflight": null
}
```

For `SOURCE_SENSITIVE`, `source_preflight` should be a compact object such as:

```json
{
  "completed": true,
  "prevalence_language_checked": true,
  "scientific_historical_claims_checked": true,
  "combination_readings_checked": true,
  "vague_attribution_checked": true,
  "quotation_fidelity_checked": true,
  "notes": null
}
```

Do not include hidden reasoning or verbose transcripts.

## Director metrics additions

The Director should record, when applicable:

- task risk class;
- first-pass vs reworked acceptance;
- rework reason categories;
- technical blocker categories;
- human-gate category;
- source-preflight presence for source-sensitive work.

Recommended rework/blocker categories:

- `SOURCE_INTEGRITY`
- `UNSUPPORTED_PREVALENCE_OR_CONSENSUS`
- `UNSUPPORTED_SCIENTIFIC_OR_HISTORICAL_CLAIM`
- `UNSUPPORTED_COMBINATION_READING`
- `SCOPE_DRIFT`
- `SEO`
- `ACCESSIBILITY`
- `TEST_OR_CI`
- `CONTROL_PLANE`
- `IMPLEMENTATION_CORRECTNESS`
- `DOCUMENTATION_STATE`
- `OTHER`

A task may carry more than one category when genuinely applicable.

## Pilot success criteria

At 50 accepted v2C iterations, stop and reassess before any unbounded production mode. Review at minimum:

- accepted and autonomous-merge rate;
- first-pass acceptance rate overall and by risk class;
- rework rate and reason distribution;
- source-sensitive rework rate versus v2B;
- human gates and usage-limit events;
- technical blockers;
- any bad merge/regression or rollback;
- elapsed dispatch-to-result and approval-to-merge timing where timestamps are available.

The target is not zero rework. The target is safe autonomous progress with a decreasing avoidable-rework rate and no weakening of merge/source safeguards.
