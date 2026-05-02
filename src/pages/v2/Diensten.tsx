import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/site/v2/PageLayout";
import { PageHero } from "@/components/site/v2/PageHero";
import { scrapedImages } from "@/lib/scrapedImages";
import { categoryColor, services, serviceCategories, type ServiceCategory } from "@/lib/services";

const Diensten = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initial = searchParams.get("categorie");
  const validInitial = (serviceCategories as string[]).includes(initial ?? "")
    ? (initial as ServiceCategory)
    : "Alle";
  const [active, setActive] = useState<ServiceCategory | "Alle">(validInitial);

  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    if (active === "Alle") next.delete("categorie");
    else next.set("categorie", active);
    setSearchParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const filtered = useMemo(
    () => (active === "Alle" ? services : services.filter((s) => s.category === active)),
    [active]
  );

  const counts = useMemo(() => {
    const out: Record<string, number> = { Alle: services.length };
    for (const c of serviceCategories) out[c] = services.filter((s) => s.category === c).length;
    return out;
  }, []);

  return (
    <PageLayout>
      <PageHero
        eyebrow="Diensten"
        title={<>Zeg het met <span className="text-gradient">domino</span></>}
        subtitle="Domino is een bijzondere en opvallende manier om een boodschap over te brengen. Van workshops tot wereldrecordpogingen — onderstaand vind je onze diensten per categorie."
        image={scrapedImages.ddtMakeAWish}
        crumbs={[{ label: "Home", href: "/v2" }, { label: "Diensten" }]}
      />

      {/* Filter */}
      <section className="pb-4">
        <div className="container">
          <div className="flex items-center gap-3 mb-5 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <Filter className="h-3.5 w-3.5" />
            Filter op categorie
          </div>
          <div className="flex flex-wrap gap-2">
            {(["Alle", ...serviceCategories] as const).map((c) => {
              const isActive = active === c;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-surface border-border text-foreground/80 hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  {c}
                  <span className={`ml-2 text-xs ${isActive ? "opacity-80" : "text-muted-foreground"}`}>
                    {counts[c] ?? 0}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service grid */}
      <section className="py-12 lg:py-16">
        <div className="container">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">Geen diensten in deze categorie.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filtered.map((s) => (
                <Link
                  key={s.slug}
                  to={`/v2/diensten/${s.slug}`}
                  className="group magnetic-card flex flex-col rounded-2xl border border-border bg-surface overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span
                      className={`absolute top-3 left-3 text-[10px] font-medium tracking-[0.2em] uppercase px-2.5 py-1 rounded-full backdrop-blur ${categoryColor[s.category]}`}
                    >
                      {s.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display text-xl font-bold tracking-tight mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.excerpt}</p>
                    <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-primary">
                      Lees meer
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="max-w-4xl mx-auto rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden border border-primary/30" style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--accent-blue) / 0.1))" }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Benieuwd naar de mogelijkheden?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Door onze flexibele en creatieve houding zijn wij in staat uw idee vorm te geven en mee te
              bewegen met veranderingen.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 h-12 group">
              <Link to="/v2/contact">
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

export default Diensten;
