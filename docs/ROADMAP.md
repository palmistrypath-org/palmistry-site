# Roadmap - Palmistry Path

## Status
No single active product-development priority is recorded in the canonical operating docs yet. `docs/ACTIVE_TASK.md` carries immediate execution state.

## Product direction
The durable sequence remains:
1. Maintain and improve trustworthy content.
2. Strengthen the structured learning path and discovery/navigation around that content.
3. Add useful interactivity only when supported by the curriculum/content base.
4. Expand monetization deliberately without weakening trust.

## Approved SEO/content-growth direction — 2026-08-18

Palmistry Path should deliberately operate with **two complementary content tracks** rather than relying on curriculum pages alone:

1. **Curriculum content** — teach palmistry in the logical order a learner should study it.
2. **Search-intent content** — answer the specific questions people already type into search engines, then route those visitors into the structured learning path.

The intended funnel is:

`specific search question → complete standalone answer → related underlying concept/lesson → next learning step → Starter Guide/email → future paid resource`

This search-intent expansion is an approved strategic direction, not a replacement for the curriculum. It should preserve Palmistry Path's existing educational/trust positioning and avoid deterministic fortune-telling claims.

### Competitor-informed topic expansion

Use successful palmistry sites such as Fun Channel as **pattern evidence**, not as content to copy. Periodically run content-gap audits across multiple ranking palmistry sites and compare their topic coverage with Palmistry Path's existing articles/lessons before commissioning new content.

Prioritize specific-question and high-interest clusters where search intent is clear, including:

- **Beginner questions:** which hand to read; active vs. passive/dominant hand; whether palm lines change; how to read your own palm; what it means to have many/few lines.
- **Money, success, and luck:** money line/triangle; traditional wealth indicators; success/Sun-line variations; lucky signs; crosses/stars/triangles associated with success in named traditions.
- **Relationships:** marriage/relationship-line variations; multiple, broken, forked, or absent lines; traditional interpretations of relationship timing, delay, separation, or divorce signs, framed non-deterministically.
- **Rare/unusual markings:** Mystic Cross, letter X, stars, islands, squares, triangles, crosses, rare combinations, and other visually identifiable markings.
- **Line variations and absences:** broken, forked, chained, doubled, absent, islanded, or otherwise distinctive forms where the search intent is meaningfully different from the parent line topic.
- **Highly visual questions:** location/identification pages such as where a money triangle or specific sign appears and how to distinguish it from similar markings.

Do **not** create one thin page for every keyword variation. Cluster related queries where intent overlaps; create a dedicated article only when the query represents a distinct user question and can support a complete, useful answer. Continue following the cannibalization rules in `docs/seo-content-roadmap.md`.

### Original visual-example strategy

Treat instructional visuals as an SEO/content asset, not merely decoration. Expand toward original or licensed example palms with clear annotations showing exactly where lines, forks, triangles, crosses, mounts, or other markings appear. Where real-person examples are used, frame interpretations as traditional/educational examples rather than factual predictions about that person.

The visual roadmap should increasingly support high-intent question pages with diagrams or annotated examples that are difficult for generic text-only competitors to reproduce.

### Measurement and traffic milestones

Use organic traffic milestones as validation gates rather than guarantees:

- **5,000 organic visits/month:** initial meaningful SEO validation.
- **15,000 organic visits/month:** primary Phase 1 traffic target; considered realistic if the long-tail content library earns broad rankings.
- **30,000 organic visits/month:** strong topical-authority outcome.
- **50,000+ total visits/month:** longer-term target likely supported by a mix of SEO, returning/direct traffic, email, and potentially visual/video distribution.

As Search Console accumulates enough real query data, prefer Palmistry Path's first-party impressions, rankings, CTR, and clicks over third-party competitor estimates. Use that data to expand pages/queries Google is already rewarding and to revise traffic/revenue assumptions.

### Relationship to the existing SEO plan

`docs/seo-content-roadmap.md` remains the detailed working SEO plan. It already contains many compatible opportunities (which-hand, line variations, M-line, signs/markings, internal-link clusters, worksheets, and an eventual annotated-example library). Future SEO-roadmap revisions should reconcile that backlog with this approved two-track strategy and the latest content-gap research rather than blindly executing an older dated list.

## Recently completed approved work
2026-08-18 (Relay PP-RELAY-014, documentation reconciliation): The curriculum reached the approved 25-lesson target on 2026-08-18 when Relay PP-RELAY-008 added *Combining What You See* as the Advanced module's fifth lesson. Relay PP-RELAY-009 through PP-RELAY-012 (2026-08-18) then shipped the `<Practice>` closing-exercise wrapper across Foundations, Lines, Mounts, and three of Advanced's six lessons, and the end-of-module `<Checkpoint>` component across Foundations, Lines, and Mounts. Remaining 3F scope is narrower than the two entries below describe: only the capstone body revision (the second worked reading) is still outstanding. The Sun/Mercury quote-fidelity rewrite in `advanced/01-minor-lines-overview.mdx` is separate unresolved 3E work, not 3F. See `CURRENT_STATE.md` and `CHANGELOG.md` for full detail; the two entries immediately below predate this rollout.

2026-08-17 (Relay PP-RELAY-005): Replayed the approved Batch 3E Simian Line module move onto current `main` — moved from the Lines module to Advanced (Minor Lines & Synthesis) as its fourth lesson, with the old URL preserved through a noindex redirect stub. The Sun/Mercury quote-fidelity rewrite and 3F synthesis/practice work remain outstanding.

2026-08-13 (merged 2026-08-13, PR #12): Technical Remediation Wave added an accessible custom 404 page, expanded `content-audit` to validate both the blog and lessons collections with cross-collection route checks, and converted the five homepage path/hero images from PNG to WebP (~97% byte reduction). No curriculum or content changes. See `docs/audits/TECHNICAL_REMEDIATION_WAVE_2026-08.md`.

2026-08-13: Remediation Batch 3D added *The Thumb and the Fingers* as the fourth Foundations lesson and retitled the hand-shape lesson *Hand Shape, Texture, and Flexibility*, folding skin texture, consistency, and whole-hand flexibility into it as a separate qualifying layer. The core curriculum is now 24 lessons and Foundations has 5. All existing lesson URLs were preserved. One of the approved 25-lesson additions remains outstanding: *Combining What You See* (3F). The batch also adopted the feature-branch review gate recorded in `AGENTS.md`.

2026-08-11: Remediation Batch 3C added *Line Quality and Markings* as the first lesson of the Lines module, taking the core curriculum to 23 lessons and the Lines module to 7. The line-quality vocabulary previously re-derived in four separate lesson files is now taught once and applied thereafter. All existing lesson URLs were preserved. Two of the approved 25-lesson additions remain outstanding.

2026-08-11: Remediation Batch 3B made module labelling truthful, published the seven-mounts/eight-regions model sitewide, corrected the simian lesson's source framing, and removed the decorative `prerequisites` field.

2026-08-10: Remediation Batch 2A added the sitewide accessibility baseline: skip navigation, shared keyboard focus indication, safer text contrast, larger practical compact targets, form/search accessibility improvements, learner-facing lesson Figure alt text, and a focused regression audit.

2026-08-10: Remediation Batch 1 moved the Complete Reference to waitlist-only, removed public paid-reference route exposure, disabled AdSense temporarily, established explicit utility/private indexability rules, and added guardrails for those trust/technical safety boundaries.

## Existing planning sources
These contain detailed candidate work and historical planning. They are not automatically the current approved backlog; read only when relevant and reconcile with current implementation/user direction.

- `editorial-backlog.md` - article/editorial candidates
- `seo-content-roadmap.md` - SEO/content planning
- `visual-assets-roadmap.md` - visual asset work
- `email-and-lead-magnet-roadmap.md` - email/lead magnet planning
- `worksheet-pack-spec.md` - worksheet/product concept
- `search-console-indexing-checklist.md` - indexing tasks
- `post-launch-monitoring-plan.md` - post-launch monitoring
- `pre-launch-audit.md` - historical/pre-launch quality checklist
- `mount-diagram-creative-briefs.md` - mount illustration briefs

## Long-term directions, not approved tasks
Potential future features include interactive hand maps, observation/practice exercises, glossary cross-linking, reading journals, progress tracking, paid guides/courses, and possible membership. Do not build these merely because they appear here or in older planning docs.

## Roadmap maintenance
When the user chooses a next milestone, record it here at a high level and use `ACTIVE_TASK.md` for the immediate execution state. Detailed domain plans may remain in their specialized docs.
