# Architecture — Palmistry Path

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

Routing: `src/pages/blog/[...slug].astro` → `/blog/<id>/`.

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
- `prerequisites?`
- `relatedArticle?`
- `heroImage?`

Routing: `src/pages/learn/[module]/[lesson].astro` → `/learn/<module>/<lesson>/`.

## Curriculum registry
`src/consts.ts` contains the module registry used by Learn navigation/index pages. The repo currently contains lesson content under:
- `foundations`
- `lines`
- `mounts`
- `advanced`

## Important presentation/source locations
- `src/layouts/BlogPost.astro` — blog article layout and structured data
- `src/components/BaseHead.astro` — shared head/SEO behavior
- `src/components/Header.astro`, `Footer.astro` — global navigation/footer
- `src/components/LessonPath.astro`, `LessonFooter.astro` — learning flow UI
- `src/pages/index.astro` — homepage
- `src/pages/learn/` — curriculum routes
- `src/pages/blog/` — article routes/listing
- `src/pages/glossary.astro` — glossary
- `src/pages/search.astro` — Pagefind search UI
- `src/pages/guide.astro`, `src/pages/guide/thank-you.astro` — lead-magnet flow
- `src/pages/premium-guide.astro` — premium-guide/waitlist page
- `src/styles/global.css` — global styling
- `public/` — static images, downloads, robots/headers, OG assets

## Search/indexing
`npm run build` runs Astro’s static build and Pagefind integration, outputting the built site to `dist/` and Pagefind data under the build output.

The repo includes scripts for:
- internal link audit
- image audit
- structured-data/schema audit
- content audit
- IndexNow dry-run/submission

See `package.json` for canonical command names.

## SEO title coupling
The current content model does not provide a separate SEO-title field. Blog `title` is used broadly for display/headline metadata, so changing it can affect H1/title/schema/breadcrumb behavior. Inspect the relevant layout/head code before altering that model.

## Architecture rule
This document is a map, not a replacement for source inspection. For any change, verify the actual current implementation and use targeted source reads.