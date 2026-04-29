"use client";

export default function CTAFinal() {
  return (
    <section
      id="cta-final"
      className="relative"
      style={{ backgroundColor: "#020617", padding: "6rem 1.5rem" }}
    >
      {/* Dark radial glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span
          className="inline-block mb-6 font-mono text-xs uppercase tracking-widest"
          style={{ color: "rgba(200,98,42,0.8)" }}
        >
          Passez à l&apos;action
        </span>

        <h2
          className="font-serif leading-tight mb-6"
          style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "#f0ece2", fontWeight: 400 }}
        >
          Vos équipes méritent de{" "}
          <em style={{ fontStyle: "italic", color: "#c8622a" }}>maîtriser</em>
          <br />
          l&apos;IA qui transforme votre secteur.
        </h2>

        <p
          className="font-sans max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ fontSize: "1.05rem", color: "rgba(240,236,226,0.65)", fontWeight: 300 }}
        >
          Réservez votre consultation gratuite. En 30 minutes, nous identifions ensemble les opportunités IA les plus impactantes pour votre organisation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-sans text-base font-medium transition-all duration-300"
            style={{ backgroundColor: "#c8622a", color: "#f0ece2", border: "1px solid #c8622a" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#b85a22";
              (e.currentTarget as HTMLElement).style.borderColor = "#b85a22";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(200,98,42,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#c8622a";
              (e.currentTarget as HTMLElement).style.borderColor = "#c8622a";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Réserver ma consultation gratuite
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="tel:+33000000000"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-sans text-base font-medium transition-all duration-300"
            style={{ backgroundColor: "transparent", color: "#f0ece2", border: "1px solid rgba(240,236,226,0.25)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(240,236,226,0.6)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(240,236,226,0.25)")}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 3a1 1 0 0 1 1-1h2.5a.5.5 0 0 1 .479.355l.928 3.09a.5.5 0 0 1-.168.544L5.5 6.5a8.001 8.001 0 0 0 4 4l.511-1.239a.5.5 0 0 1 .544-.168l3.09.928A.5.5 0 0 1 14 10.5V13a1 1 0 0 1-1 1h-1C6.477 14 2 9.523 2 4V3z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
            </svg>
            Nous appeler
          </a>
        </div>

        <p className="mt-8 font-sans text-xs" style={{ color: "rgba(240,236,226,0.35)" }}>
          Consultation 100% gratuite · Sans engagement · Réponse sous 24h
        </p>
      </div>
    </section>
  );
}
