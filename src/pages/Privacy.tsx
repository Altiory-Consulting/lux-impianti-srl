import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-muted py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>{" "}
            / Privacy Policy
          </p>
        </div>
      </div>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Informativa sulla protezione dei dati personali
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold mb-4 text-primary">Informativa Privacy</h2>
            <p className="text-muted-foreground mb-6">
              Ai sensi dell'art. 13 del Regolamento (UE) 2016/679 (GDPR), Lux Impianti S.R.L. in
              qualità di Titolare del trattamento, La informa che i Suoi dati personali saranno
              trattati con le modalità e per le finalità seguenti.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">1. Titolare del Trattamento</h3>
            <p className="text-muted-foreground mb-6">
              Il Titolare del trattamento è Lux Impianti S.R.L., con sede legale in Milano, Via
              Roma 123, 20100 Milano (MI), P.IVA 12345678901. Per qualsiasi informazione o richiesta
              relativa al trattamento dei dati personali, è possibile contattare il Titolare
              all'indirizzo email info@luximpianti.it.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">2. Finalità del Trattamento</h3>
            <p className="text-muted-foreground mb-4">I dati personali raccolti saranno trattati per le seguenti finalità:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Gestione delle richieste di contatto e preventivi</li>
              <li>Esecuzione di contratti e prestazione di servizi</li>
              <li>Adempimenti di obblighi legali e fiscali</li>
              <li>Invio di comunicazioni commerciali e newsletter (previo consenso)</li>
              <li>Attività di marketing e promozione dei servizi (previo consenso)</li>
            </ul>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">3. Base Giuridica</h3>
            <p className="text-muted-foreground mb-6">
              Il trattamento dei dati personali è basato sul consenso dell'interessato, sull'esecuzione
              di un contratto, sull'adempimento di obblighi legali e sul legittimo interesse del
              Titolare.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">4. Modalità di Trattamento</h3>
            <p className="text-muted-foreground mb-6">
              I dati personali saranno trattati con strumenti elettronici e manuali, con logiche
              strettamente correlate alle finalità indicate e, comunque, in modo da garantire la
              sicurezza e la riservatezza dei dati stessi.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">5. Comunicazione e Diffusione</h3>
            <p className="text-muted-foreground mb-6">
              I dati personali potranno essere comunicati a terzi solo per finalità connesse
              all'esecuzione del contratto o per adempiere a obblighi di legge. Non saranno oggetto
              di diffusione.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">6. Periodo di Conservazione</h3>
            <p className="text-muted-foreground mb-6">
              I dati personali saranno conservati per il tempo necessario al perseguimento delle
              finalità per cui sono stati raccolti e, in ogni caso, nel rispetto delle normative
              vigenti in materia di conservazione dei documenti.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">7. Diritti dell'Interessato</h3>
            <p className="text-muted-foreground mb-4">
              L'interessato ha il diritto di ottenere dal Titolare:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>L'accesso ai propri dati personali</li>
              <li>La rettifica o la cancellazione degli stessi</li>
              <li>La limitazione del trattamento</li>
              <li>L'opposizione al trattamento</li>
              <li>La portabilità dei dati</li>
              <li>La revoca del consenso in qualsiasi momento</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              Per esercitare tali diritti, è possibile contattare il Titolare all'indirizzo email
              info@luximpianti.it. L'interessato ha inoltre il diritto di proporre reclamo
              all'Autorità Garante per la protezione dei dati personali.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">8. Cookie</h3>
            <p className="text-muted-foreground mb-6">
              Il sito utilizza cookie tecnici necessari al funzionamento del sito stesso. Per
              ulteriori informazioni, consultare la Cookie Policy dedicata.
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

export default Privacy;
