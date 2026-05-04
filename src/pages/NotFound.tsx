import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: route inesistente:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-6 flex items-center gap-2 justify-center">
          <span className="pulse-dot" /> Pagina non trovata
        </p>
        <h1 className="font-display uppercase font-bold text-foreground text-7xl md:text-9xl tracking-tight leading-none mb-6">
          404<span className="text-accent">.</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 rounded-full bg-foreground text-background pl-6 pr-2 py-2 text-sm font-medium hover:scale-[1.02] transition-transform"
        >
          Torna alla home
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-background/15">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
