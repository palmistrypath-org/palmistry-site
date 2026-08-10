# Active Task

Status: INACTIVE

## Last completed
Remediation Batch 2B, Source Integrity & Editorial Trust (2026-08-10): added a permanent task startup/local sync rule to `AGENTS.md`; replaced the editorial style guide's source section with a four-tier source policy covering tradition-specific sourcing, quotation integrity, and encyclopaedia handling; removed all commercial astrology blogs, content farms, unsourced blogs, and encyclopaedia attributions from content; gave the Chinese and Indian tradition articles tradition-appropriate sources; corrected the factual claims flagged for verification; corrected the highest-risk unverifiable quotations; and regenerated the About page source list from the actual corpus.

Validation: `npm run build` (93 pages), `npm run audit:all`, `npm run content-audit`, and `git diff --check` all passed. `/about` and the Chinese tradition article were rendered and inspected locally.

A pre-merge correction pass followed on the same branch, after cross-agent review found the batch contradicting its own evidence: the life-line historical framing was corrected across nine content files plus the glossary and print reference, the Chinese and Indian articles were re-audited claim by claim against what Kohn, Smith, Zysk, and Varāhamihira actually support, two Tian/Di/Ren mapping errors were fixed, and the separation of historical description from editorial policy was recorded as a durable rule.

Known open item: 78 author-attributed quotations, concentrated in the mount articles and mount lessons, could not be verified against the primary texts and still carry quotation marks. Inventoried in `source-verification-log.md`, queued in `editorial-backlog.md`. This needs an editorial rewrite pass, not a citation-level fix.

Start the next task by reading `../AGENTS.md`, then this file and `AI_HANDOFF.md`.
