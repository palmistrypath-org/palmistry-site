# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Claude Code Behavior — Palmistry Path

## Session startup
Always read PROJECT.md first. Do not ask what the project is.

## Article writing workflow
1. Give pre-draft report only (sources, flags, word count, preview URL)
2. Write directly to file — never print article content to chat
3. Wait for approval before committing
4. Commit and push only after explicit approval
5. /clear between articles

## Research rules
- Use established sources: Cheiro (1916), Benham (1900), Gettings (1965), West (1998), Fincham (2005)
- No broad web research — single targeted search only if needed to verify one specific claim
- Never invent palmistry meanings or attribute claims without a source

## Editorial standards
- "Traditionally associated with..." not "means..."
- "Often interpreted as..." not "indicates..."
- "May suggest..." not "shows that..."
- Note genuine cross-tradition disagreement — never synthesize false consensus
- Acknowledge Cheiro's historical framings briefly where relevant, then present contemporary practice
- Never claim palmistry predicts the future or has medical validity
- No medical claims, relationship advice, or legal claims

## Tradition handling
- Indian palmistry: name Sanskrit terms accurately, include where they add something the Western tradition doesn't cover
- Chinese palmistry: note where it classifies things differently without forcing comparison
- Gender conventions: acknowledge in historical articles, default to active/passive hand framing in practical articles
- Brevity principle: two well-placed sentences about a tradition are better than a paragraph

## Article structure (minor lines and mounts)
Opening → Location → Traditional associations → Presence/absence if relevant → Variations → Cross-tradition → Synthesis → Common myths → Sources note

## Token efficiency
- Never print full article content to chat
- Keep pre-draft reports concise
- Flag only genuine editorial decisions — don't ask about things that follow established patterns

## Voice
Educational, grounded, curious, mystical in atmosphere but not woo-woo. Match the tone of existing articles. Read one existing article if unsure.

---

## Development commands

```bash
npm run dev        # local dev server at localhost:4321
npm run build      # static build to dist/ (also runs pagefind indexing)
npm run preview    # serve dist/ locally after a build
```

No test runner or linter is configured. TypeScript is checked implicitly by Astro's build step — type errors surface as build failures.

---

## Architecture

**Static site generator:** Astro 6 with static output. No server-side rendering.

**Two content collections** defined in `src/content.config.ts`:

| Collection | Source | URL pattern | Layout |
|---|---|---|---|
| `blog` | `src/content/blog/**/*.md` | `/blog/<id>/` | `src/layouts/BlogPost.astro` |
| `lessons` | `src/content/lessons/**/*.md` | `/learn/<module>/<lesson>/` | `src/pages/learn/[module]/[lesson].astro` |

Blog posts are routed via `src/pages/blog/[...slug].astro`, which uses `post.id` as the slug (the file path relative to `src/content/blog/`, without the extension). Lesson routing uses explicit `[module]` and `[lesson]` segments.

**Frontmatter fields:**

*Blog posts (`blog` collection):*
- `title` — becomes both the `<h1>` on the page and the `<title>` tag (formatted as `"${title} — Palmistry Path"`)
- `description` — populates `<meta name="description">`, OG/Twitter tags, the Article schema, and the blog listing excerpt
- `pubDate`, `updatedDate` — rendered by `FormattedDate` component
- `relatedLesson` — optional path string (e.g. `/learn/lines/02-heart-line`); when present, renders the "Go deeper" CTA block at the bottom of the article

*Lessons (`lessons` collection):* `title`, `description`, `module`, `moduleTitle`, `order`, `pubDate`, `difficulty`, `duration`, `prerequisites`, `relatedArticle`, `heroImage`.

**No separate SEO title vs display title field.** `title` is used for both. Changing `title` changes the H1, the `<title>` tag, breadcrumb schema, and Article schema headline simultaneously.

**Key layout:** `src/layouts/BlogPost.astro` — renders the full blog post page. Injects Article and BreadcrumbList structured data as inline JSON-LD. The "Go deeper" CTA renders only when `relatedLesson` is set.

**Fonts:** Cinzel (headings, Cinzel Decorative feel) and Lora (body), loaded via Astro's Google Font provider at build time. CSS variables: `--font-cinzel`, `--font-lora`.

**Search:** Pagefind (`astro-pagefind`) — runs as part of `astro build`, indexes all static pages, outputs to `dist/pagefind/`. Search UI is at `/search/`.

**Modules registry:** `src/consts.ts` — the `MODULES` array defines the four curriculum modules (foundations, lines, mounts, advanced) used by the Learn index page and navigation.
