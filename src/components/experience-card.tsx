import { ExperienceCardProps } from "../types";

const ExperienceCard =({
  company,
  position,
  period,
  description,
  technologies,
}: ExperienceCardProps) => {
  return (
    <div className="bg-background border border-border rounded-lg p-6 hover:border-primary transition">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div>
          <h3 className="text-2xl font-bold text-primary">{position}</h3>
          <p className="text-lg text-foreground">{company}</p>
        </div>
        <p className="text-sm text-muted-foreground whitespace-nowrap">{period}</p>
      </div>

      <ul className="space-y-2 mb-4">
        {description.map((item, idx) => (
          <li key={idx} className="text-muted-foreground flex gap-3">
            <span className="text-primary mt-1">›</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="inline-block bg-card text-accent text-sm px-3 py-1 rounded border border-border"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
export default ExperienceCard