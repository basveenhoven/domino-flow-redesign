export interface WdcEdition {
  year: number;
  slug: string;
  theme: string;
  tagline: string;
  stones: string;
  fell?: string;
  builders?: string;
  duration?: string;
  date?: string;
  description: string[];
  youtubeId: string;
  youtubeTitle: string;
}

export const wdcEditions: WdcEdition[] = [
  {
    year: 2025,
    slug: "2025",
    theme: "Milestones",
    tagline: "1.000.000 dominostenen — een historische mijlpaal",
    stones: "1.000.000",
    fell: "1.000.000+",
    builders: "30+",
    date: "Augustus 2025",
    description: [
      "Tijdens het World Domino Collective 2025 bereikte het Dutch Domino Team een historische mijlpaal door de grens van 1.000.000 gevallen dominostenen te doorbreken.",
      "Ter ere van ons 15-jarig jubileum stond het thema 'Milestones' centraal. In diverse subthema's werden iconische momenten uit de sport, techniek en geschiedenis op indrukwekkende wijze gevisualiseerd.",
    ],
    youtubeId: "QV38Xlbl40k",
    youtubeTitle: "1.000.000 DOMINOES — WDC 2025 — MILESTONES",
  },
  {
    year: 2024,
    slug: "2024",
    theme: "Color the World in Domino",
    tagline: "Een kleurrijk kunstwerk in vallende dominostenen",
    stones: "900.000",
    fell: "851.433 (amateurwereldrecord)",
    builders: "30+",
    date: "23 augustus 2024",
    description: [
      "Op 23 augustus 2024 vond World Domino Collective 2024 plaats in Sporthal de Vallei in Veenendaal. Dit jaar bracht het Dutch Domino Team een kleurrijke wereld tot leven met maar liefst 900.000 dominostenen.",
      "Tijdens WDC 2024 stonden kleuren centraal, zes in totaal. Samen vormden ze een kleurrijk kunstwerk in vallende dominostenen.",
      "Tijdens de spectaculaire falldown vielen 851.433 stenen om, waarmee een nieuw amateurwereldrecord werd gevestigd. Het evenement was een visueel spektakel en een groot succes voor het team en de toeschouwers.",
    ],
    youtubeId: "qa50jgb1PZk",
    youtubeTitle: "860.000 DOMINOES — WDC 2024 — COLOR THE WORLD IN DOMINO",
  },
  {
    year: 2023,
    slug: "2023",
    theme: "Happy Time Travel Day!",
    tagline: "Een spectaculaire tijdreis met 800.000 stenen",
    stones: "800.000",
    builders: "30 internationale bouwers",
    duration: "2 weken",
    description: [
      "In 2023 organiseerde het World Domino Collective het spectaculaire evenement 'Happy Time Travel Day', gesponsord door ATR Travel en het Dutch Domino Team.",
      "Een team van 30 internationale bouwers zette gedurende twee weken meer dan 800.000 dominostenen op. Tijdens dit evenement ondernamen drie gelukkige mensen — Maes, Rosie en Collin — een tijdreis van een uur vooruit en een uur terug… dachten ze.",
    ],
    youtubeId: "GotP0Tu7Pqw",
    youtubeTitle: "800.000 DOMINOES — WDC 2023 — HAPPY TIME TRAVEL DAY",
  },
  {
    year: 2022,
    slug: "2022",
    theme: "Domino Valley",
    tagline: "Een zelfontworpen pretpark in dominostenen",
    stones: "750.000",
    fell: "700.000+",
    date: "19 augustus 2022",
    description: [
      "Op 19 augustus 2022 vond World Domino Collective 2022 plaats. Het ambitieuze doel van dit evenement was het overtreffen van een bestaand amateurrecord door meer dan 750.000 dominostenen om te laten vallen.",
      "Het gekozen thema was 'Domino Valley', een origineel en zelfontworpen concept dat de vorm aannam van een pretpark. Dit pretpark was opgedeeld in drie subthema's: Space, Candy en Maya.",
      "Met meer dan 700.000 omgevallen stenen was dit evenement een waanzinnig succes.",
    ],
    youtubeId: "Rea4o240vo8",
    youtubeTitle: "750.000 DOMINOES — WDC 2022 — DOMINO VALLEY",
  },
  {
    year: 2021,
    slug: "2021",
    theme: "Fairy Tales",
    tagline: "Het allereerste WDC — sprookjes in domino",
    stones: "582.000",
    builders: "20 internationale bouwers",
    duration: "2 weken",
    description: [
      "In 2021 organiseerde het World Domino Collective het allereerste evenement onder de nieuwe naam.",
      "Een team van 20 internationale bouwers werkte twee volle weken om meer dan 582.000 dominostenen op te zetten. Het thema van het evenement was 'Fairy Tales'.",
      "Drie verhalen — Peter Pan, De nieuwe kleren van de keizer, en Belle en het Beest — werden op een fascinerende manier tot leven gebracht met dominostenen.",
    ],
    youtubeId: "TdxRqaKlo2o",
    youtubeTitle: "582.000 DOMINOES — WDC 2021 — FAIRY TALES",
  },
];

export const getEdition = (slug: string) =>
  wdcEditions.find((e) => e.slug === slug);
