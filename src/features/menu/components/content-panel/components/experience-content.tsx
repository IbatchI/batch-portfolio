"use client";

import { useState } from "react";
import { portfolioData, type ExperienceColor } from "@/src/features/shared/lib/portfolio-data";
import { useDictionary } from "@/src/features/shared/components/dictionary-provider";
import type { AchievementLabels } from "@/src/features/shared/types/dictionaries";

function getExpIconClassName(color: ExperienceColor): string {
  const base = "w-10 h-10 flex items-center justify-center text-lg pixel-border shrink-0";
  const colors: Record<ExperienceColor, string> = {
    yellow: "bg-secondary/20 border-secondary/50",
    pink: "bg-pink/20 border-pink/50",
    green: "bg-success/20 border-success/50",
  };
  return `${base} ${colors[color]}`;
}

function getStatusClassName(isActive: boolean): string {
  const base = "text-xs px-2 py-1 shrink-0";
  const active = "bg-secondary/20 text-secondary border border-secondary/50";
  const complete = "bg-success/20 text-success border border-success/50";
  return `${base} ${isActive ? active : complete}`;
}

function getAchievementColor(index: number): string {
  const colors = [
    "bg-secondary/20 text-secondary border-secondary/40",
    "bg-primary/20 text-primary border-primary/40",
    "bg-pink/20 text-pink border-pink/40",
    "bg-success/20 text-success border-success/40",
  ];
  return colors[index % colors.length];
}

function getTechColor(index: number): string {
  const colors = [
    "text-primary",
    "text-secondary",
    "text-pink",
    "text-success",
    "text-foreground",
  ];
  return colors[index % colors.length];
}

const TECH_ICONS: Record<string, string> = {
  React: "gear",
  TypeScript: "scroll",
  "Next.js": "shield",
  "Micro-frontends": "layers",
  "Clean Architecture": "diamond",
  Scrum: "users",
  "Framer Motion": "sparkles",
  i18next: "globe",
  "React Native": "smartphone",
  Turborepo: "package",
  Expo: "rocket",
  Cypress: "check",
  "GitHub Actions": "workflow",
  Jest: "test",
  Zod: "zod",
  "React Hook Form": "rhf",
  "shadcn/ui": "shadcn",
  Docker: "docker",
  SonarQube: "sonar",
};

function TechIcon({ tech }: { tech: string }) {
  const iconType = TECH_ICONS[tech] || "code";
  
  const icons: Record<string, React.ReactNode> = {
    gear: <span className="text-xs">{"<>"}</span>,
    scroll: <span className="text-xs">TS</span>,
    shield: <span className="text-xs">N</span>,
    layers: <span className="text-xs">MF</span>,
    diamond: <span className="text-xs">CA</span>,
    users: <span className="text-xs">AG</span>,
    sparkles: <span className="text-xs">FM</span>,
    globe: <span className="text-xs">i18</span>,
    smartphone: <span className="text-xs">RN</span>,
    package: <span className="text-xs">TR</span>,
    rocket: <span className="text-xs">EX</span>,
    check: <span className="text-xs">CY</span>,
    workflow: <span className="text-xs">GH</span>,
    test: <span className="text-xs">JT</span>,
    zod: <span className="text-xs">ZD</span>,
    rhf: <span className="text-xs">RHF</span>,
    shadcn: <span className="text-xs">SH</span>,
    docker: <span className="text-xs">DO</span>,
    sonar: <span className="text-xs">SQ</span>,
    code: <span className="text-xs">{"{ }"}</span>,
  };
  
  return icons[iconType];
}

interface DifficultyStats {
  complexity: number;
  scale: number;
  duration: number;
}

function DifficultyBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground w-16 shrink-0">{label}</span>
      <div className="flex-1 h-2 bg-background border border-border/50 overflow-hidden">
        <div 
          className={`h-full ${color} transition-all duration-500`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-xs text-muted-foreground w-8 text-right">{value}</span>
    </div>
  );
}

function DifficultyStats({ stats }: { stats: DifficultyStats }) {
  return (
    <div className="pl-4 mb-3">
      <div className="text-xs text-pink/70 mb-2 font-mono">// DIFFICULTY</div>
      <div className="space-y-1.5 max-w-xs">
        <DifficultyBar label="CMPLX" value={stats.complexity} color="bg-destructive" />
        <DifficultyBar label="SCALE" value={stats.scale} color="bg-secondary" />
        <DifficultyBar label="TIME" value={Math.min(stats.duration * 2.5, 100)} color="bg-primary" />
      </div>
      <div className="text-xs text-muted-foreground mt-1.5 font-mono">
        {stats.duration} {stats.duration === 1 ? "mes" : "meses"}
      </div>
    </div>
  );
}

export function ExperienceContent() {
  const dictionary = useDictionary();
  const [expandedJob, setExpandedJob] = useState<number | null>(0);

  const toggleJob = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-secondary">{">"}_</span>
        <span className="text-secondary text-xs uppercase tracking-wider text-glow-gold">
          {dictionary.experience.questLog}
        </span>
      </div>

      {dictionary.experience.jobs.map((job, index) => {
        const isActive = index === 0;
        const status = isActive ? dictionary.experience.statusActive : dictionary.experience.statusComplete;
        const expData = portfolioData.experience[index];
        const isExpanded = expandedJob === index;

        return (
          <div
            key={job.company}
            className="pixel-border border-border bg-background/50 overflow-hidden transition-all duration-300"
          >
            {/* Header - clickeable */}
            <button
              onClick={() => toggleJob(index)}
              className="w-full p-3 flex items-start gap-3 hover:bg-foreground/5 transition-colors text-left"
            >
              <div className={getExpIconClassName(expData.color)}>
                {expData.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-foreground font-bold">{job.company}</div>
                <div className="text-xs text-muted-foreground mt-1 font-mono">{job.role}</div>
                <div className="text-xs text-primary mt-1 font-mono">
                  {expData.xp} · {job.period}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={getStatusClassName(isActive)}>{status}</span>
                <span className={`text-muted-foreground text-xs transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
                  v
                </span>
              </div>
            </button>

            {/* Expanded content - projects, achievements, tech */}
            {isExpanded && expData.projects && (
              <div className="border-t border-border/50 bg-background/30">
                {expData.projects.map((project, pIndex) => {
                  const projectInfo = dictionary.experience.projects[project.name];
                  
                  return (
                    <div key={pIndex} className="p-3 border-b border-border/30 last:border-b-0">
                      {/* Project name & link */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-primary text-xs">{">"}</span>
                        {project.url ? (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-foreground font-bold hover:text-primary transition-colors underline underline-offset-2"
                          >
                            {projectInfo?.name || project.name}
                          </a>
                        ) : (
                          <span className="text-xs text-foreground font-bold">
                            {projectInfo?.name || project.name}
                          </span>
                        )}
                        {project.url && (
                          <span className="text-muted-foreground text-xs">[WARP]</span>
                        )}
                      </div>

                      {/* Project description */}
                      {projectInfo?.description && (
                        <p className="text-xs text-muted-foreground mb-3 pl-4 leading-relaxed">
                          {projectInfo.description}
                        </p>
                      )}

                      {/* Difficulty Stats */}
                      {project.difficulty && (
                        <DifficultyStats stats={project.difficulty} />
                      )}

                      {/* Achievements */}
                      {project.achievements && project.achievements.length > 0 && (
                        <div className="pl-4 mb-3">
                          <div className="text-xs text-primary/70 mb-2 font-mono">
                            {dictionary.experience.achievementsUnlocked}
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {project.achievements.map((achievement, aIndex) => {
                              const achievementKey = achievement as keyof AchievementLabels;
                              const label = dictionary.experience.achievements[achievementKey] || achievement;
                              return (
                                <span
                                  key={aIndex}
                                  className={`text-xs px-2 py-0.5 border ${getAchievementColor(aIndex)}`}
                                >
                                  {"["} {label} {"]"}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Tech Stack as Loot */}
                      {project.tech && project.tech.length > 0 && (
                        <div className="pl-4">
                          <div className="text-xs text-secondary/70 mb-2 font-mono">
                            {dictionary.experience.lootObtained}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, tIndex) => (
                              <div
                                key={tIndex}
                                className="flex items-center gap-1.5 text-xs bg-background/50 px-2 py-1 border border-border/50"
                              >
                                <span className={`${getTechColor(tIndex)} font-mono`}>
                                  <TechIcon tech={tech} />
                                </span>
                                <span className="text-foreground/80">{tech}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
