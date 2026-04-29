"use client";

import { cn } from "@/lib/utils";

type TColorProp = string | string[];

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: TColorProp;
  className?: string;
  children: React.ReactNode;
}

export function ShineBorder({
  borderRadius = 16,
  borderWidth = 1.5,
  duration = 8,
  color = ["#ff6200", "#ffe000", "#aaff00", "#00ffcc", "#00aaff", "#7700ff", "#ff00ee"],
  className,
  children,
}: ShineBorderProps) {
  const colors = Array.isArray(color) ? color : [color];
  // Close the loop for a seamless conic gradient
  const gradientColors = [...colors, colors[0]].join(", ");

  return (
    <div
      className={cn("relative w-full", className)}
      style={{ borderRadius, padding: borderWidth }}
    >
      {/* Rotating conic-gradient border layer */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          borderRadius,
          background: `conic-gradient(from 0deg, ${gradientColors})`,
          animation: `shine-spin ${duration}s linear infinite`,
          zIndex: 0,
        }}
      />
      {/* Content — sits above the gradient */}
      <div
        style={{
          position: "relative",
          borderRadius: borderRadius - borderWidth,
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
}
