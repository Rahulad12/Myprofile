import { experiences } from "../data/Experience";
import ExperienceCard from "./experience-card";
import { useInView } from "../hooks/useInView";

const Experience = () => {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-20 bg-background px-6">
      <div className="max-w-4xl mx-auto space-y-14">
        <div ref={ref} className={`space-y-3 reveal ${inView ? "in-view" : ""}`}>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground section-heading"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Experience
          </h2>
          <p className="text-muted-foreground pl-5 text-sm">My professional journey</p>
        </div>

        <div className="relative space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`reveal reveal-delay-${Math.min(idx + 1, 5)} ${inView ? "in-view" : ""}`}
            >
              <ExperienceCard {...exp} isLast={idx === experiences.length - 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
