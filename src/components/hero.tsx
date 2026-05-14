import { ArrowRight, Download } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";

const stats = [
  { value: 1, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 200, suffix: "+", label: "Users Impacted" },
  { value: 3, suffix: "", label: "Enterprise Systems" },
];

function StatItem({ value, suffix, label, trigger }: { value: number; suffix: string; label: string; trigger: boolean }) {
  const count = useCountUp(value, 1800, trigger);
  return (
    <div className="text-center space-y-1.5">
      <p className="text-3xl md:text-4xl font-extrabold text-gradient" style={{ fontFamily: "'Syne', sans-serif" }}>
        {count}{suffix}
      </p>
      <p className="text-[11px] text-muted-foreground uppercase tracking-[0.15em] font-medium">{label}</p>
    </div>
  );
}

const Hero = () => {
  const { ref: statsRef, inView: statsInView } = useInView(0.3);
  const { ref: contentRef, inView: contentInView } = useInView(0.1);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden bg-background">

      {/* === Gradient mesh blobs === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blue blob — top right */}
        <div
          className="blob-1 absolute rounded-full"
          style={{
            width: 700,
            height: 700,
            top: "-180px",
            right: "-180px",
            background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.06) 50%, transparent 75%)",
            filter: "blur(1px)",
          }}
        />
        {/* Amber blob — bottom left */}
        <div
          className="blob-2 absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            bottom: "-100px",
            left: "-80px",
            background: "radial-gradient(circle, rgba(245,158,11,0.14) 0%, rgba(245,158,11,0.04) 55%, transparent 75%)",
            filter: "blur(1px)",
          }}
        />
        {/* Small blue accent — center */}
        <div
          className="blob-3 absolute rounded-full"
          style={{
            width: 320,
            height: 320,
            top: "40%",
            left: "42%",
            background: "radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* === Content === */}
      <div
        ref={contentRef}
        className={`relative z-10 max-w-3xl w-full text-center space-y-8 reveal ${contentInView ? "in-view" : ""}`}
      >
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Available for new projects
        </div>

        <div className="space-y-5">
          <h1
            className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-foreground leading-[1.05] tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Rahul
            <br />
            <span className="text-gradient">Adhikari</span>
          </h1>

          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500/50" />
            <p
              className="text-lg md:text-xl font-semibold text-muted-foreground tracking-widest uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Full Stack Developer
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500/50" />
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Building enterprise-grade applications and banking systems with React, Node.js, and modern web architecture.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 glow-blue"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/resume.pdf"
            download="Rahul-Adhikari-Resume.pdf"
            className="inline-flex items-center gap-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 hover:border-amber-400/60 px-7 py-3.5 rounded-xl font-semibold transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground border border-border hover:border-primary/50 px-7 py-3.5 rounded-xl font-semibold transition-all duration-200"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* === Stats band === */}
      <div
        ref={statsRef}
        className={`relative z-10 mt-20 w-full max-w-2xl reveal reveal-delay-3 ${statsInView ? "in-view" : ""}`}
      >
        <div
          className="rounded-2xl border border-blue-500/20 bg-card/80 backdrop-blur-sm px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ boxShadow: "0 0 40px rgba(59,130,246,0.08), inset 0 1px 0 rgba(255,255,255,0.04)" }}
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
