import { Link, useLocation } from "react-router-dom";
import { Phone, MapPin, Menu, X } from "lucide-react";
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-xs md:text-sm">
            {/* Capriolo location - Left */}
            <div className="flex items-center gap-1 md:gap-2">
              <MapPin className="h-3 w-3 md:h-4 md:w-4" />
              <span>Capriolo (BS)</span>
            </div>
            
            {/* Phone number - Center */}
            <a 
              href="tel:08231556627" 
              className="flex items-center gap-2 hover:text-lime-green transition-colors duration-300 font-semibold"
            >
              <Phone className="h-3 w-3 md:h-4 md:w-4" />
              <span>0823 155 6627</span>
            </a>
            
            {/* Caserta location - Right */}
            <div className="flex items-center gap-1 md:gap-2">
              <MapPin className="h-3 w-3 md:h-4 md:w-4" />
              <span>Caserta (CE)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 md:py-10 relative">
          {/* Center Logo - Mobile & Desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-0">
            <Link to="/">
              <img src={logoTrasparente} alt="Lux Impianti" className="h-16 md:h-20 w-auto" />
            </Link>
          </div>
          
          {/* Spacer for mobile to maintain layout */}
          <div className="md:hidden w-10"></div>

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
