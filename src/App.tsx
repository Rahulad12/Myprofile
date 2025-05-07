import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProjectCard from "./components/ProjectCard";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Plus,
  Minus,
  User,
  Heart,
  Target,
  Book,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import {  Space } from "antd";

// Define types for the data structures
type SkillCategory = "frontend" | "backend" | "tools";
type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
};

type SkillData = {
  title: string;
  description: string;
  skills: string[];
};

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
};

// Main App Component
function App() {
  const [openSkills, setOpenSkills] = useState<Record<SkillCategory, boolean>>({
    backend: true,
    frontend: false,
    tools: false,
  });
  const [loading, setLoading] = useState(false);
  const toggleSkill = (skill: SkillCategory) => {
    setOpenSkills((prev) => ({
      ...prev,
      [skill]: !prev[skill],
    }));
  };

  const [contact, setContact] = useState({
    email: "",
    message: "",
  });

  const handelChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const handleContactSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        contact,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        console.log("Success!", response.status, response.text);
        toast.success("Email sent successfully!");
        setContact({ email: "", message: "" });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Failed to send email.");
        setLoading(false);
      });
  };

  // Add this type definition for experience data

  // Add this array of experience data
  const experiences: Experience[] = [
    {
      role: "Backend Developer",
      company: "Wisdom Technologies",
      duration: "Oct 2024 - Jan 2025",
      description:
        "Developed and maintained RESTful APIs for a hotel accommodation system. Integrated third-party APIs like Twilio and Google OAuth and also successfully integrate Khalti payment gateway. Collaborated with the frontend team to ensure seamless integration.",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Twilio"],
    },
  ];
  const skillsData: Record<SkillCategory, SkillData> = {
    backend: {
      title: "Backend Development",
      description: "Creating robust server-side applications",
      skills: [
        "Node.js",
        "PostgreSQL",
        "REST APIs",
        "MongoDB",
        "Third Parties APIs",
      ],
    },
    frontend: {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces",
      skills: ["React", "TypeScript", "Tailwind CSS", "Redux","RTK Query","Ant Design"],
    },
    tools: {
      title: "Tools & Technologies",
      description: "Tools and technologies I use daily",
      skills: ["Git", "Github", "Postman", "VS Code", "Linux"],
    },
  };

  const projects: Project[] = [
    {
      title: "HRFolio",
      description: "The Recruitment System is a web-based application designed to streamline and structure the hiring process by enabling recruiters and administrators to efficiently manage candidate progression through predefined hiring stages. The system enforces a strict sequential workflow from application submission to final selection. ensuring that candidates complete each required stage (assessment, interview) in order before moving forward.",
      image: "/image/hrfoolio.png",
      technologies: ["React", "Node.js", "MongoDB", "Express js", "Tailwind CSS", "Redux", "RTK Query", "Ant Design"],
      liveUrl: "https://hrfoolio.vercel.app",
      githubUrl: "https://github.com/Rahulad12/HRFolio",
    },
    {
      title: "mero budget",
      description:
        "I developed a finance support platform that helps users effortlessly track their income and expenses, providing smart insights through a clean, productive dashboard. Forget the hassle of managing your finances on pen and paper or scribbling notes—just click the link and start monitoring your monthly income vs. expenses in real time.",
      image:
        "/image/budget.png",
      technologies: ["React", "Node.js", "MongoDB", "Express js", "Tailwind CSS", "Redux"],
      liveUrl: "https://merobudget.vercel.app",
      githubUrl: "#",

    },
    {
      title: "Accomodation",
      description:
        "As a backend intern, I developed the backend for a hotel accommodation system using Node.js. During this experience, I learned how to handle errors, create models, build APIs, integrate third parties API such as Twilio, google OAUTH and write clean, well-structured code while following SRS guidelines.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "BiZNepal",
      description:
        "BizNepal is business directory with sentiment analysis of review, this is my final year group project where I work here as frontend developer and contribute in training of model for sentiment analysis, I use react JS as frontend.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      technologies: ["React Js", "PostgresSQL", ".NET"],
      liveUrl: "#",
      githubUrl: "https://github.com/UTSAB-NI/BizNepal",
    },
    {
      title: "School Website",
      description:
        "Using reacts as frontend and node as backend and Mongo Db as database. I had built a website, that will suitable for small school. This website has basic function that every school Needed. Admin Feature are also available to operate this website.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      technologies: ["MERN Stack"],
      liveUrl: "#",
      githubUrl: "https://github.com/Rahulad12/demoschoolwebsite",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-blue-900 to-gray-900 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Rahul Adhikari
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Transforming ideas into elegant digital solutions
          </p>
          <div className="flex gap-6 justify-center mb-12">
            <a
              href="https://github.com/rahulad12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-adhikari-7b2a87214/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:adrahul2014@gmail.com"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>
      {/* About Me Section */}
      <section className="py-20 px-4 bg-white" id="about">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <User size={24} className="shrink-0" />,
                title: "Who I Am",
                description:
                  "A passionate full-stack developer with 1 year of experience in React.js and Node.js and 6 months of hands-on experience as a Node.js Developer. I specialize in building scalable, high-performance web applications, integrating third-party APIs, and implementing secure payment systems.",
              },
              {
                icon: <Heart size={24} className="shrink-0" />,
                title: "What I Love",
                description:
                  "I'm deeply passionate about creating intuitive user experiences and robust backend systems. My enthusiasm lies in tackling challenging problems and finding innovative solutions that push the boundaries of what's possible in web development.",
              },
              {
                icon: <Target size={24} className="shrink-0" />,
                title: "My Approach",
                description:
                  "I believe in writing clean, maintainable code and following best practices. My approach combines technical expertise with creative problem-solving, ensuring that every project I work on is built with scalability and performance in mind.",
              },
              {
                icon: <Book size={24} className="shrink-0" />,
                title: "Continuous Learning",
                description:
                  "The tech world never stands still, and neither do I. I'm committed to continuous learning and staying up-to-date with the latest technologies and best practices. I believe in sharing knowledge and contributing to the developer community.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3 text-blue-600 mb-4">
                  {item.icon}
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed ml-9">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Resume Download Section */}
      <section className="py-20 px-4 bg-white" id="resume">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Download My Resume</h2>
          <p className="text-gray-600 mb-6">
            Interested in my work? Download my resume to learn more about my
            skills and experience.
          </p>
          <a
            href="/resume.pdf" // Change this to your actual resume link
            download="Rahul_Adhikari_Resume.pdf"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      </section>
      {/* experience section */}
      <section className="py-20 px-4 bg-gray-50" id="experience">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          </div>
          <div className="space-y-8 grid grid-cols-1 md:grid-cols-1 gap-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {exp.role}
                    </h3>
                    <p className="text-gray-600 text-sm">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500">{exp.duration}</span>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      ;{/* Skills Section */}
      <section className="py-20 px-4 bg-gray-50" id="skills">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Technical Expertise
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Specialized in full-stack development with a focus on scalable and
            maintainable solutions
          </p>
          <div className="space-y-6">
            {(Object.keys(skillsData) as SkillCategory[]).map((category) => (
              <div
                key={category}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => toggleSkill(category)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-gray-50 to-white hover:bg-gray-50 transition-colors"
                  aria-expanded={openSkills[category]}
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {skillsData[category].title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {skillsData[category].description}
                    </p>
                  </div>
                  {openSkills[category] ? (
                    <Minus size={24} className="text-gray-600" />
                  ) : (
                    <Plus size={24} className="text-gray-600" />
                  )}
                </button>
                {openSkills[category] && (
                  <div className="px-6 py-4 bg-white">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {skillsData[category].skills.map((skill) => (
                        <div
                          key={skill}
                          className="px-4 py-2 bg-gray-50 rounded-lg text-gray-700 font-medium text-sm hover:bg-gray-100 transition-colors"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section className="py-20 px-4 bg-white" id="projects">
        <div className=" w-[90%] mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Showcasing some of my recent work and technical achievements
          </p>
          <Space wrap style={{ marginTop: 8 }} size="large">
            <ProjectCard projects={projects} />
          </Space>
        </div>

      </section>
      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-50" id="contact">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Get in Touch</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Interested in collaboration? Let's discuss your project
          </p>
          <form onSubmit={handleContactSubmit} className="max-w-lg mx-auto">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={contact.email}
                onChange={handelChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={contact.message}
                onChange={handelChange}
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/rahulad12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-adhikari-7b2a87214/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:adrahul2014@gmail.com"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} Rahul Adhikari. All rights reserved.
          </p>
        </div>
      </footer>
      <ToastContainer />

    </div>
  );
}

export default App;
