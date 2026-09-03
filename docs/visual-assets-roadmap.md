# Visual Assets Roadmap — Palmistry Path

Palm atlas (2026-09-03): `scripts/generate-palm-diagrams.mjs` generates 46 plates in `public/images/diagrams/` covering fingers, thumb, hand shapes, active/passive hands, reading sequence, every major line and its variations, minor lines, and marking specimen sheets; they are placed in-flow across all lessons and articles. See `docs/visual-system.md`.

*Last updated: 2026-09-03.*

This document tracks the state of all lesson diagram assets and what designed replacements are needed.

---

## Status overview

| Module | Asset state | Notes |
|---|---|---|
| Lines | ✅ Final designed `.webp` | Committed under `public/images/lessons/lines/` |
| Mounts | ✅ Generated plate series (SVG) | `scripts/generate-mount-diagrams.mjs`; wired into all eight lessons via `<Figure>` on 2026-09-02 (branch `feat/visual-golden-slice`). The section below describes the superseded placeholder state. |
| Foundations | — No images | Figure blocks removed; no placeholders |
| Advanced | — No images | Figure blocks removed; no placeholders |

---

## Lines — Final assets

All lines lesson diagrams are final designed `.webp` files. They were produced externally and committed directly to the repo. No action needed.

Files: `public/images/lessons/lines/linesl101.webp` through `linesl603.webp`.

---

## Mounts — Temporary SVGs (action required)

The mounts lessons currently reference programmatically generated SVG diagrams. These are simple schematic shapes — labeled ellipses on a dark background — not illustrated artwork. They were added as a stopgap so lessons are not imageless; they should be replaced before the mounts module is considered finished.

### Current temporary files

All located in `public/images/lessons/mounts/`:

| File | Used in lesson |
|---|---|
| `mounts-overview.svg` | `01-mounts-overview.mdx` |
| `mount-of-venus.svg` | `02-mount-of-venus.mdx` |
| `mount-of-jupiter.svg` | `03-mount-of-jupiter.mdx` |
| `mount-of-saturn.svg` | `04-mount-of-saturn.mdx` |
| `mount-of-apollo.svg` | `05-mount-of-apollo.mdx` |
| `mount-of-mercury.svg` | `06-mount-of-mercury.mdx` |
| `mount-of-luna.svg` | `07-mount-of-luna.mdx` |
| `mount-of-mars.svg` | `08-mount-of-mars.mdx` |

### Required final assets

Eight designed images are needed to replace the temporary SVGs. Prefer `.webp` for final artwork (consistent with the lines module). Each image should:

- Match the site's dark palette (`#0d0a1a` background, amber `#c9a96e` highlights)
- Show a hand outline with the relevant mount region clearly indicated
- Follow the same visual language as the lines lesson diagrams

| Asset slug | What it must show |
|---|---|
| `mounts-overview` | All seven named mounts located on a palm — Jupiter, Saturn, Apollo, Mercury, Venus, Luna, Lower Mars, Upper Mars, Plain of Mars |
| `mount-of-venus` | Venus mount highlighted (large pad at base of thumb, inside arc of life line) |
| `mount-of-jupiter` | Jupiter mount highlighted (below index finger) |
| `mount-of-saturn` | Saturn mount highlighted (below middle finger) |
| `mount-of-apollo` | Apollo mount highlighted (below ring finger) |
| `mount-of-mercury` | Mercury mount highlighted (below little finger) |
| `mount-of-luna` | Luna mount highlighted (outer base of palm, percussion side) |
| `mount-of-mars` | All three Mars regions highlighted — Lower Mars, Upper Mars, and Plain of Mars |

### How to replace

1. Produce designed images in the correct format (`.webp` preferred, `.png` or `.jpg` acceptable).
2. Drop them into `public/images/lessons/mounts/` using the same base filenames (e.g. `mounts-overview.webp`).
3. Update each MDX Figure block `src` to point to the new file extension.
4. Delete the corresponding `.svg` file once the replacement is confirmed in the build.

---

## Foundations and Advanced — No images yet

These modules had placeholder Figure blocks pointing to a generic `placeholder.jpg`. Those blocks were removed in May 2026. No images exist for these modules; the lessons render without diagrams. Designed artwork for foundations and advanced lessons is a future task, not yet scoped.

---

*Update this file whenever asset status changes.*
