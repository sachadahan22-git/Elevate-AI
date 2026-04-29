"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";

type CubicBezier = [number, number, number, number];
const smooth: CubicBezier = [0.22, 1, 0.36, 1];

const steps = [
  {
    number: "01",
    title: "Consultation gratuite",
    description: "Échange de 30 minutes pour comprendre vos enjeux, vos outils actuels et les besoins spécifiques de vos équipes. Aucun engagement.",
  },
  {
    number: "02",
    title: "Programme sur-mesure",
    description: "Nous concevons un programme adapté à votre secteur, vos cas d'usage réels et le niveau de vos collaborateurs. Demi-journée ou journée entière.",
  },
  {
    number: "03",
    title: "Formation en entreprise",
    description: "Session pratique dans vos locaux ou en distanciel. Vos équipes travaillent directement sur leurs propres tâches avec les outils IA adaptés.",
  },
  {
    number: "04",
    title: "Suivi & ancrage",
    description: "Un compte-rendu personnalisé, une sélection de ressources et un accès à notre support pendant 30 jours pour ancrer durablement les acquis.",
  },
];

const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.2, ease: "easeInOut" as const },
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: smooth, delay: i * 0.18 },
  }),
};

export default function HowItWorks() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section
      id="comment-ca-marche"
      className="section-padding"
      style={{ backgroundColor: "var(--section-bg-secondary)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="label block mb-4">Processus</span>
          <h2
            className="font-serif leading-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", color: "var(--text-secondary)", fontWeight: 400 }}
          >
            Comment ça <em style={{ color: "#c8622a" }}>marche</em> ?
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line — animates on scroll */}
          <motion.div
            className="absolute left-[1.75rem] top-4 bottom-4 w-px hidden md:block origin-top"
            style={{ background: "linear-gradient(to bottom, #c8622a, rgba(200,98,42,0.1))" }}
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="relative flex gap-8 md:gap-12 group"
                custom={i}
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
              >
                {/* Number bubble */}
                <div className="flex flex-col items-center">
                  <div
                    className="relative z-10 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 cursor-pointer"
                    style={{
                      backgroundColor: (i === 0 || hoveredStep === i) ? "#c8622a" : "rgba(255,255,255,0.7)",
                      border: `1px solid ${(i === 0 || hoveredStep === i) ? "#c8622a" : "rgba(200,98,42,0.3)"}`,
                      boxShadow: hoveredStep === i ? "0 0 20px rgba(200,98,42,0.35)" : "none",
                      transition: "background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
                    }}
                    onMouseEnter={() => setHoveredStep(i)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    <span
                      className="font-mono text-sm font-bold"
                      style={{
                        color: (i === 0 || hoveredStep === i) ? "#f0ece2" : "#c8622a",
                        transition: "color 0.25s ease",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="w-px flex-1 my-2 md:hidden"
                      style={{
                        background: "linear-gradient(to bottom, rgba(200,98,42,0.4), rgba(200,98,42,0.05))",
                        minHeight: "40px",
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div style={{ paddingBottom: i < steps.length - 1 ? "3rem" : "0" }}>
                  <h3
                    className="font-serif text-2xl mb-3 leading-snug"
                    style={{ color: "var(--text-secondary)", fontWeight: 500 }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-sans leading-relaxed max-w-lg"
                    style={{ color: "var(--text-secondary-muted)", fontSize: "0.95rem" }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Inline CTA */}
        <motion.div
          className="mt-4 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ borderTop: "1px solid rgba(200,98,42,0.15)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="font-serif text-xl" style={{ color: "var(--text-secondary)", fontWeight: 400 }}>
              Prêt à commencer ?
            </p>
            <p className="font-sans text-sm mt-1" style={{ color: "var(--text-secondary-muted)" }}>
              La consultation initiale est offerte, sans engagement.
            </p>
          </div>
          <a href="#contact" className="btn-primary flex-shrink-0">
            Réserver ma consultation
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
