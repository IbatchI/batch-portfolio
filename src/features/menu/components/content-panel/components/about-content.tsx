import { useDictionary } from "@/src/features/shared/components/dictionary-provider";

export function AboutContent() {
  const dictionary = useDictionary();

  return (
    <div className="space-y-4">
      <p className="text-sm md:text-base leading-relaxed font-mono text-foreground">
        {dictionary.about.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        {dictionary.about.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs bg-muted text-foreground pixel-border border-muted-foreground/30"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
