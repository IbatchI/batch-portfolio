"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/src/features/shared/lib/portfolio-data";
import { useDictionary } from "@/src/features/shared/components/dictionary-provider";

export function SkillsContent() {
  const dictionary = useDictionary();
  const catalog = dictionary.skills.catalog;
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-primary text-xs uppercase tracking-wider">
          {dictionary.skills.title}
        </span>
        <span className="text-xs text-muted-foreground">
          {dictionary.skills.level}
        </span>
      </div>

      <div className="relative grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3">
        {portfolioData.skillsCatalog.map((skill, index) => {
          const info = catalog[skill.id];
          const isActive = activeId === skill.id;
          // Anchor the tooltip toward the panel center so edge columns don't clip.
          const colInRow = index % 3;
          const tooltipAlign =
            colInRow === 0
              ? "left-0"
              : colInRow === 2
                ? "right-0"
                : "left-1/2 -translate-x-1/2";

          return (
            <button
              key={skill.id}
              type="button"
              aria-label={skill.name}
              onMouseEnter={() => setActiveId(skill.id)}
              onMouseLeave={() => setActiveId(null)}
              onFocus={() => setActiveId(skill.id)}
              onBlur={() => setActiveId(null)}
              onClick={() => setActiveId((prev) => (prev === skill.id ? null : skill.id))}
              className={`group relative aspect-square flex items-center justify-center bg-background pixel-border transition-colors ${
                isActive
                  ? "border-success shadow-[0_0_12px_var(--color-success)] z-20"
                  : "border-border hover:border-primary"
              }`}
            >
              <Image
                src={skill.icon || "/placeholder.svg"}
                alt={skill.name}
                width={44}
                height={44}
                className={`w-8 h-8 sm:w-11 sm:h-11 object-contain ${
                  "invert" in skill && skill.invert ? "invert" : ""
                }`}
              />

              {isActive && info && (
                <div
                  className={`absolute top-full z-30 mt-2 w-52 sm:w-56 pixel-border border-success bg-card p-3 text-left shadow-[0_0_16px_rgba(0,0,0,0.7)] ${tooltipAlign}`}
                >
                  <p className="text-[10px] leading-relaxed">
                    <span className="text-success">NAME:</span>{" "}
                    <span className="text-foreground">{skill.name}</span>
                  </p>
                  <p className="text-[10px] leading-relaxed">
                    <span className="text-success">TYPE:</span>{" "}
                    <span className="text-secondary">{info.type}</span>
                  </p>
                  <p className="mt-1 text-[10px] leading-relaxed">
                    <span className="text-success">DESCRIPTION:</span>{" "}
                    <span className="text-muted-foreground">{info.description}</span>
                  </p>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <p className="text-[10px] text-muted-foreground tracking-wider pt-1">
        {dictionary.skills.hint}
      </p>
    </div>
  );
}
