import { Link } from "react-router-dom";
import { ArrowRight, Heart, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import aboutHero from "@/assets/page-about-hero.jpg";
import teamImage from "@/assets/about-team.jpg";

const values = [
  {
    Icon: Sparkles,
    title: "Creativiteit",
    body: "We pushen de grenzen van wat mogelijk is met domino-kunst — elke opstelling is een nieuw kunstwerk.",
  },
  {
    Icon: Users,
    title: "Verbinding",
    body: "Het collectief brengt bouwers samen — beginners en experts werken zij aan zij.",
  },
  {
    Icon: Heart,
    title: "Passie",
    body: "Honderden uren per project, miljoenen stenen, één gedeeld doel: de perfecte val.",
  },
];

const team = [
  { name: "Tim van der Berg", role: "Oprichter & Hoofdbouwer", initials: "TB" },
  { name: "Lisa de Vries", role: "Creative Director", initials: "LV" },
  { name: "Mark Janssen", role: "Lead Engineer", initials: "MJ" },
  { name: "Sophie Bakker", role: "Event Coordinator", initials: "SB" },
  { name: "Daan Hendriks", role: "Bouwer & Coach", initials: "DH" },
  { name: "Eva Smit", role: "Bouwer", initials: "ES" },
  { name: "Jonas de Wit", role: "Technical Lead", initials: "JW" },
  { name: "Anna Visser", role: "Communicatie", initials: "AV" },
];

const milestones = [
  { year: "2018", title: "Oprichting", body: "Een groep enthousiastelingen verzamelt zich rond één gedeelde passie." },
  { year: "2020", title: "Eerste publieke show", body: "Onze eerste grote opstelling met 100.000 stenen." },
  { year: "2023", title: "Internationaal podium", body: "Samenwerking met collectieven uit Duitsland en België." },
  { year: "2025", title: "Record WDC 2025", body: "Meer dan 1.000.000 stenen — onze grootste falldown ooit." },
];

const Over = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Over ons"
        title={<>Een collectief van <span className="text-gradient">domino-kunstenaars</span></>}
        subtitle="World Domino Collective is een Nederlands team van gepassioneerde bouwers die samen grootschalige domino-opstellingen creëren. Van intieme workshops tot wereldrecord-evenementen — wij brengen de magie van de val tot leven."
        image={aboutHero}
        crumbs={[{ label: "Home", href: "/" }, { label: "Over ons" }]}
      />

      {/* Mission */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border">
              <img
                src={teamImage}
                alt="Het team aan het werk"
                loading="lazy"
                width={1280}
                height={896}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            <div>
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Onze missie</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Domino-kunst <span className="text-gradient">verheffen</span> tot een echte vorm van expressie.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wij geloven dat domino's veel meer zijn dan stukjes hout dat omvalt. Elke opstelling is
                een collectief kunstwerk: maandenlange voorbereiding, precisie tot op de millimeter,
                samenwerking tussen tientallen bouwers, en uiteindelijk dat magische moment waarop
                alles samenvalt.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Door workshops, evenementen en publieke shows willen we deze kunstvorm toegankelijk
                maken voor iedereen — van zes-jarige beginners tot ervaren professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Waarden</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">Waar wij voor staan</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map(({ Icon, title, body }) => (
              <div key={title} className="magnetic-card p-8 rounded-2xl border border-border bg-background">
                <div className="h-12 w-12 rounded-xl bg-primary/15 grid place-items-center text-primary mb-5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Onze reis</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">Mijlpalen door de jaren</h2>
          </div>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
            {milestones.map((m, i) => (
              <div key={m.year} className={`relative flex gap-6 md:gap-0 mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="absolute left-4 md:left-1/2 top-2 h-3 w-3 rounded-full bg-primary md:-translate-x-1/2 ring-4 ring-background" />
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-10">
                  <div className="font-display text-3xl font-bold text-gradient mb-2">{m.year}</div>
                  <h3 className="font-display text-xl font-semibold mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Het team</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">De mensen achter het collectief</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {team.map((p) => (
              <div key={p.name} className="magnetic-card text-center p-6 rounded-2xl border border-border bg-background">
                <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-primary to-accent-blue grid place-items-center mb-4">
                  <span className="font-display font-bold text-primary-foreground text-lg">{p.initials}</span>
                </div>
                <div className="font-display font-semibold text-sm">{p.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center rounded-3xl border border-border bg-surface p-10 lg:p-16 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-30" style={{ background: "var(--gradient-glow)" }} />
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4 relative">
              Klaar om <span className="text-gradient">samen te bouwen?</span>
            </h2>
            <p className="text-muted-foreground mb-8 relative">
              Wil je meedoen, een workshop boeken, of ons inhuren voor een evenement?
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-7 h-12 group relative">
              <Link to="/contact">
                Neem contact op
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Over;
