"use client";

const clients = [
  "Groupe Renault",
  "BNP Paribas",
  "Accor Hotels",
  "Schneider Electric",
  "Decathlon",
  "Danone",
];

export default function Logos() {
  return (
    <section
      id="clients"
      style={{
        backgroundColor: "var(--section-bg-primary)",
        borderTop: "1px solid var(--separator)",
        borderBottom: "1px solid var(--separator)",
        padding: "3rem 1.5rem",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <p
          className="text-center font-mono text-xs uppercase tracking-widest mb-8"
          style={{ color: "var(--text-primary-faint)" }}
        >
          Ils nous font confiance
        </p>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, var(--section-bg-primary), transparent)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, var(--section-bg-primary), transparent)" }}
          />

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {clients.map((client, i) => (
              <div key={i} className="flex items-center gap-2 group">
                <div
                  className="w-6 h-6 rounded-sm flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(200,98,42,0.1)",
                    border: "1px solid rgba(200,98,42,0.15)",
                  }}
                >
                  <span className="font-serif text-xs font-bold" style={{ color: "rgba(200,98,42,0.6)" }}>
                    {client[0]}
                  </span>
                </div>
                <span
                  className="font-sans text-sm font-medium tracking-wide transition-colors duration-200 hover:opacity-80"
                  style={{ color: "var(--text-primary-faint)" }}
                >
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
