import { Link } from "react-router-dom";
import { Mountain, Thermometer, TrendingDown, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import geothermalImage from "@/assets/geothermal.jpg";

const Geotermico = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-muted py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link> /{" "}
            <Link to="/soluzioni" className="hover:text-primary">Soluzioni</Link> / Geotermico
          </p>
        </div>
      </div>

      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${geothermalImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Mountain className="h-12 w-12 text-gold" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                Energia Geotermica
              </h1>
            </div>
            <p className="text-xl text-primary-foreground">
              Sfrutta il calore del sottosuolo per comfort e risparmio tutto l'anno
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary">Il Calore della Terra</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                L'energia geotermica sfrutta il calore naturale presente nel sottosuolo per
                riscaldare e raffrescare gli edifici. A pochi metri di profondità, la temperatura
                del terreno rimane costante tutto l'anno (circa 10-15°C), offrendo una fonte
                energetica stabile e affidabile.
              </p>
              <p>
                Gli impianti geotermici utilizzano una pompa di calore geotermica che scambia calore
                con il terreno attraverso sonde verticali o serpentine orizzontali. In inverno il
                sistema preleva calore dal sottosuolo per riscaldare l'edificio, in estate il
                processo si inverte per raffrescarlo.
              </p>
              <p>
                L'investimento iniziale per un impianto geotermico è superiore rispetto ad altri
                sistemi, ma i costi operativi sono i più bassi in assoluto. La tecnologia geotermica
                offre il massimo risparmio energetico e il minor impatto ambientale tra tutte le
                soluzioni di climatizzazione.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-light/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">I Vantaggi del Geotermico</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Massima efficienza energetica",
              "Costi operativi minimi",
              "Funzionamento silenzioso",
              "Nessuna emissione diretta",
              "Comfort ottimale 365 giorni l'anno",
              "Durata superiore ai 25 anni",
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
              Perché Scegliere il Geotermico
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <TrendingDown className="h-16 w-16 mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-bold mb-3">Stabilità Termica</h3>
                  <p className="text-muted-foreground">
                    La temperatura del terreno è costante: nessuna variazione stagionale estrema da
                    gestire.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Thermometer className="h-16 w-16 mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-bold mb-3">Applicazioni Multiple</h3>
                  <p className="text-muted-foreground">
                    Riscaldamento, raffrescamento e produzione di acqua calda sanitaria con un solo
                    sistema.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Mountain className="h-16 w-16 mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-bold mb-3">Basso Impatto</h3>
                  <p className="text-muted-foreground">
                    Nessun impatto visivo, acustico o ambientale. Perfetto anche in centri storici.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Come Funziona</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gold text-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sonde Geotermiche</h3>
                  <p>
                    Vengono installate sonde verticali nel terreno (fino a 100-150 metri di
                    profondità) o serpentine orizzontali (a 1,5-2 metri).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold text-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Scambio Termico</h3>
                  <p>
                    Un fluido termovettore circola nelle sonde e scambia calore con il terreno,
                    prelevandolo in inverno e cedendolo in estate.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold text-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Pompa di Calore</h3>
                  <p>
                    La pompa di calore geotermica trasferisce il calore dal sottosuolo all'edificio
                    (o viceversa) con massima efficienza.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Scopri il Potenziale del Tuo Terreno
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Richiedi uno studio di fattibilità gratuito per il tuo impianto geotermico
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-lime-green hover:bg-lime-green/90 hover:scale-105 text-foreground font-semibold transition-all duration-300 shadow-glow-lime hover:shadow-glow-lime hover:animate-pulse-glow">
              <Link to="/contatti">Richiedi Studio di Fattibilità</Link>
            </Button>
            <a
              href="tel:08231556627"
              className="inline-flex items-center justify-center gap-2 text-lg hover:text-lime-green transition-colors px-6 py-3 group"
            >
              <Phone className="h-6 w-6 group-hover:animate-float" />
              <span className="font-semibold">0823 155 6627</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Geotermico;
