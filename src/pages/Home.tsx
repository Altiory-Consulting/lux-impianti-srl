import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Sun, Wind, Zap, Leaf, Phone, CheckCircle, ArrowRight, Droplets, Thermometer, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import projectHeating from "@/assets/project-heating-1.jpg";
import projectSolarRooftop from "@/assets/project-solar-rooftop-1.jpg";
import projectSolarTiles from "@/assets/project-solar-tiles-1.jpg";
import projectSolarSunset from "@/assets/project-solar-sunset-1.jpg";
import postSalesSupport from "@/assets/post-sales-support.jpg";
const Home = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const heroSlides = [
    {
      video: "/videos/hero-video.mp4",
      tagline: "LA TUA VISIONE, TU LO IMMAGINI, NOI LO REALIZZIAMO",
      headline: "Un futuro green, creato insieme."
    },
    {
      video: "/videos/hero-video.mp4", // Sostituire con il secondo video
      tagline: "INNOVAZIONE E SOSTENIBILITÀ",
      headline: "Energia pulita per un domani migliore."
    },
    {
      video: "/videos/hero-video.mp4", // Sostituire con il terzo video
      tagline: "SOLUZIONI SU MISURA",
      headline: "Trasformiamo la tua energia in risparmio."
    }
  ];

  const handleVideoEnd = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % heroSlides.length);
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentVideoIndex]);

  const servicesSection = useIntersectionObserver({
    threshold: 0.01,
    rootMargin: '300px'
  });
  const communitySection = useIntersectionObserver({
    threshold: 0.01,
    rootMargin: '300px'
  });
  const redditoSection = useIntersectionObserver({
    threshold: 0.01,
    rootMargin: '300px'
  });
  const solutionsSection = useIntersectionObserver({
    threshold: 0.01,
    rootMargin: '300px'
  });
  const partnersSection = useIntersectionObserver({
    threshold: 0.01,
    rootMargin: '300px'
  });
  const ctaSection = useIntersectionObserver({
    threshold: 0.01,
    rootMargin: '300px'
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
    icon: Euro,
    title: "Reddito Energetico",
    desc: "Accedi ai contributi statali per il fotovoltaico",
    link: "/soluzione/reddito-energetico",
    color: "text-green-500",
    bgColor: "bg-green-500/10 group-hover:bg-green-500/20"
  }];
  return <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Full Screen with Video Carousel */}
      <section className="relative min-h-[70vh] md:min-h-[calc(100vh-120px)] flex items-center overflow-hidden">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          playsInline 
          onEnded={handleVideoEnd}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        >
          <source src={heroSlides[currentVideoIndex].video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <p className="text-lime-green uppercase tracking-wider text-xs sm:text-sm md:text-base mb-3 md:mb-4 font-semibold leading-relaxed">
              {heroSlides[currentVideoIndex].tagline}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 md:mb-6 leading-tight">
              {heroSlides[currentVideoIndex].headline}
            </h1>
            <Button asChild size="lg" className="bg-lime-green hover:bg-lime-green/90 hover:scale-105 text-foreground font-semibold text-base md:text-lg px-6 md:px-8 py-4 md:py-6 transition-all duration-300 shadow-glow-lime hover:shadow-glow-lime hover:animate-pulse-glow">
              <Link to="/contatti">
                RICHIEDI INFO
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Video Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentVideoIndex(index);
                  setIsTransitioning(false);
                }, 500);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentVideoIndex 
                  ? 'bg-lime-green w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Services Section - Interactive Cards */}
      <section ref={servicesSection.ref} className="py-16 bg-background section-transition-top section-transition-bottom relative" style={{
      '--transition-from': 'hsl(0 0% 0% / 0.3)',
      '--transition-to': 'hsl(214 50% 98% / 0.5)'
    } as React.CSSProperties}>
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-700 ${servicesSection.isVisible ? 'animate-fade-in' : 'translate-y-4'}`}>
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
            {services.map((service, index) => <Card key={index} className={`group cursor-pointer overflow-hidden bg-gradient-card border-border hover:border-lime-green hover:shadow-card-hover hover:shadow-glow-lime transition-all duration-500 hover:-translate-y-2 ${servicesSection.isVisible ? 'animate-scale-in' : 'scale-95'}`} style={{
            animationDelay: `${index * 0.1}s`,
            animationFillMode: 'both'
          }}>
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
              </Card>)}
          </div>
        </div>
      </section>

      {/* I Nostri Lavori - Projects Carousel */}
      <section ref={communitySection.ref} className="py-16 bg-muted/30 section-transition-top section-transition-bottom relative" style={{
      '--transition-from': 'hsl(0 0% 100% / 0.5)',
      '--transition-to': 'hsl(211 100% 22% / 0.3)'
    } as React.CSSProperties}>
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center mb-12 transition-all duration-700 ${communitySection.isVisible ? 'animate-fade-in' : 'translate-y-4'}`}>
            <p className="text-lime-green uppercase tracking-wider text-sm mb-2">PORTFOLIO</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              I Nostri Lavori
            </h2>
            <p className="text-lg text-muted-foreground">
              Scopri alcuni dei progetti energetici che abbiamo realizzato con successo
            </p>
          </div>

          <div className={`transition-all duration-700 ${communitySection.isVisible ? 'animate-scale-in' : 'scale-95'}`}>
            <div className="overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0">
              <div className="flex gap-4 md:gap-6 min-w-max">
                {[{
                image: projectHeating,
                title: "Sistema Riscaldamento a Pavimento",
                type: "Climatizzazione",
                power: "12 kW",
                description: "Installazione di sistema di riscaldamento radiante a pavimento con pompa di calore per comfort ottimale ed efficienza energetica."
              }, {
                image: projectSolarRooftop,
                title: "Impianto Fotovoltaico su Tetto Piano",
                type: "Fotovoltaico Commerciale",
                power: "45 kW",
                description: "Sistema fotovoltaico su tetto piano con struttura ottimizzata per massima esposizione solare e produzione energetica."
              }, {
                image: projectSolarTiles,
                title: "Impianto Residenziale su Tegole",
                type: "Fotovoltaico Residenziale",
                power: "8 kW",
                description: "Installazione di pannelli fotovoltaici ad alta efficienza su tetto in tegole con integrazione architettonica ottimale."
              }, {
                image: projectSolarSunset,
                title: "Grande Impianto Fotovoltaico",
                type: "Fotovoltaico Industriale",
                power: "120 kW",
                description: "Installazione fotovoltaica di grande potenza su copertura industriale per massimizzare l'autoconsumo aziendale."
              }].map((project, index) => <div key={index} className="w-[280px] sm:w-[350px] md:w-[400px] flex-shrink-0">
                    <Card className="overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border-border hover:border-lime-green bg-gradient-card h-full">
                      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                        <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-lime-green text-foreground px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold shadow-glow-lime">
                          {project.power}
                        </div>
                      </div>
                      <CardContent className="p-4 md:p-6">
                        <div className="mb-2">
                          <span className="text-xs text-lime-green font-semibold uppercase tracking-wider">{project.type}</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-primary">{project.title}</h3>
                        <p className="text-muted-foreground text-xs md:text-sm">{project.description}</p>
                      </CardContent>
                    </Card>
                  </div>)}
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
            <div className={`transition-all duration-1000 ${communitySection.isVisible ? 'animate-fade-in opacity-100 translate-x-0' : 'opacity-100 -translate-x-4'}`}>
              <img alt="Installazione pannelli solari" className="rounded-lg shadow-2xl hover:shadow-glow-lime transition-all duration-300 hover:scale-105" src="/lovable-uploads/73d574f0-46cc-4c33-a759-ea56e6eb39d1.png" />
            </div>
            <div className={`transition-all duration-1000 delay-300 ${communitySection.isVisible ? 'animate-fade-in opacity-100 translate-x-0' : 'opacity-100 translate-x-4'}`}>
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
              <Button className="bg-lime-green hover:bg-lime-green/90 hover:scale-105 text-foreground font-semibold transition-all shadow-glow-lime hover:animate-pulse-glow" asChild>
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
            <div className={`order-2 md:order-1 transition-all duration-1000 ${redditoSection.isVisible ? 'animate-fade-in opacity-100 translate-x-0' : 'opacity-100 -translate-x-4'}`}>
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
              <Button className="bg-lime-green hover:bg-lime-green/90 hover:scale-105 text-foreground font-semibold transition-all shadow-glow-lime hover:animate-pulse-glow" asChild>
                <Link to="/soluzioni">Esplora le Soluzioni</Link>
              </Button>
            </div>
            <div className={`order-1 md:order-2 transition-all duration-1000 delay-300 ${redditoSection.isVisible ? 'animate-fade-in opacity-100 translate-x-0' : 'opacity-100 translate-x-4'}`}>
              <img alt="Tecnologia pompe di calore" className="rounded-lg shadow-2xl hover:shadow-glow-lime transition-all duration-300 hover:scale-105" src="/lovable-uploads/fffeab52-7bd4-4694-91fc-a098ed4b6967.png" />
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
            <div className={`transition-all duration-1000 ${solutionsSection.isVisible ? 'animate-fade-in opacity-100 translate-x-0' : 'opacity-100 -translate-x-4'}`}>
              <img alt="Assistenza tecnica post-vendita" className="rounded-lg shadow-2xl hover:shadow-glow-lime transition-all duration-300 hover:scale-105" src="/lovable-uploads/19160f48-ec2b-4a52-9f93-2a1b07df1125.png" />
            </div>
            <div className={`transition-all duration-1000 delay-300 ${solutionsSection.isVisible ? 'animate-fade-in opacity-100 translate-x-0' : 'opacity-100 translate-x-4'}`}>
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
              <Button className="bg-lime-green hover:bg-lime-green/90 hover:scale-105 text-foreground font-semibold transition-all shadow-glow-lime hover:animate-pulse-glow" asChild>
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
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${redditoSection.isVisible ? 'animate-fade-in' : 'translate-y-4'}`}>
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
          <div className={`text-center mb-12 transition-all duration-700 ${solutionsSection.isVisible ? 'animate-fade-in' : 'translate-y-4'}`}>
            <p className="text-lime-green uppercase tracking-wider text-sm mb-2 font-semibold">I NOSTRI SERVIZI</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Soluzioni Energetiche
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => <Card key={index} className={`group cursor-pointer overflow-hidden bg-gradient-card border-border hover:border-lime-green hover:shadow-card-hover hover:shadow-glow-lime transition-all duration-500 hover:-translate-y-3 ${solutionsSection.isVisible ? 'animate-scale-in' : 'scale-95'}`} style={{
            animationDelay: `${index * 0.1}s`,
            animationFillMode: 'both'
          }}>
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
                    <Button asChild variant="outline" className="w-full border-border group-hover:bg-lime-green group-hover:text-foreground group-hover:border-lime-green group-hover:shadow-glow-lime transition-all duration-300">
                      <Link to={solution.link}>
                        Leggi di più 
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          <div className={`text-center mt-12 transition-all duration-700 ${solutionsSection.isVisible ? 'animate-fade-in' : 'translate-y-4'}`} style={{
          animationDelay: '0.5s',
          animationFillMode: 'both'
        }}>
            <Button asChild size="lg" variant="outline" className="border-lime-green text-lime-green hover:bg-lime-green hover:text-foreground hover:shadow-glow-lime transition-all duration-300">
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
          <div className={`text-center mb-12 transition-all duration-700 ${partnersSection.isVisible ? 'animate-fade-in' : 'translate-y-4'}`}>
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
          }].map((stat, index) => <div key={index} className={`text-center transition-all duration-700 hover:scale-110 cursor-default group ${partnersSection.isVisible ? 'animate-scale-in' : 'scale-95'}`} style={{
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
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ${ctaSection.isVisible ? 'animate-fade-in' : 'translate-y-4'}`}>
            Scegli un Futuro più Green
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto transition-all duration-700 ${ctaSection.isVisible ? 'animate-fade-in' : 'translate-y-4'}`} style={{
          animationDelay: '0.2s',
          animationFillMode: 'both'
        }}>
            Contattaci per una consulenza energetica gratuita e scopri come risparmiare con le
            energie rinnovabili
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ${ctaSection.isVisible ? 'animate-scale-in' : 'scale-95'}`} style={{
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
