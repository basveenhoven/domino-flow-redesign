import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/site/PageLayout";
import { ContactForm } from "@/components/site/ContactForm";
import { Hero } from "@/components/site/Hero";
import { heroImages, projects, services, team } from "@/data/ddt";
import ctaParallax from "@/assets/cta-parallax.jpg";


const slugify = (name: string) =>
  name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");


/* ---------------- MARQUEE ---------------- */
const Marquee = () => {
  const items = [
    "15+ jaar ervaring",
    "1M+ stenen gevallen",
    "100+ projecten",
    "12 vaste bouwers",
    "Wereldrecord houders",
    "Sinds 2008",
  ];
  const loop = [...items, ...items];
  return (
    <div className="border-y border-border bg-surface overflow-hidden">
      <div className="flex gap-12 py-5 animate-marquee whitespace-nowrap">
        {loop.map((t, i) => (
          <div key={i} className="flex items-center gap-12 text-sm uppercase tracking-[0.25em]">
            <span className="text-foreground/80">{t}</span>
            <span className="h-1 w-1 rounded-full bg-primary" />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------------- INTRO ---------------- */
const Intro = () => (
  <section className="py-24 lg:py-32">
    <div className="container grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      <div className="lg:col-span-5 relative">
        <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-border">
          <img
            src={heroImages.ddtIntro}
            alt="Dutch Domino Team aan het werk"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 hidden md:block bg-background border border-border rounded-2xl p-5 max-w-[200px] shadow-xl">
          <div className="font-display text-3xl font-bold text-primary">15+</div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
            Jaar bouwen
          </div>
        </div>
      </div>

      <div className="lg:col-span-7">
        <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
          Over DDT
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Een collectief van bouwers met <span className="text-gradient">één gedeelde obsessie</span>.
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Het Dutch Domino Team bouwt sinds 2008 aan steeds grotere projecten. We
          combineren ambacht, techniek en verhaal — en vertalen elk concept naar een
          kettingreactie die je niet vergeet.
        </p>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Of het nu gaat om een workshop voor 20 collega's, een merkcampagne voor
          internationale klanten of het record-event WDC: dezelfde precisie, dezelfde
          fascinatie.
        </p>
        <Button asChild variant="outline" className="rounded-full">
          <Link to="/team">
            Maak kennis met het team <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

/* ---------------- SERVICES ---------------- */
const Services = () => (
  <section className="py-24 lg:py-32 bg-surface border-y border-border">
    <div className="container">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
        <div className="max-w-2xl">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
            Wat we doen
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Drie manieren om <span className="text-gradient">samen te bouwen</span>
          </h2>
        </div>
        <Button asChild variant="outline" className="rounded-full self-start lg:self-end">
          <Link to="/diensten">
            Alle diensten <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <Link
            key={s.slug}
            to={`/diensten/${s.slug}`}
            className="group relative rounded-3xl overflow-hidden border border-border bg-background hover:border-primary/50 transition-colors"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 h-9 w-9 rounded-full bg-background/90 backdrop-blur grid place-items-center font-display text-sm font-bold text-primary">
                0{i + 1}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3 mb-5">{s.short}</p>
              <span className="inline-flex items-center gap-1 text-sm text-primary">
                Lees meer <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- FEATURED WORK ---------------- */
const FeaturedWork = () => {
  const [feature, ...rest] = projects;
  const side = rest.slice(0, 4);

  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
            Selected work
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Recente <span className="text-gradient">projecten</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <Link
            to={`/projecten/${feature.slug}`}
            className="group lg:col-span-7 rounded-3xl overflow-hidden border border-border bg-surface relative block"
          >
            <div className="aspect-[16/11] overflow-hidden">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-background via-background/80 to-transparent">
              <div className="text-[10px] tracking-[0.25em] uppercase text-primary mb-2">
                Featured · {feature.category} · {feature.year}
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
            </div>
          </Link>

          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-6">
            {side.map((p) => (
              <Link
                key={p.slug}
                to={`/projecten/${p.slug}`}
                className="group rounded-2xl overflow-hidden border border-border bg-surface"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-primary mb-1">
                    {p.category} · {p.year}
                  </div>
                  <h3 className="font-display text-sm font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- WDC BAND ---------------- */
const WdcBand = () => (
  <section className="py-24 lg:py-32 bg-surface border-y border-border">
    <div className="container">
      <div className="relative rounded-3xl overflow-hidden border border-border">
        <div className="absolute inset-0">
          <img
            src={heroImages.wdcHero}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        </div>

        <div className="relative grid lg:grid-cols-2 gap-10 p-8 md:p-14 lg:p-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 mb-6">
              <Sparkles className="h-3 w-3 text-primary" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">
                Sub-onderdeel
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-5">
              World Domino Collective <span className="text-gradient">2026</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              Komende zomer zet het WDC-team — een initiatief van DDT — meer dan
              750.000 dominostenen neer onder het thema <em>Bucketlist</em>.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-primary hover:bg-primary/90 rounded-full">
                <Link to="/wdc">Bezoek WDC →</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link to="/wdc/reserveren">Tickets reserveren</Link>
              </Button>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4 self-end">
            {[
              { k: "750K+", v: "Stenen" },
              { k: "10", v: "Bouwdagen" },
              { k: "30+", v: "Bouwers" },
              { k: "2026", v: "Editie" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-border bg-background/70 backdrop-blur p-5"
              >
                <div className="font-display text-3xl font-bold text-primary">{s.k}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- TEAM STRIP ---------------- */
const TeamStrip = () => (
  <section className="py-24 lg:py-32">
    <div className="container">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
        <div className="max-w-2xl">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
            Het collectief
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            12 bouwers, <span className="text-gradient">één team</span>
          </h2>
        </div>
        <Button asChild variant="outline" className="rounded-full self-start lg:self-end">
          <Link to="/team">
            Alle leden <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {team.map((m) => (
          <Link
            key={m.name}
            to={`/team/${slugify(m.name)}`}
            className="group text-center"
          >
            <div className="aspect-square rounded-2xl bg-primary/10 border border-primary/20 grid place-items-center font-display text-xl font-bold text-primary mb-3 group-hover:bg-primary/20 transition-colors">
              {m.initials}
            </div>
            <div className="text-sm font-display font-semibold group-hover:text-primary transition-colors">
              {m.name}
            </div>
            <div className="text-xs text-muted-foreground">{m.role}</div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- CTA ---------------- */
const Cta = () => (
  <section className="py-24 lg:py-32 bg-surface border-t border-border">
    <div className="container text-center max-w-3xl">
      <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
        Klaar om te bouwen?
      </span>
      <h2 className="font-display text-3xl md:text-6xl font-bold tracking-tight mb-6">
        Laten we jouw <span className="text-gradient">kettingreactie</span> starten.
      </h2>
      <p className="text-muted-foreground mb-10">
        Of het nu een workshop, een merkcampagne of een wild idee is — we denken graag mee.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-7 h-12">
          <Link to="/contact">
            Neem contact op <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12">
          <Link to="/bouwersdagen">Word bouwer</Link>
        </Button>
      </div>
    </div>
  </section>
);

const Index = () => (
  <div className="dark bg-background text-foreground">
    <PageLayout>
      <Hero />
      <Marquee />
      <Intro />
      <Services />
      <FeaturedWork />
      <WdcBand />
      <TeamStrip />
      <Cta />
      <ContactForm />
    </PageLayout>
  </div>
);

export default Index;
