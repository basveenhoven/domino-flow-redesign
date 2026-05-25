import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import wdcHero from "@/assets/page-wdc-hero.jpg";
import { wdcEditions } from "@/data/wdcEditions";

const WdcEdities = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Vorige edities"
        title={
          <>
            World Domino <span className="text-gradient">Collective</span>
          </>
        }
        subtitle="Een terugblik op de edities die ons brachten waar we nu staan — van 582.000 stenen in 2021 tot de 1.000.000-mijlpaal in 2025."
        image={wdcHero}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "WDC", href: "/wdc" },
          { label: "Edities" },
        ]}
      />

      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl">
          <div className="grid sm:grid-cols-2 gap-6">
            {wdcEditions.map((e) => (
              <Link
                key={e.slug}
                to={`/wdc/edities/${e.slug}`}
                className="group magnetic-card relative overflow-hidden rounded-3xl border border-border bg-surface p-8 hover:border-primary/50 transition-all"
              >
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-display text-6xl font-black text-gradient">
                    {e.year}
                  </span>
                  <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
                    {e.stones} stenen
                  </span>
                </div>
                <h2 className="font-display text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {e.theme}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {e.tagline}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Bekijk editie
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default WdcEdities;
