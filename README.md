# Palmistry Path

Source for [palmistrypath.com](https://palmistrypath.com), an educational palmistry learning site built with Astro.

## Stack
- Astro 6 static output
- Markdown/MDX content collections
- Pagefind search
- Astro sitemap
- Cloudflare Pages deployment
- Node `>=22.12.0`

## Local development
```bash
npm install
npm run dev
```

Production validation:
```bash
npm run build
npm run audit:all
npm run content-audit
```

Additional targeted commands are defined in `package.json` for link, image, schema, and IndexNow checks.

## Content
- Blog articles: `src/content/blog/`
- Structured lessons: `src/content/lessons/`
- Lesson modules: foundations, lines, mounts, advanced
- Content schemas: `src/content.config.ts`

## Agent/wiki workflow
Start with `AGENTS.md`. Do not recursively read the repo or all docs. Use `docs/WIKI.md` to open only the context required for the current task.

`PROJECT.md` is retained only as a compatibility pointer for older workflows.