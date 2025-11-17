import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter logic here
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Lux Impianti S.R.L." className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm mb-4">
              Soluzioni energetiche innovative per un futuro sostenibile.
            </p>
            <div className="space-y-2 text-sm">
              <p>P.IVA: 12345678901</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Navigazione</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/chi-siamo" className="hover:text-gold transition-colors">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link to="/soluzioni" className="hover:text-gold transition-colors">
                  Soluzioni
                </Link>
              </li>
              <li>
                <Link to="/contatti" className="hover:text-gold transition-colors">
                  Contatti
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Contatti</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Numero Verde</p>
                  <a href="tel:800123456" className="hover:text-gold">
                    800 123 456
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:info@luximpianti.it" className="hover:text-gold">
                    info@luximpianti.it
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Milano</p>
                  <p>Via Roma 123, 20100</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Avellino</p>
                  <p>Corso Vittorio Emanuele 45, 83100</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Newsletter</h4>
            <p className="text-sm mb-4">
              Iscriviti per ricevere aggiornamenti sulle energie rinnovabili
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="La tua email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-foreground">
                Iscriviti
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Lux Impianti S.R.L. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
