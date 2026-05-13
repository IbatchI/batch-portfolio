import { portfolioData } from "@/src/features/shared/lib/portfolio-data";

type ExpColor = "yellow" | "pink" | "green";

function getExpIconClassName(color: ExpColor): string {
  const base = "w-10 h-10 flex items-center justify-center text-lg pixel-border";
  const colors: Record<ExpColor, string> = {
    yellow: "bg-secondary/20 border-secondary/50",
    pink: "bg-pink/20 border-pink/50",
    green: "bg-success/20 border-success/50",
  };
  return `${base} ${colors[color]}`;
}

function getStatusClassName(status: "ACTIVA" | "COMPLETA"): string {
  const base = "text-xs px-2 py-1";
  const active = "bg-secondary/20 text-secondary border border-secondary/50";
  const complete = "bg-success/20 text-success border border-success/50";
  return `${base} ${status === "ACTIVA" ? active : complete}`;
}

export function ExperienceContent() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-secondary">📁</span>
        <span className="text-secondary text-xs uppercase tracking-wider text-glow-gold">
          QUEST LOG — MISIONES
        </span>
      </div>

      {portfolioData.experience.map((exp) => (
        <div
          key={exp.company}
          className="pixel-border border-border bg-background/50 p-4 flex items-start gap-4"
        >
          <div className={getExpIconClassName(exp.color as ExpColor)}>
            {exp.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs text-foreground font-bold">{exp.company}</div>
            <div className="text-xs text-muted-foreground mt-1 font-mono">
              {exp.role}
            </div>
            <div className="text-xs text-primary mt-2 font-mono">
              {exp.xp} · {exp.period}
            </div>
          </div>
          <span className={getStatusClassName(exp.status)}>
            {exp.status}
          </span>
        </div>
      ))}
    </div>
  );
}
