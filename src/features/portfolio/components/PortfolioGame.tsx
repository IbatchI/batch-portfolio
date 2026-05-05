"use client";

import { useState, useCallback } from "react";
import { BootScreen } from "@/src/features/boot";
import { TitleScreen } from "@/src/features/title";
import { GameScreen } from "@/src/features/game";

type GameState = "boot" | "title" | "game";

export function PortfolioGame() {
  const [gameState, setGameState] = useState<GameState>("boot");

  const handleBootComplete = useCallback(() => {
    setGameState("title");
  }, []);

  const handleStart = useCallback(() => {
    setGameState("game");
  }, []);

  const handleBack = useCallback(() => {
    setGameState("title");
  }, []);

  return (
    <>
      {gameState === "boot" && <BootScreen onComplete={handleBootComplete} />}
      {gameState === "title" && <TitleScreen onStart={handleStart} />}
      {gameState === "game" && <GameScreen onBack={handleBack} />}
    </>
  );
}
