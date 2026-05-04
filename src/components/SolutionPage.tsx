import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";

interface SolutionPageProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  intro: { heading: string; paragraphs: string[] };
  benefits: string[];
  features: { icon: ReactNode; title: string; desc: string }[];
  services?: string[];
  ctaTitle: string;
  ctaText: string;
}

const SolutionPage = ({
  eyebrow,
  title,
  description,
  intro,
  benefits,
  features,
  services,
  ctaTitle,
  ctaText,
}: SolutionPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Soluzioni", to: "/soluzioni" },
          { label: eyebrow },
        ]}
        cta={{ label: "Richiedi preventivo", to: "/contatti" }}
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display uppercase text-3xl md:text-5xl font-bold mb-8 text-foreground tracking-tight leading-[0.95]">
              {intro.heading}
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              {intro.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-4 flex items-center gap-2">
              <span className="pulse-dot" />
              I vantaggi
            </p>
            <h3 className="font-display uppercase text-3xl md:text-4xl font-bold mb-10 text-foreground tracking-tight">
              Perché conviene
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-base font-medium text-foreground">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4">
              {features.map((f, i) => (
                <Card key={i} className="overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-foreground text-background flex items-center justify-center mb-5">
                      {f.icon}
                    </div>
                    <h4 className="font-display uppercase text-xl font-bold mb-3 text-foreground tracking-tight">
                      {f.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {services && services.length > 0 && (
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="max-w-6xl mx-auto rounded-[2rem] md:rounded-[2.5rem] bg-foreground text-background px-6 sm:px-10 md:px-14 py-12 md:py-16">
              <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-4 flex items-center gap-2">
                <span className="pulse-dot" /> Cosa includiamo
              </p>
              <h3 className="font-display uppercase text-3xl md:text-5xl font-bold mb-10 tracking-tight leading-[0.95]">
                I nostri servizi
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3 py-3 border-b border-background/10">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-base md:text-lg">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display uppercase text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight leading-[0.95]">
              {ctaTitle}
              <span className="text-accent">.</span>
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-muted-foreground">
              {ctaText}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contatti"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-foreground text-background pl-6 pr-2 py-2 text-sm font-medium hover:scale-[1.02] transition-transform"
              >
                Richiedi preventivo gratuito
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-background/15">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
              <a
                href="tel:08231556627"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                <Phone className="h-4 w-4" />
                0823 155 6627
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionPage;
