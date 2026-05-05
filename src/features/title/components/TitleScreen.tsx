"use client";

import { useEffect, useState, useCallback } from "react";
import { portfolioData } from "@/src/config/portfolio-data";

interface TitleScreenProps {
  onStart: () => void;
}

function Star({ delay }: { delay: number }) {
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

function RainDrop({ delay }: { delay: number }) {
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

function Rooftops() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48">
      {/* Gotham-style rooftops silhouette */}
      <svg
        viewBox="0 0 1200 200"
        className="w-full h-full"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="rooftopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.15 0.02 250)" />
            <stop offset="100%" stopColor="oklch(0.08 0.01 250)" />
          </linearGradient>
        </defs>
        {/* Building silhouettes */}
        <path
          d="M0,200 L0,150 L50,150 L50,120 L80,120 L80,100 L100,100 L100,80 L120,70 L140,80 L140,100 L160,100 L160,130 L200,130 L200,90 L220,90 L220,60 L250,60 L250,90 L280,90 L280,140 L320,140 L320,100 L360,100 L360,70 L380,70 L380,50 L400,40 L420,50 L420,70 L440,70 L440,110 L500,110 L500,80 L540,80 L540,130 L580,130 L580,90 L620,90 L620,60 L660,60 L660,100 L700,100 L700,70 L740,70 L740,50 L780,50 L780,80 L820,80 L820,120 L860,120 L860,90 L900,90 L900,60 L940,60 L940,100 L980,100 L980,130 L1020,130 L1020,80 L1060,80 L1060,110 L1100,110 L1100,70 L1140,70 L1140,120 L1200,120 L1200,200 Z"
          fill="url(#rooftopGrad)"
        />
        {/* Some windows */}
        {[120, 250, 400, 540, 700, 900, 1060].map((x, i) => (
          <rect
            key={i}
            x={x}
            y={80 + (i % 3) * 20}
            width="4"
            height="6"
            fill="oklch(0.75 0.18 85 / 0.3)"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </svg>
    </div>
  );
}

function EzioSilhouette() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show Ezio every 15-25 seconds
    const showEzio = () => {
      setVisible(true);
      setTimeout(() => setVisible(false), 8000);
    };

    const interval = setInterval(showEzio, 15000 + Math.random() * 10000);
    // Show once after initial load
    setTimeout(showEzio, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="absolute bottom-28 md:bottom-44 z-10"
      style={{ animation: "ezioRun 8s linear forwards" }}
      title="Nothing is true, everything is permitted"
    >
      {/* Pixel art Ezio silhouette */}
      <svg width="16" height="20" viewBox="0 0 16 20" className="fill-foreground/40">
        {/* Hood */}
        <rect x="5" y="0" width="6" height="2" />
        <rect x="4" y="2" width="8" height="2" />
        <rect x="5" y="4" width="6" height="2" />
        {/* Body */}
        <rect x="6" y="6" width="4" height="4" />
        {/* Cape flowing */}
        <rect x="10" y="6" width="4" height="2" />
        <rect x="11" y="8" width="4" height="2" />
        <rect x="12" y="10" width="3" height="2" />
        {/* Legs running */}
        <rect x="5" y="10" width="2" height="4" />
        <rect x="8" y="10" width="2" height="4" />
        <rect x="4" y="14" width="2" height="4" />
        <rect x="9" y="14" width="2" height="4" />
        {/* Arms */}
        <rect x="3" y="7" width="3" height="2" />
        <rect x="2" y="9" width="2" height="2" />
      </svg>
    </div>
  );
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
