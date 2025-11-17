import { Link } from "react-router-dom";
import { Battery, Thermometer, Wind, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heatPumpImage from "@/assets/heat-pump.jpg";

const Climatizzazione = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-muted py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link> /{" "}
            <Link to="/soluzioni" className="hover:text-primary">Soluzioni</Link> / Climatizzazione
          </p>
        </div>
      </div>

      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heatPumpImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Battery className="h-12 w-12 text-gold" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                Pompa di Calore
              </h1>
            </div>
            <p className="text-xl text-primary-foreground">
              Comfort in ogni stagione con massima efficienza energetica
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary">Tecnologia Intelligente per il Tuo Comfort</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                La pompa di calore è una tecnologia avanzata che sfrutta l'energia termica presente
                nell'aria, nell'acqua o nel terreno per riscaldare e raffrescare gli ambienti con
                un'efficienza energetica superiore rispetto ai sistemi tradizionali.
              </p>
              <p>
                A differenza di una caldaia che brucia combustibile, la pompa di calore trasferisce
                il calore da una fonte esterna (aria, acqua o terra) all'interno dell'edificio.
                Questo processo richiede molta meno energia rispetto alla combustione, con un
                risparmio che può raggiungere il 75% sui costi di riscaldamento.
              </p>
              <p>
                Le moderne pompe di calore sono reversibili: riscaldano d'inverno e raffrescano
                d'estate, sostituendo sia caldaia che condizionatore con un unico sistema efficiente.
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
              "Risparmio energetico fino al 75%",
              "Riscaldamento e raffrescamento con un solo sistema",
              "Bassissime emissioni di CO2",
              "Incentivi fiscali e Conto Termico",
              "Comfort ottimale tutto l'anno",
              "Bassa manutenzione e lunga durata",
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
              Tipologie di Pompa di Calore
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Wind className="h-16 w-16 mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-bold mb-3 text-center">Aria-Aria</h3>
                  <p className="text-muted-foreground">
                    Ideale per climatizzare singoli ambienti. Installazione semplice e costi
                    contenuti.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Thermometer className="h-16 w-16 mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-bold mb-3 text-center">Aria-Acqua</h3>
                  <p className="text-muted-foreground">
                    Perfetta per impianti a pavimento o radiatori. Sostituisce la caldaia
                    tradizionale.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Battery className="h-16 w-16 mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-bold mb-3 text-center">Geotermica</h3>
                  <p className="text-muted-foreground">
                    Massima efficienza sfruttando il calore costante del sottosuolo. Investimento
                    a lungo termine.
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
            <h2 className="text-3xl font-bold mb-8 text-center">I Nostri Servizi</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Sopralluogo e analisi termica gratuita",
                "Progettazione dell'impianto su misura",
                "Installazione professionale certificata",
                "Pratiche per incentivi e detrazioni",
                "Manutenzione programmata periodica",
                "Assistenza tecnica h24",
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                  <p className="text-lg">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Passa alla Pompa di Calore
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Scopri quanto puoi risparmiare con un sistema di climatizzazione efficiente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link to="/contatti">Richiedi Preventivo</Link>
            </Button>
            <a
              href="tel:800123456"
              className="inline-flex items-center justify-center gap-2 text-lg hover:text-secondary transition-colors px-6 py-3"
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

export default Climatizzazione;
