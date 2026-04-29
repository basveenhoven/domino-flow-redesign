import aboutHero from "@/assets/page-about-hero.jpg";
import teamImage from "@/assets/about-team.jpg";
import { PageLayout } from "@/components/site/v2/PageLayout";
import { PageHero } from "@/components/site/v2/PageHero";

const editions = [
  {
    year: "2021",
    title: "WDC 2021 — Fairy Tales",
    videoId: "kF4ju6j6jjQ",
    body:
      "In 2021 organiseerde het World Domino Collective het allereerste evenement onder de nieuwe naam. Een team van 20 internationale bouwers werkte twee volle weken om meer dan 582.000 dominostenen op te zetten. Drie verhalen — Peter Pan, De nieuwe kleren van de keizer en Belle en het Beest — werden op een fascinerende manier tot leven gebracht met dominostenen.",
  },
  {
    year: "2022",
    title: "WDC 2022 — Domino Valley",
    videoId: "9Wm3lMmAOO8",
    body:
      "Op 19 augustus 2022 vond World Domino Collective 2022 plaats. Het ambitieuze doel was het overtreffen van een bestaand amateurrecord door meer dan 750.000 dominostenen om te laten vallen. Het thema 'Domino Valley' nam de vorm aan van een pretpark, opgedeeld in drie subthema's: Space, Candy en Maya. Met meer dan 700.000 omgevallen stenen was dit evenement een waanzinnig succes.",
  },
  {
    year: "2023",
    title: "WDC 2023 — Happy Time Travel Day!",
    videoId: "T0SX-d3vZCQ",
    body:
      "In 2023 organiseerde het World Domino Collective het spectaculaire evenement 'Happy Time Travel Day', gesponsord door ATR Travel en het Dutch Domino Team. Een team van 30 internationale bouwers zette gedurende twee weken meer dan 800.000 dominostenen op. Drie gelukkige mensen — Maes, Rosie en Collin — ondernamen een tijdreis van een uur vooruit en een uur terug… dachten ze.",
  },
  {
    year: "2024",
    title: "WDC 2024 — Color the World in Domino",
    videoId: "T-rIE2bRH-c",
    body:
      "Op 23 augustus 2024 vond WDC 2024 plaats in Sporthal de Vallei in Veenendaal. Het Dutch Domino Team bracht een kleurrijke wereld tot leven met maar liefst 900.000 dominostenen. Tijdens de spectaculaire falldown vielen 851.433 stenen om, waarmee een nieuw amateurwereldrecord werd gevestigd.",
  },
  {
    year: "2025",
    title: "WDC 2025 — Milestones",
    videoId: "QV38Xlbl40k",
    body:
      "Tijdens het World Domino Collective 2025 bereikte het Dutch Domino Team een historische mijlpaal door de grens van 1.000.000 gevallen dominostenen te doorbreken. Ter ere van ons 15-jarig jubileum stond het thema 'Milestones' centraal. In diverse subthema's werden iconische momenten uit de sport, techniek en geschiedenis op indrukwekkende wijze gevisualiseerd.",
  },
];

const Over = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Over ons"
        title={<>Van vriendengroep naar <span className="text-gradient">internationaal collectief</span></>}
        subtitle="Het Dutch Domino Team is van oorsprong een vriendengroep en ontmoette elkaar via YouTube. Inmiddels zijn we uitgegroeid tot een internationaal team van meer dan 30 leden."
        image={aboutHero}
        crumbs={[{ label: "Home", href: "/v2" }, { label: "Over ons" }]}
      />

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden border border-border">
              <img
                src={teamImage}
                alt="Het team aan het werk"
                loading="lazy"
                width={1280}
                height={1700}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div>
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Geschiedenis</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Het verhaal achter <span className="text-gradient">DDT</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dutch Domino Team (DDT) is van oorsprong een vriendengroep. Het bouwen met dominostenen
                is al voor een lange tijd een hobby van ons allemaal. Door het delen van onze projecten
                via YouTube zijn we met elkaar in contact gekomen. In het begin kwamen we bij elkaar op
                visite en bouwden we in slaap- en huiskamers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Dit hebben we uit kunnen breiden tot een succesvol jaarlijks evenement met elke keer een
                wisselend thema en een hoger stenenaantal — sinds 2021 onder de naam{" "}
                <strong className="text-foreground">World Domino Collective</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editions timeline */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Edities</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">Vijf jaar World Domino Collective</h2>
          </div>
          <div className="max-w-6xl mx-auto relative">
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
                    <div className="absolute left-4 lg:left-1/2 top-3 h-3 w-3 rounded-full bg-primary lg:-translate-x-1/2 ring-4 ring-surface z-10" />

                    <div className="lg:hidden pl-12 space-y-5">
                      {TextBlock}
                      {VideoBlock}
                    </div>

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
    </PageLayout>
  );
};

export default Over;
