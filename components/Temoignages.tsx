"use client";

import { motion } from "motion/react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const testimonials = [
  {
    text: "En une journée, mon équipe commerciale a appris à rédiger des emails, des propositions et des analyses avec l'IA. Le ROI était visible dès la semaine suivante.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sophie Laurent",
    role: "Directrice Commerciale · Groupe Nexia",
  },
  {
    text: "Ce qui m'a convaincu, c'est l'approche pratique. On n'a pas parlé de technologie abstraite — on a travaillé directement sur nos vrais sujets du quotidien.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Marc Thiébaut",
    role: "Responsable RH · Cabinet Meridiem",
  },
  {
    text: "Mes collaborateurs avaient peur d'être remplacés. Après la formation, ils voient l'IA comme un assistant puissant. Le changement de posture est remarquable.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Isabelle Renard",
    role: "DG · Alteva Conseil",
  },
  {
    text: "Formation ultra-personnalisée, adaptée à notre secteur immobilier. Les cas d'usage proposés collaient parfaitement à notre réalité terrain.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Thomas Vigier",
    role: "Directeur Développement · Immo&Co",
  },
  {
    text: "Notre équipe marketing génère maintenant des briefs complets, des analyses concurrentielles et des contenus en une fraction du temps habituel.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Camille Morin",
    role: "Head of Marketing · StartupTech",
  },
  {
    text: "La pédagogie est impeccable. Des exemples concrets, du rythme, et un formateur qui sait s'adapter à des profils très différents dans la même salle.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Antoine Bertrand",
    role: "CEO · Innov'RH",
  },
  {
    text: "On a déployé la formation sur 3 équipes différentes. Les retours sont unanimes : c'est la formation la plus actionnable qu'ils aient suivie depuis longtemps.",
    image: "https://randomuser.me/api/portraits/women/51.jpg",
    name: "Nathalie Picot",
    role: "DRH · Groupe Latitude",
  },
  {
    text: "Je suis passé de sceptique total à évangéliste IA en une journée. La formation m'a montré des applications concrètes que je n'aurais jamais imaginées.",
    image: "https://randomuser.me/api/portraits/men/74.jpg",
    name: "Romain Castets",
    role: "DAF · PME Industrie",
  },
  {
    text: "Le suivi post-formation est un vrai plus. Notre formateur est resté disponible pendant un mois pour répondre à nos questions terrain.",
    image: "https://randomuser.me/api/portraits/women/37.jpg",
    name: "Audrey Fontaine",
    role: "COO · Agence Créative",
  },
];

const firstColumn  = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn  = testimonials.slice(6, 9);

export default function Temoignages() {
  return (
    <section
      id="temoignages"
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--section-bg-primary)", padding: "0 1.5rem 7rem" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(200,98,42,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14"
        >
          <span className="label block mb-4">Témoignages</span>
          <h2
            className="font-serif leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", color: "var(--text-primary)", fontWeight: 400 }}
          >
            Ce que disent nos <em style={{ color: "#c8622a" }}>clients</em>
          </h2>
          <p className="font-sans" style={{ color: "var(--text-primary-muted)", fontSize: "0.95rem" }}>
            Plus de 200 professionnels formés. Voici quelques-uns de leurs retours.
          </p>
        </motion.div>

        <div className="flex justify-center gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[680px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn}  className="hidden lg:block" duration={20} />
        </div>

        <div className="mt-14 grid grid-cols-3 gap-6 pt-10" style={{ borderTop: "1px solid var(--separator)" }}>
          {[
            { value: "97%", label: "de satisfaction globale" },
            { value: "200+", label: "professionnels formés" },
            { value: "4.9/5", label: "note moyenne" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-serif" style={{ fontSize: "2rem", color: "#c8622a", fontWeight: 500, lineHeight: 1 }}>
                {stat.value}
              </p>
              <p className="font-sans text-xs mt-2" style={{ color: "var(--text-primary-faint)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
