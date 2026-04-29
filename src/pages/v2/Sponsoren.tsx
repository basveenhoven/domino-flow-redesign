import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { PageLayout } from "@/components/site/v2/PageLayout";
import { PageHero } from "@/components/site/v2/PageHero";
import sponsorsHero from "@/assets/page-sponsors-hero.jpg";
import logoDonDomino from "@/assets/sponsors/don-domino.png";
import logoSportservice from "@/assets/sponsors/sportservice-veenendaal.png";
import logoHorecaDeVallei from "@/assets/sponsors/horeca-de-vallei.png";
import logoGebroedersVanEijk from "@/assets/sponsors/gebroeders-van-eijk.png";
import logoHevesh5 from "@/assets/sponsors/hevesh5.png";
import { useI18n } from "@/lib/i18n";

const Sponsoren = () => {
  const { hash } = useLocation();
  const { t, pick } = useI18n();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const id = hash.replace("#", "");
    const t = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
    return () => window.clearTimeout(t);
  }, [hash]);

  const sponsors = [
    {
      id: "dondomino",
      name: "Don Domino",
      tagline: pick({ NL: "Eindeloos bouwplezier met domino!", EN: "Endless building fun with dominoes!" }),
      logo: logoDonDomino,
      paragraphs: pick({
        NL: [
          "De beste kwaliteit domino stenen gewoon geproduceerd in Europa. Hoewel Don Domino een relatief nieuwe producent is met de eerste productie die in 2020 op de markt kwam, staat het nu bij velen al op de eerste plaats wanneer er wordt gedacht over het kopen van nieuwe domino stenen.",
          "Daarom zijn wij ook super trots dat we Don Domino als hoofdsponsor van het WDC 2026 evenement mogen verwelkomen. Niet alleen krijgen we tienduizenden kersverse dominostenen van super goede kwaliteit te leen, maar ook zijn wij als domino professionals in een vroeg stadium van de ontwikkeling van de stenen gevraagd naar onze mening en feedback op de kwaliteit.",
          "Inmiddels biedt Don Domino al meer dan 30 verschillende kleuren aan en blijven ons verbazen door alsmaar nieuwe kleuren aan te bieden. Op de website van Don Domino staat DDT als partner vermeld en kun je onze onbevooroordeelde mening horen over de kwaliteit van de stenen.",
          "Bent u op zoek naar kwalitatief zeer goede stenen voor een goede prijs dan bent u bij Don Domino aan het juiste adres. Of het nu voor uzelf of voor uw familie is, neem eens een kijkje op de website en de social media kanalen van Don Domino.",
        ],
        EN: [
          "The best quality domino stones produced right in Europe. Although Don Domino is a relatively new producer with the first production hitting the market in 2020, it is already the first choice for many when thinking about buying new domino stones.",
          "That's why we are super proud to welcome Don Domino as the main sponsor of the WDC 2026 event. Not only are we being lent tens of thousands of brand new, high-quality stones, but we, as domino professionals, were also asked for our opinion and feedback on the quality at an early stage of the stones' development.",
          "Don Domino already offers more than 30 different colors and continues to amaze us by constantly offering new colors. On the Don Domino website, DDT is listed as a partner and you can hear our unbiased opinion about the quality of the stones.",
          "If you are looking for very good quality stones for a good price, then Don Domino is the right place for you. Whether it's for yourself or for your family, take a look at the website and the social media channels of Don Domino.",
        ],
      }),
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
      tagline: pick({ NL: "Sport is meer dan bewegen!", EN: "Sport is more than movement!" }),
      logo: logoSportservice,
      paragraphs: pick({
        NL: [
          "Of je nu gezellig een dagje wilt gaan zwemmen met je hele familie of mee wilt doen aan een georganiseerde toertocht, Sport service Veenendaal is van alle markten thuis. Met het ultieme doel om iedereen van jong tot oud te laten sporten en bewegen is het aanbod en de mogelijkheden dan ook eindeloos.",
          "Sinds 2019 is DDT te gast in een van de locaties van Sportservice Veenendaal. Dit jaar zijn we te gast in Sporthal West. Tijdens onze rustdag zullen we zeker een duik nemen in het zwembad.",
          "Om dit jaar honderdduizenden stenen te kunnen zetten wordt de vloer van de sporthal super schoon opgeleverd zodat we geen korreltje zand onder de stenen hebben wat het geheel vroegtijdig kan laten vallen. Sport service Veenendaal is super gastvrij en denkt met ons mee om elk jaar het evenement nog grootser te maken.",
        ],
        EN: [
          "Whether you want to have a fun day out swimming with your whole family or want to participate in an organized tour, Sport service Veenendaal has something for everyone. With the ultimate goal of getting everyone from young to old to play sports and exercise, the offer and possibilities are endless.",
          "Since 2019, DDT has been a guest at one of the Sportservice Veenendaal locations. This year, we are hosted in Sporthal West. On our rest day, we will definitely take a dip in the swimming pool.",
          "To set hundreds of thousands of stones this year, the floor of the sports hall is delivered super clean so we don't have a grain of sand under the stones that could make the whole thing fall prematurely. Sport service Veenendaal is super hospitable and works with us to make the event bigger every year.",
        ],
      }),
      links: [
        { label: "sportserviceveenendaal.nl", href: "http://www.sportserviceveenendaal.nl/" },
        { label: "Facebook", href: "http://www.facebook.com/sportveenendaal" },
        { label: "Instagram", href: "http://www.instagram.com/sportservice_veenendaal" },
      ],
    },
    {
      id: "horeca-de-vallei",
      name: "Horeca de Vallei",
      tagline: pick({ NL: "Een sportieve ontmoetingsplek!", EN: "A sporty meeting place!" }),
      logo: logoHorecaDeVallei,
      paragraphs: pick({
        NL: [
          "Horeca de Vallei heeft zich afgelopen jaar geprofileerd meer te zijn dan alleen een sportcafé voor koffie en een snelle snack. In 2020 is het helemaal opgeknapt en heeft een sfeervolle uitstraling gekregen.",
          "Elk jaar hebben wij weer het geluk dat we in Horeca de Vallei mogen dineren. De kok doet elke avond weer zijn uiterste best om een gezonde en voedzame maaltijd neer te zetten voor wat lijkt een uitgehongerde groep bouwers.",
          "Bent u benieuwd naar het ruime aanbod van een kop koffie of een snelle snack tot een 3-gangen menu in een sfeervol restaurant, neem dan eens een kijkje op de website en kom gerust een keer langs in de gastvrije horeca van de Vallei.",
        ],
        EN: [
          "Horeca de Vallei has profiled itself in the past year to be more than just a sports café for coffee and a quick snack. In 2020, it was completely refurbished and given a warm atmosphere.",
          "Every year we are fortunate to dine in Horeca de Vallei. The chef does his utmost every evening to provide a healthy and nutritious meal for what seems like a famished group of builders.",
          "If you are curious about the wide range from a cup of coffee or a quick snack to a three-course menu in a charming restaurant, take a look at the website and feel free to drop by in the hospitable catering of De Vallei.",
        ],
      }),
      links: [{ label: "sportcafe-de-vallei", href: "http://www.sportserviceveenendaal.nl/sportcafe-de-vallei" }],
    },
    {
      id: "gebroeders-van-eijk",
      name: "Gebroeders van Eijk",
      tagline: pick({ NL: "Service en Flexibiliteit!", EN: "Service and Flexibility!" }),
      logo: logoGebroedersVanEijk,
      paragraphs: pick({
        NL: [
          "Gebroeders van Eijk is een familiebedrijf dat is opgericht in 1908. Het transportbedrijf is inmiddels uitgegroeid tot 120 medewerkers die gemiddeld 250 zendingen per dag verzorgen.",
          "Dit jaar worden de domino stenen van DDT van de opslaglocatie in Noord-Brabant met de vrachtwagen naar Veenendaal gebracht. De 12 pallets wegen bijna 5,5 ton, dus we zijn heel blij dat dit zware werk door een ervaren bedrijf wordt gedaan.",
          "Heeft u een zending in de Benelux die gedaan moet worden, groot of klein, het familiebedrijf Gebroeders van Eijk staat voor u klaar.",
        ],
        EN: [
          "Gebroeders van Eijk is a family business that was founded in 1908. The transport company has now grown to 120 employees who manage an average of 250 shipments per day.",
          "This year, DDT's domino stones are being transported from the storage location in North Brabant to Veenendaal by truck. The 12 pallets weigh almost 5.5 tons, so we are very pleased that this heavy work is being done by an experienced company.",
          "If you have a shipment in the Benelux that needs to be done, big or small, the family business Gebroeders van Eijk is ready for you.",
        ],
      }),
      links: [
        { label: "gebroedersvaneijk.nl", href: "http://www.gebroedersvaneijk.nl/" },
        { label: "Facebook", href: "http://www.facebook.com/vaneijktransport" },
      ],
    },
    {
      id: "hevesh5",
      name: "Hevesh5",
      tagline: pick({
        NL: "De domino kunstenaar die de wereld veroverde!",
        EN: "The domino artist who conquered the world!",
      }),
      logo: logoHevesh5,
      paragraphs: pick({
        NL: [
          "Hevesh5, ook wel bekend als Lily Hevesh, is een ware sensatie in de wereld van domino. Ze heeft de harten van miljoenen mensen veroverd met haar indrukwekkende domino creaties die ze deelt op haar populaire YouTube kanaal.",
          "Hevesh5 is meer dan alleen een artiest; ze is een ware inspiratiebron. Ze begon haar domino avontuur op jonge leeftijd en heeft sindsdien een indrukwekkende carrière opgebouwd.",
          "We zijn ongelofelijk trots dat Hevesh5 zich in 2022 bij ons evenement heeft aangesloten. Haar ervaring en kennis zijn van onschatbare waarde voor ons team. Ook was ze jurylid in het televisieprogramma Domino Masters.",
        ],
        EN: [
          "Hevesh5, also known as Lily Hevesh, is a true sensation in the world of dominoes. She has won the hearts of millions with her impressive domino creations that she shares on her popular YouTube channel.",
          "Hevesh5 is more than just an artist; she is a true inspiration. She started her domino journey at a young age and has since built an impressive career.",
          "We are incredibly proud that Hevesh5 joined our event in 2022. Her experience and knowledge are invaluable to our team. She was also a judge on the TV show Domino Masters.",
        ],
      }),
      links: [
        { label: "hevesh5.com", href: "https://www.hevesh5.com/" },
        { label: "YouTube", href: "http://youtube.com/hevesh5" },
        { label: "Instagram", href: "https://www.instagram.com/hevesh5/" },
        { label: "Facebook", href: "https://www.facebook.com/Hevesh5/" },
      ],
    },
  ];

  return (
    <PageLayout>
      <PageHero
        eyebrow={t("sponsorenPage.eyebrow")}
        title={<>{t("sponsorenPage.titleA")} <span className="text-gradient">{t("sponsorenPage.titleB")}</span></>}
        subtitle={t("sponsorenPage.subtitle")}
        image={sponsorsHero}
        crumbs={[{ label: t("nav.home"), href: "/" }, { label: t("sponsorenPage.eyebrow") }]}
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
                <div className="h-20 w-full grid place-items-center mb-3">
                  <img
                    src={s.logo}
                    alt={`${s.name} logo`}
                    loading="lazy"
                    className="max-h-16 w-auto object-contain"
                  />
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
              <div className="grid md:grid-cols-[240px_1fr] gap-10 items-start">
                <div className="rounded-2xl bg-surface border border-border p-8 grid place-items-center min-h-[200px]">
                  <img
                    src={s.logo}
                    alt={`${s.name} logo`}
                    loading="lazy"
                    className="max-h-40 w-auto object-contain"
                  />
                </div>

                <div>
                  <div className="mb-6">
                    <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-3 block">{t("sponsorenPage.label")}</span>
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
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Sponsoren;
