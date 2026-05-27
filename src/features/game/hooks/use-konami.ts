import { useState, useEffect, useCallback, useRef } from "react";
import { portfolioData } from "@/src/features/shared/lib/portfolio-data";

const KONAMI_MODAL_DURATION_MS = 3000;

export function useKonami() {
  const [activated, setActivated] = useState(false);
  const [progress, setProgress] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const expected = portfolioData.easterEggs.konamiCode[progress];
      if (e.key === expected) {
        const newProgress = progress + 1;
        setProgress(newProgress);

        if (newProgress === portfolioData.easterEggs.konamiCode.length) {
          setActivated(true);
          timeoutRef.current = setTimeout(() => setActivated(false), KONAMI_MODAL_DURATION_MS);
          setProgress(0);
        }
      } else {
        setProgress(0);
      }
    },
    [progress]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return { activated };
}
