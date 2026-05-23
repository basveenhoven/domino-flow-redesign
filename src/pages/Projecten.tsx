import { useMemo, useState } from "react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { heroImages, projects } from "@/data/ddt";
import { cn } from "@/lib/utils";

const categories = ["Alle", "Event", "Opdracht", "Workshop", "World Record"] as const;

const Projecten = () => {
  const [active, setActive] = useState<(typeof categories)[number]>("Alle");
  const filtered = useMemo(
    () => (active === "Alle" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <PageLayout>
      <PageHero
        eyebrow="Portfolio"
        title={<>Onze <span className="text-gradient">projecten</span></>}
        subtitle="Een overzicht van wat het Dutch Domino Team door de jaren heen heeft gebouwd — van jaarlijkse events tot opdrachten en wereldrecords."
        image={heroImages.ddtHero}
        crumbs={[{ label: "Home", href: "/" }, { label: "Projecten" }]}
      />

      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm border transition-colors",
                  active === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <Link
                key={p.slug}
                to={`/projecten/${p.slug}`}
                className="group rounded-2xl overflow-hidden border border-border bg-surface hover:border-primary/40 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-primary mb-1">
                    {p.category} · {p.year}
                  </div>
                  <h3 className="font-display text-base font-semibold group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Projecten;
