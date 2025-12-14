import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "../types";

interface ProjectCardProps {
  projects: Project[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
          </div>

<<<<<<< Updated upstream
const ProjectCard: React.FC<ProjectProps> = ({ projects }) => {
    return (
        <Row gutter={[16, 16]} justify="center">
            {projects.map((project) => (
                <Col md={8} xs={24} lg={8} key={project.title}>
                    <Card
                        hoverable
                        className="fit-content rounded-2xl"
                        cover={
                            <Image
                                src={project.image}
                                alt={project.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                preview={false}
                                loading="lazy"
                            />
                        }
                    >
                        <Meta title={project.title} description={project.description} />
                        <div style={{ marginTop: '1rem' }}>
                            <Space wrap style={{ marginTop: 8 }}>
                                {project.technologies.map((tech) => (
                                    <Tag
                                        color="blue"
                                        key={tech}
                                        style={{
                                            cursor: 'default',
                                            borderRadius: '8px',
                                        }}
                                    >
                                        {tech}
                                    </Tag>
                                ))}
                            </Space>
                        </div>
                        <div className="flex items-center gap-3 mt-4 p-2">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <Tooltip title="Live">
                                    <Globe />
                                </Tooltip>
                            </a>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Tooltip title="GitHub">
                                    <Github />
                                </Tooltip>
                            </a>
                        </div>
                    </Card>
                </Col>
            ))}
        </Row>
    );
=======
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-300 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg font-medium border border-white/10 hover:bg-white/20 transition-all hover:scale-105"
                >
                  <Github size={16} />
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
>>>>>>> Stashed changes
};

export default ProjectCard;
