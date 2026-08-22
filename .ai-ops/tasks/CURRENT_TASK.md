# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-038

## Revision
1

## Risk Class
SOURCE_SENSITIVE

## Objective
Publish the bounded beginner companion article `Long Head Line Meaning` (`long-head-line-meaning`) from the approved Next 25 editorial backlog, using only source-safe, repository-supported meaning and clearly distinguishing observation from historical interpretation and Palmistry Path guidance.

## Why this task
`docs/editorial-backlog.md` lists `Long Head Line Meaning` as the next unshipped article after PP-RELAY-037 in the Next 25 sequence. The parent Head Line article already contains a verified Benham quotation supporting the core length reading: a longer head line is associated with abundant/broad mental range, while the kind/quality of the mind is not determined by length alone. This makes the task bounded and useful while still exercising the v2C source-sensitive safeguards.

The new article must remain distinct from `short-head-line-meaning`: it should answer the long-line search intent, explain how to identify a comparatively long head line without inventing a fixed measurement or anatomical cutoff, and explicitly avoid equating length with IQ or measurable intelligence.

## Source boundaries
Primary repository evidence:
- `src/content/blog/beginner/head-line.md`, especially the `### Length` section and its verified Benham quotation.
- `src/content/lessons/lines/03-head-line.mdx`, used only for source-safe framing that can be traced to approved evidence; existing unsourced prose is not automatically evidence.
- `docs/source-verification-log.md`, especially the verified Benham head-line quotation record.
- `src/content/blog/beginner/short-head-line-meaning.md` may be used only for article-pattern/navigation consistency, not as authority for new meanings.

Core permitted interpretation, only to the extent supported by verified repository evidence:
- a comparatively long head line may be framed as broader mental range / extensive engagement across subjects or angles;
- length alone does not establish intelligence, IQ, overall mental capacity, success, profession, diagnosis, or worth;
- Benham's verified wording about length indicating `abundant mentality`, with the kind estimated from the line's character/color, may be quoted only if it exactly matches the verified repository record.

Do not invent or import unsupported claims about prevalence, exceptional intelligence, genius, memory, education, career, academic success, personality certainty, mental health, lifespan, or predictive outcomes.

Do not synthesize new combination readings with slope, endpoint, depth, hand shape, mounts, heart line, branches, forks, or other features unless the exact combination is independently supported by approved repository evidence. It is acceptable to tell readers to observe those features separately and consult the parent Head Line guide.

Do not define `long` with an inch/centimetre threshold, a fixed central/outer-palm boundary, a finger landmark, or another precise cutoff unless direct approved evidence establishes it. Prefer comparative observation such as a line that travels noticeably farther across the palm than a shorter example and reaches well across the palm toward the outer side.

## Scope
Expected primary changes:
- create `src/content/blog/beginner/long-head-line-meaning.md`;
- add one bounded reciprocal navigation link from `src/content/blog/beginner/head-line.md` when useful and non-duplicative;
- update `docs/editorial-backlog.md` publication count/item #12 only if the article is actually produced;
- directly necessary canonical tracking/docs required by `AGENTS.md`;
- `.ai-ops/results/PP-RELAY-038-r1.json`.

Do not materially rewrite the parent Head Line lesson/article, fix unrelated legacy source issues, redesign navigation, alter SEO/indexing policy, or change Relay control-plane logic.

## Acceptance criteria
1. The article serves the specific `long head line meaning` intent and does not duplicate the full parent Head Line guide.
2. Identification guidance is comparative/observational and does not invent a fixed geometric measurement or threshold.
3. The core interpretation is traceable to approved repository evidence and does not turn length into a measure of IQ/intelligence or overall mental capacity.
4. Every named-source claim is accurately scoped and attributed; every quotation is verified verbatim.
5. No unsupported prevalence/consensus language or vague anonymous authority remains.
6. No new combined reading is synthesized from independently supported features.
7. Observation, historical/traditional interpretation, and Palmistry Path editorial guidance are distinguishable.
8. Reciprocal navigation/backlog bookkeeping are accurate and bounded.
9. No medical, legal, financial, deterministic relationship, or predictive-science claim is introduced.

## Validation
Run at minimum:
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `npm run audit:claim-risk -- src/content/blog/beginner/long-head-line-meaning.md`
- `git diff --check`

Manually disposition every claim-risk finding against actual approved evidence. A clean heuristic scan is not proof of source validity.

## SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`, verify and record against the final changed prose that:
1. every prevalence/consensus/frequency claim is directly supported and attributed or removed/narrowed;
2. every scientific, historical, source, evidence, measurement, or geometric-cutoff claim is traceable and correctly scoped;
3. no new combination reading is synthesized from independently supported meanings;
4. no vague anonymous authority remains unsupported;
5. observation, historical interpretation, and Palmistry Path guidance remain distinct;
6. quotation marks are used only for verified wording or clear labels/search terms;
7. no medical, legal, financial, deterministic relationship, intelligence/IQ, mental-health, or predictive-science claim is introduced;
8. the final article does not imply that line length alone determines overall mental capacity;
9. the source footer does not imply support from sources not actually verified for retained claims;
10. the article does not invent a fixed measurement, anatomical zone, or threshold for `long` unless directly supported.

The durable result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object addressing the final prose.

## No-change / stop conditions
Return `NO_CHANGE` only if the target article already exists on current `main` and already satisfies this task's distinct search intent and acceptance criteria. Independently document that evidence in the durable result.

Return `HUMAN_REQUIRED` rather than guessing if the article cannot be completed without material new palmistry interpretation or source acquisition/judgment outside approved repository evidence.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-038-r1.json` on a pushed `claude/relay-PP-RELAY-038-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

For `READY_FOR_REVIEW`, commit implementation/docs plus the result artifact, push one Relay branch, and open exactly one PR targeting `main` with matching Relay footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.

## Revision history
- Revision 1: initial bounded Long Head Line Meaning article task under the v2C source-sensitive contract.
