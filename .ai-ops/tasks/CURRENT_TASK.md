# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-037

## Revision
2

## Risk Class
SOURCE_SENSITIVE

## Objective
Publish the bounded beginner variation article `Short Head Line Meaning` (`short-head-line-meaning`) using only source-safe, repository-supported meaning. Revision 2 is a narrow remediation of revision 1; do not broaden the article or add new interpretations.

## Why this task
Revision 1 produced a generally sound article and correct core Benham/Gettings framing, but independent Director review found residual prevalence/consensus wording that the worker preflight incorrectly treated as harmless editorial convention. The v2C SOURCE_SENSITIVE contract requires unsupported frequency/consensus language to be supported and attributed or removed/narrowed.

## Revision 2 required remediation
Preserve the accepted structure, navigation, core interpretation, and verified Benham quotation, but correct the following source-safety issues in `src/content/blog/beginner/short-head-line-meaning.md`:

1. Remove or narrowly rephrase unsupported prevalence/superlative claims such as `popular palmistry most frequently distorts`, `most commonly distorted`, `generally treated as short`, and `rarely the most decisive one on its own` unless direct approved evidence specifically supports that frequency/ranking claim.
2. Replace vague authority framing such as `the tradition warns against` / `the careful tradition says` with named, supportable attribution (for example Benham/Gettings where actually supported) or neutral Palmistry Path editorial wording.
3. Do not use an existing unsourced sentence in `03-head-line.mdx` as sufficient evidence for a prevalence/consensus claim merely because it already exists in the lesson. The task packet explicitly requires checking source support rather than inheriting unsupported wording.
4. Review the source footer so it lists only sources substantively consulted/supporting claims in this article. Do not imply Cheiro, West, or Fincham support the short-line meaning unless verified repository evidence shows that they do.
5. Re-run the complete SOURCE_SENSITIVE preflight across the final article, not only the specifically named sentences. Any equivalent unsupported frequency, consensus, anonymous-authority, or source-scope wording must be removed/narrowed in the same bounded pass.

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

Manually disposition every claim-risk finding against actual approved evidence. A heuristic finding may be harmless, but a SOURCE_SENSITIVE prevalence/consensus statement may not be retained merely by labeling it editorial convention.

## SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`, verify and record that:
1. every prevalence/consensus/frequency claim is directly supported and attributed or removed/narrowed;
2. every scientific, historical, source, or evidence claim is traceable and correctly scoped;
3. no new combination reading is synthesized from independently supported meanings;
4. no vague anonymous authority remains unsupported;
5. observation, historical interpretation, and Palmistry Path guidance remain distinct;
6. quotation marks are used only for verified wording or clear labels/search terms;
7. no medical, legal, financial, deterministic relationship, intelligence/IQ, or predictive-science claim is introduced;
8. the final article does not imply that line length alone determines overall mental capacity;
9. the source footer does not imply support from sources that were not actually verified for the claims retained.

The durable result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object addressing the final prose.

## Scope
Expected primary changes:
- `src/content/blog/beginner/short-head-line-meaning.md`
- only directly necessary tracking/result files
- `.ai-ops/results/PP-RELAY-037-r2.json`

The reciprocal parent link and backlog publication update from revision 1 should remain unless directly necessary to correct a discovered factual bookkeeping error.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-037-r2.json` on a pushed `claude/relay-PP-RELAY-037-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`. Non-change terminal outcomes do not require a dummy PR.

For `READY_FOR_REVIEW`, update the single existing Relay review surface for this task when practical (PR #58) rather than creating duplicate active PRs. Push the branch, retain matching Relay task/revision/result footers, do not merge, and do not select the next task.

## Revision history
- Revision 1: initial bounded Short Head Line variation article task under the v2C source-sensitive contract.
- Revision 2: bounded remediation for unsupported prevalence/consensus, vague-authority, and source-footer scope wording found during independent Director review.