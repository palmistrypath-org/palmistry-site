"""Set a PDF's outline (bookmarks) and metadata.
usage: pdf-finish.py file.pdf finish.json   with {"outline": [[level, title, page], ...], "title": ..., "subject": ...}"""
import json, os, sys
import pymupdf

src, spec = sys.argv[1], json.load(open(sys.argv[2], encoding='utf-8'))
doc = pymupdf.open(src)
doc.set_toc([[lvl, title, page] for lvl, title, page in spec['outline'] if 1 <= page <= len(doc)])
doc.set_metadata({
    'title': spec['title'],
    'author': 'Palmistry Path',
    'subject': spec.get('subject', ''),
    'creator': 'Palmistry Path product suite (scripts/build-products.mjs)',
    'producer': 'Chromium + PyMuPDF',
})
doc.set_page_labels([{'startpage': 0, 'prefix': '', 'style': 'D', 'firstpagenum': 1}])
tmp = src + '.tmp'
doc.save(tmp, garbage=1, deflate=True)
doc.close()
os.replace(tmp, src)
