import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { Button } from "@/components/ui/button";
import { services } from "@/data/ddt";

const DienstSingle = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <PageLayout>
        <div className="container py-40 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Dienst niet gevonden</h1>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/diensten">
              <ArrowLeft className="mr-1 h-4 w-4" /> Terug naar diensten
            </Link>
          </Button>
        </div>
      </PageLayout>
    );
  }

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <PageLayout>
      <section className="relative pt-32 pb-16 lg:pt-40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={service.image} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background" />
        </div>
        <div className="container">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/diensten" className="hover:text-primary">Diensten</Link>
            <span>/</span>
            <span className="text-foreground">{service.title}</span>
          </nav>
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
            Dienst
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{service.short}</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
          <div className="prose-like space-y-5">
            {service.body.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                {p}
              </p>
            ))}
            <div className="pt-4">
              <Button asChild className="bg-primary hover:bg-primary/90 rounded-full">
                <Link to="/contact">
                  Vraag aan <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-border bg-surface">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-surface border-t border-border">
        <div className="container">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-8">
            Andere diensten
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={`/diensten/${o.slug}`}
                className="group rounded-2xl overflow-hidden border border-border bg-background hover:border-primary/50 transition-colors flex"
              >
                <div className="w-32 shrink-0 overflow-hidden">
                  <img
                    src={o.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold mb-1">{o.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{o.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DienstSingle;
