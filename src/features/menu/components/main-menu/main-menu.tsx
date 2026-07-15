"use client";

import { useDictionary } from "@/src/features/shared/components/dictionary-provider";

export type MenuSection = "about" | "experience" | "skills" | "education" | "contact";

const ACTIVE_INDICATOR = "►";
const INACTIVE_INDICATOR = " ";

const GAME_LABELS: Record<MenuSection, string> = {
  about: "NEW GAME",
  experience: "QUEST LOG",
  skills: "INVENTORY",
  education: "CODEX",
  contact: "CONTACT",
};

function getMenuItemClassName(isActive: boolean): string {
  const base = "w-full text-left px-3 py-3 text-xs md:text-sm transition-all";
  const active = "bg-success/20 text-success text-glow-green pixel-border border-success/50";
  const inactive = "text-foreground hover:text-primary hover:bg-muted/30";
  return `${base} ${isActive ? active : inactive}`;
}

interface MainMenuProps {
  activeSection: MenuSection;
  onSectionChange: (section: MenuSection) => void;
}

export function MainMenu({ activeSection, onSectionChange }: MainMenuProps) {
  const dictionary = useDictionary();
  const sections: MenuSection[] = ["about", "experience", "skills", "education", "contact"];

  return (
    <div className="pixel-border border-border bg-card p-4 md:p-6 h-full">
      <div className="text-xs text-muted-foreground mb-4 tracking-wider">
        {dictionary.menu.select}
      </div>

      <nav className="space-y-2">
        {sections.map((section) => {
          const isActive = activeSection === section;
          return (
            <button
              key={section}
              onClick={() => onSectionChange(section)}
              className={getMenuItemClassName(isActive)}
            >
              <span className="mr-2">{isActive ? ACTIVE_INDICATOR : INACTIVE_INDICATOR}</span>
              <span className="uppercase tracking-wide">{GAME_LABELS[section]}</span>
              <span className="text-muted-foreground ml-2">— {dictionary.menu[section]}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
