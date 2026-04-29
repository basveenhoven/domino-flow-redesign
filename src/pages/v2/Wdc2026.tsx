import { Calendar, Clock, MapPin, Ticket, Camera, Volume2, ArrowRight, Car, Bus, Train } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageLayout } from "@/components/site/v2/PageLayout";
import { PageHero } from "@/components/site/v2/PageHero";
import wdcHero from "@/assets/page-wdc-hero.jpg";
import wdcEvent from "@/assets/wdc-event.jpg";
import { useI18n } from "@/lib/i18n";

const Wdc2026 = () => {
  const { t } = useI18n();

  const facts = [
    { Icon: Calendar, label: t("wdc.fact.period"), value: t("wdc.fact.periodValue") },
    { Icon: Clock, label: t("wdc.fact.falldown"), value: t("wdc.fact.falldownValue") },
    { Icon: MapPin, label: t("wdc.fact.location"), value: t("wdc.fact.locationValue") },
    { Icon: Ticket, label: t("wdc.fact.tickets"), value: t("wdc.fact.ticketsValue") },
  ];

  const program = [
    { time: "18:00", title: t("wdc.program.1.title"), body: t("wdc.program.1.body") },
    { time: "19:00", title: t("wdc.program.2.title"), body: t("wdc.program.2.body") },
    { time: "± 20:00", title: t("wdc.program.3.title"), body: t("wdc.program.3.body") },
    { time: "21:00", title: t("wdc.program.4.title"), body: t("wdc.program.4.body") },
  ];

  const huisregels = [
    t("wdc.rule.1"),
    t("wdc.rule.2"),
    t("wdc.rule.3"),
    t("wdc.rule.4"),
    t("wdc.rule.5"),
  ];

  const vervoer = [
    { Icon: Car, title: t("wdc.transport.car"), body: t("wdc.transport.carBody") },
    { Icon: Bus, title: t("wdc.transport.bus"), body: t("wdc.transport.busBody") },
    { Icon: Train, title: t("wdc.transport.train"), body: t("wdc.transport.trainBody") },
  ];

  return (
    <PageLayout>
      <PageHero
        eyebrow={t("wdc.eyebrow")}
        title={<>{t("wdc.titleA")} <span className="text-gradient">{t("wdc.titleB")}</span></>}
        subtitle={t("wdc.subtitle")}
        image={wdcHero}
        crumbs={[{ label: t("nav.home"), href: "/" }, { label: t("nav.wdc") }]}
      />

      {/* Quick facts */}
      <section className="-mt-8 relative z-10">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 rounded-3xl border border-border bg-surface p-6 lg:p-8">
            {facts.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/15 grid place-items-center text-primary shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground">{label}</div>
                  <div className="font-display font-semibold text-sm">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About edition */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">{t("wdc.editionEyebrow")}</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
                {t("wdc.editionTitleA")} <span className="text-gradient">{t("wdc.editionTitleB")}</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("wdc.editionP1")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("wdc.editionP2")}
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <a href="https://www.youtube.com/dutchdominoteam" target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline">YouTube</a>
                <span className="text-muted-foreground">•</span>
                <a href="https://www.facebook.com/dutchdominoteam/" target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline">Facebook</a>
                <span className="text-muted-foreground">•</span>
                <a href="https://www.instagram.com/dutch_domino_team/" target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline">Instagram</a>
                <span className="text-muted-foreground">•</span>
                <a href="https://www.dutchdominoteam.nl/" target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline">dutchdominoteam.nl</a>
              </div>
            </div>
            <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden border border-border">
              <img src={wdcEvent} alt="WDC" loading="lazy" width={1280} height={1700} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Reserveren CTA */}
      <section className="pb-8">
        <div className="container">
          <div className="max-w-4xl mx-auto rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden border border-primary/30" style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--accent-blue) / 0.1))" }}>
            <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-glow)" }} />
            <div className="relative">
              <Ticket className="h-10 w-10 mx-auto text-primary mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {t("wdc.reserveTitle")}
              </h2>
              <p className="text-muted-foreground mb-2 max-w-xl mx-auto">
                {t("wdc.reserveP1")}
              </p>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                {t("wdc.reserveP2A")} <strong className="text-foreground">{t("wdc.reserveP2B")}</strong>.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 h-12 group">
                <Link to="/reserveren">
                  {t("wdc.reserveCta")}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">{t("wdc.programEyebrow")}</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">{t("wdc.programTitle")}</h2>
            <p className="text-muted-foreground mt-4">{t("wdc.programDate")}</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {program.map((p) => (
              <div key={p.time} className="magnetic-card grid grid-cols-[110px_1fr] md:grid-cols-[160px_1fr] gap-4 md:gap-6 items-start p-6 rounded-2xl border border-border bg-surface">
                <div className="font-display text-xl md:text-2xl font-bold text-gradient">{p.time}</div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Huisregels */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">{t("wdc.rulesEyebrow")}</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">{t("wdc.rulesTitle")}</h2>
            <p className="text-muted-foreground mt-4">
              {t("wdc.rulesIntro")}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {huisregels.map((r, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-2xl border border-border bg-background">
                <div className="h-8 w-8 rounded-lg bg-primary/15 grid place-items-center text-primary shrink-0">
                  {i === 1 ? <Volume2 className="h-4 w-4" /> : i >= 2 && i <= 3 ? <Camera className="h-4 w-4" /> : <span className="text-xs font-bold">{i + 1}</span>}
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vervoer / FAQ */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">{t("wdc.transportEyebrow")}</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">{t("wdc.transportTitle")}</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {vervoer.map((v, i) => (
              <AccordionItem key={i} value={`v-${i}`} className="rounded-2xl border border-border bg-surface px-6">
                <AccordionTrigger className="font-display font-semibold text-left hover:no-underline">
                  <span className="flex items-center gap-3">
                    <v.Icon className="h-4 w-4 text-primary" />
                    {v.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{v.body}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </PageLayout>
  );
};

export default Wdc2026;
