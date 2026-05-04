import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-12">
      <div className="px-3 sm:px-4 pb-4">
        <div
          className="mx-auto rounded-[2rem] md:rounded-[2.5rem] bg-foreground border border-background/10 px-6 sm:px-10 md:px-14 py-12 md:py-16"
          style={{ maxWidth: "1320px" }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-12 border-b border-background/10">
            <div className="max-w-2xl">
              <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-4 flex items-center gap-2">
                <span className="pulse-dot" /> Pronti ad ascoltarti
              </p>
              <h2 className="font-display uppercase font-bold text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-background">
                Costruiamo insieme
                <br />
                il tuo futuro
                <span className="text-accent">.</span>
              </h2>
            </div>
            <Link
              to="/contatti"
              className="inline-flex items-center gap-3 rounded-full bg-background text-foreground pl-6 pr-2 py-2 text-sm font-medium hover:scale-[1.02] transition-transform self-start md:self-end"
            >
              Contattaci
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-foreground text-background">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
            <div>
              <h4 className="font-semibold mb-5 text-background text-sm uppercase tracking-wider">Azienda</h4>
              <div className="space-y-3 text-sm text-background/70">
                <p className="font-semibold text-background">LUX IMPIANTI S.R.L.</p>
                <p>P.IVA: IT04633810983</p>
                <div className="flex items-start gap-2 pt-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                  <div>
                    <p className="text-background font-medium mb-0.5">Sede Legale</p>
                    <p>Largo Ochi, 7 — Capriolo (BS)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                  <div>
                    <p className="text-background font-medium mb-0.5">Sede Operativa</p>
                    <p>Via Mulini Militari, 40 — Caserta (CE)</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-5 text-background text-sm uppercase tracking-wider">Navigazione</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { to: "/", label: "Home" },
                  { to: "/chi-siamo", label: "Chi Siamo" },
                  { to: "/soluzioni", label: "Soluzioni" },
                  { to: "/contatti", label: "Contatti" },
                ].map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-background/70 hover:text-accent transition-colors inline-flex items-center gap-1.5 group"
                    >
                      {l.label}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-5 text-background text-sm uppercase tracking-wider">Contatti</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                  <a href="tel:08231556627" className="text-background/80 hover:text-accent transition-colors">
                    0823 155 6627
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                  <a href="mailto:info@luximpiantisrl.com" className="text-background/80 hover:text-accent transition-colors break-all">
                    info@luximpiantisrl.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-5 text-background text-sm uppercase tracking-wider">Legale</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { to: "/privacy", label: "Privacy Policy" },
                  { to: "/cookie-policy", label: "Cookie Policy" },
                  { to: "/termini-condizioni", label: "Termini e Condizioni" },
                  { to: "/note-legali", label: "Note Legali" },
                ].map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-background/70 hover:text-accent transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-background/10">
            <div className="font-display uppercase font-bold text-background/95 text-[18vw] md:text-[14vw] lg:text-[200px] leading-[0.85] tracking-tighter overflow-hidden">
              Lux<span className="text-accent">.</span>Impianti
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-3 pt-8 text-xs text-background/50">
              <p>&copy; {new Date().getFullYear()} Lux Impianti S.R.L. Tutti i diritti riservati.</p>
              <p>Energia rinnovabile · Italia</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
