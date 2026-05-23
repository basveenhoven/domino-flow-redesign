import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ArrowRight, Calendar, Sparkles, Users, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/site/PageLayout";
import { ContactForm } from "@/components/site/ContactForm";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import heroPoster from "@/assets/hero-dominoes.jpg";
import { heroImages, projects, services, team } from "@/data/ddt";

const DdtHero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.playsInline = true;
    void v.play().catch(() => undefined);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
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
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "hsl(240 8% 6% / 0.45)" }} />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, hsl(240 8% 6%) 0%, hsl(240 8% 6% / 0.5) 50%, transparent 100%)",
          }}
        />
      </div>

      <div className="container relative z-10 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm mb-8 animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">
              Dutch Domino Team
            </span>
          </div>

          <h1
            className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8 animate-fade-up text-white"
            style={{ animationDelay: "0.1s" }}
          >
            Domino Art<br />
            <span className="text-gradient">die Verbindt</span>
          </h1>

          <p
            className="text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed mb-10 animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            Het Dutch Domino Team is een collectief van bouwers dat al meer dan 15 jaar
            indrukwekkende domino-projecten realiseert — van intieme workshops tot
            wereldrecord-evenementen zoals het World Domino Collective.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-7 h-12 text-base group"
            >
              <Link to="/diensten">
                Ontdek onze diensten
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-7 h-12 text-base border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm"
            >
              <Link to="/wdc">WDC 2026 →</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => (
  <section className="bg-surface border-y border-border">
    <div className="container py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { value: "15+", label: "Jaar ervaring" },
        { value: "1M+", label: "Stenen gevallen" },
        { value: "12", label: "Vaste bouwers" },
        { value: "100+", label: "Projecten" },
      ].map((s) => (
        <div key={s.label}>
          <div className="font-display text-3xl md:text-5xl font-bold text-primary">{s.value}</div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const ServicesPreview = () => (
  <section className="py-24 lg:py-32">
    <div className="container">
      <div className="max-w-2xl mb-12">
        <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
          Onze diensten
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Workshops, opdrachten <span className="text-gradient">en maatwerk</span>
        </h2>
        <p className="text-muted-foreground">
          Voor bedrijven, scholen en evenementen — wij bouwen passende domino-ervaringen.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <Link
            key={s.slug}
            to={`/diensten#${s.slug}`}
            className="group rounded-3xl overflow-hidden border border-border bg-surface hover:border-primary/50 transition-colors"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-3">{s.short}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                Meer info <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const ProjectsPreview = () => (
  <section className="py-24 lg:py-32 bg-surface">
    <div className="container">
      <div className="flex items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
            Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Een greep uit <span className="text-gradient">onze projecten</span>
          </h2>
        </div>
        <Button asChild variant="outline" className="rounded-full hidden md:inline-flex">
          <Link to="/projecten">
            Alle projecten <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.slice(0, 6).map((p) => (
          <Link
            key={p.slug}
            to="/projecten"
            className="group rounded-2xl overflow-hidden border border-border bg-background"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <div className="text-[10px] tracking-[0.25em] uppercase text-primary mb-1">
                {p.category} · {p.year}
              </div>
              <h3 className="font-display text-base font-semibold">{p.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const WdcHighlight = () => (
  <section className="py-24 lg:py-32">
    <div className="container">
      <div className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImages.wdcHero}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        </div>

        <div className="relative p-8 md:p-16 lg:p-20 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 mb-6">
            <Sparkles className="h-3 w-3 text-primary" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">
              Sub-onderdeel
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            World Domino Collective <span className="text-gradient">2026</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl">
            Komende zomer zet het WDC-team — een initiatief van DDT — meer dan 750.000
            dominostenen neer onder het thema <em>Bucketlist</em>. Bezoek het sub-platform voor
            tickets, sponsoren en alle informatie over het evenement.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="bg-primary hover:bg-primary/90 rounded-full">
              <Link to="/wdc">Bekijk WDC site →</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/wdc/reserveren">Tickets reserveren</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TeamPreview = () => (
  <section className="py-24 lg:py-32 bg-surface">
    <div className="container">
      <div className="max-w-2xl mb-12">
        <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
          Het team
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
          12 bouwers, <span className="text-gradient">één collectief</span>
        </h2>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
        {team.slice(0, 12).map((m) => (
          <div key={m.name} className="text-center">
            <div className="aspect-square rounded-2xl bg-primary/10 border border-primary/20 grid place-items-center font-display text-xl font-bold text-primary mb-3">
              {m.initials}
            </div>
            <div className="text-sm font-display font-semibold">{m.name}</div>
            <div className="text-xs text-muted-foreground">{m.role}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button asChild variant="outline" className="rounded-full">
          <Link to="/team">
            Maak kennis met het hele team <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

const PillarsBar = () => (
  <section className="py-16 bg-background border-t border-border">
    <div className="container grid sm:grid-cols-3 gap-8">
      {[
        { Icon: Wrench, title: "Workshops", body: "Onder begeleiding zelf bouwen." },
        { Icon: Users, title: "Bouwersdagen", body: "Word onderdeel van het collectief." },
        { Icon: Calendar, title: "WDC 2026", body: "Het grootste domino-evenement." },
      ].map(({ Icon, title, body }) => (
        <div key={title} className="flex items-start gap-4">
          <div className="h-11 w-11 rounded-xl bg-primary/10 grid place-items-center text-primary shrink-0">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <div className="font-display text-base font-semibold mb-1">{title}</div>
            <div className="text-sm text-muted-foreground">{body}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="dark bg-background text-foreground">
      <PageLayout>
        <DdtHero />
        <Stats />
        <ServicesPreview />
        <ProjectsPreview />
        <WdcHighlight />
        <TeamPreview />
        <PillarsBar />
        <ContactForm />
      </PageLayout>
    </div>
  );
};

export default Index;
