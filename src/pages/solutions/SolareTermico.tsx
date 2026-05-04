import { Sun, Droplets, TrendingDown } from "lucide-react";
import SolutionPage from "@/components/SolutionPage";

const SolareTermico = () => (
  <SolutionPage
    eyebrow="Solare Termico"
    title={<>Solare<br /><span className="text-accent">termico.</span></>}
    description="Il sole riscalda la tua acqua sanitaria, riducendo drasticamente i costi energetici. Una tecnologia semplice, affidabile e duratura."
    intro={{
      heading: "Acqua calda naturale dal sole",
      paragraphs: [
        "Il solare termico è una tecnologia semplice ed efficiente che sfrutta l'energia del sole per riscaldare l'acqua sanitaria della tua casa. I pannelli catturano il calore solare e lo trasferiscono all'acqua, riducendo drasticamente il consumo di gas o elettricità.",
        "Questi sistemi sono estremamente affidabili e duraturi, con una vita utile che supera i 20 anni. Richiedono pochissima manutenzione e garantiscono un risparmio energetico costante nel tempo.",
        "L'investimento si ripaga rapidamente grazie agli incentivi statali (Conto Termico e detrazioni fiscali) e alla riduzione delle bollette per l'acqua calda sanitaria.",
      ],
    }}
    benefits={[
      "Risparmio fino al 70% sui costi per l'acqua calda",
      "Tecnologia semplice e affidabile",
      "Durata superiore ai 20 anni",
      "Manutenzione minima",
      "Incentivi statali disponibili",
      "Riduzione delle emissioni di CO₂",
    ]}
    features={[
      { icon: <Sun className="h-7 w-7" />, title: "1. Cattura", desc: "I pannelli solari assorbono l'energia termica del sole." },
      { icon: <TrendingDown className="h-7 w-7" />, title: "2. Trasferimento", desc: "Il calore viene trasferito al serbatoio di accumulo." },
      { icon: <Droplets className="h-7 w-7" />, title: "3. Utilizzo", desc: "L'acqua calda è pronta per docce, cucina e riscaldamento." },
    ]}
    services={[
      "Sopralluogo gratuito e analisi del fabbisogno",
      "Progettazione su misura del sistema",
      "Installazione certificata",
      "Pratiche per Conto Termico e detrazioni",
      "Manutenzione periodica programmata",
      "Garanzia estesa sui componenti",
    ]}
    ctaTitle="Scopri quanto puoi risparmiare"
    ctaText="Richiedi un sopralluogo gratuito e un preventivo personalizzato per il tuo impianto solare termico."
  />
);

export default SolareTermico;
