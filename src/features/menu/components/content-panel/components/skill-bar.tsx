interface SkillBarProps {
  name: string;
  level: number;
  color: "success" | "primary";
}

function getBarColorClassName(color: "success" | "primary"): string {
  return color === "success" ? "bg-success" : "bg-primary";
}

export function SkillBar({ name, level, color }: SkillBarProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-foreground w-24 font-mono">{name}</span>
      <div className="flex-1 h-3 bg-muted pixel-border border-muted-foreground/20 overflow-hidden">
        <div
          className={`h-full ${getBarColorClassName(color)}`}
          style={{ width: `${level}%` }}
        />
      </div>
      <span className="text-xs text-muted-foreground w-8 text-right font-mono">
        {level}
      </span>
    </div>
  );
}
