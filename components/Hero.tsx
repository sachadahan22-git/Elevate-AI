"use client";

import React from "react";
import { FloatingIconsHero } from "@/components/ui/floating-icons-hero-section";

/* ── Suno ─────────────────────────────────────────────────────────────────── */
const IconSuno = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="sunoGrad" cx="30%" cy="30%" r="80%">
        <stop offset="0%" stopColor="#df80ff" />
        <stop offset="50%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#38bdf8" />
      </radialGradient>
    </defs>
    <circle cx="20.5" cy="20.5" r="20.5" fill="url(#sunoGrad)" />
    <rect x="9"  y="22" width="3" height="8"  rx="1.5" fill="white" />
    <rect x="14" y="17" width="3" height="13" rx="1.5" fill="white" />
    <rect x="19" y="13" width="3" height="17" rx="1.5" fill="white" />
    <rect x="24" y="16" width="3" height="14" rx="1.5" fill="white" />
    <rect x="29" y="20" width="3" height="10" rx="1.5" fill="white" />
  </svg>
);

/* ── Gemini ───────────────────────────────────────────────────────────────── */
const IconGemini = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="geminiGrad" x1="20.5" y1="2" x2="20.5" y2="39" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stopColor="#ea4335" />
        <stop offset="33%"  stopColor="#4285f4" />
        <stop offset="66%"  stopColor="#34a853" />
        <stop offset="100%" stopColor="#fbbc04" />
      </linearGradient>
    </defs>
    <path d="M20.5 2C20.5 2 17 11 17 20.5C17 30 20.5 39 20.5 39C20.5 39 24 30 24 20.5C24 11 20.5 2 20.5 2Z" fill="url(#geminiGrad)" />
    <path d="M2 20.5C2 20.5 11 17 20.5 17C30 17 39 20.5 39 20.5C39 20.5 30 24 20.5 24C11 24 2 20.5 2 20.5Z" fill="url(#geminiGrad)" opacity="0.85" />
  </svg>
);

/* ── Gamma ────────────────────────────────────────────────────────────────── */
const IconGamma = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20.5" cy="20.5" r="20.5" fill="#ccff00" />
    <path d="M9 17C11 14 14 14 16 17C18 20 21 20 23 17C25 14 28 14 30 17" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M9 24C11 21 14 21 16 24C18 27 21 27 23 24C25 21 28 21 30 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

/* ── Make ─────────────────────────────────────────────────────────────────── */
const IconMake = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="makeGrad1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#ff00ff" /><stop offset="100%" stopColor="#cc44ff" /></linearGradient>
      <linearGradient id="makeGrad2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#cc44ff" /><stop offset="100%" stopColor="#8822ee" /></linearGradient>
      <linearGradient id="makeGrad3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#8822ee" /><stop offset="100%" stopColor="#5500cc" /></linearGradient>
    </defs>
    <rect x="4"  y="6" width="10" height="29" rx="3" transform="rotate(-15 9 20.5)"  fill="url(#makeGrad1)" />
    <rect x="15" y="6" width="10" height="29" rx="3" transform="rotate(-15 20 20.5)" fill="url(#makeGrad2)" />
    <rect x="26" y="6" width="10" height="29" rx="3" transform="rotate(-15 31 20.5)" fill="url(#makeGrad3)" />
  </svg>
);

/* ── n8n ──────────────────────────────────────────────────────────────────── */
const IconN8n = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="41" height="41" rx="10" fill="#ffffff" />
    <circle cx="8"  cy="16" r="3.5" stroke="#ea4b71" strokeWidth="2" fill="none" />
    <circle cx="16" cy="16" r="3.5" stroke="#ea4b71" strokeWidth="2" fill="none" />
    <circle cx="24" cy="16" r="3.5" stroke="#ea4b71" strokeWidth="2" fill="none" />
    <circle cx="33" cy="12" r="3.5" stroke="#ea4b71" strokeWidth="2" fill="none" />
    <circle cx="33" cy="22" r="3.5" stroke="#ea4b71" strokeWidth="2" fill="none" />
    <path d="M11.5 16H12.5M19.5 16H20.5M24 16C28 16 29.5 12 29.5 12M24 16C28 16 29.5 22 29.5 22" stroke="#ea4b71" strokeWidth="1.8" strokeLinecap="round" />
    <text x="5" y="34" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="bold" fill="#1a1f36">n8n</text>
  </svg>
);

/* ── Notion ───────────────────────────────────────────────────────────────── */
const IconNotion = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="41" height="41" rx="10" fill="#1a1a1a" />
    <rect x="7" y="9" width="27" height="23" rx="3" fill="white" />
    <path d="M7 9L4 12V35L7 32" fill="#555" />
    <path d="M34 9L37 12V35L34 32" fill="#999" />
    <path d="M7 32L10 35H34L37 32" fill="#777" />
    <text x="12" y="27" fontFamily="Georgia, serif" fontSize="16" fontWeight="bold" fill="#1a1a1a">N</text>
  </svg>
);

/* ── Veo 3.1 ──────────────────────────────────────────────────────────────── */
const IconVeo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="veoGlow" cx="50%" cy="55%" r="55%">
        <stop offset="0%"   stopColor="#d4863a" stopOpacity="0.9" />
        <stop offset="60%"  stopColor="#8b4513" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#0d0d0d" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="41" height="41" rx="10" fill="#0d0d0d" />
    <ellipse cx="20.5" cy="24" rx="14" ry="10" fill="url(#veoGlow)" />
    <text x="7" y="23" fontFamily="Arial, sans-serif" fontSize="9.5" fontWeight="300" fill="white" letterSpacing="0.5">Veo 3.1</text>
  </svg>
);

/* ── ChatGPT / OpenAI ─────────────────────────────────────────────────────── */
const IconChatGPT = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="41" height="41" rx="10" fill="#10a37f" />
    <path d="M20.5 8C14.5 8 9.5 12.5 9.5 18.5C9.5 21 10.4 23.3 12 25L11 32L17.5 29C18.5 29.3 19.5 29.5 20.5 29.5C26.5 29.5 31.5 25 31.5 19C31.5 13 26.5 8 20.5 8Z" fill="white" opacity="0.9" />
    <circle cx="16" cy="19" r="1.8" fill="#10a37f" />
    <circle cx="20.5" cy="19" r="1.8" fill="#10a37f" />
    <circle cx="25" cy="19" r="1.8" fill="#10a37f" />
  </svg>
);

/* ── Claude / Anthropic ───────────────────────────────────────────────────── */
const IconClaude = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="claudeGrad" x1="0" y1="0" x2="41" y2="41" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#d97659" />
        <stop offset="100%" stopColor="#c8622a" />
      </linearGradient>
    </defs>
    <rect width="41" height="41" rx="10" fill="url(#claudeGrad)" />
    <text x="9" y="26" fontFamily="Georgia, serif" fontSize="18" fontWeight="400" fill="white" letterSpacing="-0.5">C</text>
    <path d="M20 28C24 28 28 25 29 21" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
  </svg>
);

/* ── Perplexity ───────────────────────────────────────────────────────────── */
const IconPerplexity = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="41" height="41" rx="10" fill="#1c1c1c" />
    <path d="M20.5 8L20.5 33M8 20.5L33 20.5M12 12L29 29M29 12L12 29" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
    <circle cx="20.5" cy="20.5" r="4" fill="white" />
  </svg>
);

/* ── Midjourney ───────────────────────────────────────────────────────────── */
const IconMidjourney = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="41" height="41" rx="10" fill="#000000" />
    <path d="M20.5 10C14 10 9 16 9 20.5L13 17L20.5 30L28 17L32 20.5C32 16 27 10 20.5 10Z" fill="white" />
    <path d="M9 20.5C9 25.5 14.2 31 20.5 31C26.8 31 32 25.5 32 20.5" stroke="white" strokeWidth="1.5" fill="none" opacity="0.4" />
  </svg>
);

/* ── Canva ────────────────────────────────────────────────────────────────── */
const IconCanva = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="canvaGrad" x1="0" y1="0" x2="41" y2="41" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#7d2ae8" />
        <stop offset="100%" stopColor="#00c4cc" />
      </linearGradient>
    </defs>
    <rect width="41" height="41" rx="20.5" fill="url(#canvaGrad)" />
    <text x="8" y="28" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="bold" fill="white">C</text>
    <circle cx="28" cy="14" r="5" fill="white" opacity="0.9" />
    <circle cx="28" cy="14" r="2.5" fill="url(#canvaGrad)" />
  </svg>
);

/* ── Copilot / Microsoft ──────────────────────────────────────────────────── */
const IconCopilot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="41" height="41" rx="10" fill="#f3f3f3" />
    <rect x="8"  y="8"  width="11" height="11" rx="1" fill="#f25022" />
    <rect x="21" y="8"  width="11" height="11" rx="1" fill="#7fba00" />
    <rect x="8"  y="21" width="11" height="11" rx="1" fill="#00a4ef" />
    <rect x="21" y="21" width="11" height="11" rx="1" fill="#ffb900" />
  </svg>
);

/* ── Zapier ───────────────────────────────────────────────────────────────── */
const IconZapier = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="41" height="41" rx="10" fill="#ff4a00" />
    <path d="M26 9H15L9 20.5H18L9 32H15L26 20.5H17L26 9Z" fill="white" />
  </svg>
);

/* ── HubSpot ──────────────────────────────────────────────────────────────── */
const IconHubSpot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="41" height="41" rx="10" fill="#ff7a59" />
    <circle cx="28" cy="14" r="5" fill="white" />
    <circle cx="28" cy="14" r="2.5" fill="#ff7a59" />
    <path d="M28 19V24M20.5 24C20.5 24 17 24 14 27C11 30 12 34 12 34C12 34 16 35 19 32C22 29 22 25 22 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M22 25H28V19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Icon positions — 15 icons spread across full screen ─────────────────── */
const heroIcons = [
  /* Top row */
  { id: 1,  icon: IconSuno,       className: "top-[10%] left-[7%]"   },
  { id: 2,  icon: IconGemini,     className: "top-[8%]  left-[27%]"  },
  { id: 3,  icon: IconChatGPT,    className: "top-[10%] right-[25%]" },
  { id: 4,  icon: IconMake,       className: "top-[8%]  right-[7%]"  },
  /* Upper-mid */
  { id: 5,  icon: IconClaude,     className: "top-[30%] left-[4%]"   },
  { id: 6,  icon: IconCanva,      className: "top-[32%] left-[18%]"  },
  { id: 7,  icon: IconCopilot,    className: "top-[30%] right-[18%]" },
  { id: 8,  icon: IconN8n,        className: "top-[32%] right-[4%]"  },
  /* Mid */
  { id: 9,  icon: IconGamma,      className: "top-[53%] left-[26%]"  },
  { id: 10, icon: IconMidjourney, className: "top-[53%] right-[26%]" },
  /* Lower-mid */
  { id: 11, icon: IconPerplexity, className: "top-[70%] left-[6%]"   },
  { id: 12, icon: IconZapier,     className: "top-[72%] left-[20%]"  },
  { id: 13, icon: IconNotion,     className: "top-[70%] right-[20%]" },
  { id: 14, icon: IconHubSpot,    className: "top-[72%] right-[6%]"  },
  /* Bottom center */
  { id: 15, icon: IconVeo,        className: "top-[86%] left-[43%]"  },
];

export default function Hero() {
  return (
    <FloatingIconsHero
      headline={
        <>
          Vos équipes maîtrisent{" "}
          <em style={{ color: "#c8622a", fontStyle: "italic" }}>l&apos;IA</em>
          <br />
          avant vos{" "}
          <em style={{ color: "#c8622a", fontStyle: "italic" }}>concurrents.</em>
        </>
      }
      subtitle="Formations pratiques demi-journée ou journée entière pour intégrer l'IA dans vos workflows métiers — sans jargon, avec des résultats dès le lendemain."
      ctaText="Réserver une session gratuite"
      ctaHref="#contact"
      secondaryCtaText="Voir comment ça marche"
      secondaryCtaHref="#comment-ca-marche"
      label="Formation IA Entreprise — Paris & distanciel"
      trustSignals={[
        { text: "Audit offert avant toute formation" },
        { text: "Programme sur-mesure selon votre secteur" },
        { text: "100% opérationnel dès le lendemain" },
      ]}
      icons={heroIcons}
    />
  );
}
