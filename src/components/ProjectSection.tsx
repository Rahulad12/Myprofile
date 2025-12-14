import React from "react";
import { Space } from "antd";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/constant";

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-slate-950" id="projects">
      <div className="w-[90%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Showcasing innovation and technical excellence
          </p>
        </div>

        <Space wrap style={{ marginTop: 8 }} size="large">
          <ProjectCard projects={projects} />
        </Space>
      </div>
    </section>
  );
};

export default ProjectsSection;
