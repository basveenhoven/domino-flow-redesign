import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Users, Layers, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import wdcHero from "@/assets/page-wdc-hero.jpg";
import { getEdition, wdcEditions } from "@/data/wdcEditions";

const WdcEdition = () => {
  const { year } = useParams();
  const edition = year ? getEdition(year) : undefined;

  if (!edition) {
    return (
      <PageLayout>
        <div className="container py-40 text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Editie niet gevonden</h1>
          <Button asChild className="mt-6 rounded-full">
            <Link to="/wdc/edities">Bekijk alle edities</Link>
          </Button>
        </div>
      </PageLayout>
    );
  }

  const idx = wdcEditions.findIndex((e) => e.slug === edition.slug);
  const prev = wdcEditions[idx + 1];
  const next = wdcEditions[idx - 1];

  const facts = [
    { Icon: Calendar, label: "Datum", value: edition.date ?? `${edition.year}` },
    { Icon: Layers, label: "Stenen", value: edition.stones },
    edition.fell
      ? { Icon: Layers, label: "Gevallen", value: edition.fell }
      : null,
    edition.builders
      ? { Icon: Users, label: "Bouwers", value: edition.builders }
      : null,
    edition.duration
      ? { Icon: Clock, label: "Duur", value: edition.duration }
      : null,
  ].filter(Boolean) as { Icon: typeof Calendar; label: string; value: string }[];

  return (
    <PageLayout>
      <PageHero
        eyebrow={`WDC ${edition.year}`}
        title={
          <>
            {edition.theme.split(" ")[0]}{" "}
            <span className="text-gradient">
              {edition.theme.split(" ").slice(1).join(" ") || edition.year}
            </span>
          </>
        }
        subtitle={edition.tagline}
        image={wdcHero}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "WDC", href: "/wdc" },
          { label: "Edities", href: "/wdc/edities" },
          { label: `${edition.year}` },
        ]}
      />

      {/* Facts */}
      <section className="-mt-8 relative z-10">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 rounded-3xl border border-border bg-surface p-6 lg:p-8">
            {facts.slice(0, 4).map(({ Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/15 grid place-items-center text-primary shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
                    {label}
                  </div>
                  <div className="font-display font-semibold text-sm">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-3xl">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
            Editie {edition.year}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-8">
            {edition.theme}
          </h2>
          <div className="space-y-5">
            {edition.description.map((p, i) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="pb-20 lg:pb-28">
        <div className="container max-w-5xl">
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-border bg-surface">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${edition.youtubeId}`}
              title={edition.youtubeTitle}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            {edition.youtubeTitle}
          </p>
        </div>
      </section>

      {/* Prev / next */}
      <section className="pb-24">
        <div className="container max-w-5xl grid sm:grid-cols-2 gap-4">
          {prev ? (
            <Link
              to={`/wdc/edities/${prev.slug}`}
              className="group rounded-3xl border border-border bg-surface p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-2">
                <ArrowLeft className="h-3 w-3" /> Vorige editie
              </div>
              <div className="font-display text-xl font-bold group-hover:text-primary transition-colors">
                WDC {prev.year} — {prev.theme}
              </div>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to={`/wdc/edities/${next.slug}`}
              className="group rounded-3xl border border-border bg-surface p-6 hover:border-primary/50 transition-colors sm:text-right"
            >
              <div className="flex items-center sm:justify-end gap-2 text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-2">
                Volgende editie <ArrowRight className="h-3 w-3" />
              </div>
              <div className="font-display text-xl font-bold group-hover:text-primary transition-colors">
                WDC {next.year} — {next.theme}
              </div>
            </Link>
          ) : (
            <Link
              to="/wdc/2026"
              className="group rounded-3xl border border-primary/40 bg-primary/10 p-6 hover:border-primary transition-colors sm:text-right"
            >
              <div className="flex items-center sm:justify-end gap-2 text-xs font-medium tracking-[0.2em] uppercase text-primary mb-2">
                Aankomend <ArrowRight className="h-3 w-3" />
              </div>
              <div className="font-display text-xl font-bold">
                WDC 2026 — Bucketlist
              </div>
            </Link>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default WdcEdition;
