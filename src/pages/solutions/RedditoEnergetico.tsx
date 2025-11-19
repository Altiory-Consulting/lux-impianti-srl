import { Link } from "react-router-dom";
import { Coins, Users, Home, CheckCircle, Phone, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RedditoEnergetico = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-muted py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link> /{" "}
            <Link to="/soluzioni" className="hover:text-primary">Soluzioni</Link> / Reddito Energetico
          </p>
        </div>
      </div>

      <section className="text-primary-foreground py-16" style={{ background: 'var(--gradient-header)', boxShadow: 'var(--shadow-header)' }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6 justify-center">
            <Coins className="h-16 w-16 text-gold" />
            <h1 className="text-4xl md:text-5xl font-bold">Reddito Energetico</h1>
          </div>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Il programma nazionale che finanzia l'installazione di impianti fotovoltaici per le famiglie
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-light/20 border-l-4 border-secondary p-6 mb-8">
              <div className="flex items-start gap-3">
                <Info className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Cos'è il Reddito Energetico?</h3>
                  <p className="text-muted-foreground">
                    È un contributo a fondo perduto erogato dallo Stato per l'installazione di
                    impianti fotovoltaici domestici. L'obiettivo è supportare le famiglie in
                    difficoltà economica nell'accesso alle energie rinnovabili.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-primary">Come Funziona</h2>
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                Il Fondo Nazionale Reddito Energetico finanzia l'acquisto e l'installazione di
                impianti fotovoltaici per autoconsumo destinati a nuclei familiari in condizioni di
                disagio economico.
              </p>
              <p>
                Le risorse disponibili ammontano a <strong>200 milioni di euro</strong>, di cui l'80%
                destinato alle regioni del Sud Italia (Abruzzo, Basilicata, Calabria, Campania,
                Molise, Puglia, Sardegna, Sicilia) e il 20% alle regioni del Centro-Nord.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-light/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">Chi Può Accedere</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-4">Requisiti ISEE</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                    <p>ISEE inferiore a <strong>15.000 €</strong></p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                    <p>ISEE inferiore a <strong>30.000 €</strong> per nuclei con almeno 4 figli a carico</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Home className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-4">Requisiti Tecnici</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                    <p>Titolarità di diritto reale sull'immobile</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                    <p>Immobile situato in Italia</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                    <p>Destinazione ad uso residenziale</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">I Benefici</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Contributo a Fondo Perduto",
                  desc: "Fino al 100% delle spese per impianto fotovoltaico e sistema di accumulo",
                },
                {
                  title: "Risparmio Immediato",
                  desc: "Riduzione drastica della bolletta elettrica dal primo giorno",
                },
                {
                  title: "Energia Pulita",
                  desc: "Contribuisci alla transizione energetica e alla tutela dell'ambiente",
                },
                {
                  title: "Indipendenza Energetica",
                  desc: "Produci e consumi la tua energia rinnovabile",
                },
              ].map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <CheckCircle className="h-8 w-8 text-secondary mb-3" />
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Come Possiamo Aiutarti</h2>
            <p className="text-lg mb-8 text-center">
              Ti accompagniamo in ogni fase del processo per accedere al Reddito Energetico
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Verifica dei requisiti di accesso",
                "Preparazione della documentazione necessaria",
                "Progettazione dell'impianto fotovoltaico",
                "Presentazione della domanda",
                "Gestione delle pratiche burocratiche",
                "Installazione chiavi in mano dell'impianto",
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
            Scopri se Puoi Accedere al Reddito Energetico
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Contattaci per una verifica gratuita dei requisiti e un preventivo su misura
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link to="/contatti">Verifica i Requisiti</Link>
            </Button>
            <a
              href="tel:800123456"
              className="inline-flex items-center justify-center gap-2 text-lg hover:text-secondary transition-colors px-6 py-3"
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

export default RedditoEnergetico;
