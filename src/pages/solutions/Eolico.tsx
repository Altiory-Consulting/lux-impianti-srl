import { Link } from "react-router-dom";
import { Wind, TrendingDown, Zap, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import windImage from "@/assets/wind-energy.jpg";

const Eolico = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-muted py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link> /{" "}
            <Link to="/soluzioni" className="hover:text-primary">Soluzioni</Link> / Eolico
          </p>
        </div>
      </div>

      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${windImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Wind className="h-12 w-12 text-gold" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                Energia Eolica
              </h1>
            </div>
            <p className="text-xl text-primary-foreground">
              Il vento come fonte di energia rinnovabile per un futuro sostenibile
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary">La Forza del Vento al Tuo Servizio</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                L'energia eolica rappresenta una delle fonti rinnovabili più promettenti e in rapida
                crescita. Le turbine eoliche convertono l'energia cinetica del vento in elettricità
                pulita, contribuendo in modo significativo alla riduzione delle emissioni di CO2.
              </p>
              <p>
                Sia che si tratti di grandi parchi eolici o di piccoli impianti domestici
                (mini-eolico), questa tecnologia offre un'opportunità concreta per produrre energia
                in modo sostenibile e ridurre la dipendenza dai combustibili fossili.
              </p>
              <p>
                L'installazione di un impianto eolico è un investimento a lungo termine che
                garantisce energia pulita per decenni, con costi di manutenzione contenuti e un
                ritorno economico interessante grazie agli incentivi e alla vendita dell'energia
                prodotta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-light/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">I Vantaggi dell'Eolico</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Fonte energetica completamente rinnovabile",
              "Zero emissioni durante il funzionamento",
              "Bassi costi operativi",
              "Lunga durata degli impianti (20-25 anni)",
              "Indipendenza energetica",
              "Contributo alla lotta contro il cambiamento climatico",
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
              Soluzioni Eoliche
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Wind className="h-16 w-16 mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-bold mb-3">Mini-Eolico</h3>
                  <p className="text-muted-foreground">
                    Turbine di piccola taglia per abitazioni e aziende. Ideali per integrazione con
                    fotovoltaico.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Zap className="h-16 w-16 mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-bold mb-3">Medio-Eolico</h3>
                  <p className="text-muted-foreground">
                    Impianti per comunità e imprese. Potenza intermedia con ottimo rendimento.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <TrendingDown className="h-16 w-16 mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-bold mb-3">Parchi Eolici</h3>
                  <p className="text-muted-foreground">
                    Progetti su larga scala per massimizzare la produzione di energia pulita.
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
                "Valutazione del potenziale eolico del sito",
                "Progettazione personalizzata dell'impianto",
                "Gestione pratiche autorizzative",
                "Installazione chiavi in mano",
                "Monitoraggio e manutenzione",
                "Supporto per incentivi e finanziamenti",
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
            Investi nell'Energia del Vento
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Scopri se il tuo sito è adatto per un impianto eolico
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-lime-green hover:bg-lime-green/90 hover:scale-105 text-foreground font-semibold transition-all duration-300 shadow-glow-lime hover:shadow-glow-lime hover:animate-pulse-glow">
              <Link to="/contatti">Richiedi Valutazione Gratuita</Link>
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

export default Eolico;
