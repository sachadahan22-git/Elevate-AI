import { ModernPricingPage, type PricingCardProps } from "@/components/ui/animated-glassy-pricing";

const plans: PricingCardProps[] = [
  {
    planName: "Demi-journée",
    description: "Introduction pratique à l'IA pour une équipe jusqu'à 12 personnes. Résultats dès le lendemain.",
    price: "1 490",
    priceUnit: "€ HT / session · 4h",
    features: [
      "Audit préalable de vos besoins",
      "Formation sur 1 outil IA principal",
      "Exercices sur vos propres tâches",
      "Guide personnalisé post-formation",
      "Support email 15 jours",
    ],
    buttonText: "Réserver cette session",
    buttonVariant: "secondary",
    href: "#contact",
  },
  {
    planName: "Journée complète",
    description: "Transformation profonde des méthodes de travail. La formule la plus complète et la plus impactante.",
    price: "2 490",
    priceUnit: "€ HT / session · 7h",
    features: [
      "Audit préalable approfondi",
      "Formation sur 3 outils IA complémentaires",
      "Ateliers pratiques par métier",
      "Plan d'action personnalisé",
      "Support email 30 jours",
      "Session de suivi à J+30 (30 min)",
    ],
    buttonText: "Réserver cette session",
    buttonVariant: "primary",
    isPopular: true,
    href: "#contact",
  },
  {
    planName: "Sur-mesure",
    description: "Programme multi-sessions, formation de formateurs ou déploiement à grande échelle.",
    price: "Sur devis",
    priceUnit: "",
    features: [
      "Programme multi-sessions",
      "Formation de vos formateurs internes",
      "Contenu entièrement personnalisé",
      "Accompagnement change management",
      "Support dédié",
    ],
    buttonText: "Nous contacter",
    buttonVariant: "secondary",
    href: "#contact",
  },
];

export default function Tarifs() {
  return (
    <ModernPricingPage
      sectionLabel="Tarifs"
      sectionTitle={
        <>
          Choisissez votre <em style={{ color: "#c8622a" }}>format</em>
        </>
      }
      subtitle="Toutes les sessions sont éligibles aux dispositifs de formation professionnelle (OPCO)."
      plans={plans}
      showAnimatedBackground={true}
    />
  );
}
