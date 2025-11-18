import { Link } from "react-router-dom";
import { Sun, Wind, Zap, Leaf, Phone, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-solar-sunset.jpg";

const Home = () => {
  const services = [
    { icon: Sun, title: "Progettazione", desc: "Progetti su misura per ogni esigenza" },
    { icon: Zap, title: "Preventivi su misura", desc: "Soluzioni personalizzate" },
    { icon: Leaf, title: "Installazione", desc: "Installatori certificati" },
    { icon: CheckCircle, title: "Manutenzione", desc: "Assistenza post-vendita" },
    { icon: Wind, title: "Conto Termico", desc: "Accesso agli incentivi" },
    { icon: Sun, title: "Analisi Energetica", desc: "Gratuita e professionale" },
  ];

  const solutions = [
    {
      title: "Impianti Fotovoltaici",
      desc: "Cattura l'energia del sole e riduci le bollette",
      link: "/soluzione/fotovoltaico",
    },
    {
      title: "Solare Termico",
      desc: "Acqua calda naturale dal sole",
      link: "/soluzione/solare-termico",
    },
    {
      title: "Pompa di Calore",
      desc: "Comfort in ogni stagione con massima efficienza",
      link: "/soluzione/climatizzazione",
    },
    {
      title: "Reddito Energetico",
      desc: "Accedi ai contributi statali per il fotovoltaico",
      link: "/soluzione/reddito-energetico",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Full Screen */}
      <section
        className="relative min-h-[calc(100vh-120px)] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <p className="text-lime-green uppercase tracking-wider text-sm md:text-base mb-4 font-semibold">
              LA TUA VISIONE, LA NOSTRA TECNOLOGIA
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Il futuro è green.<br/>
              Insieme lo stiamo costruendo
            </h1>
            <Button asChild size="lg" className="bg-lime-green hover:bg-lime-green/90 text-foreground font-semibold text-lg px-8 py-6">
              <Link to="/contatti">
                RICHIEDI INFO
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section - White background with icons */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Innovazione al servizio dell'ambiente
            </h2>
            <p className="text-xl text-primary mb-2">Energia green per privati & aziende</p>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              In Lux Impianti, offriamo una gamma di servizi completa che copre ogni fase del progetto, 
              dalla prima consulenza fino alla manutenzione nel tempo. Ogni soluzione è progettata per 
              essere efficiente, duratura e beneficiare delle agevolazioni economiche più adeguate.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 flex justify-center">
                  <service.icon className="h-16 w-16 text-lime-green group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-bold mb-2 text-primary">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fotovoltaico Comunità Energetiche */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Fotovoltaico Comunità Energetiche
            </h2>
            <p className="text-lg text-muted-foreground">
              Condividi l'energia prodotta con dipendenti, fornitori e cittadini
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Tariffa Incentivante",
                desc: "Valorizza l'energia in eccesso con incentivi dedicati",
              },
              {
                title: "Efficienza Energetica",
                desc: "Aumenta l'autoconsumo e riduci gli sprechi",
              },
              {
                title: "Incentivi Economici",
                desc: "Accedi a contributi e finanziamenti agevolati",
              },
              {
                title: "Impatto Ambientale",
                desc: "Riduci le emissioni e proteggi l'ambiente",
              },
              {
                title: "Ritorno d'Immagine",
                desc: "Migliora la reputazione aziendale",
              },
              {
                title: "Comunità Locale",
                desc: "Crea valore per il territorio",
              },
            ].map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <CheckCircle className="h-8 w-8 text-secondary mb-3" />
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reddito Energetico */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">Fotovoltaico<br/>Reddito Energetico</h2>
            <p className="text-lg mb-4">
              Il Reddito Energetico Nazionale finanzia impianti fotovoltaici domestici (2-6 kW) 
              per famiglie in difficoltà economica, promuovendo autoconsumo ed energie rinnovabili.
            </p>
            <p className="mb-4">
              Gestito dal GSE, il fondo è alimentato da 200 milioni di euro (2024-2025) e contribuzioni volontarie.
            </p>
            <p className="mb-8">
              Accessibile a famiglie con ISEE sotto i 15.000 euro (o 30.000 con 4 figli), 
              richiede requisiti catastali e contrattuali. L'energia in eccesso sostiene il fondo.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-lime-green hover:bg-lime-green/90 text-foreground font-semibold"
            >
              <Link to="/soluzione/reddito-energetico">SCOPRI DI PIÙ</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Soluzioni Energetiche */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-lime-green uppercase tracking-wider text-sm mb-2">I NOSTRI SERVIZI</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Soluzioni Energetiche
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">{solution.title}</h3>
                  <p className="text-muted-foreground mb-4">{solution.desc}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={solution.link}>
                      Leggi di più <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/soluzioni">Vedi Tutte le Soluzioni</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership & Stats */}
      <section className="py-16 bg-blue-light/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Partnership con Leader del Settore
            </h2>
            <p className="text-lg text-muted-foreground">
              Collaboriamo con le migliori aziende per garantirti qualità e affidabilità
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: "Fotovoltaico", value: "99%" },
              { label: "Soddisfazione Clienti", value: "98%" },
              { label: "Progetti Completati", value: "500+" },
              { label: "Anni di Esperienza", value: "15+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Scegli un Futuro più Green
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contattaci per una consulenza energetica gratuita e scopri come risparmiare con le
            energie rinnovabili
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-lime-green hover:bg-lime-green/90 text-foreground font-semibold">
              <Link to="/contatti">RICHIEDI INFO</Link>
            </Button>
            <a
              href="tel:800123456"
              className="flex items-center gap-2 text-lg hover:text-gold transition-colors"
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

export default Home;
