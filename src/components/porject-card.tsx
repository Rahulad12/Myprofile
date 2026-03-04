import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
  github,
}: ProjectCardProps) {
  return (
    <div className="bg-background border border-border rounded-lg p-6 hover:border-primary transition">
      <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="inline-block bg-card text-accent text-sm px-3 py-1 rounded border border-border"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition"
          >
            View Project
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition"
          >
            GitHub
            <Github className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
