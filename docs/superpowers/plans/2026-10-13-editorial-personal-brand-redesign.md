# Editorial Personal-Brand Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the portfolio from a dark SaaS theme into a light editorial personal-brand site (paper/ink/deep-green, Playfair Display + Inter, sticky top nav, split hero).

**Architecture:** The app is a single-page React 18 + Vite + TypeScript site that renders sections sequentially in `src/App.tsx`. Styling is Tailwind v4 with design tokens and custom utility classes defined in `src/index.css`. This plan changes the token/theme layer first, then replaces the fixed sidebar with a top header, then restyles each section component. No changes to data files or types.

**Tech Stack:** React 18, TypeScript, Vite 5, Tailwind CSS v4 (`@tailwindcss/vite`), lucide-react icons, react-toastify.

**Reference spec:** `docs/superpowers/specs/2026-10-13-editorial-personal-brand-redesign-design.md`

**Commit note:** This repo has no test suite; verification is `lint` + `tsc` + `build` + manual visual check. Commit steps are listed as checkpoints but must only be run when the user explicitly approves committing.

**Design constants (used throughout):**
- Paper `#F4F6F3`, ink `#12140F`, card `#FBFCFA`, green accent `#1F5F4B`, hairlines `#DBE3DA` / `#E2E8E0`
- Display font: `'Playfair Display', Georgia, serif`
- Body font: `'Inter', system-ui, sans-serif`
- Section numbering: About `01`, Services `02`, Experience `03`, Education `04`, Work `05`, Skills `06`, Contact `07`

---

## File Structure

**Created:**
- `src/components/section-heading.tsx` — shared numbered heading (`01 — About`) with hairline rule.
- `src/components/header.tsx` — sticky top navigation + mobile menu (replaces sidebar).

**Deleted:**
- `src/components/sidebar.tsx` — superseded by `header.tsx`.

**Modified:**
- `src/index.css` — light theme tokens; remove dark block, blobs, gradient text, glows; restyle utilities.
- `index.html` — Google Fonts (Playfair Display + Inter), light theme-color, remove `body.dark`, favicon.
- `public/favicon.svg` — new ink/green monogram.
- `src/App.tsx` — use `Header`, remove sidebar offset, new footer.
- `src/components/hero.tsx` — split hero + stat row.
- `src/components/about.tsx` — editorial 2-col layout.
- `src/components/services.tsx` — flat light cards.
- `src/components/experience.tsx`, `src/components/experience-card.tsx` — light timeline cards.
- `src/components/education.tsx` — match experience styling.
- `src/components/project.tsx`, `src/components/porject-card.tsx` — flat light cards.
- `src/components/skills.tsx`, `src/components/skill-badge.tsx` — green/muted badges.
- `src/components/contacts.tsx` — contact cards + CTA.

**Unchanged:** `src/data/Experience.ts`, `src/data/Education.ts`, `src/types/index.ts`, all hooks.

---

## Task 1: Theme tokens & utility classes

**Files:**
- Modify: `src/index.css` (replace entire file)

- [ ] **Step 1: Replace `src/index.css` with the light-theme version**

```css
@import 'tailwindcss';
@import 'tw-animate-css';

@custom-variant dark (&:is(.dark *));

:root {
  --background: #f4f6f3;
  --foreground: #12140f;
  --card: #fbfcfa;
  --card-foreground: #12140f;
  --surface: #ffffff;
  --popover: #ffffff;
  --popover-foreground: #12140f;
  --primary: #1f5f4b;
  --primary-foreground: #ffffff;
  --secondary: #e8f0ea;
  --secondary-foreground: #1f5f4b;
  --muted: #e9ede7;
  --muted-foreground: #5b6157;
  --accent: #1f5f4b;
  --accent-foreground: #ffffff;
  --border: #dbe3da;
  --input: #e9ede7;
  --ring: #1f5f4b;
  --header: rgba(244, 246, 243, 0.85);
  --radius: 0.5rem;
}

@theme inline {
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-display: 'Playfair Display', Georgia, serif;
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-surface: var(--surface);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

@layer base {
  * { @apply border-border outline-ring/50; }
  html { scroll-behavior: smooth; }
  body {
    @apply bg-background text-foreground;
    font-family: 'Inter', system-ui, sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', Georgia, serif;
  }
}

@layer utilities {
  /* Flat paper card */
  .glass-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 0.75rem;
    transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
  }
  .glass-card:hover {
    border-color: #c3d2c7;
    box-shadow: 0 8px 24px rgba(18, 20, 15, 0.06);
    transform: translateY(-2px);
  }

  /* Uppercase micro-label */
  .label-eyebrow {
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 0.22em;
    font-size: 0.68rem;
    font-weight: 600;
    color: var(--primary);
  }

  /* Hairline rule */
  .rule {
    height: 1px;
    width: 100%;
    background: var(--border);
  }

  /* Scroll-reveal */
  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1), transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .reveal.in-view {
    opacity: 1;
    transform: translateY(0);
  }
  .reveal-delay-1 { transition-delay: 0.08s; }
  .reveal-delay-2 { transition-delay: 0.16s; }
  .reveal-delay-3 { transition-delay: 0.24s; }
  .reveal-delay-4 { transition-delay: 0.32s; }
  .reveal-delay-5 { transition-delay: 0.4s; }

  /* Timeline dot (light) */
  .timeline-dot {
    position: absolute;
    left: 0;
    top: 22px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--card);
    border: 2px solid var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    .reveal {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }
}
```

- [ ] **Step 2: Run type/type-free checks**

Run: `npx tsc --noEmit -p tsconfig.app.json`
Expected: no output (success).

- [ ] **Step 3: Verify build still compiles**

Run: `npm run build`
Expected: `✓ built in ...` with no errors.

- [ ] **Step 4: Commit (only if user approves)**

```bash
git add src/index.css
git commit -m "style: introduce light editorial theme tokens"
```

---

## Task 2: Fonts, meta & favicon

**Files:**
- Modify: `index.html`
- Modify: `public/favicon.svg`

- [ ] **Step 1: Update the fonts `<link>` in `index.html`**

Replace the existing Google Fonts link:

```html
    <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
```

with:

```html
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet" />
```

- [ ] **Step 2: Update theme-color and remove `body.dark` in `index.html`**

Change:

```html
    <meta name="theme-color" content="#020817" />
```

to:

```html
    <meta name="theme-color" content="#f4f6f3" />
```

Change:

```html
  <body class="dark">
```

to:

```html
  <body>
```

- [ ] **Step 3: Replace `public/favicon.svg`**

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="12" fill="#12140f"/>
  <text x="32" y="43" text-anchor="middle" font-family="Georgia, serif" font-size="34" font-weight="700" fill="#1f5f4b">R</text>
</svg>
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: `✓ built in ...` with no errors.

- [ ] **Step 5: Commit (only if user approves)**

```bash
git add index.html public/favicon.svg
git commit -m "chore: load Playfair/Inter fonts and light favicon"
```

---

## Task 3: Shared SectionHeading component

**Files:**
- Create: `src/components/section-heading.tsx`

- [ ] **Step 1: Create the component**

```tsx
interface SectionHeadingProps {
  index: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <span className="label-eyebrow">{index}</span>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">{title}</h2>
      <div className="rule" />
      {subtitle && <p className="text-sm text-muted-foreground pt-1">{subtitle}</p>}
    </div>
  );
}
```

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit -p tsconfig.app.json`
Expected: no output.

- [ ] **Step 3: Commit (only if user approves)**

```bash
git add src/components/section-heading.tsx
git commit -m "feat: add editorial SectionHeading component"
```

---

## Task 4: Top navigation header + App shell

**Files:**
- Create: `src/components/header.tsx`
- Delete: `src/components/sidebar.tsx`
- Modify: `src/App.tsx` (replace entire file)

- [ ] **Step 1: Create `src/components/header.tsx`**

```tsx
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
];

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-border"
      style={{ background: "var(--header)", backdropFilter: "blur(10px)" }}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="text-base font-bold tracking-[0.18em] text-foreground"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          R. ADHIKARI
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const active = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-[11px] uppercase tracking-[0.18em] font-medium transition-colors ${
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="#contact"
            className="text-[11px] uppercase tracking-[0.18em] font-semibold text-primary-foreground bg-primary hover:bg-primary/90 px-4 py-2 rounded-md transition-colors"
          >
            Contact
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-foreground p-1"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-background px-6 py-4 flex flex-col">
          {[...NAV_ITEMS, { id: "contact", label: "Contact" }].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="py-3 text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors border-b border-border/60 last:border-0"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
```

- [ ] **Step 2: Delete the old sidebar**

Run: `rm src/components/sidebar.tsx`
Expected: file removed.

- [ ] **Step 3: Replace `src/App.tsx`**

```tsx
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./components/about";
import Projects from "./components/project";
import Skills from "./components/skills";
import Hero from "./components/hero";
import Experience from "./components/experience";
import Education from "./components/education";
import Contact from "./components/contacts";
import Header from "./components/header";
import Services from "./components/services";
import { useScrollSpy } from "./hooks/useScrollSpy";

const SECTIONS = ["home", "about", "services", "experience", "education", "work", "skills", "contact"];

function App() {
  const activeSection = useScrollSpy(SECTIONS);

  return (
    <div className="bg-background min-h-screen">
      <Header activeSection={activeSection} />

      <main className="pt-16">
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="work"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer className="bg-[#12140f] text-[#c9d1c8] py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Rahul Adhikari
          </p>
          <p className="text-xs tracking-wide">rahul.adhikari2058@gmail.com · SE18 5AJ, London, UK</p>
        </div>
      </footer>

      <ToastContainer theme="light" />
    </div>
  );
}

export default App;
```

- [ ] **Step 4: Verify typecheck and build**

Run: `npx tsc --noEmit -p tsconfig.app.json && npm run build`
Expected: no type errors; `✓ built in ...`.

- [ ] **Step 5: Commit (only if user approves)**

```bash
git add src/components/header.tsx src/App.tsx
git rm src/components/sidebar.tsx
git commit -m "feat: replace sidebar with sticky top navigation"
```

---

## Task 5: Hero (split layout)

**Files:**
- Modify: `src/components/hero.tsx` (replace entire file)

- [ ] **Step 1: Replace `src/components/hero.tsx`**

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
    <section className="bg-background px-6 pt-16 pb-20 border-b border-border">
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
                View Work <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/resume.pdf"
                download="Rahul-Adhikari-Resume.pdf"
                className="inline-flex items-center gap-2 border border-border hover:border-primary text-foreground px-6 py-3 rounded-md font-semibold text-sm transition-colors"
              >
                <Download className="w-4 h-4" /> Download CV
              </a>
              <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary" /> Open to opportunities
              </span>
            </div>
          </div>

          <div className="w-full max-w-[280px] mx-auto lg:mx-0 lg:justify-self-end">
            <div className="aspect-[4/5] rounded-xl border border-border bg-gradient-to-br from-[#e6ece4] to-[#d5ddd3] flex flex-col items-center justify-center">
              <span className="text-6xl font-semibold text-[#9aa79a]" style={{ fontFamily: "'Playfair Display', serif" }}>
                RA
              </span>
              <span className="mt-4 text-[10px] uppercase tracking-[0.2em] text-[#8a9186]">Portrait placeholder</span>
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
Expected: no type errors; `✓ built`.

- [ ] **Step 3: Commit (only if user approves)**

```bash
git add src/components/hero.tsx
git commit -m "feat: rebuild hero as editorial split layout"
```

---

## Task 6: About section

**Files:**
- Modify: `src/components/about.tsx` (replace entire file)

- [ ] **Step 1: Replace `src/components/about.tsx`**

```tsx
import SectionHeading from "./section-heading";
import { useInView } from "../hooks/useInView";

const cards = [
  { title: "Frontend", desc: "React.js, Next.js, TypeScript, Tailwind CSS" },
  { title: "Backend & Data", desc: "Node.js, Nest.js, REST APIs, PostgreSQL, MongoDB" },
  { title: "Security & AI", desc: "OIDC Auth, API Security, Agentic AI Workflows, AI-Native SDLC" },
];

const About = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-20 md:py-24 bg-card px-6 border-b border-border">
      <div ref={ref} className={`max-w-5xl mx-auto reveal ${inView ? "in-view" : ""}`}>
        <SectionHeading index="01" title="About" subtitle="A short introduction" />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-10">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I am Rahul Adhikari, a Full-Stack Developer and postgraduate Computer Science student at York St John University in London. I hold a BSc in Computer Science &amp; IT and work across the full stack — React.js, Next.js, Node.js, Nest.js, TypeScript, REST APIs, PostgreSQL, and MongoDB.
            </p>
            <p>
              I build and ship enterprise fintech applications serving <span className="text-primary font-semibold">200+ bank branches</span>, spanning Bank Teller, Account Opening, Trade Finance, and Document Management systems. My work includes OIDC authentication, API integrity validation, and agentic AI workflows that deliver secure, user-focused banking solutions.
            </p>
            <p>
              I work within an AI-native SDLC, leveraging AI-assisted development practices throughout the software lifecycle. Beyond development, I'm passionate about mentoring — guiding full-stack projects from architecture to deployment.
            </p>
          </div>

          <div className="space-y-4">
            {cards.map((card) => (
              <div key={card.title} className="glass-card p-5">
                <h3 className="text-sm font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {card.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
```

- [ ] **Step 2: Verify typecheck and build**

Run: `npx tsc --noEmit -p tsconfig.app.json && npm run build`
Expected: success.

- [ ] **Step 3: Commit (only if user approves)**

```bash
git add src/components/about.tsx
git commit -m "feat: restyle About as editorial two-column layout"
```

---

## Task 7: Services section

**Files:**
- Modify: `src/components/services.tsx` (replace entire file)

- [ ] **Step 1: Replace `src/components/services.tsx`**

```tsx
import { Code2, Server, Database, Users } from "lucide-react";
import SectionHeading from "./section-heading";
import { useInView } from "../hooks/useInView";

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Pixel-perfect React and Next.js applications with clean architecture, responsive design, and smooth UX. Specializing in complex state management, form-heavy flows, and performance optimization.",
    stack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Full Stack Development",
    description: "End-to-end web applications from database schema to deployed product. MERN stack expertise with focus on security, scalability, and maintainability.",
    stack: ["MERN Stack", "REST APIs", "Authentication", "Deployment"],
  },
  {
    icon: Database,
    title: "Backend & API Development",
    description: "High-performance RESTful APIs and microservices using Node.js and NestJS. Experience with third-party integrations, payment gateways, and enterprise auth (OIDC/SSO).",
    stack: ["Node.js", "NestJS", "MongoDB", "PostgreSQL"],
  },
  {
    icon: Users,
    title: "Technical Consulting",
    description: "Requirements analysis, architecture planning, and hands-on development for banking and enterprise clients. Direct client engagement with a track record of on-time delivery.",
    stack: ["Architecture", "Client Collaboration", "Code Review", "Mentoring"],
  },
];

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="py-20 md:py-24 bg-background px-6 border-b border-border">
      <div ref={ref} className={`max-w-5xl mx-auto reveal ${inView ? "in-view" : ""}`}>
        <SectionHeading index="02" title="Services" subtitle="What I can build for you" />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="glass-card p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-secondary border border-primary/20">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {service.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-md border bg-secondary text-secondary-foreground border-primary/15 font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify typecheck and build**

Run: `npx tsc --noEmit -p tsconfig.app.json && npm run build`
Expected: success.

- [ ] **Step 3: Commit (only if user approves)**

```bash
git add src/components/services.tsx
git commit -m "feat: restyle Services as flat light cards"
```

---

## Task 8: Experience section

**Files:**
- Modify: `src/components/experience-card.tsx` (replace entire file)
- Modify: `src/components/experience.tsx` (replace entire file)

- [ ] **Step 1: Replace `src/components/experience-card.tsx`**

```tsx
import { ExperienceCardProps } from "../types";
import { Briefcase } from "lucide-react";

interface TimelineCardProps extends ExperienceCardProps {
  isLast?: boolean;
}

const ExperienceCard = ({ company, position, period, description, technologies, isLast = false }: TimelineCardProps) => {
  return (
    <div className="relative pl-14">
      {!isLast && (
        <div className="absolute left-[19px] top-10 bottom-[-24px] w-[2px] bg-border" />
      )}

      <div className="timeline-dot">
        <Briefcase className="w-4 h-4 text-primary" />
      </div>

      <div className="glass-card p-6 space-y-4 ml-4">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold text-foreground leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              {position}
            </h3>
            <p className="text-primary font-semibold text-sm mt-0.5">{company}</p>
          </div>
          <span className="text-xs text-muted-foreground bg-muted border border-border px-3 py-1.5 rounded-full whitespace-nowrap self-start font-medium">
            {period}
          </span>
        </div>

        <ul className="space-y-2">
          {description.map((item, idx) => (
            <li key={idx} className="text-sm text-muted-foreground flex gap-2.5 leading-relaxed">
              <span className="text-primary mt-[3px] flex-shrink-0 text-base leading-none">›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-1">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-primary/15 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
```

- [ ] **Step 2: Replace `src/components/experience.tsx`**

```tsx
import { experiences } from "../data/Experience";
import ExperienceCard from "./experience-card";
import SectionHeading from "./section-heading";
import { useInView } from "../hooks/useInView";

const Experience = () => {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-20 md:py-24 bg-card px-6 border-b border-border">
      <div ref={ref} className={`max-w-5xl mx-auto reveal ${inView ? "in-view" : ""}`}>
        <SectionHeading index="03" title="Experience" subtitle="My professional journey" />

        <div className="relative mt-10 space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className={`reveal reveal-delay-${Math.min(idx + 1, 5)} ${inView ? "in-view" : ""}`}>
              <ExperienceCard {...exp} isLast={idx === experiences.length - 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
```

- [ ] **Step 3: Verify typecheck and build**

Run: `npx tsc --noEmit -p tsconfig.app.json && npm run build`
Expected: success.

- [ ] **Step 4: Commit (only if user approves)**

```bash
git add src/components/experience.tsx src/components/experience-card.tsx
git commit -m "feat: restyle Experience timeline for light theme"
```

---

## Task 9: Education section

**Files:**
- Modify: `src/components/education.tsx` (replace entire file)

- [ ] **Step 1: Replace `src/components/education.tsx`**

```tsx
import { GraduationCap, MapPin } from "lucide-react";
import { education } from "../data/Education";
import SectionHeading from "./section-heading";
import { useInView } from "../hooks/useInView";

const Education = () => {
  const { ref, inView } = useInView();

  return (
    <section id="education" className="py-20 md:py-24 bg-background px-6 border-b border-border">
      <div ref={ref} className={`max-w-5xl mx-auto reveal ${inView ? "in-view" : ""}`}>
        <SectionHeading index="04" title="Education" subtitle="Academic background" />

        <div className="relative mt-10 space-y-8">
          {education.map((edu, idx) => (
            <div key={edu.institution} className={`reveal reveal-delay-${Math.min(idx + 1, 5)} ${inView ? "in-view" : ""}`}>
              <div className="relative pl-14">
                {idx !== education.length - 1 && (
                  <div className="absolute left-[19px] top-10 bottom-[-24px] w-[2px] bg-border" />
                )}

                <div className="timeline-dot">
                  <GraduationCap className="w-4 h-4 text-primary" />
                </div>

                <div className="glass-card p-6 space-y-3 ml-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-foreground leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {edu.institution}
                      </h3>
                      <p className="text-primary font-semibold text-sm mt-0.5">{edu.degree}</p>
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted border border-border px-3 py-1.5 rounded-full whitespace-nowrap self-start font-medium">
                      {edu.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
```

- [ ] **Step 2: Verify typecheck and build**

Run: `npx tsc --noEmit -p tsconfig.app.json && npm run build`
Expected: success.

- [ ] **Step 3: Commit (only if user approves)**

```bash
git add src/components/education.tsx
git commit -m "feat: restyle Education section for light theme"
```

---

## Task 10: Projects section

**Files:**
- Modify: `src/components/porject-card.tsx` (replace entire file)
- Modify: `src/components/project.tsx` (replace entire file)

- [ ] **Step 1: Replace `src/components/porject-card.tsx`**

```tsx
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({ title, description, technologies, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <div className="glass-card p-6 flex flex-col gap-4 h-full">
      <div>
        <h3 className="text-lg font-bold text-foreground mb-2 leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-primary/15 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {(liveUrl || githubUrl) && (
        <div className="flex gap-5 pt-2 border-t border-border">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition font-semibold tracking-wide uppercase"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition font-semibold tracking-wide uppercase"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
          )}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Replace `src/components/project.tsx`**

```tsx
import { Project } from "../types";
import ProjectCard from "./porject-card";
import SectionHeading from "./section-heading";
import { useInView } from "../hooks/useInView";

const projects: Project[] = [
  {
    title: "Bank Teller Portal (React.js)",
    description:
      "Implemented OIDC-based SSO authentication, managing token lifecycle and session flow using React Query. Designed and delivered a complete Social Security Fund (SSF) module with step-wise validation and data integrity checks. Integrated biometric fingerprint enrollment, digital signature pad, document scanning, and photo capture. Enhanced security using signature-based response verification to prevent response manipulation.",
    image: "/image/docsaver.png",
    technologies: ["ReactJS", "React Query", "React Router", "Zustand", "RSA/SHA-256", "Axios", "Shadcn UI"],
  },
  {
    title: "Bank Account Opening (React.js)",
    description:
      "Developed a Corporate Account Opening module using React JSON Schema Form (RJSF) to handle complex, schema-driven forms with strong validation. Optimized performance and enhanced user experience across form-heavy flows through UI and state management improvements.",
    image: "/image/docsaver.png",
    technologies: ["ReactJS", "React Query", "RJSF", "Redux Toolkit", "Redux Saga", "Axios", "Ant Design"],
  },
  {
    title: "Document Saver (MERN Stack)",
    description:
      "Secure document storage system where all documents are encrypted before storage and decrypted only upon authorized access using a user-specific access key and JWT-based authentication.",
    image: "/image/document-saver.png",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "AES-256-GCM", "JWT", "Cloudinary"],
    githubUrl: "https://github.com/Rahulad12/documentSaver",
    liveUrl: "https://kagjaat-bora.vercel.app/",
  },
  {
    title: "HRFolio",
    description:
      "Recruitment system enabling recruiters to manage candidate progression through predefined hiring stages. Enforces a strict sequential workflow from application submission to final selection, ensuring all stages (assessment, interview) are completed in order.",
    image: "/image/hrfoolio.png",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Redux", "RTK Query", "Ant Design"],
    liveUrl: "https://hrfoolio.vercel.app",
    githubUrl: "https://github.com/Rahulad12/HRFolio",
  },
  {
    title: "Hotel Accommodation API",
    description:
      "Backend for a hotel accommodation system using Node.js. Handles error management, RESTful API design, third-party integrations (Twilio, Google OAuth), and follows SRS guidelines for clean, structured code.",
    image: "",
    technologies: ["Node.js", "Express.js", "MongoDB", "Twilio", "Google OAuth"],
  },
  {
    title: "BiZNepal",
    description:
      "Business directory with sentiment analysis of user reviews — final year group project. Contributed as frontend developer and participated in training the sentiment analysis model.",
    image: "",
    technologies: ["React.js", "PostgreSQL", ".NET"],
    githubUrl: "https://github.com/UTSAB-NI/BizNepal",
  },
];

const Projects = () => {
  const { ref, inView } = useInView();

  return (
    <section id="work" className="py-20 md:py-24 bg-card px-6 border-b border-border">
      <div ref={ref} className={`max-w-5xl mx-auto reveal ${inView ? "in-view" : ""}`}>
        <SectionHeading index="05" title="Featured Projects" subtitle="A selection of work I'm proud of" />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className={`reveal reveal-delay-${Math.min((idx % 4) + 1, 5)} ${inView ? "in-view" : ""}`}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
```

- [ ] **Step 3: Verify typecheck and build**

Run: `npx tsc --noEmit -p tsconfig.app.json && npm run build`
Expected: success.

- [ ] **Step 4: Commit (only if user approves)**

```bash
git add src/components/project.tsx src/components/porject-card.tsx
git commit -m "feat: restyle Projects as flat light cards"
```

---

## Task 11: Skills section

**Files:**
- Modify: `src/components/skill-badge.tsx` (replace entire file)
- Modify: `src/components/skills.tsx` (replace entire file)

- [ ] **Step 1: Replace `src/components/skill-badge.tsx`**

```tsx
interface SkillBadgeProps {
  name: string;
  level?: "expert" | "advanced" | "intermediate";
}

const levelStyles = {
  expert: "bg-primary text-primary-foreground border-primary hover:bg-primary/90",
  advanced: "bg-secondary text-secondary-foreground border-primary/20 hover:bg-secondary/70",
  intermediate: "bg-muted text-muted-foreground border-border hover:bg-muted/70",
};

const SkillBadge = ({ name, level = "advanced" }: SkillBadgeProps) => (
  <span
    className={`inline-block px-3 py-1.5 rounded-md border text-xs font-semibold transition-all duration-200 cursor-default tracking-wide ${levelStyles[level]}`}
  >
    {name}
  </span>
);

export default SkillBadge;
```

- [ ] **Step 2: Replace `src/components/skills.tsx`**

```tsx
import SkillBadge from "./skill-badge";
import SectionHeading from "./section-heading";
import { useInView } from "../hooks/useInView";

const skillCategories = [
  {
    category: "Key Skills",
    skills: [
      { name: "Stakeholder Collaboration", level: "expert" as const },
      { name: "Client-Facing Development", level: "expert" as const },
      { name: "Requirements Analysis", level: "advanced" as const },
      { name: "Business Logic → System Features", level: "advanced" as const },
      { name: "Agile Development", level: "advanced" as const },
      { name: "Training & Mentorship", level: "advanced" as const },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: "expert" as const },
      { name: "Next.js", level: "expert" as const },
      { name: "TypeScript", level: "expert" as const },
      { name: "Tailwind CSS", level: "advanced" as const },
      { name: "Redux", level: "advanced" as const },
      { name: "React Query", level: "advanced" as const },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: "expert" as const },
      { name: "NestJS", level: "advanced" as const },
      { name: "Express.js", level: "expert" as const },
      { name: "REST APIs", level: "expert" as const },
      { name: "Microservices", level: "advanced" as const },
      { name: "Socket.io", level: "advanced" as const },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", level: "expert" as const },
      { name: "PostgreSQL", level: "advanced" as const },
      { name: "Firebase", level: "advanced" as const },
      { name: "Database Design", level: "advanced" as const },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", level: "expert" as const },
      { name: "Docker", level: "advanced" as const },
      { name: "Postman", level: "advanced" as const },
      { name: "CI/CD", level: "advanced" as const },
      { name: "NPM/Yarn", level: "expert" as const },
      { name: "Jenkins", level: "intermediate" as const },
      { name: "Vercel", level: "intermediate" as const },
    ],
  },
  {
    category: "Concepts & Practices",
    skills: [
      { name: "OOP", level: "advanced" as const },
      { name: "OIDC Authentication", level: "advanced" as const },
      { name: "API Security", level: "advanced" as const },
      { name: "Agentic AI Workflows", level: "advanced" as const },
      { name: "AI-Native SDLC", level: "advanced" as const },
      { name: "Requirements Analysis", level: "advanced" as const },
      { name: "Client-Facing Development", level: "expert" as const },
    ],
  },
];

const Skills = () => {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-20 md:py-24 bg-background px-6 border-b border-border">
      <div ref={ref} className={`max-w-5xl mx-auto reveal ${inView ? "in-view" : ""}`}>
        <SectionHeading index="06" title="Technical Skills" subtitle="Technologies and tools I work with" />

        <div className="mt-8 flex gap-4 flex-wrap">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="w-2.5 h-2.5 rounded-sm bg-primary" />
            Expert
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="w-2.5 h-2.5 rounded-sm bg-secondary border border-primary/20" />
            Advanced
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="w-2.5 h-2.5 rounded-sm bg-muted border border-border" />
            Intermediate
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((cat, i) => (
            <div key={cat.category} className={`space-y-3 reveal reveal-delay-${Math.min(i + 1, 5)} ${inView ? "in-view" : ""}`}>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-[0.12em]">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <SkillBadge key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
```

- [ ] **Step 3: Verify typecheck and build**

Run: `npx tsc --noEmit -p tsconfig.app.json && npm run build`
Expected: success.

- [ ] **Step 4: Commit (only if user approves)**

```bash
git add src/components/skills.tsx src/components/skill-badge.tsx
git commit -m "feat: restyle Skills badges for light theme"
```

---

## Task 12: Contact section

**Files:**
- Modify: `src/components/contacts.tsx` (replace entire file)

- [ ] **Step 1: Replace `src/components/contacts.tsx`**

```tsx
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "./section-heading";
import { useInView } from "../hooks/useInView";

const Contact = () => {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="py-20 md:py-24 bg-card px-6">
      <div ref={ref} className={`max-w-5xl mx-auto reveal ${inView ? "in-view" : ""}`}>
        <SectionHeading
          index="07"
          title="Get In Touch"
          subtitle="Open to new opportunities, freelance projects, and interesting conversations."
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <a href="mailto:rahul.adhikari2058@gmail.com" className="glass-card flex items-center gap-4 p-5 group">
              <div className="w-11 h-11 rounded-lg bg-secondary border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] mb-1">Email</p>
                <p className="text-foreground font-semibold text-sm break-all">rahul.adhikari2058@gmail.com</p>
              </div>
            </a>

            <a href="tel:+447345131450" className="glass-card flex items-center gap-4 p-5 group">
              <div className="w-11 h-11 rounded-lg bg-secondary border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] mb-1">Phone</p>
                <p className="text-foreground font-semibold text-sm">+44 7345 131450</p>
              </div>
            </a>

            <div className="glass-card flex items-center gap-4 p-5">
              <div className="w-11 h-11 rounded-lg bg-secondary border border-primary/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] mb-1">Location</p>
                <p className="text-foreground font-semibold text-sm">SE18 5AJ, London, UK</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 space-y-5">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                Connect With Me
              </h3>
              <p className="text-xs text-muted-foreground">Follow my work and stay in touch</p>
            </div>

            <div className="space-y-3">
              <a
                href="https://github.com/rahulad12"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition text-sm font-medium group"
              >
                <div className="w-8 h-8 rounded-lg bg-secondary border border-primary/20 flex items-center justify-center">
                  <Github className="w-4 h-4 text-primary" />
                </div>
                github.com/rahulad12
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-adhikari-7b2a87214/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition text-sm font-medium group"
              >
                <div className="w-8 h-8 rounded-lg bg-secondary border border-primary/20 flex items-center justify-center">
                  <Linkedin className="w-4 h-4 text-primary" />
                </div>
                linkedin.com/in/rahul-adhikari
              </a>
            </div>

            <a
              href="mailto:rahul.adhikari2058@gmail.com"
              className="block w-full text-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-semibold transition-colors text-sm"
            >
              Send Me a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
```

- [ ] **Step 2: Verify typecheck and build**

Run: `npx tsc --noEmit -p tsconfig.app.json && npm run build`
Expected: success.

- [ ] **Step 3: Commit (only if user approves)**

```bash
git add src/components/contacts.tsx
git commit -m "feat: restyle Contact cards for light theme"
```

---

## Task 13: Final verification & cleanup

**Files:**
- Verify: whole project

- [ ] **Step 1: Confirm no stale dark-theme references remain**

Run (Grep tool or): `grep -rn "Syne\|DM Sans\|text-gradient\|glow-blue\|glow-amber\|blob-\|bg-blue-\|text-blue-\|bg-amber-\|text-amber-" src index.html`
Expected: no matches.

- [ ] **Step 2: Run lint**

Run: `npm run lint`
Expected: no errors.

- [ ] **Step 3: Run typecheck**

Run: `npx tsc --noEmit -p tsconfig.app.json`
Expected: no output.

- [ ] **Step 4: Run production build**

Run: `npm run build`
Expected: `✓ built in ...` with no errors.

- [ ] **Step 5: Manual visual check**

Run: `npm run dev` and open `http://localhost:5173`.
Verify:
- Sticky top nav renders, links highlight on scroll, mobile menu opens/closes.
- Hero split renders with placeholder portrait and stat row.
- Every section shows its numbered heading (`01`–`07`) with hairline.
- Cards are flat paper with hairline borders; accent is green throughout; no blue/amber/glow leftovers.
- Footer is the dark ink band with email + location.
- Resize to mobile: nav collapses, hero stacks, grids single-column.

- [ ] **Step 6: Commit (only if user approves)**

```bash
git add -A
git commit -m "feat: editorial personal-brand redesign"
```

---

## Self-Review

**Spec coverage:**
- Light theme tokens → Task 1 ✓
- Fonts (Playfair + Inter) + light meta + favicon → Task 2 ✓
- Sticky top nav replacing sidebar → Task 4 ✓
- Split hero + portrait placeholder + stat row → Task 5 ✓
- Numbered section headings → Task 3 + Tasks 6–12 ✓
- About / Services / Experience / Education / Projects / Skills / Contact restyle → Tasks 6–12 ✓
- Footer ink band → Task 4 ✓
- Motion softening + reduced-motion + focus/aria → Task 1 (`prefers-reduced-motion`, `.reveal`), Task 4 (`aria-label`, `aria-expanded`) ✓
- SEO theme-color → Task 2 ✓
- Content unchanged → no data/type edits ✓
- Verification (lint/tsc/build/manual) → Task 13 ✓

**Placeholder scan:** No "TBD/TODO/implement later". All code shown in full.

**Type consistency:** `ExperienceCardProps` and `Project`/`ProjectCardProps` are unchanged and consumed identically. New `SectionHeading` props (`index`, `title`, `subtitle`) are used consistently in Tasks 6–12. `useInView`/`useCountUp` signatures unchanged.
