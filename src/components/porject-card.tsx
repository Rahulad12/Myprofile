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
        <h3
          className="text-lg font-bold text-foreground mb-2 leading-snug"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {(liveUrl || githubUrl) && (
        <div className="flex gap-5 pt-2 border-t border-border/50">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition font-semibold tracking-wide uppercase"
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
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-blue-400 transition font-semibold tracking-wide uppercase"
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
