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

---

## Pass 4 — Final surgical correction (2026-08-10)

**Pass 3 was wrong to mark these two articles resolved.** It corrected the
passages it looked at and did not read either file end to end, so both still
carried mid-article prose that contradicted their own corrected openings. Cross-
agent review caught this. Recording it because the value of this log depends on
it showing where the review process failed as well as where the content did.

Both files were then read complete, top to bottom, classifying every paragraph
as classical / modern practice / site policy / cross-tradition claim.

### `short-life-line-meaning.md`

| Leftover | Fix |
|---|---|
| "Benham, Cheiro, and Gettings all describe a shorter or curtailed life line as suggesting that a life pivots substantially" | Removed. No primary-text support, and it contradicts the verified fact that both read the line for duration. Section retitled "What contemporary practice reads into a short line" and opens by stating Cheiro and Benham are not among its sources |
| "A break in the life line reads as a significant transition, not a termination" | Qualified as modern versus classical |
| "A broken life line (associated with a major transition)" in Common mistakes | Both readings now named |
| "A note on other traditions" — claimed Indian and Chinese traditions share the Western rejection of lifespan reading, cited a classical *Jeevan Rekha*/*prana* interpretation and Chinese vitality readings | Replaced. Now records that the classical Indian marks literature is openly predictive and reads palm lines for longevity, that *Jeevan Rekha* is modern Hindi terminology, that no Chinese line readings have been established, and that the rejection of lifespan reading is a modern development this site does not know to be cross-cultural |
| FAQ "It is traditionally associated with a fundamental change of direction" | Changed to contemporary practice, with the classical position named |
| "Cheiro and Benham both treat depth as the primary quality indicator" (two places) | Found during the full read, not flagged by review. Contradicted the article's own point that both read length for duration. Now: depth and clarity carry weight in every framework, but treating depth as *primary over length* is a modern reordering |

### `broken-life-line-meaning.md`

| Leftover | Fix |
|---|---|
| Opening paragraph 2 presented transition as the unqualified answer | Marked as the contemporary reading and the one this site uses |
| "What counts as a break" — "the tradition reads an overlapping break as a transition" | Section now distinguishes the forms; interpretation deferred to the readings section |
| "This is the central, consistent reading across the Western tradition. Benham, Cheiro, and Gettings all describe a break… as marking a major change in life's direction"; "what the tradition reads is a change in life's course, not a physical catastrophe" | Section rewritten as "Three readings, kept separate": classical health reading, contemporary transition reading, site policy. Modern readings are explicitly not attributed to Cheiro or Benham |
| "the transition reads as one phase giving way to another"; "the tradition consistently treats the presence of supporting lines…" | Split by framework. The supporting-lines point is one place the two genuinely agree, and now says so, citing Cheiro on the line of Mars |
| "A note on other traditions" — classical *Jeevan Rekha*/*prana* reading of breaks, Chinese *qi* continuity, cross-tradition consensus against mortality readings | Section removed entirely. None of it is supported by the Indian or Chinese sources established in Pass 2 |
| "no responsible contemporary practitioner reads a break that way"; "no responsible practitioner today offers them" | Replaced with what can be defended: the claim has not survived testing, the modern literature has dropped it, and this site does not use it |
| FAQ "A break is traditionally associated with a significant transition" | Marked as the contemporary reading, with the classical position named |
| Section heading "A broken life line does not predict death" | Found during the full read. Read as a claim about the tradition; retitled "Why this site does not read a break as predicting death" |
| "This section describes the geometry only" followed by interpretive descriptions of faded and chained sections | Found during the full read. Reworded to promise only that the *break* reading is deferred |

### Standing conclusion

Three of the corrections above were found by reading the complete files rather
than by review or by grep. Targeted sweeps reliably miss contradictions that live
in the gap between two passages, and neither a search worker nor a reviewer
reading excerpts substitutes for reading the article as a reader would. Any
future pass on this class of problem should read whole files.

The 78 quotation attributions from Pass 1 remain open and untouched.

---

## Pass 5 — Evidence-precision correction (2026-08-10)

No new research. Independent review after Pass 4 found that the two life-line
variation articles claimed more from the documented evidence than it supports.
Scope limited to `short-life-line-meaning.md` and `broken-life-line-meaning.md`.

### Break-specific testing overstatement

`broken-life-line-meaning.md` said in three places that the classical break
reading — illness, accident, danger of death — "has been tested and has not held
up", "has not survived testing", or lacks "demonstrated reliability".

The studies recorded in Pass 1 and cited in the life-line article (Newrick 1990,
Wilson & Mather 1974, Lucas et al. 2019) tested **life line length against
recorded lifespan**. They did not test broken-line configurations as predictors
of illness, accident, injury, or death. Applying their result to the break
reading was an overstatement of this branch's own evidence.

Corrected throughout to the defensible statement: no evidence establishing the
classical break readings has been produced and this site has found none;
Palmistry Path does not use them; the modern sources used here do not carry them
forward. The article now states explicitly that this is **not** a claim that
those specific readings were tested and refuted, and a new paragraph sets out
what the studies do and do not cover.

### Universal "every framework" wording removed

- "every framework treats it as a milder version of a clean gap" → distinguished in the classical texts and in the modern sources used here
- "treated as the milder form in every framework" → same
- "The nature of the break shapes every version of the reading" / "Surrounding context matters in all three" → narrowed
- "the modern practitioner literature has dropped it / has abandoned them" and "What has changed is everything after them" → narrowed to the modern sources this site works from
- `short-life-line-meaning.md`: "Depth and clarity carry weight in every framework" → in the classical texts and in modern practice alike

Earlier universals removed in Pass 4 ("no responsible practitioner today") remain removed.

### Mixed longevity evidence

`short-life-line-meaning.md` said the correction comes from "the studies that
tested the claim and found nothing". Replaced with wording stating the studies
have not established a consistent or reliable relationship, and explicitly
preserving that the results were mixed rather than uniformly negative — the 1990
study did report a correlation. "Has been tested and has not held up" also
softened to "has not been borne out consistently".

### Origin-story wording

"belongs to the fair and market tradition of dramatic predictive readings" was
an origin claim this branch has not established. Replaced with the supportable
statement that the crudest version is the one that circulates popularly, and
that lifespan readings existed in both popular and systematic historical
palmistry. No fairground or market attribution remains in either file.

### Found during the Opus full read

Two further items neither review nor grep flagged: "depth and clarity, not
length, are the primary quality indicators" survived in the common-mistakes
section as a flat fact, contradicting the same article's corrected framing of
that reordering as modern; and one checklist entry stated the modern transition
reading without labelling it. Both corrected.

The 78 quotation attributions from Pass 1 remain open and untouched.
---

## Batch 2C — Quotation Integrity (2026-08-11)

Resolves the quotation backlog opened by Batch 2B. Same corpora, same method,
no new external research.

### Method change, and why the count moved

Pass 1 counted quotation-marked passages of five or more words inside a sentence
attributing them to Cheiro or Benham, and found 92, of which 78 failed. That
undercounts. Short terminology quotations (`"lines of union"`, `"writer's fork"`)
carry attribution too, and an attribution often sits in the sentence next to the
quotation rather than inside it.

This pass re-inventoried from source rather than trusting Pass 1's line numbers,
which had shifted. Every quotation-marked span of two or more words inside a
paragraph naming Cheiro or Benham, across `src/content`, `src/pages` and
`src/private`: **245 passages**. Each was normalised and matched against the six
scans by exact substring, then by trigram-anchored fuzzy alignment to catch OCR
damage. The base tree and the final tree were both measured, so before/after is
exact rather than estimated.

Of the 245, **83 were never Cheiro/Benham attributions** and are out of scope:

| Not an attribution | Count |
|---|---|
| Site's own term or phrase under discussion | 24 |
| Site's own myth headers (strawmen the article then refutes) | 20 |
| Quotations attributed to Gettings, West, or Fincham | 20 |
| Markup and CSS class attributes in the print reference | 13 |
| Bibliography lines and journal titles | 2 |
| Frontmatter title/description | 2 |
| Figure alt text and captions | 2 |

That leaves **162 genuine Cheiro/Benham attributions** adjudicated in this pass.

### Standing count

| Disposition | Count |
|---|---|
| Verified exact, quotation marks retained unchanged | 55 |
| Corrected — unsupported wording, now replaced or removed | 93 |
| Corrected — wording found in the corpus but misapplied or misattributed | 14 |
| **Unresolved** | **0** |

Final state of the tree: 278 quotation-marked passages inside Cheiro/Benham
paragraphs; **205 verify against the scans** (180 exact after normalisation, 25
exact but for OCR artefacts — hyphenation across line breaks, running heads and
page numbers interpolated mid-sentence); the remaining 73 fall into the
non-attribution categories above. **No quotation-marked Cheiro or Benham
attribution remains in published content that this log classifies as unverified.**

### The 14 that matched the corpus and were still wrong

Worth recording, because a string match is not a verification. A short phrase can
be genuinely present in the book and still be attached to the wrong feature.

| Passage | Where the site used it | Where it actually is |
|---|---|---|
| "the love nature" | Mount of Venus (3 places) | Cheiro, on the **Line of Heart** |
| "the strength of the constitution" | Mount of Venus (2 places) | Benham, on the **Line of Life** |
| "nervous energy" | nail readings | Benham, on the **Line of Life** |
| "love of display" | overdeveloped Apollo mount | Benham, on Apollo **line deflections** |
| "the left hand is what you are, constitutionally; the right hand, what you make yourself or acquire" | Cheiro on the active/passive hand (2 places) | Present in *Language of the Hand*, but inside a reader's letter printed under the heading "A Defense" and signed "Speranus" — **not Cheiro's sentence**, and its writer attributes it to "cheiromants" |
| "great vitality and power of resistance to illness" | Benham on the sister line (2 places) | **Cheiro**, *Palmistry for All*, "The Line of Mars or Inner Life Line" |
| "from the standpoint of material success" | Benham on the fate line | Benham writes "from **a** standpoint" |
| "determines the size of the Mount of Venus" | Benham on the life line and Venus | Benham writes "**reduces** the size… thus **checking** the operation of that Mount" |
| "not a very happy mark to possess" | Cheiro on the simian formation | Cheiro writes "I have never found it a very happy mark to possess" |
| "the type is determined by the character and color of the line" | Benham on head line length | Benham writes "the **kind** to be **estimated** by…" |

Replacing the left/right hand quotation cost nothing: Cheiro states the same
principle in his own voice in *Palmistry for All* under "Right and Left Hands" —
the right "denotes the developed or active brain, the left only giving the natural
tendencies or inclinations."

### Substantive corrections, not just wording

Five cases where the quotation was carrying a claim the source does not make.

| Claim as published | What the sources say | Action |
|---|---|---|
| Benham reads an absent Mercury/health line as a sign of a sound constitution (`mercury-line.md`, `mount-of-mercury.md`, `06-mount-of-mercury.mdx`) | Benham does not read the line's absence at all; he reads the character of a line that is present. The absence-is-favourable reading is **Cheiro's**, stated plainly in both his books | Re-attributed to Cheiro; the two are no longer presented as agreeing |
| Benham was "direct" that a missing Sun Line does not mean success is out of reach (`sun-line.md`, `05-mount-of-apollo.mdx`) | Benham says nothing of the kind. Cheiro says close to the opposite: on an otherwise well-marked hand its absence means recognition "will be difficult or even impossible to gain" | Classical reading stated as it stands; the site's gentler reading kept and labelled as our own, per the §5.2 rule |
| Benham read a fate line rising from Luna as showing success "aided by the public" (`05-fate-line.mdx`) | "the subject's success in life will be materially assisted by **one of the opposite sex**" | Corrected; the public/audience reading relabelled as the modern extension it is |
| Benham preferred "lines of union", against Gettings' "affection lines" (4 files) | Benham argues for affection himself: "More properly speaking, these are lines of deep affection rather than lines of marriage or union." His term is also singular, "line of union" | Framing corrected in all four; Benham is part of that move, not the stage before it |
| "Writer's fork" is Cheiro's term (6 places) | The phrase is in neither author. Cheiro's terminal-fork reading is also narrower and carries a caveat the popular version drops: it "gives more of what is called a dual mentality and **less** power of concentration on any one subject" | Term reassigned to later popular palmistry; Cheiro's actual reading quoted. The print reference had additionally attached the term to a *heart* line fork |

### Wrong work

`mount-of-mars.md` and `08-mount-of-mars.mdx` cited Cheiro's *Palmistry for All*
for the Mars mount associations. His mount-by-mount treatment of Mars is in
*Cheiro's Language of the Hand*. (*Palmistry for All* has a separate "Line of Mars
or Inner Life Line" chapter, which is a different subject.) Corrected, including
the sources-consulted footer.

### Per-file disposition

`C` = corrected, `R` = matched the corpus but misapplied, `K` = kept verified.

| File | C | R | K |
|---|---|---|---|
| `blog/beginner/mount-of-jupiter.md` | 13 | 0 | 0 |
| `blog/beginner/mount-of-apollo.md` | 7 | 1 | 0 |
| `blog/beginner/mount-of-mars.md` | 7 | 0 | 0 |
| `blog/beginner/mount-of-mercury.md` | 6 | 0 | 0 |
| `blog/beginner/mount-of-saturn.md` | 6 | 0 | 0 |
| `blog/beginner/sun-line.md` | 6 | 0 | 0 |
| `blog/beginner/mount-of-venus.md` | 4 | 3 | 1 |
| `blog/beginner/mounts-overview.md` | 4 | 1 | 0 |
| `blog/beginner/mount-of-luna.md` | 3 | 0 | 0 |
| `blog/beginner/mercury-line.md` | 3 | 0 | 0 |
| `blog/beginner/nails-in-palmistry.md` | 3 | 1 | 0 |
| `blog/beginner/double-life-line-meaning.md` | 2 | 0 | 1 |
| `blog/beginner/islands-on-palm-lines.md` | 2 | 0 | 2 |
| `blog/beginner/thumb-meaning-palmistry.md` | 2 | 0 | 1 |
| `blog/beginner/fate-line.md` | 1 | 1 | 1 |
| `blog/beginner/head-line.md` | 1 | 0 | 8 |
| `blog/beginner/broken-life-line-meaning.md` | 1 | 0 | 1 |
| `blog/beginner/short-life-line-meaning.md` | 1 | 0 | 4 |
| `blog/beginner/no-fate-line-meaning.md` | 1 | 0 | 0 |
| `blog/beginner/what-do-palm-lines-mean.md` | 1 | 0 | 2 |
| `blog/beginner/heart-line.md` | 0 | 1 | 2 |
| `blog/beginner/life-line.md` | 0 | 1 | 10 |
| `blog/beginner/how-to-read-a-palm.md` | 0 | 1 | 0 |
| `blog/beginner/which-hand-to-read-palmistry.md` | 0 | 1 | 0 |
| `lessons/mounts/03-mount-of-jupiter.mdx` | 4 | 0 | 0 |
| `lessons/mounts/08-mount-of-mars.mdx` | 4 | 0 | 0 |
| `lessons/mounts/04-mount-of-saturn.mdx` | 3 | 0 | 0 |
| `lessons/mounts/02-mount-of-venus.mdx` | 2 | 2 | 0 |
| `lessons/mounts/06-mount-of-mercury.mdx` | 2 | 0 | 0 |
| `lessons/mounts/05-mount-of-apollo.mdx` | 1 | 0 | 0 |
| `lessons/mounts/07-mount-of-luna.mdx` | 1 | 0 | 1 |
| `lessons/lines/05-fate-line.mdx` | 2 | 0 | 0 |
| `lessons/lines/04-life-line.mdx` | 0 | 1 | 9 |

Two further files changed without a quoted string changing, because the fix was to
the framing around the quotation: `blog/beginner/forked-head-line-meaning.md` and
`private/print/complete-reference.astro`, both on the "writer's fork" attribution.

### Left as they stand, deliberately

- **Gettings (1965), West (1998), Fincham (2005).** In copyright, not searchable,
  20 quotations across the corpus. Unchanged, as in Batch 2B. This is the one
  remaining class of unverifiable quotation on the site, and it stays unverifiable
  until someone has the editions in hand.
- **Quoted phrases attributed to no one in particular** — "writer's head lines" in
  the print reference, credited vaguely to "Western texts". Not a Cheiro/Benham
  attribution, so outside this batch's scope; worth a look in a future pass.
- No page numbers were added anywhere. None of the scans paginate reliably enough
  to cite, and inventing them is the failure mode this thread of work exists to
  prevent.

### Method note

Corpus search was run by bounded workers; every classification and every
replacement wording was adjudicated against the retrieved text before being
applied. Two worker errors were caught in review and corrected: a genuine Cheiro
quotation on marriage-line quality was de-quoted as though unsupported, and
Benham's "cold-blooded tyrant" was used as a general statement about an
overdeveloped Jupiter when the source says it of a white, cold hand — replaced
with his general statement about the type in excess, "the excess of a commanding
disposition, which is tyranny or despotism".

The reusable finding: **matching a quotation to the corpus is not the same as
verifying it.** Fourteen passages here matched and were still wrong, most of them
short phrases sitting under the wrong feature. A future pass should check the
subject the source is discussing, not only the string.

---

## Pass 6 — Life-line empirical-evidence footer gap (2026-08-19)

Scope: Relay PP-RELAY-024 (`SOURCE_SENSITIVE`). `life-line.md`'s "A note on
the empirical question" section names three studies — Newrick and colleagues
(1990), Wilson and Mather (1974), and Lucas and colleagues (2019) — but the
closing source footer listed only Lucas et al., verified in Pass 1. The other
two were not previously independently traced to a full citation in this log.

### Studies verified by targeted lookup

- **Newrick, Affie & Corrall (1990).** "Relationship between longevity and
  lifeline: a manual study of 100 patients." *Journal of the Royal Society of
  Medicine* 83(8):499–501. Departments of Medicine and Pathology, Bristol
  Royal Infirmary. Sample: 100 consecutive autopsies (the site's "100
  cadavers" is accurate to this methodology, notwithstanding the paper's own
  "patients" title). Found a highly significant association between lifeline
  length and age at death, strengthened when hand size was controlled for.
- **Wilson & Mather (1974).** "Life expectancy" (letter). *JAMA* 229(11):1421–
  1422. Sample: 51 cadavers, lifeline length compared against recorded age at
  death and height. Found no significant correlation. Published as a letter,
  not a full research article — the site's existing phrase "the most recent
  peer-reviewed study" (reserved for Lucas et al.) already does not extend
  peer-reviewed-study status to this one, so no wording change was needed on
  that point.

Both citations were added to `life-line.md`'s source footer alongside the
already-verified Lucas et al. (2019) entry. No change was needed to the
body prose describing these studies: the existing "results have been mixed,"
the explicit statement that "the 1990 study did report a correlation," and
"the empirical evidence, on balance, does not support a predictive
relationship" already state the mixed finding accurately per Pass 5's
established standard, and were re-checked against the citations above rather
than only against each other.

### Lesson takeaway wording corrected

`04-life-line.mdx`'s closing "Lesson takeaway" sentence read "it has not held
up under testing" — a legacy phrase flagged as an open item since Relay
PP-RELAY-011 (2026-08-18), which deliberately left it untouched. Standing
alone, without the mixed-evidence context the companion article gives, the
phrase risks reading as a claim that testing was uniformly negative, which
overstates the record the same lesson already states correctly earlier
("the studies covered in the life line article find no reliable relationship
between the line and how long anyone lives"). Reworded to "the studies that
have directly tested it find no reliable relationship between line length
and lifespan" — the same formulation already used earlier in the lesson,
now applied consistently at the close. This is the same category of
correction Pass 5 made elsewhere in this cluster (net-unsupportive framed
without erasing that one study found a correlation), applied to the one
file/location Pass 5 did not touch.

No new studies, palmistry interpretations, or scientific claims were
introduced. `04-life-line.mdx` line 96 ("the readings above have no
demonstrated reliability") concerns the break reading, not line length, and
was already correctly scoped by Pass 5; it was inspected and left unchanged.

---

## Pass 7 — Life-line freshness superlative correction (2026-08-19)

Scope: Relay PP-RELAY-024 revision 2 (`SOURCE_SENSITIVE`). Director review of
the revision-1 result found that `life-line.md`'s existing phrase "the most
recent peer-reviewed study" (applied to Lucas et al. 2019) is a freshness
claim, not a neutral description, and was never established by Pass 6's
lookup — Pass 6 verified only that Wilson & Mather (1974), published as a
letter, doesn't count as a peer-reviewed study; it did not check whether any
later study exists. Public evidence indicates at least one 2025
lifeline/mortality paper is now in circulation, so the superlative is not
safe to keep in 2026. No search of the 2025 literature was performed for
this pass — the packet's authorized remedy was to drop the freshness claim
rather than to verify or characterize it.

### Correction made

`life-line.md`'s "A note on the empirical question" paragraph no longer
calls Lucas et al. (2019) the "most recent peer-reviewed study"; it now
lists the three verified studies (Newrick et al. 1990, Wilson & Mather 1974,
Lucas et al. 2019) without a freshness ranking, and closes with "across
these three published studies, the record is mixed and does not establish a
reliable predictive relationship" so the conclusion is explicitly scoped to
the three studies already verified in Pass 6, not stated as a general
"on balance" finding.

Two related sentences that summarized the same evidence as "the studies
that have tested it find no reliable relationship" — `life-line.md`'s FAQ
answer and `04-life-line.mdx`'s closing "Lesson takeaway" — were reworded to
"the limited published studies that have tested it show a mixed record that
does not establish a reliable relationship." The prior phrasing, read on its
own, risked being misread as claiming every study was negative; one of the
three (Newrick et al. 1990) found a significant association. This corrects
the same "Lesson takeaway" sentence Pass 6 introduced, which reused the
identical construction.

`04-life-line.mdx` line 28 (the "myth, corrected" section, not the closing
takeaway) contains the same "find no reliable relationship" construction
and was inspected but left unchanged: revision 2's authorized scope named
only the empirical/testing discussion in `life-line.md` and the "corrected
takeaway" in `04-life-line.mdx`, not this earlier section. It is a
candidate for a future bounded pass.

No new studies, citations, palmistry interpretations, or scientific claims
were introduced. The three verified study citations and outcomes from
Pass 6 (Newrick et al. 1990 significant association; Wilson & Mather 1974
no correlation; Lucas et al. 2019 no correlation) are unchanged.

## Pass 8 — Life-line residual testing-summary correction (2026-08-19)

Scope: Relay PP-RELAY-024 revision 3 (`SOURCE_SENSITIVE`). Director review of
the revision-2 result found two residual scientific/testing summaries in
`lessons/lines/04-life-line.mdx` that Pass 7 had inspected but left
unchanged as outside revision 2's authorized scope:

1. Line 28 (the "myth, corrected" section): "...the older claim has been
   tested, and the studies covered in the life line article find no
   reliable relationship between the line and how long anyone lives." This
   construction, read on its own, can imply all three verified studies were
   negative, even though Newrick et al. (1990) found a significant
   association.
2. Line 40: "...the practice has not survived testing..." (referring to the
   older writers' formal year-dating schemes). This claims a broader,
   comprehensive/unanimous empirical verdict than the three verified studies
   — which tested life-line length against lifespan generally, not the
   specific dating schemes — establish.

### Correction made

Line 28 now reads: "...the older claim has been tested, and the limited
published studies covered in the life line article show a mixed record that
does not establish a reliable relationship between the line and how long
anyone lives," matching the "mixed record" wording already used in the same
file's closing "Lesson takeaway" (Pass 7) and in `life-line.md`.

Line 40 now reads: "...the limited published testing on life-line length
and lifespan does not support it, and it is not part of how you are being
taught to read," replacing the unqualified "has not survived testing" with
wording scoped to the limited three-study record rather than a comprehensive
verdict, and naming what was actually tested (length vs. lifespan) rather
than implying the dating schemes themselves were the subject of testing.

## Pass 9 — Life-line residual dating-scheme inference removal (2026-08-19)

Scope: Relay PP-RELAY-024 revision 4 (`SOURCE_SENSITIVE`). Director review of
the revision-3 result found that Pass 8's rewording of line 40 still
contained a residual inference: "the limited published testing on life-line
length and lifespan does not support it," where "it" refers back to the
older writers' formal year-dating schemes. The verified studies (Wilson &
Mather 1974, 51 cadavers, no correlation; Newrick, Affie & Corrall 1990, 100
consecutive autopsies, significant association; Lucas, Dhugga & Henneberg
2019, 60 donated cadavers, no correlation) test life-line length against
lifespan; they do not test whether particular locations along the line
correspond to particular ages or events, so they cannot be cited as
evidence against the dating schemes specifically.

### Correction made

Line 40 now reads: "What this lesson will not have you do is count years
along the line. The older writers did exactly that, with formal dating
schemes; this lesson does not teach them." The sentence now states the
historical fact (formal dating schemes existed) and Palmistry Path's
teaching policy (this lesson does not teach them) without citing the
length-vs-lifespan evidence as if it bore on the dating schemes themselves.
The lesson's other empirical summaries of the same three-study record (the
"myth, corrected" section, line 28, and the closing "Lesson takeaway") are
unchanged and remain correctly scoped to line length vs. lifespan.

## Pass 10 — Life-line residual rejection/consensus wording removal (2026-08-20)

Scope: Relay PP-RELAY-024 revision 5 (`SOURCE_SENSITIVE`). Director review of
the cumulative PR found two residual statements in `life-line.md` that still
overstated what the mixed three-study record can establish: "What rejects it
is the evidence above" (empirical-conclusion paragraph) and "What has not
survived is the claim itself ... the modern practitioner literature ...
rejects the lifespan mapping" (FAQ answer). Both implied the mixed evidence
itself disproves or rejects the historical lifespan claim, which overstates a
record where one of three studies (Newrick, Affie & Corrall 1990) found a
significant association. Both passages also used anonymous "modern
practitioner literature" consensus wording where named sources (Fincham,
Gettings, West) were already introduced earlier in the same article.
`lessons/lines/04-life-line.mdx` line 28 used the same anonymous "modern
literature" framing where the same named sources follow in the next
sentence.

### Correction made

- `life-line.md`'s empirical-conclusion paragraph now reads: "The evidence
  above is mixed and does not establish a reliable predictive relationship,
  and Fincham, Gettings, and West — the modern sources named above — have
  moved away from the lifespan reading." This states the absence of reliable
  supporting evidence without claiming the mixed record itself rejects or
  disproves the historical claim.
- `life-line.md`'s FAQ answer ("Does the life line predict how long I will
  live?") now reads: "Modern sources including Fincham, Gettings, and West
  have moved away from the lifespan reading, and the limited published
  studies that have tested it show a mixed record that does not establish a
  reliable relationship." This removes the "rejects the lifespan mapping"
  disproof framing and the anonymous "modern practitioner literature"
  attribution.
- `lessons/lines/04-life-line.mdx` line 28 now opens "**Fincham, Gettings,
  and West broke with that,**" naming the same later sources the sentence
  already cites, rather than the anonymous "the modern literature broke with
  that."

The verified three-study record (Wilson & Mather 1974, no correlation;
Newrick, Affie & Corrall 1990, significant association; Lucas, Dhugga &
Henneberg 2019, no correlation) is unchanged. No new studies, palmistry
meanings, health/lifespan doctrine, or modern-practice prevalence claims were
introduced. `lessons/lines/04-life-line.mdx` line 96's separate "the modern
literature has abandoned them" sentence is a different sentence outside this
revision's authorized scope and was left untouched.

No new studies, citations, historical claims, palmistry interpretations, or
health/lifespan doctrine were introduced.

No new studies, citations, palmistry interpretations, or scientific claims
were introduced. The three verified study citations and outcomes from
Pass 6 (Newrick et al. 1990 significant association; Wilson & Mather 1974
no correlation; Lucas et al. 2019 no correlation) are unchanged. This closes
the residual scope Pass 7 flagged as a candidate for a future bounded pass;
no further residual testing-summary sentences remain in
`lessons/lines/04-life-line.mdx` or `life-line.md`.

## Pass 11 — Life-line residual evidence-scope consistency cleanup (2026-08-20)

Scope: Relay PP-RELAY-024 revision 6 (`SOURCE_SENSITIVE`). Cumulative Director
review found further nearby statements in both files that repeated the
underlying problem Pass 10 addressed: broad "has not held up" conclusions
treated as stronger than the mixed record supports, the anonymous "modern
literature" / "contemporary practitioners" framing Pass 10 had not yet
reached in every occurrence, and wording that presented the lifespan studies
as validating the separate modern short-line/break transition interpretations
those studies never tested.

### Correction made

- `life-line.md`'s opening paragraph ("Empirically, that reading has not held
  up") and closing section ("That attempt has not held up") now both read
  that a reliable relationship between life-line length and lifespan "has not
  been established," rather than implying the mixed record disproved or
  outgrew the historical claim.
- `life-line.md`'s "What has changed is the modern literature" opening now
  reads "What has changed is that later writers broke with that view,"
  naming Fincham, Gettings, and West in the same sentence rather than citing
  an anonymous "modern literature."
- `life-line.md`'s closing "What this article is and isn't" section's
  "contemporary practitioners have moved away from it" is replaced with the
  named sources: "Fincham, Gettings, and West have moved away from the
  lifespan reading."
- `life-line.md`'s short-line section ("Palmistry Path follows the modern
  reading, on the evidence set out above") is reworded to state the modern
  reading is followed as editorial choice, not because the lifespan-vs-length
  evidence validates the separate transition interpretation, since the three
  studies tested length against lifespan, not life transitions.
- `lessons/lines/04-life-line.mdx`'s short-line section similarly no longer
  says the older duration/constitution reading is set aside "on the
  evidence"; it now attributes the choice to following Fincham, Gettings, and
  West, and states explicitly that the evidence above tested lifespan length,
  not life transitions.
- `lessons/lines/04-life-line.mdx` line 96, left untouched by Pass 10 as
  outside that revision's scope, is reworded: "the readings above have no
  demonstrated reliability, and the modern literature has abandoned them" is
  replaced with language clarifying that the published length-vs-lifespan
  studies do not test the break-as-illness/death reading specifically, and
  that not using a break to predict illness/injury/death is Palmistry Path's
  editorial position rather than a research-tested conclusion about breaks.

The verified three-study record (Wilson & Mather 1974, no correlation;
Newrick, Affie & Corrall 1990, significant association; Lucas, Dhugga &
Henneberg 2019, no correlation) and the historical Cheiro/Benham attributions
are unchanged. No new studies, citations, palmistry interpretations, or
health/lifespan doctrine were introduced. This closes the residual
lifespan-evidence/consensus scope-consistency problem across both files.

## Pass 12 — Life-line residual anonymous modern-practice wording (2026-08-20)

Scope: Relay PP-RELAY-024 revision 7 (`SOURCE_SENSITIVE`). Director review of
the cumulative PR found that revision 6's own result preflight had identified
remaining anonymous consensus phrases in the directly related short-line/break
passages — "Modern practitioners read it instead as marking..." and
"Contemporary practitioners read it as marking..." — but revision 6 treated
them as outside its scope. Revision 7 is limited to those residual phrases and
directly equivalent anonymous-authority wording ("in modern/contemporary
practice", "some writers", "the modern tradition") in the same short-line and
break passages.

### Correction made

- `life-line.md`'s short-line section: "Modern practitioners read it instead
  as marking..." and "some associate it with a different relationship..." are
  replaced with explicit Palmistry Path editorial framing ("Palmistry Path
  reads a short line instead as marking..."), matching the editorial-choice
  framing already used in the following paragraph.
- `life-line.md`'s break section: "is read in the modern tradition as a
  significant transition" is replaced with "is read here, as an editorial
  choice, as a significant transition." The overlap-break sentence's "in
  modern practice it describes..." is replaced with "here it describes..."
  for the same reason.
- `life-line.md`'s FAQ answers for "What does a short life line mean?" and
  "What does a broken life line mean?" both replace "In modern practice..."
  with explicit "Palmistry Path reads it/a break, as an editorial choice..."
  framing.
- `lessons/lines/04-life-line.mdx`'s short-line paragraph replaces "In
  contemporary practice, a short life line is associated with..." and "Some
  writers also associate it with..." with the same explicit Palmistry Path
  editorial framing, preserving the existing "following Fincham, Gettings,
  and West" attribution and the evidence-scope clarification ("it tested
  lifespan length, not life transitions").
- `lessons/lines/04-life-line.mdx`'s break section replaces "**In modern
  practice, a break is a transition.** Contemporary practitioners read it as
  marking..." with "**Palmistry Path reads a break as a transition, as an
  editorial choice.** We read it as marking..." The overlap-break sentence
  and the accompanying figure caption both replace "modern practice"/"Modern
  practice" with "here"/"This course," respectively.

No named-source position was invented: the "life transition" reading is
attributed to Palmistry Path's own editorial choice rather than to Fincham,
Gettings, or West, since the repository evidence supports only their
rejection of the lifespan reading, not a specific alternative interpretation.
The verified three-study record (Wilson & Mather 1974, no correlation;
Newrick, Affie & Corrall 1990, significant association; Lucas, Dhugga &
Henneberg 2019, no correlation) and the historical Cheiro/Benham attributions
are unchanged. No new studies, citations, palmistry interpretations, or
health/lifespan doctrine were introduced. A full-file sweep of both touched
files for "modern literature", "modern practice", "modern practitioner",
"contemporary practice", "contemporary practitioner", "some writers",
"experts", and "consensus" returns no remaining matches. Cross-cultural
naming references ("Contemporary Indian practice calls it the Jeevan Rekha",
"Contemporary Chinese palm reading names the life line...") are unrelated to
the short-line/break consensus-claim problem and were left unchanged, as they
are outside revision 7's authorized scope.

---

## Sun/Mercury source fidelity in `advanced/01-minor-lines-overview.mdx` (Relay PP-RELAY-031, 2026-08-20)

Closes the Batch 3E quote-fidelity item carried since
`docs/audits/CURRICULUM_WAVE_3E_3F_BRANCH_AUDIT_2026-08.md` §2/open-item 1.

### What the open item actually was

The audit's quote-fidelity concern was raised against the **unmerged**
`feat/curriculum-wave-3e-3f` branch's proposed Sun/Mercury treatment, which
introduced quotation-marked Cheiro and Benham passages the audit could not check
against the 1916/1900 editions. That treatment was never replayed onto `main`.
The lesson as published on `main` contains **no quotation marks in its body at
all** — the only quotation marks in the file are frontmatter string delimiters.
There was therefore no quotation to verify or convert, and the stale branch was
not merged, rebased, or copied.

What the focused material did carry was three unsupported source claims, found
by reading the Sun/Mercury sections against the site's own Batch 2B/2C
source-verified articles.

### Evidence used

Approved repository-held evidence only: `src/content/blog/beginner/sun-line.md`
and `src/content/blog/beginner/mercury-line.md`, both carried through the
Batch 2B/2C Cheiro/Benham scan pass recorded earlier in this log, plus this
log's own correction tables (the Benham absence-reading corrections at
`mercury-line.md`/`mount-of-mercury.md` and at `sun-line.md`/`05-mount-of-apollo.mdx`).

External source access was attempted and **failed**: Internet Archive,
chestofbooks.com, iapsop.com, Wikisource, and Project Gutenberg are all blocked
by this environment's network egress proxy. No external text was used to
establish any wording. Search-engine result snippets were not treated as
source-quality evidence, and no new quotation was introduced, so no claim in
this change depends on unverified external text.

### Corrections made

| Claim as published | What the approved evidence supports | Action |
|---|---|---|
| A clear sun line "appears on roughly half of hands, depending on how you count it" | Neither `sun-line.md` nor `mercury-line.md` states any prevalence figure for any minor line | Numeric prevalence figure removed; replaced with presence/absence without a frequency claim. The trailing "rarer still" frequency claim went with it |
| "what Cheiro described as personal magnetism or public recognition" | `sun-line.md`'s verified Cheiro material is luck, success and brilliancy in art/stage/public singing, and the world's recognition. "Personal magnetism" appears nowhere in the verified Cheiro content | "Personal magnetism" removed. Cheiro is now cited only for luck; Benham for creative power in art or productive capacity in business; Gettings for brightness in personality and reception by others, not requiring public fame |
| "Fincham offers a more measured interpretation: the sun line is better understood as a marker of confidence and purposeful direction than as a line of fame or achievement" | Fincham (2005) is in copyright and unsearchable — see this log's standing position that in-copyright modern sources were left as they stand and carry no checkable quotation. No repository evidence attributes this reading to Fincham. `sun-line.md` assigns *purposeful direction* to the **fate** line and recognition to the sun line, so the claim also inverted the site's own distinction | Fincham attribution removed rather than reassigned. The not-celebrity point is retained as the site's framing, supported by Gettings' reception reading |
| "Some give it substantial importance... Others use it primarily as a marker of practical intelligence..." | Anonymous-authority framing for readings the evidence attributes by name: Benham for digestion/liver/vitality/constitution on a present line; the communication-and-commerce reading derived from the mount of Mercury; Gettings treating both as complementary | Both "Some"/"Others" replaced with the named attributions |
| "It is among the most variable minor lines in terms of how traditions and practitioners weight it... You will encounter genuine disagreement across sources" | `mercury-line.md` states the health and business readings are complementary and that neither is primary. The documented disagreement is specifically about **absence**: Cheiro reads absence as favourable, Benham does not read absence at all | Superlative-variability claim removed. The disagreement is now stated where the evidence actually places it — the absence question |
| Mercury line "runs from the base of the palm, often from near the mount of Luna or the wrist area" | `mercury-line.md` names three origins and calls the **life line** origin "among the most common starting points" | Frequency claim removed; the three documented origins (life line, Luna, plain of Mars) are named without ranking them |

### Deliberately not changed

`01-minor-lines-overview.mdx` line 30 attributes to Benham the reading that "the
absence of minor lines on an otherwise well-formed hand should not be read as a
deficiency." This log's own correction tables establish twice that Benham does
not read line absence — once for the Mercury/health line and once for the Sun
Line, where the reassurance "sometimes credited to him" was removed from
`sun-line.md` and `05-mount-of-apollo.mdx`. The line-30 sentence is the same
pattern and is very likely unsupported.

It was left unchanged because it is a general minor-lines statement, not Sun or
Mercury material, and PP-RELAY-031's authorized scope is explicitly limited to
the Sun Line and Mercury Line material. Recorded here so it is not lost;
it needs its own bounded task.

### Verification

No quotation marks were added to the lesson body; every named-source statement
is a paraphrase, per the §5 rule that quotation marks mean verified verbatim
wording. `npm run audit:claim-risk` against the file went from 9 findings to 7;
both findings inside the Sun/Mercury material are resolved, and the 7 remaining
sit in general instructional prose (lines 13, 34, 38) and in the relationship-lines
section (line 61), all outside this task's authorized scope. Note that the
scanner never flagged the "roughly half of hands" figure — the most clearly
unsupported empirical claim in the focused material — which is a concrete
instance of the standing warning that a clean heuristic scan is not evidence of
sourcing.

## General minor-lines Benham attribution in `advanced/01-minor-lines-overview.mdx` (Relay PP-RELAY-032, 2026-08-20)

Closes the item recorded above as "Deliberately not changed" under PP-RELAY-031.

| Claim as published | What the approved evidence supports | Action |
|---|---|---|
| Line 30: "Benham, writing in 1900, noted that the absence of minor lines on an otherwise well-formed hand should not be read as a deficiency." | This log's own correction tables (lines 422–423 above) establish twice that Benham does not read line absence at all — for the Mercury/health line, "Benham does not read the line's absence at all; he reads the character of a line that is present," and for the Sun Line, "Benham says nothing of the kind." No repository-held evidence supports Benham making a reassurance about absent minor lines in general | Attribution removed. The sentence is restated as Palmistry Path's own editorial framing ("This site does not read the absence of minor lines on an otherwise well-formed hand as a deficiency"), per the §5.2 rule that the site's own position should be stated as its own, not attributed to a source that does not support it. No replacement historical attribution invented, and no vague anonymous-authority phrasing ("modern palmists", "some writers") substituted |

**Surrounding-paragraph check:** the sentence before ("A hand without any minor lines is not an incomplete hand") and after (major-line-formation, nuance/silence) make no source attribution and were left unchanged. The following paragraph ("Some hands carry a rich secondary layer... Others show only the major lines...") describes variation among hands directly, not a claim attributed to any authority, and carries no prevalence/consensus wording of the kind this task screens for; it was left unchanged.

**Verification:** `npm run audit:claim-risk -- src/content/lessons/advanced/01-minor-lines-overview.mdx` returns the same 7 findings as after PP-RELAY-031 (lines 13, 34, 38, 61), none at line 30; the corrected sentence introduces no new flagged wording. `npm run build`, `npm run content-audit`, and `npm run audit:all` pass. Diff is bounded to this one sentence in the lesson file plus this log entry and the required bookkeeping/canonical docs.

## Remaining general-prose claim-risk findings in `advanced/01-minor-lines-overview.mdx` (Relay PP-RELAY-033, 2026-08-20)

Dispositions the 7 findings recorded as out-of-scope under PP-RELAY-031 (lines 13, 34, 38, 61).

| Finding | Disposition | Reasoning |
|---|---|---|
| Line 13, "most" — "the features that carry the most interpretive weight" | Retained, no repository-evidence claim needed | Not an external prevalence/consensus claim. It states Palmistry Path's own curriculum hierarchy (major lines and mounts are assessed first and carry the primary story; minor lines add nuance), which this same lesson develops and justifies at length in its own "How to read minor lines without overweighting them" section. A superlative about the site's own pedagogical weighting is not a claim about what practitioners or sources believe. |
| Line 34, "generally" — "Fine, irregular markings with no defined direction or destination should generally be set aside" | Retained, no repository-evidence claim needed | Procedural/methodological guidance for telling a true minor line from surface noise, not an empirical or attributed claim. `advanced/02-marriage-relationship-lines.mdx` states the parallel guidance for its own zone almost identically ("Fine, close-set lines with no consistent direction are common in this part of the hand, and not all of them are relationship lines in the interpretive sense"), so the two lessons are internally consistent rather than one inventing an unsupported rule. |
| Line 38, "typically" — "how its variations are typically read" | Corrected | This preview sentence points to the four individual lessons, which present interpretation via named sources and traditional attribution, not statistical typicality. Changed to "traditionally read" to match the lesson's own established diction ("traditionally associated with", used elsewhere in this file and required by `docs/editorial-style-guide.md` §5.2) and remove ambiguity about what evidence "typically" would rest on. |
| Line 61, "most" (×2) — "among the most frequently asked-about features in palmistry and among the most commonly misread" | Corrected — removed | No repository-held evidence ranks relationship lines against other palmistry features for public-interest frequency or misreading rate. This is a bare popularity/prevalence assertion with no traceable source and was cut rather than narrowed, since no repository evidence supports even a narrower version of the ranking claim. |
| Line 61, "commonly" (×2) — "much of what is commonly claimed about them ... is contested or unsupported across serious sources" | Corrected — substance retained, reworded | The underlying claim (a persistent popular belief that line count indicates relationship count, and that length indicates duration) is directly grounded in `advanced/02-marriage-relationship-lines.mdx`: Cheiro's 1916 framing "traveled through popular palmistry for most of the twentieth century and still dominates what most people have heard"; the counting claim "is not supported by the tradition, and it has been actively contested within it. Fincham says so explicitly. Gettings implies it..."; and Peter West (1998) is cited there as framing length as depth "rather than chronological time." Reworded to name that this is one specific, source-traceable belief (attributed to Cheiro's popularization and to Fincham's/Gettings'/West's contesting of it) instead of the unbounded "commonly claimed" phrasing, which named no source and could cover any claim. |

**Surrounding-paragraph check:** the sentence before line 61 (naming "marriage lines" vs. "relationship lines" terminology) and the paragraph after (girdle of Venus) make no prevalence/consensus claims and were left unchanged. No other passage in the file was edited.

**Verification:** `npm run audit:claim-risk -- src/content/lessons/advanced/01-minor-lines-overview.mdx` went from 7 findings (lines 13, 34, 38, 61×4) to 2 findings (lines 13 and 34, both retained above with direct reasoning, no repository-evidence claim required). `npm run build` (105 pages), `npm run content-audit` (60 blog posts, 25 lessons valid), `npm run audit:all` (links, images, schema, indexability, accessibility all pass), and `git diff --check` (clean) all pass. Diff is bounded to the two corrected sentences in the lesson file, this log entry, and required bookkeeping/canonical docs. No new minor-line topics, combination readings, prevalence estimates, or curriculum scope were added; no vague anonymous-authority phrasing was introduced.

## Empirical/anatomical claim audit — opening and general-method sections of `advanced/01-minor-lines-overview.mdx` (Relay PP-RELAY-034, 2026-08-21)

The `audit:claim-risk` heuristic only pattern-matches prevalence/consensus vocabulary; it does not read for unsupported anatomical, developmental, or aging claims. This pass manually inventories every empirical/anatomical/developmental/prevalence assertion in the "What minor lines are" and "Why some hands don't have them" sections (the opening through the start of "The four lines in this module"), including claims the scanner did not flag, per the task's explicit premise that cumulative review found gaps the heuristic misses.

| Claim as published | What the approved evidence supports | Action |
|---|---|---|
| Line 21: "The major lines — the heart line, head line, life line, and fate line — are anchored in the anatomy of how the hand folds and flexes during fetal development." | `docs/source-verification-log.md` (Pass 1, line 21 of this log) and `blog/beginner/can-palm-lines-change.md` establish, via Kimura & Kitagawa (1986), that specifically the **three** major palmar flexion creases (heart, head, life) develop in utero between the 8th and 13th weeks of gestation, before spontaneous fetal hand movement. No repository evidence extends that embryological claim to the fate line; `can-palm-lines-change.md`'s own "Which lines change most" section treats the fate line as the single most changeable major line with no anatomical-origin claim attached. Grouping the fate line into "anchored in fetal folding" overstates what the cited evidence covers. | Narrowed to the three principal creases only. The sentence now states that the heart, head, and life lines are the palm's three principal flexion creases, formed during fetal development before the hand can move — grounded in the same Kimura & Kitagawa evidence already cited elsewhere in the repo. The fate line is moved into the "less fixed" half of the sentence with the minor lines, asserting no anatomical-origin claim about it either way. |
| Line 21: "The minor lines are more variable: more influenced by individual constitution, habitual patterns of movement..." | No repository evidence supports "individual constitution" or "habitual patterns of movement" as an anatomical/developmental mechanism that produces or shapes minor lines. `can-palm-lines-change.md` frames comparable language ("gradual changes in secondary markings are often interpreted as reflecting gradual changes in habits, focus, health, and direction over time") explicitly as a traditional/interpretive reading, not a physical mechanism, and "constitution" elsewhere in this log is a Cheiro/Benham interpretive term for the life line's *reading*, not a claim about what causes a crease to form. | Removed as a stated anatomical cause. The sentence now says only that whether minor lines appear at all, and how clearly, varies far more from person to person than the three principal creases, and that — "in the tradition's interpretive terms" — they are read as reflecting character and life experience. No causal constitution/movement mechanism is asserted. |
| Line 23: "A clear heart line appears on virtually every adult hand." | This log records the site's established caution about prevalence figures (e.g. Pass 1's simian-line prevalence correction to "approximate and population-dependent"). No repository evidence supports a specific prevalence rate ("virtually every") or a legibility rate ("clear") for the heart line. The underlying point — that the heart line is far more universal than an optional minor line like the sun line — is already covered without a bare statistic by the corrected line-21 claim that the three principal creases appear, in some form, on essentially every hand as a matter of fetal-development anatomy. | Removed as a redundant, less-grounded restatement of the same point. The comparison sentence now leads directly with the sun line's variability, relying on the anatomically grounded claim already established one paragraph earlier rather than repeating an ungrounded prevalence figure. |
| Line 32: "Both are well within the normal range of human hands." | No repository evidence establishes a statistical "normal range" for minor-line density. The surrounding paragraph is Palmistry Path's own editorial framing (hand variation is not a deficiency), not an external prevalence claim, so the fix is to state that framing without borrowing statistical-sounding language it cannot support. | Reworded to "Both are simply how hands vary — neither is a more complete or more correct hand than the other," preserving the editorial point without the unsupported "normal range" phrasing. |
| Line 34: "Surface texture, skin creasing from habitual movement, and the natural aging of the palm all produce lines that are anatomical rather than interpretive." | No repository evidence supports habitual movement or aging as an anatomical mechanism that *produces* new palm lines in adulthood; the only embryological evidence in the repo (Kimura & Kitagawa, via `can-palm-lines-change.md`) covers prenatal flexion-crease and ridge-pattern formation, not adult line formation from movement or aging. The instructional point (some visible marks on a palm are not meaningful minor lines) does not require asserting a specific unverified cause. | Reworded to state that fine surface markings — skin texture, incidental creasing, the ordinary effects of aging — "can appear on a palm without being a minor line in the interpretive sense," dropping the unsupported causal claim while keeping the practical guidance intact. |
| Line 34, "generally" — "should generally be set aside" | Unchanged from the disposition already recorded under Relay PP-RELAY-033 above: procedural/methodological guidance for telling a true minor line from surface noise, not an empirical or attributed claim, and consistent with the parallel guidance already published in `advanced/02-marriage-relationship-lines.mdx`. The sentence this hedge sits in was not altered by this pass. | Retained, no repository-evidence claim needed. |
| Line 13, "most" — "the features that carry the most interpretive weight" | Unchanged from the disposition already recorded under Relay PP-RELAY-033 above: the site's own curriculum-weighting statement, not an external prevalence/consensus claim. Outside this task's scoped passages (opening through "How to read minor lines without overweighting them" begins after this sentence) and not touched. | Retained, no repository-evidence claim needed. |

**No invented combination readings, no vague anonymous authority, and no new palmistry meaning:** none of the five corrected passages introduce a new interpretive claim, a combination reading, or an unsupported attribution ("modern palmists", "some writers", etc.) to fill the removed empirical wording. Each correction either narrows the claim to what the repository's own Kimura & Kitagawa-grounded evidence supports, or restates the point as Palmistry Path's own observation/editorial framing without borrowing statistical or anatomical-sounding language it cannot support. The "in the tradition's interpretive terms" framing for minor lines reflecting character/life experience was already present and correctly hedged; it was preserved as is.

**Claim-type separation:** the corrected passages keep three registers distinct — the anatomical fact of principal-crease formation (attributed to the embryological literature, not to palmistry), the traditional/interpretive reading of minor lines as reflecting character (explicitly marked "in the tradition's interpretive terms"), and Palmistry Path's own editorial framing about hand variation not being a deficiency (stated as the site's own position, not attributed to any source).

**Quotation fidelity:** no quotation marks appear in the edited sentences; nothing needed verification against a cited edition.

**Safety boundaries:** none of the five corrections introduce or retain a medical, legal, financial, deterministic-relationship, or predictive-science claim.

**Named-source attributions in the scoped passages:** none. The opening and general-method sections (lines 19–34) carry no named-author attribution; the module's four line-specific sections (Sun, Mercury, relationship lines, Girdle), which do carry named attributions already verified under PP-RELAY-031/032, are out of this task's scope and were not touched.

**Surrounding-paragraph check:** the "This variability is the first thing that distinguishes..." paragraph (line 25) and the "A hand without any minor lines is not an incomplete hand..." opening of the second section (line 30) make no empirical/anatomical/prevalence claims of their own and were left unchanged. The "How to read minor lines without overweighting them" section (lines 69–77) was inspected per the task's required workflow and contains only interpretive-method guidance (how minor lines qualify major-line readings) with no empirical, anatomical, developmental, or prevalence assertion; it was left unchanged.

**Verification:** `npm run audit:claim-risk -- src/content/lessons/advanced/01-minor-lines-overview.mdx` returns the same 2 findings as after PP-RELAY-033 (lines 13 and 34), both re-dispositioned above as non-empirical, no new findings introduced by this pass's wording. `npm run build` (105 pages), `npm run content-audit` (60 blog posts, 25 lessons valid), `npm run audit:all` (links, images, schema, indexability, accessibility all pass), and `git diff --check` (clean) all pass. Diff is bounded to five corrected/reworded sentences across two paragraphs in the lesson file, this log entry, and required bookkeeping/canonical docs. No new minor-line topics, combination readings, prevalence estimates, medical/scientific claims, or curriculum scope were added; no vague anonymous-authority phrasing was introduced.

## Revision 2 — residual prevalence/aging/stability wording in `advanced/01-minor-lines-overview.mdx` (Relay PP-RELAY-034 rev. 2, 2026-08-21)

Independent Director review of the PP-RELAY-034 rev. 1 diff (above) found two of its own corrected sentences still exceeded the approved evidence, plus one adjacent phrase worth re-checking for the same failure mode.

| Claim as published (rev. 1) | What the approved evidence supports | Action |
|---|---|---|
| Line 21: "...formed during fetal development before the hand is capable of movement — part of why they appear, in some form, on essentially every hand." | Kimura & Kitagawa (1986), via `blog/beginner/can-palm-lines-change.md`, establishes only the developmental *timing* of the three principal flexion creases (formation in utero before spontaneous fetal hand movement). It does not establish a near-universal prevalence or legibility conclusion ("essentially every hand"); rev. 1 turned a timing fact into an unsupported prevalence inference. | Removed the "part of why they appear ... essentially every hand" clause entirely. The sentence now ends at the developmental-timing fact the evidence actually supports, with no prevalence conclusion drawn from it. |
| Line 21: "The fate line and the minor lines are less fixed in that way: whether they appear at all, and how clearly, varies far more from person to person..." | "Less fixed in **that way**" ties the fate line/minor-line comparison back to the fetal-development mechanism just described for the three principal creases, implying an unsupported anatomical/developmental contrast (i.e., that the fate line and minor lines are anatomically less "fixed" by the same mechanism). No repository evidence describes fate-line or minor-line formation mechanics at all, so no comparative-stability claim about them can be grounded one way or the other. | Reworded to "are not among those three principal creases" — a plain classificatory statement (they are not one of the three embryologically documented creases) rather than a comparative claim about mechanism or physical stability. The already-acceptable observational point that their presence/clarity "varies far more from person to person" is preserved unchanged, now standing on its own as the site's descriptive observation rather than as a consequence of an implied mechanism. |
| Line 34: "Fine surface markings — general skin texture, incidental creasing, the ordinary effects of aging — can appear on a palm without being a minor line in the interpretive sense." | No repository evidence supports aging as a mechanism that produces adult palm surface markings (the only embryological evidence in the repo covers prenatal crease formation, not adult/aging changes). Rev. 1 had already removed "aging ... produce lines" as a causal claim in the verb position, but "the ordinary effects of aging" as a listed example reintroduces the same unsupported causal attribution in noun form. | Removed "the ordinary effects of aging" from the list of examples. The sentence now reads "Fine surface markings — general skin texture and incidental creasing — can appear on a palm without being a minor line in the interpretive sense," keeping the practical point (some visible marks are not interpretive minor lines) without attributing any of them to a specific unverified cause. |

**No invented combination readings, no vague anonymous authority, and no new palmistry meaning:** all three rev. 2 corrections narrow or remove wording; none add a new interpretive claim, combination reading, prevalence estimate, or unsupported attribution.

**Claim-type separation:** the rev. 2 wording keeps the anatomical fact (three principal creases, embryologically timed and sourced to Kimura & Kitagawa) fully separate from the site's own editorial observation that fate-line/minor-line presence and clarity vary person to person — the latter no longer reads as a consequence of the former.

**Quotation fidelity:** no quotation marks appear in the rev. 2 edits; nothing needed verification against a cited edition.

**Safety boundaries:** none of the three rev. 2 corrections introduce or retain a medical, legal, financial, deterministic-relationship, or predictive-science claim.

**Verification:** `npm run audit:claim-risk -- src/content/lessons/advanced/01-minor-lines-overview.mdx` returns the same 2 findings as after rev. 1 (lines 13 and 34), both already dispositioned above as non-empirical; no new findings introduced by the rev. 2 wording. `npm run build`, `npm run content-audit`, `npm run audit:all`, and `git diff --check` all pass (see rev. 2 result artifact for exact counts). Diff is bounded to the three phrase-level corrections above, this log entry, and required bookkeeping/canonical docs. No new minor-line topics, combination readings, prevalence estimates, medical/scientific claims, or curriculum scope were added; no vague anonymous-authority phrasing was introduced.

## Canonical Head Line lesson claim-boundary cleanup — `lessons/lines/03-head-line.mdx` (Relay PP-RELAY-040, 2026-08-22)

PP-RELAY-037/038 established, and PP-RELAY-039's repository-wide sanity scan confirmed, that `lessons/lines/03-head-line.mdx` still carried the unresolved `ending before it reaches the central zone of the palm` fixed-cutoff wording on `main`, plus other prevalence/degree wording never independently reviewed. This task ran the current `PREVALENCE_OR_CONSENSUS`/`PRECISION_OR_DEGREE_EXTRAPOLATION` claim-risk audit against the file (22 findings), then independently re-read the full lesson for materially equivalent wording the heuristic's word list misses.

**Findings changed (unsupported, narrowed or removed):**

| Line (pre-edit) | Claim as published | What the approved evidence supports | Action |
|---|---|---|---|
| 16 | "usually starting close to where the thumb joins the hand" | No repository evidence establishes a physical-prevalence rate for where the head line begins across hands in general; this is instructional framing to help a reader locate their own line. | "usually" removed; sentence now describes the crease's location directly, without a frequency claim. |
| 28 | "In most hands it starts at, or very near, the same point as the life line" | No repository evidence establishes a prevalence rate for joined-vs-separate head/life line origins. The three configurations are each already covered, without a frequency ranking, in the paragraphs that follow. | Reworded to present joined-vs-separate as the two things to look for, with no prevalence claim. |
| 30, 36 | "one of the most closely studied features of the hand" / figure caption "one of the hand's most studied features" | No repository evidence ranks this feature's study-frequency against the head line's other variables (path, length, depth, endpoint). `beginner/head-line.md` supports only that Western palmistry discusses the origin specifically and precisely, not that it is the *most* studied. | Ranking claim removed; body text now states the feature "carries traditional associations across Western texts" (unranked), and the figure caption lists the three variations without the superlative. |
| 32 | "The longer the two lines remain joined before separating, the more the tradition associates that with caution..." | `PRECISION_OR_DEGREE_EXTRAPOLATION` heuristic match. No repository evidence establishes a graduated, monotonic scale between duration-joined and degree-of-caution for the head line specifically. | Reworded to a binary comparative reading (separates early → independence; stays joined longer → caution), matching the PP-RELAY-038 precedent of dropping monotonic degree-scaling language the source does not support. |
| 42 | "the most visible variable... the one most consistently read across the Western tradition" | No repository evidence ranks path/slope as the single most visible or most consistently read variable against the lesson's other five variables. | Superlative ranking removed; sentence now states the variable is "clearly observable" and "consistently read," without the comparative ranking against the other variables. |
| 46 (unflagged by heuristic — "further" is outside its word list) | "The further the slope, the more strongly this quality is emphasised in the literature." | Same monotonic degree-extrapolation failure mode as PP-RELAY-037/038/039, using "further" rather than "longer/shorter/...". No repository evidence supports a graduated emphasis scale tied to slope angle. | Sentence removed. The single qualitative association ("a strongly sloping head line... is often read alongside creative or artistic inclination") is retained without the added degree-scaling claim. |
| 48 | "Most head lines fall somewhere between the two. A moderate downward slope is common..." | No repository evidence establishes a population distribution of slope angles. | Reworded to state that a head line need not match either extreme, without a prevalence/frequency claim. |
| 64 | "ending before it reaches the central zone of the palm" | `PRECISION_OR_DEGREE_EXTRAPOLATION` heuristic match; the exact wording PP-RELAY-037 already found unsupported in the companion `short-head-line-meaning.md` and PP-RELAY-039 flagged as still unresolved here. No repository evidence establishes a fixed anatomical "central zone" threshold. | Replaced with the palm-relative comparative wording already vetted in `short-head-line-meaning.md` ("ending noticeably earlier across the palm than a line that reaches into the outer half"). |
| 66 | "Most classical Western sources treat significant length as a positive quality." | `beginner/head-line.md` verifies only Benham's reading of length as "abundant mentality" (a positive framing); no repository evidence establishes this as the position of "most classical Western sources" generally. | Narrowed to attribute the claim to Benham specifically, matching the verified evidence. |
| 68 | "A short head line is the reading that popular palmistry most frequently distorts." | No repository evidence quantifies how often popular palmistry gets this wrong. The underlying editorial point (the tradition does not support the simplistic short = less-intelligent gloss) is independently supported by Benham/Gettings and already stated in the next sentence. | "most frequently distorts" removed; reworded as the site's own plain editorial statement ("a reading popular palmistry gets wrong"), consistent with the §5.2 rule that the site's own framing should be stated as its own. |
| 72 | "In most hands it will come to a clear terminus somewhere in the outer half of the palm." | No repository evidence establishes a prevalence rate for endpoint location. | "In most hands" removed; sentence restated as a direct observation with no frequency claim. |
| 76 (unflagged by heuristic — "further" is outside its word list) | "The further it descends into Luna, the stronger the association with the speculative and the creative." | Same monotonic degree-extrapolation failure mode as line 46. No repository evidence supports a graduated association scale tied to descent depth. | Sentence removed as a redundant restatement of the adjacent single-point association already given ("associated with imaginative and intuitive mental life"). |
| 78 (unflagged by heuristic — "consistently" is outside its word list) | "This forked ending appears consistently as a positive marking in the Western sources." | No repository evidence establishes cross-source consistency for this specific claim independent of the "writer's fork" discussion two sections later (which is itself bounded per the existing "left as they stand" policy for unsearchable Gettings/West attributions, log line 98). | Unattributed consensus claim removed; sentence now states the reading is traditional and points forward to the dedicated "writer's fork" section rather than asserting cross-source consistency on its own. |
| 116 | "...the one that most people ask about first" (life line, forward reference) | No repository evidence supports a claim about reader/audience behavior; this is not a palmistry interpretation claim at all, but an unsupported engagement statement outside the site's sourced content. | Trailing clause removed; the sentence now ends at the plain forward reference to the life line. |

**Findings reviewed and left unchanged (compliant or already-verified):**

| Line | Wording | Disposition |
|---|---|---|
| 20, 22, 116 | "the most important line" / "the single most important" (Cheiro) | Attributed specifically to Cheiro throughout, and verified verbatim in `beginner/head-line.md`: Cheiro, *Palmistry for All* (1916), calls the line of head "the most important sign that can be found in the hand." A named, verified attribution, not an anonymous prevalence claim. Retained. |
| 46, 56 | "often read alongside creative or artistic inclination" / "often interpreted as more scattered..." | The style guide's sanctioned hedge phrasing (§2: "this indicates…" → "often interpreted as…"), used here as intended — an interpretive hedge, not a statistical prevalence claim. Retained. |
| 56 | "distributes itself across many interests" | False positive: describes an individual mind's own range of interests, not a frequency/consensus claim about palmistry or about hands in general. Retained. |
| 84, 86 | "appears often enough in the literature to deserve its own note" / "consistency across the major sources — Cheiro, Gettings, West" | Already corrected under the dedicated "writer's fork" verification pass recorded above (this log, "Writer's fork" is Cheiro's term correction, and the `forked-head-line-meaning.md`/`complete-reference.astro` follow-up): the term is attributed to "the popular Western tradition," not to Cheiro directly, matching the fix already made. The Gettings/West attribution follows this log's standing policy (line 98) that in-copyright, unsearchable Tier 2 attributions are left as they stand. No further change made. |
| 94 | "A break followed by a strong resumption of the line is generally read more favourably than a break followed by a chained or faint line." | Supported by the foundational cross-line principle already established in `lessons/lines/line-quality-and-markings.mdx` ("A break followed by a strong, clean resumption is not read as a break followed by a faint or chained one"), which this lesson explicitly draws on ("applying the depth and clarity vocabulary from the first lesson"). Consistent with the same pattern independently sourced for the heart and life lines (Gettings, West, Fincham; Benham, West) in `beginner/broken-heart-line-meaning.md` and `beginner/broken-life-line-meaning.md`. Retained. |
| 108 | "a hand where most lines are faint and fragmented" | False positive: an illustrative contrast within one hypothetical hand's own overall condition, not a population-prevalence claim. Retained. |

**No invented combination readings, no vague anonymous authority, no new palmistry meaning:** every change above narrows or removes existing wording; none add a new interpretive claim, a combination reading, or an unsupported attribution ("modern palmists", "some writers", etc.).

**Claim-type separation:** the edits keep direct observation (what to look for on the reader's own hand), historical/traditional interpretation (attributed to Cheiro/Benham/Gettings or to "the tradition" generally), and Palmistry Path's own editorial framing (the short-line myth correction) distinguishable, unchanged from the original structure.

**Quotation fidelity:** no quotation marks were added or altered; the file uses none.

**Safety boundaries:** no medical, legal, financial, deterministic-relationship, or predictive-science claim was introduced or retained.

**Tooling note:** lines 46, 76, and 78 show the `PRECISION_OR_DEGREE_EXTRAPOLATION`/`PREVALENCE_OR_CONSENSUS` heuristics have narrow word-list gaps ("further" is not in the degree-extrapolation word list alongside "longer/shorter/deeper/..."; "consistently" is not in the prevalence/consensus word list alongside "most/many/often/..."). Both were caught only by the required independent manual re-read, not the automated scan. Left as a documented gap for a future tooling task; not fixed here, consistent with this task's bounded content-only scope.

**Verification:** `npm run audit:claim-risk -- src/content/lessons/lines/03-head-line.mdx` returns 9 findings (down from 22), all dispositioned above as compliant or already-verified. `npm run build` (109 pages), `npm run content-audit` (64 blog posts, 25 lessons valid), `npm run audit:all` (links, images, schema, indexability, accessibility all pass), and `git diff --check` (clean) all pass. Diff is bounded to the fourteen corrected/reworded passages above, this log entry, `docs/CHANGELOG.md`, and the result artifact. No curriculum scope, new companion article, or unrelated lesson content was touched.

## Canonical Head Line lesson claim-boundary cleanup, revision 2 — `lessons/lines/03-head-line.mdx` (Relay PP-RELAY-040 r2, 2026-08-22)

Director review of the revision-1 PR (#62) found that four passages, while no longer matching the automated heuristic's exact word list, still exceeded the approved evidence boundary in substance. This revision corrects those four residual findings only; no other revision-1 wording was reopened.

**Findings changed (unsupported, narrowed or removed):**

| Line (pre-edit) | Claim as published (rev. 1) | What the approved evidence supports | Action |
|---|---|---|---|
| 42 | "...and it is one that is consistently read across the Western tradition." | No repository evidence establishes cross-tradition reading consistency for path/slope specifically; rev. 1 removed the superlative ranking but retained an unattributed consensus claim in its place. | "and it is one that is consistently read across the Western tradition" removed. The sentence now states only the direct, verifiable observation ("This is a clearly observable variable in the head line"), with no consensus claim. |
| 48 | "...a moderate downward slope is a normal middle case..." | No repository evidence establishes a population distribution of slope angles, so no reading can be described as statistically "normal." | "is a normal middle case" reworded to "simply falls between the two" — a plain logical/positional statement (the moderate case sits between the two named extremes), not a distribution or norm claim. |
| 68 | "A short head line is a reading popular palmistry gets wrong." | No repository evidence supports attributing this specific interpretive error to "popular palmistry" as a population; the underlying corrective point (short does not mean less intelligent) is independently supported by Benham/Gettings in the very next sentence and needs no anonymous-authority framing to stand. | Reworded to a direct, unattributed statement of the corrective point itself: "A short head line does not, on its own, indicate limited intelligence." The now-redundant follow-up sentence restating the same point via "the simplistic gloss... is not what the careful tradition says" was removed as duplicative once the direct statement carries the correction; the sourced Benham/Gettings sentence that follows is unchanged. |
| 72 | "It comes to a clear terminus somewhere in the outer half of the palm." | No repository evidence establishes that every head line terminates in the outer half; the lesson's own Length section (line 64) already allows for a line that "stops somewhere in the middle" or ends "noticeably earlier," so an outer-half terminus cannot be asserted as universal. | Reworded to a neutral observation instruction with no location asserted: "Look at where your head line comes to its terminus." The following sentence introducing specific traditional endpoint associations is unchanged. |

**No invented combination readings, no vague anonymous authority, no new palmistry meaning:** all four rev. 2 corrections narrow or remove existing wording; none add a new interpretive claim, combination reading, prevalence estimate, or unsupported attribution. In particular, none of the four replaces the removed wording with a synonym such as "normal," "usual," "standard," "generally," or "consistently."

**Claim-type separation:** the rev. 2 wording keeps direct observation (what to look for on the reader's own hand), traditional/historical interpretation (attributed to Cheiro/Benham/Gettings or "the tradition"), and Palmistry Path's own editorial correction (the short-line point) distinguishable, unchanged from the existing structure.

**Quotation fidelity:** no quotation marks were added, changed, or relied upon in the rev. 2 edits.

**Precision/degree extrapolation:** none of the four rev. 2 edits introduces a graduated or monotonic degree-scaling claim; two remove distribution/consensus language, one restates a positional relationship without a scale, and one removes a universalized location claim.

**Safety boundaries:** none of the four rev. 2 corrections introduces or retains a medical, legal, financial, deterministic-relationship, or predictive-science claim.

**Verification:** `npm run audit:claim-risk -- src/content/lessons/lines/03-head-line.mdx` returns the same 9 findings as after rev. 1, all previously dispositioned above as compliant or already-verified; none of the four rev. 2 edits appears in this list, confirming no new heuristic-flagged wording was introduced. `npm run build` (109 pages), `npm run content-audit` (64 blog posts, 25 lessons valid), `npm run audit:all` (links, images, schema, indexability, accessibility all pass), and `git diff --check` (clean) all pass. Diff is bounded to the four corrected passages above, this log entry, and the revision-2 result artifact. No curriculum scope, new companion article, or unrelated lesson content was touched; all sound revision-1 corrections are preserved.

## Straight vs Curved Head Line companion article — `blog/beginner/straight-head-line-palmistry.md` (Relay PP-RELAY-041, revision 3, 2026-08-22)

Revision 1 had drafted the article using the canonical `lessons/lines/03-head-line.mdx` lesson prose as its evidentiary basis rather than an independently verified primary source, and revision 2 returned `HUMAN_REQUIRED` because this worker's environment could not reach the required public-domain Benham text. Neither revision's draft was ever merged to `main` (no article file existed on `main` going into revision 3). The Director independently verified William G. Benham, *The Laws of Scientific Hand Reading* (1900), Part Second, chapter on the Line of Head, and recorded the controlling evidence boundary at `.ai-ops/evidence/PP-RELAY-041-benham-head-line-direction.md`. Revision 3 drafted the article fresh directly against that evidence note, not against the canonical lesson's prose.

**Claim-by-claim disposition of the published article:**

| Section / claim | Disposition |
|---|---|
| Straight-running head line → practical mentality | Supported. Benham's evidence note confirms he explicitly reads a straight head line as showing "the operation of a practical mentality." Attributed to Benham by name; no IQ, superiority, or deterministic-personality inflation added. |
| Head line sloping toward the Mount of Luna → imagination | Supported. Benham's evidence note confirms he reads a line running toward the Moon as indicating the subject "is not entirely material in ideas and has the power of imagination." Attributed to Benham by name; framed as a departure from purely material/practical thought, not a talent rating. |
| Mention of writers/speakers/literary examples among sloping-to-Moon lines | Supported as a bounded historical example, per evidence-note point 3–4: presented explicitly as "the kind of example Benham drew on to illustrate the association," with an explicit sentence stating the evidence does not establish that degree of slope scales with degree of creativity. No monotonic "steeper = more creative/artistic" rule is stated or implied anywhere in the article. |
| Revision-1 "strongly sloping = creative/artistic" standalone rule | Not carried forward. Per the task's required remediation #4–5, no monotonic degree rule is stated; the article explicitly names and corrects this as a myth ("The steeper the slope, the more creative or artistic the person is.") rather than asserting it. |
| Fixed angle/zone/average cutoff for "straight" vs "sloping" | None used. The "Telling the two apart" section explicitly states there is no fixed angle or zone boundary and frames path as a comparative reading only. |
| Prevalence/frequency/consensus language | None retained. The claim-risk heuristic's two initial findings (an unattributed "rarely" about how head lines run, and "generally" trailing a sentence about mental strength) were both reworded during drafting, not to a synonym, but to remove the frequency/consensus framing entirely. A manual re-read for the same failure-mode words the heuristic's list does not cover (`usual`, `typically`, `common`, `consistently`, `further`) found no additional instances. |
| Vague anonymous authority ("modern palmists", "some writers", "tradition" standing alone as an unnamed source) | None used. Every interpretive claim in the article is attributed to Benham by name. Three drafting-stage references to "the sources this article draws from" (plural, though only one source is cited) were reworded to "Benham's reading" for precision, since the article uses a single named source. |
| Clinical/insanity language from Benham's original text | Not carried forward, per evidence-note point 5 and required remediation #7. The article does not reference Benham's historical clinical framing at all. |
| Combination readings (path synthesized with length, depth, endpoint, forks, mounts, or hand shape) | None introduced. The "Path in context" section explicitly separates path from length (linking to the short/long companion articles), depth/clarity, and endpoint (linking to the writer's-fork article), and states plainly that Palmistry Path's approved sources do not set out a specific combined reading for path together with those other features. |
| Quotation fidelity | No quotation marks are used anywhere in the article; all Benham content is paraphrased at the level the evidence note supports, consistent with the note not having independently re-verified exact verbatim wording for this task. |
| Safety boundaries (medical/legal/financial/deterministic-relationship/predictive-science) | None introduced. The article makes no claims outside mental-orientation associations attributed to Benham. |
| Claim-type separation (observation vs. historical interpretation vs. Palmistry Path editorial guidance) | Maintained structurally: "Telling the two apart" is pure observation guidance; "What it's traditionally associated with" is Benham's historical interpretation, explicitly attributed; "Path in context" and "Common myths" are Palmistry Path's own editorial framing, clearly distinguishable from the Benham material above it. |

**No reciprocal link was added** to `blog/beginner/head-line.md` (the "main head line guide" the new article links to); that file is outside this task's authorized scope (primary/supporting scope covers only the new article and specific bookkeeping docs, not `head-line.md`). The new article links out to it, to the short/long head-line companions, and to the forked-head-line companion, matching the established reciprocal-link pattern used by the short/long companions; the site's blog index/RSS listing already prevents the new article from being orphaned (confirmed by `npm run audit`'s no-orphan check).

**Noted but explicitly out of scope:** `blog/beginner/head-line.md` (a different file from the canonical `lessons/lines/03-head-line.mdx` lesson cleaned up under PP-RELAY-040) still contains unsupported monotonic degree-scaling wording for head-line slope — "The degree of slope matters... a more pronounced slope indicates that imaginative and intuitive tendencies are dominant," "reaching toward or well into the lower portion of the mount, intensifies this... strong artistic or creative tendencies," and an FAQ answer stating "The steeper the slope, the more dominant those tendencies are" — plus Cheiro clinical-framing language ("extreme morbid imagination"). This is the same failure mode PP-RELAY-041 was authorized to avoid in the new companion article, and PP-RELAY-039's repository-wide scan already flagged two of these instances as future heuristic findings in `blog/beginner/head-line.md`. This task's packet scope covers only `straight-head-line-palmistry.md` and specific bookkeeping docs, explicitly excludes `head-line.md`, and directs against expanding into "other legacy Head Line cleanup," so no change was made to `head-line.md`. Recorded here for a future bounded task to address.

**Verification:** `npm run audit:claim-risk -- src/content/blog/beginner/straight-head-line-palmistry.md` returns 0 findings (2 initial findings, both reworded during drafting — see disposition table above). `npm run build` (110 pages), `npm run content-audit` (65 blog posts, 25 lessons valid, after correcting `docs/editorial-backlog.md`'s published-count line from 64 to 65), `npm run audit:all` (links — including the no-orphan check — images, schema, indexability, accessibility all pass), and `git diff --check` (clean) all pass. Diff is bounded to the new article file, this log entry, the `docs/editorial-backlog.md` published-count/status update, `docs/CHANGELOG.md`, and the revision-3 result artifact. No canonical Head Line lesson, claim-risk tooling, or unrelated article was touched.

## Straight vs Curved Head Line companion article — `blog/beginner/straight-head-line-palmistry.md` (Relay PP-RELAY-041, revision 4, 2026-08-22)

Revision 3 (PR #64) was never merged to `main`. Cumulative Director review of that PR found two residual source-boundary issues in an otherwise-approved article: the "Path in context" section assigned head-line depth/clarity a meaning ("focus and concentration") that the controlling evidence note, `.ai-ops/evidence/PP-RELAY-041-benham-head-line-direction.md`, does not establish; and the "What it's traditionally associated with" section described Benham's reading of head-line direction as "one of its more telling features," a comparative/historical embellishment not directly stated in the evidence note. Revision 4's authorized remediation is limited to these two phrases; no other revision-3 wording was reopened.

**Claim-by-claim disposition of the two remediated passages:**

| Passage | Revision 3 wording | Disposition | Revision 4 wording |
|---|---|---|---|
| "Path in context" — depth/clarity | "Whether a line is deep and clearly traced, or faint, is its own observation about focus and concentration, independent of whether the line runs level or slopes." | Not supported. The evidence note's claim boundary covers only direction/path (straight → practical; sloping-to-Luna → imagination) and explicitly does not extend to depth/clarity. No other approved repository source for a depth/clarity meaning was identified within this task's bounded scope. Per the task's required remediation #1, the interpretation is removed rather than replaced with an unsourced substitute. | "Depth and clarity are also separate, covered in the main head line guide, independent of whether the line runs level or slopes." — states depth/clarity is a distinct feature and points to where it is covered, without asserting what it means. |
| "What it's traditionally associated with" — opening attribution | "William G. Benham, writing in *The Laws of Scientific Hand Reading* (1900), read the direction of the head line as one of its more telling features." | Not directly established. The evidence note documents that Benham read direction as indicating practical mentality (straight) or imagination (sloping toward Luna); it does not state or imply that Benham ranked direction among the line's more or less "telling" features. Per the task's required remediation #2, narrowed to the suggested factual-attribution form. | "William G. Benham, writing in *The Laws of Scientific Hand Reading* (1900), associated the direction of the head line with different mental tendencies." — states the attribution and topic without an unsupported ranking claim. |

**Preserved revision-3 evidence boundary (unchanged, re-verified against the evidence note during this revision):** straight-running head line → Benham/practical mentality; sloping toward Luna → Benham/imagination and departure from purely material thought; writer/poet examples remain historical illustrations only, with an explicit statement that degree of slope is not established to scale with degree of creativity. No fixed angle/zone/average, prevalence/frequency, vague consensus, IQ/intelligence-superiority, invented-combination, deterministic-personality, or clinical/medical wording was introduced by this revision or found remaining from revision 3.

**Full-article re-check for this revision:** re-read the complete article end to end against the source-boundary checklist (prevalence/consensus language, historical/scientific assertions, invented combination readings, vague anonymous authority, quotation fidelity, claim-type separation, safety boundaries) beyond the two flagged passages. No additional residual issue was found; the revision-3 disposition table above remains accurate for every other passage in the article.

**Verification:** `npm run audit:claim-risk -- src/content/blog/beginner/straight-head-line-palmistry.md` returns 0 findings. `npm run build` (110 pages), `npm run content-audit` (65 blog posts, 25 lessons valid), `npm run audit:all` (links — including the no-orphan check — images, schema, indexability, accessibility all pass), and `git diff --check` (clean) all pass. This revision's diff is bounded to the two corrected passages in the article, this log entry, the `docs/CHANGELOG.md` revision-4 entry, and the revision-4 result artifact; `docs/editorial-backlog.md`'s published-count/status entries from revision 3 are carried forward unchanged since this PR is the first to merge the article to `main`.

---

## Legacy Head Line pillar — `blog/beginner/head-line.md` source-integrity cleanup, revision 2 (Relay PP-RELAY-042, revision 2, 2026-08-22)

Revision 1 (PR #66) was closed without merging: Director review found it had removed several risky passages but incorrectly retained multiple unsupported prevalence/consensus and anonymous-authority statements squarely inside this task's cleanup categories. Because none of revision 1's edits had reached `main`, this revision reconstructs the sound revision-1 corrections and applies the required revision-2 remediation on top of them in one pass against current `main`, per the task's "preserve the sound revision-1 edits" instruction.

**Revision-1 corrections carried forward unchanged (re-verified against the evidence note during this revision):**

| Passage | Disposition |
|---|---|
| "This is the consistent Western formulation..." | Unattributed consensus claim removed; restated as this article's own framing anchor. |
| "The classical writers note that the longer the two lines remain joined... the longer this period... extend." | Vague-plural-authority monotonic degree-scaling sentence removed entirely (joined-line reading). |
| "The moderate separation is generally the most positively read position in the Western tradition..." | Ranking/consensus claim removed; retained only Cheiro's directly quoted, positively-framed reading. |
| "...and other writers confirm this general reading. The wider the gap, the more strongly this quality is associated." | Anonymous-authority confirmation and unsupported degree-scaling sentence removed (widely-separated reading). |
| "has been associated in classical texts with..." / "Contemporary writers have reframed this as..." | Both vague-authority attributions removed; the gentler frame is now stated directly as this article's own editorial choice (overlapping-origin reading). |
| "The degree of slope matters: a gentle downward curve... a more pronounced slope indicates... dominant." | Monotonic degree-scaling sentence removed (direction/path section, gentle-slope paragraph). |
| "...intensifies this: the tradition associates it with a highly developed inner life... Cheiro associated a sharply sloping head line with extreme morbid imagination... The underlying observation... remains within the tradition." | Degree-scaling claim and Cheiro's unauthorized clinical framing both removed; replaced with Benham's writer/poet examples framed explicitly as illustrations only, per `.ai-ops/evidence/PP-RELAY-041-benham-head-line-direction.md`, which states the evidence does not establish that degree of slope scales with degree of creativity. |
| "Classical texts associated it with unusual mental capacity..." (double head line) | Vague-authority attribution removed; restated as "This has traditionally been associated with...". |
| FAQ: "The steeper the slope, the more dominant those tendencies are..." | Monotonic degree-scaling sentence removed. |

**New revision-2 corrections (the residual issues Director review found and this task's required remediation list):**

| Line (approx.) | Passage as it stood after revision 1 | What the approved evidence supports | Action |
|---|---|---|---|
| 17 | "It typically begins on the radial side of the hand..." | No repository evidence establishes a population frequency for where head lines begin; the "typically" qualifier is an unsupported prevalence claim layered onto a plain anatomical description. | "typically" removed; the sentence now states the observation directly with no frequency claim. |
| 19 | "The head line usually starts at or near the same origin as the life line..." | No repository evidence establishes how often the two lines share an origin; the very next paragraphs describe joined, moderately separated, widely separated, and overlapping variants, so a blanket "usually" is also in tension with the section's own taxonomy. | "usually" removed; states the relationship without a frequency claim. |
| 33 | "This is the variation Western palmistry discusses most specifically at the head line, and for good reason: it is one of the clearest features to observe, and the tradition is precise about what it suggests." | No repository evidence supports a claim that this variation is discussed "most specifically" relative to others, or that "the tradition is precise" — both are unattributed ranking/authority claims. | Both claims removed; kept only the plain observational point ("This is one of the clearest features to observe at the head line"), matching the task's explicit example pairing. |
| 61 | "...is among the most discussed special features in Western palmistry. It is commonly called the 'writer's fork'..." | No repository evidence ranks this feature's discussion frequency, and "commonly called" is an unattributed naming-prevalence claim. The sibling article `blog/beginner/forked-head-line-meaning.md` (already-verified repository evidence) establishes instead that "the 'writer's fork' is a label from later popular palmistry rather than from the classical texts — neither Cheiro nor Benham uses the phrase." | Ranking and prevalence language removed; replaced with the sibling article's already-verified, more precise factual claim about the term's origin. |
| 65 | "...as one contemporary practitioner puts it plainly, 'many people have forks but no special writing talent, many without writer's forks are good writers.' ... It appears among writers with notable frequency, which is how the name spread..." | The quotation is attributed to an unnamed "contemporary practitioner" with no identifiable source or page — a vague anonymous authority carrying an unverifiable quotation. "Notable frequency" and "which is how the name spread" are unsupported prevalence and causal-history claims with no repository evidence. | Quotation and its anonymous attribution removed entirely rather than reattributed to an invented source; the underlying corrective point (the fork doesn't track writing talent) is restated in the article's own editorial voice, without a frequency or causal-history claim. |
| 75 | "Upward branches... are generally read positively..." | No repository evidence establishes how generally/consistently this reading holds. | "generally" removed; states the reading directly. |
| 79 | "A double head line... is uncommon and treated as a notable feature." | No repository evidence establishes a rarity rate for double head lines. | "uncommon" removed; "notable feature" (the site's own descriptive framing, not a population claim) retained. |
| 96 (FAQ) | "...typically at or near the same origin as the life line..." | Same issue as line 19's "usually" — no evidence for a frequency claim, and it duplicates the taxonomy given in the body. | "typically" removed. |
| 116 (myth) | "It appears frequently in writers' hands; it also appears in many other hands..." | No repository evidence establishes a by-profession frequency rate; asserting it as fact undercuts the sentence's own myth-correction purpose. | "appears frequently in writers' hands" removed; restated as "appears across many kinds of hands, not only writers'," preserving the corrective point without a frequency claim. |
| 118 (myth) | "...is not how the contemporary tradition works..." | "The contemporary tradition" is an unnamed collective-authority claim with no identifiable source. | Restated as this article's own stated position ("is not how this article reads them"), consistent with this log's established practice of attributing the site's own editorial framing to itself rather than to an anonymous consensus. |

**Findings reviewed and left unchanged (compliant, quoted, or false positive):** re-running `npm run audit:claim-risk -- src/content/blog/beginner/head-line.md` after these edits returns 14 findings (down from 22 before this revision's edits), none matching this task's four cleanup categories:
- Line 9 ("most anxious attention" / "most persistent misreading" / "most important line") and line 11 ("the most important sign... in the hand") — editorial scene-setting about this article series and a direct, verified Cheiro quotation respectively; not a population-prevalence or consensus claim.
- Line 17 ("among its most significant features") — Palmistry Path's own statement of which features this article treats as worth close attention, analogous to the previously-retained "features that carry the most interpretive weight" framing in `advanced/01-minor-lines-overview.mdx`'s log entry; not an external consensus claim.
- Line 45 ("considers many angles") — describes an individual mind's own range of interests, not a claim about hands generally; consistent with the previously-documented false-positive pattern for this construction.
- Line 49 ("great brain workers usually have thin, fine, clean looking lines") — inside a directly quoted, previously-verified Cheiro passage; quotation fidelity requires leaving quoted wording unaltered.
- Line 65 ("many people have it without any special literary ability, and many capable writers do not have it at all") — this revision's own rewrite stating the fork tracks neither presence nor absence of writing talent in either direction; not a frequency claim about the general population.
- Line 89 ("often where the most revealing observations occur") — Palmistry Path's own statement about its cross-line reading method, in the article's own "head line in context" synthesis section; not an attributed claim about the tradition or a population.
- Line 102 ("appears in many hands, not exclusively in writers'") and line 114 ("Creativity takes many forms") — both already state a non-exclusivity/breadth point rather than a prevalence rate, and were not part of this task's required examples.

**No invented combination readings, no vague anonymous authority, no new palmistry meaning:** every revision-2 edit above narrows or removes existing wording; none adds a new interpretive claim, combination reading, prevalence estimate, or unsupported attribution. The writer's-fork naming correction (line 61) draws only on already-verified repository evidence from the sibling `forked-head-line-meaning.md` article, not an invented source.

**Direction/path evidence boundary:** unchanged from revision 1 and re-confirmed against `.ai-ops/evidence/PP-RELAY-041-benham-head-line-direction.md` during this revision: straight-running head line → Benham/practical mentality; sloping toward Luna → Benham/imagination and departure from purely material thought; writer/poet examples remain historical illustrations only, with an explicit statement that degree of slope is not established to scale with degree of creativity.

**Claim-type separation:** unchanged in structure — direct observation, historical/traditional interpretation (attributed to Cheiro/Benham or "the tradition" generally), and Palmistry Path's own editorial framing (the corrected myths, the fork's talent-neutral framing) remain distinguishable throughout.

**Quotation fidelity:** no quotation marks were added or altered by this revision. The unverifiable quotation anonymously attributed to "one contemporary practitioner" (line 65) was removed rather than kept and reattributed, since no identifiable source could be verified for it. The pre-existing Cheiro quotations (lines 11, 23, 37, 39, 45, 49) are unchanged and were previously flagged in the Pass 1 (2026-08-10) table as unverified against the original 1916 text — a pre-existing gap outside this task's four required categories, left for a dedicated quotation-verification task.

**Safety boundaries:** no medical, legal, financial, deterministic-relationship, or predictive-science claim was introduced or remains; removing Cheiro's clinical framing (carried forward from revision 1) keeps the article's one prior unauthorized medical-adjacent phrase out.

**Material source concern logged, not expanded:** line 79's "the more common forks and branches that originate at or near the head line's endpoints" is a comparative statement between two feature-types described within this same article rather than an external population-prevalence claim, and was left unchanged as outside this task's four required categories (it does not use any of the flagged prevalence/consensus/authority words). Flagged here for a future pass rather than silently expanded into.

**Verification:** `npm run audit:claim-risk -- src/content/blog/beginner/head-line.md` — 22 findings before this revision's edits → 14 after, all reviewed above as compliant, quoted, or false positive. `npm run build` (110 pages), `npm run content-audit` (65 blog posts, 25 lessons valid), `npm run audit:all` (links — including the no-orphan check — images, schema, indexability, accessibility all pass), and `git diff --check` (clean) all pass. Diff is bounded to the reconstructed revision-1 corrections plus the eleven revision-2 corrected passages above, this log entry, `docs/CHANGELOG.md`, and the revision-2 result artifact. No curriculum scope, new companion article, claim-risk tooling, or unrelated article was touched.
