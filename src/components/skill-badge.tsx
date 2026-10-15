interface SkillBadgeProps {
  name: string;
  level?: "expert" | "advanced" | "intermediate";
}

const levelStyles = {
  expert: "bg-primary text-primary-foreground border-primary hover:bg-primary/90",
  advanced: "bg-secondary text-secondary-foreground border-primary/20 hover:bg-secondary/70",
  intermediate: "bg-muted text-muted-foreground border-border hover:bg-muted/70",
};

const SkillBadge = ({ name, level = "advanced" }: SkillBadgeProps) => (
  <span
    className={`inline-block px-3 py-1.5 rounded-md border text-xs font-semibold transition-all duration-200 cursor-default tracking-wide ${levelStyles[level]}`}
  >
    {name}
  </span>
);

export default SkillBadge;
