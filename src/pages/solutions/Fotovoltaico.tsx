import { Link } from "react-router-dom";
import { Sun, Battery, TrendingDown, Leaf, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-solar.jpg";

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
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Sun className="h-12 w-12 text-gold" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                Impianti Fotovoltaici
              </h1>
            </div>
            <p className="text-xl text-primary-foreground">
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
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link to="/contatti">Richiedi Preventivo Gratuito</Link>
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

export default Fotovoltaico;
