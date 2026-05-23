import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { heroImages, team } from "@/data/ddt";

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
              <article
                key={m.name}
                className="rounded-2xl border border-border bg-surface p-6 text-center hover:border-primary/40 transition-colors"
              >
                <div className="aspect-square rounded-xl bg-primary/10 border border-primary/20 grid place-items-center font-display text-3xl font-bold text-primary mb-4 mx-auto">
                  {m.initials}
                </div>
                <h3 className="font-display text-lg font-semibold">{m.name}</h3>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  {m.role}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Team;
