"use client";

import { useEffect, useState, useCallback } from "react";
import { portfolioData } from "@/src/features/shared/lib/portfolio-data";
import { Star } from "./components/star";
import { RainDrop } from "./components/rain-drop";
import { Rooftops } from "./components/rooftops";
import { EzioSilhouette } from "./components/ezio-silhouette";

interface TitleScreenProps {
  onStart: () => void;
}

export function TitleScreen({ onStart }: TitleScreenProps) {
  const [showPressStart, setShowPressStart] = useState(false);
  const [stars] = useState(() => Array.from({ length: 50 }, (_, i) => i));
  const [rainDrops] = useState(() => Array.from({ length: 30 }, (_, i) => i));

  useEffect(() => {
    const timer = setTimeout(() => setShowPressStart(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        onStart();
      }
    },
    [onStart]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      className="min-h-screen bg-background relative overflow-hidden scanlines crt-flicker cursor-pointer"
      onClick={onStart}
    >
      {/* Stars background */}
      <div className="absolute inset-0">
        {stars.map((i) => (
          <Star key={i} delay={i * 0.1} />
        ))}
      </div>

      {/* Rain effect */}
      <div className="absolute inset-0 overflow-hidden">
        {rainDrops.map((i) => (
          <RainDrop key={i} delay={i * 0.1} />
        ))}
      </div>

      {/* Rooftops silhouette */}
      <Rooftops />

      {/* Ezio easter egg */}
      <EzioSilhouette />

      {/* Main title */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        {/* Decorative top border - AC logo hint */}
        <div className="mb-8 flex items-center gap-2">
          <div className="w-8 h-px bg-muted-foreground/30" />
          <div className="w-2 h-2 rotate-45 border border-muted-foreground/30" />
          <div className="w-8 h-px bg-muted-foreground/30" />
        </div>

        <h1 className="text-2xl md:text-4xl lg:text-5xl text-secondary text-glow-gold tracking-wider text-center">
          {portfolioData.name}
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl text-secondary text-glow-gold tracking-wider mt-2 text-center">
          {portfolioData.lastName}
        </h2>

        <p className="text-xs md:text-sm text-muted-foreground mt-6 tracking-widest">
          — {portfolioData.title} —
        </p>

        {/* Press Start */}
        {showPressStart && (
          <button
            onClick={onStart}
            className="mt-12 text-xs md:text-sm text-foreground hover:text-primary transition-colors cursor-blink focus:outline-none focus:text-primary"
          >
            [ PRESS START ]
          </button>
        )}

        {/* Decorative bottom elements */}
        <div className="mt-16 flex items-center gap-4">
          {/* Small lightsaber decoration */}
          <div className="w-1 h-8 bg-primary rounded-full shadow-[0_0_10px_oklch(0.7_0.2_200)]" />
        </div>
      </div>

      {/* Screen vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, oklch(0.08 0.01 250 / 0.4) 100%)",
        }}
      />
    </div>
  );
}
