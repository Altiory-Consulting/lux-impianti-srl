import { Link, useLocation } from "react-router-dom";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md">
      {/* Top Bar */}
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between text-sm text-primary-foreground">
            <div className="flex items-center gap-4">
              <a href="tel:800123456" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">Numero Verde: 800 123 456</span>
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Milano</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Avellino</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Lux Impianti S.R.L." className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-primary-foreground hover:text-gold transition-colors ${
                isActive("/") ? "text-gold font-semibold" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/chi-siamo"
              className={`text-primary-foreground hover:text-gold transition-colors ${
                isActive("/chi-siamo") ? "text-gold font-semibold" : ""
              }`}
            >
              Chi Siamo
            </Link>
            <Link
              to="/soluzioni"
              className={`text-primary-foreground hover:text-gold transition-colors ${
                isActive("/soluzioni") || location.pathname.startsWith("/soluzione/")
                  ? "text-gold font-semibold"
                  : ""
              }`}
            >
              Soluzioni
            </Link>
            <Link
              to="/contatti"
              className={`text-primary-foreground hover:text-gold transition-colors ${
                isActive("/contatti") ? "text-gold font-semibold" : ""
              }`}
            >
              Contatti
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:text-gold"
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
              className={`text-primary-foreground hover:text-gold transition-colors ${
                isActive("/") ? "text-gold font-semibold" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/chi-siamo"
              className={`text-primary-foreground hover:text-gold transition-colors ${
                isActive("/chi-siamo") ? "text-gold font-semibold" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Chi Siamo
            </Link>
            <Link
              to="/soluzioni"
              className={`text-primary-foreground hover:text-gold transition-colors ${
                isActive("/soluzioni") ? "text-gold font-semibold" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Soluzioni
            </Link>
            <Link
              to="/contatti"
              className={`text-primary-foreground hover:text-gold transition-colors ${
                isActive("/contatti") ? "text-gold font-semibold" : ""
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
