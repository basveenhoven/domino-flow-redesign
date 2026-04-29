import { PageLayout } from "@/components/site/v2/PageLayout";
import { PageHero } from "@/components/site/v2/PageHero";
import { scrapedImages } from "@/lib/scrapedImages";
const projectsHero = scrapedImages.ddtVexx1;

interface Project {
  year: string;
  title: string;
  category: "WDC" | "DDT" | "Opdracht" | "Workshop" | "Easter";
  body: string;
}

const projects: Project[] = [
  {
    year: "2025",
    title: "WDC 2025 — Milestones",
    category: "WDC",
    body:
      "Tijdens WDC 2025 bereikte het Dutch Domino Team een historische mijlpaal door de grens van 1.000.000 gevallen dominostenen te doorbreken. Ter ere van ons 15-jarig jubileum stond het thema 'Milestones' centraal.",
  },
  {
    year: "2024",
    title: "WDC 2024 — Color the World in Domino",
    category: "WDC",
    body:
      "Op 23 augustus 2024 vond WDC 2024 plaats in Sporthal de Vallei in Veenendaal. Met 900.000 stenen vielen er tijdens de falldown 851.433 — een nieuw amateurwereldrecord.",
  },
  {
    year: "2023",
    title: "WDC 2023 — Happy Time Travel Day!",
    category: "WDC",
    body:
      "Een team van 30 internationale bouwers zette gedurende twee weken meer dan 800.000 dominostenen op. Drie gelukkige mensen ondernamen een tijdreis van een uur vooruit en een uur terug… dachten ze.",
  },
  {
    year: "2022",
    title: "WDC 2022 — Domino Valley",
    category: "WDC",
    body:
      "Op 19 augustus 2022 vond WDC 2022 plaats. Het thema 'Domino Valley' nam de vorm aan van een pretpark met de subthema's Space, Candy en Maya. Met meer dan 700.000 omgevallen stenen een waanzinnig succes.",
  },
  {
    year: "2021",
    title: "WDC 2021 — Fairy Tales",
    category: "WDC",
    body:
      "In 2021 organiseerde het World Domino Collective het allereerste evenement onder de nieuwe naam. Een team van 20 internationale bouwers werkte twee volle weken om meer dan 582.000 dominostenen op te zetten.",
  },
  {
    year: "2020",
    title: "10 jaar Dutch Domino Team",
    category: "DDT",
    body:
      "Voor ons 10-jarig jubileum bouwden we een project van ruim 100.000 dominostenen. Het allerbelangrijkste was dat we samen met het hele team konden bouwen, met ruimte voor leuke activiteiten.",
  },
  {
    year: "2019",
    title: "DDT 2019 — Road to Fame",
    category: "DDT",
    body:
      "Een filmisch project waarin Emma's verhaal centraal stond, gepresenteerd als een trailer en een volledige falldown — DDT op zijn meest verhalende.",
  },
  {
    year: "2018",
    title: "DDT 2018",
    category: "DDT",
    body:
      "Ons jaarlijkse evenement met opnieuw een groei in stenenaantal en ambitie. DDT bleef zichzelf uitdagen met steeds nieuwe technieken.",
  },
  {
    year: "2017",
    title: "DDT 2017 — Board Games",
    category: "DDT",
    body:
      "Het jaarlijkse evenement met als thema bordspellen — van Monopoly tot Risk, allemaal vereeuwigd in dominostenen.",
  },
  {
    year: "2016",
    title: "DDT 2016 — The Beauty of Art",
    category: "DDT",
    body:
      "Een eerbetoon aan de schilderkunst, waarbij iconische werken in dominostenen werden nagebouwd voor een falldown vol kleur.",
  },
  {
    year: "2015",
    title: "DDT 2015 — Sports",
    category: "DDT",
    body:
      "In 2015 vierden we ons 5-jarig jubileum onder het thema 'Sports'. Het was de eerste keer dat we de grens van 100.000 stenen doorbraken — met een knipoog naar minder bekende sporten.",
  },
  {
    year: "2014",
    title: "DDT 2014 — 4 Seasons",
    category: "DDT",
    body:
      "De hal werd verdeeld in vier kwadranten, elk een seizoen. Inclusief een twee meter hoge herfstboom — het jaar van de decorstukken.",
  },
  {
    year: "2013",
    title: "DDT 2013 — Movies",
    category: "DDT",
    body:
      "James Bond, The Matrix, Harry Potter, Toy Story, Avatar en Lord of the Rings — elk teamlid koos een favoriete film en bracht die tot leven in domino.",
  },
  {
    year: "2013",
    title: "NS Company Movie",
    category: "Opdracht",
    body:
      "In samenwerking met BIND Films maakten we een bedrijfsfilm over veiligheid voor de NS. Zeven bouwers werkten vier dagen in een studio in Amsterdam.",
  },
  {
    year: "2012",
    title: "DDT 2012 — Flowing Music",
    category: "DDT",
    body:
      "Een grote stap ten opzichte van 2011 met 15.000 stenen meer onder het thema 'Flowing Music' — verschillende muziekstijlen, instrumenten én disco.",
  },
  {
    year: "2011",
    title: "DDT 2011 — Sealife",
    category: "DDT",
    body:
      "Een enorm verschil met het jaar ervoor: vooraf geplande projecten, designs en een masterplan. We zetten maar liefst 55.555 stenen op.",
  },
  {
    year: "2010",
    title: "DDT 2010 — Impossible Domino",
    category: "DDT",
    body:
      "Het allereerste DDT-project. Drie Nederlandse bouwers vulden samen een sporthal — heel anders dan onze huidige evenementen, maar wel het startpunt van het team.",
  },
  {
    year: "Diverse",
    title: "Easter Meetings (2015 — 2018)",
    category: "Easter",
    body:
      "Sinds 2015 organiseren we naast ons jaarlijkse evenement ook een Easter Meeting — vooral gericht op gezelligheid en teamtraining. Een hoogtepunt was de Disney-editie in 2018.",
  },
  {
    year: "—",
    title: "Amsterdam UMC",
    category: "Opdracht",
    body:
      "Twee teamleden zetten een aantal kleine projecten op voor een video over depressie. Met slechts drie kleuren — zwart, grijs en wit — werd een professionele uitstraling bereikt.",
  },
  {
    year: "—",
    title: "Berkenboom — Workshop",
    category: "Workshop",
    body:
      "Vier klassen van middelbare school 'De Berkenboom' werden verdeeld over vier secties. Met meer dan 40.000 stenen leerden de kinderen niet alleen techniek, maar ook samenwerking en vriendschap.",
  },
];

const categoryColor: Record<Project["category"], string> = {
  WDC: "bg-primary/15 text-primary",
  DDT: "bg-foreground/10 text-foreground",
  Opdracht: "bg-accent-blue/15 text-primary",
  Workshop: "bg-muted text-foreground/80",
  Easter: "bg-secondary text-secondary-foreground",
};

const Projecten = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Projecten"
        title={<>15+ jaar <span className="text-gradient">domino-projecten</span></>}
        subtitle="Een overzicht van WDC-edities, DDT-jaarprojecten, opdrachten en workshops uit het archief van het Dutch Domino Team."
        image={projectsHero}
        crumbs={[{ label: "Home", href: "/v2" }, { label: "Projecten" }]}
      />

      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {projects.map((p) => (
              <article
                key={`${p.year}-${p.title}`}
                className="magnetic-card p-7 rounded-2xl border border-border bg-surface flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-2xl font-bold text-gradient">{p.year}</span>
                  <span className={`text-[10px] font-medium tracking-[0.2em] uppercase px-2.5 py-1 rounded-full ${categoryColor[p.category]}`}>
                    {p.category}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.body}</p>
              </article>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto">
            Het volledige projectenarchief inclusief video's vind je op{" "}
            <a href="https://www.dutchdominoteam.nl/projecten/" target="_blank" rel="noreferrer" className="text-primary hover:underline">
              dutchdominoteam.nl/projecten
            </a>.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Projecten;
