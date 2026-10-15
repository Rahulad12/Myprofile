import { GraduationCap, MapPin } from "lucide-react";
import { education } from "../data/Education";
import SectionHeading from "./section-heading";
import { useInView } from "../hooks/useInView";

const Education = () => {
  const { ref, inView } = useInView();

  return (
    <section className="py-20 md:py-24 bg-background px-6 border-b border-border">
      <div ref={ref} className={`max-w-5xl mx-auto reveal ${inView ? "in-view" : ""}`}>
        <SectionHeading index="04" title="Education" subtitle="Academic background" />

        <div className="relative mt-10 space-y-8">
          {education.map((edu, idx) => (
            <div key={edu.institution} className={`reveal reveal-delay-${Math.min(idx + 1, 5)} ${inView ? "in-view" : ""}`}>
              <div className="relative pl-14">
                {idx !== education.length - 1 && (
                  <div className="absolute left-[19px] top-10 bottom-[-24px] w-[2px] bg-border" />
                )}

                <div className="timeline-dot">
                  <GraduationCap className="w-4 h-4 text-primary" />
                </div>

                <div className="glass-card p-6 space-y-3 ml-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-foreground leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {edu.institution}
                      </h3>
                      <p className="text-primary font-semibold text-sm mt-0.5">{edu.degree}</p>
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted border border-border px-3 py-1.5 rounded-full whitespace-nowrap self-start font-medium">
                      {edu.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
