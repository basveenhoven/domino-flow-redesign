import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";
import wdcImg from "@/assets/wdc-event.jpg";
import contactImg from "@/assets/contact-dominoes.jpg";

const cards = [
  {
    id: "over-ons",
    image: aboutImg,
    eyebrow: "Het collectief",
    title: "Over ons",
    body:
      "Dutch Domino Team (DDT) is van oorsprong een vriendengroep die door het delen van onze projecten via YouTube met elkaar in contact zijn gekomen.",
    cta: "Lees meer",
    href: "/over-ons",
  },
  {
    id: "wdc-2026",
    image: wdcImg,
    eyebrow: "Hét evenement",
    title: "WDC 2026",
    body:
      "Komende zomer zet het WDC team honderdduizenden dominostenen neer. Bekijk deze pagina voor meer informatie over het evenement.",
    cta: "Meer informatie",
    href: "/wdc-2026",
  },
  {
    id: "contact-card",
    image: contactImg,
    eyebrow: "Vragen of opmerkingen",
    title: "Contact",
    body:
      "Heeft u een vraag of een opmerking voor het WDC team? Neem vrijblijvend contact met ons op, wij staan graag voor u klaar.",
    cta: "Neem contact op",
    href: "/contact",
  },
];

export const FeatureCards = () => {
  return (
    <section id="ontdek" className="relative py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
              Ontdek WDC
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
              Drie manieren om <br />
              <span className="text-gradient">deel te nemen</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-muted-foreground">
            Of je nu wilt leren, kijken of samenwerken — er is altijd een plek voor jou binnen het collectief.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((c) => (
            <Link
              key={c.id}
              to={c.href}
              className="group magnetic-card relative overflow-hidden rounded-2xl border border-border bg-surface flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
              </div>
              <div className="flex flex-col gap-3 p-7 flex-1">
                <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-primary">
                  {c.eyebrow}
                </span>
                <h3 className="font-display text-2xl font-bold tracking-tight">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{c.body}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-foreground mt-2">
                  <span>{c.cta}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-primary" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
