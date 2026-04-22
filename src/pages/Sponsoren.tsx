import { ExternalLink } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import sponsorsHero from "@/assets/page-sponsors-hero.jpg";
import logoDonDomino from "@/assets/sponsors/don-domino.png";
import logoSportservice from "@/assets/sponsors/sportservice-veenendaal.png";
import logoHorecaDeVallei from "@/assets/sponsors/horeca-de-vallei.png";
import logoGebroedersVanEijk from "@/assets/sponsors/gebroeders-van-eijk.png";
import logoHevesh5 from "@/assets/sponsors/hevesh5.png";

interface Sponsor {
  id: string;
  name: string;
  tagline: string;
  logo: string;
  paragraphs: string[];
  links: { label: string; href: string }[];
}

const sponsors: Sponsor[] = [
  {
    id: "dondomino",
    name: "Don Domino",
    tagline: "Eindeloos bouwplezier met domino!",
    logo: logoDonDomino,
    paragraphs: [
      "De beste kwaliteit domino stenen gewoon geproduceerd in Europa. Hoewel Don Domino een relatief nieuwe producent is met de eerste productie die in 2020 op de markt kwam, staat het nu bij velen al op de eerste plaats wanneer er wordt gedacht over het kopen van nieuwe domino stenen.",
      "Daarom zijn wij ook super trots dat we Don Domino als hoofdsponsor van het WDC 2026 evenement mogen verwelkomen. Niet alleen krijgen we tienduizenden kersverse dominostenen van super goede kwaliteit te leen, maar ook zijn wij als domino professionals in een vroeg stadium van de ontwikkeling van de stenen gevraagd naar onze mening en feedback op de kwaliteit.",
      "Inmiddels biedt Don Domino al meer dan 30 verschillende kleuren aan en blijven ons verbazen door alsmaar nieuwe kleuren aan te bieden. Op de website van Don Domino staat DDT als partner vermeld en kun je onze onbevooroordeelde mening horen over de kwaliteit van de stenen.",
      "Bent u op zoek naar kwalitatief zeer goede stenen voor een goede prijs dan bent u bij Don Domino aan het juiste adres. Of het nu voor uzelf of voor uw familie is, neem eens een kijkje op de website en de social media kanalen van Don Domino.",
    ],
    links: [
      { label: "dondomino.eu/nl", href: "http://www.dondomino.eu/nl" },
      { label: "Partners", href: "http://www.dondomino.eu/nl/partners" },
      { label: "Facebook", href: "http://www.facebook.com/dondomino.eu" },
      { label: "YouTube", href: "http://www.youtube.com/channel/UC0I7xwyoxpdVoRZCogXqILA" },
      { label: "Instagram", href: "http://www.instagram.com/dondomino.eu" },
    ],
  },
  {
    id: "sportservice-veenendaal",
    name: "Sport service Veenendaal",
    tagline: "Sport is meer dan bewegen!",
    logo: logoSportservice,
    paragraphs: [
      "Of je nu gezellig een dagje wilt gaan zwemmen met je hele familie of mee wilt doen aan een georganiseerde toertocht, Sport service Veenendaal is van alle markten thuis. Met het ultieme doel om iedereen van jong tot oud te laten sporten en bewegen is het aanbod en de mogelijkheden dan ook eindeloos.",
      "Sinds 2019 is DDT te gast in een van de locaties van Sportservice Veenendaal. Dit jaar zijn we te gast in Sporthal West. Tijdens onze rustdag zullen we zeker een duik nemen in het zwembad.",
      "Om dit jaar honderdduizenden stenen te kunnen zetten wordt de vloer van de sporthal super schoon opgeleverd zodat we geen korreltje zand onder de stenen hebben wat het geheel vroegtijdig kan laten vallen. Sport service Veenendaal is super gastvrij en denkt met ons mee om elk jaar het evenement nog grootser te maken.",
      "Langs de 12 gymzalen en 3 sporthallen heeft Sport service Veenendaal een groot zwemcomplex waar schoolzwemmen, wedstrijdzwemmen en aquasporten wordt georganiseerd. Ook is er een groot binnenbad en buitenbad waar in de zomer honderden kinderen en gezinnen kunnen genieten van een verfrissende plons, verschillende glijbanen, minigolf, en meer.",
    ],
    links: [
      { label: "sportserviceveenendaal.nl", href: "http://www.sportserviceveenendaal.nl/" },
      { label: "Facebook", href: "http://www.facebook.com/sportveenendaal" },
      { label: "Zwembad de Vallei", href: "http://www.facebook.com/zwembaddevallei" },
      { label: "Instagram", href: "http://www.instagram.com/sportservice_veenendaal" },
    ],
  },
  {
    id: "horeca-de-vallei",
    name: "Horeca de Vallei",
    tagline: "Een sportieve ontmoetingsplek!",
    logo: logoHorecaDeVallei,
    paragraphs: [
      "Horeca de Vallei heeft zich afgelopen jaar geprofileerd meer te zijn dan alleen een sportcafé voor koffie en een snelle snack. In 2020 is het helemaal opgeknapt en heeft een sfeervolle uitstraling gekregen.",
      "Elk jaar hebben wij weer het geluk dat we in Horeca de Vallei mogen dineren. De kok doet elke avond weer zijn uiterste best om een gezonde en voedzame maaltijd neer te zetten voor wat lijkt een uitgehongerde groep bouwers.",
      "Bent u benieuwd naar het ruime aanbod van een kop koffie of een snelle snack tot een 3-gangen menu in een sfeervol restaurant, neem dan eens een kijkje op de website en kom gerust een keer langs in de gastvrije horeca van de Vallei.",
    ],
    links: [{ label: "sportcafe-de-vallei", href: "http://www.sportserviceveenendaal.nl/sportcafe-de-vallei" }],
  },
  {
    id: "gebroeders-van-eijk",
    name: "Gebroeders van Eijk",
    tagline: "Service en Flexibiliteit!",
    logo: logoGebroedersVanEijk,
    paragraphs: [
      "Gebroeders van Eijk is een familiebedrijf dat is opgericht in 1908. Het transportbedrijf is inmiddels uitgegroeid tot 120 medewerkers die gemiddeld 250 zendingen per dag verzorgen.",
      "Dit jaar worden de domino stenen van DDT van de opslaglocatie in Noord-Brabant met de vrachtwagen naar Veenendaal gebracht. De 12 pallets wegen bijna 5,5 ton, dus we zijn heel blij dat dit zware werk door een ervaren bedrijf wordt gedaan.",
      "Heeft u een zending in de Benelux die gedaan moet worden, groot of klein, het familiebedrijf Gebroeders van Eijk staat voor u klaar.",
    ],
    links: [
      { label: "gebroedersvaneijk.nl", href: "http://www.gebroedersvaneijk.nl/" },
      { label: "Facebook", href: "http://www.facebook.com/vaneijktransport" },
    ],
  },
  {
    id: "hevesh5",
    name: "Hevesh5",
    tagline: "De domino kunstenaar die de wereld veroverde!",
    logo: logoHevesh5,
    paragraphs: [
      "Hevesh5, ook wel bekend als Lily Hevesh, is een ware sensatie in de wereld van domino. Ze heeft de harten van miljoenen mensen veroverd met haar indrukwekkende domino creaties die ze deelt op haar populaire YouTube kanaal.",
      "Hevesh5 is meer dan alleen een artiest; ze is een ware inspiratiebron. Ze begon haar domino avontuur op jonge leeftijd en heeft sindsdien een indrukwekkende carrière opgebouwd. Ze heeft samengewerkt met grote namen en heeft deelgenomen aan talloze evenementen over de hele wereld.",
      "We zijn ongelofelijk trots dat Hevesh5 zich in 2022 bij ons evenement heeft aangesloten. Haar ervaring en kennis zijn van onschatbare waarde voor ons team. Ook was ze jurylid in het televisieprogramma Domino Masters.",
    ],
    links: [
      { label: "hevesh5.com", href: "https://www.hevesh5.com/" },
      { label: "YouTube", href: "http://youtube.com/hevesh5" },
      { label: "Instagram", href: "https://www.instagram.com/hevesh5/" },
      { label: "Facebook", href: "https://www.facebook.com/Hevesh5/" },
    ],
  },
];

const Sponsoren = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Sponsoren"
        title={<>WDC 2026 wordt mede mogelijk gemaakt door <span className="text-gradient">onze partners</span></>}
        subtitle="Zonder de steun van deze geweldige bedrijven en partners zou WDC 2026 niet mogelijk zijn."
        image={sponsorsHero}
        crumbs={[{ label: "Home", href: "/" }, { label: "Sponsoren" }]}
      />

      {/* Quick grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {sponsors.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="group p-5 rounded-2xl border border-border bg-surface text-center hover:border-primary/50 transition-colors"
              >
                <div className="h-14 w-full rounded-md bg-foreground/5 grid place-items-center mb-3 grayscale group-hover:grayscale-0 transition-all">
                  <span className="font-display font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    {s.name.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                  </span>
                </div>
                <div className="text-xs font-display font-semibold leading-tight">{s.name}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed sections */}
      <section className="pb-24">
        <div className="container max-w-4xl">
          {sponsors.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className={`scroll-mt-28 py-12 ${i > 0 ? "border-t border-border" : ""}`}
            >
              <div className="mb-6">
                <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-3 block">Sponsor</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">{s.name}</h2>
                <p className="font-display text-lg text-gradient mt-2">{s.tagline}</p>
              </div>

              <div className="space-y-4 mb-6">
                {s.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-muted-foreground leading-relaxed">{p}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {s.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    {l.label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Sponsoren;
