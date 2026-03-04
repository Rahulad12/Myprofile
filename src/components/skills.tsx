'use client';

import SkillBadge from "./skill-badge";


const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 'expert' as const },
      { name: 'Next.js', level: 'expert' as const },
      { name: 'TypeScript', level: 'expert' as const },
      { name: 'Tailwind CSS', level: 'advanced' as const },
      { name: 'Redux', level: 'advanced' as const },
      { name: 'React Query', level: 'advanced' as const },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 'expert' as const },
      { name: 'Nest.js', level: 'advanced' as const },
      { name: 'Express.js', level: 'expert' as const },
      { name: 'REST APIs', level: 'expert' as const },
      { name: 'Microservices', level: 'advanced' as const },
      { name: 'Socket.io', level: 'advanced' as const },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', level: 'expert' as const },
      { name: 'PostgreSQL', level: 'advanced' as const },
      { name: 'Firebase', level: 'advanced' as const },
      { name: 'Database Design', level: 'advanced' as const },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git', level: 'expert' as const },
      { name: 'Docker', level: 'advanced' as const },
      { name: 'Postman', level: 'advanced' as const },
      { name: 'CI/CD', level: 'advanced' as const },
      { name: 'NPM/Yarn', level: 'expert' as const },
      { name: 'Jenkins', level: 'intermediate' as const },
      { name: 'Render', level: 'intermediate' as const },
      { name: 'Vercel', level: 'intermediate' as const },
    ],
  },
];

const Skills =() => {
  return (
    <section id="skills" className="py-20 bg-background px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Technical Skills</h2>
          <div className="h-1 w-20 bg-primary rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills