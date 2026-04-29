import { scrapedImages as img } from "@/lib/scrapedImages";

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  country: string;
  image: string;
  bio: string;
}

// Bron: namen uit publieke uitingen van het Dutch Domino Team & World Domino Collective
// (YouTube credits, WDC-edities, sponsorpagina's). Foto's tonen het team in actie tijdens WDC-edities.
export const teamMembers: TeamMember[] = [
  {
    slug: "maes",
    name: "Maes",
    role: "Bouwer & founding member",
    country: "Nederland",
    image: img.ddtBuild1,
    bio:
      "Maes is een van de oprichters van het Dutch Domino Team. Sinds de allereerste sporthal-edities in 2010 is hij betrokken bij vrijwel elk project en speelde hij een hoofdrol in WDC 2023 — Happy Time Travel Day.",
  },
  {
    slug: "rosie",
    name: "Rosie",
    role: "Bouwer & verhalenverteller",
    country: "Nederland",
    image: img.ddtBuild2,
    bio:
      "Rosie maakt al jaren deel uit van het team en speelde — samen met Maes en Collin — een hoofdrol in de tijdreis van WDC 2023. Haar specialiteit: gedetailleerde scènes en verhalende vlakken.",
  },
  {
    slug: "collin",
    name: "Collin",
    role: "Bouwer",
    country: "Nederland",
    image: img.ddtBuild3,
    bio:
      "Collin staat bekend om zijn precisie en geduld. Net als Maes en Rosie speelde hij een belangrijke rol in het Time Travel-thema van WDC 2023 en is hij een vaste kracht tijdens de bouwweken.",
  },
  {
    slug: "lily-hevesh",
    name: "Lily Hevesh (Hevesh5)",
    role: "Internationaal gastbouwer",
    country: "Verenigde Staten",
    image: img.ddtVexx2,
    bio:
      "Lily Hevesh — bekend van haar YouTube-kanaal Hevesh5 en jurylid in het tv-programma Domino Masters — sloot zich in 2022 aan bij ons evenement. Met miljoenen volgers wereldwijd is zij een ware sensatie in de domino-wereld.",
  },
  {
    slug: "vexx",
    name: "VEXX",
    role: "Gastartiest & ontwerper",
    country: "België",
    image: img.ddtVexx1,
    bio:
      "Onder de artiestennaam VEXX werkte deze internationale kunstenaar mee aan een spectaculair domino-project samen met DDT. Zijn karakteristieke stijl bracht een unieke visuele laag aan onze projecten.",
  },
  {
    slug: "international-builders",
    name: "Internationale bouwers",
    role: "Gastbouwers",
    country: "Wereldwijd",
    image: img.ddtTeam2019,
    bio:
      "Naast de Nederlandse kern bestaat het team uit gastbouwers uit Duitsland, Oostenrijk, Frankrijk, Engeland, China en Australië. Elk jaar reizen zij naar Veenendaal om mee te bouwen aan WDC.",
  },
  {
    slug: "ddt-2011-crew",
    name: "DDT 2011 — Sealife crew",
    role: "Founding crew",
    country: "Nederland",
    image: img.ddtTeam2011,
    bio:
      "De groep die in 2011 — onder het thema Sealife — voor het eerst met masterplan en designs werkte. Met 55.555 stenen werd toen de basis gelegd voor wat WDC vandaag de dag is.",
  },
  {
    slug: "design-team",
    name: "Design team",
    role: "Ontwerpers & coördinatoren",
    country: "Nederland",
    image: img.ddtBuild9,
    bio:
      "Het design team vertaalt elk jaarthema naar gedetailleerde domino-designs. Zij bepalen kleurgebruik, opbouwvolgorde en de logica van de show — ruim voordat de eerste steen valt.",
  },
];
