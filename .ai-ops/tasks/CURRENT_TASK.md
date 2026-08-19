# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-020

## Revision
2

## Revision history
- Revision 1 produced PR #35 and a source-supported article overall.
- Director review found a narrow source-policy defect: the draft contains unverified prevalence/consensus statements, including claims that "most hands" show a certain phalange pattern, that "most experienced readers" combine length and padding in a particular way, and that older "world" terminology has fallen out of common use in contemporary practice. The task packet explicitly forbids invented prevalence/consensus claims. Revision 2 must correct only this source-framing defect and preserve the otherwise bounded article/backlog work.

## Objective
Finish the already-prioritized beginner article **“Phalanges in Palmistry: What the Three Finger Sections Reveal”** at `src/content/blog/beginner/phalanges-palmistry.md`, preserving the approved Western-source framework while removing or explicitly sourcing every unsupported prevalence, frequency, or practitioner-consensus claim identified in Director review.

## Authorized revision-2 scope
1. Start from the current PP-RELAY-020 PR #35 work; do not redesign or broadly rewrite the article.
2. Remove, narrow, or explicitly attribute statements that assert prevalence, frequency, common practitioner behavior, or modern consensus without verified Tier 1/2 support. At minimum review and correct:
   - "Most hands do not show one phalange overwhelmingly dominant..." / "It is common to find..."
   - "In practice, most experienced readers look at both together..."
   - the claim that older "world" terminology "has fallen out of common use in contemporary practice"
   - any nearby equivalent claim discovered during the same focused pass.
3. Prefer neutral observation instructions or source-specific attribution over replacing these statements with new generalizations.
4. Preserve the article's observable-anatomy-first framing, Western-tradition scope, Benham/Gettings/West paraphrase approach, reciprocal link with `finger-shapes-palmistry.md`, and the already-correct backlog reconciliation for the forked-head-line item.
5. Do not add quotations from Gettings/West/Fincham unless exact wording is independently verified from the cited edition. Paraphrase is preferred.
6. Do not add new per-finger × per-phalange interpretations, prevalence claims, consensus claims, health/financial/relationship predictions, or cross-tradition universality claims.
7. Keep existing canonical-doc updates accurate; edit them only if necessary to reflect the corrected wording/result.

## Editorial/source guardrails
- Never invent palmistry meanings, quotations, prevalence claims, consensus, source attributions, or historical claims.
- Quotation marks require verified verbatim wording from the cited edition.
- Traditional phalange associations must remain clearly framed as Western palmistry convention, not scientifically demonstrated personality or destiny.
- Where source evidence supports only one named author's treatment, attribute it to that author rather than generalizing to practitioners or palmistry as a whole.
- If a material claim cannot be grounded in approved evidence, delete or narrow it rather than fill the gap from low-tier web material or intuition.

## Acceptance criteria
- PR #35 no longer contains unsupported prevalence/frequency/practitioner-consensus claims in the new phalanges article.
- The article remains materially useful and beginner-readable after those narrow corrections.
- No new unsupported palmistry claims are introduced.
- Existing reciprocal navigation and backlog bookkeeping remain bounded and correct.
- Final diff from revision 1 is limited to the focused source-framing correction, any strictly necessary doc/result update, and the revision-2 durable result artifact.

## Verification
- Re-scan the full new article for words/phrases such as `most`, `common`, `commonly`, `experienced readers`, `contemporary practice`, `generally`, `typically`, `usually`, `standard`, `consensus`, and equivalent prevalence language; each material occurrence must be either source-supported/attributed or removed/narrowed.
- Re-check each material phalange interpretation against approved source evidence already used for this task.
- Run `npm run build`.
- Run `npm run content-audit`.
- Run `npm run audit:all`.
- Run `git diff --check` and inspect the final diff for source, SEO, scope, accessibility, and editorial drift.

## v2B durable-result contract — REQUIRED
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-020-r2.json`, commit it on a pushed `claude/relay-PP-RELAY-020-...` branch, and use one terminal result: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 1
- `task_id`: `PP-RELAY-020`
- `revision`: 2
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR number for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `human_action`: exact action only when applicable, otherwise `null`
- `execution`: truthful compact execution telemetry per current Relay contract; do not invent model names, token counts, hidden reasoning, or subagent activity.

For `READY_FOR_REVIEW`, commit the focused remediation plus result artifact, push the existing or one matching `claude/relay-PP-RELAY-020-...` branch, and update/open exactly one PR to `main` with title prefix `[RELAY PP-RELAY-020]` and matching revision-2 Relay footers. Do not open a second competing PR. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and do not create a dummy PR merely to signal completion. Absence of a PR is valid for non-change terminal outcomes.

## Result
Stop after producing the durable revision-2 result, pushing the Relay branch, and ensuring the single PP-RELAY-020 PR reflects revision 2 when the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.
