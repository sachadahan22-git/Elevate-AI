"use client";

import React from "react";
import { FloatingIconsHero } from "@/components/ui/floating-icons-hero-section";

const makeIcon =
  (src: string, alt: string) =>
  ({ className }: React.SVGProps<SVGSVGElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={className} style={{ objectFit: "contain" }} />
  );

const IconClaude      = makeIcon("/logos/claude.svg",      "Claude");
const IconChatGPT     = makeIcon("/logos/chatgpt.svg",     "ChatGPT");
const IconGemini      = makeIcon("/logos/gemini.png",      "Gemini");
const IconNotion      = makeIcon("/logos/notion.png",      "Notion");
const IconMake        = makeIcon("/logos/make.png",        "Make");
const IconN8n         = makeIcon("/logos/n8n.png",         "n8n");
const IconSuno        = makeIcon("/logos/suno.png",        "Suno");
const IconVeo         = makeIcon("/logos/claudecode.jpg",  "Claude Code");
const IconSeedance    = makeIcon("/logos/seedance.png",    "Seedance");
const IconHighsfield  = makeIcon("/logos/higgsfield.png",  "Higgsfield AI");
const IconFlow        = makeIcon("/logos/flow.jpg",        "Flow");
const IconZapier      = makeIcon("/logos/zapier.png",      "Zapier");

const heroIcons = [
  /* Top row */
  { id: 1,  icon: IconSuno,       className: "top-[8%]  left-[7%]"   },
  { id: 2,  icon: IconGemini,     className: "top-[8%]  left-[27%]"  },
  { id: 3,  icon: IconChatGPT,    className: "top-[8%]  right-[25%]" },
  { id: 4,  icon: IconMake,       className: "top-[8%]  right-[7%]"  },
  /* Upper-mid */
  { id: 5,  icon: IconClaude,     className: "top-[30%] left-[4%]"   },
  { id: 6,  icon: IconFlow,       className: "top-[30%] right-[4%]"  },
  /* Mid */
  { id: 7,  icon: IconN8n,        className: "top-[52%] left-[6%]"   },
  { id: 8,  icon: IconNotion,     className: "top-[52%] right-[6%]"  },
  /* Lower-mid */
  { id: 9,  icon: IconZapier,     className: "top-[70%] left-[10%]"  },
  { id: 10, icon: IconSeedance,   className: "top-[70%] left-[26%]"  },
  { id: 11, icon: IconHighsfield, className: "top-[70%] right-[26%]" },
  { id: 12, icon: IconVeo,        className: "top-[70%] right-[10%]" },
];

export default function Hero() {
  return (
    <FloatingIconsHero
      headline={
        <>
          Vos équipes méritent de{" "}
          <em style={{ color: "#c8622a", fontStyle: "italic" }}>maîtriser</em>
          <br />
          l&apos;IA qui transforme votre secteur.
        </>
      }
      subtitle="Réservez votre consultation gratuite. En 30 minutes, nous identifions ensemble les opportunités IA les plus impactantes pour votre organisation."
      ctaText="Réserver ma consultation gratuite"
      ctaHref="#contact"
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
