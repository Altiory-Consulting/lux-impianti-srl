import { Link } from "react-router-dom";
import { Droplets, Sun, TrendingDown, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SolareTermico = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-muted py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link> /{" "}
            <Link to="/soluzioni" className="hover:text-primary">Soluzioni</Link> / Solare Termico
          </p>
        </div>
      </div>

      <section className="text-primary-foreground py-16" style={{ background: 'var(--gradient-header)', boxShadow: 'var(--shadow-header)' }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6 justify-center">
            <Droplets className="h-16 w-16 text-gold" />
            <h1 className="text-4xl md:text-5xl font-bold">Solare Termico</h1>
          </div>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Il sole riscalda la tua acqua sanitaria, riducendo drasticamente i costi energetici
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary">Acqua Calda Naturale dal Sole</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Il solare termico è una tecnologia semplice ed efficiente che sfrutta l'energia del
                sole per riscaldare l'acqua sanitaria della tua casa. I pannelli solari termici
                catturano il calore solare e lo trasferiscono all'acqua, riducendo drasticamente il
                consumo di gas o elettricità.
              </p>
              <p>
                Questi sistemi sono estremamente affidabili e duraturi, con una vita utile che
                supera i 20 anni. Richiedono pochissima manutenzione e garantiscono un risparmio
                energetico costante nel tempo.
              </p>
              <p>
                L'investimento in un impianto solare termico si ripaga rapidamente grazie agli
                incentivi statali (Conto Termico e detrazioni fiscali) e alla drastica riduzione
                delle bollette per l'acqua calda sanitaria.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-light/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">I Vantaggi</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Risparmio fino al 70% sui costi per l'acqua calda",
              "Tecnologia semplice e affidabile",
              "Durata superiore ai 20 anni",
              "Manutenzione minima",
              "Incentivi statali disponibili",
              "Riduzione emissioni di CO2",
            ].map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <CheckCircle className="h-10 w-10 text-secondary mb-4" />
                  <p className="text-lg font-semibold">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-primary">
              Come Funziona
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <Sun className="h-16 w-16 mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-bold mb-3">1. Cattura del Calore</h3>
                  <p className="text-muted-foreground">
                    I pannelli solari assorbono l'energia termica del sole
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-8">
                  <TrendingDown className="h-16 w-16 mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-bold mb-3">2. Trasferimento</h3>
                  <p className="text-muted-foreground">
                    Il calore viene trasferito al serbatoio di accumulo
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-8">
                  <Droplets className="h-16 w-16 mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-bold mb-3">3. Utilizzo</h3>
                  <p className="text-muted-foreground">
                    L'acqua calda è pronta per docce, cucina e riscaldamento
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Scopri Quanto Puoi Risparmiare
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Richiedi un sopralluogo gratuito e un preventivo personalizzato
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-foreground">
              <Link to="/contatti">Richiedi Preventivo</Link>
            </Button>
            <a
              href="tel:800123456"
              className="inline-flex items-center justify-center gap-2 text-lg hover:text-gold transition-colors px-6 py-3"
            >
              <Phone className="h-6 w-6" />
              <span className="font-semibold">800 123 456</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolareTermico;
