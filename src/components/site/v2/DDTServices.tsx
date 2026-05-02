import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { scrapedImages as img } from "@/lib/scrapedImages";

const pillars = [
  {
    category: "Workshop",
    title: "Workshops",
    description:
      "Interactieve domino-workshops voor bedrijven, scholen en verenigingen. Samenwerking, geduld en creativiteit op een speelse manier.",
    image: img.ddtBuild2,
    href: "/v2/diensten?categorie=Workshop",
  },
  {
    category: "Opdracht",
    title: "Bedrijfsopdrachten",
    description:
      "Van concept tot falldown. Een opvallende manier om jullie boodschap, merk of product visueel tot leven te brengen.",
    image: img.ddtBuild3,
    href: "/v2/diensten?categorie=Opdracht",
  },
  {
    category: "Maatwerk",
    title: "Maatwerk",
    description:
      "Geen idee waar te beginnen? Wij denken mee en ontwerpen een uniek project — flexibel en volledig op jouw wens afgestemd.",
    image: img.ddtVexx1,
    href: "/v2/diensten?categorie=Maatwerk",
  },
];

export const DDTServices = () => {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container">
        <div className="max-w-3xl mb-14 md:mb-20">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Voor bedrijven & organisaties
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
            Wat het Dutch Domino Team voor je kan bouwen
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Naast de jaarlijkse Falldown verzorgen wij workshops, bedrijfsopdrachten en
            maatwerkprojecten — in Nederland en wereldwijd.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((p) => (
            <Link
              key={p.category}
              to={p.href}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border magnetic-card flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="text-[11px] uppercase tracking-[0.25em] text-primary mb-3">
                  {p.category}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {p.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Bekijk diensten
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-background p-6 md:p-8">
          <div>
            <div className="font-display text-lg md:text-xl font-semibold text-foreground">
              Een eigen idee of project in gedachten?
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              We denken graag mee — van eerste schets tot eindshow.
            </div>
          </div>
          <Link
            to="/v2/diensten"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Alle diensten bekijken
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
