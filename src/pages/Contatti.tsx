import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, CheckCircle, Send, MessageSquare, User, Building2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

// Schema di validazione con zod
const contactFormSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, { message: "Il nome deve contenere almeno 2 caratteri" })
    .max(50, { message: "Il nome non può superare 50 caratteri" }),
  cognome: z
    .string()
    .trim()
    .min(2, { message: "Il cognome deve contenere almeno 2 caratteri" })
    .max(50, { message: "Il cognome non può superare 50 caratteri" }),
  email: z
    .string()
    .trim()
    .email({ message: "Inserisci un indirizzo email valido" })
    .max(255, { message: "L'email non può superare 255 caratteri" }),
  telefono: z
    .string()
    .trim()
    .min(8, { message: "Inserisci un numero di telefono valido" })
    .max(15, { message: "Il numero di telefono non può superare 15 caratteri" })
    .regex(/^[0-9+\s()-]+$/, { message: "Il numero può contenere solo numeri, +, -, (, ), e spazi" }),
  tipologia: z.enum(["privato", "azienda"], {
    required_error: "Seleziona una tipologia",
  }),
  interessato: z.string({
    required_error: "Seleziona un'opzione",
  }).min(1, { message: "Seleziona un'opzione" }),
  oggetto: z
    .string()
    .trim()
    .min(5, { message: "L'oggetto deve contenere almeno 5 caratteri" })
    .max(100, { message: "L'oggetto non può superare 100 caratteri" }),
  messaggio: z
    .string()
    .trim()
    .min(10, { message: "Il messaggio deve contenere almeno 10 caratteri" })
    .max(1000, { message: "Il messaggio non può superare 1000 caratteri" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contatti = () => {
  const heroSection = useIntersectionObserver({ threshold: 0.1, rootMargin: '100px' });
  const infoSection = useIntersectionObserver({ threshold: 0.1, rootMargin: '100px' });
  const formSection = useIntersectionObserver({ threshold: 0.1, rootMargin: '100px' });
  const faqSection = useIntersectionObserver({ threshold: 0.1, rootMargin: '100px' });
  const locationsSection = useIntersectionObserver({ threshold: 0.1, rootMargin: '100px' });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nome: "",
      cognome: "",
      email: "",
      telefono: "",
      tipologia: undefined,
      interessato: "",
      oggetto: "",
      messaggio: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    // Validazione input prima dell'invio
    const message = `Nuovo contatto da ${data.nome} ${data.cognome}\nEmail: ${data.email}\nTelefono: ${data.telefono}\nTipologia: ${data.tipologia}\nInteressato a: ${data.interessato}\nOggetto: ${data.oggetto}\nMessaggio: ${data.messaggio}`;
    
    // Encoding sicuro per WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/393331234567?text=${encodedMessage}`;
    
    toast.success("Messaggio inviato! Ti contatteremo presto.", {
      description: "Grazie per averci contattato",
    });
    
    // Apri WhatsApp in una nuova scheda
    window.open(whatsappUrl, '_blank');
    
    form.reset();
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Chiamaci",
      description: "Lun-Ven 9:00-18:00",
      action: "0823 155 6627",
      href: "tel:08231556627",
      color: "text-lime-green",
      bgColor: "bg-lime-green/10",
    },
    {
      icon: Mail,
      title: "Scrivici",
      description: "Risposta entro 24h",
      action: "info@luximpiantisrl.com",
      href: "mailto:info@luximpiantisrl.com",
      color: "text-blue-medium",
      bgColor: "bg-blue-medium/10",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Chat in tempo reale",
      action: "+39 333 123 4567",
      href: "https://wa.me/393331234567",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
  ];

  const stats = [
    { label: "Clienti Felici", value: "500+" },
    { label: "Progetti Fatti", value: "1000+" },
    { label: "Risposta", value: "<24h" },
    { label: "Consulenze", value: "∞" },
  ];

  const faqs = [
    {
      question: "Quanto costa un impianto fotovoltaico?",
      answer: "Il costo varia in base alla potenza e alle specifiche esigenze. Offriamo preventivi gratuiti personalizzati.",
    },
    {
      question: "Ci sono incentivi statali disponibili?",
      answer: "Sì, supportiamo i clienti nell'accesso a bonus fiscali, Conto Termico e Reddito Energetico.",
    },
    {
      question: "Quanto tempo ci vuole per l'installazione?",
      answer: "Generalmente 2-5 giorni lavorativi per impianti residenziali standard, più tempo per installazioni complesse.",
    },
    {
      question: "Offrite assistenza post-vendita?",
      answer: "Sì, forniamo manutenzione programmata e assistenza tecnica per tutta la vita utile dell'impianto.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-muted py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>{" "}
            / Contatti
          </p>
        </div>
      </div>

      {/* Hero Section - Completamente rinnovata */}
      <section
        ref={heroSection.ref}
        className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden py-16 md:py-24"
        style={{
          background: 'linear-gradient(135deg, hsl(189 95% 28%) 0%, hsl(189 85% 38%) 35%, hsl(189 75% 48%) 70%, hsl(189 65% 58%) 100%)',
        }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0yaC0yYy0xLjEgMC0yIC45LTIgMnYyYzAgMS4xLjkgMiAyIDJoMmMxLjEgMCAyLS45IDItMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${heroSection.isVisible ? 'animate-fade-in' : 'translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8 backdrop-blur-lg border-2 border-lime-green/60 shadow-xl hover:bg-white/15 hover:border-lime-green hover:scale-105 transition-all duration-300 group">
              <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-lime-green group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-wider">Contatto Diretto</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] px-4">
              Parliamo del Tuo <br />
              <span className="text-lime-green drop-shadow-[0_0_30px_rgba(156,225,55,0.5)]">Progetto Energetico</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-10 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] px-4">
              La nostra esperienza al tuo servizio. Consulenza gratuita e supporto completo per ogni fase del progetto.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 max-w-6xl mx-auto px-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`group relative bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl px-2 sm:px-3 md:px-4 py-6 md:py-8 transition-all duration-500 hover:scale-110 hover:bg-white/20 border-2 border-white/20 hover:border-lime-green/60 shadow-2xl hover:shadow-glow-lime text-center min-h-[120px] md:min-h-[160px] flex flex-col items-center justify-center overflow-hidden ${heroSection.isVisible ? 'animate-scale-in' : 'scale-90'}`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                >
                  {/* Animated background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-green/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-lime-green drop-shadow-[0_0_25px_rgba(156,225,55,0.6)] mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                    <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-white font-bold uppercase tracking-wider leading-tight break-words max-w-full px-1 group-hover:text-lime-green transition-colors duration-300">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods - Cards Interattive */}
      <section 
        ref={infoSection.ref}
        className="py-16 bg-background -mt-20 relative z-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group transition-all duration-700 ${infoSection.isVisible ? 'animate-scale-in' : 'scale-95'}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <Card className="h-full hover:shadow-card-hover hover:shadow-glow-lime hover:-translate-y-2 transition-all duration-300 border-border hover:border-lime-green overflow-hidden">
                  <CardContent className="p-6 text-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-lime-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className={`inline-flex p-4 rounded-full ${method.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon className={`h-8 w-8 ${method.color}`} />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-lime-green transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                      <p className="text-lg font-semibold text-secondary group-hover:text-lime-green transition-colors">
                        {method.action}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section - Completamente Rinnovato */}
      <section 
        ref={formSection.ref}
        className="py-16 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-700 ${formSection.isVisible ? 'animate-fade-in' : 'translate-y-4'}`}>
            <p className="text-lime-green uppercase tracking-wider text-sm mb-2 font-semibold">Richiedi Informazioni</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Compila il Form di Contatto
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tutti i campi sono obbligatori. Riceverai una risposta entro 24 ore.
            </p>
          </div>

          <div className={`max-w-4xl mx-auto transition-all duration-700 ${formSection.isVisible ? 'animate-scale-in' : 'scale-95'}`}>
            <Card className="shadow-elevation border-border hover:border-lime-green/50 transition-all duration-300">
              <CardHeader className="bg-gradient-card border-b">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Send className="h-6 w-6 text-lime-green" />
                  Inviaci una Richiesta
                </CardTitle>
                <CardDescription>
                  Compila il modulo con i tuoi dati e ti ricontatteremo al più presto
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Tipologia Cliente */}
                    <FormField
                      control={form.control}
                      name="tipologia"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold flex items-center gap-2">
                            <Building2 className="h-4 w-4 text-lime-green" />
                            Tipologia Cliente *
                          </FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Sei un privato o un'azienda?" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="privato">Privato</SelectItem>
                              <SelectItem value="azienda">Azienda</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Nome e Cognome */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">Nome *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Mario" 
                                className="h-12"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="cognome"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">Cognome *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Rossi" 
                                className="h-12"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Email e Telefono */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">Email *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="mario.rossi@esempio.it" 
                                className="h-12"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="telefono"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">Telefono *</FormLabel>
                            <FormControl>
                              <Input 
                                type="tel"
                                placeholder="+39 333 1234567" 
                                className="h-12"
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription className="text-xs">
                              Inserisci un numero valido con prefisso
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Interessato a */}
                    <FormField
                      control={form.control}
                      name="interessato"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">Interessato a *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Seleziona la soluzione che ti interessa" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="fotovoltaico">Impianto Fotovoltaico</SelectItem>
                              <SelectItem value="solare">Solare Termico</SelectItem>
                              <SelectItem value="pompa-calore">Pompa di Calore</SelectItem>
                              <SelectItem value="climatizzazione">Climatizzazione</SelectItem>
                              <SelectItem value="geotermico">Geotermico</SelectItem>
                              <SelectItem value="biomasse">Biomasse</SelectItem>
                              <SelectItem value="reddito-energetico">Reddito Energetico</SelectItem>
                              <SelectItem value="manutenzione">Manutenzione Impianti</SelectItem>
                              <SelectItem value="consulenza">Consulenza Energetica</SelectItem>
                              <SelectItem value="altro">Altro</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Oggetto */}
                    <FormField
                      control={form.control}
                      name="oggetto"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">Oggetto *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Es: Richiesta preventivo impianto fotovoltaico 6kW" 
                              className="h-12"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Messaggio */}
                    <FormField
                      control={form.control}
                      name="messaggio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">Messaggio *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Descrivi la tua richiesta in dettaglio. Più informazioni fornisci, più preciso sarà il nostro preventivo..."
                              className="min-h-[150px] resize-none"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription className="text-xs">
                            {field.value.length}/1000 caratteri
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-lime-green hover:bg-lime-green/90 hover:scale-105 text-foreground font-semibold text-lg transition-all duration-300 shadow-glow-lime hover:shadow-glow-lime h-14"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Invia Richiesta
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section - Nuova */}
      <section 
        ref={faqSection.ref}
        className="py-16 bg-background"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-700 ${faqSection.isVisible ? 'animate-fade-in' : 'translate-y-4'}`}>
            <p className="text-lime-green uppercase tracking-wider text-sm mb-2 font-semibold">Domande Frequenti</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Hai Domande? Abbiamo le Risposte
            </h2>
          </div>

          <div className="max-w-3xl mx-auto grid gap-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className={`group hover:shadow-card-hover hover:border-lime-green transition-all duration-700 ${faqSection.isVisible ? 'animate-scale-in' : 'scale-95'}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-start gap-3 group-hover:text-lime-green transition-colors">
                    <CheckCircle className="h-5 w-5 text-lime-green flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className={`text-center mt-12 transition-all duration-700 ${faqSection.isVisible ? 'animate-fade-in' : 'translate-y-4'}`}>
            <p className="text-lg text-muted-foreground mb-4">
              Non hai trovato la risposta che cercavi?
            </p>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-lime-green text-lime-green hover:bg-lime-green hover:text-foreground"
            >
              <a href="tel:08231556627">
                <Phone className="mr-2 h-5 w-5" />
                Chiamaci Ora
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Office Locations - Interattiva con Mappe */}
      <section 
        ref={locationsSection.ref}
        className="py-16 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-700 ${locationsSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-lime-green uppercase tracking-wider text-sm mb-2 font-semibold">Dove Siamo</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Le Nostre Sedi</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visita i nostri uffici oppure contattaci per una consulenza. Siamo a tua disposizione!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Sede Legale - Capriolo */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Largo+Ochi+7+Capriolo+BS+Italia"
              target="_blank"
              rel="noopener noreferrer"
              className="block no-underline"
            >
              <Card 
                className={`group overflow-hidden hover:shadow-card-hover hover:shadow-glow-lime hover:-translate-y-2 transition-all duration-500 hover:border-lime-green cursor-pointer ${locationsSection.isVisible ? 'animate-scale-in' : 'scale-95'}`}
                style={{
                  animationDelay: '0s',
                  animationFillMode: 'both'
                }}
              >
                {/* Map Preview Placeholder */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/90 via-primary/70 to-primary/50 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0yaC0yYy0xLjEgMC0yIC45LTIgMnYyYzAgMS4xLjkgMiAyIDJoMmMxLjEgMCAyLS45IDItMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
                  <div className="relative z-10 text-center space-y-4">
                    <div className="inline-flex p-6 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 group-hover:border-lime-green group-hover:bg-lime-green/20 transition-all duration-300">
                      <MapPin className="h-12 w-12 text-white group-hover:text-lime-green group-hover:animate-bounce transition-colors" />
                    </div>
                    <div className="px-4">
                      <p className="text-white text-lg font-bold mb-1">Clicca per aprire in Google Maps</p>
                      <p className="text-white/80 text-sm">Ottieni indicazioni stradali</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>

              <CardHeader className="bg-gradient-card border-b relative">
                <div className="absolute inset-0 bg-gradient-to-br from-lime-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardTitle className="text-2xl flex items-center gap-2 relative z-10">
                  <MapPin className="h-6 w-6 text-lime-green group-hover:animate-bounce" />
                  <span className="group-hover:text-lime-green transition-colors">Capriolo (BS)</span>
                </CardTitle>
                <CardDescription>Sede Legale</CardDescription>
              </CardHeader>
              
              <CardContent className="p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-lime-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="space-y-4 relative z-10">
                  <div className="flex items-start gap-3 p-2">
                    <MapPin className="h-5 w-5 text-lime-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">Indirizzo</p>
                      <p className="text-muted-foreground">Largo Ochi, 7 Capriolo (BS)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-2">
                    <Phone className="h-5 w-5 text-lime-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">Telefono</p>
                      <p className="text-secondary font-semibold">0823 155 6627</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-2">
                    <Mail className="h-5 w-5 text-lime-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">Email</p>
                      <p className="text-secondary">info@luximpiantisrl.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-2">
                    <Clock className="h-5 w-5 text-lime-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">Orari</p>
                      <p className="text-muted-foreground">Lun-Ven: 9:00-18:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </a>

            {/* Sede Operativa - Caserta */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Via+Mulini+Militari+40+Caserta+CE+Italia"
              target="_blank"
              rel="noopener noreferrer"
              className="block no-underline"
            >
              <Card 
                className={`group overflow-hidden hover:shadow-card-hover hover:shadow-glow-lime hover:-translate-y-2 transition-all duration-500 hover:border-lime-green cursor-pointer ${locationsSection.isVisible ? 'animate-scale-in' : 'scale-95'}`}
                style={{
                  animationDelay: '0.1s',
                  animationFillMode: 'both'
                }}
              >
                {/* Map Preview Placeholder */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/90 via-primary/70 to-primary/50 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0yaC0yYy0xLjEgMC0yIC45LTIgMnYyYzAgMS4xLjkgMiAyIDJoMmMxLjEgMCAyLS45IDItMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
                  <div className="relative z-10 text-center space-y-4">
                    <div className="inline-flex p-6 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 group-hover:border-lime-green group-hover:bg-lime-green/20 transition-all duration-300">
                      <MapPin className="h-12 w-12 text-white group-hover:text-lime-green group-hover:animate-bounce transition-colors" />
                    </div>
                    <div className="px-4">
                      <p className="text-white text-lg font-bold mb-1">Clicca per aprire in Google Maps</p>
                      <p className="text-white/80 text-sm">Ottieni indicazioni stradali</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>

              <CardHeader className="bg-gradient-card border-b relative">
                <div className="absolute inset-0 bg-gradient-to-br from-lime-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardTitle className="text-2xl flex items-center gap-2 relative z-10">
                  <MapPin className="h-6 w-6 text-lime-green group-hover:animate-bounce" />
                  <span className="group-hover:text-lime-green transition-colors">Caserta (CE)</span>
                </CardTitle>
                <CardDescription>Sede Operativa</CardDescription>
              </CardHeader>
              
              <CardContent className="p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-lime-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="space-y-4 relative z-10">
                  <div className="flex items-start gap-3 p-2">
                    <MapPin className="h-5 w-5 text-lime-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">Indirizzo</p>
                      <p className="text-muted-foreground">Via Mulini Militari, 40 Caserta (CE)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-2">
                    <Phone className="h-5 w-5 text-lime-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">Telefono</p>
                      <p className="text-secondary font-semibold">0823 155 6627</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-2">
                    <Mail className="h-5 w-5 text-lime-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">Email</p>
                      <p className="text-secondary">info@luximpiantisrl.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-2">
                    <Clock className="h-5 w-5 text-lime-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">Orari</p>
                      <p className="text-muted-foreground">Lun-Ven: 9:00-18:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contatti;
