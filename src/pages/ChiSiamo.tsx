import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle, Award, Users, Calendar, TrendingUp, Lightbulb, Shield, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const stats = [
  { value: "100+", label: "Progetti Completati", icon: Award },
  { value: "98%", label: "Clienti Soddisfatti", icon: Users },
  { value: "15+", label: "Anni di Esperienza", icon: Calendar },
  { value: "50+", label: "Partner Attivi", icon: TrendingUp },
];

const whyChooseUs = [
  { icon: Lightbulb, title: "Soluzioni Innovative", desc: "Tecnologie all'avanguardia per massima efficienza energetica e risparmio reale." },
  { icon: Shield, title: "Garanzia di Qualità", desc: "Materiali certificati e installazioni a norma con garanzie estese." },
  { icon: Users, title: "Team Qualificato", desc: "Tecnici specializzati seguono ogni progetto dalla A alla Z." },
  { icon: TrendingUp, title: "Risparmio Garantito", desc: "Riduci i costi energetici fino al 70% con impianti ad alta efficienza." },
];

const values = [
  { title: "Ascolto del Cliente", desc: "Ogni progetto è studiato per rispondere alle esigenze specifiche, ottimizzando costi, tempi e impatto ambientale." },
  { title: "Sostenibilità", desc: "Soluzioni progettate per ridurre l'impatto ambientale e promuovere l'utilizzo di energie rinnovabili." },
  { title: "Qualità e Affidabilità", desc: "Componenti di alta qualità dai migliori partner del settore, con certificazioni che garantiscono standard elevati." },
  { title: "Innovazione Continua", desc: "Sempre aggiornati sulle ultime tecnologie per offrire le soluzioni più avanzate ed efficienti." },
];

const ChiSiamo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <PageHero
        eyebrow="Chi Siamo"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Chi Siamo" }]}
        title={<>PARTNER DI<br />FIDUCIA NELL'<span className="text-accent">ENERGIA</span></>}
        description="Da oltre 15 anni progettiamo, installiamo e manuteniamo impianti ad alta efficienza per privati e aziende, con un approccio editoriale alla sostenibilità."
        cta={{ label: "Lavora con noi", to: "/contatti" }}
      />

      <section className="px-3 sm:px-4 -mt-4 mb-16">
        <div className="mx-auto max-w-[1320px] grid sm:grid-cols-2 gap-3">
          {[
            { city: "Capriolo (BS)", region: "Sede Lombardia" },
            { city: "Caserta (CE)", region: "Sede Campania" },
          ].map((l) => (
            <div key={l.city} className="rounded-3xl border border-foreground/10 bg-card p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{l.region}</p>
                  <p className="text-xl font-semibold">{l.city}</p>
                </div>
              </div>
              <span className="pulse-dot" />
            </div>
          ))}
        </div>
      </section>

      <section className="px-3 sm:px-4 mb-20">
        <div className="mx-auto max-w-[1320px] grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-3xl bg-foreground text-background p-8">
              <s.icon className="h-6 w-6 text-accent mb-6" />
              <div className="text-5xl md:text-6xl font-display font-medium tracking-tight">{s.value}</div>
              <div className="text-sm text-background/60 mt-2 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-3 sm:px-4 mb-20">
        <div className="mx-auto max-w-[1320px] grid lg:grid-cols-2 gap-3">
          <div className="rounded-3xl bg-card border border-foreground/10 p-10 md:p-14">
            <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-5 flex items-center gap-2">
              <span className="pulse-dot" /> Mission
            </p>
            <h2 className="display-xl text-3xl md:text-5xl mb-6">CREARE AMBIENTI SOSTENIBILI E CONFORTEVOLI.</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
              Assistiamo il cliente in ogni fase del progetto: dalla progettazione iniziale all'installazione, fino all'assistenza post-vendita continuativa.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Costruiamo relazioni durature basate su fiducia, affidabilità e competenza tecnica.
            </p>
          </div>

          <div className="rounded-3xl bg-foreground text-background p-10 md:p-14">
            <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-8">Cosa offriamo</p>
            <ul className="space-y-5">
              {[
                "Consulenza energetica personalizzata",
                "Progettazione su misura",
                "Installazione professionale",
                "Manutenzione programmata",
                "Assistenza post-vendita",
                "Accesso agli incentivi statali",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 border-b border-background/10 pb-4 last:border-0">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-3 sm:px-4 mb-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 px-2">
            <div>
              <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-3 flex items-center gap-2">
                <span className="pulse-dot" /> Perché sceglierci
              </p>
              <h2 className="display-xl text-3xl md:text-5xl max-w-3xl">UN PARTNER, QUATTRO PILASTRI.</h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {whyChooseUs.map((w) => (
              <div key={w.title} className="rounded-3xl bg-card border border-foreground/10 p-8 hover:border-foreground/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center mb-6">
                  <w.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{w.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 sm:px-4 mb-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-10 px-2">
            <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-3 flex items-center gap-2">
              <span className="pulse-dot" /> Valori
            </p>
            <h2 className="display-xl text-3xl md:text-5xl">CIÒ IN CUI CREDIAMO.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {values.map((v, i) => (
              <div key={v.title} className="rounded-3xl border border-foreground/10 p-10 bg-card">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">0{i + 1}</div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 sm:px-4 pb-16">
        <div className="mx-auto max-w-[1320px] rounded-[2rem] md:rounded-[2.5rem] bg-foreground text-background p-10 md:p-20 text-center">
          <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-5 flex items-center justify-center gap-2">
            <span className="pulse-dot" /> Iniziamo
          </p>
          <h2 className="display-xl text-4xl md:text-6xl mb-6">SCEGLI UN FUTURO PIÙ GREEN.</h2>
          <p className="text-background/70 text-lg max-w-xl mx-auto mb-10">
            Scopri come possiamo aiutarti a risparmiare energia e ridurre i costi.
          </p>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-3 rounded-full bg-background text-foreground pl-6 pr-2 py-2 text-sm font-medium hover:scale-[1.02] transition-transform"
          >
            Contattaci ora
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-foreground text-background">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChiSiamo;
