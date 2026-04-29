"use client";

import { cn } from "@/lib/utils";

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: string | string[];
  className?: string;
  children: React.ReactNode;
}

export function ShineBorder({
  borderRadius = 16,
  borderWidth = 2,
  duration = 4,
  className,
  children,
}: ShineBorderProps) {
  // Conic gradient: transparent for ~320°, rainbow beam for ~40°
  const gradient = `conic-gradient(
    from 0deg,
    transparent 0deg,
    transparent 310deg,
    #ff6200 320deg,
    #ffe000 330deg,
    #aaff00 337deg,
    #00ffcc 342deg,
    #00aaff 348deg,
    #7700ff 354deg,
    #ff00ee 360deg
  )`;

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      style={{ borderRadius, padding: borderWidth }}
    >
      {/* Rotating beam — travels around the border */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: gradient,
          animation: `shine-spin ${duration}s linear infinite`,
        }}
      />

      {/* Content — covers the center, beam only visible on the border edge */}
      <div
        style={{
          position: "relative",
          borderRadius: borderRadius - borderWidth,
          overflow: "hidden",
          background: "#111",
        }}
      >
        {children}
      </div>
    </div>
  );
}
