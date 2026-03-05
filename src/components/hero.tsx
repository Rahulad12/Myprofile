import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-b from-background to-card px-6 py-20 pt-32">
      <div className="max-w-4xl w-full text-center space-y-8 ">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance">
            Rahul Adhikari, <br />
            <span>Full Stack Developer</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance">
            Crafting elegant solutions with React, Node.js, and modern web
            technologies
          </p>
        </div>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
          Specialized in building enterprise-scale applications and banking
          solutions with a focus on performance, security, and user experience.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap pt-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            View My Work
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/resume.pdf"
            download="Rahul-Adhikari-Resume.pdf"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Download Resume
            <Download className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-lg font-medium border border-border hover:bg-secondary transition"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 pt-8">
          <a
            href="https://github.com/rahulad12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-adhikari-7b2a87214/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:adrahul2014@gmail.com"
            className="text-muted-foreground hover:text-primary transition"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
