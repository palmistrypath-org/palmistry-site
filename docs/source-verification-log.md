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
