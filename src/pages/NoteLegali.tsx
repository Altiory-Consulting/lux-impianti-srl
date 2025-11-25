import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NoteLegali = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-muted py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>{" "}
            / Note Legali
          </p>
        </div>
      </div>

      <section className="text-primary-foreground py-16" style={{ background: 'var(--gradient-header)', boxShadow: 'var(--shadow-header)' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Note Legali</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Informazioni legali sul sito e sull'azienda
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold mb-4 text-primary">Note Legali</h2>
            <p className="text-muted-foreground mb-6">
              Le presenti note legali regolano l'utilizzo del sito web di Lux Impianti S.R.L. e
              contengono informazioni essenziali sull'azienda e sulle modalità di utilizzo del sito.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">Informazioni Societarie</h3>
            <div className="text-muted-foreground mb-6 space-y-2">
              <p><strong>Ragione Sociale:</strong> Lux Impianti S.R.L.</p>
              <p><strong>Sede Legale:</strong> Largo Ochi, 7 - Capriolo (BS)</p>
              <p><strong>Sede Operativa:</strong> Via Mulini Militari, 40 - Caserta (CE)</p>
              <p><strong>Partita IVA:</strong> IT04633810983</p>
              <p><strong>Email:</strong> info@luximpiantisrl.com</p>
              <p><strong>Telefono:</strong> +39 0498755990</p>
            </div>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">Oggetto Sociale</h3>
            <p className="text-muted-foreground mb-6">
              Lux Impianti S.R.L. opera nel settore delle energie rinnovabili e degli impianti
              tecnologici, offrendo servizi di progettazione, installazione, manutenzione e
              consulenza per:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Impianti fotovoltaici</li>
              <li>Impianti solari termici</li>
              <li>Pompe di calore e climatizzazione</li>
              <li>Impianti a biomasse</li>
              <li>Impianti eolici</li>
              <li>Impianti geotermici</li>
            </ul>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">Certificazioni</h3>
            <p className="text-muted-foreground mb-4">L'azienda è in possesso delle seguenti certificazioni:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>ISO 14001 - Sistema di Gestione Ambientale</li>
              <li>ISO 18001 - Sistema di Gestione della Salute e Sicurezza sul Lavoro</li>
              <li>UNI EN ISO 9001 - Sistema di Gestione per la Qualità</li>
              <li>UNI CEI 11352 - Società che forniscono servizi energetici (ESCo)</li>
            </ul>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">Disclaimer</h3>
            <p className="text-muted-foreground mb-6">
              Le informazioni contenute in questo sito web sono fornite a scopo puramente informativo
              e non costituiscono in alcun modo un'offerta contrattuale. Lux Impianti S.R.L. si
              riserva il diritto di modificare, aggiornare o rimuovere i contenuti del sito in
              qualsiasi momento senza preavviso.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">Accuratezza delle Informazioni</h3>
            <p className="text-muted-foreground mb-6">
              Pur impegnandosi a fornire informazioni accurate e aggiornate, Lux Impianti S.R.L. non
              garantisce la completezza, l'accuratezza o l'attualità delle informazioni pubblicate
              sul sito. L'utente è invitato a contattare direttamente l'azienda per verificare le
              informazioni di interesse prima di prendere qualsiasi decisione.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">Diritti di Proprietà Intellettuale</h3>
            <p className="text-muted-foreground mb-6">
              I contenuti del sito, inclusi testi, immagini, loghi, grafici, video e software, sono
              protetti dalle leggi italiane e internazionali sul diritto d'autore e sulla proprietà
              intellettuale. Ogni riproduzione, distribuzione, modifica o utilizzo non autorizzato
              dei contenuti è espressamente vietato e perseguibile ai sensi di legge.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">Limitazione di Responsabilità</h3>
            <p className="text-muted-foreground mb-6">
              Lux Impianti S.R.L. non potrà essere ritenuta responsabile per eventuali danni diretti
              o indiretti derivanti dall'accesso o dall'utilizzo del sito, salvo nei casi previsti
              da norme imperative di legge. L'azienda non è responsabile per il contenuto di siti
              web di terze parti collegati attraverso link presenti sul proprio sito.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">Trattamento dei Dati Personali</h3>
            <p className="text-muted-foreground mb-6">
              Il trattamento dei dati personali raccolti attraverso il sito avviene nel rispetto del
              Regolamento (UE) 2016/679 (GDPR). Per maggiori informazioni si rimanda alla Privacy
              Policy disponibile sul sito.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">Legge Applicabile</h3>
            <p className="text-muted-foreground mb-6">
              Le presenti note legali sono regolate dalla legge italiana. Per qualsiasi controversia
              sarà competente in via esclusiva il Foro di Brescia.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-primary">Contatti</h3>
            <p className="text-muted-foreground mb-6">
              Per qualsiasi informazione o richiesta relativa alle presenti note legali, è possibile
              contattare Lux Impianti S.R.L. all'indirizzo email info@luximpiantisrl.com o al numero
              di telefono +39 0498755990.
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

export default NoteLegali;
