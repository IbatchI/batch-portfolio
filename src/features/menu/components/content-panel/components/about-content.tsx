import { portfolioData } from "@/src/features/shared/lib/portfolio-data";

export function AboutContent() {
  return (
    <div className="space-y-4">
      <p className="text-sm md:text-base leading-relaxed font-mono text-foreground">
        {portfolioData.about.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        {portfolioData.about.tags.map((tag) => (
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
