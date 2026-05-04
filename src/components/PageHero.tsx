import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  breadcrumbs?: { label: string; to?: string }[];
  cta?: { label: string; to: string };
  align?: "left" | "center";
}

const PageHero = ({
  eyebrow,
  title,
  description,
  breadcrumbs,
  cta,
  align = "left",
}: PageHeroProps) => {
  return (
    <section className="pt-4 pb-10">
      <div className="px-3 sm:px-4">
        <div
          className="relative mx-auto overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-foreground text-background"
          style={{ maxWidth: "1320px" }}
        >
          <div className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full bg-accent/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

          <div
            className={`relative z-10 px-6 sm:px-10 md:px-14 lg:px-20 pt-16 md:pt-24 pb-14 md:pb-20 ${
              align === "center" ? "text-center" : ""
            }`}
          >
            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav
                className={`flex items-center gap-2 text-xs uppercase tracking-wider text-background/60 mb-6 ${
                  align === "center" ? "justify-center" : ""
                }`}
              >
                {breadcrumbs.map((b, i) => (
                  <span key={i} className="flex items-center gap-2">
                    {b.to ? (
                      <Link to={b.to} className="hover:text-accent transition-colors">
                        {b.label}
                      </Link>
                    ) : (
                      <span className="text-background">{b.label}</span>
                    )}
                    {i < breadcrumbs.length - 1 && <span className="text-background/30">/</span>}
                  </span>
                ))}
              </nav>
            )}

            {eyebrow && (
              <p
                className={`text-accent uppercase tracking-widest text-xs font-semibold mb-5 flex items-center gap-2 ${
                  align === "center" ? "justify-center" : ""
                }`}
              >
                <span className="pulse-dot" />
                {eyebrow}
              </p>
            )}

            <h1
              className={`display-xl text-background text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ${
                align === "center" ? "mx-auto max-w-5xl" : "max-w-5xl"
              }`}
            >
              {title}
            </h1>

            {description && (
              <p
                className={`text-background/75 text-base md:text-lg leading-relaxed mt-6 ${
                  align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
                }`}
              >
                {description}
              </p>
            )}

            {cta && (
              <div className={`mt-10 ${align === "center" ? "flex justify-center" : ""}`}>
                <Link
                  to={cta.to}
                  className="inline-flex items-center gap-3 rounded-full bg-background text-foreground pl-6 pr-2 py-2 text-sm font-medium hover:scale-[1.02] transition-transform"
                >
                  {cta.label}
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-foreground text-background">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
