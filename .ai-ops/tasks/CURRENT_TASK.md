# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-037

## Revision
3

## Risk Class
SOURCE_SENSITIVE

## Objective
Publish the bounded beginner variation article `Short Head Line Meaning` (`short-head-line-meaning`) using only source-safe, repository-supported meaning. Revision 3 is a narrow cumulative remediation of revision 2; do not broaden the article or add new interpretations.

## Why this task
Revision 2 successfully removed the unsupported prevalence/superlative language, vague-authority framing, and overbroad source footer identified in revision 1. Independent cumulative Director review found one remaining source-boundary problem: the article repeatedly turns `short` into the precise geometric rule `ending before the central zone of the palm`, but the approved evidence available for this task supports the interpretation of a shorter head line, not that exact cutoff. Existing unsourced lesson prose is not sufficient evidence for a new precise definition.

## Revision 3 required remediation
Preserve all accepted revision-2 corrections, structure, navigation, core interpretation, verified Benham quotation, reciprocal link, and backlog bookkeeping, but correct the following source-integrity issue in `src/content/blog/beginner/short-head-line-meaning.md`:

1. Remove or narrowly rephrase every unsupported precise cutoff that defines a short head line as `ending before the central zone of the palm` (or equivalent fixed-zone wording) unless direct approved repository evidence specifically establishes that cutoff.
2. It is acceptable to define `short` comparatively/observationally — for example, a head line that ends noticeably earlier across the palm than the long-line pattern described in the approved lesson — provided the wording does not invent a measurement, central-zone threshold, or prevalence claim.
3. Re-check nearby wording for equivalent unsupported precision (fixed measurement, exact anatomical zone, or categorical threshold) and narrow it in the same bounded pass.
4. Do not alter the accepted Benham/Gettings interpretation: shorter length may be framed as more focused/direct/concentrated mental approach rather than lower intelligence, only to the extent already supported by approved repository evidence.
5. Re-run the complete SOURCE_SENSITIVE preflight across the final article. Preserve the revision-2 removals of unsupported prevalence/consensus and vague-authority wording; do not reintroduce them.

Do not rewrite unrelated head-line interpretations. Do not alter product direction, SEO/indexing policy, source policy, Relay control-plane logic, or unrelated backlog priorities.

## Source boundaries
Primary approved evidence remains `src/content/lessons/lines/03-head-line.mdx`, `src/content/blog/beginner/head-line.md`, and `docs/source-verification-log.md`, but existing prose is not automatically verified evidence. The Benham quotation must match the verified wording recorded in the source-verification log. Gettings may be paraphrased only to the extent already supported in repository-reviewed material.

Do not introduce unsupported claims about prevalence, intelligence/IQ, diagnosis, mental health, profession, success, personality certainty, predictive outcomes, or combinations with hand shape, mounts, other lines, depth, branches, or endpoints.

## Validation
Run at minimum:
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `npm run audit:claim-risk -- src/content/blog/beginner/short-head-line-meaning.md`
- `git diff --check`

Manually disposition every claim-risk finding against actual approved evidence. A heuristic finding may be harmless, but SOURCE_SENSITIVE source precision may not be retained merely because similar unsourced wording already exists elsewhere in the repository.

## SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`, verify and record that:
1. every prevalence/consensus/frequency claim is directly supported and attributed or removed/narrowed;
2. every scientific, historical, source, evidence, measurement, or geometric-cutoff claim is traceable and correctly scoped;
3. no new combination reading is synthesized from independently supported meanings;
4. no vague anonymous authority remains unsupported;
5. observation, historical interpretation, and Palmistry Path guidance remain distinct;
6. quotation marks are used only for verified wording or clear labels/search terms;
7. no medical, legal, financial, deterministic relationship, intelligence/IQ, or predictive-science claim is introduced;
8. the final article does not imply that line length alone determines overall mental capacity;
9. the source footer does not imply support from sources that were not actually verified for the claims retained;
10. the article does not invent a fixed `central zone`, inch/centimetre threshold, or equivalent precise definition for `short` unless directly supported.

The durable result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object addressing the final prose.

## Scope
Expected primary changes:
- `src/content/blog/beginner/short-head-line-meaning.md`
- only directly necessary tracking/result files
- `.ai-ops/results/PP-RELAY-037-r3.json`

The reciprocal parent link and backlog publication update from revision 1 should remain unless directly necessary to correct a discovered factual bookkeeping error.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-037-r3.json` on a pushed `claude/relay-PP-RELAY-037-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`. Non-change terminal outcomes do not require a dummy PR.

For `READY_FOR_REVIEW`, update the single existing Relay review surface for this task when practical (PR #58) rather than creating duplicate active PRs. Push the branch, retain matching Relay task/revision/result footers, do not merge, and do not select the next task.

## Revision history
- Revision 1: initial bounded Short Head Line variation article task under the v2C source-sensitive contract.
- Revision 2: bounded remediation for unsupported prevalence/consensus, vague-authority, and source-footer scope wording found during independent Director review.
- Revision 3: bounded cumulative remediation removing an unsupported precise `central zone` cutoff used to define a short head line.