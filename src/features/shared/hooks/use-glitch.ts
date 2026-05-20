"use client";

import { useState, useEffect } from "react";

const GCHARS = "!<>-_\\/[]{}—=+*^?#░▒▓█▄▀";
const GLITCH_FRAMES = 12;
const GLITCH_FRAME_MS = 40;
const GLITCH_INTERVAL_MS = 3500;

interface UseGlitchResult {
  display: string;
  isGlitching: boolean;
}

export function useGlitch(original: string): UseGlitchResult {
  const [display, setDisplay] = useState(original);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    function runGlitch() {
      setIsGlitching(true);
      let frame = 0;

      const intervalId = setInterval(() => {
        frame++;
        if (frame >= GLITCH_FRAMES) {
          setDisplay(original);
          setIsGlitching(false);
          clearInterval(intervalId);
          return;
        }
        setDisplay(
          original
            .split("")
            .map((c) =>
              Math.random() < frame / GLITCH_FRAMES
                ? c
                : GCHARS[Math.floor(Math.random() * GCHARS.length)],
            )
            .join(""),
        );
      }, GLITCH_FRAME_MS);

      return intervalId;
    }

    const activeGlitchIntervals: ReturnType<typeof setInterval>[] = [];
    const scheduledTimeouts: ReturnType<typeof setTimeout>[] = [];

    const outerInterval = setInterval(() => {
      const t = setTimeout(() => {
        const id = runGlitch();
        activeGlitchIntervals.push(id);
      }, Math.random() * 1500);
      scheduledTimeouts.push(t);
    }, GLITCH_INTERVAL_MS);

    return () => {
      clearInterval(outerInterval);
      scheduledTimeouts.forEach(clearTimeout);
      activeGlitchIntervals.forEach(clearInterval);
    };
  }, [original]);

  return { display, isGlitching };
}
