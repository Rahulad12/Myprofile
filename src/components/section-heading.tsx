interface SectionHeadingProps {
  index: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <span className="label-eyebrow">{index}</span>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">{title}</h2>
      <div className="rule" />
      {subtitle && <p className="text-sm text-muted-foreground pt-1">{subtitle}</p>}
    </div>
  );
}
