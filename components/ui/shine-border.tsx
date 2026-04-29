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
  // Full 360° seamless rainbow (start = end color so no seam)
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
      {/*
        Outer wrapper centers an oversized square (200% × 200%) so that
        at any rotation angle its corners still cover the container's corners —
        this eliminates the "cut" that happens when a same-size div rotates.
      */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          width: "200%",
          aspectRatio: "1",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: gradient,
            animation: `shine-spin ${duration}s linear infinite`,
          }}
        />
      </div>

      {/* Content covers the center — gradient only shows through the border edge */}
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
