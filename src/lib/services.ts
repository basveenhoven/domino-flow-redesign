import { scrapedImages as img } from "@/lib/scrapedImages";

export type ServiceCategory = "Workshop" | "Opdracht" | "Maatwerk" | "Evenement" | "Educatie";

export interface Service {
  slug: string;
  title: string;
  category: ServiceCategory;
  excerpt: string;
  image: string;
  paragraphs: string[];
  highlights: string[];
}

export const services: Service[] = [
  {
    slug: "teambuilding-workshop",
    title: "Teambuilding workshop",
    category: "Workshop",
    excerpt:
      "Een interactieve domino-workshop voor bedrijven, teams en uitjes — onder professionele begeleiding van het DDT.",
    image: img.ddtBuild2,
    paragraphs: [
      "Tijdens een teambuilding workshop gaan jouw collega's onder professionele begeleiding van het Dutch Domino Team zelf aan de slag met dominostenen. Naast de basistechnieken leren ze ook geavanceerdere bouwmethoden.",
      "De workshop is een ideale manier om samenwerking, geduld en creativiteit op een speelse manier te stimuleren. Het vloeroppervlak is leidraad voor het aantal cursisten — we geven het advies dat past bij jullie groep.",
      "Locatie naar keuze: bij ons, bij jullie op kantoor of op een externe locatie.",
    ],
    highlights: [
      "Op locatie naar keuze",
      "Geschikt voor 10 — 100 deelnemers",
      "Inclusief alle materialen",
      "Falldown als afsluiter",
    ],
  },
  {
    slug: "school-en-vereniging",
    title: "Workshops voor scholen & verenigingen",
    category: "Educatie",
    excerpt:
      "Speciaal afgestemd programma voor leerlingen of leden — leerzaam, bewegelijk en spectaculair.",
    image: img.ddtBuild4,
    paragraphs: [
      "Wij staan klaar voor scholen en verenigingen die leerlingen of leden willen verrassen met een unieke workshop. Kinderen leren niet alleen techniek, maar ook samenwerking, geduld en doorzettingsvermogen.",
      "Een mooi voorbeeld is de samenwerking met middelbare school 'De Berkenboom': vier klassen werden verdeeld over vier secties en samen werd er met meer dan 40.000 stenen gebouwd.",
      "We stemmen niveau, tempo en verhaal volledig af op de doelgroep.",
    ],
    highlights: [
      "Geschikt vanaf groep 5",
      "Lesprogramma beschikbaar",
      "Tot 4 klassen tegelijk",
      "Inclusief eindshow",
    ],
  },
  {
    slug: "internationale-workshop",
    title: "Internationale workshops",
    category: "Workshop",
    excerpt:
      "Wereldwijd inzetbaar — onze bouwers reizen graag voor een opdracht in het buitenland.",
    image: img.ddtBuild5,
    paragraphs: [
      "Ook internationale workshops behoren tot de mogelijkheden. Onze bouwers hebben ervaring in Duitsland, België, Oostenrijk, Frankrijk, Engeland, de VS, China en Australië.",
      "We verzorgen de volledige logistiek — van materiaal tot overdracht in de gewenste taal (NL/EN/DE).",
    ],
    highlights: ["Wereldwijd inzetbaar", "NL / EN / DE begeleiding", "Logistiek inbegrepen"],
  },
  {
    slug: "bedrijfsopdracht",
    title: "Bedrijfsopdracht",
    category: "Opdracht",
    excerpt:
      "Van concept tot falldown — een opvallende manier om jullie boodschap of merk te visualiseren.",
    image: img.ddtBuild3,
    paragraphs: [
      "Bij een bedrijfsopdracht bespreken we de visie van de klant en kijken we welke mogelijkheden er zijn binnen het beschikbare budget en de tijd. Dit geeft een duidelijk beeld van het eindproduct, de benodigde tijd en de kosten.",
      "Een unieke uitdaging in het verleden was de organisatie van een wereldrecordpoging boekendomino in Arnhem, waar wij leiding gaven aan een team van 20 vrijwilligers. Ook werkten we mee aan een veiligheidsfilm voor de NS in samenwerking met BIND Films.",
    ],
    highlights: ["Concept t/m oplevering", "Camera-ready opbouw", "Productiebegeleiding"],
  },
  {
    slug: "maatwerk-project",
    title: "Maatwerk project",
    category: "Maatwerk",
    excerpt:
      "Geen idee waar te beginnen? Wij denken mee en ontwerpen een uniek project op basis van jouw wens.",
    image: img.ddtVexx1,
    paragraphs: [
      "Is het lastig om een specifieke opdracht te formuleren? Geen zorgen — wij zijn gespecialiseerd in maatwerk. Via intensief overleg brengen we de visie in kaart en presenteren we verschillende opties.",
      "Wij zorgen ervoor dat we voldoende materiaal meenemen om ter plekke aanpassingen of toevoegingen te kunnen doen op het bestaande plan. Flexibiliteit en creativiteit staan centraal.",
    ],
    highlights: ["Volledig op maat", "Ter plekke aanpasbaar", "Designs & moodboards vooraf"],
  },
  {
    slug: "wereldrecord-poging",
    title: "Wereldrecord-poging",
    category: "Evenement",
    excerpt:
      "Spectaculaire wereldrecord-pogingen — van boekendomino tot grote stenenaantallen.",
    image: img.ddtPanorama,
    paragraphs: [
      "Met meer dan 15 jaar ervaring zijn wij dé partner voor wereldrecord-pogingen met dominostenen. We hebben meermaals het amateurwereldrecord gevestigd en weten precies wat erbij komt kijken qua planning, materiaal en mediabegeleiding.",
      "Wij verzorgen de coördinatie, het ontwerp, het bouwteam en — indien gewenst — de samenwerking met officiële record-instanties.",
    ],
    highlights: ["Officiële record-begeleiding", "Coördinatie groot bouwteam", "Mediabegeleiding"],
  },
];

export const serviceCategories: ServiceCategory[] = [
  "Workshop",
  "Opdracht",
  "Maatwerk",
  "Evenement",
  "Educatie",
];

export const categoryColor: Record<ServiceCategory, string> = {
  Workshop: "bg-primary/15 text-primary",
  Opdracht: "bg-foreground/10 text-foreground",
  Maatwerk: "bg-accent-blue/15 text-primary",
  Evenement: "bg-secondary text-secondary-foreground",
  Educatie: "bg-muted text-foreground/80",
};
