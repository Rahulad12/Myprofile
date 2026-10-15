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
    <section className="py-20 md:py-24 bg-card px-6 border-b border-border">
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
