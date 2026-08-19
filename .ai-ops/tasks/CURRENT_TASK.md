# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-017

## Revision
1

## Objective
Publish the already-prioritized beginner blog pillar **“The Minor Lines of the Palm: A Beginner Overview”** at `src/content/blog/beginner/minor-lines-overview.md`, closing the highest-ranked open item in `docs/editorial-backlog.md` while strengthening discovery into the existing minor-line article cluster and Advanced lesson path.

## Why this task is authorized
`docs/editorial-backlog.md` explicitly ranks this article #1 in its “Next 10” approved editorial queue with priority score 14. It identifies a concrete topical-authority gap: the site already has individual coverage for the Sun line, Mercury line, relationship/marriage lines, and Girdle of Venus, but no beginner pillar that explains how the minor-line layer fits together and routes readers into those deeper pages. This is approved product/content direction, not a new milestone.

## Authorized scope
1. Start from current `main` and verify that `src/content/blog/beginner/minor-lines-overview.md` does not already exist and that the intended individual minor-line articles/routes still exist.
2. Follow the new-article workflow in `AGENTS.md`, `docs/editorial-style-guide.md`, and `docs/article-template.md`, but keep context loading targeted.
3. Before drafting, establish a concise source plan from repository-approved evidence. Prefer the already-published/current minor-line articles, current lessons, `docs/source-verification-log.md`, and Tier 1/2 sources already used and verified in the repository. Do not use commercial astrology/SEO sites as authorities.
4. Write one beginner-facing pillar article that answers what minor lines are, how they differ from major lines, why absence is normal, how much weight to give them, and gives concise orientations to the Sun/Apollo line, Mercury/Health line, relationship/marriage lines, and Girdle of Venus. Keep each section introductory and link readers to the existing dedicated article/lesson for detail rather than duplicating those pages.
5. Preserve Palmistry Path’s historical-claim-versus-site-policy distinction. Where classical sources made predictive, medical, lifespan, or relationship-outcome claims, report history accurately if relevant and state the site boundary separately; do not imply the tradition rejected claims it actually made.
6. Do not introduce any new quotation-marked wording unless fidelity is verifiable from repository evidence. Paraphrase instead when exact wording is not securely established.
7. Set frontmatter consistent with current blog schema, including the existing `minor-lines` cluster if that remains the repository convention and `relatedLesson: /learn/advanced/01-minor-lines-overview` only if that route still resolves on current `main`.
8. Add concise reciprocal discovery links from the existing dedicated minor-line articles back to the new pillar only where this can be done without changing their substantive palmistry claims. Do not rewrite those articles.
9. Update only canonical docs required by `AGENTS.md` for a meaningful shipped article. Do not convert the rest of `editorial-backlog.md` into an active approved work queue beyond recording this item’s completion if appropriate.

## Editorial/source guardrails
- Never invent palmistry meanings, prevalence statistics, scientific support, consensus, quotations, citations, or historical claims.
- Do not repeat any unsupported “roughly half of hands” or similar prevalence claim unless a repository-approved source explicitly supports it.
- Keep the article educational and reflective, not predictive-science framing.
- Use grounded wording such as “traditionally associated with” and explicitly distinguish tradition from demonstrated fact.
- Do not make medical, legal, financial, lifespan, or relationship-outcome advice claims from palmistry.
- If source sufficiency is inadequate for a material section, narrow the article to what is supported. If the article cannot meet the objective without inventing or relying on insufficient evidence, return `HUMAN_REQUIRED` rather than guessing.
- The unresolved Sun/Mercury rewrite in `advanced/01-minor-lines-overview.mdx` is outside this task. Do not copy unverified branch-only quotations from `feat/curriculum-wave-3e-3f` into this article.

## Acceptance criteria
- A new `minor-lines-overview.md` beginner pillar exists and clearly serves broad “minor lines palmistry / what are the minor palm lines” intent without cannibalizing the dedicated line pages.
- The article accurately orients readers to Sun, Mercury, relationship/marriage lines, and Girdle of Venus using only source-supported meanings already established in the approved corpus.
- The article explains that minor-line absence is normal/possible without inventing a universal interpretation for absence.
- Internal links to the dedicated minor-line content and related Advanced lesson resolve.
- Any reciprocal links added to existing articles are navigation-only and do not alter their palmistry claims.
- No unverified quotation is introduced and no existing unresolved source-sensitive curriculum rewrite is silently pulled forward.
- Build/content validation passes and the final diff remains bounded to this article, navigation-only reciprocal links, directly necessary canonical docs, and the Relay result artifact.

## Verification
- Run `npm run build`.
- Run `npm run content-audit`.
- Run `npm run audit:all` because this task adds a new indexable article and multiple internal links.
- Verify the new route is indexable, included in normal blog discovery, and its `relatedLesson` resolves.
- Verify every new internal link resolves and no existing article substantive claim changed as part of reciprocal linking.
- Run `git diff --check` and inspect the final diff for source, SEO, scope, and editorial drift.

## v2B durable-result contract — REQUIRED
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-017-r1.json`, commit it on a pushed `claude/relay-PP-RELAY-017-...` branch, and use one terminal result: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 1
- `task_id`: `PP-RELAY-017`
- `revision`: 1
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR number for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `human_action`: exact action only when applicable, otherwise `null`
- `execution`: truthful compact execution telemetry per current Relay contract; do not invent model names, token counts, hidden reasoning, or subagent activity.

For `READY_FOR_REVIEW`, commit implementation/docs plus the result artifact, push one `claude/relay-PP-RELAY-017-...` branch, and open exactly one PR to `main` with title prefix `[RELAY PP-RELAY-017]` and matching Relay footers. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and do not create a dummy PR merely to signal completion. Absence of a PR is valid for non-change terminal outcomes.

## Result
Stop after producing the durable result, pushing the Relay branch, and opening a PR only if the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.
