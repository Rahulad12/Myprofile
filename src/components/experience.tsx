import { experiences } from "../data/Experience";
import ExperienceCard from "./experience-card";
import SectionHeading from "./section-heading";
import { useInView } from "../hooks/useInView";

const Experience = () => {
  const { ref, inView } = useInView();

  return (
    <section className="py-20 md:py-24 bg-card px-6 border-b border-border">
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
