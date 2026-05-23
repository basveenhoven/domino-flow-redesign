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

  const editions = [
    {
      year: "2021",
      title: "WDC 2021 — Fairy Tales",
      videoId: "kF4ju6j6jjQ",
      body: pick({
        NL: "In 2021 organiseerde het World Domino Collective het allereerste evenement onder de nieuwe naam. Een team van 20 internationale bouwers werkte twee volle weken om meer dan 582.000 dominostenen op te zetten. Drie verhalen — Peter Pan, De nieuwe kleren van de keizer en Belle en het Beest — werden op een fascinerende manier tot leven gebracht met dominostenen.",
        EN: "In 2021, the World Domino Collective organized the very first event under the new name. A team of 20 international builders worked for two full weeks to set up more than 582,000 dominoes. The theme of the event was 'Fairy Tales'. Three stories — Peter Pan, The Emperor's New Clothes, and Beauty and the Beast — were brought to life in a fascinating way with dominoes.",
      }),
    },
    {
      year: "2022",
      title: "WDC 2022 — Domino Valley",
      videoId: "9Wm3lMmAOO8",
      body: pick({
        NL: "Op 19 augustus 2022 vond World Domino Collective 2022 plaats. Het ambitieuze doel was het overtreffen van een bestaand amateurrecord door meer dan 750.000 dominostenen om te laten vallen. Het thema 'Domino Valley' nam de vorm aan van een pretpark, opgedeeld in drie subthema's: Space, Candy en Maya. Met meer dan 700.000 omgevallen stenen was dit evenement een waanzinnig succes.",
        EN: "On August 19, 2022, the World Domino Collective 2022 took place. The ambitious goal of this event was to surpass an existing amateur record by toppling over 750,000 dominoes. The chosen theme was 'Domino Valley', an original and self-designed concept that took the shape of an amusement park. This amusement park was divided into three sub-themes: Space, Candy, and Maya. With more than 700,000 toppled stones, this event was an insane success.",
      }),
    },
    {
      year: "2023",
      title: "WDC 2023 — Happy Time Travel Day!",
      videoId: "T0SX-d3vZCQ",
      body: pick({
        NL: "In 2023 organiseerde het World Domino Collective het spectaculaire evenement 'Happy Time Travel Day', gesponsord door ATR Travel en het Dutch Domino Team. Een team van 30 internationale bouwers zette gedurende twee weken meer dan 800.000 dominostenen op. Drie gelukkige mensen — Maes, Rosie en Collin — ondernamen een tijdreis van een uur vooruit en een uur terug… dachten ze.",
        EN: "In 2023, the World Domino Collective organized the spectacular event 'Happy Time Travel Day,' sponsored by ATR Travel and the Dutch Domino Team. A team of 30 international builders set up more than 800,000 dominoes over the course of two weeks. During this event, three lucky people — Maes, Rosie, and Collin — undertook a time journey of one hour forward and one hour back… or so they thought.",
      }),
    },
    {
      year: "2024",
      title: "WDC 2024 — Color the World in Domino",
      videoId: "T-rIE2bRH-c",
      body: pick({
        NL: "Op 23 augustus 2024 vond WDC 2024 plaats in Sporthal de Vallei in Veenendaal. Het Dutch Domino Team bracht een kleurrijke wereld tot leven met maar liefst 900.000 dominostenen. Tijdens de spectaculaire falldown vielen 851.433 stenen om, waarmee een nieuw amateurwereldrecord werd gevestigd.",
        EN: "On August 23, 2024, the World Domino Collective (WDC) 2024 took place at Sporthal De Vallei in Veenendaal. This year, the Dutch Domino Team brought a vibrant world to life using no less than 900,000 dominoes. During the spectacular falldown, 851,433 dominoes toppled, setting a new amateur world record.",
      }),
    },
    {
      year: "2025",
      title: "WDC 2025 — Milestones",
      videoId: "QV38Xlbl40k",
      body: pick({
        NL: "Tijdens het World Domino Collective 2025 bereikte het Dutch Domino Team een historische mijlpaal door de grens van 1.000.000 gevallen dominostenen te doorbreken. Ter ere van ons 15-jarig jubileum stond het thema 'Milestones' centraal. In diverse subthema's werden iconische momenten uit de sport, techniek en geschiedenis op indrukwekkende wijze gevisualiseerd.",
        EN: "During the World Domino Collective 2025, the Dutch Domino Team reached a historic milestone by breaking the 1,000,000-toppled-dominoes barrier. To celebrate our 15th anniversary the theme was 'Milestones'. Various sub-themes brought iconic moments from sport, technology and history to life in impressive fashion.",
      }),
    },
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
