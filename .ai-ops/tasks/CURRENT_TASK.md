# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-056

## Revision
1

## Risk Class
SOURCE_SENSITIVE

## Objective
Create the approved Next 25 search-intent article **The Teacher's Square in Palmistry** only if its identification/location and retained interpretations can be independently grounded in approved evidence. Treat the editorial backlog as a topic map, not as proof of any palmistry claim.

## Product / roadmap basis
- `docs/ROADMAP.md` authorizes search-intent expansion that routes specific questions into the structured learning path while preserving Palmistry Path's educational/trust positioning.
- `docs/editorial-backlog.md` item 21 identifies `teachers-square-palmistry` as the next unshipped scored article after the completed items 1–20.
- The backlog's note that Benham is a candidate/primary source is **not** itself verification. Independently verify any Benham, Cheiro, or other source claim before using it.

## Scope
Primary implementation when evidence is sufficient:
- one new article at the repository-consistent beginner-blog path for slug `teachers-square-palmistry`

Supporting only as directly necessary:
- reciprocal/contextual navigation from an existing relevant Jupiter/minor-lines page only where the existing prose already provides a natural, truthful link opportunity
- `docs/editorial-backlog.md` shipped/status bookkeeping if the article is actually added
- `docs/CHANGELOG.md`
- source/evidence log updates required by the editorial policy
- `.ai-ops/results/PP-RELAY-056-r1.json`

Do not rewrite unrelated Jupiter, square-marking, Ring of Solomon, or minor-lines content. Do not alter SEO/indexing strategy, routes, canonicals, monetization, Relay workflows, or fast-lane policy.

## Evidence-first requirements
1. Before drafting, independently verify from approved repository-held evidence or an approved primary/secondary source what the feature is called, where it is located, and what interpretation(s) the named source actually assigns to it.
2. Do **not** use commercial palmistry sites, SEO articles, videos, unsourced blogs, or search snippets as citation authority. They may be discovery aids only under `AGENTS.md` / the editorial source policy.
3. Do not assume a generic square-on-Jupiter meaning is automatically the same thing as a specifically named "Teacher's Square" unless the source itself establishes that relationship.
4. Do not manufacture symmetry or combinations from separate Jupiter-mount, square-symbol, Ring-of-Solomon, Head-Line, finger, or teaching/leadership meanings.
5. If the historical source only supports a narrow aptitude/teaching association, keep the article narrow. Do not expand it into claims about intelligence, empathy, patience, coaching skill, career success, children, leadership, spiritual gifts, or communication ability unless each retained claim is independently supported.
6. Do not assert prevalence, rarity, typical size, exact millimetre dimensions, "clean four equal sides," population norms, popularity, cross-tradition consensus, or chronology unless directly verified.
7. Keep historical/traditional interpretation visibly distinct from Palmistry Path editorial guidance. A marking is not a credential, prediction, diagnosis, or guaranteed career outcome.
8. If source sufficiency cannot support a useful standalone article without padding or inference, return `HUMAN_REQUIRED` with the exact missing source/evidence need rather than drafting speculative prose.

## Article requirements when evidence is sufficient
- Answer the search intent directly: what the Teacher's Square is, how to locate/identify it to the extent the verified source allows, what the named tradition/source historically associates with it, and what Palmistry Path does **not** infer from it.
- Use normal article frontmatter and the repository article template.
- Link to the most relevant approved learning/page context (for example Mount of Jupiter or the minor-lines/markings learning area) only where routes and content relationships are verified.
- Avoid deterministic fortune-telling or outcome language.
- Do not quote unless wording is verified verbatim from the cited edition; otherwise paraphrase.

## Required v2C source preflight
Before `READY_FOR_REVIEW`:
- run `npm run audit:claim-risk -- <changed article path>` and disposition every finding manually;
- verify prevalence/consensus language;
- verify scientific/historical assertions;
- verify no invented combination readings;
- verify no vague anonymous authority;
- verify quotation fidelity;
- verify observation vs historical interpretation vs Palmistry Path editorial guidance remain distinct;
- verify no medical, legal, financial, deterministic relationship, predictive-science, or guaranteed career claims were introduced.

The durable result must contain `risk_class: "SOURCE_SENSITIVE"` and a truthful completed `source_preflight` object for `READY_FOR_REVIEW`.

## Acceptance criteria
If changed work is warranted:
- Every substantive palmistry interpretation in the new article is traceable to an approved named source/evidence record.
- No unsupported Teacher's-Square/Jupiter synthesis or generic-square extrapolation is presented as established meaning.
- The article is useful without padding unsupported claims.
- Relevant navigation is accurate and non-duplicative.
- Backlog/status bookkeeping is changed only if the article actually ships in this task.
- `npm run build` passes.
- `npm run content-audit` passes.
- `npm run audit:all` passes if required by the changed scope.
- targeted claim-risk audit passes after manual disposition.
- `git diff --check` passes.
- No scope drift.

## Explicit no-change condition
If current `main` already contains a published `teachers-square-palmistry` article that materially satisfies this objective and the backlog is merely stale, do not rewrite it to create work. Return `NO_CHANGE` with concrete repository evidence; the Director will independently verify and choose another task.

## Durable result contract
Every worker run that passes startup must write `.ai-ops/results/PP-RELAY-056-r1.json` on a pushed `claude/relay-PP-RELAY-056-...` branch before stopping.

Allowed terminal results:
- `READY_FOR_REVIEW`
- `NO_CHANGE`
- `BLOCKED`
- `HUMAN_REQUIRED`
- `PAUSED_USAGE_LIMIT`

For `READY_FOR_REVIEW`, commit the bounded implementation/docs plus result artifact, push exactly one matching Relay branch, and open exactly one PR to `main` with the standard Relay footers for PP-RELAY-056 revision 1. For non-change terminal outcomes, push the result branch and normally do not create a dummy PR.

The result artifact must include `schema_version: 2`, `task_id: "PP-RELAY-056"`, `revision: 1`, `risk_class: "SOURCE_SENSITIVE"`, terminal `result`, concise summary and verification, the required source-preflight data where applicable, truthful execution telemetry, and `human_action` only when a genuine gate exists.

## Stop condition
After producing the durable terminal result and PR when applicable, stop. Do not merge, choose another task, or broaden scope.