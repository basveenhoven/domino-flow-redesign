import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, Ticket, Users, Sparkles, Trophy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import wdcHero from "@/assets/page-wdc-hero.jpg";
import wdcEvent from "@/assets/wdc-event.jpg";

const facts = [
  { Icon: Calendar, label: "Datum", value: "14 november 2026" },
  { Icon: MapPin, label: "Locatie", value: "Amsterdam RAI" },
  { Icon: Clock, label: "Duur", value: "Hele dag" },
  { Icon: Users, label: "Bezoekers", value: "5.000+" },
];

const program = [
  { time: "10:00", title: "Doors open", body: "Bezoekers kunnen het bouwteam aan het werk zien tijdens de finale opbouw." },
  { time: "12:00", title: "Workshops & demo's", body: "Doe mee aan mini-workshops of bekijk technische demo's van het team." },
  { time: "15:00", title: "Sponsor presentaties", body: "Onze partners delen het podium en hun rol binnen het project." },
  { time: "19:00", title: "Showtime", body: "De officiële opening van de show — live commentary van het team." },
  { time: "20:30", title: "De Falldown", body: "Het magische moment waarop alles samenvalt. Live gestreamd wereldwijd." },
  { time: "22:00", title: "After-event", body: "Netwerkborrel met sponsoren, fans en het complete collectief." },
];

const highlights = [
  { Icon: Sparkles, title: "1.250.000 stenen", body: "Onze grootste opstelling ooit." },
  { Icon: Trophy, title: "Wereldrecord poging", body: "Deze editie gaan we voor een officieel Guinness World Record." },
  { Icon: Users, title: "30+ bouwers", body: "Het complete collectief plus internationale gastbouwers." },
];

const faqs = [
  { q: "Hoe lang duurt de opbouw?", a: "Het bouwteam werkt ruim 6 weken voorafgaand aan het evenement op locatie. Bezoekers kunnen tijdens de laatste week het werk live volgen." },
  { q: "Is er parkeergelegenheid?", a: "Ja, op de locatie is ruime parkeergelegenheid. We raden echter aan om met het openbaar vervoer te komen — Amsterdam RAI is uitstekend bereikbaar." },
  { q: "Zijn er toegankelijke plaatsen?", a: "Absoluut. We hebben gereserveerde plekken voor rolstoelgebruikers en speciale toegang tot alle voorzieningen. Geef dit aan bij je reservering." },
  { q: "Wat als de show wordt afgelast?", a: "Je tickets blijven geldig voor de eerstvolgende editie of je kunt kosteloos je geld terug krijgen." },
  { q: "Mag ik foto's en video's maken?", a: "Persoonlijke foto's zijn van harte welkom. Voor professionele opnames vragen we vooraf accreditatie aan te vragen via contact." },
];

const Wdc2026 = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="WDC 2026"
        title={<>De grootste <span className="text-gradient">falldown</span> ooit.</>}
        subtitle="Op 14 november 2026 transformeren we de Amsterdam RAI in een spectaculair domino-kunstwerk van meer dan 1.250.000 stenen. Wees erbij wanneer geschiedenis wordt geschreven."
        image={wdcHero}
        crumbs={[{ label: "Home", href: "/" }, { label: "WDC 2026" }]}
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
                  <div className="font-display font-semibold">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Editie 2026</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Een editie zoals <span className="text-gradient">nooit tevoren</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Na het succes van WDC 2025 gaan we groter, hoger en gedurfder. Met meer dan 1.250.000
                stenen, 30+ bouwers en een wereldrecord-poging wordt deze editie een mijlpaal in
                onze geschiedenis.
              </p>
              <div className="space-y-4">
                {highlights.map(({ Icon, title, body }) => (
                  <div key={title} className="flex gap-4 p-4 rounded-2xl border border-border">
                    <div className="h-10 w-10 rounded-lg bg-primary/15 grid place-items-center text-primary shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-display font-semibold mb-1">{title}</div>
                      <p className="text-sm text-muted-foreground">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border">
              <img src={wdcEvent} alt="WDC evenement" loading="lazy" width={1280} height={896} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Program */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Programma</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">Tijdlijn van de dag</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {program.map((p) => (
              <div key={p.time} className="magnetic-card grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr] gap-4 md:gap-6 items-start p-6 rounded-2xl border border-border bg-background">
                <div className="font-display text-2xl md:text-3xl font-bold text-gradient">{p.time}</div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">FAQ</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">Veelgestelde vragen</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-2xl border border-border bg-surface px-6 data-[state=open]:bg-surface-elevated">
                <AccordionTrigger className="font-display font-semibold text-left hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container">
          <div className="max-w-4xl mx-auto rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden border border-primary/30" style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--accent-blue) / 0.1))" }}>
            <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-glow)" }} />
            <div className="relative">
              <Ticket className="h-10 w-10 mx-auto text-primary mb-6" />
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Reserveer je plek voor <span className="text-gradient">WDC 2026</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Tickets zijn beperkt beschikbaar. Mis dit unieke evenement niet.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 h-12 group">
                <Link to="/reserveren">
                  Reserveer nu
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Wdc2026;
