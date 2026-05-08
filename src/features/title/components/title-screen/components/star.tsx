import { useState } from "react";

export function Star({ delay }: { delay: number }) {
  const [style] = useState(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 60}%`,
    animationDelay: `${delay}s`,
  }));

  return (
    <div
      className="absolute w-1 h-1 bg-foreground/60 rounded-full"
      style={{
        ...style,
        animation: `twinkle ${2 + Math.random() * 3}s infinite`,
      }}
    />
  );
}
