import { Link } from "react-router-dom";
import { Sun, Battery, TrendingDown, Leaf, CheckCircle, Phone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Fotovoltaico = () => {
  const benefits = [
    "Riduzione drastica delle bollette elettriche",
    "Autoconsumo e indipendenza energetica",
    "Accesso agli incentivi statali",
    "Aumento del valore dell'immobile",
    "Zero emissioni di CO2",
    "Manutenzione minima e lunga durata",
  ];

  const services = [
    "Sopralluogo e analisi energetica gratuita",
    "Progettazione personalizzata dell'impianto",
    "Gestione pratiche burocratiche e incentivi",
    "Installazione certificata e a norma",
    "Monitoraggio e manutenzione programmata",
    "Assistenza post-vendita dedicata",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-muted py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link> /{" "}
            <Link to="/soluzioni" className="hover:text-primary">Soluzioni</Link> / Fotovoltaico
          </p>
        </div>
      </div>

      {/* Hero */}
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
              <Sun className="h-4 w-4 md:h-5 md:w-5 text-lime-green drop-shadow-lg group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-wider drop-shadow-md">Fotovoltaico</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] px-4">
              Impianti <br />
              <span className="text-lime-green drop-shadow-[0_0_30px_rgba(156,225,55,0.5)]">Fotovoltaici</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-10 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] px-4">
              Cattura l'energia del sole e trasformala in risparmio concreto
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              L'energia solare: abbondante, pulita e conveniente
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Il fotovoltaico rappresenta oggi la soluzione più efficace per produrre energia
                elettrica in modo pulito e sostenibile. I pannelli solari catturano la luce del sole
                e la trasformano in elettricità che puoi utilizzare immediatamente nella tua casa o
                azienda.
              </p>
              <p>
                Installare un impianto fotovoltaico significa ridurre drasticamente la dipendenza
                dalla rete elettrica tradizionale, abbattere le bollette e contribuire attivamente
                alla tutela dell'ambiente. Con un sistema di accumulo puoi immagazzinare l'energia
                prodotta durante il giorno e utilizzarla anche di notte.
              </p>
              <p>
                Grazie agli incentivi statali e alla riduzione dei costi tecnologici, il
                fotovoltaico è oggi accessibile a tutti e garantisce un ritorno economico certo nel
                tempo. Il tuo tetto può diventare una fonte di reddito!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-blue-light/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">I Vantaggi del Fotovoltaico</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
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

      {/* Key Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-primary">
              Perché Scegliere il Nostro Fotovoltaico
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <TrendingDown className="h-16 w-16 mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-bold mb-3">Risparmio Garantito</h3>
                  <p className="text-muted-foreground">
                    Riduci le bollette fino all'80% e recupera l'investimento in pochi anni
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-8">
                  <Battery className="h-16 w-16 mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-bold mb-3">Sistema di Accumulo</h3>
                  <p className="text-muted-foreground">
                    Immagazzina l'energia e usala quando serve, anche di notte
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-8">
                  <Leaf className="h-16 w-16 mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-bold mb-3">Zero Emissioni</h3>
                  <p className="text-muted-foreground">
                    Contribuisci alla riduzione delle emissioni di CO2 e proteggi l'ambiente
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">I Nostri Servizi</h2>
            <p className="text-lg mb-8 text-center">
              Ti accompagniamo in ogni fase del progetto, dalla progettazione alla manutenzione
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                  <p className="text-lg">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Inizia a Risparmiare con il Fotovoltaico
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Richiedi un sopralluogo gratuito e scopri quanto puoi risparmiare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-lime-green hover:bg-lime-green/90 hover:scale-105 text-foreground font-semibold transition-all duration-300 shadow-glow-lime hover:shadow-glow-lime hover:animate-pulse-glow">
              <Link to="/contatti">Richiedi Preventivo Gratuito</Link>
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

export default Fotovoltaico;
