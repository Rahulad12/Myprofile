interface SkillBadgeProps {
  name: string;
  level?: "expert" | "advanced" | "intermediate";
}

const levelStyles = {
  expert: "bg-blue-500/15 text-blue-300 border-blue-500/30 hover:bg-blue-500/25",
  advanced: "bg-amber-500/10 text-amber-300 border-amber-500/25 hover:bg-amber-500/20",
  intermediate: "bg-muted/20 text-muted-foreground border-border/60 hover:bg-muted/30",
};

const SkillBadge = ({ name, level = "advanced" }: SkillBadgeProps) => (
  <span
    className={`inline-block px-3 py-1.5 rounded-md border text-xs font-semibold transition-all duration-200 cursor-default tracking-wide ${levelStyles[level]}`}
  >
    {name}
  </span>
);

export default SkillBadge;
