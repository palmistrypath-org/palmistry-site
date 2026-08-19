# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-021

## Revision
1

## Objective
Publish the already-prioritized beginner article **“Is Palmistry Real? What the Tradition Claims and What It Doesn't”** at `src/content/blog/beginner/is-palmistry-real.md`, targeting the skeptic/accuracy intent without duplicating the existing `what-palmistry-is` overview and without overstating either palmistry or the scientific evidence.

## Why this task now
- `docs/editorial-backlog.md` ranks this as the highest-priority unshipped Next 10 item (P=12) after PP-RELAY-020.
- `src/content/lessons/foundations/01-what-palmistry-is.mdx` and `src/content/blog/beginner/what-palmistry-is.md` already contain approved, grounded framing for what palmistry is, what it is not, the lack of validated predictive support, Ray Hyman's cold-reading example, and Palmistry Path's reflective/observational posture.
- The search intent is distinct from “what is palmistry”: this article should answer a skeptical reader asking whether palmistry is accurate, predictive, scientific, or still useful to study.

## Authorized scope
1. Create `src/content/blog/beginner/is-palmistry-real.md` using the repository article template/frontmatter conventions and `relatedLesson: /learn/foundations/01-what-palmistry-is`.
2. Lead directly with the skeptical question. Separate three ideas clearly:
   - what historical palmistry traditions have claimed;
   - what evidence does and does not establish about predictive/occult claims;
   - why Palmistry Path still treats palmistry as a structured interpretive, cultural, contemplative, and observational tradition.
3. Reuse only claims that can be grounded in approved repository evidence or Tier 1–3 sources already established in the relevant lesson/article/source policy. Do not broaden scientific claims beyond what the existing Foundations material supports.
4. Preserve the editorial distinction required by `docs/editorial-style-guide.md`: historical palmists did make predictive claims; Palmistry Path does not present those claims as reliable or as advice. Do not falsely say serious/classical palmistry “never” predicted the future.
5. If using Ray Hyman, preserve the existing nuance that his deliberate-contradiction account is anecdotal rather than itself a controlled experiment. Do not turn it into stronger evidence than the repository currently claims.
6. Do not claim palmistry has been scientifically proven, disproven in every possible sense, or validated as personality assessment. Prefer precise language such as “no scientific support for occult predictive meaning” and “not validated as reliably predictive under controlled conditions” only where supported by the approved repository material.
7. Differentiate from `what-palmistry-is.md`: this article is an evidence/trust/accuracy FAQ for skeptics, not another history-and-definition overview. Keep history brief and only where necessary to explain what the tradition actually claimed.
8. Add a single natural reciprocal navigation link from `what-palmistry-is.md` to the new article only if it improves reader navigation without rewriting that article materially. Other existing-article edits must remain navigation-only.
9. Update `docs/editorial-backlog.md`, `docs/CURRENT_STATE.md`, `docs/CHANGELOG.md`, and `docs/AI_HANDOFF.md` only as required by the repository definition of done. Do not create unrelated documentation churn.
10. If the worker discovers that a material scientific/historical claim needed for the article cannot be supported from approved repository evidence or a clearly appropriate Tier 1–3 source, do not guess or use Tier 4 material. Narrow/delete the claim; if the article's core thesis cannot remain useful without it, return `HUMAN_REQUIRED` with the exact source/evidence gap.

## Editorial/source guardrails
- Follow `AGENTS.md` and `docs/editorial-style-guide.md`, especially §§2–5.
- Never invent quotations, scientific findings, palmistry meanings, historical consensus, prevalence, or source attributions.
- Quotation marks require verified verbatim wording from the cited edition. Paraphrase is preferred.
- Do not sanitize historical primary sources to fit Palmistry Path's editorial boundary. Accurately distinguish “the tradition claimed X” from “Palmistry Path does not treat X as established/reliable.”
- Do not make medical, legal, financial, lifespan, relationship, or deterministic character claims.
- No broad web research. Targeted Tier 3 verification is allowed only when necessary for a specific factual statement and must be cited to the actual reputable source.
- Avoid dismissive framing of cultural traditions and avoid credulous framing of interpretive claims.

## Acceptance criteria
- New article exists at `src/content/blog/beginner/is-palmistry-real.md` and serves the skeptic/accuracy intent distinctly from `what-palmistry-is.md`.
- Opening gives a direct, nuanced answer rather than burying the conclusion.
- Historical claims and Palmistry Path policy are explicitly separated.
- No statement implies scientific validation of palmistry's occult/predictive claims.
- No overbroad “science disproves everything about palmistry” claim is introduced.
- Any Ray Hyman discussion preserves the anecdote-vs-controlled-evidence distinction already established in the repository.
- Sources footer contains only Tier 1–3 sources actually used; no Tier 4 discovery source appears.
- Internal links are natural, non-duplicative, and the existing article is changed only for reciprocal navigation if needed.
- SEO title/description are accurate, non-clickbait, and within existing conventions.
- Canonical docs accurately mark the backlog item shipped if the article is accepted.

## Verification
- Compare the final article against `src/content/lessons/foundations/01-what-palmistry-is.mdx`, `src/content/blog/beginner/what-palmistry-is.md`, and `docs/editorial-style-guide.md` for claim fidelity and intent differentiation.
- Search the new article for `proves`, `proven`, `predicts`, `scientific`, `science`, `research`, `studies`, `accurate`, `accuracy`, `future`, `evidence`, `validated`, `disproved`, `debunked`, `always`, `never`, `most`, `generally`, `typically`, `consensus`, and equivalent certainty language; each material occurrence must be supported and properly scoped.
- Run `npm run build`.
- Run `npm run content-audit`.
- Run `npm run audit:all`.
- Run `git diff --check` and inspect the final diff for source integrity, SEO, accessibility, internal-link quality, cannibalization, and scope drift.

## Explicit no-change condition
Return `NO_CHANGE` only if current `main` already contains a substantially equivalent skeptic-intent article at this slug or another canonical slug such that publishing this article would create material duplication/cannibalization. Independently document the existing page that satisfies the intent. Do not use `NO_CHANGE` merely because some evidence/framing also appears in `what-palmistry-is.md`.

## v2B durable-result contract — REQUIRED
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-021-r1.json`, commit it on a pushed `claude/relay-PP-RELAY-021-...` branch, and use one terminal result: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 1
- `task_id`: `PP-RELAY-021`
- `revision`: 1
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR number for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `human_action`: exact action only when applicable, otherwise `null`
- `execution`: truthful compact execution telemetry per current Relay contract; do not invent model names, token counts, hidden reasoning, or subagent activity.

For `READY_FOR_REVIEW`, commit implementation/docs plus the result artifact, push one matching `claude/relay-PP-RELAY-021-...` branch, and open exactly one PR to `main` with title prefix `[RELAY PP-RELAY-021]` and matching Relay footers. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and do not create a dummy PR merely to signal completion. Absence of a PR is valid for non-change terminal outcomes.

## Result
Stop after producing the durable revision-1 result, pushing the Relay branch, and opening the single Relay PR only when the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.
