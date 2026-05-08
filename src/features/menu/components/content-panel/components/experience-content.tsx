import { portfolioData } from "@/src/features/shared/lib/portfolio-data";

export function ExperienceContent() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-secondary">📁</span>
        <span className="text-secondary text-xs uppercase tracking-wider text-glow-gold">
          QUEST LOG — MISIONES
        </span>
      </div>

      {portfolioData.experience.map((exp, index) => (
        <div
          key={index}
          className="pixel-border border-border bg-background/50 p-4 flex items-start gap-4"
        >
          <div
            className={`w-10 h-10 flex items-center justify-center text-lg pixel-border ${
              exp.color === "yellow"
                ? "bg-secondary/20 border-secondary/50"
                : exp.color === "pink"
                ? "bg-pink/20 border-pink/50"
                : "bg-success/20 border-success/50"
            }`}
          >
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
          <span
            className={`text-xs px-2 py-1 ${
              exp.status === "ACTIVA"
                ? "bg-secondary/20 text-secondary border border-secondary/50"
                : "bg-success/20 text-success border border-success/50"
            }`}
          >
            {exp.status}
          </span>
        </div>
      ))}
    </div>
  );
}
