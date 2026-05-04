import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import logoTrasparente from "@/assets/logo-trasparente.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/chi-siamo", label: "Chi Siamo" },
  { to: "/soluzioni", label: "Soluzioni" },
  { to: "/contatti", label: "Contatti" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className={`mx-auto transition-all duration-300 ${
          scrolled ? "px-3 pt-3" : "px-4 pt-4"
        }`}
      >
        <div
          className={`relative mx-auto flex items-center justify-between rounded-full bg-background/90 backdrop-blur-xl border border-foreground/8 transition-all duration-300 ${
            scrolled ? "shadow-[0_8px_32px_-12px_rgba(0,0,0,0.18)]" : "shadow-[0_4px_20px_-8px_rgba(0,0,0,0.10)]"
          }`}
          style={{ maxWidth: "1320px" }}
        >
          {/* Left: Hamburger menu trigger */}
          <div className="flex items-center pl-2">
            <button
              type="button"
              aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
              aria-expanded={isMenuOpen}
              className="inline-flex items-center gap-2 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground px-4 py-2.5 transition-all"
              onClick={() => setIsMenuOpen((s) => !s)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="text-sm font-medium hidden sm:inline">
                {isMenuOpen ? "Chiudi" : "Menu"}
              </span>
            </button>
          </div>

          {/* Center: Logo */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 py-2"
          >
            <img src={logoTrasparente} alt="Lux Impianti" className="h-10 w-auto" />
            <span className="font-display font-bold text-lg tracking-tight uppercase hidden sm:inline">
              Lux Impianti
            </span>
          </Link>

          {/* Right: CTA */}
          <div className="flex items-center pr-2">
            <Link
              to="/contatti"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-all hover:scale-[1.02]"
            >
              <span className="pulse-dot" />
              Contattaci
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-background/15">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
            <Link
              to="/contatti"
              aria-label="Contattaci"
              className="sm:hidden inline-flex items-center justify-center w-11 h-11 rounded-full bg-foreground text-background"
            >
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Dropdown menu (left-aligned) */}
        <div
          className={`mx-auto overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-[28rem] opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
          style={{ maxWidth: "1320px" }}
        >
          <nav className="w-full sm:w-80 rounded-3xl bg-background border border-foreground/8 shadow-soft p-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                  isActive(item.to)
                    ? "bg-foreground text-background"
                    : "text-foreground hover:bg-foreground/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contatti"
              onClick={() => setIsMenuOpen(false)}
              className="sm:hidden mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium"
            >
              <span className="pulse-dot" />
              Contattaci
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
