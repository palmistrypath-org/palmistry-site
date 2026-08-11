# Active Task

Status: INACTIVE

## Last completed
Remediation Batch 2C, Quotation Integrity (2026-08-11), on branch
`fix/quotation-integrity-batch-2c`. Closed the 78-item quotation backlog left by
Batch 2B. Re-inventoried from source rather than from the stale line numbers:
245 quotation-marked passages inside paragraphs naming Cheiro or Benham, of
which 162 were genuine attributions. 55 were already exact; 107 were corrected;
none remain unverified. Beyond wording, corrected five attributions carrying
claims the sources do not make (the Mercury line's absence, the Sun line's
absence, the fate line from Luna, Benham on "union" versus "affection", and
"writer's fork"), one wrong work (Cheiro on Mars is in *Language of the Hand*),
and one of Batch 2B's own replacement quotations, which came from a reader's
letter printed in Cheiro's book rather than from Cheiro.

Validation: `npm run build` (93 pages), `npm run audit:all`,
`npm run content-audit`, and `git diff --check` all passed. A final repository
sweep reconciles against the verification log with zero unresolved
Cheiro/Benham attributions.

Durable record: `source-verification-log.md` (Batch 2C section) carries the
per-file disposition. The new rule from this batch is in `DECISIONS.md`
(2026-08-11): a quotation is verified only when the source is saying it about
the feature the article attributes it to.

Known open item: 20 quotations attributed to Gettings, West, and Fincham remain
unverifiable — the editions are in copyright. Flagged in `editorial-backlog.md`.

Start the next task by reading `../AGENTS.md`, then this file and `AI_HANDOFF.md`.
