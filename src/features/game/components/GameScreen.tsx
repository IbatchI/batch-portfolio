"use client";

import { useState, useEffect, useCallback } from "react";
import { MainMenu, ContentPanel } from "@/src/features/menu";
import type { MenuSection } from "@/src/features/menu";
import { portfolioData } from "@/src/config/portfolio-data";

interface GameScreenProps {
  onBack: () => void;
}

function EasterEggButtons() {
  return (
    <div className="mt-6 pt-4 border-t border-border">
      <div className="text-xs text-muted-foreground mb-3 tracking-wider">
        EASTER EGGS ESCONDIDOS
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="px-2 py-1 text-[10px] bg-muted/50 text-muted-foreground pixel-border border-muted-foreground/20">
          ✓ Ezio en skyline
        </span>
        <span
          className="px-2 py-1 text-[10px] bg-muted/50 text-muted-foreground pixel-border border-muted-foreground/20 cursor-help"
          title="↑↑↓↓←→←→BA"
        >
          ↑ Konami code
        </span>
        <span
          className="px-2 py-1 text-[10px] bg-muted/50 text-muted-foreground pixel-border border-muted-foreground/20 cursor-help"
          title="I am the night"
        >
          🦇 &quot;I am the night&quot; hover
        </span>
        <span className="px-2 py-1 text-[10px] bg-muted/50 text-muted-foreground pixel-border border-muted-foreground/20">
          ⚔ Lightsaber cursor
        </span>
        <span className="px-2 py-1 text-[10px] bg-muted/50 text-muted-foreground pixel-border border-muted-foreground/20">
          △ AC logo en footer
        </span>
      </div>
    </div>
  );
}

function ACLogo() {
  return (
    <svg
      width="20"
      height="24"
      viewBox="0 0 20 24"
      className="fill-muted-foreground/30"
      aria-label="Assassin's Creed logo"
    >
      <path d="M10 0 L12 6 L20 20 L16 20 L14 16 L10 10 L6 16 L4 20 L0 20 L8 6 Z" />
      <path d="M10 14 L8 18 L12 18 Z" />
    </svg>
  );
}

export function GameScreen({ onBack }: GameScreenProps) {
  const [activeSection, setActiveSection] = useState<MenuSection>("about");
  const [konamiProgress, setKonamiProgress] = useState(0);
  const [konamiActivated, setKonamiActivated] = useState(false);

  const handleKonami = useCallback(
    (e: KeyboardEvent) => {
      const expected = portfolioData.easterEggs.konamiCode[konamiProgress];
      if (e.key === expected) {
        const newProgress = konamiProgress + 1;
        setKonamiProgress(newProgress);

        if (newProgress === portfolioData.easterEggs.konamiCode.length) {
          setKonamiActivated(true);
          setTimeout(() => setKonamiActivated(false), 3000);
          setKonamiProgress(0);
        }
      } else {
        setKonamiProgress(0);
      }
    },
    [konamiProgress]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKonami);
    return () => window.removeEventListener("keydown", handleKonami);
  }, [handleKonami]);

  return (
    <div className="min-h-screen bg-background scanlines lightsaber-cursor">
      {/* Konami Code Easter Egg Modal */}
      {konamiActivated && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90">
          <div className="text-center pixel-border border-secondary bg-card p-8 animate-pulse">
            <div className="text-2xl text-secondary text-glow-gold mb-4">
              KONAMI CODE ACTIVATED!
            </div>
            <div className="text-sm text-foreground font-mono">
              +30 LIVES · GOD MODE ENABLED
            </div>
            <div className="text-xs text-muted-foreground mt-4">
              You found a secret! 🎮
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto p-4 md:p-6 lg:p-8 max-w-6xl">
        {/* Back button */}
        <button
          onClick={onBack}
          className="text-xs text-muted-foreground hover:text-primary transition-colors mb-4"
        >
          ← BACK TO TITLE
        </button>

        {/* Main grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-4 md:gap-6">
          {/* Left: Menu */}
          <MainMenu
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />

          {/* Right: Content */}
          <ContentPanel activeSection={activeSection} />
        </div>

        {/* Easter eggs section */}
        <EasterEggButtons />

        {/* Footer with AC logo */}
        <footer className="mt-8 pt-4 border-t border-border flex items-center justify-between">
          <div className="text-xs text-muted-foreground font-mono">
            LUCAS.EXE {portfolioData.version} · 2024
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
      </div>
    </div>
  );
}
