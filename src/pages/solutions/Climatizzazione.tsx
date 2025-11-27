import { Link } from "react-router-dom";
import { Battery, Thermometer, Wind, CheckCircle, Phone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden py-12 md:py-20"
        style={{
          background: 'linear-gradient(135deg, hsl(189 95% 28%) 0%, hsl(189 85% 38%) 35%, hsl(189 75% 48%) 70%, hsl(189 65% 58%) 100%)',
        }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0yaC0yYy0xLjEgMC0yIC45LTIgMnYyYzAgMS4xLjkgMiAyIDJoMmMxLjEgMCAyLS45IDItMnYtMnoiLz48L2c+DQo8L2c+PC9zdmc+')] opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8 backdrop-blur-lg border-2 border-lime-green/60 shadow-xl hover:bg-white/15 hover:border-lime-green hover:scale-105 transition-all duration-300 group">
              <Battery className="h-4 w-4 md:h-5 md:w-5 text-lime-green drop-shadow-lg group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-wider drop-shadow-md">Climatizzazione</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] px-4">
              Pompa di <br />
              <span className="text-lime-green drop-shadow-[0_0_30px_rgba(156,225,55,0.5)]">Calore</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-10 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] px-4">
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
            <Button asChild size="lg" className="bg-lime-green hover:bg-lime-green/90 hover:scale-105 text-foreground font-semibold transition-all duration-300 shadow-glow-lime hover:shadow-glow-lime hover:animate-pulse-glow">
              <Link to="/contatti">Richiedi Preventivo</Link>
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

export default Climatizzazione;
