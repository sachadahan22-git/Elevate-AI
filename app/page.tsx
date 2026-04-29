import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Demo from "@/components/Demo";
import Benefices from "@/components/Benefices";
import HowItWorks from "@/components/HowItWorks";
import Tarifs from "@/components/Tarifs";
import Temoignages from "@/components/Temoignages";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* 1. Navbar — Logo + menu + CTA */}
      <Navbar />

      {/* 2. Hero — Proposition de valeur + sous-titre + CTV */}
      <Hero />

      {/* 3. Démo — Vidéo de présentation 1-2 min */}
      <Demo />

      {/* 4. Bénéfices — Quels sont les avantages ? */}
      <Benefices />

      {/* 6. Comment ça marche — 4 étapes */}
      <HowItWorks />

      {/* 7. Tarifs — Présentation des offres */}
      <Tarifs />

      {/* 8. Témoignages — Vrais témoignages + photos */}
      <Temoignages />

      {/* 9. FAQ — Réponses aux questions fréquentes */}
      <FAQ />

      {/* 10. CTA final — Rappel du passage à l'action */}
      <CTAFinal />

      {/* 11. Contact — Formulaire */}
      <Contact />

      {/* 12. Footer — Logo + menu + mentions légales */}
      <Footer />
    </>
  );
}
