import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { toast } from "sonner";

const Contatti = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    interessato: "",
    oggetto: "",
    messaggio: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Messaggio inviato con successo! Ti contatteremo presto.");
    setFormData({
      nome: "",
      cognome: "",
      email: "",
      interessato: "",
      oggetto: "",
      messaggio: "",
    });
  };

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
            / Contatti
          </p>
        </div>
      </div>

      {/* Page Header */}
      <section className="text-primary-foreground py-16" style={{ background: 'var(--gradient-header)', boxShadow: 'var(--shadow-header)' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contattaci</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Siamo qui per rispondere a tutte le tue domande sulle energie rinnovabili
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-2">Numero Verde</h3>
                <a
                  href="tel:08231556627"
                  className="text-lg text-secondary hover:text-primary transition-colors"
                >
                  0823 155 6627
                </a>
                <p className="text-sm text-muted-foreground mt-2">Lun-Ven 9:00-18:00</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <a
                  href="mailto:info@luximpianti.it"
                  className="text-lg text-secondary hover:text-primary transition-colors"
                >
                  info@luximpianti.it
                </a>
                <p className="text-sm text-muted-foreground mt-2">Risposta entro 24h</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-2">Sedi</h3>
                <p className="text-sm">Milano - Via Roma 123</p>
                <p className="text-sm">Avellino - C.so V. Emanuele 45</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">Inviaci un Messaggio</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nome *</label>
                      <Input
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder="Il tuo nome"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Cognome *</label>
                      <Input
                        required
                        value={formData.cognome}
                        onChange={(e) => setFormData({ ...formData, cognome: e.target.value })}
                        placeholder="Il tuo cognome"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="la.tua.email@esempio.it"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Interessato a *</label>
                    <Select
                      value={formData.interessato}
                      onValueChange={(value) => setFormData({ ...formData, interessato: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleziona un'opzione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fotovoltaico">Fotovoltaico</SelectItem>
                        <SelectItem value="solare">Solare Termico</SelectItem>
                        <SelectItem value="eolico">Eolico</SelectItem>
                        <SelectItem value="idroelettrico">Idroelettrico</SelectItem>
                        <SelectItem value="geotermico">Geotermico</SelectItem>
                        <SelectItem value="biomasse">Biomasse</SelectItem>
                        <SelectItem value="altro">Altro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Oggetto *</label>
                    <Input
                      required
                      value={formData.oggetto}
                      onChange={(e) => setFormData({ ...formData, oggetto: e.target.value })}
                      placeholder="Oggetto della richiesta"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Messaggio *</label>
                    <Textarea
                      required
                      value={formData.messaggio}
                      onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                      placeholder="Descrivi la tua richiesta..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-lime-green hover:bg-lime-green/90 hover:scale-105 text-foreground font-semibold transition-all duration-300 shadow-glow-lime hover:shadow-glow-lime">
                    Invia Messaggio
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-blue-light/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">Le Nostre Sedi</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Milano</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Indirizzo</p>
                      <p className="text-muted-foreground">Via Roma 123, 20100 Milano (MI)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Telefono</p>
                      <a href="tel:+390212345678" className="text-secondary hover:text-primary">
                        +39 02 1234 5678
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:milano@luximpianti.it" className="text-secondary hover:text-primary">
                        milano@luximpianti.it
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Avellino</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Indirizzo</p>
                      <p className="text-muted-foreground">
                        Corso Vittorio Emanuele 45, 83100 Avellino (AV)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Telefono</p>
                      <a href="tel:+390825123456" className="text-secondary hover:text-primary">
                        +39 0825 123456
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:avellino@luximpianti.it" className="text-secondary hover:text-primary">
                        avellino@luximpianti.it
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contatti;
