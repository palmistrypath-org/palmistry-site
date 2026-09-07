"""Paint a solid ground beneath every page of a PDF (Chrome leaves @page margins unpainted).
usage: pdf-paint.py in.pdf '#07050d'"""
import sys
import pymupdf

src, hexcol = sys.argv[1], sys.argv[2].lstrip('#')
rgb = tuple(int(hexcol[i:i+2], 16) / 255 for i in (0, 2, 4))
doc = pymupdf.open(src)
for page in doc:
    page.draw_rect(page.rect, color=None, fill=rgb, overlay=False)
tmp = src + '.tmp'
doc.save(tmp, garbage=4, deflate=True, deflate_images=True)
doc.close()
import os
os.replace(tmp, src)
