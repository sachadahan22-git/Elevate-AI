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
  // Full 360° rainbow — seamless loop (start color = end color)
  const gradient = `conic-gradient(
    from 0deg,
    #ff0000   0deg,
    #ff7700  51deg,
    #ffff00 103deg,
    #00cc44 154deg,
    #00ccff 206deg,
    #0055ff 257deg,
    #cc00ff 309deg,
    #ff0000 360deg
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
