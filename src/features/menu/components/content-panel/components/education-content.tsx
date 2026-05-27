import { useDictionary } from "@/src/features/shared/components/dictionary-provider";

export function EducationContent() {
  const dictionary = useDictionary();

  return (
    <div className="space-y-4">
      <div className="text-xs text-secondary mb-4 tracking-wider text-glow-gold">
        {dictionary.education.codex}
      </div>

      {dictionary.education.entries.map((edu) => (
        <div key={edu.title} className="pixel-border border-border bg-background/50 p-4">
          <div className="text-xs text-foreground font-bold">{edu.title}</div>
          <div className="text-xs text-muted-foreground mt-1 font-mono">{edu.institution}</div>
          <div className="text-xs text-primary mt-2 font-mono">{edu.period}</div>
        </div>
      ))}
    </div>
  );
}
