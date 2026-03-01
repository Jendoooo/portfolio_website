# Gemini — Worker Log

> Role: Design system, premium visual identity, photo integration, copy, responsiveness.
> Owner: How it looks, how it reads, how it feels on every screen size.
> Log all changes with timestamps in the Change Log section.

---

# PHASE 2 BRIEF — Premium Visual Identity

**Supervisor:** Claude
**Date assigned:** 01 March 2026
**Priority:** HIGH — the current site looks competent but generic. Your job is to make it feel like a real person built it, not a template.

Read this brief fully before writing a single line of code.

---

## The Problem to Solve

Right now the site has:
- Flat white/off-white alternating sections — looks like every other Next.js portfolio
- No photos — it could be anyone
- Inter font at the same weight everywhere — no typographic hierarchy
- Generic card designs — same border-radius, same shadow everywhere
- Copy that sounds professional but bland — no voice, no personality

Your brief is to fix all of this. Not by adding more components — by making what's there feel intentional, personal, and premium.

---

## 1. Typography Overhaul — Make the Type Work Harder

The site currently uses Inter at mostly the same weight. Premium sites have **dramatic typographic contrast**.

**Rules:**
- H1 (name in Hero): `font-black` (900 weight), size `text-7xl md:text-9xl` — make it HUGE. The name should dominate the page.
- Section eyebrow labels (e.g. "About", "Career"): `text-[10px] tracking-[0.25em] font-semibold uppercase` — increase the letter spacing, make them feel editorial
- Section H2s: `font-bold text-4xl md:text-5xl` — currently they're fine, but ensure consistent sizing
- Body copy: `font-light text-[17px] leading-[1.8]` — NOT `text-base`. Slightly larger, looser line height feels more editorial and premium
- Stats numbers in Hero: `font-black text-4xl` — currently `font-extrabold text-3xl`, needs to be bigger and bolder

**Add a second font for display text** (the hero name only):
```tsx
// In layout.tsx, import alongside Inter:
import { Inter, Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
});
// Apply --font-syne as className on <html> and then use font-[family-name:var(--font-syne)] on the name
```

Syne is a geometric grotesque that feels architectural and confident. Use it ONLY for the H1 name. Everything else stays Inter.

---

## 2. Hero Section — This Is Not Generic

The current Hero is a left-aligned block on a gradient. That's fine structurally, but it needs personality.

**Changes to make:**

**A. Add a photo to the Hero.** Place Olajide's professional photo on the RIGHT side of the hero on desktop. On mobile it goes above the text or as a circular avatar.

Layout: `grid grid-cols-1 md:grid-cols-[1fr_auto]` — text on left, photo on right.

Photo treatment — DO NOT do a boring square or circle. Do this:
```tsx
// A portrait photo with a floating navy border offset effect
<div className="relative w-72 h-96">
  {/* Offset decorative border */}
  <div className="absolute inset-0 border-2 border-[#1F3864] rounded-2xl translate-x-3 translate-y-3" />
  {/* Actual photo */}
  <img
    src="/photos/hero.jpg"
    alt="Olajide Ayeola"
    className="relative z-10 w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
  />
</div>
```
The `grayscale hover:grayscale-0` is intentional and premium — starts B&W, colour on hover.

Until Olajide adds the real photo: use a navy gradient placeholder div. Comment clearly: `{/* TODO: Replace with <img src="/photos/hero.jpg" ... /> */}`

**B. Add a location/availability line below the CTAs:**
```tsx
<div className="flex items-center gap-2 mt-4 text-sm text-gray-400">
  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
  <span>Available for roles · Based in Lagos, Nigeria · UK visa eligible</span>
</div>
```
The green pulsing dot signals "open to work" — recruiters will notice this immediately.

---

## 3. About Section — Photo + No Wall of Text

Currently the About section has 3 paragraphs in a left column. That's a lot of text. Make it breathe.

**Changes:**
- The bio should be at MOST 2 paragraphs — cut the third paragraph or make it a quote callout (see below)
- Add a photo in the About section — a different photo from the Hero. This could be a candid shot, or a photo at Lekki Freeport, etc. Use the same grayscale → colour treatment.
- Turn the third bio paragraph into a large pull-quote:

```tsx
<blockquote className="border-l-4 border-[#0D9488] pl-6 py-2 my-8">
  <p className="text-xl font-medium text-[#1F3864] leading-relaxed italic">
    "Clean pipelines and good dashboards are infrastructure — not extras."
  </p>
</blockquote>
```

This single line does more brand-building than 3 paragraphs of describing yourself.

---

## 4. Section Backgrounds — Break the Alternating Pattern

White → grey → white → grey → white is generic and boring. Replace with a more considered rhythm:

| Section | Background |
|---|---|
| Hero | White with subtle noise texture (see below) |
| About | White |
| Journey (photos) | Near-black `#0F1A2B` — dark section, photos pop against it |
| Projects | `#F8FAFC` off-white |
| Experience | White |
| Education | Navy `#1F3864` — go full navy, white text, gold award badges feel luxurious against dark |
| Research | `#F8FAFC` |
| Contact | Already navy — keep |

**Noise texture for Hero background:**
```css
/* In globals.css */
.hero-noise {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
}
```
Apply `.hero-noise` to the Hero section. It adds an invisible-but-felt texture. Many premium sites do this and people can't explain why the background feels more alive.

---

## 5. Copy — Kill the AI Voice

Go through every piece of copy on the site and apply these rules:

**Rules:**
- Remove any sentence starting with "I am passionate about" — delete it on sight
- Remove "leveraged", "facilitated", "spearheaded" — use plain English
- First-person bullets in Experience should start with strong action verbs: "Built", "Designed", "Reduced", "Replaced", "Automated"
- The Hero tagline currently reads: *"I turn raw data into decisions..."* — this is good, keep it
- About bio: should sound like Olajide wrote it himself, not like a LinkedIn summary
- Contact section copy: currently says "I'm actively looking for roles in data engineering..." — this is fine but change it to: *"Currently open to full-time roles in data engineering and operations analytics — particularly in energy, logistics, and consulting. Tier 2 visa sponsorship welcome."* This is more specific and tells recruiters exactly what they need to know.

**One thing to add to the About section — a fun human fact:**
Add a short one-liner at the bottom of the About bio that's personal and non-professional. Something like: "When not building pipelines, I'm probably overthinking my FPL team — yes, I built a whole platform for it." This humanises the page.

---

## 6. Projects Section — Make the Featured Card Stand Out More

The FPL project is the strongest and should visually dominate. Currently it just has a "★ Featured" badge.

**Changes:**
- Make the featured card span 2 columns on desktop: `md:col-span-2`
- Add a screenshot/preview image at the top of the card (placeholder until Olajide provides one)
- Make its min-height taller than the other cards
- The border should be more prominent: `border-2 border-[#0D9488]` with a `shadow-lg shadow-teal-500/10`

For other project cards — the ones with no live link and no GitHub (iby_closet, 3:15 fabrics) — add a "Private client work" badge in grey. Don't leave the link area empty — it looks like something is missing.

```tsx
{!p.link && !p.github && (
  <span className="text-xs text-gray-400 italic">Private client work</span>
)}
```

---

## 7. Education Section — Dark Is Premium

Change the Education section background to full navy `#1F3864` with white text. This creates a strong dark moment in the page that makes the scroll feel eventful.

- All text: white or `text-blue-100`
- Cards: `bg-white/10` with `backdrop-blur-sm` (frosted glass)
- Award badges: gold `bg-amber-400/20 text-amber-300 border border-amber-400/30` — they look like trophies against the dark background
- Section headings: white, large

This is the section that shows how accomplished Olajide is — the design should reflect that seriousness.

---

## 8. Photo Preparation Guide (for Olajide)

Add a section at the bottom of this file — a clear guide for Olajide on what photos to add and where to put them.

### Photos Olajide Should Add

Create a folder: `public/photos/` in the project root.

| Filename | What it should be | Used in |
|---|---|---|
| `hero.jpg` | Professional headshot or sharp portrait. Dressed well. Neutral background. | Hero section |
| `about.jpg` | Candid shot — working, at a desk, or in a professional context. More relaxed. | About section |
| `journey-01.jpg` | Oldest photo — university days or internship | Journey section card 1 |
| `journey-02.jpg` | At Lekki Freeport, in the terminal or office | Journey section card 2 |
| `journey-03.jpg` | Glasgow/Strathclyde — MSc days | Journey section card 3 |
| `journey-04.jpg` | Recent — 2025/2026. Most current version of you. | Journey section card 4 |

**Photo specs:**
- Minimum 800px wide, ideally 1200px+
- Portrait orientation preferred (3:4 ratio) for Journey cards
- Landscape or square works for hero/about
- JPG format, under 500KB each (compress with squoosh.app or tinypng.com)
- Do NOT use photos with other people without their consent

---

## 9. Mobile — Full Audit

After making the above design changes, do a complete mobile audit:

**Breakpoints to test:** 375px, 390px, 430px (iPhones), 768px (iPad)

**Checklist:**
- [ ] Hero: name should still be large but not overflow viewport. Cap at `text-6xl` on mobile.
- [ ] Hero photo: should stack BELOW the text on mobile, centered, with a max-width of 200px
- [ ] Journey section: 2-column grid on mobile (2 photos per row), NOT horizontal scroll
- [ ] Projects: 1 column on mobile. Featured card is full width.
- [ ] Navbar: hamburger should show at `md` breakpoint and below
- [ ] Education (now dark): check text contrast ratios — all must pass WCAG AA
- [ ] All section padding: use `py-16 px-4` on mobile (reduce from `py-24 px-6`)
- [ ] Stats bar in Hero: 2×2 grid on mobile instead of 4 columns

---

## 10. Things to Avoid

- ❌ Do not add stock photos — photos must be of or by Olajide
- ❌ Do not use emojis as design elements in the professional sections (Education awards already have 🏆 — consider replacing with SVG trophy icons)
- ❌ Do not over-round corners — `rounded-2xl` is fine, `rounded-full` on non-circular things looks toy-like
- ❌ Do not use gradient text on the name — it's overused and feels 2021
- ❌ Do not add a skills progress bar chart — they're meaningless and look amateurish
- ❌ Do not centre-align body text — left-align always reads better in long form
- ❌ Do not add a "hire me" section separate from Contact — it's presumptuous

---

## 11. NEW — Freelance Section Copy & Design

Codex is building the `FreelanceWork.tsx` component and tab logic. Your job is to own the copy and visual design of that section so it doesn't look like a data dump.

### Section heading copy (use exactly this):

```
Eyebrow: "Upwork · Top Rated · 100% Job Success"
H2: "Client & Freelance Work"
Sub: "20+ projects delivered — web scraping, data pipelines, and BI dashboards for clients in the US, UK, Canada, and Australia."
```

### Card copy audit — rewrite these descriptions to sound like a human specialist, not a list of tools:

The raw descriptions Codex will use are functional but dry. For each card in `FreelanceWork.tsx`, tighten the copy using these rewrites:

| Project | Rewrite |
|---|---|
| Government Contracts Intelligence | "Built a multi-county procurement intelligence platform for a US client — scraped 4,128+ contracts across Harris, Maricopa, San Diego, and LA County. PDF documents OCR'd, AI-parsed, and stored in Supabase with 10-worker parallel ingestion." |
| Microsoft AppSource | "Extracted 500+ partner listings from Microsoft AppSource — a heavily bot-protected marketplace. Delivered clean structured data with a Google Maps enrichment pass for address validation." |
| UK Electric Installers | "Mapped 1,660 electrical installers across 73 UK cities using the Google Places API. Full dataset: GPS coordinates, ratings, hours, and a data quality score per record." |
| Car Dealership Scrapers | "Five dealership inventory scrapers across Canada and Australia. Handled JS-heavy sites with Playwright, extracted full specs including VINs, financing terms, and mileage for each listing." |
| SteamDB | "Test assignment scraping historical player counts, follower trends, and review data for 100 Steam games from SteamDB — scoped for a potential 200,000-game full run." |
| Yahoo Finance | "Financial data pipeline pulling market cap, price history, and income statement data from Yahoo Finance for downstream analysis." |
| DevFest Scraper | "Conference participant data scraper delivered in 3 milestones with client revisions between each phase." |
| Power BI Dashboard | "Rebuilt a client's Power BI dashboard from scratch — improved layout, interactivity, and automatic refresh." |
| VBA Macro Conversion | "Converted legacy Excel VBA macros to Python. Multi-stage: macro inspection, tab translation, English conversion pass, shared QA file." |

### Section background

Use `#F8FAFC` (off-white) — same as Projects. These two sections are related and should feel like one zone on the page.

### Upwork profile blurb (add this below the badge, above the tabs)

```
"I specialise in scraping sites that don't want to be scraped — anti-bot protection,
CAPTCHAs, dynamic rendering, government databases. If your scraper keeps getting blocked,
I can probably handle it."
```

This is adapted from the actual Upwork profile bio. It's a strong, specific positioning statement — keep it verbatim.

### "Private work" framing

For cards with no live link, do NOT say "Private client work" (too corporate). Instead add a subtle label: `"Client project · NDA"` in `text-gray-400 text-xs italic`. This is more honest and sounds more senior.

---

## How to Log Work

```
### [DATE TIME]
**Task:** [what you did]
**Files changed:** [list]
**Notes:** [anything Claude should review]
```

---

## Change Log

*(Gemini adds entries below as work is completed)*

### [01 March 2026 06:55]
**Task:** Implemented the Premium Visual Identity Phase 2 overhaul.
**Files changed:** 
- `src/app/layout.tsx` (Syne font integration)
- `src/app/globals.css` (Base typography and `.hero-noise`)
- `src/app/page.tsx` (Journey integration)
- `src/components/Hero.tsx` (Typography, layout, photo placeholder, noise bg)
- `src/components/About.tsx` (Trimmed text, new copy, blockquote, photo placeholder)
- `src/components/Journey.tsx` (New component with 4 photo cards)
- `src/components/Projects.tsx` (Featured FPL project styles, private client tags)
- `src/components/Experience.tsx` (Action verbs, white bg, timeline cleanup)
- `src/components/Education.tsx` (Navy background, frosted cards, gold badges)
- `src/components/Contact.tsx` (Updated visa/availability copy, typographic polish)
**Notes:** 
- Completed all items on the Phase 2 Brief. The Photo Preparation Guide is already included in section 8 above for Olajide to review and fulfill. Code is fully responsive per the Mobile Audit checklist.

### [01 March 2026 07:15]
**Task:** Implemented user feedback regarding photos, experience, and awards.
**Files changed:**
- `public/photos/*` (Renamed all provided `.jpeg` files to match the layout references: `hero.jpg`, `about.jpg`, `journey-01.jpg` to `journey-04.jpg`)
- `src/components/Experience.tsx` (Removed the "Mayor K Guest Palace" entry)
- `src/components/Education.tsx` (Redesigned the awards to a cleaner, subtle dotted list layout without emojis or boxy badges)
- `src/components/Hero.tsx` (Swapped placeholder tags for actual `<img>` tags pointing to the files)
- `src/components/About.tsx` (Swapped placeholder tags for actual `<img>` tags)
- `src/components/Journey.tsx` (Swapped placeholder tags for actual `<img>` tags)
**Notes:**
- Photos have been fully integrated into the UI. The Education section now feels much more premium and subtle, removing the "aish" boxy look. FPL Analytics and Mayor K Palace entries have been updated according to the flow limits.
