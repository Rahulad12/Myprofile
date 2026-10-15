import { ExperienceCardProps } from "../types";
import { Briefcase } from "lucide-react";

interface TimelineCardProps extends ExperienceCardProps {
  isLast?: boolean;
}

const ExperienceCard = ({ company, position, period, description, technologies, isLast = false }: TimelineCardProps) => {
  return (
    <div className="relative pl-14">
      {!isLast && (
        <div className="absolute left-[19px] top-10 bottom-[-24px] w-[2px] bg-border" />
      )}

      <div className="timeline-dot">
        <Briefcase className="w-4 h-4 text-primary" />
      </div>

      <div className="glass-card p-6 space-y-4 ml-4">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold text-foreground leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              {position}
            </h3>
            <p className="text-primary font-semibold text-sm mt-0.5">{company}</p>
          </div>
          <span className="text-xs text-muted-foreground bg-muted border border-border px-3 py-1.5 rounded-full whitespace-nowrap self-start font-medium">
            {period}
          </span>
        </div>

        <ul className="space-y-2">
          {description.map((item, idx) => (
            <li key={idx} className="text-sm text-muted-foreground flex gap-2.5 leading-relaxed">
              <span className="text-primary mt-[3px] flex-shrink-0 text-base leading-none">›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-1">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-primary/15 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
