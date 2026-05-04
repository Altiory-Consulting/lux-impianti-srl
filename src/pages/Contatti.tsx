import { CheckCircle, Send, Building2, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const contactFormSchema = z.object({
  nome: z.string().trim().min(2, { message: "Il nome deve contenere almeno 2 caratteri" }).max(50),
  cognome: z.string().trim().min(2, { message: "Il cognome deve contenere almeno 2 caratteri" }).max(50),
  email: z.string().trim().email({ message: "Inserisci un indirizzo email valido" }).max(255),
  telefono: z.string().trim().min(8, { message: "Inserisci un numero di telefono valido" }).max(15)
    .regex(/^[0-9+\s()-]+$/, { message: "Il numero può contenere solo numeri, +, -, (, ), e spazi" }),
  tipologia: z.enum(["privato", "azienda"], { required_error: "Seleziona una tipologia" }),
  interessato: z.string({ required_error: "Seleziona un'opzione" }).min(1),
  oggetto: z.string().trim().min(5, { message: "L'oggetto deve contenere almeno 5 caratteri" }).max(100),
  messaggio: z.string().trim().min(10, { message: "Il messaggio deve contenere almeno 10 caratteri" }).max(1000),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const faqs = [
  { q: "Quanto costa un impianto fotovoltaico?", a: "Il costo varia in base alla potenza e alle specifiche esigenze. Offriamo preventivi gratuiti personalizzati." },
  { q: "Ci sono incentivi statali disponibili?", a: "Sì, supportiamo i clienti nell'accesso a bonus fiscali e Conto Termico." },
  { q: "Quanto tempo ci vuole per l'installazione?", a: "I tempi variano in base alle dimensioni dell'impianto, generalmente da pochi giorni a qualche settimana." },
  { q: "Offrite assistenza post-vendita?", a: "Sì, forniamo manutenzione programmata e assistenza tecnica per tutta la vita utile dell'impianto." },
];

const Contatti = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nome: "", cognome: "", email: "", telefono: "",
      tipologia: undefined, interessato: "", oggetto: "", messaggio: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    toast.success("Richiesta inviata con successo!", {
      description: `Grazie ${data.nome}, ti contatteremo al più presto all'indirizzo ${data.email}`,
      duration: 5000,
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <PageHero
        eyebrow="Contatti"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contatti" }]}
        title={<>PARLIAMO DEL TUO<br />PROGETTO <span className="text-accent">ENERGETICO</span></>}
        description="Consulenza gratuita e supporto completo per ogni fase. Rispondiamo entro 24 ore lavorative."
      />

      <section className="px-3 sm:px-4 -mt-4 mb-16">
        <div className="mx-auto max-w-[1320px] grid sm:grid-cols-3 gap-3">
          {[
            { icon: Phone, label: "Telefono", value: "Chiamaci direttamente" },
            { icon: Mail, label: "Email", value: "Scrivici via email" },
            { icon: MapPin, label: "Sedi", value: "Capriolo (BS) · Caserta (CE)" },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-foreground/10 bg-card p-8">
              <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center mb-6">
                <item.icon className="h-5 w-5" />
              </div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{item.label}</p>
              <p className="text-lg font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact-form" className="px-3 sm:px-4 mb-20">
        <div className="mx-auto max-w-[1320px] grid lg:grid-cols-[1fr_1.5fr] gap-3">
          <div className="rounded-3xl bg-foreground text-background p-10 md:p-14">
            <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-5 flex items-center gap-2">
              <span className="pulse-dot" /> Form di contatto
            </p>
            <h2 className="display-xl text-3xl md:text-5xl mb-6">RACCONTACI<br />IL TUO<br />PROGETTO.</h2>
            <p className="text-background/70 leading-relaxed mb-8">
              Compila il modulo: il nostro team analizzerà la tua richiesta e ti ricontatterà con una proposta personalizzata.
            </p>
            <ul className="space-y-3 text-sm text-background/80">
              {["Risposta entro 24h", "Sopralluogo e preventivo gratuiti", "Consulenza incentivi statali"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-accent" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-card border border-foreground/10 p-8 md:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name="tipologia" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium uppercase tracking-wider flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-accent" /> Tipologia *
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl><SelectTrigger className="h-12 rounded-xl"><SelectValue placeholder="Privato o azienda?" /></SelectTrigger></FormControl>
                      <SelectContent>
                        <SelectItem value="privato">Privato</SelectItem>
                        <SelectItem value="azienda">Azienda</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField control={form.control} name="nome" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium uppercase tracking-wider">Nome *</FormLabel>
                      <FormControl><Input placeholder="Mario" className="h-12 rounded-xl" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="cognome" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium uppercase tracking-wider">Cognome *</FormLabel>
                      <FormControl><Input placeholder="Rossi" className="h-12 rounded-xl" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium uppercase tracking-wider">Email *</FormLabel>
                      <FormControl><Input type="email" placeholder="mario.rossi@esempio.it" className="h-12 rounded-xl" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="telefono" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium uppercase tracking-wider">Telefono *</FormLabel>
                      <FormControl><Input type="tel" placeholder="+39 333 1234567" className="h-12 rounded-xl" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <FormField control={form.control} name="interessato" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium uppercase tracking-wider">Interessato a *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl><SelectTrigger className="h-12 rounded-xl"><SelectValue placeholder="Seleziona la soluzione" /></SelectTrigger></FormControl>
                      <SelectContent>
                        <SelectItem value="fotovoltaico">Impianto Fotovoltaico</SelectItem>
                        <SelectItem value="solare">Solare Termico</SelectItem>
                        <SelectItem value="climatizzazione">Climatizzazione</SelectItem>
                        <SelectItem value="manutenzione">Manutenzione Impianti</SelectItem>
                        <SelectItem value="consulenza">Consulenza Energetica</SelectItem>
                        <SelectItem value="altro">Altro</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="oggetto" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium uppercase tracking-wider">Oggetto *</FormLabel>
                    <FormControl><Input placeholder="Es: Richiesta preventivo fotovoltaico 6kW" className="h-12 rounded-xl" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="messaggio" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium uppercase tracking-wider">Messaggio *</FormLabel>
                    <FormControl><Textarea placeholder="Descrivi la tua richiesta in dettaglio..." className="min-h-[150px] resize-none rounded-xl" {...field} /></FormControl>
                    <FormDescription className="text-xs">{field.value.length}/1000 caratteri</FormDescription>
                    <FormMessage />
                  </FormItem>
                )} />

                <Button type="submit" size="lg" className="w-full h-14 rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium">
                  <Send className="mr-2 h-4 w-4" /> Invia richiesta
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      <section className="px-3 sm:px-4 pb-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-10 px-2">
            <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-3 flex items-center gap-2">
              <span className="pulse-dot" /> FAQ
            </p>
            <h2 className="display-xl text-3xl md:text-5xl">DOMANDE FREQUENTI.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-3xl border border-foreground/10 bg-card p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0 text-sm font-medium">
                    0{i + 1}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold pt-1">{f.q}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-14">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contatti;
