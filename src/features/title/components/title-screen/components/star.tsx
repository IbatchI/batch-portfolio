import { useState } from "react";

const STAR_MAX_TOP_PERCENT = 60;
const STAR_ANIMATION_MIN_DURATION = 2;
const STAR_ANIMATION_MAX_EXTRA = 3;

export function Star({ delay }: { delay: number }) {
  const [style] = useState(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * STAR_MAX_TOP_PERCENT}%`,
    animationDelay: `${delay}s`,
    animation: `twinkle ${STAR_ANIMATION_MIN_DURATION + Math.random() * STAR_ANIMATION_MAX_EXTRA}s infinite`,
  }));

  return (
    <div
      className="absolute w-1 h-1 bg-foreground/60 rounded-full"
      style={style}
    />
  );
}
