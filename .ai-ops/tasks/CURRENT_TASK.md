# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-037

## Revision
1

## Risk Class
SOURCE_SENSITIVE

## Objective
Publish the next bounded variation article from the approved Next 25 editorial backlog: `Short Head Line Meaning`, slug `short-head-line-meaning`, as a beginner companion to the existing Head Line article/lesson. Ground every palmistry meaning in approved repository evidence; do not expand beyond the established short-head-line interpretation.

## Why this task
The approved editorial backlog lists Short Head Line Meaning as the first Next 25 article and the current Head Line lesson already contains a bounded interpretation: Benham and Gettings are represented as treating a shorter head line as a focused, direct, efficient mental approach rather than a sign of low intelligence. This task should turn that established repository meaning into a focused search-intent article without inventing additional combinations or prevalence claims.

## Required work
- Confirm `src/content/blog/beginner/short-head-line-meaning.md` does not already exist; if the explicit no-change condition below is satisfied, return `NO_CHANGE` rather than duplicating it.
- Create a beginner article targeting `short head line meaning` / `short head line palmistry`, following the established variation-article structure and repository frontmatter conventions.
- Clearly distinguish observation (where the line ends/how length is judged) from historical palmistry interpretation and from Palmistry Path editorial guidance.
- Keep the core meaning within approved evidence: short does not mean unintelligent; the repository-supported Benham/Gettings framing is focused/direct/efficient or concentrated rather than broad-ranging.
- Link to the parent Head Line lesson/article and add reciprocal internal navigation only where consistent with existing cluster patterns.
- Update the editorial backlog published count/status only after the article is actually added and the repository audit confirms the new count.

## Source boundaries
Primary approved repository evidence is `src/content/lessons/lines/03-head-line.mdx` plus any already source-reviewed Head Line companion content and source-verification records that directly support the same claim. Do not treat every sentence in the lesson as automatically verified evidence: inspect relevant source notes/logs and narrow rather than amplify uncertain claims.

Do not introduce unsupported claims about prevalence, intelligence/IQ, diagnosis, mental health, profession, success, personality certainty, predictive outcomes, or combinations with hand shape, mounts, other lines, depth, branches, or endpoints unless that exact combined interpretation is independently supported by approved repository evidence.

Do not use vague anonymous authority such as `modern palmists`, `experts`, `many readers`, `most hands`, `commonly`, or `typically` unless directly supported and attributed. Do not turn historical palmistry meanings into empirical/scientific facts.

## Explicit no-change condition
Return `NO_CHANGE` only if an equivalent published `short-head-line-meaning` article already exists on current `main` and already satisfies the bounded search intent, navigation, and source-safety requirements. Verify actual implementation before using this outcome.

## Validation
Run at minimum:
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `npm run audit:claim-risk -- src/content/blog/beginner/short-head-line-meaning.md`
- `git diff --check`

Manually disposition every claim-risk finding and inspect the complete final article for source-sensitive issues, not only lines flagged by the heuristic.

## SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`, verify and record that:
1. every prevalence/consensus/frequency claim is directly supported and attributed or removed;
2. every scientific, historical, source, or evidence claim is traceable and correctly scoped;
3. no new combination reading is synthesized from independently supported meanings;
4. no vague anonymous authority remains unsupported;
5. observation, historical interpretation, and Palmistry Path guidance remain distinct;
6. quotation marks are used only for verified wording or clear labels/search terms;
7. no medical, legal, financial, deterministic relationship, intelligence/IQ, or predictive-science claim is introduced;
8. the final article does not imply that line length alone determines a person's overall mental capacity.

The durable result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object addressing each item above.

## Scope
Expected primary changes:
- `src/content/blog/beginner/short-head-line-meaning.md`
- narrowly necessary reciprocal internal-link change(s) in the parent Head Line content if appropriate
- `docs/editorial-backlog.md` published status/count after successful addition
- directly necessary project tracking docs
- `.ai-ops/results/PP-RELAY-037-r1.json`

Do not change product direction, monetization, SEO/indexing policy, source policy, Relay control-plane logic, fast-lane settings, unrelated palmistry content, or unrelated backlog priorities.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-037-r1.json` on a pushed `claude/relay-PP-RELAY-037-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`. Non-change terminal outcomes do not require a dummy PR.

For `READY_FOR_REVIEW`, push the branch and open exactly one PR targeting `main` with standard Relay task/revision/result footers. Do not merge. Do not select the next task.

## Revision history
- Revision 1: initial bounded Short Head Line variation article task under the v2C source-sensitive contract.