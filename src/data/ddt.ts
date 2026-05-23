// Centrale content voor Dutch Domino Team (DDT)
// Afbeeldingen worden direct van de live sites geladen.

export type ServiceSlug = "workshops" | "opdrachten" | "maatwerk";

export interface Service {
  slug: ServiceSlug;
  title: string;
  short: string;
  body: string[];
  image: string;
}

export const services: Service[] = [
  {
    slug: "workshops",
    title: "Workshops",
    short:
      "Onder professionele begeleiding van het Dutch Domino Team ontdek je de basistechnieken en verschillende bouwstijlen van domino.",
    body: [
      "Tijdens een workshop gaan deelnemers aan de slag onder begeleiding van ervaren bouwers van het Dutch Domino Team. Je leert de fundamentele technieken en maakt kennis met verschillende bouwstijlen.",
      "Een workshop is geschikt voor bedrijfsuitjes, teambuilding, scholen en evenementen. We schalen mee van kleine groepen tot honderden deelnemers.",
    ],
    image: "https://www.dutchdominoteam.nl/wp-content/uploads/2018/01/dienst-1.png",
  },
  {
    slug: "opdrachten",
    title: "Opdrachten",
    short:
      "Domino is een unieke en eyecatching manier om een boodschap over te brengen. Wij werken samen met merken aan een verhaal op maat.",
    body: [
      "We werken regelmatig samen met bedrijven en merken. Domino is een bijzondere en visueel sterke manier om jouw boodschap te vertellen — perfect voor productlanceringen, jubilea en mediacampagnes.",
      "Alles in nauw overleg met de opdrachtgever: van concept en design tot bouw, falldown en filmregistratie.",
    ],
    image: "https://www.dutchdominoteam.nl/wp-content/uploads/2018/02/Dienst-2.1-200x200.png",
  },
  {
    slug: "maatwerk",
    title: "Maatwerk",
    short:
      "Heb je een creatief idee en wil je weten welke rol wij daarin kunnen spelen? Neem vrijblijvend contact op.",
    body: [
      "Geen idee is te gek. Wij denken graag mee over de mogelijkheden van domino binnen jouw project, of het nu om een event, kunstinstallatie of community-build gaat.",
      "Neem vrijblijvend contact met ons op — we kijken graag samen wat passend is.",
    ],
    image: "https://worlddominocollective.nl/wp-content/uploads/2026/03/DSC01544-scaled.jpg",
  },
];

export interface Project {
  slug: string;
  title: string;
  year: string;
  category: "Event" | "Opdracht" | "Workshop" | "World Record";
  image: string;
}

export const projects: Project[] = [
  {
    slug: "wdc-2025-milestones",
    title: "WDC 2025 – Milestones",
    year: "2025",
    category: "Event",
    image: "https://worlddominocollective.nl/wp-content/uploads/2026/03/P1190695-scaled.jpg",
  },
  {
    slug: "ddt-2015-sports",
    title: "DDT 2015 – Sports",
    year: "2015",
    category: "Event",
    image: "https://www.dutchdominoteam.nl/wp-content/uploads/2018/11/DDT-2015-1.png",
  },
  {
    slug: "rozet-world-record",
    title: "Rozet World Record – Domino with Books",
    year: "2022",
    category: "World Record",
    image: "https://worlddominocollective.nl/wp-content/uploads/2026/03/IMG_2044-scaled.jpg",
  },
  {
    slug: "ddt-2019-road-to-fame",
    title: "DDT 2019 – Road to Fame: Emma's Story",
    year: "2019",
    category: "Event",
    image: "https://worlddominocollective.nl/wp-content/uploads/2026/03/DSC01544-scaled.jpg",
  },
  {
    slug: "clinical-pharmacology-unit",
    title: "Clinical Pharmacology Unit (CPU)",
    year: "2018",
    category: "Opdracht",
    image: "https://www.dutchdominoteam.nl/wp-content/uploads/2018/02/Dienst-2.1-200x200.png",
  },
  {
    slug: "fujifilm",
    title: "Fujifilm",
    year: "2017",
    category: "Opdracht",
    image: "https://www.dutchdominoteam.nl/wp-content/uploads/2018/01/dienst-1.png",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

export const team: TeamMember[] = [
  { name: "Arco Hollestelle", role: "Bouwer", initials: "AH" },
  { name: "Bart Vriens", role: "Bouwer", initials: "BV" },
  { name: "Bas Veenhoven", role: "Bouwer", initials: "BV" },
  { name: "Ivan Kramskoy", role: "Bouwer", initials: "IK" },
  { name: "Lisa Nederveen", role: "Bouwer", initials: "LN" },
  { name: "Marco Vorbusch", role: "Bouwer", initials: "MV" },
  { name: "Pim Vriens", role: "Bouwer", initials: "PV" },
  { name: "Thomas van Wely", role: "Bouwer", initials: "TW" },
  { name: "Wasilja Peterse", role: "Bouwer", initials: "WP" },
  { name: "William Ford", role: "Bouwer", initials: "WF" },
  { name: "Wim van Otterdijk", role: "Bouwer", initials: "WO" },
  { name: "Wout Dutoit", role: "Bouwer", initials: "WD" },
];

export const heroImages = {
  ddtHero:
    "https://worlddominocollective.nl/wp-content/uploads/2026/03/P1190695-scaled.jpg",
  ddtIntro:
    "https://worlddominocollective.nl/wp-content/uploads/2026/03/IMG_2044-scaled.jpg",
  wdcHero: "https://worlddominocollective.nl/wp-content/uploads/2026/03/DSC01544-scaled.jpg",
};
