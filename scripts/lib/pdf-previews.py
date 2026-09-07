"""Render every page of a PDF to PNG (review previews) plus a contact sheet and a cover image."""
import sys, os
import pymupdf
from PIL import Image

pdf, out = sys.argv[1], sys.argv[2]
doc = pymupdf.open(pdf)
pages = []
for i, page in enumerate(doc, start=1):
    pix = page.get_pixmap(dpi=72)
    p = os.path.join(out, f"page-{i:02d}.png")
    pix.save(p)
    pages.append(p)
# cover at listing resolution
doc[0].get_pixmap(dpi=150).save(os.path.join(os.path.dirname(out), os.path.basename(out) + "-cover.png"))
# contact sheet, 6 across
thumbs = [Image.open(p) for p in pages]
w, h = thumbs[0].size
cols = 6
rows = (len(thumbs) + cols - 1) // cols
sheet = Image.new("RGB", (cols * (w + 8) + 8, rows * (h + 8) + 8), (30, 24, 40))
for k, t in enumerate(thumbs):
    sheet.paste(t, (8 + (k % cols) * (w + 8), 8 + (k // cols) * (h + 8)))
sheet.save(os.path.join(out, "contact-sheet.png"))
print(f"  previews: {len(pages)} pages -> {out}")
