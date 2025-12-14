import React from "react";
import { Github, Linkedin, Mail, ChevronDown, Sparkles } from "lucide-react";
import { socialLinks } from "../data/constant";

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-slate-900 to-cyan-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Profile Photo */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
              <img
                src="/image/profile.png"
                alt="Rahul Adhikari"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement!.style.background =
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                }}
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 w-10 h-10 rounded-full border-4 border-slate-900 flex items-center justify-center">
              <Sparkles size={16} className="text-white" />
            </div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradient">
          Rahul Adhikari
        </h1>
        <p className="text-2xl md:text-3xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 font-semibold">
          Full-Stack Developer
        </p>
        <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
          Crafting elegant digital experiences with modern technologies.
          Transforming ideas into scalable, high-performance applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center mb-12 flex-wrap">
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">View My Work</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full font-semibold text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center">
          {socialLinks.map((link: any) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 bg-white/10 backdrop-blur-sm rounded-full ${link.color} transition-all duration-300 hover:scale-110 border border-white/10`}
              aria-label={link.name}
            >
              {link.icon === "github" && (
                <Github size={24} className="text-white" />
              )}
              {link.icon === "linkedin" && (
                <Linkedin size={24} className="text-white" />
              )}
              {link.icon === "mail" && (
                <Mail size={24} className="text-white" />
              )}
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown size={32} className="text-purple-400" />
      </div>
    </section>
  );
};

export default HeroSection;
