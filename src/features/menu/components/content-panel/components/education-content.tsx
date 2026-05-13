import { portfolioData } from "@/src/features/shared/lib/portfolio-data";

export function EducationContent() {
  return (
    <div className="space-y-4">
      <div className="text-xs text-secondary mb-4 tracking-wider text-glow-gold">
        {"// CODEX ENTRIES DISCOVERED"}
      </div>

      {portfolioData.education.map((edu) => (
        <div key={edu.title} className="pixel-border border-border bg-background/50 p-4">
          <div className="text-xs text-foreground font-bold">{edu.title}</div>
          <div className="text-xs text-muted-foreground mt-1 font-mono">
            {edu.institution}
          </div>
          <div className="text-xs text-primary mt-2 font-mono">{edu.period}</div>
        </div>
      ))}
    </div>
  );
}
