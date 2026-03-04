import { experiences } from "../data/Experience";
import ExperienceCard from "./experience-card";

const Experience =() =>{
  return (
    <section id="experience" className="py-20 bg-background px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Experience
          </h2>
          <div className="h-1 w-20 bg-primary rounded" />
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience