import { Link } from "react-router-dom";
import { Target, Heart, Award, CheckCircle, Users, TrendingUp, Lightbulb, Shield, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
const ChiSiamo = () => {
  const heroSection = useIntersectionObserver({ threshold: 0.2 });
  const statsSection = useIntersectionObserver({ threshold: 0.2 });
  const timelineSection = useIntersectionObserver({ threshold: 0.2 });
  const missionSection = useIntersectionObserver({
    threshold: 0.2
  });
  const valuesSection = useIntersectionObserver({
    threshold: 0.2
  });
  const teamSection = useIntersectionObserver({ threshold: 0.2 });
  const objectivesSection = useIntersectionObserver({
    threshold: 0.2
  });
  const certificationsSection = useIntersectionObserver({
    threshold: 0.2
  });
  const ctaSection = useIntersectionObserver({
    threshold: 0.2
  });
  
  const stats = [
    { value: "100+", label: "Progetti Completati", icon: Award },
    { value: "98%", label: "Clienti Soddisfatti", icon: Users },
    { value: "15+", label: "Anni di Esperienza", icon: Calendar },
    { value: "50+", label: "Partner Attivi", icon: TrendingUp }
  ];

  const timeline = [
    { year: "2009", title: "Fondazione", desc: "Nasce Megasun con l'obiettivo di promuovere energie rinnovabili" },
    { year: "2013", title: "Espansione", desc: "Apertura di nuove sedi in tutta la Campania" },
    { year: "2018", title: "Certificazioni", desc: "Ottenimento delle principali certificazioni ISO" },
    { year: "2025", title: "Oggi", desc: "Leader regionale nelle soluzioni energetiche sostenibili" }
  ];

  const team = [
    { name: "Marco Rossi", role: "CEO & Founder", icon: Lightbulb },
    { name: "Laura Bianchi", role: "Technical Director", icon: Shield },
    { name: "Giuseppe Verdi", role: "Project Manager", icon: Target },
    { name: "Sofia Russo", role: "Customer Success", icon: Heart }
  ];

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
      <section className="text-primary-foreground py-20 relative overflow-hidden" style={{
      background: 'var(--gradient-header)',
      boxShadow: 'var(--shadow-header)'
    }}>
        <div className="absolute inset-0 bg-gradient-primary-soft opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Chi Siamo</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in" style={{
            animationDelay: '0.2s',
            animationFillMode: 'both'
          }}>
            Partner di fiducia per soluzioni energetiche sostenibili e innovative
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 animate-fade-in" style={{
            animationDelay: '0.4s',
            animationFillMode: 'both'
          }}>
            <MapPin className="h-5 w-5" />
            <span className="text-lg">Caserta, Campania</span>
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
            {stats.map((stat, index) => (
              <Card key={index} className={`text-center group cursor-default overflow-hidden bg-gradient-card border-border hover:border-lime-green hover:shadow-card-hover hover:shadow-glow-lime transition-all duration-500 hover:-translate-y-3 ${statsSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineSection.ref} className="py-16 bg-muted/30 section-transition-top section-transition-bottom relative" style={{
        '--transition-from': 'hsl(214 50% 98% / 0.5)',
        '--transition-to': 'hsl(211 40% 70% / 0.2)'
      } as React.CSSProperties}>
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-700 ${timelineSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-lime-green uppercase tracking-wider text-sm mb-2 font-semibold">LA NOSTRA STORIA</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Il Nostro Percorso</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-lime-green to-secondary hidden md:block"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative mb-12 transition-all duration-700 ${timelineSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'both'
                }}>
                  <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1 md:text-right">
                      <Card className="group cursor-pointer overflow-hidden bg-gradient-card border-border hover:border-lime-green hover:shadow-card-hover hover:shadow-glow-lime transition-all duration-500 hover:-translate-y-2">
                        <CardContent className="p-6 relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-lime-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-lime-green mb-2">{item.title}</h3>
                            <p className="text-muted-foreground group-hover:text-foreground transition-colors">{item.desc}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-lime-green to-secondary flex items-center justify-center font-bold text-xl text-foreground shadow-glow-lime z-10 hover:scale-125 transition-transform duration-300">
                      {item.year}
                    </div>
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                </div>
              ))}
            </div>
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
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-12 w-12 text-secondary group-hover:scale-125 transition-all duration-300 drop-shadow-lg" />
                <h2 className="text-3xl font-bold text-primary">La Nostra Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                Il nostro obiettivo è creare ambienti sostenibili e confortevoli attraverso soluzioni
                energetiche innovative e personalizzate.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Il nostro team di professionisti qualificati assiste il cliente in ogni fase del
                progetto: dalla progettazione iniziale all'installazione, fino all'assistenza
                post-vendita continuativa.
              </p>
              <p className="text-lg text-muted-foreground">
                Crediamo nell'importanza di costruire relazioni durature basate sulla fiducia,
                l'affidabilità e la competenza tecnica.
              </p>
            </div>
            <Card className={`shadow-elevation hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border hover:border-lime-green ${missionSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
            animationDelay: '0.2s',
            animationFillMode: 'both'
          }}>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {["Consulenza energetica personalizzata", "Progettazione su misura", "Installazione professionale", "Manutenzione programmata", "Assistenza post-vendita h24", "Accesso agli incentivi statali"].map((item, index) => <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-lg">{item}</span>
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
            <div className={`flex items-center gap-3 mb-8 transition-all duration-700 ${valuesSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <Heart className="h-12 w-12 text-secondary drop-shadow-lg" />
              <h2 className="text-3xl font-bold text-primary">I Nostri Valori</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className={`hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 bg-gradient-card hover:border-lime-green ${valuesSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
              animationDelay: '0.1s',
              animationFillMode: 'both'
            }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Ascolto del Cliente</h3>
                  <p className="text-muted-foreground">
                    Il valore aggiunto della nostra azienda consiste nell'ascoltare attentamente il
                    cliente e proporre soluzioni personalizzate che ottimizzano costi, tempi e
                    impatto ambientale. Ogni progetto è studiato per rispondere alle esigenze
                    specifiche del cliente.
                  </p>
                </CardContent>
              </Card>
              <Card className={`hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 bg-gradient-card hover:border-lime-green ${valuesSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
              animationDelay: '0.2s',
              animationFillMode: 'both'
            }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Sostenibilità</h3>
                  <p className="text-muted-foreground">
                    Crediamo fortemente nell'importanza della sostenibilità ambientale. Ogni
                    soluzione che proponiamo è progettata per ridurre l'impatto ambientale e
                    promuovere l'utilizzo di energie rinnovabili, contribuendo a un futuro più verde.
                  </p>
                </CardContent>
              </Card>
              <Card className={`hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 bg-gradient-card hover:border-lime-green ${valuesSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
              animationDelay: '0.3s',
              animationFillMode: 'both'
            }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Qualità e Affidabilità</h3>
                  <p className="text-muted-foreground">
                    Utilizziamo solo componenti e materiali di alta qualità forniti dai migliori
                    partner del settore. La nostra esperienza pluriennale e le certificazioni
                    conseguite garantiscono standard qualitativi elevati.
                  </p>
                </CardContent>
              </Card>
              <Card className={`hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 bg-gradient-card hover:border-lime-green ${valuesSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
              animationDelay: '0.4s',
              animationFillMode: 'both'
            }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Innovazione Continua</h3>
                  <p className="text-muted-foreground">
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
            <div className={`flex items-center gap-3 mb-8 transition-all duration-700 ${objectivesSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <Award className="h-12 w-12 text-secondary drop-shadow-lg" />
              <h2 className="text-3xl font-bold text-primary">I Nostri Obiettivi</h2>
            </div>
            <Card className={`shadow-elevation hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 bg-gradient-card hover:border-lime-green ${objectivesSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
            animationDelay: '0.2s',
            animationFillMode: 'both'
          }}>
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Il nostro obiettivo principale è diventare il partner di fiducia dei nostri
                  clienti, offrendo soluzioni affidabili nel tempo e un'assistenza post-vendita
                  puntuale e professionale.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Vogliamo che ogni cliente sia pienamente soddisfatto del proprio investimento in
                  energie rinnovabili, beneficiando di un risparmio economico concreto e di un
                  comfort abitativo ottimale.
                </p>
                <p className="text-lg font-semibold text-primary">
                  La soddisfazione del cliente è la nostra più grande ricompensa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section ref={certificationsSection.ref} className="py-16 bg-muted/30 section-transition-top section-transition-bottom relative" style={{
        '--transition-from': 'hsl(211 100% 22% / 0.3)',
        '--transition-to': 'hsl(211 40% 70% / 0.2)'
      } as React.CSSProperties}>
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-700 ${certificationsSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-lime-green uppercase tracking-wider text-sm mb-2 font-semibold">CERTIFICAZIONI</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Qualità Certificata</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className={`group cursor-pointer overflow-hidden bg-gradient-card border-border hover:border-lime-green hover:shadow-card-hover hover:shadow-glow-lime transition-all duration-500 hover:-translate-y-3 ${certificationsSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}>
                <CardContent className="p-6 text-center relative h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="mb-4 flex justify-center">
                      <div className="p-4 rounded-full bg-lime-green/10 group-hover:bg-lime-green/20 transition-all duration-300">
                        <Award className="h-10 w-10 text-lime-green group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-primary group-hover:text-lime-green transition-colors duration-300">
                      {cert}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamSection.ref} className="py-16 section-transition-top section-transition-bottom relative" style={{
        '--transition-from': 'hsl(211 40% 70% / 0.2)',
        '--transition-to': 'hsl(214 50% 98% / 0.5)'
      } as React.CSSProperties}>
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-700 ${teamSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-lime-green uppercase tracking-wider text-sm mb-2 font-semibold">IL NOSTRO TEAM</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Chi Lavora Con Te</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className={`group cursor-pointer overflow-hidden bg-gradient-card border-border hover:border-lime-green hover:shadow-card-hover hover:shadow-glow-lime transition-all duration-500 hover:-translate-y-3 ${teamSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}>
                <CardContent className="p-6 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="mb-4 flex justify-center">
                      <div className="p-6 rounded-full bg-lime-green/10 group-hover:bg-lime-green/20 transition-all duration-300 group-hover:scale-110">
                        <member.icon className="h-12 w-12 text-lime-green group-hover:rotate-12 transition-all duration-500" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-primary group-hover:text-lime-green transition-colors duration-300 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {member.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


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