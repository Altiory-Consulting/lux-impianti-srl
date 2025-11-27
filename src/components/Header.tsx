import { Link, useLocation } from "react-router-dom";
import { Phone, MapPin, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
        <div className="container mx-auto px-2 md:px-4 py-2 md:py-3">
          <div className="flex flex-row justify-between items-center gap-1 md:gap-4 text-[10px] md:text-sm">
            {/* Capriolo location - Left */}
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
              <span className="whitespace-nowrap">Capriolo (BS)</span>
            </div>
            
            {/* Phone number - Center */}
            <a 
              href="tel:08231556627" 
              className="flex items-center gap-1 md:gap-2 hover:text-lime-green transition-colors duration-300 font-semibold whitespace-nowrap"
            >
              <Phone className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
              <span>0823 155 6627</span>
            </a>
            
            {/* Caserta location - Right */}
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
              <span className="whitespace-nowrap">Caserta (CE)</span>
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center gap-1 text-primary-foreground hover:text-lime-green transition-colors uppercase text-sm font-semibold ${
                    isActive("/soluzioni") || location.pathname.startsWith("/soluzione/")
                      ? "text-lime-green"
                      : ""
                  }`}
                >
                  SOLUZIONI
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-56 bg-background/95 backdrop-blur-sm border-border"
                align="center"
              >
                <DropdownMenuItem asChild className="cursor-pointer group">
                  <Link 
                    to="/soluzione/fotovoltaico"
                    className="flex items-center gap-2 w-full"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-lime-green">—</span>
                    <span>Fotovoltaico</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer group">
                  <Link 
                    to="/soluzione/solare-termico"
                    className="flex items-center gap-2 w-full"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-lime-green">—</span>
                    <span>Solare Termico</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer group">
                  <Link 
                    to="/soluzione/climatizzazione"
                    className="flex items-center gap-2 w-full"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-lime-green">—</span>
                    <span>Climatizzazione</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
