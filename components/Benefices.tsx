"use client";

const benefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#c8622a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Intégration IA dans vos workflows",
    description: "Identifiez précisément où l'IA génère le plus de valeur dans vos processus existants. Vos équipes repartent avec des cas d'usage concrets, testés le jour même.",
    stat: "+40%",
    statLabel: "de productivité moyenne constatée",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="#c8622a" strokeWidth="1.5" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" stroke="#c8622a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Automatisation des tâches répétitives",
    description: "Rédaction, analyse, reporting, recherche d'information — vos collaborateurs se libèrent des tâches à faible valeur ajoutée et se recentrent sur ce qui compte.",
    stat: "3h/jour",
    statLabel: "économisées par collaborateur",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#c8622a" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="#c8622a" strokeWidth="1.5" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#c8622a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Montée en compétences sereine",
    description: "L'IA n'est pas une menace, c'est un levier. Nos formations démystifient les outils et renforcent la confiance de vos équipes face aux transformations en cours.",
    stat: "100%",
    statLabel: "des participants se déclarent à l'aise après la session",
  },
];

export default function Benefices() {
  return (
    <section
      id="pourquoi"
      className="section-padding"
      style={{ backgroundColor: "var(--section-bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="label block mb-4">Bénéfices</span>
          <h2
            className="font-serif leading-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", color: "var(--text-primary)", fontWeight: 400 }}
          >
            Quels sont les <em style={{ color: "#c8622a" }}>avantages</em> concrets ?
          </h2>
          <p
            className="font-sans mt-4 max-w-xl mx-auto"
            style={{ color: "var(--text-primary-muted)", fontSize: "1rem", lineHeight: "1.7" }}
          >
            Chaque formation est conçue pour produire des résultats mesurables dès le retour au bureau.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="backdrop-blur-[14px] rounded-2xl shadow-xl px-7 py-8 flex flex-col gap-6 transition-all duration-300
                bg-gradient-to-br from-black/5 to-black/0 border border-black/10
                dark:from-white/10 dark:to-white/5 dark:border-white/10 dark:backdrop-brightness-[0.91]
                hover:shadow-2xl"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(200,98,42,0.08)", border: "1px solid rgba(200,98,42,0.15)" }}
              >
                {b.icon}
              </div>

              {/* Title */}
              <h3
                className="font-serif text-xl leading-tight"
                style={{ color: "var(--text-primary)", fontWeight: 500 }}
              >
                {b.title}
              </h3>

              {/* Separator */}
              <div className="w-full h-px bg-[linear-gradient(90deg,transparent,rgba(200,98,42,0.3)_50%,transparent)]" />

              {/* Description */}
              <p
                className="font-sans text-sm leading-relaxed flex-1"
                style={{ color: "var(--text-primary-muted)" }}
              >
                {b.description}
              </p>

              {/* Stat */}
              <div className="pt-2">
                <span
                  className="font-serif block leading-none mb-1"
                  style={{ fontSize: "2rem", color: "#c8622a", fontWeight: 500 }}
                >
                  {b.stat}
                </span>
                <span className="font-sans text-xs" style={{ color: "var(--text-primary-faint)" }}>
                  {b.statLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
