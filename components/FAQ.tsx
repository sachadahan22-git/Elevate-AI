"use client";

import {
  CustomAccordion,
  CustomAccordionItem,
  CustomAccordionTrigger,
  CustomAccordionContent,
} from "@/components/ui/faq-accordion";

const faqs = [
  {
    question: "Faut-il avoir des connaissances techniques pour participer ?",
    answer:
      "Aucune compétence technique n'est requise. Nos formations sont conçues pour des professionnels de tous niveaux. Nous adaptons le contenu au niveau de chaque groupe lors de l'audit préalable.",
  },
  {
    question: "Combien de participants peut-on accueillir par session ?",
    answer:
      "Nous recommandons 6 à 12 participants par session pour garantir une approche pratique et personnalisée. Pour des groupes plus importants, nous proposons des sessions multiples ou un format sur-mesure.",
  },
  {
    question: "Les formations se déroulent-elles en présentiel ou en distanciel ?",
    answer:
      "Les deux formats sont disponibles. Les sessions en présentiel dans vos locaux favorisent l'engagement et la dynamique de groupe. Le distanciel via Teams ou Zoom offre la même qualité avec plus de flexibilité.",
  },
  {
    question: "Quels outils IA sont abordés pendant la formation ?",
    answer:
      "Nous couvrons les outils les plus pertinents pour votre secteur : ChatGPT, Claude, Gemini, Copilot, Perplexity, Make, n8n, Notion AI… Le programme est défini lors de l'audit préalable selon vos cas d'usage réels.",
  },
  {
    question: "La formation est-elle finançable via mon OPCO ?",
    answer:
      "Oui, nos formations sont éligibles aux dispositifs de financement OPCO. Nous vous accompagnons dans les démarches administratives et fournissons tous les documents nécessaires (convention, attestation de présence, bilan de compétences).",
  },
  {
    question: "Que se passe-t-il après la formation ?",
    answer:
      "Chaque participant reçoit un guide personnalisé récapitulatif, une sélection de ressources et accède à notre support email pendant 15 ou 30 jours selon la formule. La formule journée inclut également une session de suivi à J+30.",
  },
  {
    question: "Proposez-vous des formations récurrentes ou un suivi long terme ?",
    answer:
      "Oui, nous proposons des programmes sur-mesure multi-sessions, des abonnements trimestriels et la formation de vos formateurs internes. Contactez-nous pour un devis adapté à votre organisation.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="section-padding"
      style={{ backgroundColor: "#f5f3ee" }}
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="label block mb-4">Questions fréquentes</span>
          <h2
            className="font-serif leading-tight"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              color: "var(--text-secondary)",
              fontWeight: 400,
            }}
          >
            FAQ
          </h2>
        </div>

        {/* Accordion */}
        <CustomAccordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <CustomAccordionItem key={index} value={`item-${index}`}>
              <CustomAccordionTrigger>{faq.question}</CustomAccordionTrigger>
              <CustomAccordionContent>{faq.answer}</CustomAccordionContent>
            </CustomAccordionItem>
          ))}
        </CustomAccordion>

      </div>
    </section>
  );
}
