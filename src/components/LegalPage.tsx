import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

interface LegalPageProps {
  title: string;
  description: string;
  children: ReactNode;
}

const LegalPage = ({ title, description, children }: LegalPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHero
        eyebrow="Documento Legale"
        title={title}
        description={description}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: title }]}
      />
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto legal-prose">
            {children}
            <div className="mt-14 p-6 rounded-2xl bg-muted text-sm text-muted-foreground">
              Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LegalPage;
