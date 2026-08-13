# Technical Remediation Wave — August 2026

## Work packet

- Base commit: `29214e9ecb4527b3b237b28a6a677e644487dd46`
- Branch: `fix/technical-wave-ux-integrity-performance`
- Scope: accessible 404 recovery, source-level content integrity, and homepage image delivery
- Isolation: implemented in a separate worktree without modifying the concurrent curriculum branch or its owned files

## Objectives and files changed

### 1. Real 404 page

- `src/pages/404.astro`
- `src/indexability.mjs`
- `scripts/audit-indexability.mjs`

Astro now emits `dist/404.html`. The page uses the shared head, header, footer, global tokens, and focus treatment; provides Learn as its primary recovery action plus Search, Starter Guide, and home links; and requires no client-side JavaScript. It includes `noindex, follow`, opts out of Pagefind, and is excluded from the sitemap through the centralized indexability policy. The generated indexability audit understands Astro's special `404.html` output path.

### 2. Blog and lesson content integrity

- `scripts/audit-content.mjs`

Before this wave, `npm run content-audit` checked 53 blog posts only. It now discovers and audits both collections without hard-coded totals: 53 blog posts and 24 lessons at the base commit.

The expanded source-level checks cover:

- required collection frontmatter
- duplicate titles within each collection
- the 170-character description target
- lesson module/directory agreement
- positive integer and module-unique lesson orders
- valid lesson difficulty values
- positive lesson durations
- duplicate generated collection routes
- blog `relatedLesson` resolution to an actual lesson route
- non-empty lesson `relatedArticle` resolution to an actual blog route
- the existing malformed short blog-link check

Two blank optional `relatedArticle` values and four lesson descriptions above the blog SEO target are reported as non-blocking legacy warnings. Curriculum files were not edited. All route, ordering, module, difficulty, duration, required-field, duplicate, and non-empty relationship failures remain blocking.

### 3. Homepage image delivery

- `src/pages/index.astro`
- `scripts/audit-images.mjs`
- `public/images/home/hero-palm-map.webp`
- `public/images/home/path-foundations.webp`
- `public/images/home/path-lines.webp`
- `public/images/home/path-mounts.webp`
- `public/images/home/path-advanced.webp`
- Removed the five superseded PNG files with the same base names

Sharp generated WebP assets at quality 84 and effort 6. The hero remains 1672×941, eager, and high fetch priority. The below-the-fold module art is 640×640 with explicit intrinsic dimensions, lazy loading, and asynchronous decoding. Source and built-output searches confirmed the deleted PNGs were not used by OG/social metadata or any other runtime page.

The image audit now fails only when a raster under `/images/home/` is actually referenced by the built homepage and exceeds 500 KiB. It does not impose a broad repository or download-size policy.

## Homepage asset measurements

| Asset | Before (PNG bytes) | After (WebP bytes) | Reduction |
|---|---:|---:|---:|
| `hero-palm-map` | 1,481,885 | 86,664 | 94.15% |
| `path-advanced` | 2,171,426 | 44,568 | 97.95% |
| `path-foundations` | 2,401,999 | 51,526 | 97.85% |
| `path-lines` | 2,498,268 | 39,884 | 98.40% |
| `path-mounts` | 1,931,503 | 42,858 | 97.78% |
| **Total** | **10,485,081** | **265,500** | **97.47%** |

Absolute reduction: **10,219,581 bytes**.

The generated images were inspected directly. Pixel comparisons against the original PNGs (with originals resized to the new card dimensions) produced PSNR values from 35.43 dB to 39.34 dB, consistent with preserving apparent quality for their darkened/overlaid homepage presentation.

## Validation

- `npm run build` — passed; 96 pages built, including `dist/404.html`
- `npm run audit:all` — passed
- `npm run content-audit` — passed for 53 blog posts and 24 lessons, with six documented legacy warnings
- `git diff --check` — passed
- Generated 404 HTML — verified `noindex, follow`, one `main#main-content`, Pagefind opt-out, and no sitemap entry
- Generated homepage HTML — verified all five WebP references, hero high-priority/eager behavior, four lazy module images, and corresponding static files
- Image audit — verified no missing assets and all referenced homepage rasters below 500 KiB

## Audit findings addressed

This wave closes the implementation work for these findings in `TECHNICAL_AUDIT_2026-08.md`:

- **P2 Medium — Content Integrity Checks Are Blog-Heavy And Under-Validate Relationships**
- **P2 Medium — Raw Public Assets Are Heavy And Not Responsively Optimized** (homepage image portion only; public PDFs were explicitly out of scope)

The 404 objective was assigned in this work packet but was not a separately enumerated finding in that audit document.

## Unresolved issues and verification boundaries

- Four existing lesson descriptions remain above the 170-character SEO target, and two optional `relatedArticle` values remain blank; the audit reports all six without blocking current main.
- The in-app browser blocked both the local preview URL and `file://` output under its security policy, so route-level screenshot review could not be completed. Generated HTML, responsive CSS, accessibility assertions, and the optimized image files were inspected instead.
- Live host behavior is not verified until deployment. Astro emits the conventional root `404.html`; the host must continue serving that file for unmatched routes with an HTTP 404 response.
- Canonical shared state documents were intentionally not edited because they are owned by the concurrent curriculum wave. ChatGPT should reconcile them after both branches are reviewed.
