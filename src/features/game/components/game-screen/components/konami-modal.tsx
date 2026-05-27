import { useKonami } from "@/src/features/game/hooks/use-konami";
import { useDictionary } from "@/src/features/shared/components/dictionary-provider";

export function KonamiModal() {
  const { activated } = useKonami();
  const dictionary = useDictionary();

  if (!activated) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90">
      <div className="text-center pixel-border border-secondary bg-card p-8 animate-pulse">
        <div className="text-2xl text-secondary text-glow-gold mb-4">
          {dictionary.konami.title}
        </div>
        <div className="text-sm text-foreground font-mono">
          {dictionary.konami.subtitle}
        </div>
        <div className="text-xs text-muted-foreground mt-4">
          {dictionary.konami.secret}
        </div>
      </div>
    </div>
  );
}
