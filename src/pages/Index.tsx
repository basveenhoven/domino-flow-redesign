import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/site/PageLayout";
import { ContactForm } from "@/components/site/ContactForm";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import heroPoster from "@/assets/hero-dominoes.jpg";
import { heroImages, projects, services, team } from "@/data/ddt";

/* --------------------------------- HERO --------------------------------- */
const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    void v.play().catch(() => undefined);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden px-6 pb-20 md:px-12 md:pb-32">
      {/* Cinematic Media Layer */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={heroVideo.url}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-6 animate-fade-up">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.5em] text-white/40 font-semibold">
              <span>Est. 2008</span>
              <div className="w-12 h-px bg-white/20" />
              <span>Nederland</span>
            </div>
            <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[9px] uppercase tracking-widest text-white/60">
              N° 001 — Collective
            </div>
          </div>

          <h1
            className="font-display text-7xl md:text-[9rem] lg:text-[11rem] leading-[0.85] font-bold tracking-tighter text-white animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Dutch
            <br />
            <span
              className="text-primary italic"
              style={{ filter: "drop-shadow(0 0 30px hsl(var(--primary) / 0.25))" }}
            >
              Domino
            </span>
            <br />
            Team
          </h1>

          <div
            className="flex flex-col md:flex-row md:items-end justify-between gap-16 mt-6 animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            <div className="max-w-md space-y-6">
              <p className="text-xl text-white/70 leading-relaxed font-light">
                Een collectief van 12 bouwers, gespecialiseerd in high-stakes
                domino-kunst. Wij vertalen complexe engineering naar momenten
                van pure visuele kettingreactie.
              </p>
              <div className="flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-primary font-bold">
                <span>Domino</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>Art</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>Performance</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button
                asChild
                className="h-16 px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full hover:-translate-y-1 transition-all duration-300 text-sm"
                style={{ boxShadow: "0 0 0 transparent" }}
              >
                <Link to="/diensten">
                  Boek het team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-16 px-8 border-white/10 bg-white/5 backdrop-blur-xl rounded-full hover:bg-white/10 text-white text-sm font-medium tracking-wide"
              >
                <Link to="/wdc">WDC 2026</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Motion Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20">
        <div className="w-px h-16 bg-gradient-to-b from-white/0 via-white/20 to-white/0" />
      </div>
    </section>
  );
};

/* ----------------------------- FEATURE PROJECT ---------------------------- */
const FeatureProject = () => (
  <section
    className="relative z-20 py-40 px-6 md:px-12"
    style={{
      backgroundImage: "linear-gradient(to bottom, transparent, hsl(240 8% 4%))",
    }}
  >
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="inline-block py-1 px-3 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-sm border border-primary/20">
              Feature Project
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight leading-none text-white">
              World Domino <span className="text-white/20">Collective.</span>
            </h2>
          </div>
          <p className="text-white/50 text-lg leading-relaxed">
            Ons jaarlijkse event waar de beste bouwers uit binnen- en buitenland
            samenkomen voor de grootste kettingreactie van Nederland. Zomer 2026
            — thema <em className="text-primary not-italic font-medium">Bucketlist</em>.
          </p>
          <div className="pt-4">
            <Link
              to="/projecten"
              className="inline-flex items-center gap-4 text-white hover:text-primary transition-colors group font-medium"
            >
              <span className="w-12 h-px bg-white/20 group-hover:bg-primary/50 group-hover:w-16 transition-all" />
              Bekijk alle projecten
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <Link
              to="/wdc"
              className="relative block rounded-2xl overflow-hidden aspect-video border border-white/5 bg-white/5"
            >
              <img
                src={heroImages.wdcHero}
                alt="WDC 2024 Premiere"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-widest font-medium">
                    Project Showcase
                  </p>
                  <p className="text-xl font-display font-bold text-white">
                    WDC 2025 — Milestones
                  </p>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground grid place-items-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------- MANIFESTO ------------------------------- */
const Manifesto = () => (
  <section className="py-40 px-6 md:px-12 relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />
    <div className="max-w-7xl mx-auto relative">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-3 space-y-3">
          <span className="inline-block py-1 px-3 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-sm border border-primary/20">
            Manifest
          </span>
          <div className="text-xs uppercase tracking-[0.3em] text-white/40">
            Waarom domino?
          </div>
        </div>
        <div className="lg:col-span-9">
          <p className="font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] text-white">
            We bouwen <span className="italic text-primary">verhalen</span> uit
            honderdduizenden stenen. Elk steentje een seconde aandacht,
            elke val een{" "}
            <span className="italic text-primary">moment</span> dat blijft hangen.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------- PROJECTS ------------------------------- */
const ProjectsShowcase = () => {
  const featured = projects.slice(0, 5);
  const [active, setActive] = useState(0);

  return (
    <section
      className="py-32 px-6 md:px-12"
      style={{
        backgroundImage: "linear-gradient(to bottom, hsl(240 8% 4%), hsl(240 8% 6%))",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
          <div className="space-y-4">
            <span className="inline-block py-1 px-3 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-sm border border-primary/20">
              Selected Work
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight leading-none text-white">
              Recente <span className="text-white/20">projecten.</span>
            </h2>
          </div>
          <Link
            to="/projecten"
            className="inline-flex items-center gap-4 text-white hover:text-primary transition-colors group font-medium"
          >
            <span className="w-12 h-px bg-white/20 group-hover:bg-primary/50 group-hover:w-16 transition-all" />
            Alle projecten
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-white/5">
              {featured.map((p, i) => (
                <img
                  key={p.slug}
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <Link
                to={`/projecten/${featured[active].slug}`}
                className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4"
              >
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-widest font-medium">
                    {featured[active].category} · {featured[active].year}
                  </p>
                  <p className="text-2xl font-display font-bold text-white">
                    {featured[active].title}
                  </p>
                </div>
                <div className="h-12 w-12 shrink-0 rounded-full bg-primary text-primary-foreground grid place-items-center">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </Link>
            </div>
          </div>

          <ul className="lg:col-span-5 flex flex-col divide-y divide-white/10 border-y border-white/10">
            {featured.map((p, i) => (
              <li key={p.slug}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`w-full text-left py-5 flex items-center justify-between gap-4 transition-all ${
                    i === active ? "pl-4" : "pl-0"
                  }`}
                >
                  <div className="flex items-baseline gap-4 min-w-0">
                    <span className="text-xs tracking-[0.2em] text-white/40 tabular-nums">
                      0{i + 1}
                    </span>
                    <span
                      className={`font-display text-lg md:text-xl font-semibold truncate transition-colors ${
                        i === active ? "text-primary" : "text-white"
                      }`}
                    >
                      {p.title}
                    </span>
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/40 shrink-0">
                    {p.year}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------- SERVICES -------------------------------- */
const Services = () => (
  <section className="py-32 px-6 md:px-12">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 mb-16 items-end">
        <div className="lg:col-span-6 space-y-4">
          <span className="inline-block py-1 px-3 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-sm border border-primary/20">
            What we do
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight leading-none text-white">
            Onze <span className="text-white/20">diensten.</span>
          </h2>
        </div>
        <p className="lg:col-span-5 lg:col-start-8 text-lg text-white/50 leading-relaxed">
          Voor bedrijven, scholen, festivals en merken. We schalen mee van
          intieme workshops tot productiebouw met honderdduizenden stenen.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <Link
            key={s.slug}
            to={`/diensten/${s.slug}`}
            className="group relative rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all p-8 flex flex-col min-h-[440px]"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

            <div className="relative flex items-start justify-between mb-10">
              <span className="text-xs uppercase tracking-[0.25em] text-white/40 tabular-nums">
                0{i + 1} / 0{services.length}
              </span>
              <div className="h-10 w-10 rounded-full border border-white/10 grid place-items-center text-white/60 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all">
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </div>
            </div>

            <h3 className="relative font-display text-3xl font-bold mb-4 tracking-tight text-white">
              {s.title}
            </h3>
            <p className="relative text-sm text-white/50 line-clamp-4 mb-6 leading-relaxed">
              {s.short}
            </p>

            <div className="relative mt-auto aspect-[16/9] rounded-xl overflow-hidden border border-white/5">
              <img
                src={s.image}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

/* --------------------------------- TEAM --------------------------------- */
const Team = () => (
  <section
    className="py-32 px-6 md:px-12"
    style={{
      backgroundImage: "linear-gradient(to bottom, hsl(240 8% 6%), hsl(240 8% 4%))",
    }}
  >
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 mb-16 items-end">
        <div className="lg:col-span-6 space-y-4">
          <span className="inline-block py-1 px-3 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-sm border border-primary/20">
            The Collective
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight leading-none text-white">
            12 bouwers, <span className="text-white/20">één team.</span>
          </h2>
        </div>
        <div className="lg:col-span-4 lg:col-start-9 self-end">
          <Link
            to="/team"
            className="inline-flex items-center gap-4 text-white hover:text-primary transition-colors group font-medium"
          >
            <span className="w-12 h-px bg-white/20 group-hover:bg-primary/50 group-hover:w-16 transition-all" />
            Ontmoet het hele team
          </Link>
        </div>
      </div>

      <ul className="divide-y divide-white/10 border-y border-white/10">
        {team.map((m, i) => {
          const slug = m.name
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]+/g, "-");
          return (
            <li key={m.name}>
              <Link
                to={`/team/${slug}`}
                className="group grid grid-cols-12 items-center py-5 lg:py-6 gap-4 hover:pl-4 transition-all duration-300"
              >
                <span className="col-span-2 md:col-span-1 text-xs tracking-[0.2em] text-white/40 tabular-nums">
                  /{String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-7 md:col-span-6 font-display text-xl md:text-3xl font-semibold tracking-tight text-white group-hover:text-primary transition-colors">
                  {m.name}
                </span>
                <span className="col-span-3 md:col-span-4 text-xs md:text-sm text-white/40 uppercase tracking-[0.2em]">
                  {m.role}
                </span>
                <span className="hidden md:flex col-span-1 justify-end text-white/40 group-hover:text-primary transition-colors">
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

/* ---------------------------------- CTA --------------------------------- */
const Cta = () => (
  <section className="py-40 px-6 md:px-12 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />
    <div className="max-w-5xl mx-auto text-center relative">
      <span className="inline-block py-1 px-3 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-sm border border-primary/20 mb-8">
        Start a project
      </span>
      <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white mb-8">
        Klaar voor iets
        <br />
        <span
          className="italic text-primary"
          style={{ filter: "drop-shadow(0 0 30px hsl(var(--primary) / 0.25))" }}
        >
          spectaculairs?
        </span>
      </h2>
      <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
        Heb je een idee, een evenement of een merkverhaal? Laat het ons
        weten — we denken graag met je mee.
      </p>
      <Button
        asChild
        className="h-16 px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full hover:-translate-y-1 transition-all duration-300 text-sm"
      >
        <Link to="/contact">
          Start een project
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="dark bg-background text-foreground overflow-x-hidden">
      <PageLayout>
        <Hero />
        <FeatureProject />
        <Manifesto />
        <ProjectsShowcase />
        <Services />
        <Team />
        <Cta />
        <ContactForm />
      </PageLayout>
    </div>
  );
};

export default Index;
