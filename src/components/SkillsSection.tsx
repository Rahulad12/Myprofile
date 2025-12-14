import React from "react";
import { Code2 } from "lucide-react";
import { skillsData } from "../data/constant";

const SkillsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-slate-900" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg">
            Specialized in modern full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <Code2 size={32} className="text-white" />
              </div>

              <h3
                className={`text-2xl font-bold mb-2 bg-gradient-to-br ${skill.color} bg-clip-text text-transparent`}
              >
                {skill.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6">{skill.description}</p>

              <div className="space-y-3">
                {skill.skills.map((tech, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-slate-700/50 rounded-lg text-gray-300 font-medium text-sm hover:bg-slate-700 transition-colors border border-white/5 hover:border-white/10"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
