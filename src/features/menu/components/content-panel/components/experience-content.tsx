import { portfolioData } from "@/src/features/shared/lib/portfolio-data";
import { useDictionary } from "@/src/features/shared/components/dictionary-provider";

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

function getStatusClassName(isActive: boolean): string {
  const base = "text-xs px-2 py-1";
  const active = "bg-secondary/20 text-secondary border border-secondary/50";
  const complete = "bg-success/20 text-success border border-success/50";
  return `${base} ${isActive ? active : complete}`;
}

const ICONS = ["⚡", "📦", "💰"];
const COLORS: ExpColor[] = ["yellow", "pink", "green"];

export function ExperienceContent() {
  const dictionary = useDictionary();

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-secondary">📁</span>
        <span className="text-secondary text-xs uppercase tracking-wider text-glow-gold">
          {dictionary.experience.questLog}
        </span>
      </div>

      {dictionary.experience.jobs.map((job, index) => {
        const isActive = index === 0;
        const status = isActive ? dictionary.experience.statusActive : dictionary.experience.statusComplete;

        return (
          <div
            key={job.company}
            className="pixel-border border-border bg-background/50 p-4 flex items-start gap-4"
          >
            <div className={getExpIconClassName(COLORS[index])}>
              {ICONS[index]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-foreground font-bold">{job.company}</div>
              <div className="text-xs text-muted-foreground mt-1 font-mono">{job.role}</div>
              <div className="text-xs text-primary mt-2 font-mono">
                {portfolioData.experience[index].xp} · {job.period}
              </div>
            </div>
            <span className={getStatusClassName(isActive)}>{status}</span>
          </div>
        );
      })}
    </div>
  );
}
