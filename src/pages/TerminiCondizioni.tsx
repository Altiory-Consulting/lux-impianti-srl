import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TerminiCondizioni = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-muted py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>{" "}
            / Termini e Condizioni
          </p>
        </div>
      </div>

      <section className="text-primary-foreground py-16" style={{ background: 'var(--gradient-header)', boxShadow: 'var(--shadow-header)' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Termini e Condizioni</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Condizioni generali di utilizzo del sito e dei servizi
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold mb-4 text-primary">Termini e Condizioni Generali</h2>
            <p className="text-muted-foreground mb-6">
              I presenti Termini e Condizioni regolano l'utilizzo del sito web di Lux Impianti S.R.L.
              e dei servizi offerti attraverso lo stesso. Utilizzando questo sito, l'utente accetta
              integralmente i presenti Termini e Condizioni.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">1. Oggetto</h3>
            <p className="text-muted-foreground mb-6">
              Il presente sito ha lo scopo di fornire informazioni sui servizi offerti da Lux Impianti
              S.R.L. nel settore delle energie rinnovabili e degli impianti tecnologici. Attraverso il
              sito è possibile richiedere informazioni, preventivi e assistenza per le soluzioni
              energetiche proposte.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">2. Utilizzo del Sito</h3>
            <p className="text-muted-foreground mb-4">L'utente si impegna a utilizzare il sito in modo conforme alla legge e ai presenti Termini e Condizioni. È vietato:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Utilizzare il sito per scopi illeciti o non autorizzati</li>
              <li>Tentare di violare la sicurezza del sito o di accedere a dati non autorizzati</li>
              <li>Trasmettere virus, malware o altri codici dannosi</li>
              <li>Interferire con il corretto funzionamento del sito</li>
              <li>Copiare, riprodurre o distribuire contenuti senza autorizzazione</li>
            </ul>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">3. Proprietà Intellettuale</h3>
            <p className="text-muted-foreground mb-6">
              Tutti i contenuti presenti sul sito, inclusi testi, immagini, loghi, grafici e software,
              sono di proprietà di Lux Impianti S.R.L. o dei rispettivi proprietari e sono protetti
              dalle leggi sulla proprietà intellettuale. È vietata la riproduzione, anche parziale,
              senza espressa autorizzazione scritta.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">4. Servizi Offerti</h3>
            <p className="text-muted-foreground mb-6">
              Lux Impianti S.R.L. si riserva il diritto di modificare, sospendere o interrompere,
              temporaneamente o permanentemente, i servizi offerti attraverso il sito, in qualsiasi
              momento e senza preavviso. L'azienda non sarà responsabile nei confronti dell'utente o
              di terzi per eventuali modifiche, sospensioni o interruzioni dei servizi.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">5. Preventivi e Contratti</h3>
            <p className="text-muted-foreground mb-6">
              Le informazioni fornite sul sito hanno carattere puramente indicativo. I preventivi
              rilasciati attraverso il sito non costituiscono offerta contrattuale vincolante e
              devono essere confermati per iscritto. Le condizioni definitive saranno specificate
              nei contratti individuali sottoscritti tra le parti.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">6. Limitazione di Responsabilità</h3>
            <p className="text-muted-foreground mb-6">
              Lux Impianti S.R.L. non è responsabile per eventuali danni diretti o indiretti derivanti
              dall'utilizzo o dall'impossibilità di utilizzare il sito, salvo quanto previsto da norme
              imperative di legge. L'azienda non garantisce che il sito sia privo di errori o
              interruzioni e si impegna a mantenere il servizio al meglio delle proprie possibilità.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">7. Link a Siti Esterni</h3>
            <p className="text-muted-foreground mb-6">
              Il sito può contenere collegamenti a siti web di terze parti. Lux Impianti S.R.L. non
              ha alcun controllo su questi siti e non è responsabile per i loro contenuti o per le
              loro pratiche di privacy. L'utente accede a tali siti a proprio rischio.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">8. Modifiche ai Termini</h3>
            <p className="text-muted-foreground mb-6">
              Lux Impianti S.R.L. si riserva il diritto di modificare i presenti Termini e Condizioni
              in qualsiasi momento. Le modifiche entrano in vigore dal momento della loro
              pubblicazione sul sito. Si consiglia di consultare periodicamente questa pagina per
              essere sempre aggiornati.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">9. Legge Applicabile e Foro Competente</h3>
            <p className="text-muted-foreground mb-6">
              I presenti Termini e Condizioni sono regolati dalla legge italiana. Per qualsiasi
              controversia relativa all'interpretazione o all'esecuzione dei presenti Termini sarà
              competente in via esclusiva il Foro di Brescia.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">10. Contatti</h3>
            <p className="text-muted-foreground mb-6">
              Per qualsiasi informazione o chiarimento relativo ai presenti Termini e Condizioni, è
              possibile contattare Lux Impianti S.R.L. all'indirizzo email info@luximpiantisrl.com.
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

export default TerminiCondizioni;
