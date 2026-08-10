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

### Pass 1 conclusions later corrected

Pass 2 found that Pass 1 established the right evidence and then wrote the opposite of it into the content. The findings above stand; the framing built on them did not. See Pass 2.

### Not verified, deliberately

- Gettings (1965), West (1998), Fincham (2005), Fitzherbert (1986), Goldberg & Dobkins (2016) are in copyright and were not available for text search. Attributions to them were left as they stand; none of them carries a quotation-marked passage that this pass could check.
- Whether the Heaven/Human/Earth three-line mapping appears in any classical Chinese text. Searching surfaced only commercial sites. The article now presents the vocabulary as contemporary standard practice and says explicitly that classical textual authority is not claimed.

---

## Pass 2 — Pre-merge correction pass (2026-08-10)

Cross-agent review of the Batch 2B branch found that Pass 1 had established the primary-text evidence correctly and then written content that contradicted it. The corrections below reconcile the two.

### The contradiction

Pass 1 recorded that Cheiro's `Palmistry for All` associates a long clear life line with "length of life", and that Cheiro links a broken life line with danger of death. Pass 1 then published text stating that neither Cheiro nor Benham "offers a scale on which years are measured", that "what none of them does is read a break as a prediction of death", and that the tradition "has never supported" lifespan reading. Those statements are false, and the evidence contradicting them was already in this log.

### Additional primary-text verification

Searched the same corpora used in Pass 1.

| Finding | Source |
|---|---|
| "It is reasonable to assume that it is this intimate connection with the vital organs of the body which enables it to foretell the length of life from *natural causes*." | Cheiro, *Palmistry for All* (1916) |
| A long, clear, unbroken life line "would indicate length of life, vitality, freedom from illness, and strength of constitution." | Cheiro, ibid. |
| Where the life and health lines meet at equal strength "will be the date of death, even though the Line of Life should pass this point." | Cheiro, ibid. |
| Ch. XIX, "How to Tell Time and Dates of Principal Events in the Life": "The most correct way in which to tell time by the hand is to divide the Line of Life into periods of seven years." | Cheiro, ibid. |
| A broken life line with a line of Mars behind it "may indicate great danger of death where the break appears, but a danger that will be overcome." | Cheiro, ibid. |
| Six-year divisions for dating the life line; "The above division of the Life line I have found more accurate than any I have ever used." | Benham, *The Laws of Scientific Hand Reading* (1900) |
| A tasselled ending "shows entire dissipation of the vitality and end of the life… death of the subject at the age at which the tassel is seen." | Benham, ibid. |
| "Islands on the Life line show that the Current is split in two… They are always indications of periods of delicacy." | Benham, ibid. |
| "Length of life, however, is a field that should seldom be approached at all, certainly not unless you are absolutely proficient, careful, and tactful." | Benham, ibid. |
| Breaks in the life line read as illness or accident, diagnosed against mounts and chance lines. | Benham, ibid. (recorded in Pass 1) |
| Palm marks read for kingship, wealth, and longevity — e.g. "If the three lines issuing from the wrist reach the middle of the palm, the person will be a king." | Varāhamihira, *Bṛhat Saṃhitā* ch. 68, trans. N. Chidambaram Iyer (1884) |

**Conclusion.** Both principal Western sources read the life line for duration and both supplied dating systems. Benham urged caution about raising the subject with a client, which is a caution about practice, not a denial of the reading. The classical Indian marks literature is openly predictive. Palmistry Path's non-predictive stance is a modern editorial position and is now presented as one.

### Framing now used sitewide

Two statements kept separate on every page that touches this:

1. **Historical description** — what the texts say, reported accurately, including predictive claims about lifespan, death, illness, wealth, and status.
2. **Palmistry Path's position** — we do not predict these things, because the claims have not held up under testing, and the modern practitioner literature has abandoned them.

Recorded as a durable rule in `editorial-style-guide.md` §5.2 and §11.

### Chinese article — claim-by-claim outcome

| Claim | Outcome |
|---|---|
| `san cai` / Tian Di Ren as a classical Chinese cosmological triad | **Verified** — Yijing commentarial tradition; corrected from "Taoist" to classical Chinese, shared across Confucian and Daoist thought |
| Chinese physiognomy's textual history and the `Shenxiang quanbian` | **Verified** — Kohn (1986), Smith (1991) |
| `nan zuo nü you` hand-by-sex convention and left/right yang-yin | **Qualified** — the yin/yang pairing and the convention are well attested across Chinese medicine, ritual, and divination; no claim made that a specific classical physiognomy manual states the palmistry rule |
| Heaven/Human/Earth three-line mapping | **Qualified** — presented as the terminology of contemporary Chinese palm reading; explicitly not claimed as classical doctrine, and explicitly not claimed to be absent from one either |
| Heaven Line variation meanings (length, depth, forking, endpoint) | **Removed** — no citable source; article now says so |
| Human Line depth/clarity/fragmentation readings | **Removed** — same |
| Earth Line "not about longevity in either tradition, not a classical teaching" | **Removed** — false for the Western tradition and unestablished for the Chinese |
| "The tradition is interpretive, not prophetic" | **Removed and inverted** — Chinese physiognomy is part of an openly divinatory culture; the article now says so and states the site's own boundary separately |
| Structural principle that the three lines are read in relation to each other | **Kept** — framework-internal logic, not a table of meanings |

### Indian article — claim-by-claim outcome

| Claim | Outcome |
|---|---|
| Textual lineage: `Gārgīyajyotiṣa` (1st c. CE), Near Eastern omen roots, `Bṛhat Saṃhitā` (6th c.) | **Verified** — Zysk (2016) |
| Classical texts read palm lines by shape and omen, naming no life/head/heart line | **Verified** — `Bṛhat Saṃhitā` ch. 68 |
| `Jeevan`/`Mastishk`/`Hridaya`/`Bhagya Rekha` | **Qualified** — modern Hindi terminology mapping the Western scheme onto Indian vocabulary; corrected in the glossary too |
| Mount names (`Guru Parvat` etc.) and one-to-one planetary correspondence | **Qualified** — real correspondence, but shared inheritance vs. later convergence not settled; presented as contemporary practice |
| `karma phala` / `dharma` reading of the Bhagya Rekha | **Qualified** — concepts are central to Indian thought; attaching them to this line is modern practice, not classical marks literature |
| Historical joint reading of birth chart and hand | **Qualified** — common in contemporary practice; historical routineness not established, and Zysk traces the marks material to omen collections rather than Jyotish |
| Per-formation meanings for islands, chains, breaks | **Removed** — no citable source |
| Which-hand conventions "including classical distinctions" | **Qualified** — no source for any single rule; stated as varying by school |
| "No palmistry tradition, including the Indian one, predicts outcomes with certainty" | **Removed** — contradicted by `Bṛhat Saṃhitā`; replaced with an accurate description plus the site's own stance |

### Tian / Di / Ren consistency

Repo-wide sweep. Correct mapping is heart = Heaven (Tian), head = Human (Ren), life = Earth (Di).

| Location | Before | Action |
|---|---|---|
| `lessons/lines/04-life-line.mdx` | life = Human (Ren), Earth = head | Corrected |
| `lessons/lines/03-head-line.mdx` (two places) | head = Earth, Human = life | Corrected |
| `lessons/lines/01-major-lines-overview.mdx` | mapping correct, framed as Taoist | Reframed as classical Chinese; mapping status qualified |
| `blog/beginner/major-lines-overview.md` | mapping correct, "in classical texts", Taoist | Reframed as contemporary terminology, classical authority not claimed |
| `blog/beginner/western-palmistry-basics.md` | Taoist framing | Reframed |
| `pages/glossary.astro` (Earth/Heaven/Human line, life line, Jeevan Rekha) | mappings correct, Taoist framing; Jeevan Rekha as Sanskrit | Reframed; Jeevan Rekha corrected to modern Hindi |
| `lessons/lines/02-heart-line.mdx`, `05-fate-line.mdx`, `private/print/complete-reference.astro` | already consistent | No change needed |

All occurrences now agree.

### Not established, deliberately left open

- Whether any classical Chinese text states the three-line Heaven/Human/Earth mapping. Searching surfaced only Tier 4 material. The article claims neither presence nor absence.
- Specific line-variation meanings in either the Chinese or Indian traditions. Left out rather than sourced to popular material.
- The 78 quotation attributions from Pass 1 remain open and out of scope for this pass.

---

## Pass 3 — Final pre-merge consistency sweep (2026-08-10)

No new source research. Pass 2 corrected the framing at the top of the affected
pages but left earlier prose in place further down, so several pages contradicted
themselves. This pass removes those leftovers. All evidence relied on is already
recorded in Pass 2.

### Life-line contradictions removed

| Location | Leftover claim | Fix |
|---|---|---|
| `life-line.md` empirical section | Authority comes from "practitioners who developed this system and rejected the lifespan reading" | Rejection now rests on the evidence, the modern literature, and site policy |
| `life-line.md` | "What none of these frameworks ask the life line to do is count out years" | Now: this article does not; Cheiro and Benham did, each with a dating scheme |
| `life-line.md` Short variation | "The tradition's position is clear" | Split into classical reading, modern reading, and site position |
| `life-line.md` Broken variation | "Neither reading involves bodily harm" | Overlap/clean distinction now given in both classical and modern senses |
| `life-line.md` FAQs (short, broken) | Modern reading presented as the historical one | Both now name the classical reading separately |
| `04-life-line.mdx` break section | "The tradition is consistent across sources: a break is a transition marker, not a death marker"; "Neither reading involves bodily harm" | Section rewritten as classical / modern practice / Palmistry Path; figure captions updated to match |
| `short-life-line-meaning.md` FAQ and mistakes section | "every serious writer… states clearly that the life line does not predict lifespan"; "the tradition does not make this association" | Both corrected |
| `broken-life-line-meaning.md` opening and FAQ | "It is what the tradition's most rigorous writers have consistently said"; "not taught in systematic palmistry" | Both corrected |
| `m-line-palmistry.md` | "a point the tradition is consistent on" (life line not read for length) | Corrected |
| `palmistry-myths.md` | "deterministic claims… the tradition's own methodologists did not make" | Corrected; classical predictive practice named |
| `heart-line.md` | Counting relationships "not grounded in any of the major traditions" | Narrowed to the Western texts on the heart line; notes Cheiro counts and dates the separate marriage lines |

### Cross-tradition wording further qualified

- `Jeevan Rekha` / *prana* in `life-line.md` and `04-life-line.mdx`: was presented as "the Vedic tradition" and as a classical parallel to the Western method. Now marked as modern Hindi terminology and a modern framing, with the note that the classical marks literature names no life line and is openly predictive where it reads the palm.
- "Standard in current practice" for the Tian/Di/Ren line mapping, in `04-life-line.mdx`, `01-major-lines-overview.mdx`, and `major-lines-overview.md`: replaced with "the terminology found in the contemporary Chinese palm-reading material we have consulted", since standard usage is itself a claim and no Tier 1–3 source establishes it.

### Style-guide corrections

- Naming conventions bullet described *Tian Di Ren* as a "Taoist cosmological framework". Corrected to classical Chinese (*Yijing* tradition, Confucian and Daoist alike), with the line mapping marked as contemporary terminology unless a Tier 1–3 source establishes otherwise.
- Relationship-predictions rule asserted the framing "is not grounded in any major classical tradition". Removed as an unverified historical claim — Cheiro dates marriages and reads the Mount of Mercury lines for marital happiness. The rule is now stated as site policy, pointing at the historical-description rule in §5.2.

### Method note

A bounded search worker swept `src/content`, `src/pages`, and the style guide for leftover phrasing and returned nine candidates; four were already fixed by the time it reported, four were confirmed and corrected, and one (`m-line-palmistry.md` on the M-shape luck claim) was inspected and kept, since that reading genuinely is modern. A second sweep after the edits surfaced three further contradictions the worker had not flagged, also corrected. The 78 quotation attributions from Pass 1 remain open and untouched.
