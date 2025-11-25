import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-muted py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>{" "}
            / Cookie Policy
          </p>
        </div>
      </div>

      <section className="text-primary-foreground py-16" style={{ background: 'var(--gradient-header)', boxShadow: 'var(--shadow-header)' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Informativa sull'utilizzo dei cookie
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold mb-4 text-primary">Cosa sono i Cookie</h2>
            <p className="text-muted-foreground mb-6">
              I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro
              terminali, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla
              visita successiva. I cookie sono utilizzati per diverse finalità, hanno caratteristiche
              diverse e possono essere utilizzati sia dal titolare del sito che si sta visitando, sia
              da terze parti.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">Tipologie di Cookie Utilizzati</h3>
            
            <h4 className="text-lg font-semibold mb-3 mt-6 text-primary">Cookie Tecnici</h4>
            <p className="text-muted-foreground mb-4">
              Questo sito utilizza cookie tecnici necessari per il corretto funzionamento del sito e
              per permettere la navigazione. Questi cookie non raccolgono informazioni personali
              utilizzabili a scopi di marketing e non possono essere disattivati.
            </p>

            <h4 className="text-lg font-semibold mb-3 mt-6 text-primary">Cookie Analitici</h4>
            <p className="text-muted-foreground mb-4">
              Utilizziamo cookie analitici per raccogliere informazioni sull'utilizzo del sito da
              parte degli utenti in forma aggregata. Questi cookie ci aiutano a capire come i
              visitatori interagiscono con il sito, permettendoci di migliorare la user experience.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">Gestione dei Cookie</h3>
            <p className="text-muted-foreground mb-4">
              L'utente può decidere se accettare o meno i cookie utilizzando le impostazioni del
              proprio browser. Di seguito i link alle istruzioni per la gestione dei cookie nei
              browser più diffusi:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Safari</li>
              <li>Microsoft Edge</li>
              <li>Opera</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              La disabilitazione dei cookie tecnici può compromettere l'utilizzo delle funzionalità
              del sito.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">Cookie di Terze Parti</h3>
            <p className="text-muted-foreground mb-6">
              Il presente sito potrebbe contenere collegamenti ad altri siti web che hanno una loro
              cookie policy. Questi siti non sono sotto il nostro controllo e pertanto Lux Impianti
              S.R.L. non è responsabile per la loro cookie policy.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">Aggiornamenti</h3>
            <p className="text-muted-foreground mb-6">
              La presente Cookie Policy può essere soggetta a modifiche nel tempo. Si invita
              pertanto l'utente a consultare periodicamente questa pagina per essere sempre
              aggiornato sulle modalità di utilizzo dei cookie da parte di Lux Impianti S.R.L.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">Contatti</h3>
            <p className="text-muted-foreground mb-6">
              Per qualsiasi domanda o richiesta relativa alla presente Cookie Policy, è possibile
              contattare Lux Impianti S.R.L. all'indirizzo email info@luximpiantisrl.com.
            </p>

            <div className="mt-12 p-6 bg-blue-light/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
