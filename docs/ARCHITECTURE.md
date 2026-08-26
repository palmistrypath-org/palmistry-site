# Architecture - Palmistry Path

## Runtime/stack
- Astro 6, static output
- Node `>=22.12.0`
- Markdown/MDX content collections
- `astro-pagefind` search generated during build
- `@astrojs/sitemap`
- `@astrojs/mdx`
- `sharp`
- Cloudflare Pages is the documented hosting target

`astro.config.mjs` sets the canonical site to `https://palmistrypath.com` and configures MDX, sitemap, Pagefind, and Google-hosted Cinzel/Lora fonts.

Indexability rules are centralized in `src/indexability.mjs`. The sitemap integration filters private/noindex utility routes through that policy, and Pagefind indexes `main:not([data-pagefind-ignore])` so pages with ignored main content are not searchable.

## Content collections
Defined in `src/content.config.ts`.

### `blog`
Source: `src/content/blog/**/*.{md,mdx}`

Current schema:
- `title`
- `description`
- `pubDate`
- `updatedDate?`
- `heroImage?`
- `relatedLesson?`
- `cluster?`
- `affiliate?`

Routing: `src/pages/blog/[...slug].astro` -> `/blog/<id>/`.

### `lessons`
Source: `src/content/lessons/**/*.{md,mdx}`

Current schema:
- `title`
- `description`
- `module`
- `moduleTitle`
- `order`
- `pubDate`
- `difficulty` (`beginner | intermediate | advanced`)
- `duration`
- `relatedArticle?`
- `heroImage?`

Routing: `src/pages/learn/[module]/[lesson].astro` -> `/learn/<module>/<lesson>/`.

## Curriculum registry
`src/consts.ts` contains the module registry used by Learn navigation/index pages. The repo currently contains lesson content under:
- `foundations`
- `lines`
- `mounts`
- `advanced`

## Important presentation/source locations
- `src/layouts/BlogPost.astro` - blog article layout and structured data
- `src/components/BaseHead.astro` - shared head/SEO behavior
- `src/components/Header.astro`, `Footer.astro` - global navigation/footer
- `src/components/EditorialHero.astro`, `src/data/visuals.ts` - reusable article/category hero layout and centralized visual mapping
- `src/components/PalmDiagram.astro` - Diagram A renderer with real HTML/CSS labels, numbered mount markers, and dynamic mount overlays
- `src/components/LessonPath.astro`, `LessonFooter.astro` - learning flow UI
- `src/pages/index.astro` - homepage
- `src/pages/learn/` - curriculum routes
- `src/pages/blog/` - article routes/listing
- `src/pages/glossary.astro` - glossary
- `src/pages/search.astro` - Pagefind search UI
- `src/pages/guide.astro`, `src/pages/guide/thank-you.astro` - lead-magnet flow
- `src/pages/premium-guide.astro` - premium-guide/waitlist page
- `src/private/print/complete-reference.astro` - preserved Complete Reference PDF source, intentionally outside public routing
- `src/styles/global.css` - global styling
- `public/` - static images, downloads, robots/headers, OG assets; optimized Editorial Mystic production assets live under `public/images/editorial-mystic/`

High-resolution Claude/Higgsfield inputs remain in a local Git-ignored `visual-production/` source pack. Only reviewed, optimized derivatives belong in public site paths; see `docs/visual-system.md` for the asset workflow.

## Search/indexing
`npm run build` runs Astro's static build and Pagefind integration, outputting the built site to `dist/` and Pagefind data under the build output.

Current indexability policy:
- Public content and legal pages remain accessible and sitemap-eligible unless explicitly listed otherwise.
- `/guide/thank-you/`, `/search/`, and the placeholder `/contact/` are public utility routes but use `noindex, follow`, are excluded from sitemap, and opt out of Pagefind.
- `/print/complete-reference/` is private paid-product generation content and must not be emitted as a production route.

The repo includes scripts for:
- internal link audit
- image audit
- structured-data/schema audit
- trust/indexability audit
- focused accessibility audit for skip-link/main-target and prompt-like lesson Figure alt regressions
- content audit
- IndexNow dry-run/submission

See `package.json` for canonical command names.

## Accessibility baseline
The global header emits a skip link to `#main-content`. Public pages and layouts that use the header are expected to expose exactly one `<main id="main-content" tabindex="-1">` target. Shared focus indication lives in `src/styles/global.css` using `:focus-visible`; component-level styles should not suppress visible focus without replacing it.

## SEO title coupling
The current content model does not provide a separate SEO-title field. Blog `title` is used broadly for display/headline metadata, so changing it can affect H1/title/schema/breadcrumb behavior. Inspect the relevant layout/head code before altering that model.

## CI
`.github/workflows/ci.yml` (added 2026-08-16, Relay PP-RELAY-002) checks out the repo, installs Node from `package-lock.json` with `npm ci`, then runs `npm run build`, `npm run content-audit`, and `npm run audit:all` on pull requests to `main` and pushes to `main`. It is read-only permissions and cancels superseded runs per PR/ref. `.github/workflows/relay-dispatch.yml` is a separate, unmodified workflow that only fires the Relay routine on `.ai-ops/state.json` pushes to `main`.

## Architecture rule
This document is a map, not a replacement for source inspection. For any change, verify the actual current implementation and use targeted source reads.
