import React from "react";
import { User, Target, Sparkles, ExternalLink } from "lucide-react";
import { coreCompetencies } from "../data/constant";

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-slate-900" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-xl">
                  <User size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                A dedicated full-stack developer with expertise in JavaScript,
                React.js, and Node.js. I specialize in creating scalable,
                high-performance web applications with intuitive interfaces and
                seamless third-party integrations.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-3 rounded-xl">
                  <Target size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  What I Offer
                </h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Full-Stack Web Development",
                  "SEO-Friendly Websites",
                  "Responsive & Mobile Design",
                  "Performance Optimization",
                  "API Integration",
                  "Scalable Architecture",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <div className="bg-gradient-to-br from-pink-600 to-rose-600 p-2 rounded-lg">
                <Sparkles size={24} className="text-white" />
              </div>
              Core Competencies
            </h3>
            <div className="space-y-6">
              {coreCompetencies.map((item: any, index: any) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">
                      {item.skill}
                    </span>
                    <span className="text-purple-400 font-semibold">
                      {item.level}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 h-2.5 rounded-full transition-all duration-1000"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="/resume.pdf"
                download="Rahul_Adhikari_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <ExternalLink size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
