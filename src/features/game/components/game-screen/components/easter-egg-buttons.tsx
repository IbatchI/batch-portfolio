export function EasterEggButtons() {
  return (
    <div className="mt-6 pt-4 border-t border-border">
      <div className="text-xs text-muted-foreground mb-3 tracking-wider">
        EASTER EGGS ESCONDIDOS
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="px-2 py-1 text-[10px] bg-muted/50 text-muted-foreground pixel-border border-muted-foreground/20">
          ✓ Ezio en skyline
        </span>
        <span
          className="px-2 py-1 text-[10px] bg-muted/50 text-muted-foreground pixel-border border-muted-foreground/20 cursor-help"
          title="↑↑↓↓←→←→BA"
        >
          ↑ Konami code
        </span>
        <span
          className="px-2 py-1 text-[10px] bg-muted/50 text-muted-foreground pixel-border border-muted-foreground/20 cursor-help"
          title="I am the night"
        >
          🦇 &quot;I am the night&quot; hover
        </span>
        <span className="px-2 py-1 text-[10px] bg-muted/50 text-muted-foreground pixel-border border-muted-foreground/20">
          ⚔ Lightsaber cursor
        </span>
        <span className="px-2 py-1 text-[10px] bg-muted/50 text-muted-foreground pixel-border border-muted-foreground/20">
          △ AC logo en footer
        </span>
      </div>
    </div>
  );
}
