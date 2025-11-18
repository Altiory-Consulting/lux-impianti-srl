import { Link } from "react-router-dom";
import { Sun, Wind, Zap, Leaf, Phone, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
const Home = () => {
  const servicesSection = useIntersectionObserver({
    threshold: 0.2
  });
  const communitySection = useIntersectionObserver({
    threshold: 0.2
  });
  const redditoSection = useIntersectionObserver({
    threshold: 0.2
  });
  const solutionsSection = useIntersectionObserver({
    threshold: 0.2
  });
  const partnersSection = useIntersectionObserver({
    threshold: 0.2
  });
  const ctaSection = useIntersectionObserver({
    threshold: 0.2
  });
  const services = [{
    icon: Sun,
    title: "Progettazione",
    desc: "Progetti su misura per ogni esigenza"
  }, {
    icon: Zap,
    title: "Preventivi su misura",
    desc: "Soluzioni personalizzate"
  }, {
    icon: Leaf,
    title: "Installazione",
    desc: "Installatori certificati"
  }, {
    icon: CheckCircle,
    title: "Manutenzione",
    desc: "Assistenza post-vendita"
  }, {
    icon: Wind,
    title: "Conto Termico",
    desc: "Accesso agli incentivi"
  }, {
    icon: Sun,
    title: "Analisi Energetica",
    desc: "Gratuita e professionale"
  }];
  const solutions = [{
    title: "Impianti Fotovoltaici",
    desc: "Cattura l'energia del sole e riduci le bollette",
    link: "/soluzione/fotovoltaico"
  }, {
    title: "Solare Termico",
    desc: "Acqua calda naturale dal sole",
    link: "/soluzione/solare-termico"
  }, {
    title: "Pompa di Calore",
    desc: "Comfort in ogni stagione con massima efficienza",
    link: "/soluzione/climatizzazione"
  }, {
    title: "Reddito Energetico",
    desc: "Accedi ai contributi statali per il fotovoltaico",
    link: "/soluzione/reddito-energetico"
  }];
  return <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Full Screen */}
      <section className="relative min-h-[calc(100vh-120px)] flex items-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl animate-fade-in">
            <p className="text-lime-green uppercase tracking-wider text-sm md:text-base mb-4 font-semibold animate-fade-in-left" style={{
            animationDelay: '0.2s',
            animationFillMode: 'both'
          }}>
              LA TUA VISIONE,TU LO IMMAGINI,NOI LO REALIZZIAMO                                             
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-fade-in-left" style={{
            animationDelay: '0.4s',
            animationFillMode: 'both'
          }}>
              Un futuro green, creato insieme.   <br />
              Insieme lo stiamo costruendo
            </h1>
            <Button asChild size="lg" className="bg-lime-green hover:bg-lime-green/90 hover:scale-105 text-foreground font-semibold text-lg px-8 py-6 transition-all duration-300 animate-fade-in-left shadow-lg hover:shadow-xl" style={{
            animationDelay: '0.6s',
            animationFillMode: 'both'
          }}>
              <Link to="/contatti">
                RICHIEDI INFO
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section - White background with icons */}
      <section ref={servicesSection.ref} className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-700 ${servicesSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
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
            {services.map((service, index) => <div key={index} className={`text-center group cursor-pointer transition-all duration-500 ${servicesSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
            animationDelay: `${index * 0.1}s`,
            animationFillMode: 'both'
          }}>
                <div className="mb-4 flex justify-center">
                  <service.icon className="h-16 w-16 text-lime-green group-hover:scale-125 group-hover:rotate-6 transition-all duration-300" />
                </div>
                <h3 className="font-bold mb-2 text-primary group-hover:text-lime-green transition-colors">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Fotovoltaico Comunità Energetiche */}
      <section ref={communitySection.ref} className="py-16">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center mb-12 transition-all duration-700 ${communitySection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Fotovoltaico Comunità Energetiche
            </h2>
            <p className="text-lg text-muted-foreground">
              Condividi l'energia prodotta con dipendenti, fornitori e cittadini
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
            title: "Tariffa Incentivante",
            desc: "Valorizza l'energia in eccesso con incentivi dedicati"
          }, {
            title: "Efficienza Energetica",
            desc: "Aumenta l'autoconsumo e riduci gli sprechi"
          }, {
            title: "Incentivi Economici",
            desc: "Accedi a contributi e finanziamenti agevolati"
          }, {
            title: "Impatto Ambientale",
            desc: "Riduci le emissioni e proteggi l'ambiente"
          }, {
            title: "Ritorno d'Immagine",
            desc: "Migliora la reputazione aziendale"
          }, {
            title: "Comunità Locale",
            desc: "Crea valore per il territorio"
          }].map((benefit, index) => <Card key={index} className={`hover:shadow-xl hover:-translate-y-2 hover:border-lime-green transition-all duration-300 cursor-pointer ${communitySection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
            animationDelay: `${index * 0.1}s`,
            animationFillMode: 'both'
          }}>
                <CardContent className="p-6">
                  <CheckCircle className="h-8 w-8 text-secondary mb-3 transition-all duration-300 group-hover:text-lime-green" />
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Reddito Energetico */}
      <section ref={redditoSection.ref} className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${redditoSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">Fotovoltaico<br />Reddito Energetico</h2>
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
            <Button asChild size="lg" className="bg-lime-green hover:bg-lime-green/90 hover:scale-105 text-foreground font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              <Link to="/soluzione/reddito-energetico">SCOPRI DI PIÙ</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Soluzioni Energetiche */}
      <section ref={solutionsSection.ref} className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-700 ${solutionsSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-lime-green uppercase tracking-wider text-sm mb-2">I NOSTRI SERVIZI</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Soluzioni Energetiche
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => <Card key={index} className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-lime-green group cursor-pointer ${solutionsSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
            animationDelay: `${index * 0.1}s`,
            animationFillMode: 'both'
          }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-lime-green transition-colors">{solution.title}</h3>
                  <p className="text-muted-foreground mb-4">{solution.desc}</p>
                  <Button asChild variant="outline" className="w-full group-hover:bg-lime-green group-hover:text-foreground group-hover:border-lime-green transition-all">
                    <Link to={solution.link}>
                      Leggi di più <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>)}
          </div>

          <div className={`text-center mt-12 transition-all duration-700 ${solutionsSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
          animationDelay: '0.5s',
          animationFillMode: 'both'
        }}>
            <Button asChild size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-all">
              <Link to="/soluzioni">Vedi Tutte le Soluzioni</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership & Stats */}
      <section ref={partnersSection.ref} className="py-16 bg-blue-light/20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-700 ${partnersSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Partnership con Leader del Settore
            </h2>
            <p className="text-lg text-muted-foreground">
              Collaboriamo con le migliori aziende per garantirti qualità e affidabilità
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[{
            label: "Fotovoltaico",
            value: "99%"
          }, {
            label: "Soddisfazione Clienti",
            value: "98%"
          }, {
            label: "Progetti Completati",
            value: "500+"
          }, {
            label: "Anni di Esperienza",
            value: "15+"
          }].map((stat, index) => <div key={index} className={`text-center transition-all duration-700 hover:scale-110 cursor-default ${partnersSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
            animationDelay: `${index * 0.1}s`,
            animationFillMode: 'both'
          }}>
                <div className="text-4xl font-bold text-secondary mb-2 hover:text-lime-green transition-colors">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaSection.ref} className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ${ctaSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Scegli un Futuro più Green
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto transition-all duration-700 ${ctaSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
          animationDelay: '0.2s',
          animationFillMode: 'both'
        }}>
            Contattaci per una consulenza energetica gratuita e scopri come risparmiare con le
            energie rinnovabili
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ${ctaSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
          animationDelay: '0.4s',
          animationFillMode: 'both'
        }}>
            <Button asChild size="lg" className="bg-lime-green hover:bg-lime-green/90 hover:scale-105 text-foreground font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              <Link to="/contatti">RICHIEDI INFO</Link>
            </Button>
            <a href="tel:800123456" className="flex items-center gap-2 text-lg hover:text-lime-green transition-colors group">
              <Phone className="h-6 w-6 group-hover:animate-float" />
              <span className="font-semibold">800 123 456</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Home;