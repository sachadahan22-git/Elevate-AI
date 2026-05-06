"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consultation gratuite",
    description: "Échange de 30 minutes pour comprendre vos enjeux, vos outils actuels et les besoins spécifiques de vos équipes. Aucun engagement.",
    bullets: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Programme sur-mesure",
    description: "Nous concevons un programme adapté à votre secteur, vos cas d'usage réels et le niveau de vos collaborateurs. Demi-journée ou journée entière.",
    bullets: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Formation en entreprise",
    description: "Session pratique dans vos locaux ou en distanciel. Vos équipes travaillent directement sur leurs propres tâches avec les outils IA adaptés.",
    bullets: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Suivi & ancrage",
    description: "Un compte-rendu personnalisé, une sélection de ressources et un kit offert regroupant :",
    bullets: [
      "Les 20 meilleurs outils IA gratuits et payants",
      "Les 10 templates de prompts les plus utiles par métier",
      "Un guide de démarrage avec n8n ou Make",
      "La liste des formations recommandées pour aller plus loin",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const step = steps[activeStep];

  return (
    <section
      id="comment-ca-marche"
      className="section-padding"
      style={{ backgroundColor: "var(--section-bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto px-6">

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

        {/* Interactive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12">

          {/* ── Left: step selector ── */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            {steps.map((s, i) => {
              const isActive = activeStep === i;
              const isHovered = hoveredStep === i;
              const isDimmed = hoveredStep !== null && !isHovered && !isActive;
              return (
                <motion.button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  onMouseEnter={() => setHoveredStep(i)}
                  onMouseLeave={() => setHoveredStep(null)}
                  animate={{ x: isHovered && !isActive ? 6 : 0, opacity: isDimmed ? 0.45 : 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="relative flex items-center gap-4 px-5 py-4 rounded-xl text-left overflow-hidden"
                  style={{
                    backgroundColor: isActive ? "rgba(200,98,42,0.08)" : "transparent",
                    border: `1px solid ${isActive ? "rgba(200,98,42,0.3)" : isHovered ? "rgba(200,98,42,0.15)" : "transparent"}`,
                  }}
                >
                  {/* Hover glow highlight */}
                  <AnimatePresence>
                    {isHovered && !isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: "radial-gradient(ellipse 120% 80% at 0% 50%, rgba(200,98,42,0.10) 0%, transparent 70%)",
                        }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Active left bar */}
                  {isActive && (
                    <motion.div
                      layoutId="active-bar"
                      className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full"
                      style={{ backgroundColor: "#c8622a" }}
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}

                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? "#c8622a" : isHovered ? "rgba(200,98,42,0.15)" : "rgba(200,98,42,0.08)",
                      color: isActive ? "#f0ece2" : "#c8622a",
                    }}
                  >
                    {s.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <span
                      className="font-mono text-xs block mb-0.5"
                      style={{ color: isActive || isHovered ? "#c8622a" : "rgba(200,98,42,0.5)" }}
                    >
                      {s.number}
                    </span>
                    <span
                      className="font-sans text-sm font-medium"
                      style={{ color: isActive || isHovered ? "var(--text-secondary)" : "var(--text-secondary-muted)" }}
                    >
                      {s.title}
                    </span>
                  </div>

                  {/* Arrow */}
                  <motion.svg
                    width="14" height="14" viewBox="0 0 14 14" fill="none"
                    className="ml-auto flex-shrink-0"
                    animate={{ opacity: isActive || isHovered ? 1 : 0, x: isActive || isHovered ? 0 : -6 }}
                    transition={{ duration: 0.2 }}
                    style={{ color: "#c8622a" }}
                  >
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </motion.button>
              );
            })}
          </div>

          {/* ── Right: content panel ── */}
          <div
            className="lg:col-span-3 relative rounded-2xl overflow-hidden p-8 lg:p-10 min-h-[340px] flex flex-col justify-between"
            style={{
              background: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(200,98,42,0.15)",
              backdropFilter: "blur(12px)",
            }}
          >
            {/* Decorative large number */}
            <span
              className="absolute top-4 right-6 font-serif font-bold select-none pointer-events-none"
              style={{ fontSize: "7rem", lineHeight: 1, color: "rgba(200,98,42,0.07)" }}
            >
              {step.number}
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex flex-col gap-5 flex-1"
              >
                {/* Step label */}
                <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "#c8622a" }}>
                  Étape {step.number}
                </span>

                {/* Title */}
                <h3
                  className="font-serif leading-snug"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "var(--text-secondary)", fontWeight: 500 }}
                >
                  {step.title}
                </h3>

                {/* Separator */}
                <div className="w-12 h-0.5 rounded-full" style={{ backgroundColor: "#c8622a" }} />

                {/* Description */}
                <p className="font-sans leading-relaxed" style={{ color: "var(--text-secondary-muted)", fontSize: "0.95rem" }}>
                  {step.description}
                </p>

                {/* Bullets */}
                {step.bullets && (
                  <ul className="flex flex-col gap-2.5 mt-1">
                    {step.bullets.map((bullet, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.07, duration: 0.3 }}
                        className="flex items-start gap-3 font-sans"
                        style={{ color: "var(--text-secondary-muted)", fontSize: "0.9rem" }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "#c8622a" }}
                        />
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Step dots navigation */}
            <div className="flex gap-2 mt-8 relative z-10">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: activeStep === i ? "24px" : "8px",
                    height: "8px",
                    backgroundColor: activeStep === i ? "#c8622a" : "rgba(200,98,42,0.25)",
                  }}
                  aria-label={`Étape ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Inline CTA */}
        <motion.div
          className="mt-12 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
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
