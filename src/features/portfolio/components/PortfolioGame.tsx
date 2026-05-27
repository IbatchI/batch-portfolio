"use client";

import { BootScreen } from "@/src/features/boot";
import { TitleScreen } from "@/src/features/title";
import { GameScreen } from "@/src/features/game";
import { useGameState } from "@/src/features/shared/hooks/use-game-state";

export function PortfolioGame() {
  const { gameState, actions } = useGameState();

  return (
    <>
      {gameState === "boot" && <BootScreen onComplete={actions.bootComplete} />}
      {gameState === "title" && <TitleScreen onStart={actions.start} />}
      {gameState === "game" && <GameScreen onBack={actions.back} />}
    </>
  );
}
