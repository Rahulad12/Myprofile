import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "../data/constant";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
              Rahul Adhikari
            </h3>
            <p className="text-gray-400">Full-Stack Developer</p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110"
                aria-label={link.name}
              >
                {link.icon === "github" && (
                  <Github size={20} className="text-white" />
                )}
                {link.icon === "linkedin" && (
                  <Linkedin size={20} className="text-white" />
                )}
                {link.icon === "mail" && (
                  <Mail size={20} className="text-white" />
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Rahul Adhikari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
