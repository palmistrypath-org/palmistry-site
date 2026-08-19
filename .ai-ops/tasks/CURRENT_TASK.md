# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-020

## Revision
3

## Revision history
- Revision 1 produced PR #35 and a source-supported article overall.
- Director review found a narrow source-policy defect: the draft contained unverified prevalence/consensus statements, including claims that "most hands" show a certain phalange pattern, that "most experienced readers" combine length and padding in a particular way, and that older "world" terminology had fallen out of common use in contemporary practice.
- Revision 2 correctly removed/narrowed the originally flagged prevalence/consensus language, but independent Director review found one equivalent unsupported generalization remained in the same terminology section: "Some modern writers instead call them the mental, practical, and material zones" / the associated contrast between "older and newer material." This still asserts a modern-practice pattern without a named verified source. Revision 3 must correct only that residual source-framing issue (and any directly equivalent vague-source wording discovered in the same focused pass) while preserving the otherwise accepted work.

## Objective
Finish the already-prioritized beginner article **“Phalanges in Palmistry: What the Three Finger Sections Reveal”** at `src/content/blog/beginner/phalanges-palmistry.md`, preserving the approved Western-source framework while removing or explicitly sourcing the final unsupported modern-practice/source-generalization language.

## Authorized revision-3 scope
1. Start from current PR #35 revision-2 work; do not redesign or broadly rewrite the article.
2. In `## Where sources use different terminology`, remove, narrow, or explicitly attribute the claim that "Some modern writers" use different terminology and the related "older and newer material" framing. Prefer direct named-source comparison among Benham, Gettings, and West, or neutral wording that does not imply an unverified trend in contemporary practice.
3. During the same focused pass, correct only directly equivalent vague-source/general-practice wording if it makes a material prevalence/consensus claim without named support. In particular, review the FAQ sentence "Some sources give slightly more independent weight..." and attribute it to the named source(s) already established in the article if that is what the evidence supports.
4. Preserve all otherwise accepted article structure, interpretations, observable-anatomy-first framing, Western-tradition scope, Benham/Gettings/West paraphrase approach, reciprocal navigation, backlog reconciliation, and canonical-doc updates.
5. Do not add quotations from Gettings/West/Fincham unless exact wording is independently verified from the cited edition. Paraphrase is preferred.
6. Do not add new per-finger × per-phalange interpretations, prevalence claims, consensus claims, health/financial/relationship predictions, cross-tradition universality claims, or new sources.
7. Keep existing canonical-doc updates unchanged unless strictly necessary for accuracy.

## Editorial/source guardrails
- Never invent palmistry meanings, quotations, prevalence claims, consensus, source attributions, or historical claims.
- Quotation marks require verified verbatim wording from the cited edition.
- Traditional phalange associations must remain clearly framed as Western palmistry convention, not scientifically demonstrated personality or destiny.
- Where source evidence supports one or more named authors, attribute the claim to those author(s) rather than generalizing to practitioners, "modern writers," "some sources," or palmistry as a whole.
- If a material claim cannot be grounded in approved evidence, delete or narrow it rather than fill the gap from low-tier web material or intuition.

## Acceptance criteria
- PR #35 contains no unsupported modern-practice, prevalence, frequency, or practitioner/source-consensus claims in the new phalanges article.
- The terminology section uses named-source comparison or neutral wording rather than an unsupported old-vs-modern trend claim.
- Any materially equivalent vague-source wording discovered in the focused pass is precisely attributed or narrowed.
- The article remains materially useful and beginner-readable.
- No new unsupported palmistry claims are introduced.
- Existing reciprocal navigation and backlog bookkeeping remain bounded and correct.
- Final diff from revision 2 is limited to the focused source-framing correction, any strictly necessary result/PR metadata update, and the revision-3 durable result artifact.

## Verification
- Re-scan the full new article for `modern`, `contemporary`, `some sources`, `most`, `common`, `commonly`, `experienced readers`, `generally`, `typically`, `usually`, `standard`, `consensus`, and equivalent prevalence/source-generalization language; each material occurrence must be named-source-supported or removed/narrowed.
- Re-check the corrected terminology/weighting claims against the approved Benham/Gettings/West evidence already used for this task.
- Run `npm run build`.
- Run `npm run content-audit`.
- Run `npm run audit:all`.
- Run `git diff --check` and inspect the final revision-3 diff for source, SEO, scope, accessibility, and editorial drift.

## v2B durable-result contract — REQUIRED
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-020-r3.json`, commit it on a pushed `claude/relay-PP-RELAY-020-...` branch, and use one terminal result: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 1
- `task_id`: `PP-RELAY-020`
- `revision`: 3
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR number for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `human_action`: exact action only when applicable, otherwise `null`
- `execution`: truthful compact execution telemetry per current Relay contract; do not invent model names, token counts, hidden reasoning, or subagent activity.

For `READY_FOR_REVIEW`, commit the focused remediation plus result artifact, push the existing or one matching `claude/relay-PP-RELAY-020-...` branch, and update/open exactly one PR to `main` with title prefix `[RELAY PP-RELAY-020]` and matching revision-3 Relay footers. Do not open a second competing PR. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and do not create a dummy PR merely to signal completion. Absence of a PR is valid for non-change terminal outcomes.

## Result
Stop after producing the durable revision-3 result, pushing the Relay branch, and ensuring the single PP-RELAY-020 PR reflects revision 3 when the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.
