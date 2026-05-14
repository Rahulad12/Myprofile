import { Project } from "../types";
import ProjectCard from "./porject-card";
import { useInView } from "../hooks/useInView";

const projects: Project[] = [
  {
    title: "Bank Teller Portal (React.js)",
    description:
      "Implemented OIDC-based SSO authentication, managing token lifecycle and session flow using React Query. Designed and delivered a complete Social Security Fund (SSF) module with step-wise validation and data integrity checks. Integrated biometric fingerprint enrollment, digital signature pad, document scanning, and photo capture. Enhanced security using signature-based response verification to prevent response manipulation.",
    image: "/image/docsaver.png",
    technologies: ["ReactJS", "React Query", "React Router", "Zustand", "RSA/SHA-256", "Axios", "Shadcn UI"],
  },
  {
    title: "Bank Account Opening (React.js)",
    description:
      "Developed a Corporate Account Opening module using React JSON Schema Form (RJSF) to handle complex, schema-driven forms with strong validation. Optimized performance and enhanced user experience across form-heavy flows through UI and state management improvements.",
    image: "/image/docsaver.png",
    technologies: ["ReactJS", "React Query", "RJSF", "Redux Toolkit", "Redux Saga", "Axios", "Ant Design"],
  },
  {
    title: "Document Saver (MERN Stack)",
    description:
      "Secure document storage system where all documents are encrypted before storage and decrypted only upon authorized access using a user-specific access key and JWT-based authentication.",
    image: "/image/document-saver.png",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "AES-256-GCM", "JWT", "Cloudinary"],
    githubUrl: "https://github.com/Rahulad12/documentSaver",
    liveUrl: "https://kagjaat-bora.vercel.app/",
  },
  {
    title: "HRFolio",
    description:
      "Recruitment system enabling recruiters to manage candidate progression through predefined hiring stages. Enforces a strict sequential workflow from application submission to final selection, ensuring all stages (assessment, interview) are completed in order.",
    image: "/image/hrfoolio.png",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Redux", "RTK Query", "Ant Design"],
    liveUrl: "https://hrfoolio.vercel.app",
    githubUrl: "https://github.com/Rahulad12/HRFolio",
  },
  {
    title: "Hotel Accommodation API",
    description:
      "Backend for a hotel accommodation system using Node.js. Handles error management, RESTful API design, third-party integrations (Twilio, Google OAuth), and follows SRS guidelines for clean, structured code.",
    image: "",
    technologies: ["Node.js", "Express.js", "MongoDB", "Twilio", "Google OAuth"],
  },
  {
    title: "BiZNepal",
    description:
      "Business directory with sentiment analysis of user reviews — final year group project. Contributed as frontend developer and participated in training the sentiment analysis model.",
    image: "",
    technologies: ["React.js", "PostgreSQL", ".NET"],
    githubUrl: "https://github.com/UTSAB-NI/BizNepal",
  },
];

const Projects = () => {
  const { ref, inView } = useInView();

  return (
    <section id="work" className="py-20 bg-card px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div ref={ref} className={`space-y-3 reveal ${inView ? "in-view" : ""}`}>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground section-heading"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Featured Projects
          </h2>
          <p className="text-muted-foreground pl-5">A selection of work I'm proud of</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`reveal reveal-delay-${Math.min(idx % 4 + 1, 5)} ${inView ? "in-view" : ""}`}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
