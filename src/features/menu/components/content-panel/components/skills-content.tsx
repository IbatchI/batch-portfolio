import { portfolioData } from "@/src/features/shared/lib/portfolio-data";
import { useDictionary } from "@/src/features/shared/components/dictionary-provider";
import { SkillBar } from "./skill-bar";

export function SkillsContent() {
  const dictionary = useDictionary();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-primary text-xs uppercase tracking-wider">
          {dictionary.skills.title}
        </span>
        <span className="text-xs text-muted-foreground">
          {dictionary.skills.level}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="text-xs text-secondary mb-3 tracking-wider">
            {dictionary.skills.frontend}
          </div>
          <div className="space-y-3">
            {portfolioData.skills.frontend.map((skill) => (
              <SkillBar key={skill.name} {...skill} color="success" />
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs text-secondary mb-3 tracking-wider">
            {dictionary.skills.toolsAndBackend}
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
