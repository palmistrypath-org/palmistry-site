# Theme Migration Plan — Dark → "Editorial Mystic"

*Last updated: 2026-08-26.*

**Status: scoping only. No implementation has started.** This document inventories what a migration from the current dark theme to the new "Editorial Mystic" light palette would touch, assesses risk, and proposes a sequencing plan. It does not authorize the work.

New palette (locked by product):

| Role | Value |
|---|---|
| Background (ivory/parchment) | `#F2E8D5` |
| Accent (muted teal) | `#5F8A91` |
| Secondary accent (warm sand) | `#C7B299` |
| Text (charcoal) | `#2B2B2B` |
| Restrained gold (sparingly) | `#D4AF37` |

Current palette being replaced: background `#0d0a1a` (near-black purple), accent `#c9a96e` (amber gold). See `docs/visual-assets-roadmap.md` for prior context on the dark palette and lesson-diagram asset status.

---

## 1. Token architecture: partially centralized, mostly not

`src/styles/global.css` defines CSS custom properties in `:root`:

```
--accent: #c9a96e;
--accent-light: #e0c07e;
--focus-ring: #f0cf86;
--color-bg: #0d0a1a;
--color-header-bg: #08060f;
--color-text: #e2d9c5;
--color-heading: #e8e0d0;
--color-text-muted: #b2aacb;
--color-nav-text: #c9b99a;
--color-nav-hover: #c9a96e;
```

These tokens exist, but **coverage is low in practice**. Two problems:

- **Even `global.css` bypasses its own tokens**: `html { background-color: #0d0a1a; }` (line 18) and the `--box-shadow` value hardcode raw colors instead of referencing `--color-bg`.
- **Every page and component that needs the accent color at partial opacity hardcodes the RGB triplet directly** as `rgba(201, 169, 110, X)` — there's no `--accent-rgb` token to build alpha variants from. Same pattern for the background color as `rgba(13, 10, 26, X)`.

This means the "just repoint the custom properties" approach only fixes a fraction of the surface. The rest requires a token pass first (see §4).

---

## 2. Full inventory

Grepping only for the literal hex strings `0d0a1a` / `c9a96e` (as the task brief suggested) undercounts the surface by roughly 3x, because most usages are the RGB-triplet form inside `rgba(...)` for borders/shadows/overlays, not the hex form. Full inventory, matching `0d0a1a`, `c9a96e`, `rgba(201, 169, 110, ...)`, and `rgba(13, 10, 26, ...)`:

**37 files total.**

### Centralized definition
- `src/styles/global.css` — token source + 2 bypasses noted above.

### Components (7 files, all via hardcoded `rgba(201, 169, 110, …)`)
`src/components/LessonPath.astro`, `Footer.astro`, `RelatedArticles.astro`, `Practice.astro`, `CheckpointItem.astro`, `Header.astro`, `LessonFooter.astro`

### Layouts (1 file)
`src/layouts/BlogPost.astro`

### Pages (18 files)
`src/pages/premium-guide.astro`, `search.astro`, `disclaimer.astro`, `contact.astro`, `blog/index.astro`, `affiliate-disclosure.astro`, `privacy.astro`, `guide.astro`, `404.astro`, `glossary.astro`, `learn/lines/06-simian-line.astro`, `learn/[module]/[lesson].astro`, `learn/[module]/index.astro`, `learn/index.astro`, `guide/thank-you.astro`, `about.astro`, `index.astro`, `terms.astro`

`index.astro`, `guide.astro`, and `learn/index.astro` additionally use `rgba(13, 10, 26, …)` gradient/overlay stops (the background token in RGB form) — these are the 3 files using both patterns.

### Baked SVG/PNG assets (10 files)
- `public/og/og-default.svg` (+ its rasterized sibling `public/og/og-default.png`, which is a manually maintained export — no build script regenerates it; see `package.json` scripts and no hits in `scripts/`)
- 8 mount SVGs in `public/images/lessons/mounts/` (`mounts-overview.svg` + 7 individual mount diagrams)

### One-off inline background (1 file)
- `src/components/Figure.astro` line 20: `background-color: #0d0a1a;` — a letterboxing background shown behind lesson images while they load/if they don't fill the frame. **Interaction risk, see §3.**

### Not part of the token system but visually coupled to the dark theme (needs individual contrast review, not a simple find/replace)
Bespoke colors chosen to work against the dark background, found alongside the above during this grep:
- `#c5bed8` (blockquote text, `global.css`)
- `#a09abf` (`learn/index.astro`)
- `#c07870` / `#e07070` (a dusty-rose warning/error accent, `guide.astro` / `premium-guide.astro`)
- `#1a1208`, `#1a1430` (near-black overlay variants, `premium-guide.astro` / `search.astro`)

### Explicitly out of scope
- `src/private/print/complete-reference.astro` — has its own **independent, self-contained, already-light** palette (`--bg: #fdf8f0`, `--ink: #1a1410`, `--gold: #b8913c`) for PDF export. Not derived from `global.css` tokens, doesn't need migration.
- `public/favicon.svg` — uses `@media (prefers-color-scheme: dark)` to swap fill between black/white based on the *visitor's OS/browser* theme. This is the only dark-mode-*branching* logic in the codebase, but it's orthogonal to the site's own palette (it's not reading `--color-bg` or any site token) — leave alone.
- `public/images/lessons/lines/*.webp` (25 files) — see §3, these are raster art, not code, and are handled separately from the CSS/SVG work.

---

## 3. Risk areas

**A. No theme-branching JS to worry about.** Grepped for `prefers-color-scheme`, `data-theme`, `localStorage` theme keys, `dark-mode` — none found tied to the site palette (only the unrelated favicon case above). This is a static, single-theme site: swapping token values is a content change, not a logic change. Lower risk than a typical dark/light toggle migration.

**B. Contrast/accessibility on flip.** The existing `npm run audit:accessibility` script does **not** check color contrast (grepped, no hits) — there is no automated safety net for this migration. New pairings need manual verification against WCAG AA at minimum:
- Charcoal `#2B2B2B` text on ivory `#F2E8D5` — should pass easily (very high contrast), low risk.
- Teal `#5F8A91` and sand `#C7B299` as accent/link colors on ivory background — teal likely passes AA for large text/UI, sand is riskier for body-size text or thin borders and should be checked, not assumed.
- Gold `#D4AF37` "used sparingly" — by definition will be used for small/decorative elements (rules, highlights); confirm it's never relied on for text contrast.
- Focus ring (`--focus-ring: #f0cf86` currently) needs a new value with verified contrast against the light background — this is an accessibility-load-bearing token (`global.css` §"Shared focus indication," per `docs/ARCHITECTURE.md`), not cosmetic.

**C. Raster art baked with the dark palette (highest-risk item).** `public/images/lessons/lines/*.webp` (25 files, ~470KB each, 1254×1254) are **finished designed artwork produced externally** per `docs/visual-assets-roadmap.md` — dark background, neon-purple linework, gold glow baked into the pixels. These cannot be recolored by editing code. A light-theme migration either:
1. Requires a full external re-production/re-export of all 25 images in the new palette (real production cost, same pipeline that made the originals), or
2. The lines module keeps its dark-styled diagrams displayed on a light page (a framed/inset dark panel), which is a deliberate design decision, not a bug — needs explicit product sign-off either way.

The **mount SVGs** (8 files) are lower risk by comparison: `docs/visual-assets-roadmap.md` describes them as "simple schematic shapes — labeled ellipses on a dark background... programmatically generated," and confirmed by inspection they're plain SVG markup with `stop-color="#0d0a1a"` etc. These can be edited directly (find/replace the hex values, or regenerate from source if a generator script exists) — no external re-export needed. Note the roadmap already flags these as temporary/placeholder pending final designed replacements, so this migration may be moot for them if the mounts module gets final artwork first — worth confirming sequencing with whoever owns that backlog item before spending time on them.

`public/og/og-default.svg` is likewise simple hand-editable markup (gradient + text, 66 lines) — low risk to edit directly. Its PNG sibling (`og-default.png`) needs a manual re-export after the SVG changes since there's no build-time generation step.

**D. `Figure.astro`'s hardcoded `#0d0a1a` letterbox.** This sits behind every lesson image (including the lines `.webp` files) while they load. If the CSS migration ships before the lines images are re-produced (or if the images stay dark permanently per option C.2 above), this value needs to **stay dark** to match the images, not flip to ivory — otherwise a light letterbox behind a dark image looks broken. This is the one place where the CSS and asset tracks are coupled and must be sequenced deliberately, not treated as two independent workstreams.

**E. Untokenized alpha variants multiply the diff.** Because 27 files hardcode `rgba(201, 169, 110, N)` at many different alpha values (0.05 to 0.7+) rather than referencing a shared token, a naive find-and-replace of the RGB triplet is mechanically fine (teal's new RGB triplet substitutes cleanly) but doesn't fix the underlying lack of tokenization — the same problem will recur at the next rebrand. Worth deciding up front whether this migration also introduces alpha-composable tokens (e.g. `--accent-rgb: 95, 138, 145;` used as `rgba(var(--accent-rgb), 0.2)`) or defers that cleanup.

---

## 4. Proposed sequencing

1. **Tokenize first, on the current dark palette, with no visual change.** Add the missing custom properties (`--color-bg` used everywhere it's currently hardcoded in `global.css`; new `--accent-rgb` / `--color-bg-rgb` triplet tokens for the alpha use sites) and replace the 27+3 hardcoded `rgba(...)` occurrences with `rgba(var(--accent-rgb), N)` equivalents, plus fix the 2 in-file bypasses in `global.css`. Ship and verify **zero visual diff** before touching any actual color value. This turns the eventual repaint into a low-risk, mechanical `:root` edit instead of a 37-file find-and-replace.
2. **Decide the lines-module question (§3.C) with product before writing any code** — full re-export of 25 images vs. keeping them as dark inset panels on a light page. This blocks nothing else but should not be an implementation-time surprise.
3. **Swap the `:root` token values** to the Editorial Mystic palette. This alone should repaint the majority of the site (everything now token-driven).
4. **Resolve `Figure.astro`'s letterbox color** per whatever §3.D decision was made in step 2 (either flips to ivory if lines images are being re-produced in step 6, or stays dark/becomes a distinct "image frame" color if they're staying dark).
5. **Edit the hand-editable SVGs directly**: `public/og/og-default.svg`, then manually re-export `public/og/og-default.png` to match; the 8 mount SVGs (pending confirmation this isn't superseded by planned final mount artwork per §3.C).
6. **Re-produce the 25 lines `.webp` files** in the new palette, if step 2 decided on full re-export — this is the largest single line item and should be scoped/estimated separately as a production task, not folded into the CSS work.
7. **Manual contrast/accessibility pass** (§3.B) — no automated check exists for this; verify text, links, and the focus ring against WCAG AA on the new backgrounds by hand or with an external contrast checker.
8. **Visual QA per page/template**, not just per component: homepage, a lesson page (module index + individual lesson, since these have the most bespoke gradient/shadow treatments per §2), guide/premium-guide funnel pages, search, blog index, static legal pages (privacy/terms/disclaimer — lowest risk, share the simplest `rgba` border-only pattern). Per `AGENTS.md`'s testing matrix, this is a **site code/layout change**: `npm run build` + `npm run audit:all` + `npm run content-audit`, plus manual visual inspection of the affected routes — the existing audits do not cover color/contrast (§3.B) so they're necessary but not sufficient here.
9. Update `docs/visual-assets-roadmap.md`'s references to the dark palette once the migration ships, so it doesn't describe a palette that's no longer live.

---

## 5. Open questions for product/Director before implementation starts

- Full re-export of the 25 lines diagrams, or keep them as dark panels on a light page? (§3.C)
- Does this migration also fund the alpha-token cleanup in step 1, or ship a minimal value-only swap and defer that? (§3.E)
- Are the mount SVGs worth updating now, or superseded by planned final mount artwork (per the existing placeholder note in `docs/visual-assets-roadmap.md`)? (§3.C)
- New focus-ring value, confirmed for contrast against the ivory background — this is an accessibility-load-bearing token, not a color-picker afterthought. (§3.B)

---

*This is a scoping document only. Implementation requires explicit go-ahead per the open questions above, and — per `AGENTS.md`'s feature-branch review gate — any resulting work ships to a task branch, not `main`.*
