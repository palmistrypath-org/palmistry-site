# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-058

## Revision
1

## Risk Class
SOURCE_SENSITIVE

## Objective
Create the next approved scored backlog article, **Rascettes (Bracelet Lines) in Palmistry**, using a tightly bounded evidence-first treatment that explains what the wrist lines are and how a verified classical source historically treated them without presenting palmistry as medical or lifespan prediction.

## Director-verified evidence boundary
Read `.ai-ops/evidence/PP-RELAY-058-benham-rascettes-boundary.md` before drafting. It records the verified William G. Benham (1900) boundary for this task.

The backlog's older West (1998)/Fincham (2005) planning note is a discovery lead only and is **not** approved evidence for this task unless independently verified under repository source policy.

## Authorized scope
- Create one article at the appropriate existing blog collection path for slug `rascettes-palmistry`.
- Cover the observable identification of Rascettes/Bracelets at the wrist and the narrow Benham historical boundary recorded in the Director evidence note.
- It is acceptable—and preferred—to explain that older palmists used lifespan arithmetic while Benham explicitly said he could not confirm it and did not use the bracelets as a longevity measure.
- Historical constitution wording may be described only as Benham's period palmistry interpretation and must be clearly separated from Palmistry Path's safety/editorial position that wrist creases do not diagnose health or predict lifespan.
- A brief historical note about Benham's upward-branch/ambition reading may be retained if attributed specifically to him and not generalized into consensus.
- Add directly useful contextual links to the existing Minor Lines/advanced learning cluster when naturally appropriate, without inventing relationships.
- Update the scored backlog row/details to published only if the article is actually created and accepted-ready.
- Update `docs/source-verification-log.md`, `docs/CHANGELOG.md`, and normal current-state/backlog bookkeeping only as directly required by repository convention.
- Include `.ai-ops/results/PP-RELAY-058-r1.json`.

## Prohibited scope / source-safety requirements
- No medical diagnosis, vitality/constitution claim presented as fact, reproductive/gynecological claim, disease warning, pregnancy/childbirth prediction, or health advice derived from wrist lines.
- No lifespan prediction or per-bracelet age arithmetic presented as valid. If the old arithmetic is mentioned, preserve Benham's explicit rejection/non-use of it.
- No unsupported claim that three bracelets are normal/common/ideal, that most people have a certain number, or other prevalence/statistical claim.
- No automatic first/second/third bracelet = health/wealth/happiness scheme unless independently verified in an approved source and carefully historically attributed.
- Do not use West (1998), Fincham (2005), modern commercial/SEO pages, or anonymous practitioner consensus as citation authority without independent approved-source verification.
- Do not synthesize Rascette meanings with Life Line, mounts, travel lines, hand types, or other features unless the specific combined reading is independently verified and authorized.
- No vague authority such as "modern palmists," "most readers," "the tradition," or equivalent without named approved evidence.
- No exact geometry, count norm, or stronger-with-degree rule beyond what the verified source actually establishes.

## Required v2C source preflight
Before `READY_FOR_REVIEW`:
1. Run `npm run audit:claim-risk -- <new article path>` and manually disposition every finding.
2. Verify every historical claim against `.ai-ops/evidence/PP-RELAY-058-benham-rascettes-boundary.md` or another independently verified approved source logged during this task.
3. Check specifically for unsupported prevalence/consensus, medical/health/lifespan overstatement, invented combinations, vague authority, and stronger-with-degree extrapolation.
4. Keep direct observation, Benham's historical interpretation, and Palmistry Path editorial/safety guidance visibly distinct.
5. Quotation marks may be used only for wording already verified verbatim from the cited edition; otherwise paraphrase.

The durable result must contain `risk_class: "SOURCE_SENSITIVE"` and a truthful completed `source_preflight` object for `READY_FOR_REVIEW`.

## Acceptance criteria
- one useful, reader-facing `rascettes-palmistry` article exists and fits current article conventions;
- observable identification and historical interpretation stay inside verified source evidence;
- no medical/lifespan prediction or unsupported prevalence/consensus claim appears;
- Benham's rejection/non-use of lifespan arithmetic is represented accurately if that historical method is discussed;
- no invented combinations or unsupported West/Fincham claims are introduced;
- internal links and related lesson are appropriate and non-speculative;
- backlog/source-verification/changelog bookkeeping is accurate;
- `npm run build`, `npm run content-audit`, relevant audits, and `git diff --check` pass as required by `AGENTS.md` for the files changed;
- no scope drift.

## Explicit no-change / human-gate condition
`NO_CHANGE` is not expected because the backlog currently shows this article as outstanding and no published `rascettes-palmistry` article exists. Return `HUMAN_REQUIRED` rather than inventing content only if the Director evidence note proves insufficient for a useful source-safe article and the missing evidence cannot be resolved from approved repository-held sources.

## Durable result contract
Every worker run that passes startup must write `.ai-ops/results/PP-RELAY-058-r1.json` on a pushed `claude/relay-PP-RELAY-058-...` branch before stopping.

Allowed terminal results:
- `READY_FOR_REVIEW`
- `NO_CHANGE`
- `BLOCKED`
- `HUMAN_REQUIRED`
- `PAUSED_USAGE_LIMIT`

For `READY_FOR_REVIEW`, commit the authorized article/docs plus result artifact, push exactly one matching Relay branch, and open exactly one PR to `main` with standard Relay footers for PP-RELAY-058 revision 1. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the result branch containing the artifact and normally do not create a dummy PR.

The result artifact must include `schema_version: 2`, `task_id: "PP-RELAY-058"`, `revision: 1`, `risk_class: "SOURCE_SENSITIVE"`, terminal `result`, concise summary and verification, truthful source-preflight data, execution telemetry, and `human_action` only when a genuine unresolved gate remains.

## Stop condition
After producing the durable terminal result and PR when applicable, stop. Do not merge, choose another task, or broaden scope.