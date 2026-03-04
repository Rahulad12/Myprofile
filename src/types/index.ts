export type Project = {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
};

export interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}
