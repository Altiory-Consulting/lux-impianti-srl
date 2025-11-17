import { Link } from "react-router-dom";
import { Target, Heart, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ChiSiamo = () => {
  const certifications = [
    "ISO 14001 - Gestione Ambientale",
    "ISO 18001 - Sicurezza sul Lavoro",
    "UNI EN ISO 9001 - Qualità",
    "UNI CEI 11352 - Energy Service Company",
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
            / Chi Siamo
          </p>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Chi Siamo</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Partner di fiducia per soluzioni energetiche sostenibili e innovative
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-12 w-12 text-secondary" />
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
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    "Consulenza energetica personalizzata",
                    "Progettazione su misura",
                    "Installazione professionale",
                    "Manutenzione programmata",
                    "Assistenza post-vendita h24",
                    "Accesso agli incentivi statali",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-blue-light/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Heart className="h-12 w-12 text-secondary" />
              <h2 className="text-3xl font-bold text-primary">I Nostri Valori</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
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
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Sostenibilità</h3>
                  <p className="text-muted-foreground">
                    Crediamo fortemente nell'importanza della sostenibilità ambientale. Ogni
                    soluzione che proponiamo è progettata per ridurre l'impatto ambientale e
                    promuovere l'utilizzo di energie rinnovabili, contribuendo a un futuro più verde.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Qualità e Affidabilità</h3>
                  <p className="text-muted-foreground">
                    Utilizziamo solo componenti e materiali di alta qualità forniti dai migliori
                    partner del settore. La nostra esperienza pluriennale e le certificazioni
                    conseguite garantiscono standard qualitativi elevati.
                  </p>
                </CardContent>
              </Card>
              <Card>
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Award className="h-12 w-12 text-secondary" />
              <h2 className="text-3xl font-bold text-primary">I Nostri Obiettivi</h2>
            </div>
            <Card className="shadow-lg">
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
      <section className="py-16 bg-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Le Nostre Certificazioni</h2>
            <p className="text-lg mb-8">
              La qualità del nostro lavoro è certificata dai principali enti di controllo
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <Award className="h-8 w-8 text-gold" />
                      <p className="text-lg font-semibold">{cert}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Scegli un Futuro più Green
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Scopri come possiamo aiutarti a risparmiare energia e ridurre i costi
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
            <Link to="/contatti">Contattaci Ora</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChiSiamo;
