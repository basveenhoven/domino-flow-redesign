import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { heroImages, services } from "@/data/ddt";

const Diensten = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Diensten"
        title={<>Workshops, opdrachten <span className="text-gradient">en maatwerk</span></>}
        subtitle="Het Dutch Domino Team werkt voor bedrijven, scholen en evenementen. Kies de vorm die bij jouw project past."
        image={heroImages.ddtIntro}
        crumbs={[{ label: "Home", href: "/" }, { label: "Diensten" }]}
      />

      <section className="py-20 lg:py-28">
        <div className="container space-y-24">
          {services.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-surface">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div>
                <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-3 block">
                  Dienst 0{i + 1}
                </span>
                <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
                  {s.title}
                </h2>
                {s.body.map((p, idx) => (
                  <p key={idx} className="text-muted-foreground mb-4 leading-relaxed">
                    {p}
                  </p>
                ))}
                <Button asChild className="bg-primary hover:bg-primary/90 rounded-full mt-4">
                  <Link to={`/diensten/${s.slug}`}>
                    Meer over {s.title.toLowerCase()} <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

      </section>
    </PageLayout>
  );
};

export default Diensten;
