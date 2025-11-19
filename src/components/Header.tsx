import { Link, useLocation } from "react-router-dom";
import { Phone, MapPin, Menu, X, Facebook, Instagram } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";
import logoTrasparente from "@/assets/logo-trasparente.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  return <header className="sticky top-0 z-50 bg-gradient-blue-elegant shadow-md relative">
      {/* Top Bar - Dark with contacts */}
      <div className="bg-foreground text-background">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:800480840" className="hover:text-lime-green transition-colors font-semibold">
                800.480.840
              </a>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-center md:text-left">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Via Ilario Biagi, 65 Milano</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Via Dei Due Principati, 60 Avellino</span>
              </div>
            </div>
            <div className="flex gap-3">
              <a href="#" className="hover:text-lime-green transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-lime-green transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6">
          

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
            <img src={logoTrasparente} alt="Lux Impianti" className="h-20 w-auto" />
          </div>

          <nav className="hidden md:flex items-center gap-8 relative z-10">
            <Link to="/" className={`text-primary-foreground hover:text-lime-green transition-colors uppercase text-sm font-semibold ${isActive("/") ? "text-lime-green" : ""}`}>
              HOME
            </Link>
            <Link to="/chi-siamo" className={`text-primary-foreground hover:text-lime-green transition-colors uppercase text-sm font-semibold ${isActive("/chi-siamo") ? "text-lime-green" : ""}`}>
              CHI SIAMO
            </Link>
            <Link to="/soluzioni" className={`text-primary-foreground hover:text-lime-green transition-colors uppercase text-sm font-semibold ${isActive("/soluzioni") || location.pathname.startsWith("/soluzione/") ? "text-lime-green" : ""}`}>
              SOLUZIONI
            </Link>
            <Link to="/contatti" className={`text-primary-foreground hover:text-lime-green transition-colors uppercase text-sm font-semibold ${isActive("/contatti") ? "text-lime-green" : ""}`}>
              CONTATTI
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-primary-foreground hover:text-gold" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link to="/" className={`text-primary-foreground hover:text-gold transition-colors ${isActive("/") ? "text-gold font-semibold" : ""}`} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/chi-siamo" className={`text-primary-foreground hover:text-gold transition-colors ${isActive("/chi-siamo") ? "text-gold font-semibold" : ""}`} onClick={() => setIsMenuOpen(false)}>
              Chi Siamo
            </Link>
            <Link to="/soluzioni" className={`text-primary-foreground hover:text-gold transition-colors ${isActive("/soluzioni") ? "text-gold font-semibold" : ""}`} onClick={() => setIsMenuOpen(false)}>
              Soluzioni
            </Link>
            <Link to="/contatti" className={`text-primary-foreground hover:text-gold transition-colors ${isActive("/contatti") ? "text-gold font-semibold" : ""}`} onClick={() => setIsMenuOpen(false)}>
              Contatti
            </Link>
          </nav>}
      </div>
    </header>;
};
export default Header;