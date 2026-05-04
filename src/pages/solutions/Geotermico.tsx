import { Mountain, Thermometer, Leaf } from "lucide-react";
import SolutionPage from "@/components/SolutionPage";

const Geotermico = () => (
  <SolutionPage
    eyebrow="Geotermico"
    title={<>Energia<br /><span className="text-accent">geotermica.</span></>}
    description="Sfrutta il calore costante del sottosuolo per il massimo dell'efficienza energetica."
    intro={{
      heading: "Il calore della Terra al tuo servizio",
      paragraphs: [
        "La geotermia sfrutta la temperatura costante del sottosuolo per riscaldare e raffrescare gli edifici con efficienza eccezionale.",
        "Una tecnologia matura, silenziosa e invisibile che garantisce risparmi rilevanti su tutta la vita utile dell'impianto.",
      ],
    }}
    benefits={["Massima efficienza energetica", "Funzionamento silenzioso", "Riscalda e raffresca", "Lunghissima durata", "Bassi costi di gestione", "Incentivi disponibili"]}
    features={[
      { icon: <Mountain className="h-7 w-7" />, title: "Sonde verticali", desc: "Per terreni di dimensioni ridotte, fino a 150m di profondità." },
      { icon: <Thermometer className="h-7 w-7" />, title: "Sonde orizzontali", desc: "Soluzione economica per terreni ampi a bassa profondità." },
      { icon: <Leaf className="h-7 w-7" />, title: "Zero emissioni", desc: "Energia rinnovabile costante 365 giorni l'anno." },
    ]}
    ctaTitle="Valuta il geotermico"
    ctaText="Studio di fattibilità gratuito per scoprire se la geotermia è adatta al tuo edificio."
  />
);

export default Geotermico;
