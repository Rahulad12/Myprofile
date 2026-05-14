import SkillBadge from "./skill-badge";
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
];

const Skills = () => {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-20 bg-background px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div ref={ref} className={`space-y-3 reveal ${inView ? "in-view" : ""}`}>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground section-heading"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Technical Skills
          </h2>
          <p className="text-muted-foreground pl-5">Technologies and tools I work with</p>
        </div>

        {/* Legend */}
        <div className={`flex gap-4 flex-wrap reveal reveal-delay-1 ${inView ? "in-view" : ""}`}>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="w-2.5 h-2.5 rounded-sm bg-primary/15 border border-primary/30" />
            Expert
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="w-2.5 h-2.5 rounded-sm bg-cyan-500/10 border border-cyan-500/20" />
            Advanced
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="w-2.5 h-2.5 rounded-sm bg-muted/30 border border-border" />
            Intermediate
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.category}
              className={`space-y-3 reveal reveal-delay-${Math.min(i + 1, 5)} ${inView ? "in-view" : ""}`}
            >
              <h3
                className="text-lg font-bold text-primary"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {cat.category}
              </h3>
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
