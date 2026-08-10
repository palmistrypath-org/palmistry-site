# Palmistry Path Technical Audit - August 2026

Independent engineering audit performed on branch `audit/codex-technical`.

Scope note: this audit intentionally did not read or compare Claude's broader audit report, per the latest user instruction. It also did not modify production files or shared project-state documents.

## Validation Run

- `npm.cmd ci`: passed after sandbox escalation; npm reported 11 vulnerabilities.
- `npm.cmd run build`: passed after disabling Astro telemetry and running outside the filesystem sandbox. Built 94 pages; Pagefind indexed 94 pages.
- `npm.cmd run audit:all`: passed. Link, image, and schema audits reported no broken internal links, no missing images, and valid JSON-LD for 53 blog posts and 22 lessons.
- `npm.cmd run content-audit`: passed for 53 blog posts.
- `npm.cmd audit --omit=dev`: failed with 11 advisories.
- `npm.cmd outdated`: showed semver-compatible updates for Astro packages and newer major versions for Astro/Pagefind.

## Issues

### P1 High - Paid Complete Reference Is Publicly Built And Included In The Sitemap

Evidence: `src/pages/print/complete-reference.astro:2` says the route is used to print the "Complete Palmistry Reference" sold at `/premium-guide/`; `src/pages/premium-guide.astro:318` sells it for `$14`; `dist/sitemap-0.xml` includes `https://palmistrypath.com/print/complete-reference/`. The page has `<meta name="robots" content="noindex">` at `src/pages/print/complete-reference.astro:15`, but it is still publicly accessible and shipped.

Affected file/page: `src/pages/print/complete-reference.astro`, `/print/complete-reference/`, `dist/sitemap-0.xml`.

Impact: The paid reference content is available without purchase. The route also creates an indexability contradiction: a noindex page is submitted in the sitemap.

Recommended direction: Move PDF generation outside public Astro routing, or gate/remove the route from production builds. If it must remain, exclude it from sitemap and Pagefind and add deployment-level blocking, but do not rely on `noindex` as access control.

Confidence: High.

### P1 High - Privacy Policy Contradicts Sitewide AdSense Loading

Evidence: `src/components/BaseHead.astro:32` loads Google AdSense whenever `ADSENSE_PUB_ID` is set; `src/consts.ts:13` sets `ADSENSE_PUB_ID = 'ca-pub-1942922884645361'`. `src/pages/privacy.astro:48` says the site does not use advertising networks or tracking pixels.

Affected file/page: `src/components/BaseHead.astro`, `src/consts.ts`, `/privacy/`, all pages using `BaseHead`.

Impact: Static implementation and public privacy claims disagree. This is a trust, compliance, and consent risk.

Recommended direction: Decide whether ads are active. Either disable AdSense and remove the publisher ID, or update privacy/cookie disclosure and consent behavior to match the actual third-party script loading.

Confidence: High.

### P1 High - Current Locked Dependencies Have Security Advisories

Evidence: `npm.cmd audit --omit=dev` reports 11 vulnerabilities: 1 low, 1 moderate, and 9 high. Advisories include `astro <=7.0.9`, `@astrojs/rss <=4.0.18`, `sharp <0.35.0`, `vite 7.0.0 - 7.3.3`, `esbuild 0.27.3 - 0.28.0`, `postcss <=8.5.22`, `svgo 4.0.0 - 4.0.1`, `devalue 5.6.3 - 5.8.0`, `js-yaml 4.0.0 - 4.3.0`, `nanoid <=3.3.16`, and `fast-xml-builder <=1.1.6`.

Affected file/page: `package.json`, `package-lock.json`, local dev/build toolchain, RSS generation.

Impact: Several advisories are build/dev-server focused, but they still matter for local development and content generation on Windows. RSS/XML and image-processing advisories are closer to production artifact generation.

Recommended direction: Update within current major ranges first (`npm audit fix`), then evaluate major upgrades separately for Astro 7, Pagefind 2, and Sharp 0.35. Re-run build and all audits after any dependency movement.

Confidence: High.

### P2 Medium - Funnel Forms Depend On Fragile Client-Side Fetch

Evidence: `src/pages/guide.astro:503` and `src/pages/premium-guide.astro:446` set native `action="https://app.kit.com/forms/9489555/subscriptions"`, but both pages prevent default submit and replace it with `fetch()` to the same third-party endpoint (`src/pages/guide.astro:541`, `src/pages/premium-guide.astro:493`). The hard-coded Kit form ID appears in both pages.

Affected file/page: `/guide/`, `/premium-guide/`, `src/pages/guide.astro`, `src/pages/premium-guide.astro`.

Impact: If CORS, ad blockers, browser privacy rules, or JavaScript failures interfere with the fetch, the native form fallback is bypassed. The Starter Guide page also offers a direct 25 MB PDF download, so email capture is not technically required for access.

Recommended direction: Prefer native form post with provider-supported redirect, or centralize a tiny progressive-enhancement script that only intercepts when the endpoint behavior is verified. Extract the provider URL/form ID into one config constant.

Confidence: Medium.

### P2 Medium - Sitemap And Indexability Are Too Broad

Evidence: `astro.config.mjs:11` uses sitemap with no filtering. Build output includes `/guide/thank-you/`, `/search/`, `/contact/`, and `/print/complete-reference/` in `dist/sitemap-0.xml`. Only the print route has noindex. `docs/search-console-indexing-checklist.md:204` says no noindex tags should survive on live content pages, but this build contains one.

Affected file/page: `astro.config.mjs`, `/guide/thank-you/`, `/search/`, `/contact/`, `/print/complete-reference/`, `dist/sitemap-0.xml`.

Impact: Search engines are being asked to crawl utility, conversion-completion, placeholder, and noindex content. This dilutes crawl quality and can create avoidable Search Console warnings.

Recommended direction: Add explicit sitemap filtering and document indexability rules. Decide which utility pages should be indexed, noindexed, or excluded from production entirely.

Confidence: High.

### P2 Medium - Content Integrity Checks Are Blog-Heavy And Under-Validate Relationships

Evidence: `scripts/audit-content.mjs` only scans `src/content/blog`. `src/content.config.ts` models `relatedLesson`, `relatedArticle`, and `module` as plain strings. Lesson routes derive URLs from both `lesson.id` and `lesson.data.module` in `src/pages/learn/[module]/[lesson].astro`, so a future mismatch could generate inconsistent paths/navigation.

Affected file/page: `src/content.config.ts`, `scripts/audit-content.mjs`, `src/pages/learn/[module]/[lesson].astro`, content collections.

Impact: Current content passes, but the guardrails do not prove that lesson modules, related lesson/article links, curriculum ordering, or cross-collection references are coherent at source level.

Recommended direction: Add lesson coverage to the content audit and validate enum-like module values plus cross-collection references against actual generated routes.

Confidence: Medium.

### P2 Medium - Raw Public Assets Are Heavy And Not Responsively Optimized

Evidence: public assets are copied directly to `dist`. Largest files include two duplicate 24.7 MB Starter Guide PDFs, `/images/home/path-lines.png` at 2.38 MB, `/images/home/path-foundations.png` at 2.29 MB, `/images/home/path-advanced.png` at 2.07 MB, `/images/home/path-mounts.png` at 1.84 MB, and `/images/home/hero-palm-map.png` at 1.41 MB. The homepage references these as raw `<img src="/images/home/...">` in `src/pages/index.astro:30` and module image constants at `src/pages/index.astro:8`.

Affected file/page: `public/downloads/`, `public/images/home/`, `/`, `src/pages/index.astro`.

Impact: Homepage bandwidth and LCP can suffer, especially on mobile. The duplicate PDFs double repository and deployment artifact weight.

Recommended direction: Compress or generate WebP/AVIF variants for home art, use responsive image markup, and remove or justify duplicate PDF artifacts.

Confidence: High.

### P2 Medium - Keyboard Focus And Touch Targets Are Incomplete

Evidence: `src/styles/global.css` defines link hover styling but no global `:focus-visible` style. Custom controls/buttons across `Header.astro`, `LessonFooter.astro`, `guide.astro`, and `premium-guide.astro` define hover/active states more consistently than focus states. `src/components/LessonPath.astro:135` gives lesson pips a 16px wrapper, below common 24px/44px touch target guidance.

Affected file/page: global navigation, lesson progress controls, forms, CTA buttons.

Impact: Keyboard users may lose visible focus context, and small lesson progress pips are easy to miss on touch devices.

Recommended direction: Add a global focus-visible treatment and review custom interactive elements for minimum target size. Keep the visual design, but make focus and hit areas explicit.

Confidence: Medium.

### P2 Medium - Contact Page Is A Live Placeholder Used By Legal/Privacy Flows

Evidence: `src/pages/contact.astro:76` says "Contact details coming soon." `src/pages/privacy.astro:89` tells users to use the contact page for removal requests, and `src/pages/terms.astro:79` routes corrections there.

Affected file/page: `/contact/`, `/privacy/`, `/terms/`.

Impact: Users have no working path for privacy requests, corrections, or unsubscribe failures despite being directed there by legal pages.

Recommended direction: Add a working contact channel before relying on the page in privacy/legal text, or temporarily remove promises that require contact handling.

Confidence: High.

### P3 Low - Repeated Form And CTA Patterns Should Be Components

Evidence: Kit form markup and JS are duplicated in `src/pages/guide.astro` and `src/pages/premium-guide.astro`. CTA card/button patterns recur in `BlogPost.astro`, `LessonFooter.astro`, guide pages, and premium guide pages.

Affected file/page: `src/pages/guide.astro`, `src/pages/premium-guide.astro`, `src/layouts/BlogPost.astro`, `src/components/LessonFooter.astro`.

Impact: Future changes to provider URLs, copy, button behavior, tracking attributes, or error handling must be repeated by hand.

Recommended direction: Extract a small email signup component/config and consider lightweight CTA/card components where patterns are already stable.

Confidence: Medium.

### P3 Low - Stale Or Placeholder Assets Create Maintenance Noise

Evidence: `src/assets/blog-placeholder-*.jpg` and `src/assets/fonts/atkinson-*.woff` exist but no source references them. `public/images/lessons/mounts/README.md` says the mount SVGs are temporary placeholders.

Affected file/page: `src/assets/`, `public/images/lessons/mounts/`.

Impact: Unused assets increase repo noise and make it harder to distinguish intentional assets from leftovers. The mount placeholder status is documented, so this is not a broken-image issue.

Recommended direction: Remove unused starter assets when convenient and track mount-art replacement as a visual/content task rather than an image-integrity failure.

Confidence: Medium.

## Confirmed Healthy Areas

- Astro static build completes successfully with Astro 6.1.9 once dependencies and sandbox constraints are handled.
- Internal link audit passes across 94 built HTML files.
- Image audit passes for published local image references and OG/Twitter images.
- JSON-LD is valid JSON, and required Article/LearningResource plus BreadcrumbList blocks are present on audited blog/lesson routes.
- Blog content audit passes for required fields, duplicate titles, description length, relatedLesson presence, and accidental short `/blog/<slug>` links.
- Canonicals and OG URLs resolve to `https://palmistrypath.com/...` in sampled built pages.
- Pagefind generates successfully and reports 94 indexed pages.

## Technical Health Summary

The site is a functioning static Astro implementation with useful project-specific audits and broadly healthy generated routing. The biggest technical risks are not ordinary broken links or schema syntax; they are production exposure boundaries, privacy/advertising consistency, dependency health, and asset/funnel robustness.

## Top Technical Risks

1. The paid Complete Reference source route is publicly shipped.
2. Privacy policy claims conflict with the active AdSense script.
3. The dependency tree has active high-severity advisories.
4. Sitemap/indexability rules are implicit and too broad.
5. Email funnel behavior relies on duplicated, fragile client-side fetch code.

## Quick Wins

- Exclude or remove `/print/complete-reference/` from production output and sitemap.
- Align AdSense behavior with privacy disclosure.
- Run a dependency update pass and re-run build/audits.
- Add sitemap filtering for noindex/utility pages.
- Add global `:focus-visible` styling.
- Remove unused `src/assets` starter placeholders.

## Changes That Should NOT Be Made

- Do not treat the passing audits as proof that all SEO/indexability behavior is correct; the sitemap/noindex issue sits outside current audit coverage.
- Do not add recommendations to `ROADMAP.md` automatically; this audit is not approval for implementation.
- Do not rely on `noindex` to protect paid or private content.
- Do not remove the Starter Guide direct download without a product decision; it may be intentional despite weakening email capture.
- Do not perform broad visual redesign as part of fixing technical accessibility or asset issues.

## Discrepancies With Claude's Audit

Not assessed. The latest instruction for this task explicitly said not to read or wait for Claude's audit, so no Claude-claim confirmation, challenge, or refinement was performed.

## Recommended Implementation Order

1. Remove/gate `/print/complete-reference/` from production and fix sitemap/Pagefind exposure.
2. Resolve the AdSense/privacy contradiction.
3. Update vulnerable dependencies and validate with build, audit:all, and content-audit.
4. Add explicit sitemap/indexability policy and tests.
5. Harden Kit form submission and centralize provider config.
6. Compress and responsive-serve large public assets.
7. Add focus-visible and touch-target improvements.
8. Expand content audits to lessons and cross-collection references.
9. Clean stale assets and extract repeated form/CTA components.
