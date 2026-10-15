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
