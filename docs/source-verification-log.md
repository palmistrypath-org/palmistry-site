# Source Verification Log

Record of source checks performed on Palmistry Path content, so later agents can trace what was verified, how, and what remains open. Append new verification passes; do not rewrite history here.

---

## Pass 1 — Remediation Batch 2B (2026-08-10)

Scope: source integrity and editorial trust, following findings 3.4 and 8.1–8.13 of `audits/SITE_AUDIT_2026-08.md`.

### External sources verified and now cited

| Claim area | Source established | Where used |
|---|---|---|
| Indian tradition — textual history, manuscript count, sāmudrika corpus | Kenneth G. Zysk, *The Indian System of Human Marks*, 2 vols., Brill (2016) | `blog/beginner/indian-palmistry-hasta-samudrika-shastra.md`, `blog/beginner/what-palmistry-is.md` |
| Indian tradition — classical treatment of palm lines | Varāhamihira, *Bṛhat Saṃhitā*, chs. 68–70 (*puruṣa-lakṣaṇa*), trans. N. Chidambaram Iyer (1884) | `blog/beginner/indian-palmistry-hasta-samudrika-shastra.md` |
| Chinese tradition — physiognomy manuals and their textual history | Livia Kohn, "A Textbook of Physiognomy: The Tradition of the *Shenxiang quanbian*", *Asian Folklore Studies* 45:2 (1986), 227–258 | `blog/beginner/chinese-palmistry-basics.md` |
| Chinese tradition — divination in its social and intellectual context | Richard J. Smith, *Fortune-tellers and Philosophers: Divination in Traditional Chinese Society* (1991) | `blog/beginner/chinese-palmistry-basics.md` |
| *San cai* / Tian Di Ren as classical Chinese cosmology, not specifically Daoist | *Yijing* commentarial tradition; Stanford Encyclopedia of Philosophy, "Chinese Philosophy of Change (Yijing)" | `blog/beginner/chinese-palmistry-basics.md` |
| Romani arrival in Europe | Council of Europe, *Factsheets on Romani History* ("From India to Europe") | `blog/beginner/what-palmistry-is.md`, `blog/beginner/western-palmistry-basics.md` |
| Palmar flexion crease formation (8th–13th fetal week, before spontaneous hand movement) | Kimura & Kitagawa, "Embryological development of human palmar, plantar, and digital flexion creases", *The Anatomical Record* 216:2 (1986) | `blog/beginner/can-palm-lines-change.md` |
| Ray Hyman's contradictory-readings account | Ray Hyman, "Cold Reading: How to Convince Strangers That You Know All About Them", *The Zetetic* (1977) — his own account of an informal test suggested by Stanley Jaks, not a controlled study | `blog/beginner/what-palmistry-is.md`, `lessons/foundations/01-what-palmistry-is.mdx` |

### Claims checked and confirmed

- **Lucas et al. (2019).** *Anthropological Review* 82:2, 155–162; Lucas, Dhugga & Henneberg. 60 cadavers **donated to the University of Adelaide**; lead author affiliated with Flinders University. The site's text was correct; wording tightened to "donated to". Audit finding 8.1's institutional flag is resolved.
- **~600 surviving *samudrika-shastra* manuscripts.** Traces to Zysk (2016), p. 134. The site previously attributed this to Wikipedia, which was itself citing Zysk. Now cited to Zysk directly.

### Claims corrected because verification failed

- **Romani arrival "from around the ninth century".** Not supported. Departure from the Indian subcontinent is placed around the 11th century, the Byzantine world over the following two centuries, the Balkans from the 14th and Western Europe through the 15th.
- **Caduceus as the medical symbol.** The classical emblem of medicine is the single-serpent Rod of Asclepius; the caduceus entered medical use in the 20th century through a documented conflation.
- **Simian line prevalence "one to four percent".** Commonly reported estimates are ~1–3% of the general population, with substantially higher rates in some East Asian populations. Now stated as approximate and population-dependent.
- **"Practised on every inhabited continent."** Unsupported as stated; replaced with an independent-development claim that the evidence does support.
- **Sanskrit *ekāgratā* applied to the simian line.** The term is genuine but belongs to yogic and philosophical literature, not the classical hand-reading texts. Now presented as modern cross-tradition reading.

### Quotation verification

Method: the public-domain primary texts were retrieved in full and searched. Corpora used —

- Cheiro, *Palmistry for All* (1916), Project Gutenberg #20480
- Cheiro, *Cheiro's Language of the Hand*, three Internet Archive scans (1897/1898/1900 printings)
- Benham, *The Laws of Scientific Hand Reading* (1900), two Internet Archive scans

Every quotation-marked passage of five or more words appearing within a sentence attributing it to Cheiro or Benham was normalised (punctuation, whitespace, case) and matched against the corpora.

**Result: 92 such passages; 14 verified verbatim; 78 not found.** OCR noise is a possible cause of individual misses, but was ruled out as a general explanation — surrounding prose from the same pages matches readily, and quotations that are genuine do verify.

Notable findings, all corrected in this batch:

- *"The Line of Life does not necessarily indicate the duration of a person's existence; it rather indicates the degree of vitality, the robustness of the constitution."* Attributed to *Palmistry for All* (1916) in five places. **Not in that text.** The book in fact associates a long, clear life line with "length of life, vitality, freedom from illness, and strength of constitution." This was the site's flagship myth-correction.
- *"The left hand shows what nature gives, the right hand what man makes of it."* Attributed to Cheiro in two places. Not found. *Cheiro's Language of the Hand* does carry the substance: "the left hand is what you are, constitutionally; the right hand, what you make yourself or acquire." Now quoted accurately from that work.
- *"The hand changes as the man changes."* Not found. Converted to paraphrase.
- **Breaks in the life line.** The site stated that Cheiro and Benham read breaks as transition markers and warned against reading them as physical crisis. Benham reads breaks specifically as illness or accident, to be diagnosed against the rest of the hand; Cheiro links a broken life line with a "danger of death" where the break appears. Corrected in two articles and one lesson to state the classical and modern positions separately.

**Remaining unverified quotations — 78 across 29 files.** These require a dedicated editorial pass, not a citation-level fix, and were left in place. `C` = attributed to Cheiro, `B` = to Benham. Line numbers are as of commit on `fix/source-integrity-batch-2b`.

| File | Count | Lines |
|---|---|---|
| `src/content/blog/beginner/broken-life-line-meaning.md` | 1 | 63 (B) |
| `src/content/blog/beginner/fate-line.md` | 1 | 55 (C) |
| `src/content/blog/beginner/head-line.md` | 2 | 23 (B), 45 (B) |
| `src/content/blog/beginner/heart-line.md` | 1 | 69 (C) |
| `src/content/blog/beginner/islands-on-palm-lines.md` | 1 | 29 (B) |
| `src/content/blog/beginner/life-line.md` | 2 | 37 (C), 65 (B) |
| `src/content/blog/beginner/marriage-line-forked-broken-meaning.md` | 2 | 25 (B), 25 (C) |
| `src/content/blog/beginner/marriage-relationship-lines.md` | 1 | 31 (B) |
| `src/content/blog/beginner/mercury-line.md` | 1 | 11 (B) |
| `src/content/blog/beginner/mount-of-apollo.md` | 7 | 19 (B), 19 (C), 29 (C), 29 (B), 35 (B), 37 (C), 57 (B) |
| `src/content/blog/beginner/mount-of-jupiter.md` | 9 | 21 (B), 21 (B), 21 (C), 29 (C), 29 (B), 33 (C), 35 (B), 59 (B), 61 (C) |
| `src/content/blog/beginner/mount-of-luna.md` | 3 | 19 (C), 21 (B), 37 (B) |
| `src/content/blog/beginner/mount-of-mars.md` | 7 | 25 (B), 25 (C), 29 (C), 29 (B), 39 (B), 41 (B), 47 (B) |
| `src/content/blog/beginner/mount-of-mercury.md` | 6 | 21 (C), 23 (B), 33 (C), 33 (B), 43 (C), 43 (B) |
| `src/content/blog/beginner/mount-of-saturn.md` | 5 | 21 (B), 21 (C), 29 (C), 33 (C), 35 (B) |
| `src/content/blog/beginner/mount-of-venus.md` | 2 | 23 (C), 45 (B) |
| `src/content/blog/beginner/mounts-overview.md` | 3 | 27 (C), 47 (C), 63 (C) |
| `src/content/blog/beginner/nails-in-palmistry.md` | 1 | 27 (B) |
| `src/content/blog/beginner/no-fate-line-meaning.md` | 1 | 25 (C) |
| `src/content/blog/beginner/short-life-line-meaning.md` | 1 | 59 (B) |
| `src/content/blog/beginner/sun-line.md` | 6 | 11 (B), 11 (C), 23 (B), 23 (C), 29 (B), 35 (B) |
| `src/content/lessons/advanced/02-marriage-relationship-lines.mdx` | 1 | 27 (B) |
| `src/content/lessons/lines/04-life-line.mdx` | 2 | 56 (B), 80 (B) |
| `src/content/lessons/lines/05-fate-line.mdx` | 2 | 34 (B), 44 (B) |
| `src/content/lessons/mounts/02-mount-of-venus.mdx` | 1 | 31 (B) |
| `src/content/lessons/mounts/03-mount-of-jupiter.mdx` | 3 | 49 (C), 49 (B), 59 (C) |
| `src/content/lessons/mounts/04-mount-of-saturn.mdx` | 1 | 47 (B) |
| `src/content/lessons/mounts/06-mount-of-mercury.mdx` | 1 | 61 (C) |
| `src/content/lessons/mounts/08-mount-of-mars.mdx` | 4 | 30 (B), 30 (C), 39 (B), 61 (B) |

The mount articles and mount lessons carry the concentration and should be handled together. The remedy in each case is the one in `editorial-style-guide.md` §5.2: verify against the cited edition, or drop the quotation marks and paraphrase. Do not manufacture page references.

### Not verified, deliberately

- Gettings (1965), West (1998), Fincham (2005), Fitzherbert (1986), Goldberg & Dobkins (2016) are in copyright and were not available for text search. Attributions to them were left as they stand; none of them carries a quotation-marked passage that this pass could check.
- Whether the Heaven/Human/Earth three-line mapping appears in any classical Chinese text. Searching surfaced only commercial sites. The article now presents the vocabulary as contemporary standard practice and says explicitly that classical textual authority is not claimed.
