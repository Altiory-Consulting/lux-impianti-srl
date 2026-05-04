import { Wind, Thermometer, Battery } from "lucide-react";
import SolutionPage from "@/components/SolutionPage";

const Climatizzazione = () => (
  <SolutionPage
    eyebrow="Climatizzazione"
    title={<>Pompa<br /><span className="text-accent">di calore.</span></>}
    description="Comfort in ogni stagione con la massima efficienza energetica. Riscalda, raffresca e produce acqua calda con un solo sistema."
    intro={{
      heading: "Tecnologia intelligente per il tuo comfort",
      paragraphs: [
        "La pompa di calore è una tecnologia avanzata che sfrutta l'energia termica presente nell'aria, nell'acqua o nel terreno per riscaldare e raffrescare gli ambienti con un'efficienza superiore rispetto ai sistemi tradizionali.",
        "A differenza di una caldaia che brucia combustibile, la pompa di calore trasferisce il calore da una fonte esterna all'interno dell'edificio. Questo processo richiede molta meno energia, con un risparmio che può raggiungere il 75% sui costi di riscaldamento.",
        "Le moderne pompe di calore sono reversibili: riscaldano d'inverno e raffrescano d'estate, sostituendo sia caldaia che condizionatore con un unico sistema efficiente.",
      ],
    }}
    benefits={[
      "Risparmio energetico fino al 75%",
      "Riscaldamento e raffrescamento con un solo sistema",
      "Bassissime emissioni di CO₂",
      "Incentivi fiscali e Conto Termico",
      "Comfort ottimale tutto l'anno",
      "Bassa manutenzione e lunga durata",
    ]}
    features={[
      { icon: <Wind className="h-7 w-7" />, title: "Aria-Aria", desc: "Ideale per climatizzare singoli ambienti. Installazione semplice e costi contenuti." },
      { icon: <Thermometer className="h-7 w-7" />, title: "Aria-Acqua", desc: "Perfetta per impianti a pavimento o radiatori. Sostituisce la caldaia tradizionale." },
      { icon: <Battery className="h-7 w-7" />, title: "Geotermica", desc: "Massima efficienza sfruttando il calore costante del sottosuolo." },
    ]}
    services={[
      "Sopralluogo e analisi termica gratuita",
      "Progettazione dell'impianto su misura",
      "Installazione professionale certificata",
      "Pratiche per incentivi e detrazioni",
      "Manutenzione programmata periodica",
      "Assistenza tecnica dedicata",
    ]}
    ctaTitle="Passa alla pompa di calore"
    ctaText="Scopri quanto puoi risparmiare con un sistema di climatizzazione efficiente e moderno."
  />
);

export default Climatizzazione;
