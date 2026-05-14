import { Code2, Server, Database, Users } from "lucide-react";
import { useInView } from "../hooks/useInView";

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Pixel-perfect React and Next.js applications with clean architecture, responsive design, and smooth UX. Specializing in complex state management, form-heavy flows, and performance optimization.",
    stack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "blue",
  },
  {
    icon: Server,
    title: "Full Stack Development",
    description: "End-to-end web applications from database schema to deployed product. MERN stack expertise with focus on security, scalability, and maintainability.",
    stack: ["MERN Stack", "REST APIs", "Authentication", "Deployment"],
    color: "amber",
  },
  {
    icon: Database,
    title: "Backend & API Development",
    description: "High-performance RESTful APIs and microservices using Node.js and NestJS. Experience with third-party integrations, payment gateways, and enterprise auth (OIDC/SSO).",
    stack: ["Node.js", "NestJS", "MongoDB", "PostgreSQL"],
    color: "blue",
  },
  {
    icon: Users,
    title: "Technical Consulting",
    description: "Requirements analysis, architecture planning, and hands-on development for banking and enterprise clients. Direct client engagement with a track record of on-time delivery.",
    stack: ["Architecture", "Client Collaboration", "Code Review", "Mentoring"],
    color: "amber",
  },
];

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="py-20 px-6 bg-card">
      <div className="max-w-4xl mx-auto space-y-12">
        <div ref={ref} className={`space-y-3 reveal ${inView ? "in-view" : ""}`}>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground section-heading"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Services
          </h2>
          <p className="text-muted-foreground pl-5 text-sm">What I can build for you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isBlue = service.color === "blue";
            return (
              <div
                key={service.title}
                className={`glass-card p-6 space-y-4 reveal reveal-delay-${i + 1} ${inView ? "in-view" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                    isBlue
                      ? "bg-blue-500/10 border-blue-500/25"
                      : "bg-amber-500/10 border-amber-500/25"
                  }`}>
                    <Icon className={`w-5 h-5 ${isBlue ? "text-blue-400" : "text-amber-400"}`} />
                  </div>
                  <h3
                    className="text-base font-bold text-foreground"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {service.stack.map((s) => (
                    <span
                      key={s}
                      className={`text-xs px-2.5 py-1 rounded-md border font-medium ${
                        isBlue
                          ? "bg-blue-500/10 text-blue-300 border-blue-500/20"
                          : "bg-amber-500/10 text-amber-300 border-amber-500/20"
                      }`}
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
