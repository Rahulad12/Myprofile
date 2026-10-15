# Graphite & Cyan Palette + Geometric Hero — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Swap the site palette from Ink & Deep Green to Graphite & Cyan, and give the hero a right-hand decorative column of abstract cyan geometric shapes.

**Architecture:** All colors flow from CSS custom properties in `src/index.css` (`:root`) exposed through Tailwind v4 `@theme inline`, so the palette change is a token edit that re-skins every component. The hero is the only component with layout changes: its reveal wrapper becomes a two-column grid again, with a purely decorative `aria-hidden` shape column.

**Tech Stack:** React 18 + Vite + TypeScript, Tailwind CSS v4 (`@tailwindcss/vite`), lucide-react. No test suite — verification is `tsc`, `eslint`, and `vite build`.

**Repo conventions:** Do NOT run `git add` / `git commit` unless the user explicitly asks. Verification commands: `npx tsc --noEmit -p tsconfig.app.json`, `npm run lint`, `npm run build`. Spec: `docs/superpowers/specs/2026-10-15-graphite-cyan-hero-design.md`.

---

### Task 1: Palette tokens

**Files:**
- Modify: `src/index.css` (`:root` block, currently lines 4–26)

- [ ] **Step 1: Replace the `:root` block**

Replace the entire existing `:root { … }` block with:

```css
:root {
  --background: #f4f7f7;
  --foreground: #111827;
  --card: #ffffff;
  --card-foreground: #111827;
  --surface: #ffffff;
  --popover: #ffffff;
  --popover-foreground: #111827;
  --primary: #0e7490;
  --primary-foreground: #ffffff;
  --secondary: #e2f1f4;
  --secondary-foreground: #0e7490;
  --muted: #eef2f3;
  --muted-foreground: #4b5a5d;
  --accent: #0e7490;
  --accent-foreground: #ffffff;
  --border: #dce6e7;
  --input: #eef2f3;
  --ring: #0e7490;
  --header: rgba(244, 247, 247, 0.85);
  --radius: 0.5rem;
}
```

- [ ] **Step 2: Purge leftover green from utilities**

In `@layer utilities`, `.glass-card:hover` still held emerald-palette values. Change:

```css
    border-color: #c3d2c7;
    box-shadow: 0 8px 24px rgba(18, 20, 15, 0.06);
```

to:

```css
    border-color: #bcd7dd;
    box-shadow: 0 8px 24px rgba(17, 24, 39, 0.06);
```

Also remove the now-stale comment `/* Flat paper card */` if desired (not required). Do not otherwise change `@theme inline`, `@layer base`, or `@layer utilities`.

- [ ] **Step 3: Verify typecheck and build**

Run: `npx tsc --noEmit -p tsconfig.app.json && npm run build`
Expected: no type errors; `✓ built in ...`.

---

### Task 2: Hero geometric shapes

**Files:**
- Modify: `src/components/hero.tsx` (replace entire file)

- [ ] **Step 1: Replace `src/components/hero.tsx` with**

```tsx
import { ArrowRight, Download } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";

const stats = [
  { value: 200, suffix: "+", label: "Bank branches served" },
  { value: 4, suffix: "+", label: "Fintech apps built" },
  { value: 75, suffix: "%", label: "Efficiency gained" },
  { value: 5, suffix: "", label: "Professional roles" },
];

function StatItem({ value, suffix, label, trigger }: { value: number; suffix: string; label: string; trigger: boolean }) {
  const count = useCountUp(value, 1400, trigger);
  return (
    <div className="space-y-1">
      <p className="text-2xl md:text-3xl font-semibold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
        {count}{suffix}
      </p>
      <p className="text-[11px] text-muted-foreground uppercase tracking-[0.15em] font-medium">{label}</p>
    </div>
  );
}

const Hero = () => {
  const { ref, inView } = useInView(0.15);
  const { ref: statsRef, inView: statsInView } = useInView(0.3);

  return (
    <section className="relative overflow-hidden bg-background px-6 pt-16 pb-20 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-14 items-center reveal ${inView ? "in-view" : ""}`}
        >
          <div>
            <p className="label-eyebrow">MSc Computer Science — York St John University, London</p>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.06] tracking-tight text-foreground">
              Full-Stack Developer
              <br />
              building secure
              <br />
              fintech at scale.
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Hands-on experience shipping enterprise banking applications serving 200+ bank branches — across React, Node.js, TypeScript, and modern web architecture.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-semibold text-sm transition-colors"
              >
                View Work <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="/resume.pdf"
                download="Rahul-Adhikari-Resume.pdf"
                className="inline-flex items-center gap-2 border border-border hover:border-primary text-foreground px-6 py-3 rounded-md font-semibold text-sm transition-colors"
              >
                <Download className="w-4 h-4" aria-hidden="true" /> Download CV
              </a>
              <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary" /> Open to opportunities
              </span>
            </div>
          </div>

          <div aria-hidden="true" className="hidden lg:flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-[360px]">
              <div className="absolute right-0 top-0 w-[300px] h-[300px] rounded-full border border-primary/25" />
              <div className="absolute right-10 top-10 w-[220px] h-[220px] rounded-full border border-primary/35" />
              <div className="absolute right-16 top-16 w-[160px] h-[160px] rounded-full bg-gradient-to-br from-primary/20 to-primary/5" />
              <div className="absolute left-0 bottom-6 w-16 h-16 rounded-xl bg-primary/10 rotate-12" />
              <div className="absolute left-12 bottom-28 w-6 h-6 rounded-full bg-primary/30" />
            </div>
          </div>
        </div>

        <div
          ref={statsRef}
          className={`mt-14 pt-7 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6 reveal ${statsInView ? "in-view" : ""}`}
        >
          {stats.map((s) => (
            <StatItem key={s.label} {...s} trigger={statsInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
```

- [ ] **Step 2: Verify typecheck and build**

Run: `npx tsc --noEmit -p tsconfig.app.json && npm run build`
Expected: no type errors; `✓ built in ...`.

---

### Task 3: Supporting touch-ups (footer, theme-color, favicon)

**Files:**
- Modify: `src/App.tsx` (footer element)
- Modify: `index.html` (theme-color meta)
- Modify: `public/favicon.svg` (replace entire file)

- [ ] **Step 1: Update the footer colors in `src/App.tsx`**

Change the footer opening tag from:

```tsx
      <footer className="bg-[#12140f] text-[#c9d1c8] py-8 px-6">
```

to:

```tsx
      <footer className="bg-[#0b1220] text-[#aebfca] py-8 px-6">
```

- [ ] **Step 2: Update `theme-color` in `index.html`**

Change:

```html
    <meta name="theme-color" content="#f4f6f3" />
```

to:

```html
    <meta name="theme-color" content="#f4f7f7" />
```

- [ ] **Step 3: Replace `public/favicon.svg`**

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="12" fill="#0b1220"/>
  <text x="32" y="43" text-anchor="middle" font-family="Georgia, serif" font-size="34" font-weight="700" fill="#0e7490">R</text>
</svg>
```

- [ ] **Step 4: Verify typecheck and build**

Run: `npx tsc --noEmit -p tsconfig.app.json && npm run build`
Expected: no type errors; `✓ built in ...`.

---

### Task 4: Final verification

**Files:**
- Verify: whole project

- [ ] **Step 1: Confirm no old-palette hex remains**

Run: `grep -rn "1f5f4b\|12140f\|c9d1c8\|f4f6f3\|e8f0ea\|dbe3da\|e9ede7\|5b6157" src index.html public/favicon.svg`
Expected: no matches.

- [ ] **Step 2: Run lint**

Run: `npm run lint`
Expected: no errors.

- [ ] **Step 3: Run typecheck**

Run: `npx tsc --noEmit -p tsconfig.app.json`
Expected: no output.

- [ ] **Step 4: Run production build**

Run: `npm run build`
Expected: `✓ built in ...`, no errors.

- [ ] **Step 5: Manual visual check**

Run: `npm run dev`, open `http://localhost:5173`. Verify:
- Hero shows cyan geometric shapes in the right column on desktop; shapes are hidden below `lg`.
- Accent color is cyan (`#0e7490`) everywhere (nav active link, buttons, section numbers, badges).
- Footer is a dark graphite band with light cyan-tinted text.
- Favicon is dark with a cyan "R".
- No blue/green/amber remnants.
