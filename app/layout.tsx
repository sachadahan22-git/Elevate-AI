import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elevate AI — Formation Intelligence Artificielle pour Entreprises",
  description:
    "Intégrez l'IA dans vos workflows métiers. Formations sur-mesure demi-journée ou journée entière pour vos équipes. Automatisation, productivité, montée en compétences.",
  keywords: [
    "formation IA entreprise",
    "intelligence artificielle formation",
    "automatisation workflows",
    "formation ChatGPT entreprise",
    "upskilling IA",
    "transformation digitale IA",
  ],
  openGraph: {
    title: "Elevate AI — Formation Intelligence Artificielle pour Entreprises",
    description:
      "Maîtrisez l'IA, ne la subissez plus. Formations pratiques et personnalisées pour vos équipes.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body className="min-h-full antialiased">
        {children}
      </body>
    </html>
  );
}
