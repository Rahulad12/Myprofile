export type Project = {
<<<<<<< Updated upstream
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
};
=======
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export type Experience = {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
  location?: string;
};

export type SkillCategory = "frontend" | "backend" | "tools";

export type SkillData = {
  id: number;
  title: string;
  description: string;
  skills: string[];
  color: string;
  icon: string;
};

export type Statistic = {
  id: number;
  icon: JSX.Element;
  number: string;
  label: string;
  description: string;
  gradient: string;
  iconBg: string;
};

export type ContactForm = {
  email: string;
  message: string;
};
>>>>>>> Stashed changes
