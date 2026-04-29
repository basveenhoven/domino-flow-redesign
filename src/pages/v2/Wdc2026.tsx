import { Calendar, Clock, MapPin, Ticket, Camera, Volume2, ArrowRight, Car, Bus, Train, Phone, MessageSquareOff } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageLayout } from "@/components/site/v2/PageLayout";
import { PageHero } from "@/components/site/v2/PageHero";
import { scrapedImages as img } from "@/lib/scrapedImages";

const facts = [
  { Icon: Calendar, label: "Periode", value: "7 — 23 augustus 2026" },
  { Icon: Clock, label: "Falldown", value: "Vrijdag 21 augustus" },
  { Icon: MapPin, label: "Locatie", value: "Sporthal de Vallei, Veenendaal" },
  { Icon: Ticket, label: "Tickets", value: "€10 p.p. — bij ingang" },
];

const program = [
  { time: "18:00", title: "Deuren open voor publiek", body: "Vanaf 18:00 ben je welkom in Sporthal de Vallei. Zoek rustig een plekje rond het dominoveld." },
  { time: "19:00", title: "Deuren sluiten & aanvang show", body: "Om 19:00 sluiten de deuren en begint de show. Zorg dat je op tijd binnen bent." },
  { time: "± 20:00", title: "Einde show", body: "Wanneer de laatste dominosteen is gevallen, onthullen we het totale aantal gevallen stenen van WDC 2026." },
  { time: "21:00", title: "Naborrelen in het sportcafé", body: "Praat na met de internationale bouwers in het sportcafé onder het genot van live muziek. Om 21:00 sluit het evenement." },
];

const huisregels = [
  { Icon: () => <span className="text-xs font-bold">1</span>, text: "Betreed alsjeblieft niet onze domino-vloer." },
  { Icon: Phone, text: "Zet alsjeblieft je mobiele telefoon op trilstand of helemaal uit." },
  { Icon: MessageSquareOff, text: "Filmen tijdens de falldown is verboden." },
  { Icon: Camera, text: "Foto's maken mag, maar zonder flits." },
  { Icon: Volume2, text: "Probeer niet te schreeuwen tijdens het vallen, zodat je het heerlijke geluid van de domino-stenen kunt horen." },
];

const vervoer = [
  {
    Icon: Car,
    title: "Auto",
    body:
      "Je kan parkeren op de parkeerplaats bij de hal (Sportlaan 3, 3905 AD Veenendaal). De parkeerplaats biedt voldoende gratis parkeerplekken. Let op: er kunnen ook andere evenementen in het sportcomplex plaatsvinden. Hou er rekening mee dat dit invloed kan hebben op de parkeergelegenheid.",
  },
  {
    Icon: Bus,
    title: "Bus",
    body:
      "De dichtstbijzijnde bushalte is halte Rembrandtpark. Vanaf hier is het ongeveer 10 minuten lopen naar de sporthal.",
  },
  {
    Icon: Train,
    title: "Trein",
    body:
      "Het dichtstbijzijnde treinstation is station Veenendaal West. Vanaf hier is het ongeveer 12 minuten lopen naar Sporthal de Vallei.",
  },
];

const Wdc2026 = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="WDC 2026"
        title={<>Bucketlist — <span className="text-gradient">750.000 dominostenen</span></>}
        subtitle="Dit jaar zet het Dutch Domino Team maar liefst 750.000 dominostenen op tijdens World Domino Collective 2026 onder het thema Bucketlist."
        image={img.wdcHeader}
        crumbs={[{ label: "Home", href: "/v2" }, { label: "WDC 2026" }]}
      />

      {/* Quick facts */}
      <section className="relative z-10">
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

      {/* About edition — text only */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-3xl">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Over deze editie</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Persoonlijke dromen in <span className="text-gradient">domino</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            In de diverse subthema's staan persoonlijke dromen van onze bouwers centraal. Deze
            bucketlist-items worden door middel van gedetailleerde designs omgezet naar een
            dominovloer met meer dan 750.000 dominostenen.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Volg ons op onze sociale media voor updates over de projecten, de voorbereiding en
            sneak previews van de bouwperiode.
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
      </section>

      {/* Reserveren CTA */}
      <section className="pb-8">
        <div className="container">
          <div className="max-w-4xl mx-auto rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden border border-primary/30" style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--accent-blue) / 0.1))" }}>
            <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-glow)" }} />
            <div className="relative">
              <Ticket className="h-10 w-10 mx-auto text-primary mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Reserveer je plek voor de falldown
              </h2>
              <p className="text-muted-foreground mb-2 max-w-xl mx-auto">
                De falldown vindt plaats op vrijdagavond 21 augustus 2026 in Sporthal de Vallei te Veenendaal.
              </p>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Tickets zijn <strong className="text-foreground">€10 per persoon</strong> en worden bij de ingang afgerekend.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 h-12 group">
                <Link to="/v2/reserveren">
                  Plek reserveren
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Programma</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">Programma falldowndag</h2>
            <p className="text-muted-foreground mt-4">Vrijdag 21 augustus 2026 — Sporthal de Vallei, Veenendaal.</p>
          </div>
          <div className="space-y-3">
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
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Huisregels</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">Tijdens de falldown</h2>
            <p className="text-muted-foreground mt-4">
              Om alles zo goed mogelijk te laten verlopen hebben wij een aantal huishoudelijke regels opgesteld.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {huisregels.map((r, i) => {
              const Icon = r.Icon as any;
              return (
                <div key={i} className="flex items-start gap-3 p-5 rounded-2xl border border-border bg-background">
                  <div className="h-8 w-8 rounded-lg bg-primary/15 grid place-items-center text-primary shrink-0">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="text-sm text-foreground/85 leading-relaxed">{r.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vervoer / FAQ */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Bereikbaarheid</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">Hoe kom je naar WDC 2026?</h2>
            <p className="text-muted-foreground mt-4">
              Sporthal de Vallei ligt aan Sportlaan 3, 3905 AD Veenendaal.
            </p>
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
