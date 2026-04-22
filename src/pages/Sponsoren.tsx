import { Link } from "react-router-dom";
import { ArrowRight, Check, Crown, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import sponsorsHero from "@/assets/page-sponsors-hero.jpg";

// TODO: replace with actual sponsor data
const currentSponsors = [
  { name: "Domino Day Productions", tier: "Hoofdpartner", tagline: "Hoofdpartner WDC 2026" },
  { name: "Bouwgroep Nederland", tier: "Premium", tagline: "Locatiepartner" },
  { name: "Studio Aurora", tier: "Premium", tagline: "Media & broadcasting" },
  { name: "Logistiek Plus", tier: "Standaard", tagline: "Materialen & transport" },
  { name: "Festival Catering Co.", tier: "Standaard", tagline: "Hospitality partner" },
  { name: "Blue Light Events", tier: "Standaard", tagline: "Licht & geluid" },
  { name: "Stadshallen NL", tier: "Standaard", tagline: "Faciliteiten" },
  { name: "Print&Co", tier: "Standaard", tagline: "Drukwerk & merchandise" },
];

const tiers = [
  {
    Icon: Crown,
    name: "Hoofdpartner",
    price: "Op aanvraag",
    description: "De meest exclusieve samenwerking met maximale zichtbaarheid.",
    perks: [
      "Naamsvermelding in evenement-titel",
      "Hoofdpodium branding tijdens show",
      "Exclusieve VIP-loge (20 personen)",
      "Logo op alle communicatie en merchandise",
      "Eigen domino-element binnen de opstelling",
      "Persoonlijk content-team",
    ],
    featured: true,
  },
  {
    Icon: Sparkles,
    name: "Premium",
    price: "vanaf €15.000",
    description: "Sterke zichtbaarheid voor merken die opvallen.",
    perks: [
      "Logo op website en hoofdcommunicatie",
      "10 VIP-tickets",
      "Branded zone op locatie",
      "Vermelding in aftermovie",
      "Social media shout-outs",
    ],
  },
  {
    Icon: Star,
    name: "Standaard",
    price: "vanaf €5.000",
    description: "De perfecte instap voor lokale en groeiende merken.",
    perks: [
      "Logo op sponsorpagina",
      "4 reguliere tickets",
      "Vermelding tijdens event",
      "Bedankjes via social media",
    ],
  },
];

const Sponsoren = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Sponsoren"
        title={<>Word <span className="text-gradient">partner</span> van WDC 2026</>}
        subtitle="Verbind je merk met domino-kunst, ambacht en spektakel. Bereik duizenden bezoekers ter plaatse en miljoenen kijkers wereldwijd via onze livestreams en aftermovies."
        image={sponsorsHero}
        crumbs={[{ label: "Home", href: "/" }, { label: "Sponsoren" }]}
      />

      {/* Stats */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { v: "5.000+", l: "Bezoekers ter plaatse" },
              { v: "2M+", l: "Online kijkers" },
              { v: "150+", l: "Pers vermeldingen" },
              { v: "30+", l: "Landen bereikt" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-3xl md:text-5xl font-bold text-gradient">{s.v}</div>
                <div className="mt-2 text-xs text-muted-foreground tracking-wide uppercase">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Pakketten</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">Kies jouw partnerlevel</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`magnetic-card relative rounded-3xl border p-8 bg-background flex flex-col ${
                  t.featured ? "border-primary ring-2 ring-primary/30 lg:scale-[1.03]" : "border-border"
                }`}
              >
                {t.featured && (
                  <div className="absolute top-5 right-5 text-[10px] font-medium tracking-[0.2em] uppercase px-2.5 py-1 rounded-full bg-primary text-primary-foreground">
                    Aanbevolen
                  </div>
                )}
                <div className="h-12 w-12 rounded-xl bg-primary/15 grid place-items-center text-primary mb-6">
                  <t.Icon className="h-5 w-5" />
                </div>
                <div className="font-display text-2xl font-bold mb-1">{t.name}</div>
                <div className="font-display text-2xl font-semibold text-gradient mb-3">{t.price}</div>
                <p className="text-sm text-muted-foreground mb-6">{t.description}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/85">{p}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className={t.featured ? "bg-primary hover:bg-primary/90 rounded-full" : "rounded-full"} variant={t.featured ? "default" : "outline"}>
                  <Link to="/contact">Informatie aanvragen</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current sponsors */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Onze partners</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
              WDC 2026 wordt mede mogelijk gemaakt door:
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {currentSponsors.map((s) => (
              <div key={s.name} className="magnetic-card group p-6 rounded-2xl border border-border bg-surface text-center">
                <div className="h-16 w-full rounded-md bg-foreground/5 grid place-items-center mb-4 grayscale group-hover:grayscale-0 transition-all">
                  <span className="font-display font-bold text-lg text-muted-foreground group-hover:text-primary transition-colors">
                    {s.name.split(" ").map((w) => w[0]).join("")}
                  </span>
                </div>
                <div className="font-display font-semibold text-sm leading-tight">{s.name}</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-primary mt-2">{s.tier}</div>
                <p className="text-xs text-muted-foreground mt-1">{s.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center rounded-3xl border border-border bg-surface p-10 lg:p-16 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-30" style={{ background: "var(--gradient-glow)" }} />
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4 relative">
              Klaar om <span className="text-gradient">partner</span> te worden?
            </h2>
            <p className="text-muted-foreground mb-8 relative">
              Plan een vrijblijvend gesprek met ons sponsorteam.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-7 h-12 group relative">
              <Link to="/contact">
                Plan een gesprek
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Sponsoren;
