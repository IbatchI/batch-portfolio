"use client";

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

const ACTIVE_INDICATOR = "►";
const INACTIVE_INDICATOR = " ";

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
  return (
    <div className="pixel-border border-border bg-card p-4 md:p-6 h-full">
      <div className="text-xs text-muted-foreground mb-4 tracking-wider">
        {"// SELECT"}
      </div>

      <nav className="space-y-2">
        {menuOptions.map((option) => {
          const isActive = activeSection === option.id;
          return (
            <button
              key={option.id}
              onClick={() => onSectionChange(option.id)}
              className={getMenuItemClassName(isActive)}
            >
              <span className="mr-2">{isActive ? ACTIVE_INDICATOR : INACTIVE_INDICATOR}</span>
              <span className="uppercase tracking-wide">{option.gameLabel}</span>
              <span className="text-muted-foreground ml-2">— {option.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
