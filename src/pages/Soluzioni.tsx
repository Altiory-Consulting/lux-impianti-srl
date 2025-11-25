import { Link } from "react-router-dom";
import { Sun, Droplets, Wind, Flame, Mountain, Battery, Zap, Leaf, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Soluzioni = () => {
  const servicesSection = useIntersectionObserver({
    threshold: 0.2
  });
  const solutionsSection = useIntersectionObserver({
    threshold: 0.2
  });

  const services = [
    {
      icon: Sun,
      title: "Progettazione",
      desc: "Progetti su misura per ogni esigenza"
    },
    {
      icon: Zap,
      title: "Preventivi su misura",
      desc: "Soluzioni personalizzate"
    },
    {
      icon: Leaf,
      title: "Installazione",
      desc: "Installatori certificati"
    },
    {
      icon: CheckCircle,
      title: "Manutenzione",
      desc: "Assistenza post-vendita"
    },
    {
      icon: Wind,
      title: "Conto Termico",
      desc: "Accesso agli incentivi"
    },
    {
      icon: Sun,
      title: "Analisi Energetica",
      desc: "Gratuita e professionale"
    }
  ];

  const solutions = [
    {
      icon: Sun,
      title: "Impianti Fotovoltaici",
      desc: "Cattura l'energia del sole e trasformala in elettricità pulita. Riduci le bollette e aumenta l'indipendenza energetica della tua casa o azienda.",
      link: "/soluzione/fotovoltaico",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10 group-hover:bg-amber-500/20"
    },
    {
      icon: Droplets,
      title: "Solare Termico",
      desc: "Sfrutta il calore del sole per riscaldare l'acqua sanitaria. Un sistema efficiente che riduce drasticamente i costi per l'acqua calda.",
      link: "/soluzione/solare-termico",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10 group-hover:bg-orange-500/20"
    },
    {
      icon: Battery,
      title: "Climatizzazione a Pompa di Calore",
      desc: "Tecnologia che sfrutta energia termica dall'aria, dall'acqua o dal terreno per riscaldare e raffrescare gli ambienti con massima efficienza.",
      link: "/soluzione/climatizzazione",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10 group-hover:bg-cyan-500/20"
    },
    {
      icon: Flame,
      title: "Biomasse",
      desc: "Riscaldamento ecologico con legno e pellet. Una fonte rinnovabile che crea un'atmosfera accogliente e riduce i costi energetici.",
      link: "/soluzione/biomasse",
      color: "text-red-500",
      bgColor: "bg-red-500/10 group-hover:bg-red-500/20"
    },
    {
      icon: Wind,
      title: "Eolico",
      desc: "Il vento come fonte di energia rinnovabile. Un investimento sostenibile che riduce la dipendenza dai combustibili fossili.",
      link: "/soluzione/eolico",
      color: "text-sky-500",
      bgColor: "bg-sky-500/10 group-hover:bg-sky-500/20"
    },
    {
      icon: Mountain,
      title: "Geotermico",
      desc: "Sfrutta il calore del sottosuolo per riscaldare e raffrescare la tua casa. Comfort e risparmio energetico tutto l'anno.",
      link: "/soluzione/geotermico",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10 group-hover:bg-emerald-500/20"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-muted py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>{" "}
            / Soluzioni
          </p>
        </div>
      </div>

      {/* Page Header */}
      <section 
        className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden py-12 md:py-20"
        style={{
          background: 'linear-gradient(135deg, hsl(211 100% 18%) 0%, hsl(211 95% 25%) 35%, hsl(211 85% 32%) 70%, hsl(211 75% 38%) 100%)',
        }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0yaC0yYy0xLjEgMC0yIC45LTIgMnYyYzAgMS4xLjkgMiAyIDJoMmMxLjEgMCAyLS45IDItMnYtMnoiLz48L2c+DQo8L2c+PC9zdmc+')] opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-lime-green/20 text-white px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8 backdrop-blur-md border-2 border-lime-green/40 shadow-xl">
              <Zap className="h-4 w-4 md:h-5 md:w-5 text-lime-green drop-shadow-lg" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-wider drop-shadow-md">Tecnologie Rinnovabili</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] px-4">
              Le Nostre <br />
              <span className="text-lime-green drop-shadow-[0_0_30px_rgba(156,225,55,0.5)]">Soluzioni Energetiche</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-10 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] px-4">
              Scopri le tecnologie rinnovabili che trasformeranno il tuo modo di consumare energia
            </p>
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

      {/* Solutions Grid */}
      <section ref={solutionsSection.ref} className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
                        Scopri di più 
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-light/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
              Perché Scegliere le Nostre Soluzioni
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                <p className="text-lg font-semibold mb-2">Energie Rinnovabili</p>
                <p className="text-muted-foreground">Soluzioni completamente sostenibili</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">15+</div>
                <p className="text-lg font-semibold mb-2">Anni di Esperienza</p>
                <p className="text-muted-foreground">Competenza e affidabilità</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">98%</div>
                <p className="text-lg font-semibold mb-2">Clienti Soddisfatti</p>
                <p className="text-muted-foreground">La tua soddisfazione è la nostra priorità</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trova la Soluzione Energetica Perfetta per Te
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contattaci per una consulenza gratuita e scopri quale tecnologia si adatta meglio alle
            tue esigenze
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-lime-green hover:bg-lime-green/90 hover:scale-105 text-foreground font-semibold transition-all duration-300 shadow-glow-lime hover:shadow-glow-lime hover:animate-pulse-glow">
              <Link to="/contatti">Richiedi Consulenza Gratuita</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/chi-siamo">Scopri Chi Siamo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Soluzioni;
