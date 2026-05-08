"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/src/features/shared/lib/portfolio-data";

const BOOT_MESSAGE_DELAYS = {
  INIT: 0,
  MODULES: 400,
  STACK: 800,
  PORTFOLIO: 1200,
} as const;

const PROGRESS_BAR = {
  INTERVAL_MS: 30,
  STEP: 2,
  COLOR_SPLIT: 60,
  COMPLETE_DELAY_MS: 500,
} as const;

interface BootScreenProps {
  onComplete: () => void;
}

export function BootScreen({ onComplete }: BootScreenProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  const bootMessages = [
    { text: `LUCAS.EXE ${portfolioData.version} — INITIALIZING...`, color: "text-primary", delay: BOOT_MESSAGE_DELAYS.INIT },
    { text: "[ OK ] Frontend modules loaded", color: "text-muted-foreground", delay: BOOT_MESSAGE_DELAYS.MODULES },
    { text: "[ OK ] React · Next.js · TypeScript", color: "text-muted-foreground", delay: BOOT_MESSAGE_DELAYS.STACK },
    { text: "Loading portfolio data...", color: "text-secondary", delay: BOOT_MESSAGE_DELAYS.PORTFOLIO },
  ];

  useEffect(() => {
    bootMessages.forEach((msg, index) => {
      setTimeout(() => {
        setLines((prev) => [...prev, msg.text]);
        if (index === bootMessages.length - 1) {
          setShowProgress(true);
        }
      }, msg.delay);
    });
  }, []);

  useEffect(() => {
    if (!showProgress) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, PROGRESS_BAR.COMPLETE_DELAY_MS);
          return 100;
        }
        return prev + PROGRESS_BAR.STEP;
      });
    }, PROGRESS_BAR.INTERVAL_MS);

    return () => clearInterval(interval);
  }, [showProgress, onComplete]);

  return (
    <div className="min-h-screen bg-background p-6 md:p-8 flex flex-col justify-center scanlines crt-flicker">
      <div className="max-w-2xl mx-auto w-full pixel-border border-border bg-card p-6">
        <div className="space-y-2 font-mono text-xs md:text-sm">
          {lines.map((line, index) => (
            <div
              key={index}
              className={`${
                index === 0
                  ? "text-primary text-glow-cyan"
                  : index === lines.length - 1 && showProgress
                  ? "text-secondary text-glow-gold"
                  : "text-muted-foreground"
              }`}
            >
              {line}
              {index === lines.length - 1 && !showProgress && (
                <span className="cursor-blink">_</span>
              )}
            </div>
          ))}
        </div>

        {showProgress && (
          <div className="mt-6">
            <div className="h-4 bg-muted pixel-border border-muted-foreground/30 overflow-hidden">
              <div className="h-full flex">
                <div
                  className="h-full bg-success transition-all duration-75"
                  style={{ width: `${Math.min(progress, PROGRESS_BAR.COLOR_SPLIT)}%` }}
                />
                <div
                  className="h-full bg-primary transition-all duration-75"
                  style={{ width: `${Math.max(0, progress - PROGRESS_BAR.COLOR_SPLIT)}%` }}
                />
              </div>
            </div>
            <div className="text-right text-xs text-muted-foreground mt-2 font-mono">
              {progress}%
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
