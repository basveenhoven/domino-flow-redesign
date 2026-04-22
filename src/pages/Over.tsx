import aboutHero from "@/assets/page-about-hero.jpg";
import teamImage from "@/assets/about-team.jpg";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";

const editions = [
  {
    year: "2021",
    title: "WDC 2021 — Fairy Tales",
    body: "In 2021 organiseerde het World Domino Collective het allereerste evenement onder de nieuwe naam. Een team van 20 internationale bouwers werkte twee volle weken om meer dan 582.000 dominostenen op te zetten. Drie verhalen — Peter Pan, De nieuwe kleren van de keizer en Belle en het Beest — werden op een fascinerende manier tot leven gebracht met dominostenen.",
  },
  {
    year: "2022",
    title: "WDC 2022 — Domino Valley",
    body: "Op 19 augustus 2022 vond World Domino Collective 2022 plaats. Het ambitieuze doel was het overtreffen van een bestaand amateurrecord door meer dan 750.000 dominostenen om te laten vallen. Het thema 'Domino Valley' nam de vorm aan van een pretpark, opgedeeld in drie subthema's: Space, Candy en Maya. Met meer dan 700.000 omgevallen stenen was dit evenement een waanzinnig succes.",
  },
  {
    year: "2023",
    title: "WDC 2023 — Happy Time Travel Day!",
    body: "In 2023 organiseerde het World Domino Collective het spectaculaire evenement 'Happy Time Travel Day', gesponsord door ATR Travel en het Dutch Domino Team. Een team van 30 internationale bouwers zette gedurende twee weken meer dan 800.000 dominostenen op. Drie gelukkige mensen — Maes, Rosie en Collin — ondernamen een tijdreis van een uur vooruit en een uur terug… dachten ze.",
  },
  {
    year: "2024",
    title: "WDC 2024 — Color the World in Domino",
    body: "Op 23 augustus 2024 vond WDC 2024 plaats in Sporthal de Vallei in Veenendaal. Het Dutch Domino Team bracht een kleurrijke wereld tot leven met maar liefst 900.000 dominostenen. Tijdens de spectaculaire falldown vielen 851.433 stenen om, waarmee een nieuw amateurwereldrecord werd gevestigd.",
  },
  {
    year: "2025",
    title: "WDC 2025 — Milestones",
    body: "Tijdens het World Domino Collective 2025 bereikte het Dutch Domino Team een historische mijlpaal door de grens van 1.000.000 gevallen dominostenen te doorbreken. Ter ere van ons 15-jarig jubileum stond het thema 'Milestones' centraal. In diverse subthema's werden iconische momenten uit de sport, techniek en geschiedenis op indrukwekkende wijze gevisualiseerd.",
  },
];

const Over = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Over ons"
        title={<>Dutch Domino Team — <span className="text-gradient">de oorsprong</span></>}
        subtitle="Dutch Domino Team (DDT) is van oorsprong een vriendengroep. Het bouwen met dominostenen is al voor een lange tijd een hobby van ons allemaal. Door het delen van onze projecten via YouTube zijn we met elkaar in contact gekomen."
        image={aboutHero}
        crumbs={[{ label: "Home", href: "/" }, { label: "Over ons" }]}
      />

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border">
              <img
                src={teamImage}
                alt="Het team aan het werk"
                loading="lazy"
                width={1280}
                height={896}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            <div>
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Onze geschiedenis</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Van slaapkamer naar <span className="text-gradient">wereldrecord</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In het begin kwamen we bij elkaar op visite en bouwden we in slaap- en huiskamers. Dit
                hebben we uit kunnen breiden tot een succesvol jaarlijks evenement met elke keer een
                wisselend thema en hoger stenenaantal.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In de loop der jaren kwamen er naast Nederlandse bouwers ook steeds meer internationale
                domino fans om ons te helpen. Zo hebben we bouwers uit Duitsland, België, Oostenrijk,
                Frankrijk, Amerika, Engeland, China en Australië kunnen ontmoeten. De naam voor het
                evenement hebben we daarom veranderd in <strong className="text-foreground">World Domino Collective</strong>.
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
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">Onze evenementen door de jaren</h2>
          </div>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
            {editions.map((m, i) => (
              <div key={m.year} className={`relative flex gap-6 md:gap-0 mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="absolute left-4 md:left-1/2 top-2 h-3 w-3 rounded-full bg-primary md:-translate-x-1/2 ring-4 ring-surface" />
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-10">
                  <div className="font-display text-3xl font-bold text-gradient mb-2">{m.year}</div>
                  <h3 className="font-display text-xl font-semibold mb-3">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Over;
