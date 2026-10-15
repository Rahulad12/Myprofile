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

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
}
