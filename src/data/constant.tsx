import {
  Code2,
  Users,
  Briefcase,
  Award,
  User,
  Target,
  Sparkles,
} from "lucide-react";
import { Experience, Project, SkillData, Statistic } from "../types";

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Associate Software Engineer",
    company: "Amnil Technologies Pvt. Ltd",
    duration: "June 2024 - Present",
    location: "Kathmandu, Nepal",
    description:
      "Developing and maintaining full-stack web applications using React and Node.js. Collaborating with cross-functional teams to deliver high-quality, scalable products with focus on performance optimization and user experience.",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "React.js",
      "Redux",
      "RTK Query",
      "React Query",
      "Ant Design",
      "Material UI",
    ],
  },
  {
    id: 2,
    role: "Backend Developer",
    company: "Wisdom Technologies",
    duration: "Oct 2024 - Jan 2025",
    location: "Kathmandu, Nepal",
    description:
      "Developed and maintained RESTful APIs for a hotel accommodation system. Successfully integrated third-party APIs including Twilio, Google OAuth, and Khalti payment gateway. Collaborated with frontend team to ensure seamless integration.",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Twilio"],
  },
];

export const skillsData: SkillData[] = [
  {
    id: 1,
    title: "Backend Development",
    description: "Creating robust server-side applications",
    color: "from-purple-500 to-pink-500",
    icon: "💻",
    skills: [
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "MongoDB",
      "Third Party APIs",
      "GraphQL",
    ],
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    color: "from-cyan-500 to-blue-500",
    icon: "🎨",
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "RTK Query",
      "Ant Design",
      "Material UI",
      "Tanstack Query",
    ],
  },
  {
    id: 3,
    title: "Tools & Technologies",
    description: "Tools and technologies I use daily",
    color: "from-pink-500 to-rose-500",
    icon: "🛠️",
    skills: ["Git", "Github", "Postman", "VS Code", "Linux"],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "HRFolio",
    description:
      "A comprehensive recruitment system designed to streamline the hiring process with predefined stages, enabling recruiters to efficiently manage candidate progression from application to final selection.",
    image: "/image/hrfoolio.png",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
      "Redux",
      "RTK Query",
      "Ant Design",
    ],
    liveUrl: "https://hrfoolio.vercel.app",
    githubUrl: "https://github.com/Rahulad12/HRFolio",
  },
  {
    id: 2,
    title: "Mero Budget",
    description:
      "A finance support platform that helps users effortlessly track income and expenses, providing smart insights through a clean, productive dashboard for real-time financial monitoring.",
    image: "/image/budget.png",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
      "Redux",
    ],
    liveUrl: "https://merobudget.vercel.app",
    githubUrl: "https://github.com/Rahulad12/BudgetFrontend",
  },
  {
    id: 3,
    title: "Accommodation System",
    description:
      "Backend for a hotel accommodation system with third-party API integrations including Twilio, Google OAuth, and Khalti payment gateway, following SRS guidelines.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    id: 4,
    title: "BizNepal",
    description:
      "Business directory with sentiment analysis of reviews. Final year group project where I contributed as frontend developer and helped train the sentiment analysis model.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    technologies: ["React.js", "PostgreSQL", ".NET"],
    githubUrl: "https://github.com/UTSAB-NI/BizNepal",
  },
  {
    id: 5,
    title: "School Website",
    description:
      "Full-stack MERN application suitable for small schools with essential features and admin panel for website management.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    technologies: ["MERN Stack"],
    githubUrl: "https://github.com/Rahulad12/demoschoolwebsite",
  },
];

export const statistics: Statistic[] = [
  {
    id: 1,
    icon: <Code2 size={40} />,
    number: "5+",
    label: "Projects Completed",
    description: "Full-stack applications",
    gradient: "from-purple-600 to-pink-600",
    iconBg: "bg-purple-500/20",
  },
  {
    id: 2,
    icon: <Users size={40} />,
    number: "2+",
    label: "Clients Served",
    description: "Trusted partnerships",
    gradient: "from-cyan-600 to-blue-600",
    iconBg: "bg-cyan-500/20",
  },
  {
    id: 3,
    icon: <Briefcase size={40} />,
    number: "1+",
    label: "Years Experience",
    description: "Professional growth",
    gradient: "from-pink-600 to-rose-600",
    iconBg: "bg-pink-500/20",
  },
  {
    id: 4,
    icon: <Award size={40} />,
    number: "15+",
    label: "Technologies",
    description: "Mastered & deployed",
    gradient: "from-violet-600 to-purple-600",
    iconBg: "bg-violet-500/20",
  },
];

export const coreCompetencies = [
  { skill: "Full-Stack Development", level: 90 },
  { skill: "React & Node.js", level: 85 },
  { skill: "API Development", level: 88 },
  { skill: "Database Design", level: 82 },
  { skill: "UI/UX Implementation", level: 80 },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/rahulad12",
    icon: "github",
    color: "hover:from-purple-600 hover:to-pink-600",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rahul-adhikari-7b2a87214/",
    icon: "linkedin",
    color: "hover:from-cyan-600 hover:to-blue-600",
  },
  {
    name: "Email",
    url: "mailto:adrahul2014@gmail.com",
    icon: "mail",
    color: "hover:from-pink-600 hover:to-rose-600",
  },
];
