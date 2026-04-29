"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { ElevateAILogo } from "@/components/ui/elevate-ai-logo";

/* ── Inline SVG social icons ── */
function IconLinkedin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function IconX({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const socialLinks = [
  { icon: IconLinkedin,  label: "LinkedIn",  href: "https://linkedin.com"  },
  { icon: IconX,         label: "Twitter/X", href: "https://twitter.com"   },
  { icon: IconInstagram, label: "Instagram", href: "https://instagram.com" },
];

const formationLinks = [
  { text: "Pourquoi l'IA",     href: "#pourquoi"          },
  { text: "Comment ça marche", href: "#comment-ca-marche" },
  { text: "Tarifs",            href: "#tarifs"            },
  { text: "Témoignages",       href: "#temoignages"       },
];

const entrepriseLinks = [
  { text: "Mentions légales",             href: "/mentions-legales" },
  { text: "Politique de confidentialité", href: "/confidentialite"  },
  { text: "CGV",                          href: "/cgv"              },
  { text: "À propos",                     href: "#"                 },
];

const helpfulLinks = [
  { text: "FAQ",               href: "#faq",     hasIndicator: false },
  { text: "Contact",           href: "#contact", hasIndicator: false },
  { text: "Réserver un appel", href: "#contact", hasIndicator: true  },
];

const contactInfo = [
  { icon: Mail,   text: "contact@elevate-ai.fr",  href: "mailto:contact@elevate-ai.fr", isAddress: false },
  { icon: Phone,  text: "+33 (0)1 XX XX XX XX",   href: "tel:+33100000000",             isAddress: false },
  { icon: MapPin, text: "Paris & distanciel",      href: "#",                            isAddress: true  },
];

export default function Footer() {
  return (
    <footer className="w-full mt-0 px-4 pb-4 sm:px-6 lg:px-8">
      <div
        className="relative mx-auto max-w-screen-xl overflow-hidden rounded-3xl pt-16 pb-6"
        style={{
          background: "linear-gradient(135deg, rgba(212,120,58,0.10) 0%, rgba(200,98,42,0.06) 40%, rgba(255,200,150,0.08) 100%)",
          border: "1px solid rgba(200,98,42,0.15)",
        }}
      >
        {/* Ambient glow top */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-40"
          style={{
            background: "radial-gradient(ellipse, rgba(212,120,58,0.25) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="relative px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

            {/* ── Brand ── */}
            <div>
              <Link href="/" className="flex justify-center sm:justify-start">
                <ElevateAILogo iconSize="w-9 h-9" textSize="text-2xl" />
              </Link>

              <p
                className="mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left font-sans text-sm"
                style={{ color: "var(--text-primary-muted)" }}
              >
                Formations IA pour entreprises. Pratiques, sur-mesure et orientées résultats. Éligible OPCO.
              </p>

              <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-200"
                      style={{ color: "#c8622a" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#b85a22")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#c8622a")}
                    >
                      <span className="sr-only">{label}</span>
                      <Icon className="w-6 h-6" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Link columns ── */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">

              {/* Formation */}
              <div className="text-center sm:text-left">
                <p
                  className="font-sans text-xs font-bold tracking-widest uppercase"
                  style={{ color: "#c8622a" }}
                >
                  Formation
                </p>
                <ul className="mt-8 space-y-4 text-sm">
                  {formationLinks.map(({ text, href }) => (
                    <li key={text}>
                      <a
                        href={href}
                        className="font-sans transition-colors duration-200"
                        style={{ color: "var(--text-primary-muted)" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#c8622a")}
                        onMouseLeave={e => (e.currentTarget.style.color = "var(--text-primary-muted)")}
                      >
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Entreprise */}
              <div className="text-center sm:text-left">
                <p
                  className="font-sans text-xs font-bold tracking-widest uppercase"
                  style={{ color: "#c8622a" }}
                >
                  Entreprise
                </p>
                <ul className="mt-8 space-y-4 text-sm">
                  {entrepriseLinks.map(({ text, href }) => (
                    <li key={text}>
                      <a
                        href={href}
                        className="font-sans transition-colors duration-200"
                        style={{ color: "var(--text-primary-muted)" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#c8622a")}
                        onMouseLeave={e => (e.currentTarget.style.color = "var(--text-primary-muted)")}
                      >
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Liens utiles */}
              <div className="text-center sm:text-left">
                <p
                  className="font-sans text-xs font-bold tracking-widest uppercase"
                  style={{ color: "#c8622a" }}
                >
                  Liens utiles
                </p>
                <ul className="mt-8 space-y-4 text-sm">
                  {helpfulLinks.map(({ text, href, hasIndicator }) => (
                    <li key={text}>
                      <a
                        href={href}
                        className={hasIndicator ? "group flex justify-center gap-1.5 sm:justify-start items-center" : "font-sans transition-colors duration-200"}
                        style={!hasIndicator ? { color: "var(--text-primary-muted)" } : undefined}
                        onMouseEnter={e => { if (!hasIndicator) (e.currentTarget as HTMLElement).style.color = "#c8622a"; }}
                        onMouseLeave={e => { if (!hasIndicator) (e.currentTarget as HTMLElement).style.color = "var(--text-primary-muted)"; }}
                      >
                        <span
                          className="font-sans transition-colors duration-200"
                          style={{ color: "var(--text-primary-muted)" }}
                        >
                          {text}
                        </span>
                        {hasIndicator && (
                          <span className="relative flex size-2 flex-shrink-0">
                            <span
                              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                              style={{ backgroundColor: "#c8622a" }}
                            />
                            <span
                              className="relative inline-flex size-2 rounded-full"
                              style={{ backgroundColor: "#c8622a" }}
                            />
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="text-center sm:text-left">
                <p
                  className="font-sans text-xs font-bold tracking-widest uppercase"
                  style={{ color: "#c8622a" }}
                >
                  Contact
                </p>
                <ul className="mt-8 space-y-4 text-sm">
                  {contactInfo.map(({ icon: Icon, text, href, isAddress }) => (
                    <li key={text}>
                      <a
                        href={href}
                        className="flex items-center justify-center gap-1.5 sm:justify-start"
                      >
                        <Icon className="w-5 h-5 flex-shrink-0" style={{ color: "#c8622a" }} />
                        {isAddress ? (
                          <address
                            className="not-italic font-sans flex-1 -mt-0.5"
                            style={{ color: "var(--text-primary-muted)" }}
                          >
                            {text}
                          </address>
                        ) : (
                          <span
                            className="font-sans flex-1"
                            style={{ color: "var(--text-primary-muted)" }}
                          >
                            {text}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div
            className="mt-12 pt-6"
            style={{ borderTop: "1px solid rgba(200,98,42,0.2)" }}
          >
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="font-sans text-sm" style={{ color: "var(--text-primary-faint)" }}>
                <span className="block sm:inline">Tous droits réservés.</span>
              </p>
              <p
                className="font-sans text-sm mt-4 sm:order-first sm:mt-0"
                style={{ color: "var(--text-primary-faint)" }}
              >
                © {new Date().getFullYear()} Elevate AI · Éligible OPCO · Certifié Qualiopi
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
