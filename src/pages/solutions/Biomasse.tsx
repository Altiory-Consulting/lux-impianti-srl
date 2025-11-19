import { Link } from "react-router-dom";
import { Flame, Home, Leaf, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Biomasse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-muted py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link> /{" "}
            <Link to="/soluzioni" className="hover:text-primary">Soluzioni</Link> / Biomasse
          </p>
        </div>
      </div>

      <section className="text-primary-foreground py-16" style={{ background: 'var(--gradient-header)' }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6 justify-center">
            <Flame className="h-16 w-16 text-gold" />
            <h1 className="text-4xl md:text-5xl font-bold">Biomasse</h1>
          </div>
          <p className="text-xl text-center max-w-3xl mx-auto">
            L'energia del legno e dei pellet per un riscaldamento ecologico e conveniente
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary">Calore Naturale dal Legno</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Le biomasse rappresentano una delle fonti di energia rinnovabile più antiche e
                affidabili. Utilizzare legna o pellet per riscaldare la tua casa significa scegliere
                una soluzione ecologica, economica e dal fascino senza tempo.
              </p>
              <p>
                Le moderne stufe e caldaie a biomassa sono estremamente efficienti e garantiscono
                una combustione pulita e controllata. Il pellet, in particolare, offre un comfort
                paragonabile a quello dei sistemi tradizionali con costi molto inferiori e un
                impatto ambientale minimo.
              </p>
              <p>
                Grazie agli incentivi statali come il Conto Termico, l'installazione di un sistema a
                biomasse è oggi molto conveniente e permette di recuperare parte dell'investimento
                in tempi rapidi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-light/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">I Vantaggi</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Fonte energetica rinnovabile e locale",
              "Costi di gestione molto bassi",
              "Atmosfera accogliente e naturale",
              "Incentivi statali disponibili",
              "Indipendenza dai combustibili fossili",
              "Impatto ambientale ridotto",
            ].map((benefit, index) => (
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

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-primary">
              Le Nostre Soluzioni
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Flame className="h-16 w-16 mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-bold mb-3">Stufe a Pellet</h3>
                  <p className="text-muted-foreground">
                    Riscaldamento automatico e programmabile. Ideale per ogni ambiente domestico.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Home className="h-16 w-16 mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-bold mb-3">Caldaie a Biomassa</h3>
                  <p className="text-muted-foreground">
                    Alimentano l'intero impianto di riscaldamento. Perfette per grandi superfici.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Leaf className="h-16 w-16 mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-bold mb-3">Termocamini</h3>
                  <p className="text-muted-foreground">
                    Il fascino del fuoco con l'efficienza di un sistema di riscaldamento moderno.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Perché Scegliere le Biomasse</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left mt-12">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Risparmio Economico</h3>
                  <p>Il pellet e la legna costano molto meno rispetto a gas e gasolio</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Sostenibilità</h3>
                  <p>La combustione è CO2 neutra: il legno rilascia solo la CO2 assorbita durante la crescita</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Autonomia</h3>
                  <p>Riduci la dipendenza dalle reti di distribuzione del gas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Comfort</h3>
                  <p>Il calore del legno crea un'atmosfera unica e accogliente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Scopri il Calore delle Biomasse
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Richiedi una consulenza gratuita per scegliere il sistema più adatto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link to="/contatti">Richiedi Preventivo</Link>
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

export default Biomasse;
