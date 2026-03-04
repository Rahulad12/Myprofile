'use client';

import { Project } from "../types";
import ProjectCard from "./porject-card";


 const projects: Project[] = [
    {
      title: "Bank Teller Portal (React.js)",
      description:
        "Implemented OIDC-based SSO authentication, managing token lifecycle and session flow using React Query. Designed and delivered a complete Social Security Fund (SSF) module with step-wise validation and data integrity checks. Integrated biometric fingerprint enrollment, verification, digital signature pad, Document Scanning, and photo capture for secure teller authentication. Enhanced security using signature-based response verification to prevent response manipulation.",
      image: "/image/docsaver.png",
      technologies: [
        "ReactJS",
        "React Query",
        "React Router",
        "React Hooks Forms",
        "Zod",
        "Zustand",
        "RSA with SHA-256 (RS256)",
        "Axios",
        "Shadcn UI",
      ],
    },
    {
      title: "Bank Account Opening (React.js)",
      description:
        "Developed a Corporate Account Opening module using React JSON Schema Form (RJSF) to handle complex, schema-driven forms with strong validation. Optimized performance and enhanced user experience across form-heavy flows through UI and state management improvements.",
      image: "/image/docsaver.png",
      technologies: [
        "ReactJS",
        "React Query",
        "React Router",
        "React Hooks Forms",
        "Rjsf",
        "Redux Toolkit",
        "Redux saga",
        "Axios",
        "Ant Design",
      ],
    },
    {
      title: "Document Saver (MERN Stack)",
      description:
        "Developed a secure document storage system where all documents are encrypted before storage and decrypted only upon authorized access using a user-specific access key and JWT-based authentication.",
      image: "/image/document-saver.png",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express js",
        "AES-256-GCM encryption",
        "JWT",
        "Cloudinary",
      ],
      githubUrl: "https://github.com/Rahulad12/documentSaver",
      liveUrl: "https://kagjaat-bora.vercel.app/",
    },
    {
      title: "HRFolio",
      description:
        "The Recruitment System is a web-based application designed to streamline and structure the hiring process by enabling recruiters and administrators to efficiently manage candidate progression through predefined hiring stages. The system enforces a strict sequential workflow from application submission to final selection. ensuring that candidates complete each required stage (assessment, interview) in order before moving forward.",
      image: "/image/hrfoolio.png",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express js",
        "Tailwind CSS",
        "Redux",
        "RTK Query",
        "Ant Design",
      ],
      liveUrl: "https://hrfoolio.vercel.app",
      githubUrl: "https://github.com/Rahulad12/HRFolio",
    },
    {
      title: "Accomodation",
      description:
        "As a backend developer in Wisdom Technologies, I developed the backend for a hotel accommodation system using Node.js. During this experience, I learned how to handle errors, create models, build APIs, integrate third parties API such as Twilio, google OAUTH and write clean, well-structured code while following SRS guidelines.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express js"],
    },
    {
      title: "BiZNepal",
      description:
        "BizNepal is business directory with sentiment analysis of review, this is my final year group project where I work here as frontend developer and contribute in training of model for sentiment analysis, I use react JS as frontend.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      technologies: ["React Js", "PostgresSQL", ".NET"],
      githubUrl: "https://github.com/UTSAB-NI/BizNepal",
    },
  ];


const Projects =() => {
  return (
    <section id="work" className="py-20 bg-card px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects