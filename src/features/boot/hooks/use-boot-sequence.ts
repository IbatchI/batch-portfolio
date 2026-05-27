"use client";

import { useState, useEffect, useMemo } from "react";
import { portfolioData } from "@/src/features/shared/lib/portfolio-data";
import { useDictionary } from "@/src/features/shared/components/dictionary-provider";

const BOOT_MESSAGE_DELAYS = {
  INIT: 0,
  MODULES: 400,
  STACK: 800,
  PORTFOLIO: 1200,
} as const;

const PROGRESS_BAR = {
  INTERVAL_MS: 30,
  STEP: 2,
  COMPLETE_DELAY_MS: 500,
} as const;

interface UseBootSequenceOptions {
  onComplete: () => void;
}

interface UseBootSequenceResult {
  lines: string[];
  progress: number;
  showProgress: boolean;
}

export function useBootSequence({ onComplete }: UseBootSequenceOptions): UseBootSequenceResult {
  const dictionary = useDictionary();
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  const bootMessages = useMemo(
    () => [
      {
        text: dictionary.boot.initializing.replace("{version}", portfolioData.version),
        delay: BOOT_MESSAGE_DELAYS.INIT,
      },
      { text: dictionary.boot.modulesLoaded, delay: BOOT_MESSAGE_DELAYS.MODULES },
      { text: dictionary.boot.stack,         delay: BOOT_MESSAGE_DELAYS.STACK },
      { text: dictionary.boot.loadingPortfolio, delay: BOOT_MESSAGE_DELAYS.PORTFOLIO },
    ],
    [dictionary],
  );

  useEffect(() => {
    setLines([]);
    const timers: ReturnType<typeof setTimeout>[] = [];

    bootMessages.forEach((msg, index) => {
      const t = setTimeout(() => {
        setLines((prev) => {
          if (prev.includes(msg.text)) return prev;
          return [...prev, msg.text];
        });
        if (index === bootMessages.length - 1) {
          setShowProgress(true);
        }
      }, msg.delay);
      timers.push(t);
    });

    return () => timers.forEach(clearTimeout);
  }, [bootMessages]);

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

  return { lines, progress, showProgress };
}
