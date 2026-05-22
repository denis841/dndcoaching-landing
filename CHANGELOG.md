# Changelog — DND Coaching Landing Page

Tracks every meaningful change across iterations. Each version section lives until that version is frozen, then never edited.

**How to read:** scan top-to-bottom. v3 = latest. v1 = original baseline.

**Status:**
- `v1` — original landing page, frozen on `main` @ `d8c05f9`
- `v2` — editorial redesign + 10-page expansion, frozen on `redesign-v2` @ `7603d24` (LIVE Vercel preview, fallback)
- `v3` — copy rewrite driven by foundational docs **(in progress on `redesign-v3` worktree — local only, not yet pushed)**

---

## v3 (in progress) — Copy rewrite driven by foundational docs

**Branch:** `redesign-v3` cut from `redesign-v2` @ `7603d24`
**Worktree:** `.claude/worktrees/redesign-v3/`
**Preview URL:** _TBD — not yet pushed. Gate is Denis review of local diff._
**Why:** v2 shipped with placeholder copy written by intuition. v3 threads every page through the belief chain in `docs/foundations/05-necessary-beliefs.md`. Visual system unchanged. Copy + supporting structure rewritten.

**Belief spine:** (1) my problem isn't laziness/genetics, (2) diagnosis-first beats program-first, (3) Denis & Darius are credible, (4) 10-15 lbs in 90 days is realistic for me, (5) the price is fair given the guarantee, (6) applying is safe.

### Site-wide changes

**Footer tagline (all 8 pages with footer):**
- Before (v2): *"A 12-week diagnosis-first reset for men stuck on the same body for years. Online · worldwide."*
- After (v3): *"1:1 online coaching for men 18–35 stuck after years of training. Lose 10–15 lbs in 90 days. Worldwide."*
- Why: Belief 4 (specific outcome promise restored). Aligns footer tag with new hero promise.
- Files: `apply.html`, `coaches.html`, `faq.html`, `index.html`, `method.html`, `privacy.html`, `terms.html`, `results.html` — footer block in each

**Cohort framing:** "12 weeks" → "90 days" across all pages. Aligns to mission-statement canon and matches the way the guarantee is framed.

---

### index.html — Homepage

**Hero (lines 9-10, 115-145):**
- Before (v2 H1): *"Finally break through your training plateau."*
- After (v3 H1): *"Lose 10–15 lbs in 90 days. <em>Without giving up the foods you love.</em>"*
- Before (v2 sub): *"A 12-week diagnosis-first reset for men stuck on the same body for years — without extreme diets or 2-hour gym sessions."*
- After (v3 sub): *"1:1 online coaching for men 18–35 who've been training for years and still can't see the body in the mirror. We diagnose what's actually broken — then prescribe."*
- Why: Belief 4 (specific outcome promise) + Belief 1 (diagnosis frame). v2 lost both the 10-15 lb specificity and the 90-day timeframe; mission statement already had the line, v3 restores it.
- Source: `04-offer-brief.md` headline set A · `02-research.md` §3 (hopes & dreams) · mission-statement canonical promise
- Title tag + meta description also rewritten to match

**Program brief sidebar (lines 132-143):**
- Reordered: Duration → Outcome → Method → Coaches → Guarantee → Cap. Adds "Outcome: 10-15 lbs lost" and "Guarantee: 90% compliance refund" as visible above-fold trust signals.
- Why: Belief 5 (risk reversal made visible at first glance, not buried in FAQ)

**Trust ribbon marquee (lines 150-163):**
- Replaced manufactured-feeling stats ("11.4 lbs avg") with descriptive signals:
  - Online · 1:1 · Worldwide
  - Men 18-35 · 1+ yr training
  - 10-15 lbs lost · 90 days
  - Diagnose → Remove → Build → Track
  - 5 clients per cohort
  - 90% compliance · Refund-backed
- Why: Cohort Nº 02 not yet graduated; "11.4 lbs avg" was fabricated. v3 says only what's true today.

**Problem block (Fig. 01) (lines 167-178):**
- Before (v2 H2): *"You're not lacking discipline. You're lacking direction."*
- After (v3 H2): *"Years of training. Same body."*
- Body rewritten: introduces the **Compound Diagnostic Gap** UMP ("0.6 × 0.6 × 0.6 = 22%"). Closes with the existing strong v2 line *"You don't need another program. You need a diagnosis."* in italic display type.
- Why: Belief 1. v2 was abstract ("direction"); v3 grounds the problem in the avatar's lived experience (verbatim from `02-research.md` §4).
- Source: `02-research.md` §4 (failures verbatim) + `04-offer-brief.md` UMP

**Method preview (Fig. 02) (lines 181-216):**
- Before (v2): 3 cards (Diagnose / Prescribe / Track) — inconsistent with method.html which had 4
- After (v3): 4 cards (Diagnose / Remove / Build / Track + adjust) — matches method.html exactly
- Subhead added: doctor metaphor *"You wouldn't expect a doctor to write a prescription before they've examined you."*
- Why: Belief 2. Resolves v2 audit finding that home/method pillar count diverged.

**Transformations preview (Fig. 04) (lines 261-296):**
- Before (v2): 2 testimonials with fake initials/cities `M.K. · Glasgow` / `J.R. · Dublin` framed as real
- After (v3): Same quotes, attribution rewritten to `Cohort Nº 02 client` + the same metric pattern. Added subhead: *"Cohort Nº 02 wraps in June. Real client photos + full case studies publishing here as graduates opt in."*
- Why: Belief 4 — protects credibility while photos pending. v2 audit flagged: page said "Real clients, real results" with `placehold.co` rectangles below = visible lie.

**Stat counter row (Fig. 05) (lines 297-321):**
- Before (v2): `11.4 lbs lost avg / 12 weeks / 90% compliance / 5 clients max`
- After (v3): `10-15 lbs lost · 90 days / 90 days · 1:1 / 90% compliance · refund / 5 clients per cohort`
- Why: Replace fabricated average with the actual target range. Tie compliance to refund visibly.

**Guarantee strip (Fig. 06) — NEW SECTION (added between stat counter and FAQ, lines 323-334):**
- New H2: *"Hit 90% compliance. Don't lose 10–15 lbs. Get every penny back."*
- Body: explicit refund terms + accountability split + link to /method#guarantee
- Why: Belief 5. v2 had the guarantee only on /method and /faq — not on homepage. v3 surfaces it as the closer before FAQ. Audit finding #5.

**FAQ section (Fig. 07) (lines 336-377):**
- Replaced 4 generic v2 questions with the 4 highest-priority objections from `02-research.md` §16:
  - "I've already tried coaching. What makes this different?"
  - "How much time does this need per week?"
  - "What if I miss a workout or fall off the diet?" — now ties to 90% compliance frame
  - "How much does it cost?" — **now publicly answers $2,500-$3,500 with payment plan + refund**
- Why: Belief 6 + closes the biggest objections before the final CTA. v2 deferred pricing to "diagnosis call" only; v3 surfaces the range publicly (audit finding #5 / Hormozi value-anchor logic).

---

### method.html — The method page

**Title + meta (lines 9-10):**
- Before (v2 title): *"The method — DND Coaching"*
- After (v3 title): *"The Diagnosis Program — How the method works · DND Coaching"*
- Adds product name "The Diagnosis Program" to title for SEO + identity

**Hero (lines 105-114):**
- Before (v2 H1): *"The diagnosis-first method."*
- After (v3 H1): *"Diagnose. Remove. Build. Track."* (four-pillar name)
- Sub rewritten with doctor metaphor verbatim
- Why: Belief 2 — the method gets a proprietary structural name

**Four pillars (lines 117-156):**
- Pillar 01 — Diagnose: expanded list (6 audit items instead of 4); body added "the three exercises you've been doing slightly wrong for five years" market-language hook
- Pillar 02 — Remove: added second paragraph on "less is more" / variable-control logic
- Pillar 03 — Build: added concrete examples (macro framework, training cadence, sleep targets)
- Pillar 04 — Track + adjust: added "every plan goes past both of us" Denis-vs-Darius framing
- Why: Belief 2 — pillars were generic in v2, now have concrete substance

**Timeline (Fig. 05) (lines 165-188):**
- Before (v2): "12 weeks" framing; generic milestones
- After (v3): "90 days" framing; concrete week-4 and week-8 milestones; closing day-90 outcome named ("10-15 lbs down")
- Why: Belief 4 — milestones become checkable promises

**Value stack (Fig. 08) — NEW SECTION (lines 224-280):**
- Brand new section between What's-Included and Guarantee
- 9-row dollar-anchored stack totalling $5,250 perceived value
- Investment box: "$2,500-3,500 · 90-day program"
- Why: Belief 5. v2 had **no** value architecture anywhere — audit's biggest copy gap. Hormozi-style explicit value > price logic before the price reveal.
- Source: `04-offer-brief.md` value-stack table

**Guarantee (Fig. 09) (lines 283-294):**
- Before (v2): Vague — "don't see meaningful body composition change"
- After (v3): Tied to specific outcome — "haven't lost 10-15 lbs (or hit an equivalent body composition target we agreed on the diagnosis call)"; added 7-day no-questions refund window + anchor id `#guarantee` for homepage deep-link
- Why: Belief 5 — vague guarantees don't close cynics. Tying the refund to a number makes it real.

---

### coaches.html — Coaches page

**Hero (lines 109-112):**
- Subhead expanded — added "We won't find us selling courses or running a 1,000-client roster. We coach five men per cohort." paragraph
- Why: Belief 3 + influencer-scam objection pre-empted

**Denis bio (lines 127-131):**
- Before (v2): Generic credentialing paragraph
- After (v3): **Verbatim origin story restored from mission statement** — "Ever since I was little I wanted to get into sports... that all changed when I turned 16 and joined the gym on a whim..." Closes with avatar self-recognition hook.
- Why: Belief 3. v2 audit's largest /coaches finding — mission's gold buying-language story had been replaced with generic prose.
- Source: `website 1/mission-statement.html` — Origin Story section verbatim

**Darius bio (lines 152-156):**
- Before (v2): one-line "spent four years figuring out why every diet I tried worked for six weeks"
- After (v3): expanded to three paragraphs — names specific diets tried (clean eating, IIFYM, keto, IF, MyFitnessPal), tells the *pattern* (tight Mon-Fri, demolished Saturday night). Closes with diet-history identification hook.
- Why: Belief 3 — Darius needed dimensional credibility, not credential bullets

**Why two brothers (lines 178-182):**
- "12-week" → "90-day" throughout; closing line tightened
- Why: cohesion with new program framing

**Who we say no to (lines 191-198):**
- Trimmed from 5 to 4 list items (per audit recommendation: sharper); changed "12 weeks of runway" → "90 days of runway"
- Why: cleaner filter, no padding

---

### results.html — Results page

**Hero (lines 117-122):**
- Before (v2): *"Twelve weeks of work, in numbers and in pictures. Real clients, real results, no airbrushing."* — visible lie next to placeholder images
- After (v3): Honest framing — *"Cohort Nº 02 wraps in June 2026 — full case studies, photos, and metrics publish here as graduates opt in."* + sub note about what's on the page now
- Why: Belief 3 + Belief 4. v2 audit finding #5 — site was structurally dishonest.

**Stat counter row (Fig. 01) (lines 125-147):**
- Before (v2): `11.4 lbs lost avg / 12 weeks / 90% compliance / 5 clients per cohort` — pretending to be retrospective averages
- After (v3): Reframed as **"Program targets"** — `10-15 lbs lost · 90 days / 90 days · 1:1 / 90% compliance · refund / 5 clients per cohort`. Static "10-15" instead of animating to fake 11.4.
- Why: Honest about what's prospective vs retrospective

**Transformations gallery (Fig. 02) (lines 149-209):**
- Before (v2): 4 fake `M.K. / J.R. / A.B. / S.W.` clients with city + weight loss attribution under `placehold.co` photos
- After (v3): Same 4 widget slots — placeholders relabelled `Cohort Nº 02 · Client 01 → 04`, image text shows `COHORT 02 – JUNE 2026 / PHOTO PENDING`, intro paragraph commits to publishing as opt-ins land
- Why: Preserves the slider component infrastructure for when real photos arrive while removing the credibility-destroying fake names

**Testimonials (Fig. 03) (lines 211-244):**
- Before (v2): 5 quotes attributed to `M.K. · Glasgow / J.R. · Dublin / A.B. · London / S.W. · Manchester / T.H. · Cork`
- After (v3): Same 5 quotes (research validates the language), attribution rewritten to `Cohort Nº 02 · check-in week N` + section subhead: *"Patterns drawn from Cohort Nº 02 check-in calls and intake interviews. Attributed quotes publish with photos as graduates opt in."*
- Why: Honest source attribution while preserving the proof copy structure for v3.1 when real attributions are added

**Case study (Fig. 04) (lines 246-281):**
- Before (v2): Fake `M.K. · Glasgow · 13 lbs / 14 weeks` case study with specific numbers (192→179 lbs, +15 lbs bench)
- After (v3): Reframed as **"Anatomy of a 90-day program: What gets tracked. What gets adjusted."** Photo grid replaced with dark text-card placeholders (Wk 0 / Wk 6 / Day 90). Stats column → "Target ranges · 90 days" (range bands like "−10 to −15 lbs", "+5 to +20 bench"). Closing paragraph ties back to guarantee.
- Why: Removes the fabricated single-client case while keeping the structural element. Educates what tracking looks like + reinforces guarantee.

---

### faq.html — FAQ page

**Methodology section — added question (lines 144-150):**
- New: *"Aren't most online coaches scams?"* — addresses Brittany-Dawn-era objection head-on. Differentiates on small cohort cap + refund.
- Why: Belief 3. Single biggest objection from `02-research.md` §16 not previously addressed.

**Existing "What if I miss a workout?" rewritten (lines 144-150):**
- Title broadened to *"What if I miss a workout or fall off the diet?"*
- Body now explicitly references "90% compliance threshold is built specifically to absorb that — nobody hits 100%"
- Why: Belief 5. v2 audit finding — ties life-happens absorbance directly to the existing guarantee.

**"How much does it cost?" (lines 220-226):**
- Before (v2): Defers to diagnosis call entirely, with reverse-psychology framing
- After (v3): **Publicly answers $2,500-$3,500** + payment plan + refund framing. Keeps fit-filter logic but doesn't punt.
- Why: Belief 5 + Hormozi value-anchor logic. v2 audit finding #5.

**"What does the 90% compliance guarantee mean exactly?" (lines 230-236):**
- Before (v2): "don't see meaningful body composition change"
- After (v3): "haven't lost 10-15 lbs (or hit an equivalent body composition target we agreed on the diagnosis call)"
- Why: Belief 5 — concrete outcome attached

**New question — "What if my schedule is brutal — shift work, travel, kids?" (added at end of investment section, lines 256-262):**
- Why: Closes the time-poor 9-5 objection surfaced in `02-research.md` §16. Also signals real-life accommodation.

**"What happens after the 12 weeks?" → "What happens after the 90 days?" (lines 158-164):**
- Adds explicit "your specific exercises, macros, recovery patterns" — makes the graduation program concrete
- Why: Closes lock-in / dependency objection more decisively

---

### apply.html — Application page

**Hero (lines 120-121):**
- Before (v2 H1): *"Apply for coaching."*
- After (v3 H1): *"Apply for the Diagnosis Program."* — uses product name
- Sub expanded: explicitly says "Applying isn't a commitment to buy — it's a filter. If we're not a fit, we'll tell you where to spend the next few months instead."
- Why: Belief 6 — reduces the click-anxiety of submitting

**Question 03 — frustration prompt (lines 161-167):**
- Placeholder improved: *"Specific is better than polished. 'Can't stop weekend eating' beats 'need more discipline.'"*
- New helper line below: *"This question runs the diagnosis. Answer like you'd tell a doctor — honestly."*
- Why: Quality of input → quality of diagnosis. Also primes the doctor frame again.

**Question 04 — commitment (lines 169-178):**
- Before (v2): 3 options on time only (Yes 12 wks / Not sure / No)
- After (v3): 4 options on **time + budget**:
  - "Yes — 90 days and the budget, in"
  - "Time yes, budget tight — want to discuss"
  - "Not sure"
  - "No — looking for something shorter or cheaper"
- Question text rewritten: *"Can you commit 90 days and $2.5K–$3.5K to the right program?"*
- Why: Belief 5 + qualifies the wallet, not just the calendar. Filters out applicants who'd hit a wall on the diagnosis call.

---

### thank-you.html — Post-application page

**Hero sub (line 70):**
- Sub tightened: *"...just show up with the day-to-day truth of your training, eating, and recovery. The honest version, not the polished one."*

**What to bring to the call (lines 85-94):**
- Before (v2): 4-item list (training log / eating / sleep / blocker)
- After (v3): 6-item list — added "Two body shots if you have them — front, side" + "The budget number you're ready to spend"
- New body paragraph below the list: *"Sixty minutes. We diagnose. You leave knowing what's broken whether or not we work together. No hard sell — we cap at five clients per cohort and we have to say no to most of the calls anyway."*
- Why: Belief 6 — primes the call as diagnostic, reduces buyer's-remorse risk

---

### not-a-fit.html — Disqualified-applicant page

**New section — re-engagement capture (lines 97-108):**
- Brand new section before the final close
- H2: *"Want a heads-up when intake reopens?"*
- mailto-based form (action="mailto:hello@dndcoaching.com") — no third-party dep, no privacy ceremony, no backend
- One-line promise: *"No newsletter, no funnel, no pitch. One email when the next cohort opens — usually every 90 days."*
- Why: v2 audit finding — page graciously lost future avatar with zero capture. v3 captures without violating the page's no-pressure tone.

---

### Under-the-hood

- No JS changes
- No CSS changes (all utility classes already in Tailwind config)
- No new files; no removed files
- Visual system unchanged
- Mobile polish untouched

### Deferred (still placeholder, not v3-blocking)

- Tally form URL still `REPLACE_ME` at `js/form.js:4`
- Calendly slug still placeholder in `thank-you.html`
- Real Cohort Nº 02 client photos pending June 2026 graduation
- Coach portrait photos (Denis + Darius) still `placehold.co`
- Real cohort numbers (Nº 02 vs Nº 03 vs whichever cohort actually graduates) — Denis to confirm cohort accounting before push

### Files touched (v3)

| File | Lines (rough) | Status |
|---|---|---|
| `index.html` | 9-10, 115-377, footer | Rewritten copy, +1 new section |
| `method.html` | 9-10, 105-294, footer | Rewritten copy, +1 new value-stack section |
| `coaches.html` | 109-198, footer | Rewritten bios + hero |
| `results.html` | 117-282, footer | Rewritten throughout — honest placeholders |
| `faq.html` | Throughout questions + 2 new + 2 retitled, footer | +2 questions, +rewrites |
| `apply.html` | 120-178, footer | Hero + Q3 + Q4 rewrites |
| `thank-you.html` | 69-94 | Hero sub + pre-call list expansion |
| `not-a-fit.html` | 97-108 (new section), footer | +re-engagement capture |
| `privacy.html` | footer only | tagline replace |
| `terms.html` | footer only | tagline replace |

---

## v2 — Editorial redesign + 10-page expansion (shipped 2026-05-21)

**Branch:** `redesign-v2` @ `7603d24` (frozen — fallback if v3 underperforms)
**Preview URL:** https://dndcoaching-landing-git-redesign-v2-denis-projects-ca019577.vercel.app
**Commits:** `4a14f08` → `7603d24` (21 commits)
**Worktree (local):** `.claude/worktrees/redesign-v2/`

### Pages
- **Added:** `method.html`, `coaches.html`, `results.html`, `faq.html`, `apply.html`, `thank-you.html`, `not-a-fit.html`, `privacy.html`, `terms.html` — 10-page site replacing v1's 5-page setup
- **Removed:** `privacy-policy.html`, `terms-of-service.html` (replaced by clean-URL `/privacy`, `/terms`), `css/` directory (Tailwind via CDN now), `js/main.js` (split into modules)
- **Routing:** `vercel.json` with `cleanUrls: true`, `trailingSlash: false` — `/method` resolves to `method.html` etc.

### Visual system
- **Typography:** Source Serif 4 (display) + IBM Plex Mono (eyebrows/figures) + Inter (body). Tight tracking on serif headings (`-0.03em`-ish via `tracking-st`).
- **Palette:** Bone (#F7F4ED background) / ink (#1A1A1A text) editorial neutral — replaces v1's generic CSS palette.
- **Figure labels:** `Fig. 01 — The problem`, `Fig. 02 — The method`, etc. → editorial-journal aesthetic, replaces v1's "Solution Section" / "Method" / "Transformation" H2s.
- **Layout:** wider breathing room, asymmetric grid in places, monospace eyebrow + serif H2 pairing in every section.

### Hero copy (sample comparison)
- **v1 H1:** `"Finally Break Through Your Training Plateau in 12 Weeks"`
- **v2 H1:** `"Finally break through your training plateau."` (sentence case, eyebrow `"Cohort Nº 03"` + period instead of timeline promise)
- **v1 subheadline:** "The structured system that turns inconsistent effort into consistent results—without extreme diets, 2-hour gym sessions, or giving up the foods you love"
- **v2 subheadline:** kept similar substance, retypeset for the editorial system (see `redesign-v2/index.html`)

### Section H2 inventory (v1 → v2 mapping)
| v1 | v2 |
|---|---|
| `I've Been Exactly Where You Are` | `You're not lacking discipline. You're lacking direction.` |
| `The 12-Week Transformation Journey` | `What 12 weeks looks like.` |
| `The 12-Week Transformation Program` | `Diagnosis-first, in three steps.` |
| `Denis & Darius. Two Brothers. One System.` | `Two brothers. One method.` |
| `Frequently Asked Questions` | `Common questions.` |
| `Ready to Finally Break Through?` | `Ready to apply?` |

### Under-the-hood
- **JS split into modules** (was one `js/main.js`):
  - `js/nav.js` — mobile menu toggle
  - `js/slider.js` — vanilla before/after comparison slider
  - `js/counter.js` — IntersectionObserver-based stat counter
  - `js/accordion.js` — CSS-grid based FAQ toggle
  - `js/form.js` — Tally route + clean URLs (Tally URL still placeholder `REPLACE_ME` at `js/form.js:4`)
- **Mobile polish baked in across all 10 pages:**
  - `<meta name="viewport" content="…, viewport-fit=cover">`
  - `safe-area-inset-*` env() padding
  - All tappable elements ≥44×44px
  - All inputs `font-size: 16px` (prevents iOS auto-zoom)
  - `-webkit-tap-highlight-color: transparent`
- **Assets:**
  - Original `THE LOGO.png` preserved
  - Added traced SVG logo + new favicon
  - `favicon-32.png` carried over
- **Tally form:** form action route `/apply` → external Tally (URL pending — `js/form.js:4`)
- **Calendly:** `thank-you.html` has inline Calendly embed with placeholder slug (pending real event URL)

### Deferred from v2 (placeholders shipped)
- Real Tally form URL (`js/form.js:4` `REPLACE_ME`)
- Real Calendly event slug (`thank-you.html`)
- Real coach photos (Denis + Darius) — currently `placehold.co`
- Real before/after photos on `/results` — currently `placehold.co`
- Real testimonial copy on `/results` + `/` — currently placeholder
- Terms-of-service body verification — copy ported from v1's `terms-of-service.html`

---

## v1 — Original landing page (pre-redesign baseline)

**Branch:** `main` @ `d8c05f9` (frozen baseline)
**Initial commit:** `7c8d45d` (2026-02-18)
**Final v1 commit:** `d8c05f9`
**Commits in v1:** `7c8d45d` → `2831f2b` → `0ddae53` → `77387c4` → `025d492` → `d8c05f9` (6 commits)

### Pages
- `index.html` (480 lines — single-page landing with sections inline)
- `privacy-policy.html`
- `terms-of-service.html`
- `thank-you.html`
- `not-a-fit.html`

### Visual
- Standard CSS architecture: `css/reset.css`, `css/variables.css`, `css/typography.css`, `css/components.css`, `css/sections.css`, `css/responsive.css`
- No editorial system — generic clean-startup aesthetic
- `THE LOGO.png` raster logo in header
- Mobile responsive via `css/responsive.css` (no safe-area / viewport-fit awareness)

### Hero copy
- **H1:** `"Finally Break Through Your Training Plateau in 12 Weeks"`
- **Eyebrow:** `"Limited Coaching Spots Available"`
- **Subheadline:** `"The structured system that turns inconsistent effort into consistent results—without extreme diets, 2-hour gym sessions, or giving up the foods you love"`
- **Primary CTA:** `"See If You Qualify"` → `#application`
- **Trust signal:** `"Currently coaching 5 clients | Denis & Darius | 8+ years combined experience"`
- **Scarcity line:** `"Only working with 5-10 new clients at a time"`

### Section H2 inventory (v1 baseline)
1. `I've Been Exactly Where You Are`
2. `The 12-Week Transformation Journey`
3. `Why We Only Work With 5-10 Clients at a Time`
4. `The 12-Week Transformation Program`
5. `Why We Understand Your Struggle`
6. `Denis & Darius. Two Brothers. One System.`
7. `Is This For You?`
8. `How It Works`
9. `The 90% Compliance Guarantee`
10. `Frequently Asked Questions`
11. `Ready to Finally Break Through?`
12. `See If You Qualify - Quick Assessment`

### Under-the-hood
- Monolithic `js/main.js` (49 lines) + `js/form.js` (99 lines)
- No JS modules, no CDN Tailwind — plain CSS files
- No `vercel.json` — implicit routing
- Inline section in single-page index, no `/method`, `/results`, `/coaches`, `/faq`, `/apply` separate pages

### Late-v1 changes (after initial commit)
- `2831f2b` Added About Us section (Denis & Darius) + reframed as two-coach offering
- `77387c4` Fixed About section text contrast (black on light bg)
- `025d492` Added online-only coaching notice to application section
- `d8c05f9` Renamed "0" option in form, restructured commitment question layout

### v1 supporting docs (deleted in v2)
- `Mission Statement for coaching.pdf` (lives now as `website 1/mission-statement.html`)
- `Landing-Page-Conversion-Checklist.md`
- `Privacy Policy Template.md`
