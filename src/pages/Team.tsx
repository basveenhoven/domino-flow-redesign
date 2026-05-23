import { Link } from "react-router-dom";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { heroImages, team } from "@/data/ddt";

const slugify = (name: string) =>
  name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const Team = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Het team"
        title={<>De bouwers achter <span className="text-gradient">het Dutch Domino Team</span></>}
        subtitle="Een vast collectief van Nederlandse en internationale bouwers — verbonden door de passie voor domino-art."
        image={heroImages.ddtHero}
        crumbs={[{ label: "Home", href: "/" }, { label: "Team" }]}
      />

      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <Link
                key={m.name}
                to={`/team/${slugify(m.name)}`}
                className="group rounded-2xl border border-border bg-surface p-6 text-center hover:border-primary/40 transition-colors"
              >
                <div className="aspect-square rounded-xl bg-primary/10 border border-primary/20 grid place-items-center font-display text-3xl font-bold text-primary mb-4 mx-auto group-hover:scale-105 transition-transform">
                  {m.initials}
                </div>
                <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                  {m.name}
                </h3>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  {m.role}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Team;
