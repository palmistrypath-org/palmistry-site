"""Build the plate label fonts embedded in every SVG plate by products/shared/palm.mjs.

Cuts a subset of the static Cinzel and Lora Italic instances, then bakes the base
tracking used by the plates into each glyph's advance width and saves WOFF2:

    python scripts/lib/plate-fonts.py

Why bake the tracking: plates are printed very small (a 13px label becomes ~2.6pt),
and when the tracking is expressed as SVG letter-spacing Chrome positions every glyph
with a kerning adjustment, which pdfium (Chrome, Edge, and most extractors) reads as
word breaks after narrow glyphs: "percus s ion", "wr i s t". With the tracking inside
the advances the glyphs land in exactly the same places, but the text extracts whole.
palm.mjs subtracts PLATE_TRACK from each label's letter-spacing, so PLATE_TRACK here
and there must agree.
"""
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools import subset

ROOT = Path(__file__).resolve().parents[2]
FONTS = ROOT / "products/shared/fonts/static"
PLATE_TRACK = {"Cinzel-400": 0.11, "Lora-Italic-400": 0.09}  # em; mirrored in palm.mjs
UNICODES = list(range(0x20, 0x100)) + [0x2013, 0x2014, 0x2018, 0x2019, 0x201C, 0x201D, 0x2026]  # Latin-1 + typographic punctuation

for name, track in PLATE_TRACK.items():
    src = FONTS / f"{name}.ttf"
    out = FONTS / f"plate-{name}.woff2"
    opts = subset.Options(flavor="woff2", layout_features=["kern", "liga"], notdef_outline=True, name_IDs=["*"], hinting=False)
    font = subset.load_font(str(src), opts)
    sub = subset.Subsetter(opts)
    sub.populate(unicodes=UNICODES)
    sub.subset(font)
    add = round(font["head"].unitsPerEm * track)
    hmtx = font["hmtx"]
    for glyph, (adv, lsb) in hmtx.metrics.items():
        hmtx.metrics[glyph] = (adv + add, lsb)
    if "hhea" in font:
        font["hhea"].advanceWidthMax += add
    font.flavor = "woff2"
    font.save(str(out))
    print(f"{out.name}: {len(font.getGlyphOrder())} glyphs, +{add}/{font['head'].unitsPerEm} tracking, {out.stat().st_size} bytes")
