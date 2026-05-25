import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { useI18n } from "@/lib/i18n";

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

  return (
    <div className="dark bg-background text-foreground">
      <PageLayout>
        <div className="container py-20 md:py-28 lg:py-32">
          {/* Hero Header */}
          <div className="text-center mb-20 lg:mb-24">
            <div className="inline-flex items-center gap-3 px-3 py-1 border border-foreground/10 bg-foreground/5 backdrop-blur-sm rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/70 font-bold">
                {pick({ NL: "World Domino Collective", EN: "World Domino Collective" })}
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8">
              <span className="italic font-light">
                {pick({ NL: "Ons jaarlijkse", EN: "Our annual" })}
              </span>
              <br />
              <span className="text-primary">
                {pick({ NL: "domino-evenement.", EN: "domino event." })}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/50 leading-relaxed max-w-xl mx-auto font-light">
              {pick({
                NL: "Eén keer per jaar organiseert het Dutch Domino Team het World Domino Collective: bouwers, publiek en partners samen rond de kunst van domino.",
                EN: "Once a year, the Dutch Domino Team organises the World Domino Collective: builders, audience and partners united around the art of domino.",
              })}
            </p>
          </div>

          {/* Navigation Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border rounded-xl overflow-hidden mb-20 lg:mb-24">
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
                <h2 className="font-display text-2xl font-semibold mb-4 group-hover:translate-x-1 transition-transform">
                  {card.title}
                </h2>
                <p className="text-foreground/40 text-sm leading-relaxed">
                  {card.body}
                </p>
              </Link>
            ))}
          </div>

          {/* Action Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-border/50">
            <div className="text-center md:text-left">
              <h3 className="font-display text-lg font-semibold text-foreground/90">
                {pick({ NL: "Vragen over het WDC?", EN: "Questions about WDC?" })}
              </h3>
              <p className="text-foreground/40 text-sm">
                {pick({
                  NL: "Ons team staat klaar voor bouwers en bezoekers.",
                  EN: "Our team is ready for builders and visitors.",
                })}
              </p>
            </div>
            <div className="flex items-center gap-8">
              <Link
                to="/wdc/2026"
                className="text-xs font-bold uppercase tracking-widest text-foreground/40 hover:text-foreground transition-colors"
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
      </PageLayout>
    </div>
  );
};

export default WdcHome;
