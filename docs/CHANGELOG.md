# Changelog - Palmistry Path

Meaningful project-state changes only; Git history remains the detailed implementation record.

## 2026-08-10 - Remediation Batch 2B source integrity and editorial trust
- Added a permanent task startup/local sync procedure to `AGENTS.md` so agents fetch, update `main`, and branch without manual user intervention.
- Replaced the editorial style guide's source section with a four-tier source policy, plus rules for tradition-specific sourcing, quotation integrity, and encyclopaedia handling. Removed the prior allowance for citing commercial astrology sites.
- Removed every commercial astrology blog, SEO content farm, and unsourced blog from citations and body prose across nine articles, and deleted the editorial vouching for a commercial palmistry blogger.
- Replaced Wikipedia and Britannica body-prose attributions with the underlying sources they summarise.
- Gave the Chinese and Indian tradition articles tradition-appropriate sourcing (Kohn 1986, Smith 1991, Zysk 2016, Varāhamihira), corrected `san cai` from "Taoist" to classical Chinese cosmology, removed the Vedic-scripture framing, and marked the modern Hindi *rekha* names and the Heaven/Human/Earth mapping as contemporary practice rather than classical doctrine.
- Corrected or qualified factual claims that failed verification: Romani arrival dating, the caduceus, simian line prevalence, "every inhabited continent", the *ekāgratā* attribution, and Cheiro biography inconsistencies.
- Verified 92 author-attributed quotations against the public-domain primary texts; corrected the highest-risk failures, including the life-line lifespan quotation used in five places and the claim that Cheiro and Benham read life-line breaks as transition markers.
- Regenerated the About page source list from the corpus the site actually cites.
- Added `docs/source-verification-log.md` as the durable record of what was verified and what remains open.

## 2026-08-10 - Remediation Batch 2A accessibility and UX safety
- Added global skip-to-main navigation and a shared `:focus-visible` treatment.
- Added reliable `main#main-content` targets across public layouts/pages.
- Improved muted-text contrast by reducing opacity stacking in shared navigation, footer, lesson, blog, guide, and waitlist surfaces.
- Replaced Lines lesson Figure prompt-style alt text with learner-facing descriptions.
- Increased practical lesson-path and header navigation target sizes while preserving the visual design.
- Added visible email labels, described-by relationships, and live/status semantics to the Starter Guide and Complete Reference waitlist forms.
- Added browse fallback content on `/search/` and changed `/learn/` module card titles from paragraphs to headings.
- Added a focused accessibility audit for skip-link/main-target and prompt-like Figure alt regressions.

## 2026-08-10 - Remediation Batch 1 trust and technical safety
- Put the Complete Reference into waitlist-only state and removed the dead paid checkout URL from user-facing flows.
- Preserved the Complete Reference PDF source outside public Astro routing so `/print/complete-reference/` is no longer emitted.
- Temporarily disabled AdSense by leaving the publisher ID empty.
- Added centralized sitemap/Pagefind/noindex policy for private and utility routes.
- Added a generated-output audit for private route exposure, sitemap/Pagefind exclusions, AdSense script emission, and the dead Gumroad checkout URL.
- Applied conservative dependency remediation with `npm audit fix`; remaining advisories require a breaking Astro/sharp upgrade path.

## 2026-08-09 - Agent operating-system migration
- Added shared `AGENTS.md` workflow with progressive disclosure, Git safety, risk-based validation, active-task memory, definition of done, and cross-agent review rules.
- Reworked `CLAUDE.md` around Opus/Sonnet/Haiku routing, Codex independent review, token discipline, and `/clear`/`/compact` boundaries while preserving the established article approval workflow.
- Replaced monolithic `PROJECT.md` startup behavior with a compatibility pointer.
- Added canonical wiki pages for product vision, current state, architecture, roadmap, decisions, ideas, handoff, and active task.
- Preserved existing specialized editorial, SEO, email, visual, launch, and worksheet documents as targeted references.
- Replaced the Astro starter README with a Palmistry Path-specific project README.

No runtime/site behavior was intentionally changed by this migration.
