import { Link } from "react-router-dom";
import { Sun, Droplets, Wind, Flame, Mountain, Battery } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Soluzioni = () => {
  const solutions = [
    {
      icon: Sun,
      title: "Impianti Fotovoltaici",
      description:
        "Cattura l'energia del sole e trasformala in elettricità pulita. Riduci le bollette e aumenta l'indipendenza energetica della tua casa o azienda.",
      link: "/soluzione/fotovoltaico",
      color: "text-secondary",
    },
    {
      icon: Droplets,
      title: "Solare Termico",
      description:
        "Sfrutta il calore del sole per riscaldare l'acqua sanitaria. Un sistema efficiente che riduce drasticamente i costi per l'acqua calda.",
      link: "/soluzione/solare-termico",
      color: "text-blue-medium",
    },
    {
      icon: Battery,
      title: "Climatizzazione a Pompa di Calore",
      description:
        "Tecnologia che sfrutta energia termica dall'aria, dall'acqua o dal terreno per riscaldare e raffrescare gli ambienti con massima efficienza.",
      link: "/soluzione/climatizzazione",
      color: "text-accent",
    },
    {
      icon: Flame,
      title: "Biomasse",
      description:
        "Riscaldamento ecologico con legno e pellet. Una fonte rinnovabile che crea un'atmosfera accogliente e riduce i costi energetici.",
      link: "/soluzione/biomasse",
      color: "text-primary",
    },
    {
      icon: Wind,
      title: "Eolico",
      description:
        "Il vento come fonte di energia rinnovabile. Un investimento sostenibile che riduce la dipendenza dai combustibili fossili.",
      link: "/soluzione/eolico",
      color: "text-secondary",
    },
    {
      icon: Mountain,
      title: "Geotermico",
      description:
        "Sfrutta il calore del sottosuolo per riscaldare e raffrescare la tua casa. Comfort e risparmio energetico tutto l'anno.",
      link: "/soluzione/geotermico",
      color: "text-blue-medium",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-muted py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>{" "}
            / Soluzioni
          </p>
        </div>
      </div>

      {/* Page Header */}
      <section className="text-primary-foreground py-16" style={{ background: 'var(--gradient-header)' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Le Nostre Soluzioni Energetiche</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Scopri le tecnologie rinnovabili che trasformeranno il tuo modo di consumare energia
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
              >
                <CardContent className="p-8">
                  <solution.icon className={`h-16 w-16 mb-6 ${solution.color}`} />
                  <h2 className="text-2xl font-bold mb-4 text-primary">{solution.title}</h2>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={solution.link}>Scopri di più</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-light/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
              Perché Scegliere le Nostre Soluzioni
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                <p className="text-lg font-semibold mb-2">Energie Rinnovabili</p>
                <p className="text-muted-foreground">Soluzioni completamente sostenibili</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">15+</div>
                <p className="text-lg font-semibold mb-2">Anni di Esperienza</p>
                <p className="text-muted-foreground">Competenza e affidabilità</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">98%</div>
                <p className="text-lg font-semibold mb-2">Clienti Soddisfatti</p>
                <p className="text-muted-foreground">La tua soddisfazione è la nostra priorità</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trova la Soluzione Energetica Perfetta per Te
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contattaci per una consulenza gratuita e scopri quale tecnologia si adatta meglio alle
            tue esigenze
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-foreground">
              <Link to="/contatti">Richiedi Consulenza Gratuita</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/chi-siamo">Scopri Chi Siamo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Soluzioni;
