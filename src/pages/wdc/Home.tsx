import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { useI18n } from "@/lib/i18n";
import heroImg from "@/assets/page-wdc-hero.jpg";
import wdcEventImg from "@/assets/wdc-event.jpg";
import aboutWdc from "@/assets/about-wdc.jpg";
import aboutFalldown from "@/assets/about-falldown.jpg";

const WdcHome = () => {
  const { pick } = useI18n();

  const cards = [
    {
      href: "/wdc/2026",
      eyebrow: pick({ NL: "Editie 2026", EN: "Edition 2026" }),
      title: pick({ NL: "De volgende stap", EN: "The next step" }),
      body: pick({
        NL: "Ontdek het thema 'Bucketlist' en bereid je voor op het meest ambitieuze project tot nu toe.",
        EN: "Discover the 'Bucketlist' theme and get ready for the most ambitious project to date.",
      }),
    },
    {
      href: "/wdc/reserveren",
      eyebrow: pick({ NL: "Tickets", EN: "Tickets" }),
      title: pick({ NL: "Reserveer je plek", EN: "Reserve your spot" }),
      body: pick({
        NL: "Wees getuige van de legendarische falldown-ceremonie. De verkoop start binnenkort.",
        EN: "Witness the legendary falldown ceremony. Sales start soon.",
      }),
    },
    {
      href: "/wdc/sponsoren",
      eyebrow: pick({ NL: "Partnerships", EN: "Partnerships" }),
      title: pick({ NL: "Bouw mee als partner", EN: "Build along as partner" }),
      body: pick({
        NL: "Verbind je merk aan innovatie en precisie. Bekijk de mogelijkheden voor 2026.",
        EN: "Connect your brand to innovation and precision. Explore the 2026 opportunities.",
      }),
    },
  ];

  const editions = [
    {
      year: "2021",
      title: pick({ NL: "De eerste editie", EN: "The first edition" }),
      body: pick({
        NL: "WDC ontstond als experiment: één hal, een handvol bouwers, en de vraag of een internationale build in Nederland kon werken. Het antwoord was ja.",
        EN: "WDC started as an experiment: one hall, a handful of builders, and the question whether an international build could work in the Netherlands. The answer was yes.",
      }),
    },
    {
      year: "2023",
      title: pick({ NL: "Schaal & samenwerking", EN: "Scale & collaboration" }),
      body: pick({
        NL: "Een grotere locatie, meer bouwers uit het buitenland en een eerste serieuze livestream. WDC werd een vast moment op de internationale dominokalender.",
        EN: "A larger venue, more international builders, and a first serious livestream. WDC became a fixed moment on the international domino calendar.",
      }),
    },
    {
      year: "2025",
      title: pick({ NL: "Een miljoen stenen", EN: "One million stones" }),
      body: pick({
        NL: "De editie waarin we voor het eerst de grens van 1.000.000 gevallen dominostenen doorbraken. Live publiek, internationale pers en een uitverkochte falldown.",
        EN: "The edition where we crossed the 1,000,000 toppled stones mark for the first time. Live audience, international press and a sold-out falldown.",
      }),
    },
    {
      year: "2026",
      title: pick({ NL: "Bucketlist", EN: "Bucketlist" }),
      body: pick({
        NL: "De aankomende editie. Thema: Bucketlist — een viering van dromen, ambities en alles wat we altijd al wilden bouwen. Falldown op 21 augustus.",
        EN: "The upcoming edition. Theme: Bucketlist — a celebration of dreams, ambitions and everything we always wanted to build. Falldown on August 21st.",
      }),
    },
  ];

  const stats = [
    { value: "5", label: pick({ NL: "Edities", EN: "Editions" }) },
    { value: "60+", label: pick({ NL: "Internationale bouwers", EN: "International builders" }) },
    { value: "1M+", label: pick({ NL: "Stenen in 2025", EN: "Stones in 2025" }) },
    { value: "12", label: pick({ NL: "Landen vertegenwoordigd", EN: "Countries represented" }) },
  ];

  return (
    <div className="dark bg-background text-foreground">
      <PageLayout>
        <PageHero
          eyebrow={pick({ NL: "World Domino Collective", EN: "World Domino Collective" })}
          title={
            <>
              {pick({ NL: "Ons jaarlijkse", EN: "Our annual" })}{" "}
              <span className="text-primary">
                {pick({ NL: "domino-evenement.", EN: "domino event." })}
              </span>
            </>
          }
          subtitle={pick({
            NL: "Eén keer per jaar organiseert het Dutch Domino Team het World Domino Collective: een internationaal evenement waar bouwers, publiek en partners samenkomen rond de kunst van domino.",
            EN: "Once a year, the Dutch Domino Team organises the World Domino Collective: an international event where builders, audience and partners come together around the art of domino.",
          })}
          image={heroImg}
          crumbs={[
            { label: pick({ NL: "Home", EN: "Home" }), href: "/" },
            { label: "WDC" },
          ]}
        />

        {/* Story — wat is het WDC */}
        <section className="py-20 lg:py-28">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden border border-border">
                <img
                  src={aboutWdc}
                  alt={pick({ NL: "WDC bouwhal vol dominostructuren", EN: "WDC build hall full of domino structures" })}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              <div>
                <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
                  {pick({ NL: "Wat is het WDC?", EN: "What is WDC?" })}
                </span>
                <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
                  {pick({
                    NL: <>Een meerdaagse build met <span className="text-primary">internationale bouwers</span></>,
                    EN: <>A multi-day build with <span className="text-primary">international builders</span></>,
                  })}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {pick({
                    NL: "Het World Domino Collective is een meerdaags evenement waar tientallen bouwers uit binnen- en buitenland samen één groot project realiseren. Weken voorbereiding, dagen bouwen en één moment waarop alles valt.",
                    EN: "The World Domino Collective is a multi-day event where dozens of builders from the Netherlands and abroad realise one large project together. Weeks of preparation, days of building, and one moment when everything falls.",
                  })}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {pick({
                    NL: "Bezoekers kunnen tijdens de bouwdagen langskomen om de bouwers aan het werk te zien, en op de slotdag is er de publieke falldown-ceremonie waarin het eindwerk live in beweging wordt gezet.",
                    EN: "Visitors can drop in during the build days to watch the builders at work, and on the final day there's the public falldown ceremony where the finished work is set in motion live.",
                  })}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image break — quote */}
        <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
          <img
            src={wdcEventImg}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />
          <div className="container relative h-full flex items-end pb-12">
            <blockquote className="max-w-2xl font-display text-2xl md:text-4xl font-semibold leading-tight">
              {pick({
                NL: <>"Weken bouwen voor <span className="text-primary">één perfect moment</span>."</>,
                EN: <>"Weeks of building for <span className="text-primary">one perfect moment</span>."</>,
              })}
            </blockquote>
          </div>
        </section>

        {/* Geschiedenis — edities */}
        <section className="py-20 lg:py-28 bg-surface">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
                {pick({ NL: "Geschiedenis", EN: "History" })}
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                {pick({
                  NL: <>Van experiment tot <span className="text-primary">internationaal event</span></>,
                  EN: <>From experiment to <span className="text-primary">international event</span></>,
                })}
              </h2>
              <p className="text-muted-foreground leading-relaxed mt-6">
                {pick({
                  NL: "Vijf edities, vijf stappen verder. Een korte tijdlijn van hoe WDC groeide van een idee tot het grootste domino-event in Nederland.",
                  EN: "Five editions, five steps forward. A short timeline of how WDC grew from an idea to the largest domino event in the Netherlands.",
                })}
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative border-l border-border pl-8 md:pl-12 space-y-12">
                {editions.map((e) => (
                  <div key={e.year} className="relative">
                    <div className="absolute -left-[33px] md:-left-[49px] top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-surface" />
                    <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">{e.year}</div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold mb-3">{e.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{e.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-20 pt-12 border-t border-border">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">{s.value}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Parallax break */}
        <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${aboutFalldown})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/80" />
          <div className="container relative h-full flex items-center justify-center text-center">
            <p className="font-display text-2xl md:text-4xl font-semibold max-w-3xl">
              {pick({
                NL: <>De volgende falldown valt op <span className="text-primary">21 augustus 2026</span>.</>,
                EN: <>The next falldown drops on <span className="text-primary">21 August 2026</span>.</>,
              })}
            </p>
          </div>
        </section>

        {/* Navigation matrix — verdieping */}
        <section className="py-20 lg:py-28">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
                {pick({ NL: "Verken WDC", EN: "Explore WDC" })}
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                {pick({
                  NL: <>Alles over de <span className="text-primary">aankomende editie</span></>,
                  EN: <>Everything about the <span className="text-primary">upcoming edition</span></>,
                })}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border rounded-xl overflow-hidden">
              {cards.map((card, i) => (
                <Link
                  key={card.href}
                  to={card.href}
                  className={`group relative p-10 hover:bg-foreground/[0.02] transition-all duration-500 ${
                    i < cards.length - 1
                      ? "border-b md:border-b-0 md:border-r border-border"
                      : ""
                  }`}
                >
                  <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                  <span className="text-primary text-[10px] font-extrabold uppercase tracking-widest block mb-12">
                    {card.eyebrow}
                  </span>
                  <h3 className="font-display text-2xl font-semibold mb-4 group-hover:translate-x-1 transition-transform">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {card.body}
                  </p>
                </Link>
              ))}
            </div>

            {/* Action footer */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 mt-12 border-t border-border/50">
              <div className="text-center md:text-left">
                <h3 className="font-display text-lg font-semibold">
                  {pick({ NL: "Vragen over het WDC?", EN: "Questions about WDC?" })}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {pick({
                    NL: "Ons team staat klaar voor bouwers en bezoekers.",
                    EN: "Our team is ready for builders and visitors.",
                  })}
                </p>
              </div>
              <div className="flex items-center gap-8">
                <Link
                  to="/wdc/2026"
                  className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  {pick({ NL: "Details bekijken", EN: "View details" })}
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs uppercase tracking-widest transition-all rounded-full shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
                >
                  {pick({ NL: "Neem contact op", EN: "Get in touch" })}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default WdcHome;
