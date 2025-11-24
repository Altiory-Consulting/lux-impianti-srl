import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo-footer.png";
const Footer = () => {
  return <footer className="text-primary-foreground relative" style={{
    background: 'var(--gradient-header)',
    boxShadow: '0 -4px 20px -2px hsla(210 35% 42% / 0.25)'
  }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="font-semibold mb-4" style={{
            color: 'hsl(211, 100%, 22%)'
          }}>Informazioni Aziendali</h4>
            
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-base mb-1">LUX IMPIANTI S.R.L.</p>
                <p className="text-primary-foreground/90">P.IVA: IT04633810983</p>
              </div>
              <div className="pt-2 flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Sede Legale</p>
                  <p className="text-primary-foreground/90">Largo Ochi, 7</p>
                  <p className="text-primary-foreground/90">Capriolo (BS)</p>
                </div>
              </div>
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
                  <a href="tel:0823155662" className="hover:text-lime-green">0823 155 6627</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:info@luximpiantisrl.com" className="hover:text-lime-green">info@luximpiantisrl.com</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Sede Operativa</p>
                  <p>Via Mulini Militari, 40</p>
                  <p>Caserta (CE)</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h4 className="font-semibold mb-4" style={{
            color: 'hsl(211, 100%, 22%)'
          }}>Pagine Legali</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-lime-green transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="hover:text-lime-green transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/termini-condizioni" className="hover:text-lime-green transition-colors">
                  Termini e Condizioni
                </Link>
              </li>
              <li>
                <Link to="/note-legali" className="hover:text-lime-green transition-colors">
                  Note Legali
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Lux Impianti S.R.L. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;