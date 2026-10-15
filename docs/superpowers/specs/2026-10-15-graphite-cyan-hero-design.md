# Graphite & Cyan Palette + Geometric Hero — Design

**Date:** 2026-10-15
**Status:** Approved (design)
**Supersedes (palette/hero only):** the Ink & Deep Green palette and split-portrait hero from `2026-10-13-editorial-personal-brand-redesign-design.md`

## Overview

The current editorial theme (paper / ink / deep-green, `#1f5f4b`) reads as too plain. Two changes refresh the site without touching content or layout of the inner sections:

1. **Palette swap** from Ink & Deep Green to **Graphite & Cyan**.
2. **Hero visual upgrade**: reintroduce a right-hand decorative column filled with abstract geometric shapes (replacing the removed portrait placeholder), giving the top of the page more presence.

Because nearly all colors are exposed as CSS custom properties in `src/index.css` and consumed through Tailwind v4 `@theme inline` tokens, the palette change propagates to every component automatically.

## Goals

- A cooler, crisper, more "professional and alive" look (cyan accent + graphite ink).
- A hero that reads as visual and designed, not flat.
- Zero changes to section content, copy, data, or layout beyond the hero.
- Keep the motion/accessibility guarantees already in place (`.reveal`, `prefers-reduced-motion`).

## Non-Goals

- No restyling of About / Services / Experience / Education / Projects / Skills / Contact layouts.
- No real photography or portrait images.
- No new dependencies.
- No dark-mode toggle.

## 1. Palette — `src/index.css` `:root`

Replace the emerald token values with:

| token | value |
| --- | --- |
| `--background` | `#f4f7f7` |
| `--foreground` | `#111827` |
| `--card` | `#ffffff` |
| `--card-foreground` | `#111827` |
| `--surface` | `#ffffff` |
| `--popover` | `#ffffff` |
| `--popover-foreground` | `#111827` |
| `--primary` | `#0e7490` |
| `--primary-foreground` | `#ffffff` |
| `--secondary` | `#e2f1f4` |
| `--secondary-foreground` | `#0e7490` |
| `--muted` | `#eef2f3` |
| `--muted-foreground` | `#4b5a5d` |
| `--accent` | `#0e7490` |
| `--accent-foreground` | `#ffffff` |
| `--border` | `#dce6e7` |
| `--input` | `#eef2f3` |
| `--ring` | `#0e7490` |
| `--header` | `rgba(244, 247, 247, 0.85)` |
| `--radius` | `0.5rem` (unchanged) |

No changes to `@theme inline`, base layer, or utilities. Fonts (Inter + Playfair Display) stay.

**Contrast check (informational):** `#0e7490` on `#f4f7f7` ≈ 4.6:1 (AA for large/UI text); white on `#0e7490` ≈ 4.6:1; `#4b5a5d` on `#f4f7f7` ≈ 7:1.

## 2. Hero — `src/components/hero.tsx`

- Root `<section>` becomes `relative overflow-hidden` (keeps `bg-background px-6 pt-16 pb-20 border-b border-border`).
- The reveal wrapper becomes a two-column grid on `lg`: `grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-14 items-center reveal …` (as before the portrait was removed).
- **Left column:** unchanged hero text (eyebrow, 3-line headline, paragraph, CTA row).
- **Right column (new, decorative):** `hidden lg:flex` container, `aria-hidden="true"`, holding:
  - two concentric rings — `rounded-full border border-primary/25` and `border-primary/35`, sized/offset to overlap;
  - one soft filled circle — `bg-gradient-to-br from-primary/20 to-primary/5`;
  - one small rotated rounded square — `bg-primary/10 rotate-12 rounded-xl`.
  - The right column contains a single `relative` box with a fixed aspect (e.g. `aspect-square max-w-[360px]`), and each shape is `absolute` inside it. Shapes stay within that box; `overflow-hidden` on the section prevents any edge bleed.
- No images, no portrait. Mobile: right column is hidden, text is full width (current behavior).

## 3. Supporting touch-ups

- `src/App.tsx` footer: `bg-[#12140f]` → `bg-[#0b1220]`; `text-[#c9d1c8]` → `text-[#aebfca]`.
- `index.html`: `<meta name="theme-color" content="#f4f6f3" />` → `content="#f4f7f7"`.
- `public/favicon.svg`: rect `fill="#12140f"` → `#0b1220`; text `fill="#1f5f4b"` → `#0e7490`.

## Accessibility

- Decorative shape column is `aria-hidden="true"` and contains no interactive/focusable elements.
- Existing `.reveal` / `prefers-reduced-motion` behavior unchanged.
- Accent/ink contrast meets AA for the sizes used.

## Verification

- `npx tsc --noEmit -p tsconfig.app.json` → no output.
- `npm run lint` → no errors.
- `npm run build` → `✓ built`.
- Grep confirms no stray old palette hex remains: `grep -rn "1f5f4b\|12140f\|c9d1c8\|f4f6f3\|e8f0ea\|dbe3da\|e9ede7\|5b6157" src index.html public/favicon.svg` → no matches.
- Manual: hero shows cyan geometric shapes on desktop, hidden on mobile; accent is cyan throughout; footer is a dark graphite band; favicon is dark with a cyan monogram.

## Files touched

- `src/index.css` (token values)
- `src/components/hero.tsx` (grid + decorative shapes)
- `src/App.tsx` (footer colors)
- `index.html` (theme-color)
- `public/favicon.svg` (monogram colors)
