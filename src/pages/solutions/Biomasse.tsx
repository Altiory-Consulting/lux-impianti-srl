import { Flame, Leaf, TrendingDown } from "lucide-react";
import SolutionPage from "@/components/SolutionPage";

const Biomasse = () => (
  <SolutionPage
    eyebrow="Biomasse"
    title={<>Energia da<br /><span className="text-accent">biomasse.</span></>}
    description="Riscaldamento sostenibile sfruttando materie prime naturali e rinnovabili."
    intro={{
      heading: "Calore sostenibile dalla natura",
      paragraphs: [
        "Le caldaie a biomassa utilizzano pellet, cippato o legna per produrre calore in modo efficiente e a basso impatto ambientale.",
        "Una soluzione ideale per chi vuole un riscaldamento naturale, economico e indipendente dai combustibili fossili.",
      ],
    }}
    benefits={["Combustibile economico", "Fonte rinnovabile", "Bilancio CO₂ neutro", "Indipendenza dal gas", "Detrazioni fiscali", "Tecnologie ad alta efficienza"]}
    features={[
      { icon: <Flame className="h-7 w-7" />, title: "A pellet", desc: "Caldaie automatiche, pulite e a basso consumo." },
      { icon: <Leaf className="h-7 w-7" />, title: "A cippato", desc: "Ideali per grandi edifici e usi industriali." },
      { icon: <TrendingDown className="h-7 w-7" />, title: "Risparmio", desc: "Costi ridotti rispetto a gasolio e GPL." },
    ]}
    ctaTitle="Scegli il calore naturale"
    ctaText="Preventivo personalizzato per la tua caldaia a biomassa."
  />
);

export default Biomasse;
