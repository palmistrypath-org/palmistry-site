# Mount Diagram Creative Briefs — Palmistry Path

*Produced: 2026-05-27. Covers all eight final mount lesson diagrams.*

These briefs define the requirements for replacing the temporary schematic SVGs in `public/images/lessons/mounts/` with designed `.webp` artwork. The lines module diagrams (`public/images/lessons/lines/`) are the reference for visual style — study those first. Do not reference the current SVG placeholders for style or composition.

> **Terminology note (2026-08-11).** These briefs predate the canonical mount model and describe "nine mount regions" in several places. The published model is: **seven planetary mounts occupy eight mount regions**, because Mars appears in two distinct areas of the palm; the **Plain of Mars** is a separate central region, not a raised mount and not a ninth mount. The per-diagram specs below are otherwise unchanged, since they document artwork already produced — but any new or revised label text must follow the canonical model, not the counts written here.

---

## Shared Art Direction

All eight diagrams share the following specifications. Individual briefs only note departures from this baseline.

### Visual language

The diagrams should depict a **realistic but clean palm illustration** — not a photograph, not a geometric schematic. Think medical anatomical plate reinterpreted in a candlelit, atmospheric style. The hand outline should read as a genuine human left palm, facing upward (palm side visible), fingers slightly spread and pointing upward.

Lines should be rendered with organic texture — slight variation in stroke weight, subtle grain or glow — rather than mechanical vector precision. Mount regions should be shown as fleshy, raised areas through gentle gradient or shading rather than flat ellipses.

### Color palette

| Element | Hex | Notes |
|---|---|---|
| Background | `#0d0a1a` | Deep midnight indigo — fills entire canvas |
| Hand outline stroke | `#3d3957` | Muted purple-gray |
| Hand fill / skin | `#16122a` to `#1f1b35` | Dark indigo gradient; palm lighter than background |
| Highlighted mount fill | `#c9a96e` | Warm gold — glows slightly |
| Highlighted mount glow | `#e0c07e` at low opacity | Soft halo behind/around the highlighted region |
| Other mount regions | `#1f1b35` with `#2e2a46` edge | Darker than palm body — suggest topography without shouting |
| Reference lines (life, heart, fate, etc.) | `#3d3957` | Faint, lower contrast than highlighted mount |
| Reference line highlights | `#5a5278` | Slightly brighter when a line is relevant to the lesson |
| Labels — highlighted mount | `#0d0a1a` on gold, or `#e0c07e` if outside | Bold, legible |
| Labels — other regions | `#8c84a8` | Muted lavender |
| Caption background (if needed) | None | Caption renders in HTML, not in image |

The palette must not introduce new colors. Every color used must appear in the list above or be a tint/shade within its range.

### Typography in diagrams

Mount region labels are embedded in the image as text. Use a serif font (matching the site's Cinzel or Lora aesthetic — Cinzel is preferred for labels; if unavailable use any elegant cap-serif). Labels should:

- Be uppercase or title case, consistent across all eight images
- Sit clearly within or adjacent to their region with a short leader line if space requires
- Never overlap a different region's label

Font sizes are relative — scale to ensure legibility at the diagram's rendered width (typically 640–720px on desktop).

### Palm anatomy to depict

The illustrated palm should be an anatomically plausible left hand, palm facing up. Fingers point upward. Thumb is on the left side of the image. The following landmarks should be consistent across all eight diagrams:

- Four fingers (index, middle, ring, little) with the thumb curving left
- Major lines faintly present on all diagrams: **life line** arcing from between thumb and index finger down toward wrist; **heart line** running horizontally across the upper palm below finger bases; **head line** running diagonally across mid-palm
- The **fate line** shown faintly in diagrams where it is a relevant landmark (Saturn, Apollo, mounts overview)
- Wrist crease at the bottom of the palm

The proportions of the hand should be realistic — not stylized or cartoonish — but the rendering style can be illustrative rather than photorealistic.

### Dimensions and export

| Property | Value |
|---|---|
| Minimum pixel width | 900 px |
| Minimum pixel height | 1080 px |
| Aspect ratio | 5:6 (portrait) |
| Export format | `.webp` |
| Quality setting | 85% WebP (or equivalent) |
| Target file size | 100–400 KB per image |
| Color space | sRGB |

Higher resolution exports (e.g. 1800×2160 px for 2× retina) are preferred if the production workflow allows; Astro serves them responsively.

### Naming convention

| Lesson | Final filename |
|---|---|
| Mounts overview | `mounts-overview.webp` |
| Mount of Venus | `mount-of-venus.webp` |
| Mount of Jupiter | `mount-of-jupiter.webp` |
| Mount of Saturn | `mount-of-saturn.webp` |
| Mount of Apollo | `mount-of-apollo.webp` |
| Mount of Mercury | `mount-of-mercury.webp` |
| Mount of Luna | `mount-of-luna.webp` |
| Mount of Mars | `mount-of-mars.webp` |

Drop into `public/images/lessons/mounts/`. The MDX Figure blocks will need their `src` extension updated from `.svg` to `.webp` after replacement.

---

## Individual Diagram Briefs

---

### 1. Mounts Overview

**File:** `mounts-overview.webp`
**Lesson:** `src/content/lessons/mounts/01-mounts-overview.mdx`

**Purpose**
This is the student's first view of mount territory. It must give an immediate, accurate impression of where all seven mounts (and the Plain of Mars) sit relative to each other. The student will return to this image repeatedly as they work through subsequent lessons.

**Visual composition**
Full palm view, fingers visible. All nine mount regions labeled and gently highlighted — no single region dominates. Mount prominence is suggested through subtle shading rather than strong color contrast, since none is the lesson's focus.

**Highlighted regions**
All nine regions equally indicated:
- **Jupiter** — base of index finger, upper palm, leftmost of the four finger-base mounts
- **Saturn** — base of middle finger, centre of upper palm
- **Apollo** — base of ring finger, right of centre
- **Mercury** — base of little finger, outermost upper-right
- **Venus** — large pad at thumb's base (left side), bounded by the arc of the life line
- **Luna** — lower-right zone, outer/percussion edge, fills the lower outer quadrant
- **Lower Mars** — narrow strip on the left edge, between the life line and thumb web, running from Jupiter downward
- **Upper Mars** — narrow strip on the right edge at mid-palm height, between Mercury and Luna
- **Plain of Mars** — shallow centre of the palm, between the two Mars zones

Use `#c9a96e` gold at low-to-medium saturation for all regions so that spatial relationships are legible without any one mount appearing dominant. Alternatively, use a tiered approach: `#c9a96e` for the seven named mounts, `#a8905c` for the Plain of Mars (since it is topographically a depression, not a raised mount).

**Labels**
All nine regions labeled. Jupiter, Saturn, Apollo, Mercury: labels above or inside each region near the finger bases. Venus: label inside the large pad. Luna: label inside the lower-right zone. Lower Mars and Upper Mars: labels on narrow strips with small font. Plain of Mars: label in italic or smaller weight at center.

**Reference lines**
Show life line, heart line, head line, and fate line — all at low opacity (`#3d3957`) since none is the lesson's focus. The life line is especially important as it defines the boundary of Venus.

**Alt text draft**
> Illustrated palm facing upward with all nine mount regions indicated. From left to right across the upper palm: Jupiter at the base of the index finger, Saturn at the base of the middle finger, Apollo at the base of the ring finger, Mercury at the base of the little finger. Venus occupies the large padded area at the base of the thumb on the left, bounded by the arc of the life line. Luna fills the lower right zone along the outer edge. Lower Mars runs along the inner left edge between Jupiter and Venus. Upper Mars runs along the outer right edge between Mercury and Luna. The Plain of Mars sits at the centre of the palm between the two Mars regions.

**Caption draft**
> The nine mount regions of the palm. Venus and Luna anchor the lower half; Jupiter, Saturn, Apollo, and Mercury define the upper ridge. The two Mars regions and the Plain between them fill the mid-palm.

---

### 2. Mount of Venus

**File:** `mount-of-venus.webp`
**Lesson:** `src/content/lessons/mounts/02-mount-of-venus.mdx`

**Purpose**
Show the student exactly where Venus is and emphasize the life line arc as its defining boundary. The lesson emphasizes that the width of the life line's arc is itself a reading — a wide arc means a large, prominent Venus; a narrow arc means a compressed one.

**Visual composition**
Full palm view. Venus in gold highlight dominates the lower-left. The life line rendered more brightly than other reference lines to reinforce its role as the boundary. Other mounts present but clearly subordinate.

**Highlighted region**
Venus: the large rounded pad at the base of the thumb, left side of the palm. Its boundary follows the arc of the life line — from between the thumb and index finger curving down toward the wrist. The entire enclosed area should glow gold. The highlighting should suggest volume — Venus is the thickest, most padded mount.

**Key landmark to emphasize**
The **life line arc** — render it at higher contrast than other reference lines (use `#5a5278` or slightly lighter). The arc's width relative to the palm is the reading itself, so the arc must be visually prominent.

**Labels**
- "Venus" inside the gold zone
- "Life Line" with a short leader pointing to the arc (outside the Venus zone, near mid-arc)
- "Thumb" optional, small, near the thumb base if space allows

**Other mounts**
Jupiter, Saturn, Apollo, Mercury in muted state across top. Luna muted in lower right. Mars regions muted on edges. All visible but clearly background.

**Alt text draft**
> Illustrated palm facing upward. The mount of Venus — the large padded area at the base of the thumb — is highlighted in gold and occupies the lower left of the palm. The life line arcs around it, running from between the thumb and index finger down toward the wrist, forming the boundary of the Venus zone. The other mounts appear in muted tones at the upper palm and outer edge.

**Caption draft**
> The mount of Venus, bounded by the arc of the life line. The wider the arc, the more territory Venus occupies.

---

### 3. Mount of Jupiter

**File:** `mount-of-jupiter.webp`
**Lesson:** `src/content/lessons/mounts/03-mount-of-jupiter.mdx`

**Purpose**
Show Jupiter's position at the base of the index finger and its relationship to the heart line below. The lesson notes that the mount and the index finger above it are traditionally read as a pair — the image should support that visual pairing.

**Visual composition**
Full palm view. Jupiter highlighted in gold at the upper-left of the finger-base ridge. The index finger above it slightly emphasized (not colored, but the finger itself can carry a faint warm tint or be rendered at higher contrast than the other fingers). Heart line visible below.

**Highlighted region**
Jupiter: the padded area at the base of the index finger, from the metacarpal crease at top down to where the heart line curves. Upper palm, leftmost of the four finger-base mounts.

**Key landmarks to emphasize**
- **Heart line** — render at slightly higher contrast than head line and fate line; it runs below Jupiter and curves toward it
- **Index finger** — the finger above the mount; not colored, but render its outline slightly brighter to reinforce the mount-finger pairing

**Labels**
- "Jupiter" inside the gold zone
- "Heart Line" with a short leader to the heart line
- "Index Finger" small label above the finger, or omit if layout is already clear

**Other mounts**
Saturn, Apollo, Mercury muted in sequence to the right. Venus muted below left. Luna, Mars muted. All visible.

**Alt text draft**
> Illustrated palm facing upward. The mount of Jupiter is highlighted in gold at the base of the index finger, in the upper left of the palm. The heart line curves below it across the upper palm. The other three finger-base mounts — Saturn, Apollo, and Mercury — appear in muted tones to the right. Venus and Luna are visible but subdued.

**Caption draft**
> The mount of Jupiter, sitting below the index finger above and the heart line below. The mount and finger are traditionally assessed together.

---

### 4. Mount of Saturn

**File:** `mount-of-saturn.webp`
**Lesson:** `src/content/lessons/mounts/04-mount-of-saturn.mdx`

**Purpose**
Show Saturn at the centre of the upper palm and convey that it is typically the flattest of the four finger-base mounts — absence of obvious development is normal, not a deficiency. The fate line's endpoint near Saturn is a key contextual landmark.

**Visual composition**
Full palm view. Saturn highlighted in gold at centre-top. Because Saturn is often the flattest mount, the gold highlight can be rendered with slightly lower saturation or narrower extent than Venus or Jupiter, implying modest elevation. Fate line visible running up through the palm toward Saturn's base.

**Highlighted region**
Saturn: base of the middle finger, centre of the upper palm. Flanked by Jupiter (left) and Apollo (right). Narrower than Jupiter and Apollo in most hands.

**Key landmarks to emphasize**
- **Fate line** — render at slightly higher contrast; it terminates near or below the middle finger's base, pointing toward Saturn. Use `#5a5278` or lighter.
- **Heart line** — present below, lower contrast

**Labels**
- "Saturn" inside or above the gold zone
- "Fate Line" with a short leader to the vertical line below Saturn
- "Middle Finger" small label if space allows

**Other mounts**
Jupiter and Apollo muted immediately adjacent. Mercury muted to right. Venus, Luna, Mars muted. All visible.

**Alt text draft**
> Illustrated palm facing upward. The mount of Saturn is highlighted in gold at the base of the middle finger, at the centre of the upper palm. It is flanked by the mount of Jupiter to the left and the mount of Apollo to the right. The fate line runs vertically up the palm below it. The heart line curves across the upper palm. Other mounts appear in muted tones.

**Caption draft**
> The mount of Saturn, at the centre of the upper palm below the middle finger. The fate line often terminates in Saturn's territory.

---

### 5. Mount of Apollo

**File:** `mount-of-apollo.webp`
**Lesson:** `src/content/lessons/mounts/05-mount-of-apollo.mdx`

**Purpose**
Show Apollo's position below the ring finger and introduce the sun/Apollo line as the secondary feature most closely read alongside this mount. The lesson notes that the sun line may be long and clear, or fragmentary.

**Visual composition**
Full palm view. Apollo highlighted in gold. The sun line — a vertical or angled line running up from the lower or mid-palm toward Apollo — shown at moderate contrast, as a secondary focus. The line may be shown as a clean, shorter stroke to suggest it is not present on all hands.

**Highlighted region**
Apollo: base of the ring finger, second from right in the upper palm ridge, between Saturn (left) and Mercury (right).

**Key landmarks to emphasize**
- **Sun line / Apollo line** — a lighter vertical line rising from mid or lower palm toward Apollo's base. Render at `#5a5278` or slightly lighter. Can be shown with slight fragmentation to convey it varies by individual.
- **Heart line** — present below, lower contrast

**Labels**
- "Apollo" inside the gold zone
- "Sun Line" with a short leader, or rendered as italic smaller text beside the line
- "Ring Finger" small label if space allows

**Other mounts**
Jupiter, Saturn, Mercury muted adjacent. Venus, Luna, Mars muted. All visible.

**Alt text draft**
> Illustrated palm facing upward. The mount of Apollo is highlighted in gold at the base of the ring finger, in the upper right area of the palm. The sun line rises vertically from the mid-palm toward the Apollo mount. Saturn appears to the left, Mercury to the right, both in muted tones. Venus, Luna, and the Mars regions are visible but subdued.

**Caption draft**
> The mount of Apollo, below the ring finger. The sun line, running vertically toward it from the mid-palm, is the feature most closely read alongside this mount.

---

### 6. Mount of Mercury

**File:** `mount-of-mercury.webp`
**Lesson:** `src/content/lessons/mounts/06-mount-of-mercury.mdx`

**Purpose**
Show Mercury's position at the outermost upper-right of the palm — the percussion edge — and introduce the Mercury line (health line) as an optional associated feature.

**Visual composition**
Full palm view. Mercury highlighted in gold at the far right of the finger-base ridge. The percussion (outer) edge of the palm slightly brighter to emphasize Mercury's position on the boundary. Mercury line shown as an optional secondary feature rising from the lower palm.

**Highlighted region**
Mercury: base of the little finger, rightmost of the four finger-base mounts, at the outer/percussion edge of the palm.

**Key landmarks to emphasize**
- **Percussion edge** — the outer right edge of the palm. Can be rendered with a slightly brighter outline at that edge.
- **Mercury line / Health Line** — a diagonal or vertical line rising from the lower palm (near Luna or mid-palm) toward Mercury. Render at low contrast (`#3d3957` to `#5a5278`) as it is not always present. Can be shown as a lighter, shorter or fragmentary line.
- **Heart line** — curves below Mercury; present but lower contrast

**Labels**
- "Mercury" inside the gold zone
- "Mercury Line" with a short leader, or italic smaller text beside the line
- "Little Finger" small label if space allows

**Other mounts**
Apollo muted immediately adjacent. Jupiter, Saturn muted to left. Venus, Luna, Mars muted. All visible.

**Alt text draft**
> Illustrated palm facing upward. The mount of Mercury is highlighted in gold at the base of the little finger, in the upper right of the palm at the outer edge. The Mercury line rises from the lower palm toward the Mercury mount. Apollo appears to the left in muted tones, with Saturn and Jupiter continuing further left. Venus, Luna, and Mars are visible but subdued.

**Caption draft**
> The mount of Mercury, at the outer edge below the little finger. The Mercury line, when present, runs diagonally from the lower palm upward toward it.

---

### 7. Mount of Luna

**File:** `mount-of-luna.webp`
**Lesson:** `src/content/lessons/mounts/07-mount-of-luna.mdx`

**Purpose**
Show the full extent of Luna — the largest mount by surface area — in the lower outer quadrant of the palm. Convey its relationship to Venus as the opposing pole, and the head line's slope toward Luna as a structurally important connection.

**Visual composition**
Full palm view. Luna highlighted in gold in the lower right quadrant, occupying a large area from mid-palm height down toward the wrist along the outer edge. Venus shown in a slightly warmer muted tone than other mounts (to imply the Venus-Luna axis without over-emphasizing it). Head line shown sloping from mid-left toward lower-right, its endpoint landing in or near Luna's territory.

**Highlighted region**
Luna: the lower outer quadrant of the palm — from roughly mid-palm height on the percussion (right) side, running down to the wrist crease. Large, soft zone. May be rendered as a gentle gradient of gold rather than a hard-edged shape, to convey its diffuse, field-like quality.

**Key landmarks to emphasize**
- **Head line endpoint** — the head line typically slopes diagonally from upper-left to lower-right, with its endpoint landing in or near Luna. Render the head line at slightly higher contrast than other reference lines (`#5a5278` or lighter). Show its descent toward Luna clearly.
- **Venus** — in muted tone on the lower left as the structural counterpart (Venus-Luna axis). Can be rendered in `#2e2a46` with a subtle warm tint to suggest the pairing without gold.

**Labels**
- "Luna" inside the gold zone
- "Head Line" with a short leader, near the line's lower-right endpoint
- Optional: small "Venus" label on the lower-left mount for axis reference

**Other mounts**
Mercury muted above Luna on the right. Jupiter, Saturn, Apollo muted across top. Lower Mars, Upper Mars muted on edges. Venus muted lower left.

**Alt text draft**
> Illustrated palm facing upward. The mount of Luna is highlighted in gold in the lower right of the palm, occupying the large area along the outer edge from mid-palm down to the wrist. The head line slopes diagonally from the upper left toward the lower right, with its endpoint landing in the Luna zone. Venus appears in muted tones on the lower left as Luna's structural counterpart. The finger-base mounts and Mars regions are visible but subdued.

**Caption draft**
> The mount of Luna, filling the lower outer quadrant of the palm. The head line's descent toward Luna is one of the most discussed structural connections in palmistry.

---

### 8. Mount of Mars

**File:** `mount-of-mars.webp`
**Lesson:** `src/content/lessons/mounts/08-mount-of-mars.mdx`

**Purpose**
Show all three Mars regions — Lower Mars, Upper Mars, and the Plain of Mars — simultaneously, because the lesson assesses them as a set. This is the most complex composition of the eight diagrams, requiring three distinct zones to be clearly labeled without clutter.

**Visual composition**
Full palm view. All three Mars regions highlighted: Lower Mars on the inner-left edge, Upper Mars on the outer-right mid-edge, Plain of Mars in the centre hollow. Use distinct but harmonious gold tones or subtle differentiation (e.g., Lower and Upper Mars in `#c9a96e`, Plain of Mars in `#a8905c`) to convey that the Plain is a depression between two elevated strips, not a raised mount.

**Highlighted regions**

| Region | Position | Shape |
|---|---|---|
| Lower Mars | Inner left edge, narrow vertical strip between life line and thumb web, from below Jupiter down toward Venus | Narrow vertical zone, gold |
| Upper Mars | Outer right edge, narrow vertical strip at mid-palm between Mercury and Luna | Narrow vertical zone, gold |
| Plain of Mars | Centre of the palm, the shallow hollow between the two Mars strips, at mid-palm height | Wide, low-saturation gold or warm tint |

The Plain's highlight should look like a field — diffuse, lower intensity — distinct from the firmer strips of Lower and Upper Mars.

**Key landmarks to emphasize**
- **Life line** — defines the outer boundary of Lower Mars on its right side. Render at `#5a5278`.
- **Heart line** — upper boundary reference. Lower contrast.

**Labels**
All three require clear labels with short leader lines if zones are too narrow for inline text:
- "Lower Mars" with leader into the inner-left strip
- "Upper Mars" with leader into the outer-right strip
- "Plain of Mars" with leader or italic text in the centre hollow

Because the strips are narrow, labels may sit outside the colored zones with a short hairline leader. Prefer legibility over elegance here.

**Other mounts**
Jupiter, Saturn, Apollo, Mercury muted at top. Venus and Luna muted at lower corners. All visible for spatial context.

**Alt text draft**
> Illustrated palm facing upward showing all three Mars regions. Lower Mars is highlighted along the inner left edge of the palm — a narrow strip between the life line and the thumb, running from below the index finger down toward Venus. Upper Mars is highlighted along the outer right edge at mid-palm height, between Mercury above and Luna below. The Plain of Mars — a shallow, wide zone at the centre of the palm — is highlighted in a lighter tone between the two strips. The life line is visible as the boundary of Lower Mars. Other mounts appear in muted tones at the upper and lower palm.

**Caption draft**
> The three Mars regions: Lower Mars on the inner edge, Upper Mars on the outer edge, and the Plain of Mars between them at the palm's centre. Each zone is assessed independently, then read in relation to the others.

---

## QA Checklist — Replacing Temporary Diagrams

Use this checklist before committing any replacement image.

### Per-image checks

- [ ] File format is `.webp` (not `.svg`, `.jpg`, `.png`)
- [ ] File is in `public/images/lessons/mounts/`
- [ ] Filename matches the naming convention exactly (e.g. `mount-of-venus.webp`)
- [ ] Image dimensions are at minimum 900×1080 px
- [ ] Image background is `#0d0a1a` (midnight indigo), not white or gray
- [ ] Highlighted mount/region uses `#c9a96e` gold
- [ ] Other mounts visible but clearly muted (`#1f1b35` to `#2e2a46` range)
- [ ] All required labels are present and legible at 720px display width
- [ ] No label overlaps another region's label
- [ ] Reference lines (life, heart, head, fate as applicable) are present at low contrast
- [ ] The correct reference lines are elevated for each lesson (see individual briefs above)

### MDX update checks (per lesson)

- [ ] The `Figure` component `src` in the MDX file points to the new `.webp` path
  - Pattern: `src="/images/lessons/mounts/mount-of-venus.webp"`
- [ ] The `alt` text in the Figure block matches (or improves upon) the alt text draft above
- [ ] The `caption` in the Figure block matches (or improves upon) the caption draft above
- [ ] The old `.svg` file has been deleted from `public/images/lessons/mounts/` (or archived)

### Cross-diagram consistency checks

- [ ] All eight images use the same palm anatomy and proportions (left hand, fingers pointing up, thumb on left)
- [ ] The life line follows the same arc path across all eight images
- [ ] The heart line sits at the same height across all eight images
- [ ] Jupiter, Saturn, Apollo, Mercury occupy the same positions across all eight images
- [ ] Venus occupies the same region across all eight images
- [ ] Luna occupies the same region across all eight images
- [ ] Font style and size is consistent across all labels in all eight images
- [ ] No image introduces a color not in the approved palette

### Final sign-off

- [ ] `npm run build` passes without errors after MDX updates
- [ ] All eight lessons render in browser with new images
- [ ] Images load correctly on mobile viewport (320px minimum)
- [ ] `docs/visual-assets-roadmap.md` updated: Mounts row changed from ⚠️ to ✅
- [ ] Temporary SVG files deleted and deletion committed
- [ ] `public/images/lessons/mounts/README.md` updated or deleted after replacement is complete
