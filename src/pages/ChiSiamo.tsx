import { Link } from "react-router-dom";
import { Target, Heart, Award, CheckCircle, Users, TrendingUp, Lightbulb, Shield, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
const ChiSiamo = () => {
  const heroSection = useIntersectionObserver({
    threshold: 0.2
  });
  const statsSection = useIntersectionObserver({
    threshold: 0.2
  });
  const whyUsSection = useIntersectionObserver({
    threshold: 0.2
  });
  const missionSection = useIntersectionObserver({
    threshold: 0.2
  });
  const valuesSection = useIntersectionObserver({
    threshold: 0.2
  });
  const teamSection = useIntersectionObserver({
    threshold: 0.2
  });
  const objectivesSection = useIntersectionObserver({
    threshold: 0.2
  });
  const certificationsSection = useIntersectionObserver({
    threshold: 0.2
  });
  const ctaSection = useIntersectionObserver({
    threshold: 0.2
  });
  const stats = [{
    value: "100+",
    label: "Progetti Completati",
    icon: Award
  }, {
    value: "98%",
    label: "Clienti Soddisfatti",
    icon: Users
  }, {
    value: "15+",
    label: "Anni di Esperienza",
    icon: Calendar
  }, {
    value: "50+",
    label: "Partner Attivi",
    icon: TrendingUp
  }];
  const whyChooseUs = [{
    icon: Lightbulb,
    title: "Soluzioni Innovative",
    desc: "Utilizziamo tecnologie all'avanguardia per garantire massima efficienza energetica e risparmio",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10"
  }, {
    icon: Shield,
    title: "Garanzia di Qualità",
    desc: "Materiali certificati e installazioni a norma con garanzie estese su tutti i componenti",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  }, {
    icon: Users,
    title: "Team Qualificato",
    desc: "Tecnici specializzati e certificati seguono ogni progetto dalla A alla Z",
    color: "text-green-500",
    bgColor: "bg-green-500/10"
  }, {
    icon: TrendingUp,
    title: "Risparmio Garantito",
    desc: "Riduci i costi energetici fino al 70% con i nostri impianti ad alta efficienza",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  }];
  const team = [{
    name: "Marco Rossi",
    role: "CEO & Founder",
    icon: Lightbulb
  }, {
    name: "Laura Bianchi",
    role: "Technical Director",
    icon: Shield
  }, {
    name: "Giuseppe Verdi",
    role: "Project Manager",
    icon: Target
  }, {
    name: "Sofia Russo",
    role: "Customer Success",
    icon: Heart
  }];
  const certifications = ["ISO 14001 - Gestione Ambientale", "ISO 18001 - Sicurezza sul Lavoro", "UNI EN ISO 9001 - Qualità", "UNI CEI 11352 - Energy Service Company"];
  return <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-muted py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>{" "}
            / Chi Siamo
          </p>
        </div>
      </div>

      {/* Page Header */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-20"
        style={{
          background: 'linear-gradient(135deg, hsl(211 100% 18%) 0%, hsl(211 95% 25%) 35%, hsl(211 85% 32%) 70%, hsl(211 75% 38%) 100%)',
        }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0yaC0yYy0xLjEgMC0yIC45LTIgMnYyYzAgMS4xLjkgMiAyIDJoMmMxLjEgMCAyLS45IDItMnYtMnoiLz48L2c+DQo8L2c+PC9zdmc+')] opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-full mb-8 backdrop-blur-md border-2 border-white/40 shadow-xl">
              <Users className="h-5 w-5 text-lime-green" />
              <span className="text-sm font-bold uppercase tracking-wider">Il Nostro Team</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
              Chi <span className="text-lime-green drop-shadow-[0_0_30px_rgba(156,225,55,0.5)]">Siamo</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              Partner di fiducia per soluzioni energetiche sostenibili e innovative
            </p>
            
            <div className="inline-flex items-center justify-center gap-2 bg-white/25 backdrop-blur-lg rounded-2xl px-6 py-4 border-2 border-white/30 shadow-2xl">
              <MapPin className="h-6 w-6 text-lime-green" />
              <span className="text-lg font-bold text-white">Caserta, Campania</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsSection.ref} className="py-16 bg-background section-transition-top section-transition-bottom relative" style={{
      '--transition-from': 'hsl(210 35% 42% / 0.3)',
      '--transition-to': 'hsl(214 50% 98% / 0.5)'
    } as React.CSSProperties}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => <Card key={index} className={`text-center group cursor-default overflow-hidden bg-gradient-card border-border hover:border-lime-green hover:shadow-card-hover hover:shadow-glow-lime transition-all duration-500 hover:-translate-y-3 ${statsSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
            animationDelay: `${index * 0.1}s`,
            animationFillMode: 'both'
          }}>
                <CardContent className="p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="mb-3 flex justify-center">
                      <div className="p-3 rounded-full bg-lime-green/10 group-hover:bg-lime-green/20 transition-all duration-300">
                        <stat.icon className="h-8 w-8 text-lime-green group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-lime-green mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyUsSection.ref} className="py-16 bg-muted/30 section-transition-top section-transition-bottom relative" style={{
      '--transition-from': 'hsl(214 50% 98% / 0.5)',
      '--transition-to': 'hsl(211 40% 70% / 0.2)'
    } as React.CSSProperties}>
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-700 ${whyUsSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-lime-green uppercase tracking-wider text-sm mb-2 font-semibold">I NOSTRI PUNTI DI FORZA</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Perché Sceglierci</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Scopri cosa ci rende il partner ideale per le tue esigenze energetiche
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => <Card key={index} className={`group cursor-pointer overflow-hidden bg-gradient-card border-border hover:border-lime-green hover:shadow-card-hover hover:shadow-glow-lime transition-all duration-500 hover:-translate-y-3 ${whyUsSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
            animationDelay: `${index * 0.1}s`,
            animationFillMode: 'both'
          }}>
                <CardContent className="p-6 text-center relative h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="mb-4 flex justify-center">
                      <div className={`p-4 rounded-full transition-all duration-300 group-hover:scale-110 ${item.bgColor}`}>
                        <item.icon className={`h-12 w-12 ${item.color} group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-primary group-hover:text-lime-green transition-colors duration-300 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 flex-1">
                      {item.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section ref={missionSection.ref} className="py-16 section-transition-top section-transition-bottom relative" style={{
      '--transition-from': 'hsl(0 0% 100% / 0.5)',
      '--transition-to': 'hsl(211 40% 70% / 0.2)'
    } as React.CSSProperties}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className={`transition-all duration-700 ${missionSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="flex items-center gap-3 mb-6 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <Target className="h-12 w-12 text-secondary relative z-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-lg" />
                </div>
                <h2 className="text-3xl font-bold text-primary group-hover:text-lime-green transition-colors duration-300">La Nostra Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-4 hover:text-foreground transition-colors duration-300">
                Il nostro obiettivo è creare ambienti sostenibili e confortevoli attraverso soluzioni
                energetiche innovative e personalizzate.
              </p>
              <p className="text-lg text-muted-foreground mb-4 hover:text-foreground transition-colors duration-300">
                Il nostro team di professionisti qualificati assiste il cliente in ogni fase del
                progetto: dalla progettazione iniziale all'installazione, fino all'assistenza
                post-vendita continuativa.
              </p>
              <p className="text-lg text-muted-foreground hover:text-foreground transition-colors duration-300">
                Crediamo nell'importanza di costruire relazioni durature basate sulla fiducia,
                l'affidabilità e la competenza tecnica.
              </p>
            </div>
            <Card className={`shadow-elevation hover:shadow-card-hover hover:shadow-glow-lime transition-all duration-500 hover:-translate-y-3 bg-gradient-card border-border hover:border-lime-green overflow-hidden group ${missionSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
            animationDelay: '0.2s',
            animationFillMode: 'both'
          }}>
              <div className="absolute inset-0 bg-gradient-to-br from-lime-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <ul className="space-y-4">
                  {["Consulenza energetica personalizzata", "Progettazione su misura", "Installazione professionale", "Manutenzione programmata", "Assistenza post-vendita h24", "Accesso agli incentivi statali"].map((item, index) => <li key={index} className={`flex items-start gap-3 group/item hover:translate-x-2 transition-all duration-300 ${missionSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
                      animationDelay: `${0.3 + index * 0.1}s`,
                      animationFillMode: 'both'
                    }}>
                      <div className="relative">
                        <div className="absolute inset-0 bg-secondary/30 rounded-full blur-md opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                        <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1 relative z-10 group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-300" />
                      </div>
                      <span className="text-lg group-hover/item:text-lime-green group-hover/item:font-semibold transition-all duration-300">{item}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesSection.ref} className="py-16 bg-blue-light/20 section-transition-top section-transition-bottom relative" style={{
      '--transition-from': 'hsl(211 40% 70% / 0.2)',
      '--transition-to': 'hsl(214 50% 98% / 0.5)'
    } as React.CSSProperties}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`flex items-center gap-3 mb-8 transition-all duration-700 group ${valuesSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <Heart className="h-12 w-12 text-secondary drop-shadow-lg relative z-10 group-hover:scale-125 group-hover:fill-secondary/20 transition-all duration-500" />
              </div>
              <h2 className="text-3xl font-bold text-primary group-hover:text-lime-green transition-colors duration-300">I Nostri Valori</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className={`hover:shadow-card-hover hover:shadow-glow-lime transition-all duration-500 hover:-translate-y-3 bg-gradient-card hover:border-lime-green overflow-hidden group cursor-pointer ${valuesSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
              animationDelay: '0.1s',
              animationFillMode: 'both'
            }}>
                <div className="absolute inset-0 bg-gradient-to-br from-lime-green/10 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-lime-green/10 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700"></div>
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-lime-green transition-colors duration-300">Ascolto del Cliente</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Il valore aggiunto della nostra azienda consiste nell'ascoltare attentamente il
                    cliente e proporre soluzioni personalizzate che ottimizzano costi, tempi e
                    impatto ambientale. Ogni progetto è studiato per rispondere alle esigenze
                    specifiche del cliente.
                  </p>
                </CardContent>
              </Card>
              <Card className={`hover:shadow-card-hover hover:shadow-glow-lime transition-all duration-500 hover:-translate-y-3 bg-gradient-card hover:border-lime-green overflow-hidden group cursor-pointer ${valuesSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
              animationDelay: '0.2s',
              animationFillMode: 'both'
            }}>
                <div className="absolute inset-0 bg-gradient-to-br from-lime-green/10 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-lime-green/10 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700"></div>
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-lime-green transition-colors duration-300">Sostenibilità</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Crediamo fortemente nell'importanza della sostenibilità ambientale. Ogni
                    soluzione che proponiamo è progettata per ridurre l'impatto ambientale e
                    promuovere l'utilizzo di energie rinnovabili, contribuendo a un futuro più verde.
                  </p>
                </CardContent>
              </Card>
              <Card className={`hover:shadow-card-hover hover:shadow-glow-lime transition-all duration-500 hover:-translate-y-3 bg-gradient-card hover:border-lime-green overflow-hidden group cursor-pointer ${valuesSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
              animationDelay: '0.3s',
              animationFillMode: 'both'
            }}>
                <div className="absolute inset-0 bg-gradient-to-br from-lime-green/10 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-lime-green/10 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700"></div>
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-lime-green transition-colors duration-300">Qualità e Affidabilità</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Utilizziamo solo componenti e materiali di alta qualità forniti dai migliori
                    partner del settore. La nostra esperienza pluriennale e le certificazioni
                    conseguite garantiscono standard qualitativi elevati.
                  </p>
                </CardContent>
              </Card>
              <Card className={`hover:shadow-card-hover hover:shadow-glow-lime transition-all duration-500 hover:-translate-y-3 bg-gradient-card hover:border-lime-green overflow-hidden group cursor-pointer ${valuesSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
              animationDelay: '0.4s',
              animationFillMode: 'both'
            }}>
                <div className="absolute inset-0 bg-gradient-to-br from-lime-green/10 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-lime-green/10 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700"></div>
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-lime-green transition-colors duration-300">Innovazione Continua</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Ci impegniamo a rimanere sempre aggiornati sulle ultime tecnologie e innovazioni
                    nel settore delle energie rinnovabili, per offrire ai nostri clienti le
                    soluzioni più avanzate ed efficienti.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section ref={objectivesSection.ref} className="py-16 section-transition-top section-transition-bottom relative" style={{
      '--transition-from': 'hsl(214 50% 98% / 0.5)',
      '--transition-to': 'hsl(211 100% 22% / 0.3)'
    } as React.CSSProperties}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className={`flex items-center gap-3 mb-8 transition-all duration-700 group ${objectivesSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <Award className="h-12 w-12 text-secondary drop-shadow-lg relative z-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
              </div>
              <h2 className="text-3xl font-bold text-primary group-hover:text-lime-green transition-colors duration-300">I Nostri Obiettivi</h2>
            </div>
            <Card className={`shadow-elevation hover:shadow-card-hover hover:shadow-glow-lime transition-all duration-500 hover:-translate-y-3 bg-gradient-card hover:border-lime-green overflow-hidden group cursor-pointer ${objectivesSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
            animationDelay: '0.2s',
            animationFillMode: 'both'
          }}>
              <div className="absolute inset-0 bg-gradient-to-br from-lime-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-64 h-64 bg-lime-green/10 rounded-full blur-3xl -translate-y-32 -translate-x-32 group-hover:-translate-x-16 group-hover:-translate-y-16 transition-transform duration-700"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-32 translate-x-32 group-hover:translate-x-16 group-hover:translate-y-16 transition-transform duration-700"></div>
              <CardContent className="p-8 relative z-10">
                <p className={`text-lg text-muted-foreground group-hover:text-foreground mb-6 transition-all duration-300 ${objectivesSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
                  animationDelay: '0.3s',
                  animationFillMode: 'both'
                }}>
                  Il nostro obiettivo principale è diventare il partner di fiducia dei nostri
                  clienti, offrendo soluzioni affidabili nel tempo e un'assistenza post-vendita
                  puntuale e professionale.
                </p>
                <p className={`text-lg text-muted-foreground group-hover:text-foreground mb-6 transition-all duration-300 ${objectivesSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
                  animationDelay: '0.4s',
                  animationFillMode: 'both'
                }}>
                  Vogliamo che ogni cliente sia pienamente soddisfatto del proprio investimento in
                  energie rinnovabili, beneficiando di un risparmio economico concreto e di un
                  comfort abitativo ottimale.
                </p>
                <div className={`relative inline-block ${objectivesSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
                  animationDelay: '0.5s',
                  animationFillMode: 'both'
                }}>
                  <div className="absolute inset-0 bg-lime-green/20 blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <p className="text-lg font-semibold text-primary group-hover:text-lime-green transition-colors duration-300 relative z-10">
                    La soddisfazione del cliente è la nostra più grande ricompensa.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      

      {/* Team Section */}
      


      {/* CTA */}
      <section ref={ctaSection.ref} className="py-16 section-transition-top relative" style={{
      '--transition-from': 'hsl(211 40% 70% / 0.2)'
    } as React.CSSProperties}>
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-primary transition-all duration-700 ${ctaSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Scegli un Futuro più Green
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto text-muted-foreground transition-all duration-700 ${ctaSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
          animationDelay: '0.2s',
          animationFillMode: 'both'
        }}>
            Scopri come possiamo aiutarti a risparmiare energia e ridurre i costi
          </p>
          <Button asChild size="lg" className="bg-lime-green hover:bg-lime-green/90 hover:scale-105 text-foreground font-semibold transition-all duration-300 shadow-glow-lime hover:shadow-glow-lime hover:animate-pulse-glow">
            <Link to="/contatti">Contattaci Ora</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>;
};
export default ChiSiamo;