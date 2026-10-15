# Editorial Personal-Brand Redesign — Design Spec

- **Date:** 2026-10-13
- **Status:** Approved (design), pending written-spec review
- **Owner:** Rahul Adhikari
- **Scope:** UI/visual redesign of the existing portfolio (React 18 + Vite + Tailwind v4). Content stays exactly as synced from the CV.

## Summary

Redesign the portfolio from a dark "SaaS dashboard" theme (deep navy + blue/amber, glassmorphism, glows, floating blobs, fixed dot-nav sidebar) into a **light editorial personal-brand** site. The new language is calm, typographic, and consultant/founder-like: warm paper background, near-black ink, a single deep-green accent, hairline rules, and generous whitespace. Navigation moves from a fixed left sidebar to a sticky top bar, and the hero becomes a two-column split with a portrait slot.

## Goals

- Make the site read as a professional personal brand (not a generic dev template).
- Establish a clear, consistent identity: one accent colour, one type pairing, restrained decoration.
- Improve scannability and hierarchy through section numbering and hairline structure.
- Keep all CV content and section order intact.

## Non-goals

- No new content sections or features (no blog, no testimonials, no contact form, no CMS).
- No change to the data layer content (Experience, Education, Projects, Skills data are already CV-synced).
- No backend or routing changes.
- Not shipping a dark-mode toggle (light only — see Open Questions).

## Design Direction

### Visual language

- Light, editorial, typographic. Decoration is removed; structure comes from type scale, spacing, and hairline rules.
- A single accent colour (deep green) used sparingly: links, tags, active states, primary buttons, accent rules.
- Cards are flat paper surfaces with hairline borders and a subtle lift on hover — no glows, gradients, or translucent glass.

### Colour tokens (`src/index.css`, light theme)

| Token | Value | Use |
|---|---|---|
| `--background` | `#F4F6F3` | Page paper |
| `--foreground` | `#12140F` | Primary ink |
| `--card` | `#FBFCFA` | Card surface |
| `--card-foreground` | `#12140F` | Card ink |
| `--surface` | `#FFFFFF` | Elevated surface |
| `--primary` | `#1F5F4B` | Deep-green accent |
| `--primary-foreground` | `#FFFFFF` | On accent |
| `--secondary` | `#E8F0EA` | Tinted chip bg |
| `--secondary-foreground` | `#1F5F4B` | Chip text |
| `--muted` | `#E9EDE7` | Quiet fills |
| `--muted-foreground` | `#5B6157` | Secondary text |
| `--border` | `#DBE3DA` | Hairlines |
| `--input` | `#E9EDE7` | Inputs |
| `--ring` | `#1F5F4B` | Focus ring |
| `--header` | `rgba(244,246,243,0.85)` | Sticky nav backdrop |

The existing `.dark` token block is removed and `body.dark` is dropped; the light tokens live in `:root` and the site renders light unconditionally.

### Typography

- **Display:** Playfair Display (500/600/700) — headings, wordmark, stat numbers.
- **Body/UI:** Inter (400/500/600/700) — body, labels, nav, tags.
- Loaded via Google Fonts `<link>` in `index.html`; wired to `--font-display` / `--font-sans` in the Tailwind `@theme inline` block.
- Uppercase, letter-spaced micro-labels for nav links, eyebrows, and section numbers.

## Layout & Information Architecture

Section order is unchanged: Home → About → Services → Experience → Education → Work/Projects → Skills → Contact.

### Sticky top navigation (replaces sidebar)

- Left: wordmark `R. ADHIKARI` (Playfair, letter-spaced).
- Right: uppercase links (About, Services, Experience, Education, Work, Skills) + a green `Contact` CTA.
- Sticky, backdrop-blurred using `--header`; hairline bottom border.
- Active section is highlighted (green text + underline) driven by the existing `useScrollSpy` hook.
- Mobile (`< lg`): wordmark + hamburger; opens a full-width slide-down panel with the same links.

### Hero (split)

- Two columns: left copy, right portrait.
- Left: eyebrow line (`MSc Computer Science — York St John University, London`), Playfair headline, CV summary paragraph, actions (`View Work` primary, `Download CV` outline), and an availability indicator (green dot + "Open to opportunities").
- Right: portrait slot, aspect-ratio ~4:5, rounded hairline frame. Ships with a **placeholder** (monogram `RA` on a soft green-grey gradient); swapping in a real photo is a single `<img>` change.
- Below: a 4-stat hairline row — `200+` Bank branches served, `4+` Fintech apps built, `75%` Efficiency gained, `5` Professional roles.

### Sections (editorial treatment)

Each section uses a numbered eyebrow label (`01 — About`, `02 — Services`, …) with a hairline rule, and a consistent max-width container.

- **About** — label column + prose column; the three capability mini-cards (Frontend / Backend & Data / Security & AI) restyled as flat paper cards.
- **Services** — 2×2 grid of flat cards with icon, description, tag row.
- **Experience** — light timeline/stacked cards; green timeline dot; role, company, period chip, bullets, tech tags.
- **Education** — same structure as Experience (York St John MSc; Academia International College BSc).
- **Projects** — 2-column flat cards; title, description, tech tags, Live/GitHub links.
- **Skills** — grouped tag lists across categories, using the single accent for the strongest levels.
- **Contact** — contact cards (email, phone, location) + social/CTA panel; green primary button.
- **Footer** — dark ink band (`#12140F`) with name, email, location.

## Component-level changes

| File | Change |
|---|---|
| `src/index.css` | Replace dark tokens with light tokens; remove blobs/gradient-text/glow utilities; restyle `.glass-card`, `.section-heading`, `.timeline-dot`; add `.label-eyebrow` and hairline helpers; keep `.reveal` (softened) with `prefers-reduced-motion` guard. |
| `index.html` | Add Playfair Display + Inter; light `theme-color` (`#F4F6F3`); remove `body.dark`; refresh OG/Twitter description copy; favicon monogram to green/ink. |
| `src/components/sidebar.tsx` | **Replaced** by `src/components/header.tsx` (top nav + mobile menu). |
| `src/App.tsx` | Swap `Sidebar` for `Header`; remove `lg:ml-[220px]` sidebar offset; update footer styling. |
| `src/components/hero.tsx` | Rebuild as split hero with portrait slot + stat row. |
| `src/components/about.tsx` | Editorial 2-col layout with numbered label; flat cards. |
| `src/components/services.tsx` | Restyle to flat light cards. |
| `src/components/experience.tsx` / `experience-card.tsx` | Light cards, green timeline dot, restyled chips/tags. |
| `src/components/education.tsx` | Match new Experience styling. |
| `src/components/project.tsx` / `porject-card.tsx` | Flat light cards. |
| `src/components/skills.tsx` / `skill-badge.tsx` | Restyle tags to accent/muted on paper. |
| `src/components/contacts.tsx` | Restyle contact cards + CTA. |

Data files (`src/data/Experience.ts`, `src/data/Education.ts`) and `src/types/index.ts` are **not** changed in this redesign.

## Motion & Accessibility

- Keep the existing scroll-reveal (`useInView`) but soften (smaller translate, shorter duration).
- Wrap reveal transitions in `@media (prefers-reduced-motion: reduce)` to disable.
- Verify text contrast: ink `#12140F` on paper `#F4F6F3` and green `#1F5F4B` on white meet WCAG AA for body and links.
- Visible focus rings using `--ring`; keyboard-operable nav and mobile menu; `aria-label`s on icon buttons.
- Portrait placeholder includes an `alt`/label for future image swap.

## Responsive behavior

- Desktop (`lg+`): top nav inline, hero two-column, 2-col section grids.
- Tablet/mobile: single column, stacked hero (copy above portrait), collapsible nav, full-width cards.
- Container max-width consistent across sections (~`max-w-4xl` / `5xl`).

## SEO

- `theme-color` → `#F4F6F3`.
- Keep canonical `https://adhikarirahul.com.np/` and the existing structured-data person block (already updated in the CV sync).
- OG/Twitter copy remains consistent with the CV summary.

## Assets

- Portrait: placeholder only for now (monogram on soft gradient). Swap plan: drop `public/portrait.jpg` and replace the placeholder node in `hero.tsx`.
- Resume: `public/resume.pdf` already replaced with the current CV.

## Verification

- `npm run lint` passes.
- `npx tsc --noEmit -p tsconfig.app.json` passes.
- `npm run build` succeeds.
- Manual visual check at desktop + mobile widths; confirm nav active state, reveals, and portrait placeholder.

## Out of scope

- Dark mode toggle / theming system.
- New sections, copywriting, or content edits beyond styling.
- Analytics, forms, CMS.

## Open Questions

1. Dark mode toggle — omitted for now; can be added later as a follow-up.
2. Real portrait asset — pending; placeholder used until provided.
