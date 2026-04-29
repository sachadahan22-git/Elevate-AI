"use client";

import { useState } from "react";

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
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="label block mb-4">Contact</span>
          <h2
            className="font-serif leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 400, color: "var(--text-primary)" }}
          >
            Parlons de votre{" "}
            <em style={{ color: "#c8622a", fontStyle: "italic" }}>projet</em>
          </h2>
          <p
            className="font-sans max-w-md mx-auto"
            style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--text-primary-muted)" }}
          >
            Décrivez votre contexte et vos équipes. Nous vous répondons dans les 24h avec une proposition sur-mesure.
          </p>
        </div>

        {/* Glowing form container */}
        <div
          className="relative rounded-[2rem] p-8 md:p-10"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            boxShadow: "0 0 60px rgba(200,98,42,0.12), 0 0 120px rgba(200,98,42,0.06), 0 8px 48px rgba(0,0,0,0.08)",
          }}
        >
          {/* Ambient glow layer */}
          <div
            className="pointer-events-none absolute -inset-px rounded-[2rem]"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(200,98,42,0.08) 0%, transparent 70%)",
            }}
          />

          {submitted ? (
            <div className="relative flex flex-col items-center justify-center py-16 gap-5 text-center">
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
            <form onSubmit={handleSubmit} className="relative flex flex-col gap-5">

              {/* Row 1 — Prénom + Nom */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Prénom" required>
                  <Input
                    type="text"
                    placeholder="Jean"
                    value={formData.firstName}
                    onChange={set("firstName")}
                    required
                  />
                </Field>
                <Field label="Nom" required>
                  <Input
                    type="text"
                    placeholder="Dupont"
                    value={formData.lastName}
                    onChange={set("lastName")}
                    required
                  />
                </Field>
              </div>

              {/* Row 2 — Email */}
              <Field label="Email" required>
                <Input
                  type="email"
                  placeholder="jean@entreprise.fr"
                  value={formData.email}
                  onChange={set("email")}
                  required
                />
              </Field>

              {/* Row 3 — Téléphone */}
              <Field label="Téléphone">
                <Input
                  type="tel"
                  placeholder="+33 6 00 00 00 00"
                  value={formData.phone}
                  onChange={set("phone")}
                />
              </Field>

              {/* Row 4 — Sujet */}
              <Field label="Sujet" required>
                <Input
                  type="text"
                  placeholder="Formation IA pour mon équipe"
                  value={formData.subject}
                  onChange={set("subject")}
                  required
                />
              </Field>

              {/* Row 5 — Message */}
              <Field label="Message">
                <textarea
                  rows={5}
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

        {/* Contact details below */}
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {[
            { label: "Email", value: "contact@elevate-ai.fr", href: "mailto:contact@elevate-ai.fr" },
            { label: "Téléphone", value: "+33 (0)1 XX XX XX XX", href: "tel:+33100000000" },
            { label: "Calendly", value: "Réserver un créneau", href: "#" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="label mb-1">{item.label}</p>
              <a
                href={item.href}
                className="font-sans text-sm transition-colors duration-200 hover:text-[#c8622a]"
                style={{ color: "var(--text-primary-muted)" }}
              >
                {item.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Shared input base style ───────────────────────────────── */
const inputBaseStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.875rem 1.125rem",
  backgroundColor: "transparent",
  border: "1px solid var(--card-border)",
  borderRadius: "0.75rem",
  color: "var(--text-primary)",
  fontSize: "0.9rem",
  fontFamily: "var(--font-inter), system-ui, sans-serif",
  outline: "none",
  transition: "border-color 0.2s",
};

/* ─── Input component ───────────────────────────────────────── */
function Input({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
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

/* ─── Field wrapper ─────────────────────────────────────────── */
function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="font-sans text-sm font-semibold"
        style={{ color: "var(--text-primary)" }}
      >
        {label}
        {required && <span style={{ color: "#c8622a" }}> *</span>}
      </label>
      {children}
    </div>
  );
}
