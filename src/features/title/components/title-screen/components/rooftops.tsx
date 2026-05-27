export function Rooftops() {
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
