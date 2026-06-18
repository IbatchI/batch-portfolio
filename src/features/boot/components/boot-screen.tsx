"use client";

import { useBootSequence } from "@/src/features/boot/hooks/use-boot-sequence";

const COLOR_SPLIT = 60;

interface BootScreenProps {
  onComplete: () => void;
}

function getLineClassName(index: number, isLast: boolean, showProgress: boolean): string {
  if (index === 0) return "text-primary text-glow-cyan";
  if (isLast && showProgress) return "text-secondary text-glow-gold";
  return "text-muted-foreground";
}

export function BootScreen({ onComplete }: BootScreenProps) {
  const { lines, progress, showProgress } = useBootSequence({ onComplete });

  return (
    <div className="flex min-h-screen flex-col justify-center bg-background p-6 scanlines crt-flicker md:p-8">
      <div className="mx-auto w-full max-w-2xl bg-card p-6 pixel-border border-border">
        <div className="space-y-2 font-mono text-xs md:text-sm">
          {lines.map((line, index) => {
            const isLast = index === lines.length - 1;
            return (
              <div key={index} className={getLineClassName(index, isLast, showProgress)}>
                {line}
                {isLast && !showProgress && <span className="cursor-blink">_</span>}
              </div>
            );
          })}
        </div>

        {showProgress && (
          <div className="mt-6">
            <div className="h-4 overflow-hidden bg-muted pixel-border border-muted-foreground/30">
              <div className="flex h-full">
                <div
                  className="h-full bg-success transition-all duration-75"
                  style={{ width: `${Math.min(progress, COLOR_SPLIT)}%` }}
                />
                <div
                  className="h-full bg-primary transition-all duration-75"
                  style={{ width: `${Math.max(0, progress - COLOR_SPLIT)}%` }}
                />
              </div>
            </div>
            <div className="mt-2 text-right font-mono text-xs text-muted-foreground">
              {progress}%
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
