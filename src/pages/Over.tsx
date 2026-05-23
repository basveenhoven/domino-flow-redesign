import { Link } from "react-router-dom";
import aboutHero from "@/assets/page-about-hero.jpg";
import teamImage from "@/assets/about-team.jpg";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { useI18n } from "@/lib/i18n";
import { team } from "@/data/ddt";

const slugify = (name: string) =>
  name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const Over = () => {
  const { t, pick } = useI18n();

  const pillars = [
    {
      title: pick({ NL: "Bouwen op locatie", EN: "On-site builds" }),
      body: pick({
        NL: "Van pop-up showcases tot dagenlange installaties — we bouwen waar ons publiek is: in winkels, op festivals, in tv-studio's en op evenementen.",
        EN: "From pop-up showcases to multi-day installations — we build where our audience is: in stores, at festivals, in TV studios and at events.",
      }),
    },
    {
      title: pick({ NL: "Merkcampagnes", EN: "Brand campaigns" }),
      body: pick({
        NL: "We vertalen merken naar een kettingreactie. Strakke choreografie, herkenbare kleuren en een eindbeeld dat blijft hangen — op camera én live.",
        EN: "We translate brands into a chain reaction. Tight choreography, recognisable colours and a final image that sticks — on camera and live.",
      }),
    },
    {
      title: pick({ NL: "Workshops & teambuilding", EN: "Workshops & team building" }),
      body: pick({
        NL: "Samen bouwen leert geduld, samenwerking en precisie. Onze bouwers begeleiden teams van scholen tot directies door een eigen kettingreactie.",
        EN: "Building together teaches patience, collaboration and precision. Our builders guide teams from schools to executives through their own chain reaction.",
      }),
    },
    {
      title: pick({ NL: "Content & video", EN: "Content & video" }),
      body: pick({
        NL: "Elke build wordt vastgelegd met meerdere camera's, slow-motion en drone. Klaar voor social, broadcast of een eigen aftermovie.",
        EN: "Every build is captured with multiple cameras, slow-motion and drone. Ready for social, broadcast or a dedicated aftermovie.",
      }),
    },
  ];

  const stats = [
    { value: "15+", label: pick({ NL: "Jaar dominobouwen", EN: "Years of domino building" }) },
    { value: "30", label: pick({ NL: "Vaste bouwers", EN: "Core builders" }) },
    { value: "100+", label: pick({ NL: "Projecten & shows", EN: "Projects & shows" }) },
    { value: "1M+", label: pick({ NL: "Gevallen stenen in 2025", EN: "Toppled stones in 2025" }) },
  ];

  return (
    <PageLayout>
      <PageHero
        eyebrow={t("about.eyebrow")}
        title={<>{t("about.titleA")} <span className="text-gradient">{t("about.titleB")}</span></>}
        subtitle={t("about.subtitle")}
        image={aboutHero}
        crumbs={[{ label: t("nav.home"), href: "/" }, { label: t("about.eyebrow") }]}
      />

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden border border-border">
              <img
                src={teamImage}
                alt={pick({ NL: "Het team aan het werk", EN: "The team at work" })}
                loading="lazy"
                width={1280}
                height={1700}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div>
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">{t("about.historyEyebrow")}</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
                {t("about.historyTitleA")} <span className="text-gradient">{t("about.historyTitleB")}</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("about.historyP1")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.historyP2")} <strong className="text-foreground">World Domino Collective</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars — wat DDT doet */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
              {pick({ NL: "Wat we doen", EN: "What we do" })}
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
              {pick({
                NL: <>Het Dutch Domino Team, <span className="text-gradient">het hele jaar door</span></>,
                EN: <>The Dutch Domino Team, <span className="text-gradient">year-round</span></>,
              })}
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-6">
              {pick({
                NL: "Wij zijn een collectief van bouwers, makers en verhalenvertellers. Domino is ons gereedschap, maar ons werk gaat over timing, vakmanschap en het moment waarop alles samenvalt.",
                EN: "We are a collective of builders, makers and storytellers. Dominoes are our tool, but our work is about timing, craft and the moment everything comes together.",
              })}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-background p-8 hover:border-primary/40 transition-colors">
                <h3 className="font-display text-xl font-semibold mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16 pt-12 border-t border-border">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">{s.value}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WDC — jaarlijks hoogtepunt, kort */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-surface p-10 lg:p-14 text-center">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
              {pick({ NL: "Jaarlijks hoogtepunt", EN: "Annual highlight" })}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {pick({
                NL: <>World Domino Collective — <span className="text-gradient">onze eigen productie</span></>,
                EN: <>World Domino Collective — <span className="text-gradient">our own production</span></>,
              })}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {pick({
                NL: "Elke zomer organiseren we onze eigen meerdaagse build met internationale bouwers. In 2025 doorbraken we de grens van 1.000.000 gevallen stenen. WDC is waar onze ambitie, ons netwerk en ons vakmanschap samenkomen.",
                EN: "Every summer we run our own multi-day build with international builders. In 2025 we broke the 1,000,000 toppled stones barrier. WDC is where our ambition, network and craft come together.",
              })}
            </p>
            <Link to="/bouwersdagen" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
              {pick({ NL: "Meer over Bouwersdagen", EN: "More about Builder days" })} →
            </Link>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 lg:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
              {pick({ NL: "Het team", EN: "The team" })}
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
              {pick({
                NL: <>De bouwers achter <span className="text-gradient">het Dutch Domino Team</span></>,
                EN: <>The builders behind <span className="text-gradient">the Dutch Domino Team</span></>,
              })}
            </h2>
          </div>

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

export default Over;
