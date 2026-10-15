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
    <section className="py-20 md:py-24 bg-background px-6 border-b border-border">
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
