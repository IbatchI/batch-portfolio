import { portfolioData } from "@/src/features/shared/lib/portfolio-data";
import { SkillBar } from "./skill-bar";

export function SkillsContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-primary text-xs uppercase tracking-wider">
          × INVENTORY — LUCAS.EXE
        </span>
        <span className="text-xs text-muted-foreground">
          LVL 6 · FRONTEND KNIGHT
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Frontend Skills */}
        <div>
          <div className="text-xs text-secondary mb-3 tracking-wider">
            {"// FRONTEND"}
          </div>
          <div className="space-y-3">
            {portfolioData.skills.frontend.map((skill) => (
              <SkillBar key={skill.name} {...skill} color="success" />
            ))}
          </div>
        </div>

        {/* Tools & Backend */}
        <div>
          <div className="text-xs text-secondary mb-3 tracking-wider">
            {"// TOOLS & BACKEND"}
          </div>
          <div className="space-y-3">
            {portfolioData.skills.toolsAndBackend.map((skill) => (
              <SkillBar key={skill.name} {...skill} color="primary" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
