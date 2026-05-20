"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Dictionary } from "@/src/features/shared/types/dictionaries";
import { useGlitch } from "@/src/features/shared/hooks/use-glitch";

const LINE_DELAYS = [0, 450, 950, 1500, 1900, 2150, 2350, 2550, 2950, 3450];
const MAIN_BLOCK_DELAY = 3850;

const LINE_CLASS: Record<string, string> = {
  muted: "text-muted-foreground",
  error: "text-destructive",
  dim: "text-muted-foreground/50",
};

function getLineClass(style: string): string {
  return LINE_CLASS[style] ?? "text-muted-foreground";
}

type Props = { notFound: Dictionary["notFound"] };

export function NotFoundClient({ notFound }: Props) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [visible, setVisible] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);
  const { display: num404, isGlitching } = useGlitch("404");

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    LINE_DELAYS.forEach((delay, i) => {
      timers.push(setTimeout(() => setVisibleLines(i + 1), delay));
    });
    timers.push(setTimeout(() => setVisible(true), MAIN_BLOCK_DELAY));

    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [visibleLines]);

  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-background px-6 py-6 font-mono">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-5"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 4px)",
        }}
      />

      <div className="relative z-6 mb-7 w-full max-w-140 overflow-hidden rounded-lg border border-border bg-card">
        <div className="flex items-center gap-1.5 border-b border-border bg-card px-3 py-2">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 text-[11px] tracking-widest text-muted-foreground">
            {notFound.terminalTitle}
          </span>
        </div>

        <div ref={logRef} className="max-h-60 min-h-24 overflow-y-auto px-4 py-3">
          {notFound.boot.slice(0, visibleLines).map((line, i) => (
            <p key={i} className="my-0.5 text-xs leading-relaxed tracking-wide">
              {line.suffix === "ok" || line.suffix === "fail" ? (
                <>
                  <span className={getLineClass(line.style)}>{line.text}</span>
                  <span className={line.suffix === "ok" ? "text-primary" : "text-destructive"}>
                    [{line.suffix.toUpperCase()}]
                  </span>
                </>
              ) : (
                <span className={getLineClass(line.style)}>{line.text}</span>
              )}
            </p>
          ))}
        </div>
      </div>

      <div
        className="relative z-6 w-full max-w-140 text-center transition-all duration-500 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(14px)",
        }}
      >
        <span
          className="block font-sans leading-none tracking-tighter text-primary transition-all duration-100"
          style={{
            fontSize: "clamp(72px, 16vw, 116px)",
            textShadow: isGlitching
              ? "3px 0 var(--color-destructive), -3px 0 var(--color-primary), 0 0 36px color-mix(in oklch, var(--color-primary) 40%, transparent)"
              : "0 0 36px color-mix(in oklch, var(--color-primary) 30%, transparent)",
            transform: isGlitching ? "skewX(-1deg)" : "none",
          }}
        >
          {num404}
        </span>

        <div className="mx-auto my-5 h-0.5 w-14 bg-border" />

        <p className="mb-1.5 text-[13px] tracking-wide text-foreground">
          <span className="text-primary">ERROR:</span> {notFound.subtitle}
        </p>

        <p className="mb-6 text-[11px] tracking-wide text-muted-foreground/60">
          {notFound.hint}
        </p>

        <div className="mb-5 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded border border-primary px-5 py-2 text-xs tracking-widest text-primary transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
          >
            <span className="mr-1.5">~/</span>
            {notFound.goHome}
          </Link>
          <button
            onClick={() => window.history.back()}
            className="rounded border border-border px-5 py-2 text-xs tracking-widest text-muted-foreground transition-colors duration-200 hover:border-muted-foreground hover:text-foreground"
          >
            {notFound.goBack}
          </button>
        </div>

        <p className="text-xs tracking-wide">
          <span className="text-muted-foreground/60">{notFound.prompt}</span>{" "}
          <span className="animate-[blink_0.6s_step-start_infinite] text-primary">█</span>
        </p>
      </div>
    </div>
  );
}
