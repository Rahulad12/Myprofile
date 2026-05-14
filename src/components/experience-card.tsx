import { ExperienceCardProps } from "../types";
import { Briefcase } from "lucide-react";

interface TimelineCardProps extends ExperienceCardProps {
  isLast?: boolean;
}

const ExperienceCard = ({ company, position, period, description, technologies, isLast = false }: TimelineCardProps) => {
  return (
    <div className="relative pl-14">
      {/* Timeline vertical line */}
      {!isLast && (
        <div className="absolute left-[19px] top-10 bottom-[-24px] w-[2px] bg-gradient-to-b from-blue-500/60 via-blue-500/20 to-transparent" />
      )}

      {/* Timeline dot */}
      <div className="timeline-dot">
        <Briefcase className="w-4 h-4 text-blue-400" />
      </div>

      {/* Card */}
      <div className="glass-card p-6 space-y-4 ml-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div>
            <h3
              className="text-xl font-bold text-foreground leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {position}
            </h3>
            <p className="text-blue-400 font-semibold text-sm mt-0.5">{company}</p>
          </div>
          <span className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full whitespace-nowrap self-start font-medium">
            {period}
          </span>
        </div>

        {/* Description */}
        <ul className="space-y-2">
          {description.map((item, idx) => (
            <li key={idx} className="text-sm text-muted-foreground flex gap-2.5 leading-relaxed">
              <span className="text-blue-400 mt-[3px] flex-shrink-0 text-base leading-none">›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20 font-medium"
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
