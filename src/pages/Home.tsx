import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Sun, Wind, Zap, Leaf, Phone, CheckCircle, ArrowRight, ArrowUpRight, Droplets, Thermometer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import projectHeating from "@/assets/project-heating-1.jpg";
import projectAngri from "@/assets/project-angri-sa.jpg";
import projectSanFelice from "@/assets/project-san-felice-cancello.jpg";
import projectMunicipalPolice from "@/assets/project-municipal-police-caserta.jpg";

const Home = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const heroSlides = [
    {
      video: "/videos/hero-video-3.mp4",
      tagline: "IL TUO DOMANI, TU LO SCEGLI, NOI LO ILLUMINIAMO",
      headline: "Efficienza energetica al servizio di un futuro migliore.",
    },
    {
      video: "/videos/hero-video-2.mp4",
      tagline: "LE TUE SCELTE, TU LE GUIDI, NOI LE TRASFORMIAMO",
      headline: "Tecnologia pulita che rende la tua energia più intelligente.",
    },
    {
      video: "/videos/hero-video.mp4",
      tagline: "IL TUO COMFORT, TU LO SOGNI, NOI LO COSTRUIAMO",
      headline: "Una casa intelligente, pronta per il domani.",
    },
  ];

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % heroSlides.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentVideoIndex]);

  const services = [
    { icon: Sun, title: "Progettazione", desc: "Progetti su misura per ogni esigenza" },
    { icon: Zap, title: "Preventivi su misura", desc: "Soluzioni personalizzate" },
    { icon: Leaf, title: "Installazione", desc: "Installatori certificati" },
    { icon: CheckCircle, title: "Manutenzione", desc: "Assistenza post-vendita" },
    { icon: Wind, title: "Conto Termico", desc: "Accesso agli incentivi" },
    { icon: Sun, title: "Analisi Energetica", desc: "Gratuita e professionale" },
  ];

  const solutions = [
    { icon: Sun, title: "Impianti Fotovoltaici", desc: "Cattura l'energia del sole e riduci le bollette", link: "/soluzione/fotovoltaico" },
    { icon: Droplets, title: "Solare Termico", desc: "Acqua calda naturale dal sole", link: "/soluzione/solare-termico" },
    { icon: Thermometer, title: "Pompa di Calore", desc: "Comfort in ogni stagione con massima efficienza", link: "/soluzione/climatizzazione" },
  ];

  const projects = [
    { image: projectHeating, title: "Sistema Riscaldamento a Pavimento", type: "Climatizzazione", power: "12 kW", description: "Riscaldamento radiante a pavimento con pompa di calore." },
    { image: projectMunicipalPolice, title: "Grande Impianto Fotovoltaico", type: "Fotovoltaico Industriale", power: "140 kW", description: "Caserma Polizia Municipale di Caserta (CE)." },
    { image: projectSanFelice, title: "Impianto Residenziale", type: "Fotovoltaico Residenziale", power: "12 kW", description: "San Felice a Cancello (CE)." },
    { image: projectAngri, title: "Impianto su Tetto Piano", type: "Fotovoltaico Commerciale", power: "4 kW", description: "Angri (SA)." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero — full-bleed video card */}
      <section className="pt-4 pb-10">
        <div className="px-3 sm:px-4">
          <div className="relative mx-auto overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-foreground" style={{ maxWidth: "1320px" }}>
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              preload="metadata"
              onEnded={handleVideoEnd}
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={heroSlides[currentVideoIndex].video} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

            <div className="relative z-10 px-6 sm:px-10 md:px-14 lg:px-20 pt-20 md:pt-28 pb-10 md:pb-14 min-h-[78vh] md:min-h-[82vh] flex flex-col justify-end">
              <div className="max-w-4xl">
                <h1 className="display-xl text-background text-[44px] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[112px] mb-6">
                  {heroSlides[currentVideoIndex].headline}
                </h1>
                <p className="text-background/85 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
                  {heroSlides[currentVideoIndex].tagline}
                </p>

                <Link
                  to="/contatti"
                  className="inline-flex items-center gap-3 rounded-full bg-background text-foreground pl-6 pr-2 py-2 text-sm font-medium hover:scale-[1.02] transition-transform"
                >
                  Richiedi una consulenza
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-foreground text-background">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>

              <div className="mt-12 md:mt-16 grid grid-cols-3 gap-6 md:gap-12 max-w-2xl">
                {[
                  { value: "100", suffix: "+", label: "Progetti realizzati" },
                  { value: "15", suffix: "+", label: "Anni di esperienza" },
                  { value: "98", suffix: "%", label: "Clienti soddisfatti" },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-none">
                      {s.value}
                      <sup className="text-accent text-2xl md:text-3xl ml-1">{s.suffix}</sup>
                    </div>
                    <div className="text-background/70 text-xs md:text-sm mt-2 uppercase tracking-wider">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="hidden md:flex absolute bottom-8 right-8 items-center gap-3 rounded-full bg-background/95 backdrop-blur px-4 py-2 shadow-elevation">
                <div className="flex items-center">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-background bg-muted -ml-2 first:ml-0 flex items-center justify-center text-xs font-bold text-foreground/60">
                      {["LX", "SR", "GA", "MP"][i]}
                    </div>
                  ))}
                </div>
                <div className="pl-2">
                  <div className="text-xs font-semibold text-foreground leading-tight">10+ Tecnici certificati</div>
                  <div className="text-xs text-accent font-bold">★★★★★ 4.9/5</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:hidden">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideoIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${index === currentVideoIndex ? "bg-accent w-8" : "bg-background/40 w-4"}`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="absolute top-6 right-6 z-20 hidden md:flex gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideoIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${index === currentVideoIndex ? "bg-accent w-10" : "bg-background/40 w-5"}`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-3 sm:px-4 mb-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-10 px-2 max-w-3xl">
            <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-3 flex items-center gap-2">
              <span className="pulse-dot" /> I nostri servizi
            </p>
            <h2 className="display-xl text-3xl md:text-5xl mb-4">
              INNOVAZIONE AL SERVIZIO<br />DELL'<span className="text-accent">AMBIENTE</span>.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Una gamma completa di servizi che copre ogni fase del progetto, dalla prima consulenza fino alla manutenzione nel tempo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((s, i) => (
              <div key={i} className="group rounded-3xl border border-foreground/10 bg-card p-8 hover:border-foreground/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-foreground transition-colors">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="px-3 sm:px-4 mb-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 px-2">
            <div>
              <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-3 flex items-center gap-2">
                <span className="pulse-dot" /> Portfolio
              </p>
              <h2 className="display-xl text-3xl md:text-5xl">I NOSTRI LAVORI<span className="text-accent">.</span></h2>
            </div>
            <Link to="/soluzioni" className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
              Tutte le soluzioni <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex gap-3 min-w-max">
              {projects.map((p, i) => (
                <Card key={i} className="w-[300px] sm:w-[360px] md:w-[400px] flex-shrink-0 overflow-hidden border-foreground/10 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    <div className="absolute top-4 right-4 bg-foreground text-background px-3 py-1 rounded-full text-xs font-semibold">
                      {p.power}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <span className="text-xs text-accent font-semibold uppercase tracking-wider">{p.type}</span>
                    <h3 className="text-lg font-semibold mt-2 mb-2">{p.title}</h3>
                    <p className="text-muted-foreground text-sm">{p.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="px-3 sm:px-4 mb-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-10 px-2 max-w-3xl">
            <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-3 flex items-center gap-2">
              <span className="pulse-dot" /> Soluzioni energetiche
            </p>
            <h2 className="display-xl text-3xl md:text-5xl">TECNOLOGIE<br />PER IL <span className="text-accent">FUTURO</span>.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {solutions.map((sol, i) => (
              <Link key={i} to={sol.link} className="group">
                <div className="h-full rounded-3xl border border-foreground/10 bg-card p-8 hover:border-foreground/30 transition-colors flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-foreground text-background flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-foreground transition-colors">
                    <sol.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display uppercase text-2xl font-bold mb-3 tracking-tight leading-tight">{sol.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">{sol.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:text-accent transition-colors">
                    Scopri di più <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA dark card */}
      <section className="px-3 sm:px-4 pb-16">
        <div className="mx-auto max-w-[1320px] rounded-[2rem] md:rounded-[2.5rem] bg-foreground text-background p-10 md:p-20 text-center">
          <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-5 flex items-center justify-center gap-2">
            <span className="pulse-dot" /> Iniziamo
          </p>
          <h2 className="display-xl text-4xl md:text-6xl mb-6">SCEGLI UN FUTURO PIÙ GREEN<span className="text-accent">.</span></h2>
          <p className="text-background/70 text-lg max-w-xl mx-auto mb-10">
            Consulenza energetica gratuita per scoprire come risparmiare con le energie rinnovabili.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              to="/contatti"
              className="inline-flex items-center gap-3 rounded-full bg-background text-foreground pl-6 pr-2 py-2 text-sm font-medium hover:scale-[1.02] transition-transform"
            >
              Richiedi info
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-foreground text-background">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
            <a href="tel:08231556627" className="inline-flex items-center gap-2 text-sm hover:text-accent transition-colors">
              <Phone className="h-4 w-4" /> 0823 155 6627
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
