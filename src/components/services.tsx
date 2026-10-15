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
    <section className="py-20 md:py-24 bg-background px-6 border-b border-border">
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
