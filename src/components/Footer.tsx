import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo-footer.png";
const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter logic here
  };
  return <footer className="text-primary-foreground relative" style={{
    background: 'var(--gradient-header)',
    boxShadow: '0 -4px 20px -2px hsla(210 35% 42% / 0.25)'
  }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Lux Impianti S.R.L." className="h-16 w-auto mb-4" />
            <p className="text-sm mb-4">LUX IMPIANTI S.R.L. 
P.IVA: IT04633810983</p>
            <div className="space-y-2 text-sm">
              <p>​ </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4" style={{
            color: 'hsl(211, 100%, 22%)'
          }}>Navigazione</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-lime-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/chi-siamo" className="hover:text-lime-green transition-colors">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link to="/soluzioni" className="hover:text-lime-green transition-colors">
                  Soluzioni
                </Link>
              </li>
              <li>
                <Link to="/contatti" className="hover:text-lime-green transition-colors">
                  Contatti
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-lime-green transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold mb-4" style={{
            color: 'hsl(211, 100%, 22%)'
          }}>Contatti</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Numero Verde</p>
                  <a href="tel:800123456" className="hover:text-lime-green">0823 155 6627</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:info@luximpianti.it" className="hover:text-lime-green">info@luximpiantisrl.com</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Sede Legale </p>
                  <p>Largo Ochi, 7 Capriolo (BS)</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Sede Operativa                        </p>
                  <p>Via Mulini Militari, 40 Caserta (CE)                        </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4" style={{
            color: 'hsl(211, 100%, 22%)'
          }}>Newsletter</h4>
            <p className="text-sm mb-4">
              Iscriviti per ricevere aggiornamenti sulle energie rinnovabili
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input type="email" placeholder="La tua email" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60" />
              <Button type="submit" className="w-full text-white" style={{
              backgroundColor: 'hsl(211, 100%, 22%)'
            }}>
                Iscriviti
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Lux Impianti S.R.L. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;