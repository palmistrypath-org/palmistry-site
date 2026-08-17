# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-006

## Revision
1

## Objective
Eliminate the current repository's pre-existing content-audit **frontmatter description-length warnings** through a bounded metadata-only cleanup, without changing palmistry meanings, source claims, article/lesson body copy, routes, titles, or product direction.

## Why this task is authorized
Recent Relay verification for PP-RELAY-005 reports that `npm run content-audit` passes but still emits pre-existing non-blocking description-length warnings. This is approved SEO/content hygiene: the warnings are objectively discoverable, the fix can be mechanically reviewed, and frontmatter descriptions can be tightened or expanded using claims already present in the same page without introducing new palmistry interpretation.

## Authorized scope
- Start from current `main` and run `npm run content-audit` before editing to inventory the exact current description-length warnings.
- Change only `description` frontmatter fields on content files that are explicitly reported by the current audit for description length.
- Bring each warned description into the repository audit's accepted length range using concise wording grounded only in the existing page title, current description, and body copy.
- Preserve the page's existing search intent and factual/source framing. Do not add a palmistry meaning, prediction, medical/relationship claim, quotation, citation, or source attribution that is not already stated in that page.
- Keep titles, slugs/routes, `relatedLesson`/`relatedArticle`, dates, clusters/modules, lesson order, body content, layout/code, and indexability behavior unchanged.
- Update canonical docs only if `AGENTS.md` requires a concise project-state/changelog note for this metadata cleanup; avoid documentation churn.

## Explicit non-goals
- No article or lesson body rewrites.
- No new palmistry claims, interpretations, citations, quotations, research, or curriculum changes.
- Do not touch the unresolved Gettings quotations, the source-sensitive Sun/Mercury rewrite, or Batch 3F work.
- Do not change page titles, URLs, routing, canonical/indexability rules, structured-data architecture, visual design, dependencies, deployment, monetization, or external services.
- Do not fix unrelated audit warnings/errors discovered during the run; report them separately if present rather than broadening scope.
- Do not merge the PR or select the next task.

## Acceptance criteria
- A clean `npm run content-audit` run no longer reports any of the pre-existing **description-length** warnings that were present at task start.
- Every content edit is limited to a frontmatter `description` field on a file that the baseline audit explicitly warned about.
- Revised descriptions accurately summarize existing page content and do not introduce new palmistry/source claims.
- No body copy, title, URL, route, lesson ordering, indexability, or runtime behavior changes.
- If the baseline audit has no description-length warnings, return `NO_CHANGE` with the audit evidence rather than making arbitrary edits.
- If resolving a warning would require a substantive new claim or source-dependent wording, leave that item unchanged and return `HUMAN_REQUIRED` only if no source-safe description can be written from existing page content; otherwise use neutral existing wording.

## Verification
- Run baseline `npm run content-audit` and record the warned files/reasons.
- After edits, run `npm run content-audit` again.
- Run `npm run build` because content frontmatter affects generated metadata.
- Run `git diff --check`.
- Review the final diff and confirm only authorized `description` frontmatter fields (plus strictly required canonical docs/result artifact) changed.
- Spot-check generated metadata or built HTML for each changed page as practical to confirm descriptions render correctly and no route/indexability behavior changed.

## v2B durable-result contract — REQUIRED
Because the configured Claude cloud Routine may predate Relay v2B, this task packet explicitly requires a durable terminal result.

Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-006-r1.json`, commit it on a pushed `claude/relay-PP-RELAY-006-...` branch, and use one of these terminal results: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 1
- `task_id`: `PP-RELAY-006`
- `revision`: 1
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR number for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `human_action`: exact action only when applicable, otherwise `null`

For `READY_FOR_REVIEW`, commit implementation/docs plus the result artifact, push one `claude/relay-PP-RELAY-006-...` branch, and open exactly one PR to `main` with title prefix `[RELAY PP-RELAY-006]` and matching Relay footers. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and do not create a dummy PR merely to signal completion. Absence of a PR is therefore valid for non-change terminal outcomes.

## Result
Stop after producing the durable result, pushing the Relay branch, and opening a PR only if the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.
