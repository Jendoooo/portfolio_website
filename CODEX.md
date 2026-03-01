# Codex — Worker Log

> Role: Animation engineer & interactive experience builder.
> Owner: All motion, interactivity, and Framer Motion implementation.
> Log all changes with timestamps in the Change Log section.

---

# PHASE 2 BRIEF — Premium Motion & Interactivity

**Supervisor:** Claude
**Date assigned:** 01 March 2026
**Priority:** HIGH — this is what transforms a generic site into a premium one.

---

## 0. Setup First

Install Framer Motion before anything else:

```bash
npm install framer-motion
```

Framer Motion docs: https://www.framer.com/motion/
Key concepts you'll use: `motion.div`, `useInView`, `useScroll`, `useTransform`, `AnimatePresence`, `variants`, `staggerChildren`.

---

## 1. Global Animation Utilities

Create `src/lib/animations.ts` — shared animation variants used across all components. Do not redefine variants component by component; import from here.

```ts
// src/lib/animations.ts

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};
```

---

## 2. Reusable Scroll-Reveal Wrapper

Create `src/components/RevealOnScroll.tsx`. This wraps any element and triggers `fadeUp` when it enters the viewport. Use this in every section — do not animate sections by hand.

```tsx
// src/components/RevealOnScroll.tsx
"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function RevealOnScroll({ children, delay = 0, className }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

---

## 3. Hero Section — Cinematic Entrance

Replace the static Hero with an animated version. This is the first thing visitors see — it must feel like a premium product.

**Requirements:**
- Name ("Olajide Ayeola") should animate in as two words, staggered left to right, each word a separate `motion.span`
- Eyebrow text fades in first (delay 0)
- First name fades up (delay 0.2)
- Last name fades up (delay 0.4)
- Tagline paragraph fades up (delay 0.6)
- CTA buttons fade up (delay 0.8)
- Stats cards stagger in with `staggerChildren: 0.1` after the CTAs

**Do NOT use a typing animation** — it feels cheap and amateurish. Staggered word reveals are more premium.

**Parallax on the hero background:** Use `useScroll` + `useTransform` to make the gradient background shift subtly as the user scrolls down (move y by ~60px over the first viewport height). This gives the hero depth.

```tsx
// Rough pattern — implement properly in Hero.tsx
const { scrollY } = useScroll();
const y = useTransform(scrollY, [0, 600], [0, 60]);
// Apply as style={{ y }} on the background gradient div
```

---

## 4. Photo Section — "Journey" Timeline

Add a NEW section between About and Projects. Call it `src/components/Journey.tsx`.

This section displays personal photos of Olajide from different points in his life. It tells his story visually — not just text.

**Layout:**
- Section heading: "The journey" (small teal eyebrow), large navy h2
- Horizontal scroll on mobile, side-by-side on desktop
- 4 photo slots, each with:
  - Photo (the `<img>` tag with `object-cover`, rounded-2xl, aspect-[3/4] portrait format)
  - Below the photo: a short caption (year + context, e.g. "2019 — Escravos, Chevron internship")
  - Hover: photo lifts (scale 1.03, shadow deepens), caption slides up into view

**Placeholder photo handling:** Until Olajide adds real photos, use a placeholder div with a `bg-gray-200` gradient that looks intentional, not broken. Add a clear comment: `// TODO: Replace src with actual photo path from /public/photos/`

**Photo slot structure:**
```tsx
<div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-100 cursor-pointer">
  {/* Replace with: <img src="/photos/01-abuja.jpg" ... /> */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />

  {/* Caption overlay — slides up on hover */}
  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent
                  translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                  transition-all duration-300">
    <p className="text-white text-xs font-medium">2019 — Escravos, Chevron</p>
  </div>
</div>
```

**Animate the section:** Use `staggerContainer` + `scaleIn` variant so each photo card enters staggered.

**Caption data to use (fill in the photo slots with these stories):**
```
Slot 1: "2019 — Escravos, Delta State. First time offshore."
Slot 2: "2022 — Lekki Freeport Terminal. Day one of building the data unit."
Slot 3: "2024 — Glasgow, Scotland. Starting the MSc at Strathclyde."
Slot 4: "2025 — Lagos. Back home. What's next."
```

Add `Journey` to `page.tsx` between `<About />` and `<Projects />`.

---

## 5. Navbar — Active Section Highlighting

The current navbar has no active state. Fix this using `IntersectionObserver`.

**Requirements:**
- Track which section is currently in view (Hero, About, Journey, Projects, Experience, Education, Research, Contact)
- The corresponding nav link should highlight with the teal accent colour and the underline animation
- On mobile, the active section name should appear somewhere subtle (optional)

**Implementation pattern:**
```tsx
// In Navbar.tsx — track active section
const [active, setActive] = useState("hero");

useEffect(() => {
  const sections = document.querySelectorAll("section[id]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { threshold: 0.5 }
  );
  sections.forEach((s) => observer.observe(s));
  return () => observer.disconnect();
}, []);

// Then in the nav link render:
className={`nav-link ${active === l.id ? "text-teal border-b-2 border-teal" : "text-gray-700"}`}
```

---

## 6. Project Cards — Hover Lift

Current cards are flat. Make them feel interactive:

```tsx
// Wrap each card in motion.div
<motion.div
  whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(31,56,100,0.15)" }}
  transition={{ duration: 0.25, ease: "easeOut" }}
  className="..."
>
```

Also: on the featured FPL card, add a subtle animated gradient border using a CSS `@keyframes` or a Framer Motion `animate` loop that rotates a conic-gradient — this makes the featured card feel truly premium vs the others.

---

## 7. Experience Timeline — Animated Line Draw

The timeline has a decorative vertical line on the left. Animate it:

- Use `useScroll` + `useTransform` to map scroll position to `scaleY` of the line (line "draws" downward as you scroll through the section)
- Each timeline card should `fadeUp` when it enters view, staggered by ~0.15s

```tsx
const ref = useRef(null);
const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });
const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

// Apply:
<motion.div style={{ scaleY, originY: 0 }} className="absolute left-2 top-0 w-px h-full bg-navy" />
```

---

## 8. Stats Counter Animation

In the Hero stats bar (the 4 cards: "90%+", "15+", "2", "1st"), animate the numbers counting up when they enter view.

Create `src/components/CountUp.tsx`:
```tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Takes a target number and a suffix (e.g. "+" or "x")
// Counts from 0 to target over ~1.5s when in view
// For "1st" and "90%+" — just do a fade-in flash (no numeric count), they're not simple numbers
```

---

## 9. Page Transition (Optional but premium)

Wrap the main content in `AnimatePresence` with a fade transition on mount:

```tsx
// In layout.tsx or page.tsx
<motion.main
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
```

---

## 10. What NOT to do

Read this carefully — these are the things that make portfolios feel cheap and AI-generated:

- ❌ No typing/typewriter animations
- ❌ No rainbow gradient text on names
- ❌ No particle backgrounds or floating orbs
- ❌ No excessive bounce animations (spring physics should be subtle)
- ❌ No hover effects that scale things more than 1.05
- ❌ No animations that play every time (use `once: true` in `useInView`)
- ❌ Do not animate things that move more than ~40px — subtle is premium
- ❌ Do not add loading spinners or skeleton screens — pages should be instant

---

## 11. NEW — Filterable Projects/Freelance Section

The current Projects section has 6 cards in a flat grid. The Side Hustle folder reveals there are actually 20+ real client projects. The Projects section needs a complete rebuild into a tabbed/filtered layout.

### Overview of new structure

Replace the existing `Projects.tsx` with two separate components:

**A. `src/components/Projects.tsx`** — Personal/featured builds (FPL, iby_closet, 3:15 fabrics, chess). Keep these as the premium showcase cards. Max 4 cards.

**B. `src/components/FreelanceWork.tsx`** — All Upwork/client work. This is new. Built as a tabbed interface with 3 tabs:
- "All"
- "Web Scraping"
- "Data & BI"

### Tab switching animation

Use `AnimatePresence` + `motion.div` with `key` on the tab content so switching tabs has a smooth cross-fade:

```tsx
<AnimatePresence mode="wait">
  <motion.div
    key={activeTab}
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.2 }}
  >
    {/* filtered cards */}
  </motion.div>
</AnimatePresence>
```

### Tab button active state

Active tab gets a small animated underline using `layoutId`:
```tsx
{activeTab === tab && (
  <motion.div
    layoutId="tab-indicator"
    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500"
  />
)}
```

### Card data for FreelanceWork (use this exact data)

```ts
const freelanceProjects = [
  {
    name: "Government Contracts Intelligence Platform",
    category: "Web Scraping",
    desc: "Built scrapers for 4 US county procurement systems (Harris TX, Maricopa AZ, San Diego CA, LA County). 4,128+ contracts extracted, PDF OCR via Tesseract, AI-powered parsing with DeepSeek, stored in Supabase. Parallel processing with 10 concurrent workers.",
    tags: ["Python", "Selenium", "Playwright", "PDFPlumber", "Tesseract OCR", "Supabase", "DeepSeek API"],
    scale: "4,128+ contracts",
  },
  {
    name: "Microsoft AppSource Partner Listings",
    category: "Web Scraping",
    desc: "Scraped 500+ Microsoft partner listings from AppSource — a site with heavy dynamic rendering and anti-bot protection. Parallel processing implementation, Google Maps enrichment pass for address validation.",
    tags: ["Python", "Selenium", "Pandas", "Parallel Processing", "Google Maps API"],
    scale: "500+ partners",
  },
  {
    name: "UK Electric Installers Directory",
    category: "Web Scraping",
    desc: "Geographic business directory scrape using Google Places API. 1,660 electrical installers across 73 UK cities. Full data: GPS coordinates, ratings, reviews, opening hours, business categories, data quality scoring.",
    tags: ["Python", "Google Places API", "Pandas", "Geo-filtering"],
    scale: "1,660 records · 73 cities",
  },
  {
    name: "Multi-Country Car Dealership Scrapers",
    category: "Web Scraping",
    desc: "5 separate scraping projects for car dealerships across Canada and Australia (Dutton One, Highland Prestige, Need A Car, Monaco Motor, Boulevard Motors). Extracted full inventory: pricing, VINs, financing terms, specifications. Some sites used Playwright for JS-heavy pages.",
    tags: ["Python", "Selenium", "Playwright", "BeautifulSoup", "Pandas"],
    scale: "5 dealers · 2 countries",
  },
  {
    name: "SteamDB Historical Data Scraper",
    category: "Web Scraping",
    desc: "Test assignment for a potential 200,000-game catalog scrape. Pulled historical CCU (concurrent players), follower counts, and review trends for 100 Steam games from SteamDB — a site that actively blocks scrapers.",
    tags: ["Python", "Jupyter", "Selenium", "API reverse-engineering"],
    scale: "100 games · test for 200k catalog",
  },
  {
    name: "Yahoo Finance Data Pipeline",
    category: "Web Scraping",
    desc: "Financial data extraction pipeline from Yahoo Finance for market cap, stock price history, and financial statement data.",
    tags: ["Python", "Requests", "Pandas", "Financial Data"],
    scale: null,
  },
  {
    name: "DevFest Conference Participant Scraper",
    category: "Web Scraping",
    desc: "Multi-milestone delivery project scraping conference participant data. Iterative build with client revisions across 3 delivery phases.",
    tags: ["Python", "Git", "Multi-phase delivery"],
    scale: null,
  },
  {
    name: "Power BI Dashboard Recreation",
    category: "Data & BI",
    desc: "Client commissioned recreation of an existing Power BI dashboard with improved layout and interactivity. Rebuilt from original specification.",
    tags: ["Power BI", "Data Modelling", "DAX"],
    scale: null,
  },
  {
    name: "Excel VBA Macro Conversion",
    category: "Data & BI",
    desc: "Converted legacy Excel VBA macros to Python/modern equivalents. Multi-stage project: inspection, tab translation, English conversion, with a shared collaborative file for QA.",
    tags: ["Python", "VBA", "Excel", "Automation"],
    scale: null,
  },
];
```

### Upwork badge on the section

At the top of the FreelanceWork section, add a visible Upwork credential bar:

```tsx
<div className="inline-flex items-center gap-3 px-4 py-2 bg-[#14A800]/10 border border-[#14A800]/20 rounded-xl mb-8">
  <span className="w-2 h-2 rounded-full bg-[#14A800]" />
  <span className="text-sm font-semibold text-[#14A800]">Top Rated · 100% Job Success</span>
  <span className="text-gray-400 text-sm">·</span>
  <a
    href="https://www.upwork.com/freelancers/~01abbc32156f39b6b0"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm text-gray-600 hover:text-[#14A800] font-medium transition-colors"
  >
    View Upwork profile →
  </a>
</div>
```

`#14A800` is Upwork's green. Use it ONLY in this badge — do not let it bleed into the rest of the site's colour system.

### Card design for FreelanceWork cards

These should be slightly more compact than the personal project cards — they're client work, not showcases. Use:
- Horizontal layout on desktop (icon + text side by side)
- No screenshot placeholder (they're client work, NDA implied)
- `scale` shown as a small teal badge top-right of card if it exists (e.g. "4,128+ contracts")
- Tags shown as small pills

Animate them: stagger in with `scaleIn` variant when tab first renders.

### Add FreelanceWork to page.tsx

```tsx
// In page.tsx, add between Projects and Experience:
import FreelanceWork from "@/components/FreelanceWork";

// In JSX:
<Projects />
<FreelanceWork />
<Experience />
```

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

*(Codex adds entries below as work is completed)*

### [01 Mar 2026 07:27]
**Task:** Implemented Phase 3 rebuild for project sections. Split personal showcase projects from client work by creating a new tabbed `FreelanceWork` section with animated tab transitions, active tab underline, staggered card entrances, and Upwork credential badge. Wired `FreelanceWork` into page order and navbar.
**Files changed:** src/components/Projects.tsx, src/components/FreelanceWork.tsx, src/app/page.tsx, src/components/Navbar.tsx, src/components/About.tsx
**Notes:** Build passes (`npm run build`). Existing warnings remain for `<img>` usage in Hero/About/Journey (`@next/next/no-img-element`).
