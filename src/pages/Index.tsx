import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
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
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
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
          className="h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-background/55" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 25%, transparent 55%, hsl(var(--background)) 100%)",
          }}
        />
      </div>

      {/* Top meta strip */}
      <div className="container relative z-10 pt-32">
        <div className="flex items-center justify-between text-[10px] tracking-[0.3em] uppercase text-white/70 font-medium border-b border-white/15 pb-4">
          <span>EST. 2008 · Nederland</span>
          <span className="hidden md:inline">Domino · Art · Performance</span>
          <span>N° 001 — Het Collectief</span>
        </div>
      </div>

      {/* Massive editorial headline */}
      <div className="container relative z-10 pb-20 lg:pb-32 pt-16 lg:pt-28">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-9">
            <h1 className="font-display font-bold tracking-[-0.04em] leading-[0.85] text-white text-[clamp(3.5rem,11vw,11rem)] animate-fade-up">
              Dutch
              <br />
              <span className="italic font-light text-primary">Domino</span>
              <br />
              Team<span className="text-primary">.</span>
            </h1>
          </div>

          <div className="lg:col-span-3 lg:pb-6 space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-white/85 text-base leading-relaxed max-w-sm">
              Een collectief van 12 bouwers dat al 15+ jaar
              monumentale dominoprojecten realiseert — van workshops
              tot het wereldrecord-event World Domino Collective.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 h-11 text-sm group"
              >
                <Link to="/diensten">
                  Boek het team
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:rotate-45" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-6 h-11 text-sm border-white/30 bg-transparent hover:bg-white/10 text-white"
              >
                <Link to="/wdc">WDC 2026</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 right-6 z-10 hidden md:flex items-center gap-2 text-white/60 text-[10px] tracking-[0.3em] uppercase">
        <span className="h-px w-10 bg-white/40" />
        Scroll
      </div>
    </section>
  );
};

/* ------------------------------- MARQUEE ------------------------------- */
const Marquee = () => {
  const items = [
    "750.000+ stenen",
    "★",
    "World Records",
    "★",
    "Workshops & teambuilding",
    "★",
    "Brand activations",
    "★",
    "Live performances",
    "★",
    "Internationaal",
    "★",
  ];
  return (
    <section className="border-y border-border bg-background overflow-hidden py-6">
      <div className="flex gap-12 whitespace-nowrap animate-[marquee_40s_linear_infinite]">
        {[...items, ...items, ...items].map((t, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-4xl font-bold tracking-tight"
          >
            {t === "★" ? <span className="text-primary">✦</span> : t}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee {from{transform:translateX(0)}to{transform:translateX(-33.333%)}}`}</style>
    </section>
  );
};

/* ------------------------------ MANIFESTO ------------------------------ */
const Manifesto = () => (
  <section className="py-28 lg:py-40">
    <div className="container">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-3">
          <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">
            01 — Manifest
          </div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Waarom domino?
          </div>
        </div>
        <div className="lg:col-span-9">
          <p className="font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-[-0.02em] leading-[1.05]">
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

/* -------------------------------- WORK --------------------------------- */
const Work = () => {
  const featured = projects.slice(0, 5);
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 lg:py-32 bg-surface border-y border-border">
      <div className="container">
        <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">
              02 — Geselecteerd werk
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-[-0.03em]">
              Recente <span className="italic font-light">projecten</span>
            </h2>
          </div>
          <Link
            to="/projecten"
            className="group inline-flex items-center gap-2 text-sm font-medium border-b border-foreground/30 pb-1 hover:border-primary hover:text-primary transition-colors"
          >
            Alle projecten
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Large preview */}
          <div className="lg:col-span-7 relative aspect-[4/3] rounded-3xl overflow-hidden bg-muted">
            {featured.map((p, i) => (
              <img
                key={p.slug}
                src={p.image}
                alt={p.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <Link
              to={`/projecten/${featured[active].slug}`}
              className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4"
            >
              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-white/80 mb-2">
                  {featured[active].category} · {featured[active].year}
                </div>
                <div className="font-display text-2xl md:text-3xl font-semibold text-white">
                  {featured[active].title}
                </div>
              </div>
              <div className="h-12 w-12 shrink-0 rounded-full bg-primary text-primary-foreground grid place-items-center">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </Link>
          </div>

          {/* Project list */}
          <ul className="lg:col-span-5 flex flex-col divide-y divide-border border-y border-border">
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
                    <span className="text-xs tracking-[0.2em] text-muted-foreground tabular-nums">
                      0{i + 1}
                    </span>
                    <span
                      className={`font-display text-lg md:text-xl font-semibold truncate transition-colors ${
                        i === active ? "text-primary" : ""
                      }`}
                    >
                      {p.title}
                    </span>
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground shrink-0">
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

/* ------------------------------ SERVICES ------------------------------- */
const Services = () => (
  <section className="py-24 lg:py-32">
    <div className="container">
      <div className="grid lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-4">
          <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">
            03 — Diensten
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[0.95]">
            Wat we voor je <span className="italic font-light">doen</span>
          </h2>
        </div>
        <p className="lg:col-span-5 lg:col-start-8 text-lg text-muted-foreground self-end">
          Voor bedrijven, scholen, festivals en merken. We schalen mee van
          intieme workshops tot productiebouw met honderden duizenden stenen.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
        {services.map((s, i) => (
          <Link
            key={s.slug}
            to={`/diensten/${s.slug}`}
            className="group relative bg-background hover:bg-surface transition-colors p-8 lg:p-10 flex flex-col min-h-[420px]"
          >
            <div className="flex items-start justify-between mb-12">
              <span className="font-display text-5xl font-bold text-primary/30 group-hover:text-primary transition-colors">
                0{i + 1}
              </span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary group-hover:rotate-45" />
            </div>
            <h3 className="font-display text-3xl font-bold mb-4 tracking-tight">
              {s.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-4 mb-6">
              {s.short}
            </p>
            <div className="mt-auto aspect-[16/9] rounded-xl overflow-hidden bg-muted">
              <img
                src={s.image}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

/* --------------------------------- WDC --------------------------------- */
const Wdc = () => (
  <section className="py-24 lg:py-32">
    <div className="container">
      <div className="relative rounded-[2rem] overflow-hidden min-h-[500px] flex items-end">
        <img
          src={heroImages.wdcHero}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/70 to-transparent" />

        <div className="relative p-8 md:p-14 lg:p-20 grid lg:grid-cols-12 gap-8 w-full items-end">
          <div className="lg:col-span-7">
            <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-4">
              04 — Sub-project
            </div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.9] text-white mb-4">
              World Domino
              <br />
              <span className="italic font-light text-primary">Collective</span>
            </h2>
            <div className="font-display text-xl text-white/70">
              ZOMER 2026 · Thema <em className="text-primary">Bucketlist</em>
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 space-y-6">
            <p className="text-white/80 text-base leading-relaxed">
              Een initiatief van DDT. Drie weken bouwen, één onvergetelijke
              falldown van 750.000+ stenen. Bezoek het sub-platform voor
              tickets, sponsoren en alle info.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-primary hover:bg-primary/90 rounded-full">
                <Link to="/wdc">
                  Naar WDC site <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white/10"
              >
                <Link to="/wdc/reserveren">Tickets</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* --------------------------------- TEAM -------------------------------- */
const Team = () => (
  <section className="py-24 lg:py-32 bg-surface border-y border-border">
    <div className="container">
      <div className="grid lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-6">
          <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">
            05 — Het collectief
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[0.95]">
            12 bouwers,
            <br />
            <span className="italic font-light">één team</span>
          </h2>
        </div>
        <div className="lg:col-span-4 lg:col-start-9 self-end">
          <Link
            to="/team"
            className="group inline-flex items-center gap-2 text-sm font-medium border-b border-foreground/30 pb-1 hover:border-primary hover:text-primary transition-colors"
          >
            Ontmoet het hele team
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>
      </div>

      <ul className="divide-y divide-border border-y border-border">
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
                <span className="col-span-2 md:col-span-1 text-xs tracking-[0.2em] text-muted-foreground tabular-nums">
                  /{String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-7 md:col-span-6 font-display text-xl md:text-3xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                  {m.name}
                </span>
                <span className="col-span-3 md:col-span-4 text-xs md:text-sm text-muted-foreground uppercase tracking-[0.2em]">
                  {m.role}
                </span>
                <span className="hidden md:flex col-span-1 justify-end text-muted-foreground group-hover:text-primary transition-colors">
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

/* -------------------------------- CTA ---------------------------------- */
const Cta = () => (
  <section className="py-24 lg:py-32">
    <div className="container">
      <div className="text-center max-w-4xl mx-auto">
        <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-6">
          06 — Boek ons
        </div>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.9] mb-8">
          Klaar voor iets
          <br />
          <span className="italic font-light text-primary">spectaculairs?</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Heb je een idee, een evenement of een merkverhaal? Laat het ons
          weten — we denken graag met je mee.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 text-base group"
        >
          <Link to="/contact">
            Start een project
            <ArrowUpRight className="ml-1 h-5 w-5 transition-transform group-hover:rotate-45" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="dark bg-background text-foreground">
      <PageLayout>
        <Hero />
        <Marquee />
        <Manifesto />
        <Work />
        <Services />
        <Wdc />
        <Team />
        <Cta />
        <ContactForm />
      </PageLayout>
    </div>
  );
};

export default Index;
