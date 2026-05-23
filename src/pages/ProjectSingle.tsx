import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Tag } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/ddt";

const ProjectSingle = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <PageLayout>
        <div className="container py-40 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Project niet gevonden</h1>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/projecten">
              <ArrowLeft className="mr-1 h-4 w-4" /> Terug naar projecten
            </Link>
          </Button>
        </div>
      </PageLayout>
    );
  }

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <PageLayout>
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="container relative h-full flex flex-col justify-end pb-12">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/projecten" className="hover:text-primary">Projecten</Link>
            <span>/</span>
            <span className="text-foreground">{project.title}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs">
              <Tag className="h-3 w-3" /> {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/50 border border-border text-muted-foreground text-xs">
              <Calendar className="h-3 w-3" /> {project.year}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl">
            {project.title}
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container grid lg:grid-cols-[1.4fr_1fr] gap-12">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-5">
              {project.title} maakt onderdeel uit van het portfolio van het Dutch Domino Team.
              Onder de categorie <strong className="text-foreground">{project.category.toLowerCase()}</strong>{" "}
              werkten we in <strong className="text-foreground">{project.year}</strong> aan dit project,
              waarbij design, techniek en samenwerking samenkomen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Voor de volledige beelden, behind-the-scenes en falldown-video's verwijzen we
              je graag door naar onze YouTube en Instagram. Wil je zelf een vergelijkbaar
              project realiseren? Neem dan vrijblijvend contact met ons op.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Button asChild className="bg-primary hover:bg-primary/90 rounded-full">
                <Link to="/contact">
                  Start een project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link to="/projecten">
                  <ArrowLeft className="mr-1 h-4 w-4" /> Alle projecten
                </Link>
              </Button>
            </div>
          </div>

          <aside className="rounded-3xl border border-border bg-surface p-6 h-fit">
            <h3 className="font-display text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Projectinfo
            </h3>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Categorie</dt>
                <dd className="font-medium">{project.category}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Jaar</dt>
                <dd className="font-medium">{project.year}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Team</dt>
                <dd className="font-medium">Dutch Domino Team</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-surface border-t border-border">
        <div className="container">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-8">
            Andere projecten
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/projecten/${r.slug}`}
                className="group rounded-2xl overflow-hidden border border-border bg-background"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-primary mb-1">
                    {r.category} · {r.year}
                  </div>
                  <h3 className="font-display text-base font-semibold">{r.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProjectSingle;
