# Roadmap - Palmistry Path

## Status
No single active product-development priority is recorded in the canonical operating docs yet. `docs/ACTIVE_TASK.md` carries immediate execution state.

## Product direction
The durable sequence remains:
1. Maintain and improve trustworthy content.
2. Strengthen the structured learning path and discovery/navigation around that content.
3. Add useful interactivity only when supported by the curriculum/content base.
4. Expand monetization deliberately without weakening trust.

## Recently completed approved work
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
