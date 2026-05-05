"use client";

import { portfolioData } from "@/src/config/portfolio-data";

export type MenuSection = "about" | "experience" | "skills" | "education" | "contact";

interface MenuOption {
  id: MenuSection;
  label: string;
  gameLabel: string;
}

export const menuOptions: MenuOption[] = [
  { id: "about", label: "Sobre mi", gameLabel: "NEW GAME" },
  { id: "experience", label: "Experiencia", gameLabel: "LOAD GAME" },
  { id: "skills", label: "Skills", gameLabel: "INVENTORY" },
  { id: "education", label: "Educacion", gameLabel: "CODEX" },
  { id: "contact", label: "Transmision", gameLabel: "CONTACT" },
];

interface MainMenuProps {
  activeSection: MenuSection;
  onSectionChange: (section: MenuSection) => void;
}

export function MainMenu({ activeSection, onSectionChange }: MainMenuProps) {
  return (
    <div className="pixel-border border-border bg-card p-4 md:p-6 h-full">
      <div className="text-xs text-muted-foreground mb-4 tracking-wider">
        {"// SELECT"}
      </div>

      <nav className="space-y-2">
        {menuOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onSectionChange(option.id)}
            className={`w-full text-left px-3 py-3 text-xs md:text-sm transition-all ${
              activeSection === option.id
                ? "bg-success/20 text-success text-glow-green pixel-border border-success/50"
                : "text-foreground hover:text-primary hover:bg-muted/30"
            }`}
          >
            <span className="mr-2">{activeSection === option.id ? "►" : " "}</span>
            <span className="uppercase tracking-wide">{option.gameLabel}</span>
            <span className="text-muted-foreground ml-2">— {option.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

export function ContentPanel({ activeSection }: { activeSection: MenuSection }) {
  return (
    <div className="pixel-border border-border bg-card p-4 md:p-6 h-full overflow-auto">
      <div className="text-xs text-muted-foreground mb-4 tracking-wider">
        {"// DESCRIPCION"}
      </div>

      {activeSection === "about" && <AboutContent />}
      {activeSection === "experience" && <ExperienceContent />}
      {activeSection === "skills" && <SkillsContent />}
      {activeSection === "education" && <EducationContent />}
      {activeSection === "contact" && <ContactContent />}
    </div>
  );
}

function AboutContent() {
  return (
    <div className="space-y-4">
      <p className="text-sm md:text-base leading-relaxed font-mono text-foreground">
        {portfolioData.about.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        {portfolioData.about.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs bg-muted text-foreground pixel-border border-muted-foreground/30"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceContent() {
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

function SkillsContent() {
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

function SkillBar({
  name,
  level,
  color,
}: {
  name: string;
  level: number;
  color: "success" | "primary";
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-foreground w-24 font-mono">{name}</span>
      <div className="flex-1 h-3 bg-muted pixel-border border-muted-foreground/20 overflow-hidden">
        <div
          className={`h-full ${color === "success" ? "bg-success" : "bg-primary"}`}
          style={{ width: `${level}%` }}
        />
      </div>
      <span className="text-xs text-muted-foreground w-8 text-right font-mono">
        {level}
      </span>
    </div>
  );
}

function EducationContent() {
  return (
    <div className="space-y-4">
      <div className="text-xs text-secondary mb-4 tracking-wider text-glow-gold">
        {"// CODEX ENTRIES DISCOVERED"}
      </div>

      {portfolioData.education.map((edu, index) => (
        <div key={index} className="pixel-border border-border bg-background/50 p-4">
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

function ContactContent() {
  return (
    <div className="font-mono text-sm space-y-3">
      <div className="text-primary text-glow-cyan">
        $ contact --init lucas.hernandez
      </div>
      <div className="text-muted-foreground">► signal established...</div>

      <div className="space-y-2 mt-4">
        <div>
          <span className="text-secondary">📧 mail: </span>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="text-foreground hover:text-primary transition-colors"
          >
            {portfolioData.contact.email}
          </a>
        </div>
        <div>
          <span className="text-secondary">📞 tel: </span>
          <a
            href={`tel:${portfolioData.contact.phone.replace(/\s/g, "")}`}
            className="text-foreground hover:text-primary transition-colors"
          >
            {portfolioData.contact.phone}
          </a>
        </div>
        <div>
          <span className="text-secondary">🔗 web: </span>
          <a
            href={`https://www.${portfolioData.contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            {portfolioData.contact.linkedin}
          </a>
        </div>
      </div>
    </div>
  );
}
