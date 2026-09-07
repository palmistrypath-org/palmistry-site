"""Print JSON {anchor_id: page_number, "__pages": n} for §id§ markers in a PDF."""
import json, re, sys
import pymupdf

doc = pymupdf.open(sys.argv[1])
found = {"__pages": len(doc)}
pat = re.compile(r"§\s*([A-Za-z0-9_-]+)\s*§")
for i, page in enumerate(doc, start=1):
    for m in pat.finditer(page.get_text()):
        found.setdefault(m.group(1), i)  # first occurrence wins: a section starts where its anchor first appears
print(json.dumps(found))
