import { Link } from "react-router-dom";
import { Sun, Droplets, Battery, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";

const solutions = [
  { icon: Sun, title: "Impianti Fotovoltaici", desc: "Cattura l'energia del sole e trasformala in elettricità pulita. Riduci le bollette e aumenta l'indipendenza energetica.", link: "/soluzione/fotovoltaico" },
  { icon: Droplets, title: "Solare Termico", desc: "Sfrutta il calore del sole per riscaldare l'acqua sanitaria. Un sistema efficiente che riduce drasticamente i costi.", link: "/soluzione/solare-termico" },
  { icon: Battery, title: "Pompa di Calore", desc: "Tecnologia che sfrutta l'energia termica naturale per riscaldare e raffrescare con la massima efficienza.", link: "/soluzione/climatizzazione" },
];

const stats = [
  { value: "100%", label: "Energie rinnovabili" },
  { value: "15+", label: "Anni di esperienza" },
  { value: "98%", label: "Clienti soddisfatti" },
];

const Soluzioni = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <PageHero
        eyebrow="Soluzioni Energetiche"
        title={<>Le nostre<br /><span className="text-accent">soluzioni.</span></>}
        description="Tre tecnologie rinnovabili per trasformare il modo in cui produci e consumi energia. Progettiamo, installiamo e ti seguiamo nel tempo."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Soluzioni" }]}
        cta={{ label: "Richiedi consulenza", to: "/contatti" }}
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5">
            {solutions.map((solution, index) => (
              <Link key={index} to={solution.link} className="group">
                <Card className="h-full overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-2xl bg-foreground text-background flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-foreground transition-colors">
                      <solution.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-display uppercase text-2xl font-bold mb-4 text-foreground tracking-tight leading-tight">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">{solution.desc}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                      Scopri di più
                      <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-6xl mx-auto rounded-[2rem] md:rounded-[2.5rem] bg-foreground text-background px-6 sm:px-10 md:px-14 py-12 md:py-16">
            <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-4 flex items-center gap-2">
              <span className="pulse-dot" /> Perché sceglierci
            </p>
            <h2 className="font-display uppercase text-3xl md:text-5xl font-bold mb-12 tracking-tight leading-[0.95]">
              Numeri che parlano per noi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-none">
                    {s.value}<span className="text-accent">.</span>
                  </div>
                  <div className="text-background/70 text-sm mt-3 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-display uppercase text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight leading-[0.95]">
            Trova la soluzione perfetta<span className="text-accent">.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Consulenza gratuita per scegliere la tecnologia più adatta alle tue esigenze.
          </p>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-3 rounded-full bg-foreground text-background pl-6 pr-2 py-2 text-sm font-medium hover:scale-[1.02] transition-transform"
          >
            Contattaci ora
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-background/15">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Soluzioni;
