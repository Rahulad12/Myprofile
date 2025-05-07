import React from 'react';
import { Card, Image, Tag, Space, Tooltip, Row, Col } from 'antd';
import { Github, Globe } from 'lucide-react';
import { Project } from '../types/index';

interface ProjectProps {
    projects: Project[];
}

const { Meta } = Card;

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
};

export default ProjectCard;
