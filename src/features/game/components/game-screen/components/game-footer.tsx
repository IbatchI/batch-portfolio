import { portfolioData } from "@/src/features/shared/lib/portfolio-data";
import { ACLogo } from "./ac-logo";

export function GameFooter() {
  return (
    <footer className="mt-8 pt-4 border-t border-border flex items-center justify-between">
      <div className="text-xs text-muted-foreground font-mono">
        LUCAS.EXE {portfolioData.version} · {new Date().getFullYear()}
      </div>
      <div
        className="cursor-help"
        title="Nothing is true, everything is permitted"
      >
        <ACLogo />
      </div>
      <div
        className="text-xs text-muted-foreground cursor-help"
        title="I am the night"
      >
        🦇
      </div>
    </footer>
  );
}
