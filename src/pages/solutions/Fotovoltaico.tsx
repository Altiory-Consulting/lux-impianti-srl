import { Sun, Battery, TrendingDown, Leaf } from "lucide-react";
import SolutionPage from "@/components/SolutionPage";

const Fotovoltaico = () => (
  <SolutionPage
    eyebrow="Fotovoltaico"
    title={<>Impianti<br /><span className="text-accent">fotovoltaici.</span></>}
    description="Cattura l'energia del sole e trasformala in risparmio concreto. Riduci le bollette, aumenta l'indipendenza energetica e contribuisci alla tutela dell'ambiente."
    intro={{
      heading: "Energia solare: abbondante, pulita, conveniente",
      paragraphs: [
        "Il fotovoltaico è oggi la soluzione più efficace per produrre energia elettrica in modo pulito e sostenibile. I pannelli solari catturano la luce del sole e la trasformano in elettricità da utilizzare immediatamente nella tua casa o azienda.",
        "Installare un impianto fotovoltaico significa ridurre drasticamente la dipendenza dalla rete elettrica, abbattere le bollette e contribuire attivamente alla tutela dell'ambiente. Con un sistema di accumulo puoi immagazzinare l'energia prodotta durante il giorno e utilizzarla anche di notte.",
        "Grazie agli incentivi statali e alla riduzione dei costi tecnologici, il fotovoltaico è oggi accessibile a tutti e garantisce un ritorno economico certo nel tempo.",
      ],
    }}
    benefits={[
      "Riduzione drastica delle bollette elettriche",
      "Autoconsumo e indipendenza energetica",
      "Accesso agli incentivi statali",
      "Aumento del valore dell'immobile",
      "Zero emissioni di CO₂",
      "Manutenzione minima e lunga durata",
    ]}
    features={[
      { icon: <TrendingDown className="h-7 w-7" />, title: "Risparmio garantito", desc: "Riduci le bollette fino all'80% e recupera l'investimento in pochi anni." },
      { icon: <Battery className="h-7 w-7" />, title: "Sistema di accumulo", desc: "Immagazzina l'energia e usala quando serve, anche di notte." },
      { icon: <Leaf className="h-7 w-7" />, title: "Zero emissioni", desc: "Contribuisci alla riduzione delle emissioni di CO₂ e proteggi l'ambiente." },
    ]}
    services={[
      "Sopralluogo e analisi energetica gratuita",
      "Progettazione personalizzata dell'impianto",
      "Gestione pratiche burocratiche e incentivi",
      "Installazione certificata e a norma",
      "Monitoraggio e manutenzione programmata",
      "Assistenza post-vendita dedicata",
    ]}
    ctaTitle="Inizia a risparmiare"
    ctaText="Richiedi un sopralluogo gratuito e scopri quanto puoi risparmiare con un impianto fotovoltaico su misura."
  />
);

export default Fotovoltaico;
