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

      {/* Editions timeline */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">{t("about.editions")}</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">{t("about.editionsTitle")}</h2>
          </div>
          <div className="max-w-6xl mx-auto relative">
            {/* Mobile line on the left, desktop line in the center */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-1/2" />

            <div className="space-y-16 lg:space-y-24">
              {[...editions].reverse().map((m, i) => {
                const textOnLeft = i % 2 === 0;
                const TextBlock = (
                  <div className={textOnLeft ? "lg:text-right" : "lg:text-left"}>
                    <div className="font-display text-4xl font-bold text-gradient mb-2">{m.year}</div>
                    <h3 className="font-display text-2xl font-semibold mb-4">{m.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{m.body}</p>
                  </div>
                );
                const VideoBlock = (
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-background shadow-lg">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${m.videoId}`}
                      title={m.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                );

                return (
                  <div key={m.year} className="relative">
                    {/* Center dot */}
                    <div className="absolute left-4 lg:left-1/2 top-3 h-3 w-3 rounded-full bg-primary lg:-translate-x-1/2 ring-4 ring-surface z-10" />

                    {/* Mobile: stacked, all to the right of the line */}
                    <div className="lg:hidden pl-12 space-y-5">
                      {TextBlock}
                      {VideoBlock}
                    </div>

                    {/* Desktop: 2-column grid, alternating sides */}
                    <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
                      {textOnLeft ? (
                        <>
                          <div className="pr-4">{TextBlock}</div>
                          <div className="pl-4">{VideoBlock}</div>
                        </>
                      ) : (
                        <>
                          <div className="pr-4">{VideoBlock}</div>
                          <div className="pl-4">{TextBlock}</div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
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
