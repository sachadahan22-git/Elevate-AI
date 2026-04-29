import * as React from "react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────────────────────
   ElevateAIIcon — SVG fidèle au logo fourni
   Cercle outline rainbow + 3 flèches pleines rainbow (bottom-orange → top-pink)
───────────────────────────────────────────────────────────────────────────── */
export function ElevateAIIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <defs>
        {/* ── Dégradé arc-en-ciel vertical pour les flèches ── */}
        <linearGradient id="eai-arrow" x1="100" y1="165" x2="100" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#ff6200" />
          <stop offset="16%"  stopColor="#ffe000" />
          <stop offset="32%"  stopColor="#aaff00" />
          <stop offset="50%"  stopColor="#00ffcc" />
          <stop offset="66%"  stopColor="#00aaff" />
          <stop offset="82%"  stopColor="#7700ff" />
          <stop offset="100%" stopColor="#ff00ee" />
        </linearGradient>

        {/* ── Dégradé diagonal pour le cercle ── */}
        <linearGradient id="eai-circle" x1="20" y1="180" x2="180" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#ff6200" />
          <stop offset="16%"  stopColor="#ffe000" />
          <stop offset="32%"  stopColor="#aaff00" />
          <stop offset="50%"  stopColor="#00ffcc" />
          <stop offset="66%"  stopColor="#00aaff" />
          <stop offset="82%"  stopColor="#7700ff" />
          <stop offset="100%" stopColor="#ff00ee" />
        </linearGradient>
      </defs>

      {/* ── Cercle outline ── */}
      <circle cx="100" cy="100" r="88" stroke="url(#eai-circle)" strokeWidth="7" />

      {/* ── Flèche gauche (plus courte) — centrée x≈65 ── */}
      <path
        d="M59 165 L59 112 L47 112 L65 74 L83 112 L71 112 L71 165 Z"
        fill="url(#eai-arrow)"
      />

      {/* ── Flèche centrale (la plus haute) — centrée x≈100 ── */}
      <path
        d="M93 165 L93 98 L80 98 L100 45 L120 98 L107 98 L107 165 Z"
        fill="url(#eai-arrow)"
      />

      {/* ── Flèche droite (plus courte) — centrée x≈135 ── */}
      <path
        d="M129 165 L129 112 L117 112 L135 74 L153 112 L141 112 L141 165 Z"
        fill="url(#eai-arrow)"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   ElevateAILogo — icône + wordmark
───────────────────────────────────────────────────────────────────────────── */
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
        <span
          style={{
            background:
              "linear-gradient(90deg, #ff6200 0%, #ffe000 25%, #00ffcc 55%, #7700ff 80%, #ff00ee 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          AI
        </span>
      </span>
    </span>
  );
}
