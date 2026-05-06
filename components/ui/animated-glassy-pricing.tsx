"use client";

import React, { useRef, useEffect, useState } from "react";
import { RippleButton } from "@/components/ui/multi-type-ripple-buttons";

// ── Check icon ────────────────────────────────────────────────────────────────
const CheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
    className={className}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

// ── WebGL animated canvas (absolute within section) ───────────────────────────
const ShaderCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const glProgramRef = useRef<WebGLProgram | null>(null);
  const glBgColorRef = useRef<WebGLUniformLocation | null>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const [bgColor, setBgColor] = useState([1.0, 1.0, 1.0]);

  useEffect(() => {
    const root = document.documentElement;
    const update = () => setBgColor(root.classList.contains("dark") ? [0, 0, 0] : [1.0, 1.0, 1.0]);
    update();
    const obs = new MutationObserver((ml) => {
      for (const m of ml) if (m.attributeName === "class") update();
    });
    obs.observe(root, { attributes: true });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const gl = glRef.current;
    const prog = glProgramRef.current;
    const loc = glBgColorRef.current;
    if (gl && prog && loc) { gl.useProgram(prog); gl.uniform3fv(loc, new Float32Array(bgColor)); }
  }, [bgColor]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;
    glRef.current = gl;

    const vert = `attribute vec2 aPosition; void main(){gl_Position=vec4(aPosition,0.,1.);}`;
    const frag = `
      precision highp float;
      uniform float iTime; uniform vec2 iResolution; uniform vec3 uBg;
      mat2 r2d(float a){float c=cos(a),s=sin(a);return mat2(c,-s,s,c);}
      float v(vec2 a,vec2 b,float s,float sp){return sin(dot(normalize(a),normalize(b))*s+iTime*sp)/100.;}
      vec3 circle(vec2 uv,vec2 c,float r,float w){
        vec2 d=c-uv; float l=length(d);
        l+=v(d,vec2(0.,1.),5.,2.); l-=v(d,vec2(1.,0.),5.,2.);
        float ci=smoothstep(r-w,r,l)-smoothstep(r,r+w,l);
        return vec3(ci);
      }
      void main(){
        vec2 uv=gl_FragCoord.xy/iResolution.xy;
        uv.x*=1.5; uv.x-=0.25;
        float m=0.; float rad=.35; vec2 cen=vec2(.5);
        m+=circle(uv,cen,rad,.035).r;
        m+=circle(uv,cen,rad-.018,.01).r;
        m+=circle(uv,cen,rad+.018,.005).r;
        vec2 vv=r2d(iTime)*uv;
        vec3 fg=vec3(vv.x,vv.y,.7-vv.y*vv.x);
        vec3 col=mix(uBg,fg,m);
        col=mix(col,vec3(1.),circle(uv,cen,rad,.003).r);
        gl_FragColor=vec4(col,1.);
      }`;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src); gl.compileShader(s); return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vert));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, frag));
    gl.linkProgram(prog); gl.useProgram(prog);
    glProgramRef.current = prog;

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, "aPosition");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const iTimeLoc = gl.getUniformLocation(prog, "iTime");
    const iResLoc  = gl.getUniformLocation(prog, "iResolution");
    glBgColorRef.current = gl.getUniformLocation(prog, "uBg");
    gl.uniform3fv(glBgColorRef.current, new Float32Array(bgColor));

    let raf: number;
    const render = (t: number) => {
      gl.uniform1f(iTimeLoc, t * 0.001);
      gl.uniform2f(iResLoc, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(render);
    };
    const resize = () => {
      const p = canvas.parentElement;
      canvas.width  = p ? p.clientWidth  : window.innerWidth;
      canvas.height = p ? p.clientHeight : window.innerHeight;
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    };
    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(render);
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(raf); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

// ── Pricing card ──────────────────────────────────────────────────────────────
export interface PricingCardProps {
  planName: string;
  description: string;
  price: string;
  priceUnit?: string;
  features: string[];
  highlightFeature?: string;
  buttonText: string;
  href?: string;
  isPopular?: boolean;
  buttonVariant?: "primary" | "secondary";
}

export const PricingCard = ({
  planName, description, price, priceUnit = "€ HT / session",
  features, highlightFeature, buttonText, href = "#contact", isPopular = false, buttonVariant = "primary",
}: PricingCardProps) => {
  const card = `
    backdrop-blur-[14px] rounded-2xl shadow-xl flex-1 px-7 py-8 flex flex-col transition-all duration-300
    bg-gradient-to-br from-black/5 to-black/0 border border-black/10
    dark:from-white/10 dark:to-white/5 dark:border-white/10 dark:backdrop-brightness-[0.91]
    ${isPopular ? "scale-105 relative ring-2 ring-[#c8622a]/30 dark:from-white/20 dark:to-white/10 dark:border-[#c8622a]/30 shadow-2xl" : ""}
  `;

  return (
    <div className={card.trim()}>
      {isPopular && (
        <div className="absolute -top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: "#c8622a", color: "#f0ece2" }}>
          Recommandé
        </div>
      )}

      <div className="mb-3">
        <h2 className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "#c8622a" }}>
          {planName}
        </h2>
        <p className="font-sans text-sm text-foreground/70 mt-1">{description}</p>
      </div>

      <div className="my-6 flex items-baseline gap-2">
        <span className="font-serif text-[3rem] font-light text-foreground leading-none">{price}</span>
        {priceUnit && <span className="font-sans text-xs text-foreground/60">{priceUnit}</span>}
      </div>

      <div className="w-full mb-5 h-px bg-[linear-gradient(90deg,transparent,rgba(200,98,42,0.3)_50%,transparent)]" />

      <ul className="flex flex-col gap-2.5 text-sm text-foreground/85 mb-6 font-sans flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <span style={{ color: "#c8622a", flexShrink: 0 }}><CheckIcon className="w-3.5 h-3.5" /></span>
            {f}
          </li>
        ))}
      </ul>

      {highlightFeature && (
        <div
          className="flex items-center gap-2 px-4 py-3 rounded-xl mb-4 font-sans text-sm font-medium"
          style={{ backgroundColor: "rgba(200,98,42,0.12)", border: "1px solid rgba(200,98,42,0.25)", color: "#c8622a" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
            <circle cx="8" cy="8" r="7" stroke="#c8622a" strokeWidth="1.2" />
            <path d="M8 5v6M5 8h6" stroke="#c8622a" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          {highlightFeature}
        </div>
      )}

      <RippleButton
        className={[
          "mt-auto w-full py-3 rounded-xl font-semibold text-sm font-sans transition",
          buttonVariant === "primary"
            ? "bg-[#d4783a] hover:bg-[#b85a22] text-[#f0ece2]"
            : "bg-black/8 hover:bg-black/15 text-foreground border border-black/15 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:border-white/20",
        ].join(" ")}
        onClick={() => window.location.href = href}
      >
        {buttonText}
      </RippleButton>
    </div>
  );
};

// ── Full pricing section ──────────────────────────────────────────────────────
export interface ModernPricingPageProps {
  sectionTitle?: React.ReactNode;
  sectionLabel?: string;
  subtitle?: React.ReactNode;
  plans: PricingCardProps[];
  showAnimatedBackground?: boolean;
}

export const ModernPricingPage = ({
  sectionTitle,
  sectionLabel = "Tarifs",
  subtitle,
  plans,
  showAnimatedBackground = true,
}: ModernPricingPageProps) => {
  return (
    <section
      id="tarifs"
      className="relative overflow-hidden section-padding"
      style={{ backgroundColor: "var(--section-bg-primary)" }}
    >
      {showAnimatedBackground && <ShaderCanvas />}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="label block mb-4">{sectionLabel}</span>
          {sectionTitle && (
            <h2
              className="font-serif leading-tight"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", color: "var(--text-primary)", fontWeight: 400 }}
            >
              {sectionTitle}
            </h2>
          )}
          {subtitle && (
            <p className="font-sans mt-4 max-w-lg mx-auto text-sm" style={{ color: "var(--text-primary-muted)" }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center items-stretch">
          {plans.map((plan) => (
            <PricingCard key={plan.planName} {...plan} />
          ))}
        </div>

        {/* OPCO note */}
        <p className="text-center mt-10 font-sans text-xs" style={{ color: "var(--text-primary-faint)" }}>
          Formations éligibles OPCO · Devis sur simple demande · TVA applicable selon situation
        </p>
      </div>
    </section>
  );
};
