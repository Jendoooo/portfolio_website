# Portfolio Website — Task Board

**Project:** olajideayeola.vercel.app
**Stack:** Next.js 14 · Tailwind CSS · Vercel
**URL:** https://olajideayeola.vercel.app
**Last updated:** 01 March 2026 (Phase 3 added)

---

## Design Spec

| Parameter | Value |
|---|---|
| Theme | Light |
| Primary | `#1F3864` (deep navy) |
| Accent | `#0D9488` (teal) |
| Background | `#FFFFFF` / `#F8FAFC` (off-white alternating sections) |
| Font | Inter (Google Fonts) |
| Layout | Single-page scroll with sticky nav |
| Deployment | Vercel (olajideayeola.vercel.app) |

---

## Sections

| # | Section | Status |
|---|---|---|
| 1 | Hero | ✅ Built · 🔄 Gemini upgraded |
| 2 | About | ✅ Built · 🔄 Gemini upgraded |
| 3 | Journey (photos) | ✅ Built by Gemini |
| 4 | Projects | ✅ Built · 🔄 Gemini upgraded |
| 5 | Freelance Work (new) | ⬜ Codex to build |
| 6 | Experience | ✅ Built · 🔄 Gemini upgraded |
| 7 | Education & Awards | ✅ Built · 🔄 Gemini upgraded |
| 8 | Research | ✅ Built |
| 9 | Contact | ✅ Built · 🔄 Gemini upgraded |

---

## Phase 1 — Scaffold (Claude)

- [x] Create task.md, claude.md, GEMINI.md, CODEX.md
- [ ] `npx create-next-app@14` with TypeScript + Tailwind
- [ ] Configure `globals.css` — Inter font, CSS variables
- [ ] `layout.tsx` — metadata, font import
- [ ] `page.tsx` — section composition
- [ ] `components/Navbar.tsx` — sticky, smooth scroll links
- [ ] `components/Hero.tsx`
- [ ] `components/About.tsx`
- [ ] `components/Projects.tsx`
- [ ] `components/Experience.tsx`
- [ ] `components/Education.tsx`
- [ ] `components/Research.tsx`
- [ ] `components/Contact.tsx`
- [ ] `components/Footer.tsx`
- [ ] Verify `npm run build` passes

## Phase 1 — Scaffold (Claude) ✅ COMPLETE

All components built and build verified. See `claude.md` for full file list.

---

## Phase 2 — Premium Upgrade (Codex + Gemini)

### Codex owns:
- [ ] Install Framer Motion + create `src/lib/animations.ts`
- [ ] Create `RevealOnScroll.tsx` wrapper component
- [ ] Hero: staggered word-by-word entrance animation
- [ ] Hero: parallax background on scroll
- [ ] Hero: CountUp animation on stats numbers
- [ ] Navbar: active section highlighting via IntersectionObserver
- [ ] Project cards: `whileHover` lift animation + featured card animated border
- [ ] Experience: animated timeline line draw on scroll
- [ ] New `Journey.tsx` section: photo grid with hover caption overlay + stagger animation
- [ ] Page entrance fade transition

### Gemini owns:
- [ ] Typography: add Syne font for H1 name, increase body to `text-[17px] leading-[1.8]`
- [ ] Hero: add photo with offset border effect + availability pulsing dot
- [ ] About: trim to 2 paragraphs + add pull-quote + About photo
- [ ] Section backgrounds: Journey → dark navy, Education → dark navy
- [ ] Hero noise texture in `globals.css`
- [ ] Featured project card: `md:col-span-2` + screenshot placeholder
- [ ] Education: frosted glass cards on dark bg, gold award badges
- [ ] Copy audit: kill AI voice, update Contact copy, add human fact to About
- [ ] Photos guide: placeholder comments + `public/photos/` structure
- [ ] Full mobile audit: all breakpoints

### Gemini Phase 2 ✅ COMPLETE (per GEMINI.md log 01 Mar 2026)

---

## Phase 3 — Freelance Section + Upwork (Codex + Gemini)

### Codex owns:
- [ ] Build `src/components/FreelanceWork.tsx` with tab filter (All / Web Scraping / Data & BI)
- [ ] `AnimatePresence` cross-fade on tab switch
- [ ] `layoutId` animated underline on active tab
- [ ] Stagger `scaleIn` on cards per tab render
- [ ] Add Upwork badge (green `#14A800`, Top Rated, 100% JSS, profile link)
- [ ] Wire into `page.tsx` between `<Projects />` and `<Experience />`
- [ ] Add `FreelanceWork` to Navbar links

### Gemini owns:
- [ ] Copy audit on all 9 FreelanceWork card descriptions (see GEMINI.md §11)
- [ ] Section heading copy: "Client & Freelance Work" + sub
- [ ] Upwork profile blurb (verbatim from GEMINI.md §11)
- [ ] Change "Private client work" → "Client project · NDA" styling
- [ ] Mobile audit of new FreelanceWork section

### Claude will do after Phase 3:
- [ ] `npm run build` verification
- [ ] Audit Upwork badge design doesn't bleed into colour system
- [ ] SEO: OG image, sitemap, robots.txt
- [ ] Vercel deploy instructions

---

## AI Roles

| Agent | Role | Log |
|---|---|---|
| **Claude** | Supervisor · Architect · Auditor | `claude.md` |
| **Codex** | Feature implementation · Animations | `CODEX.md` |
| **Gemini** | Mobile/responsive · Copy editing | `GEMINI.md` |

---

## Notes

- No London universities in contact section (PTDF rule)
- Portfolio URL: olajideayeola.vercel.app (already on CV)
- GitHub: github.com/Jendoooo
- LinkedIn: linkedin.com/in/olajide-ayeola
