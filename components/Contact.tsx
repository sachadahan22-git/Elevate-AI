"use client";

import { useState } from "react";

const checkItems = [
  "Formations adaptées à votre niveau",
  "Workflows & automatisations sur-mesure",
  "Résultats concrets dès la première semaine",
];

const avatars = [
  { initials: "ML", bg: "#6b4f3a" },
  { initials: "SR", bg: "#3a6b4f" },
  { initials: "PD", bg: "#3a4f6b" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const set = (k: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData((prev) => ({ ...prev, [k]: e.target.value }));

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ backgroundColor: "var(--section-bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left column ── */}
          <div>
            <span className="label block mb-5">Prenez rendez-vous</span>

            <h2
              className="font-serif leading-tight mb-6"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 700, color: "var(--text-primary)" }}
            >
              Passez à l'IA.<br />Maintenant.
            </h2>

            <p
              className="font-sans mb-5 max-w-md"
              style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--text-primary-muted)" }}
            >
              Votre équipe perd du temps sur des tâches que l'IA peut automatiser en quelques minutes. Chez Elevate AI, on vous forme et on intègre les bons workflows directement dans votre quotidien — que vous partiez de zéro ou que vous soyez déjà dans la course.
            </p>

            <p
              className="font-sans mb-8"
              style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--text-primary-muted)" }}
            >
              Un rendez-vous suffit pour voir ce qui est possible.
            </p>

            {/* Checkmarks */}
            <ul className="flex flex-col gap-4 mb-10">
              {checkItems.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(200,98,42,0.18)", border: "1px solid rgba(200,98,42,0.3)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7l3 3 6-6" stroke="#c8622a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="font-sans" style={{ fontSize: "0.95rem", color: "var(--text-primary-muted)" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Separator */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem" }}>
              <div className="flex items-center gap-4">
                {/* Avatar stack */}
                <div className="flex -space-x-2">
                  {avatars.map(({ initials, bg }) => (
                    <div
                      key={initials}
                      className="w-9 h-9 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: bg, outline: "2px solid var(--section-bg-primary)", fontSize: "0.7rem", fontWeight: 600, color: "#f0ece2", fontFamily: "var(--font-inter)" }}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-sans font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                    +50 entreprises formées
                  </p>
                  <p className="font-sans text-xs" style={{ color: "var(--text-primary-faint)" }}>
                    débutantes comme expérimentées
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right column — Form card ── */}
          <div
            className="rounded-2xl p-8"
            style={{
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              boxShadow: "0 8px 48px rgba(0,0,0,0.18)",
            }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 gap-5 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(200,98,42,0.12)", border: "1px solid rgba(200,98,42,0.25)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="#c8622a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-serif text-3xl" style={{ color: "var(--text-primary)", fontWeight: 400 }}>
                  Message envoyé !
                </p>
                <p className="font-sans text-sm" style={{ color: "var(--text-primary-muted)" }}>
                  Nous vous répondons dans les 24h.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Row 1 — Prénom + Nom */}
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Prénom" required>
                    <Input type="text" placeholder="Jean" value={formData.firstName} onChange={set("firstName")} required />
                  </Field>
                  <Field label="Nom" required>
                    <Input type="text" placeholder="Dupont" value={formData.lastName} onChange={set("lastName")} required />
                  </Field>
                </div>

                {/* Email */}
                <Field label="Email" required>
                  <Input type="email" placeholder="jean@entreprise.fr" value={formData.email} onChange={set("email")} required />
                </Field>

                {/* Téléphone */}
                <Field label="Téléphone" required>
                  <Input type="tel" placeholder="+33 6 00 00 00 00" value={formData.phone} onChange={set("phone")} required />
                </Field>

                {/* Sujet */}
                <Field label="Sujet" required>
                  <Input type="text" placeholder="Formation IA pour mon équipe" value={formData.subject} onChange={set("subject")} required />
                </Field>

                {/* Message */}
                <Field label="Message">
                  <textarea
                    rows={4}
                    placeholder="Décrivez brièvement vos équipes et vos besoins…"
                    value={formData.message}
                    onChange={set("message")}
                    className="w-full resize-y focus:outline-none transition-all duration-200"
                    style={inputBaseStyle}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(200,98,42,0.55)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--card-border)")}
                  />
                </Field>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 font-sans font-semibold text-base rounded-xl transition-all duration-300"
                  style={{
                    backgroundColor: "#d4783a",
                    color: "#f0ece2",
                    border: "none",
                    cursor: "pointer",
                    letterSpacing: "0.02em",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#b85a22";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(184,90,34,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#d4783a";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  Envoyer le message
                </button>

                <p className="text-center font-sans text-xs" style={{ color: "var(--text-primary-faint)" }}>
                  En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─── Shared input base style ── */
const inputBaseStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  backgroundColor: "transparent",
  border: "1px solid var(--card-border)",
  borderRadius: "0.625rem",
  color: "var(--text-primary)",
  fontSize: "0.9rem",
  fontFamily: "var(--font-inter), system-ui, sans-serif",
  outline: "none",
  transition: "border-color 0.2s",
};

function Input({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full focus:outline-none transition-all duration-200"
      style={inputBaseStyle}
      onFocus={(e) => (e.target.style.borderColor = "rgba(200,98,42,0.55)")}
      onBlur={(e) => (e.target.style.borderColor = "var(--card-border)")}
    />
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-sans text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
        {label}
        {required && <span style={{ color: "#c8622a" }}> *</span>}
      </label>
      {children}
    </div>
  );
}
