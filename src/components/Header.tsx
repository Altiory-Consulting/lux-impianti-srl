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

  return (
    <header className="sticky top-0 z-50 relative" style={{
      background: 'var(--gradient-header)',
      boxShadow: 'var(--shadow-header)'
    }}>
      {/* Top Bar - Dark with contacts */}
      <div className="bg-foreground text-background">
        <div className="container mx-auto px-4 py-2 md:py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3 md:h-4 md:w-4" />
              <a href="tel:08231556627" className="hover:text-lime-green transition-colors font-semibold">
                0823 155 6627
              </a>
            </div>
            <div className="hidden md:flex flex-col md:flex-row gap-2 md:gap-4 text-center md:text-left">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Largo Ochi, 7 Capriolo (BS)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Via Mulini Militari, 40 Caserta (CE)</span>
              </div>
            </div>
            <div className="flex gap-3">
              <a href="#" className="hover:text-lime-green transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="hover:text-lime-green transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 md:py-10">
          {/* Mobile Logo */}
          <Link to="/" className="md:hidden">
            <img src={logoTrasparente} alt="Lux Impianti" className="h-12 w-auto" />
          </Link>

          {/* Center Logo - Desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
            <img src={logoTrasparente} alt="Lux Impianti" className="h-20 w-auto" />
          </div>

          <nav className="hidden md:flex items-center gap-8 relative z-10 ml-auto">
            <Link
              to="/"
              className={`text-primary-foreground hover:text-lime-green transition-colors uppercase text-sm font-semibold ${
                isActive("/") ? "text-lime-green" : ""
              }`}
            >
              HOME
            </Link>
            <Link
              to="/chi-siamo"
              className={`text-primary-foreground hover:text-lime-green transition-colors uppercase text-sm font-semibold ${
                isActive("/chi-siamo") ? "text-lime-green" : ""
              }`}
            >
              CHI SIAMO
            </Link>
            <Link
              to="/soluzioni"
              className={`text-primary-foreground hover:text-lime-green transition-colors uppercase text-sm font-semibold ${
                isActive("/soluzioni") || location.pathname.startsWith("/soluzione/")
                  ? "text-lime-green"
                  : ""
              }`}
            >
              SOLUZIONI
            </Link>
            <Link
              to="/contatti"
              className={`text-primary-foreground hover:text-lime-green transition-colors uppercase text-sm font-semibold ${
                isActive("/contatti") ? "text-lime-green" : ""
              }`}
            >
              CONTATTI
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:text-lime-green"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link
              to="/"
              className={`text-primary-foreground hover:text-lime-green transition-colors ${
                isActive("/") ? "text-lime-green font-semibold" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/chi-siamo"
              className={`text-primary-foreground hover:text-lime-green transition-colors ${
                isActive("/chi-siamo") ? "text-lime-green font-semibold" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Chi Siamo
            </Link>
            <Link
              to="/soluzioni"
              className={`text-primary-foreground hover:text-lime-green transition-colors ${
                isActive("/soluzioni") ? "text-lime-green font-semibold" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Soluzioni
            </Link>
            <Link
              to="/contatti"
              className={`text-primary-foreground hover:text-lime-green transition-colors ${
                isActive("/contatti") ? "text-lime-green font-semibold" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contatti
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
