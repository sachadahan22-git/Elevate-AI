import * as React from "react";
import { cn } from "@/lib/utils";

export function ElevateAIIcon({ className }: { className?: string }) {
  return (
    <span className={cn("shrink-0 inline-block relative", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logos/elevateai_icon_light.png"
        alt="Elevate AI"
        className="w-full h-full object-contain dark:hidden"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logos/elevateai_icon_dark.png"
        alt="Elevate AI"
        className="w-full h-full object-contain hidden dark:block"
      />
    </span>
  );
}

export function ElevateAILogo({
  className,
  iconSize = "w-8 h-8",
  textSize = "text-xl",
}: {
  className?: string;
  iconSize?: string;
  textSize?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <ElevateAIIcon className={iconSize} />
      <span className={cn("font-serif font-medium tracking-wide", textSize)}
            style={{ color: "var(--text-primary)" }}>
        Elevate{" "}
        <span className="ai-gradient-animated">AI</span>
      </span>
    </span>
  );
}
