import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({ title, description, technologies, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <div className="glass-card p-6 flex flex-col gap-4 h-full">
      <div>
        <h3 className="text-lg font-bold text-foreground mb-2 leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-primary/15 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {(liveUrl || githubUrl) && (
        <div className="flex gap-5 pt-2 border-t border-border">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition font-semibold tracking-wide uppercase"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition font-semibold tracking-wide uppercase"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
          )}
        </div>
      )}
    </div>
  );
}
