import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/site/v2/PageLayout";
import { categoryColor, services } from "@/lib/services";

const DienstSingle = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/v2/diensten" replace />;

  const related = services.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 3);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-12 lg:pb-20">
        <div className="container">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
            <Link to="/v2" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/v2/diensten" className="hover:text-primary transition-colors">Diensten</Link>
            <span>/</span>
            <span className="text-foreground">{service.title}</span>
          </nav>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
            <div>
              <span className={`inline-block text-[10px] font-medium tracking-[0.25em] uppercase px-3 py-1 rounded-full mb-5 ${categoryColor[service.category]}`}>
                {service.category}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                {service.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{service.excerpt}</p>
            </div>
            <div className="relative aspect-[5/4] rounded-3xl overflow-hidden border border-border shadow-xl">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16">
            <div className="space-y-5">
              {service.paragraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
              ))}
            </div>
            <aside className="rounded-2xl border border-border bg-surface p-7 h-fit lg:sticky lg:top-28">
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-3 block">In het kort</span>
              <ul className="space-y-3 mb-6">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-foreground/85">
                    <span className="h-5 w-5 rounded-full bg-primary/15 grid place-items-center text-primary shrink-0 mt-0.5">
                      <Check className="h-3 w-3" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 rounded-full h-11">
                <Link to="/v2/contact">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Vraag offerte aan
                </Link>
              </Button>
            </aside>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20 lg:py-28 bg-surface">
          <div className="container">
            <div className="flex items-end justify-between mb-10 gap-4">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                Gerelateerd in {service.category}
              </h2>
              <Link to="/v2/diensten" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                <ArrowLeft className="h-3.5 w-3.5" />
                Alle diensten
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((s) => (
                <Link key={s.slug} to={`/v2/diensten/${s.slug}`} className="group rounded-2xl border border-border bg-background overflow-hidden hover:border-primary/50 transition-colors">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{s.excerpt}</p>
                    <span className="inline-flex items-center gap-1 mt-3 text-sm text-primary">
                      Bekijk
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
};

export default DienstSingle;
