import { Wind, Zap, Leaf } from "lucide-react";
import SolutionPage from "@/components/SolutionPage";

const Eolico = () => (
  <SolutionPage
    eyebrow="Eolico"
    title={<>Energia<br /><span className="text-accent">eolica.</span></>}
    description="Il vento come fonte di energia rinnovabile per un futuro sostenibile."
    intro={{
      heading: "La forza del vento al tuo servizio",
      paragraphs: [
        "L'energia eolica rappresenta una delle fonti rinnovabili più promettenti. Le turbine eoliche convertono l'energia cinetica del vento in elettricità pulita.",
        "Soluzione ideale per aree con buona ventosità, può integrare o sostituire altre fonti energetiche garantendo indipendenza e sostenibilità.",
      ],
    }}
    benefits={["Energia 100% rinnovabile", "Zero emissioni di CO₂", "Indipendenza energetica", "Bassi costi operativi", "Lunga durata degli impianti", "Incentivi statali"]}
    features={[
      { icon: <Wind className="h-7 w-7" />, title: "Mini-eolico", desc: "Turbine domestiche fino a 60kW per uso privato." },
      { icon: <Zap className="h-7 w-7" />, title: "Produzione 24/7", desc: "Generazione elettrica anche di notte e con cielo coperto." },
      { icon: <Leaf className="h-7 w-7" />, title: "Sostenibile", desc: "Impatto ambientale minimo e lunga vita utile." },
    ]}
    ctaTitle="Scopri se è la soluzione per te"
    ctaText="Valutazione gratuita della ventosità e fattibilità del tuo progetto."
  />
);

export default Eolico;
