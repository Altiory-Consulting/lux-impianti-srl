import { Euro, Sun, Users } from "lucide-react";
import SolutionPage from "@/components/SolutionPage";

const RedditoEnergetico = () => (
  <SolutionPage
    eyebrow="Reddito Energetico"
    title={<>Reddito<br /><span className="text-accent">energetico.</span></>}
    description="Un impianto fotovoltaico a costo zero per le famiglie a basso reddito."
    intro={{
      heading: "Energia pulita per tutti",
      paragraphs: [
        "Il Reddito Energetico Nazionale finanzia l'installazione di impianti fotovoltaici per famiglie con ISEE basso, completamente a costo zero.",
        "Ti accompagniamo in tutte le pratiche per accedere al fondo e installare il tuo impianto senza alcun anticipo economico.",
      ],
    }}
    benefits={["Impianto totalmente gratuito", "Risparmio immediato in bolletta", "Nessun anticipo richiesto", "Pratiche gestite da noi", "Indipendenza energetica", "Per famiglie con ISEE fino a 30.000€"]}
    features={[
      { icon: <Euro className="h-7 w-7" />, title: "Costo zero", desc: "Finanziamento al 100% dal Fondo Nazionale." },
      { icon: <Sun className="h-7 w-7" />, title: "Energia pulita", desc: "Autoconsumo solare immediato." },
      { icon: <Users className="h-7 w-7" />, title: "Per le famiglie", desc: "Pensato per nuclei a basso reddito." },
    ]}
    ctaTitle="Verifica i requisiti"
    ctaText="Contattaci per scoprire se hai diritto al Reddito Energetico e iniziare le pratiche gratuitamente."
  />
);

export default RedditoEnergetico;
