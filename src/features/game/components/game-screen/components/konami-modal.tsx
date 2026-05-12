import { useKonami } from "@/src/features/game/hooks/use-konami";

export function KonamiModal() {
  const { activated } = useKonami();

  if (!activated) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90">
      <div className="text-center pixel-border border-secondary bg-card p-8 animate-pulse">
        <div className="text-2xl text-secondary text-glow-gold mb-4">
          KONAMI CODE ACTIVATED!
        </div>
        <div className="text-sm text-foreground font-mono">
          +30 LIVES · GOD MODE ENABLED
        </div>
        <div className="text-xs text-muted-foreground mt-4">
          You found a secret! 🎮
        </div>
      </div>
    </div>
  );
}
