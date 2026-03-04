interface SkillBadgeProps {
  name: string;
  level?: 'expert' | 'advanced' | 'intermediate';
}

const  SkillBadge =({ name, level = 'advanced' }: SkillBadgeProps) =>{
  const levelStyles = {
    expert: 'bg-primary/20 text-primary border-primary/30',
    advanced: 'bg-accent/20 text-accent border-accent/30',
    intermediate: 'bg-muted text-muted-foreground border-muted',
  };

  return (
    <span
      className={`inline-block px-4 py-2 rounded-full border font-medium transition hover:scale-105 ${
        levelStyles[level]
      }`}
    >
      {name}
    </span>
  );
}

export default SkillBadge
