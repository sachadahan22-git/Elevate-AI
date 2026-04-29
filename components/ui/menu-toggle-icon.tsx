"use client";

import { cn } from "@/lib/utils";

interface MenuToggleIconProps {
  open: boolean;
  className?: string;
  duration?: number;
}

export function MenuToggleIcon({ open, className, duration = 300 }: MenuToggleIconProps) {
  const style = {
    transition: `transform ${duration}ms ease, opacity ${duration}ms ease`,
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={cn("overflow-visible", className)}
    >
      {/* Top bar */}
      <line
        x1="3" y1="7" x2="21" y2="7"
        style={{
          ...style,
          transformOrigin: "12px 7px",
          transform: open ? "translateY(5px) rotate(45deg)" : "none",
        }}
      />
      {/* Middle bar */}
      <line
        x1="3" y1="12" x2="21" y2="12"
        style={{
          ...style,
          opacity: open ? 0 : 1,
          transform: open ? "scaleX(0)" : "none",
          transformOrigin: "center",
        }}
      />
      {/* Bottom bar */}
      <line
        x1="3" y1="17" x2="21" y2="17"
        style={{
          ...style,
          transformOrigin: "12px 17px",
          transform: open ? "translateY(-5px) rotate(-45deg)" : "none",
        }}
      />
    </svg>
  );
}
