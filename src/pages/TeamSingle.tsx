import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { Button } from "@/components/ui/button";
import { team } from "@/data/ddt";

const slugify = (name: string) =>
  name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const TeamSingle = () => {
  const { slug } = useParams<{ slug: string }>();
  const member = team.find((m) => slugify(m.name) === slug);

  if (!member) {
    return (
      <PageLayout>
        <div className="container py-40 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Teamlid niet gevonden</h1>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/team">
              <ArrowLeft className="mr-1 h-4 w-4" /> Terug naar team
            </Link>
          </Button>
        </div>
      </PageLayout>
    );
  }

  const others = team.filter((m) => m.name !== member.name).slice(0, 6);

  return (
    <PageLayout>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/team" className="hover:text-primary">Team</Link>
            <span>/</span>
            <span className="text-foreground">{member.name}</span>
          </nav>

          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
            <div className="aspect-square rounded-3xl bg-primary/10 border border-primary/20 grid place-items-center font-display text-7xl lg:text-9xl font-bold text-primary">
              {member.initials}
            </div>
            <div>
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
                {member.role}
              </span>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                {member.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-5">
                {member.name} is onderdeel van het Dutch Domino Team — een vast collectief
                van bouwers dat al jaren samen werkt aan grote en kleine domino-projecten.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Van eerste designschets tot het zetten van de laatste steen: elk teamlid
                brengt eigen expertise mee, of dat nu draait om engineering, theming,
                fotografie of de gezelligheid op een bouwersdag.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-primary hover:bg-primary/90 rounded-full">
                  <Link to="/bouwersdagen">
                    Word bouwer <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <Link to="/team">
                    <ArrowLeft className="mr-1 h-4 w-4" /> Hele team
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-surface border-t border-border">
        <div className="container">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-8">
            Andere teamleden
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {others.map((m) => (
              <Link
                key={m.name}
                to={`/team/${slugify(m.name)}`}
                className="group text-center rounded-2xl border border-border bg-background p-4 hover:border-primary/40 transition-colors"
              >
                <div className="aspect-square rounded-xl bg-primary/10 border border-primary/20 grid place-items-center font-display text-2xl font-bold text-primary mb-3">
                  {m.initials}
                </div>
                <div className="text-sm font-display font-semibold group-hover:text-primary transition-colors">
                  {m.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TeamSingle;
