import { useState } from "react";

export function RainDrop({ delay }: { delay: number }) {
  const [style] = useState(() => ({
    left: `${Math.random() * 100}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${0.5 + Math.random() * 0.5}s`,
  }));

  return (
    <div
      className="absolute w-px h-3 bg-primary/30"
      style={{
        ...style,
        animation: `rain ${style.animationDuration} linear infinite`,
      }}
    />
  );
}
