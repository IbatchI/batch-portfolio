import { useState, useEffect } from "react";

export function EzioSilhouette() {
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
