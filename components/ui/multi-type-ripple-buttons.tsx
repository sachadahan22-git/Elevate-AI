"use client";

import React, { ReactNode, useState, useMemo, MouseEvent, CSSProperties } from "react";

interface RippleState {
  key: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

interface RippleButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  variant?: "default" | "hover" | "ghost" | "hoverborder";
  rippleColor?: string;
  rippleDuration?: number;
  hoverBaseColor?: string;
  hoverRippleColor?: string;
  hoverBorderEffectColor?: string;
  hoverBorderEffectThickness?: string;
}

const hexToRgba = (hex: string, alpha: number): string => {
  let h = hex.startsWith("#") ? hex.slice(1) : hex;
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
};

const COLS = 36;
const ROWS = 12;
const TOTAL = COLS * ROWS;
const RIPPLE_SIZE = "18.973665961em";

const JS_RIPPLE_KEYFRAMES = `
  @keyframes js-ripple-animation {
    0%   { transform: scale(0); opacity: 1; }
    100% { transform: scale(1); opacity: 0; }
  }
  .animate-js-ripple-effect {
    animation: js-ripple-animation var(--ripple-duration) ease-out forwards;
  }
`;

const RippleButton: React.FC<RippleButtonProps> = ({
  children,
  onClick,
  className = "",
  disabled = false,
  variant = "default",
  rippleColor: userRippleColor,
  rippleDuration = 600,
  hoverBaseColor = "#6996e2",
  hoverRippleColor: customHoverRippleColor,
  hoverBorderEffectColor = "#6996e277",
  hoverBorderEffectThickness = "0.3em",
}) => {
  const [jsRipples, setJsRipples] = useState<RippleState[]>([]);

  const jsRippleColor = useMemo(() => {
    return userRippleColor ?? "var(--button-ripple-color, rgba(0,0,0,0.1))";
  }, [userRippleColor]);

  const dynamicStyles = useMemo(() => {
    let nth = "";
    const dur = "0.9s";
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const idx = r * COLS + c + 1;
        const top = 0.125 + r * 0.25;
        const left = 0.1875 + c * 0.25;
        if (variant === "hover") {
          nth += `.hover-variant-grid-cell:nth-child(${idx}):hover~.hover-variant-visual-ripple{top:${top}em;left:${left}em;transition:width ${dur} ease,height ${dur} ease,top 0s linear,left 0s linear;}`;
        } else if (variant === "hoverborder") {
          nth += `.hoverborder-variant-grid-cell:nth-child(${idx}):hover~.hoverborder-variant-visual-ripple{top:${top}em;left:${left}em;transition:width ${dur} ease-out,height ${dur} ease-out,top 0s linear,left 0s linear;}`;
        }
      }
    }
    if (variant === "hover") {
      const hrc = customHoverRippleColor ?? hexToRgba(hoverBaseColor, 0.466);
      return `.hover-variant-visual-ripple{background-color:${hrc};transition:width ${dur} ease,height ${dur} ease,top 99999s linear,left 99999s linear;}.hover-variant-grid-cell:hover~.hover-variant-visual-ripple{width:${RIPPLE_SIZE};height:${RIPPLE_SIZE};}${nth}`;
    }
    if (variant === "hoverborder") {
      return `.hoverborder-variant-ripple-container{padding:${hoverBorderEffectThickness};mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask-composite:exclude;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;}.hoverborder-variant-visual-ripple{background-color:${hoverBorderEffectColor};transition:width ${dur} ease-out,height ${dur} ease-out,top 99999s linear,left 9999s linear;}.hoverborder-variant-grid-cell:hover~.hoverborder-variant-visual-ripple{width:${RIPPLE_SIZE};height:${RIPPLE_SIZE};}${nth}`;
    }
    return "";
  }, [variant, hoverBaseColor, customHoverRippleColor, hoverBorderEffectColor, hoverBorderEffectThickness]);

  const createRipple = (e: MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const ripple: RippleState = { key: Date.now(), x, y, size, color: jsRippleColor };
    setJsRipples((prev) => [...prev, ripple]);
    setTimeout(() => setJsRipples((cur) => cur.filter((r) => r.key !== ripple.key)), rippleDuration);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!disabled) { createRipple(e); onClick?.(e); }
  };

  const rippleEls = (
    <div className="absolute inset-0 pointer-events-none z-[5]">
      {jsRipples.map((r) => (
        <span
          key={r.key}
          className="absolute rounded-full animate-js-ripple-effect"
          style={{ left: r.x, top: r.y, width: r.size, height: r.size, backgroundColor: r.color, ["--ripple-duration" as string]: `${rippleDuration}ms` } as CSSProperties}
        />
      ))}
    </div>
  );

  if (variant === "hover") {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: JS_RIPPLE_KEYFRAMES }} />
        <style dangerouslySetInnerHTML={{ __html: dynamicStyles }} />
        <button
          className={["relative rounded-lg text-lg px-4 py-2 border-none bg-transparent isolate overflow-hidden cursor-pointer", disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "", className].filter(Boolean).join(" ")}
          onClick={handleClick} disabled={disabled}
        >
          <span className="relative z-[10] pointer-events-none">{children}</span>
          {rippleEls}
          <div className="hover-variant-grid-container absolute inset-0 grid overflow-hidden pointer-events-none z-[0]" style={{ gridTemplateColumns: `repeat(${COLS},0.25em)` }}>
            {Array.from({ length: TOTAL }, (_, i) => <span key={i} className="hover-variant-grid-cell relative flex justify-center items-center pointer-events-auto" />)}
            <div className="hover-variant-visual-ripple pointer-events-none absolute w-0 h-0 rounded-full transform -translate-x-1/2 -translate-y-1/2 top-0 left-0 z-[-1]" />
          </div>
        </button>
      </>
    );
  }

  if (variant === "hoverborder") {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: JS_RIPPLE_KEYFRAMES }} />
        <style dangerouslySetInnerHTML={{ __html: dynamicStyles }} />
        <button
          className={["relative rounded-lg overflow-hidden text-lg px-4 py-2 border-none bg-transparent isolate cursor-pointer", disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "", className].filter(Boolean).join(" ")}
          onClick={handleClick} disabled={disabled}
        >
          <span className="relative z-[10] pointer-events-none">{children}</span>
          {rippleEls}
          <div className="hoverborder-variant-ripple-container absolute inset-0 grid rounded-[0.8em] overflow-hidden pointer-events-none z-[0]" style={{ gridTemplateColumns: `repeat(${COLS},0.25em)` }}>
            {Array.from({ length: TOTAL }, (_, i) => <span key={i} className="hoverborder-variant-grid-cell relative flex justify-center items-center pointer-events-auto" />)}
            <div className="hoverborder-variant-visual-ripple pointer-events-none absolute w-0 h-0 rounded-full transform -translate-x-1/2 -translate-y-1/2 top-0 left-0 z-[-1]" />
          </div>
        </button>
      </>
    );
  }

  if (variant === "ghost") {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: JS_RIPPLE_KEYFRAMES }} />
        <button
          className={["relative border-none bg-transparent isolate overflow-hidden cursor-pointer px-4 py-2 rounded-lg text-lg", disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "", className].filter(Boolean).join(" ")}
          onClick={handleClick} disabled={disabled}
        >
          <span className="relative z-10 pointer-events-none">{children}</span>
          {rippleEls}
        </button>
      </>
    );
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: JS_RIPPLE_KEYFRAMES }} />
      <button
        className={["relative border-none overflow-hidden isolate transition-all duration-200 cursor-pointer px-4 py-2 bg-blue-600 hover:opacity-90 text-white rounded-lg", disabled ? "opacity-50 cursor-not-allowed" : "", className].filter(Boolean).join(" ")}
        onClick={handleClick} disabled={disabled}
      >
        <span className="relative z-[1] pointer-events-none">{children}</span>
        {rippleEls}
      </button>
    </>
  );
};

export { RippleButton };
