"use client";

import { useState } from "react";
import { MainMenu, ContentPanel } from "@/src/features/menu";
import type { MenuSection } from "@/src/features/menu";
import { EasterEggButtons } from "./components/easter-egg-buttons";
import { KonamiModal } from "./components/konami-modal";
import { GameFooter } from "./components/game-footer";
import { useDictionary } from "@/src/features/shared/components/dictionary-provider";

interface GameScreenProps {
  onBack: () => void;
}

export function GameScreen({ onBack }: GameScreenProps) {
  const dictionary = useDictionary();
  const [activeSection, setActiveSection] = useState<MenuSection>("about");

  return (
    <div className="min-h-screen bg-background scanlines lightsaber-cursor">
      <KonamiModal />

      <div className="container mx-auto p-4 md:p-6 lg:p-8 max-w-6xl">
        <button
          onClick={onBack}
          className="text-xs text-muted-foreground hover:text-primary transition-colors mb-4"
        >
          {dictionary.game.backToTitle}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-4 md:gap-6">
          <MainMenu activeSection={activeSection} onSectionChange={setActiveSection} />
          <ContentPanel activeSection={activeSection} />
        </div>

        <EasterEggButtons />
        <GameFooter />
      </div>
    </div>
  );
}
