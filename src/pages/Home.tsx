import { Link } from "react-router-dom";
import { Sun, Wind, Zap, Leaf, Phone, CheckCircle, ArrowRight, Droplets, Thermometer, CircleDollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import projectResidential from "@/assets/project-residential-1.jpg";
import projectIndustrial from "@/assets/project-industrial-1.jpg";
import projectCommercial from "@/assets/project-commercial-1.jpg";
import projectAgricultural from "@/assets/project-agricultural-1.jpg";
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
    icon: Sun,
    title: "Impianti Fotovoltaici",
    desc: "Cattura l'energia del sole e riduci le bollette",
    link: "/soluzione/fotovoltaico",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10 group-hover:bg-amber-500/20"
  }, {
    icon: Droplets,
    title: "Solare Termico",
    desc: "Acqua calda naturale dal sole",
    link: "/soluzione/solare-termico",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10 group-hover:bg-orange-500/20"
  }, {
    icon: Thermometer,
    title: "Pompa di Calore",
    desc: "Comfort in ogni stagione con massima efficienza",
    link: "/soluzione/climatizzazione",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10 group-hover:bg-cyan-500/20"
  }, {
    icon: CircleDollarSign,
    title: "Reddito Energetico",
    desc: "Accedi ai contributi statali per il fotovoltaico",
    link: "/soluzione/reddito-energetico",
    color: "text-green-500",
    bgColor: "bg-green-500/10 group-hover:bg-green-500/20"
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
            <Button asChild size="lg" className="bg-lime-green hover:bg-lime-green/90 hover:scale-105 text-foreground font-semibold text-lg px-8 py-6 transition-all duration-300 animate-fade-in-left shadow-glow-lime hover:shadow-glow-lime hover:animate-pulse-glow" style={{
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

      {/* Services Section - Interactive Cards */}
      <section ref={servicesSection.ref} className="py-16 bg-background section-transition-top section-transition-bottom relative" style={{
        '--transition-from': 'hsl(0 0% 0% / 0.3)',
        '--transition-to': 'hsl(214 50% 98% / 0.5)'
      } as React.CSSProperties}>
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-700 ${servicesSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-lime-green uppercase tracking-wider text-sm mb-2 font-semibold">I NOSTRI SERVIZI</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`group cursor-pointer overflow-hidden bg-gradient-card border-border hover:border-lime-green hover:shadow-card-hover hover:shadow-glow-lime transition-all duration-500 hover:-translate-y-2 ${servicesSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <CardContent className="p-6 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="mb-4 flex justify-center">
                      <div className="p-4 rounded-full bg-lime-green/10 group-hover:bg-lime-green/20 transition-all duration-300 group-hover:scale-110">
                        <service.icon className="h-12 w-12 text-lime-green group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 drop-shadow-lg group-hover:drop-shadow-[0_0_20px_hsl(var(--lime-green))]" />
                      </div>
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-primary group-hover:text-lime-green transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {service.desc}
                    </p>
                    <div className="mt-4 flex justify-center">
                      <ArrowRight className="h-5 w-5 text-lime-green opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* I Nostri Lavori - Projects Carousel */}
      <section ref={communitySection.ref} className="py-16 bg-muted/30 section-transition-top section-transition-bottom relative" style={{
        '--transition-from': 'hsl(0 0% 100% / 0.5)',
        '--transition-to': 'hsl(211 100% 22% / 0.3)'
      } as React.CSSProperties}>
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center mb-12 transition-all duration-700 ${communitySection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-lime-green uppercase tracking-wider text-sm mb-2">PORTFOLIO</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              I Nostri Lavori
            </h2>
            <p className="text-lg text-muted-foreground">
              Scopri alcuni dei progetti energetici che abbiamo realizzato con successo
            </p>
          </div>

          <div className={`transition-all duration-700 ${communitySection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-lime-green scrollbar-track-muted">
              <div className="flex gap-6 min-w-max px-4">
                {[
                  {
                    image: projectResidential,
                    title: "Villa Residenziale - Milano",
                    type: "Impianto Fotovoltaico Residenziale",
                    power: "6 kW",
                    description: "Installazione completa di pannelli solari di ultima generazione su abitazione privata con sistema di accumulo energetico."
                  },
                  {
                    image: projectIndustrial,
                    title: "Complesso Industriale - Avellino",
                    type: "Impianto Fotovoltaico Industriale",
                    power: "250 kW",
                    description: "Grande installazione fotovoltaica su capannone industriale con copertura completa del tetto per massima produzione energetica."
                  },
                  {
                    image: projectCommercial,
                    title: "Centro Commerciale - Lombardia",
                    type: "Sistema Ibrido Fotovoltaico + Eolico",
                    power: "180 kW",
                    description: "Soluzione energetica integrata che combina pannelli solari e turbine eoliche per massimizzare la produzione di energia rinnovabile."
                  },
                  {
                    image: projectAgricultural,
                    title: "Azienda Agricola - Campania",
                    type: "Fotovoltaico Agricolo",
                    power: "50 kW",
                    description: "Impianto fotovoltaico a terra con sistema di storage per autoconsumo ottimizzato nelle attività agricole."
                  }
                ].map((project, index) => (
                  <div key={index} className="w-[400px] flex-shrink-0">
                    <Card className="overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border-border hover:border-lime-green bg-gradient-card h-full">
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 bg-lime-green text-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-glow-lime">
                          {project.power}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="mb-2">
                          <span className="text-xs text-lime-green font-semibold uppercase tracking-wider">{project.type}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-primary">{project.title}</h3>
                        <p className="text-muted-foreground text-sm">{project.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 1 - Esperienza */}
      <section className="py-20 px-4 bg-background section-transition-top section-transition-bottom relative" style={{
        '--transition-from': 'hsl(211 100% 22% / 0.3)',
        '--transition-to': 'hsl(214 50% 98% / 0.5)'
      } as React.CSSProperties}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${communitySection.isVisible ? 'animate-fade-in opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <img
                src="/src/assets/hero-solar-sunset.jpg"
                alt="Installazione pannelli solari"
                className="rounded-lg shadow-2xl hover:shadow-glow-lime transition-all duration-300 hover:scale-105"
              />
            </div>
            <div className={`transition-all duration-1000 delay-300 ${communitySection.isVisible ? 'animate-fade-in opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <p className="text-lime-green uppercase tracking-wider text-sm mb-4 font-semibold">LA NOSTRA ESPERIENZA</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Oltre 15 Anni di Eccellenza
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Megasun srl è il punto di riferimento in Campania per soluzioni energetiche
                rinnovabili. La nostra esperienza ci permette di garantire installazioni
                di altissima qualità e un servizio clienti impeccabile.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Ogni progetto è seguito da tecnici specializzati, dalla progettazione alla messa in opera,
                con materiali certificati e garanzie estese.
              </p>
              <Button
                className="bg-lime-green hover:bg-lime-green/90 hover:scale-105 text-foreground font-semibold transition-all shadow-glow-lime hover:animate-pulse-glow"
                asChild
              >
                <Link to="/chi-siamo">Scopri la Nostra Storia</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 - Tecnologia */}
      <section className="py-20 px-4 bg-muted/30 section-transition-top section-transition-bottom relative" style={{
        '--transition-from': 'hsl(214 50% 98% / 0.5)',
        '--transition-to': 'hsl(211 100% 22% / 0.3)'
      } as React.CSSProperties}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`order-2 md:order-1 transition-all duration-1000 ${redditoSection.isVisible ? 'animate-fade-in opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <p className="text-lime-green uppercase tracking-wider text-sm mb-4 font-semibold">INNOVAZIONE CONTINUA</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Tecnologia all'Avanguardia
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Utilizziamo solo i migliori componenti sul mercato: pannelli solari ad alta efficienza,
                inverter di ultima generazione e sistemi di accumulo intelligenti per massimizzare
                il tuo risparmio energetico.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Sistemi di monitoraggio smart ti permettono di controllare la tua produzione energetica
                in tempo reale, direttamente dal tuo smartphone.
              </p>
              <Button
                className="bg-lime-green hover:bg-lime-green/90 hover:scale-105 text-foreground font-semibold transition-all shadow-glow-lime hover:animate-pulse-glow"
                asChild
              >
                <Link to="/soluzioni">Esplora le Soluzioni</Link>
              </Button>
            </div>
            <div className={`order-1 md:order-2 transition-all duration-1000 delay-300 ${redditoSection.isVisible ? 'animate-fade-in opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <img
                src="/src/assets/heat-pump.jpg"
                alt="Tecnologia pompe di calore"
                className="rounded-lg shadow-2xl hover:shadow-glow-lime transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 3 - Assistenza */}
      <section className="py-20 px-4 bg-background section-transition-top section-transition-bottom relative" style={{
        '--transition-from': 'hsl(211 100% 22% / 0.3)',
        '--transition-to': 'hsl(211 100% 22% / 0.3)'
      } as React.CSSProperties}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${solutionsSection.isVisible ? 'animate-fade-in opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <img
                src="/src/assets/geothermal.jpg"
                alt="Assistenza tecnica"
                className="rounded-lg shadow-2xl hover:shadow-glow-lime transition-all duration-300 hover:scale-105"
              />
            </div>
            <div className={`transition-all duration-1000 delay-300 ${solutionsSection.isVisible ? 'animate-fade-in opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <p className="text-lime-green uppercase tracking-wider text-sm mb-4 font-semibold">SEMPRE AL TUO FIANCO</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Assistenza Post-Vendita Garantita
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Il nostro impegno non finisce con l'installazione. Offriamo assistenza tecnica
                continuativa, manutenzione programmata e interventi rapidi in caso di necessità.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Un team dedicato è sempre a tua disposizione per garantire che il tuo impianto
                funzioni al massimo delle prestazioni per tutta la sua vita utile.
              </p>
              <Button
                className="bg-lime-green hover:bg-lime-green/90 hover:scale-105 text-foreground font-semibold transition-all shadow-glow-lime hover:animate-pulse-glow"
                asChild
              >
                <Link to="/contatti">Contattaci</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reddito Energetico */}
      <section ref={redditoSection.ref} className="py-16 text-primary-foreground relative overflow-hidden section-transition-top section-transition-bottom" style={{
        background: 'var(--gradient-header)',
        boxShadow: 'var(--shadow-header)',
        '--transition-from': 'hsl(211 100% 22% / 0.3)',
        '--transition-to': 'hsl(211 100% 22% / 0.3)'
      } as React.CSSProperties}>
        <div className="absolute inset-0 bg-gradient-primary-soft opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
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
            <Button asChild size="lg" className="bg-lime-green hover:bg-lime-green/90 hover:scale-105 text-foreground font-semibold transition-all duration-300 shadow-glow-lime hover:shadow-glow-lime hover:animate-pulse-glow">
              <Link to="/soluzione/reddito-energetico">SCOPRI DI PIÙ</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Soluzioni Energetiche - Interactive Cards */}
      <section ref={solutionsSection.ref} className="py-16 bg-muted/30 section-transition-top section-transition-bottom relative" style={{
        '--transition-from': 'hsl(211 100% 22% / 0.3)',
        '--transition-to': 'hsl(211 40% 70% / 0.2)'
      } as React.CSSProperties}>
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-700 ${solutionsSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-lime-green uppercase tracking-wider text-sm mb-2 font-semibold">I NOSTRI SERVIZI</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Soluzioni Energetiche
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <Card 
                key={index} 
                className={`group cursor-pointer overflow-hidden bg-gradient-card border-border hover:border-lime-green hover:shadow-card-hover hover:shadow-glow-lime transition-all duration-500 hover:-translate-y-3 ${solutionsSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <CardContent className="p-6 h-full flex flex-col relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="mb-4 flex justify-center">
                      <div className={`p-4 rounded-full transition-all duration-300 group-hover:scale-110 ${solution.bgColor}`}>
                        <solution.icon className={`h-12 w-12 ${solution.color} group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center text-primary group-hover:text-lime-green transition-colors duration-300">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground text-center mb-6 flex-1 group-hover:text-foreground transition-colors duration-300">
                      {solution.desc}
                    </p>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full border-border group-hover:bg-lime-green group-hover:text-foreground group-hover:border-lime-green group-hover:shadow-glow-lime transition-all duration-300"
                    >
                      <Link to={solution.link}>
                        Leggi di più 
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className={`text-center mt-12 transition-all duration-700 ${solutionsSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
          animationDelay: '0.5s',
          animationFillMode: 'both'
        }}>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-lime-green text-lime-green hover:bg-lime-green hover:text-foreground hover:shadow-glow-lime transition-all duration-300"
            >
              <Link to="/soluzioni">Vedi Tutte le Soluzioni</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership & Stats */}
      <section ref={partnersSection.ref} className="py-16 bg-blue-light/20 section-transition-top section-transition-bottom relative" style={{
        '--transition-from': 'hsl(214 50% 98% / 0.5)',
        '--transition-to': 'hsl(211 100% 22% / 0.3)'
      } as React.CSSProperties}>
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
            value: "100+"
          }, {
            label: "Anni di Esperienza",
            value: "15+"
          }].map((stat, index) => <div key={index} className={`text-center transition-all duration-700 hover:scale-110 cursor-default group ${partnersSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
            animationDelay: `${index * 0.1}s`,
            animationFillMode: 'both'
          }}>
                <div className="text-4xl font-bold text-secondary mb-2 hover:text-lime-green transition-colors group-hover:drop-shadow-[0_0_10px_hsl(var(--lime-green))]">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaSection.ref} className="py-16 text-primary-foreground relative overflow-hidden section-transition-top" style={{
        background: 'var(--gradient-header)',
        boxShadow: 'var(--shadow-header)',
        '--transition-from': 'hsl(211 40% 70% / 0.2)'
      } as React.CSSProperties}>
        <div className="absolute inset-0 bg-gradient-primary-soft opacity-40"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
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
            <Button asChild size="lg" className="bg-lime-green hover:bg-lime-green/90 hover:scale-105 text-foreground font-semibold transition-all duration-300 shadow-glow-lime hover:shadow-glow-lime hover:animate-pulse-glow">
              <Link to="/contatti">RICHIEDI INFO</Link>
            </Button>
            <a href="tel:08231556627" className="flex items-center gap-2 text-lg hover:text-lime-green transition-colors group">
              <Phone className="h-6 w-6 group-hover:animate-float" />
              <span className="font-semibold">0823 155 6627</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Home;