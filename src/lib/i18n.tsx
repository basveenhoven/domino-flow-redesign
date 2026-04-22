import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "NL" | "EN";

const STORAGE_KEY = "wdc.lang";

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TKey) => string;
  /** Returns the current language slice of a multi-language data record. */
  pick: <T>(record: { NL: T; EN: T }) => T;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "NL";
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "EN" || saved === "NL" ? saved : "NL";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    try { window.localStorage.setItem(STORAGE_KEY, l); } catch { /* ignore */ }
  };

  useEffect(() => {
    document.documentElement.lang = lang === "EN" ? "en" : "nl";
  }, [lang]);

  const value = useMemo<I18nContextValue>(() => ({
    lang,
    setLang,
    t: (key) => translations[key]?.[lang] ?? key,
    pick: (record) => record[lang],
  }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};

/* -------------------------------------------------------------------------- */
/*                                 Translations                                */
/* -------------------------------------------------------------------------- */

type TKey = keyof typeof translations;

export const translations = {
  // ---- Navigation ----
  "nav.home": { NL: "Home", EN: "Home" },
  "nav.about": { NL: "Over ons", EN: "About us" },
  "nav.wdc": { NL: "WDC 2026", EN: "WDC 2026" },
  "nav.tickets": { NL: "Reserveren", EN: "Tickets" },
  "nav.sponsors": { NL: "Sponsoren", EN: "Sponsors" },
  "nav.contact": { NL: "Contact", EN: "Contact" },
  "nav.cta": { NL: "Reserveren", EN: "Get tickets" },

  // ---- Hero ----
  "hero.eyebrow": { NL: "WDC 2026 — Bucketlist", EN: "WDC 2026 — Bucketlist" },
  "hero.titleA": { NL: "Domino Art", EN: "Domino Art" },
  "hero.titleB": { NL: "die Verbindt", EN: "that Connects" },
  "hero.body": {
    NL: "Welkom bij het World Domino Collective, het grootste domino evenement van dit decennium, georganiseerd door het Dutch Domino Team. Maak kennis met onze bouwers, ons thema en de geschiedenis van onze organisatie.",
    EN: "Welcome to the World Domino Collective, the biggest domino event of this decade, organized by the Dutch Domino Team. Discover our builders, our theme and the history of our organization.",
  },
  "hero.ctaPrimary": { NL: "Bekijk WDC 2026", EN: "Discover WDC 2026" },
  "hero.ctaSecondary": { NL: "Bekijk de falldown", EN: "Watch the Falldown" },
  "hero.scroll": { NL: "Scroll", EN: "Scroll" },

  // ---- Welkom / Welcome ----
  "welkom.eyebrow": { NL: "Welkom", EN: "Welcome" },
  "welkom.titleA": { NL: "Welkom bij het", EN: "Welcome to the" },
  "welkom.titleB": { NL: "World Domino Collective", EN: "World Domino Collective" },
  "welkom.body": {
    NL: "Welkom bij het World Domino Collective, het grootste domino evenement van dit decennium, georganiseerd door het Dutch Domino Team! Je staat op het punt om een duik te nemen in de wereld van domino. Wil je meer weten over ons evenement, het thema, onze bouwers of de geschiedenis van onze organisatie? Bezoek dan snel onze 'Over Ons' pagina.",
    EN: "Welcome to the World Domino Collective, the biggest domino event of this decade, organized by the Dutch Domino Team! You are about to dive into the world of domino. Would you like to know more about our event, the theme, our builders, or the history of our organization? Then visit our 'About Us' page.",
  },
  "stat.fallenStones": { NL: "Gevallen dominostenen WDC 2025", EN: "Toppled dominoes WDC 2025" },
  "stat.anniversary": { NL: "Dutch Domino Team jubileum", EN: "Dutch Domino Team anniversary" },
  "stat.builders": { NL: "Internationale bouwers", EN: "International builders" },
  "stat.years": { NL: " jaar", EN: " years" },

  // ---- Featured video ----
  "video.eyebrow": { NL: "Highlight", EN: "Highlight" },
  "video.titleA": { NL: "Bekijk hier de falldown van", EN: "Check here the falldown of" },
  "video.titleB": { NL: "WDC 2025!", EN: "WDC 2025!" },
  "video.body": {
    NL: "1.000.000 DOMINOES — WDC 2025 — Milestones. Ter ere van ons 15-jarig jubileum doorbraken we de grens van een miljoen gevallen dominostenen.",
    EN: "1,000,000 DOMINOES — WDC 2025 — Milestones. To celebrate our 15th anniversary we broke through the one-million toppled-dominoes barrier.",
  },

  // ---- Sponsors (homepage block) ----
  "sponsors.eyebrow": { NL: "Partners", EN: "Partners" },
  "sponsors.title": {
    NL: "WDC 2026 wordt mede mogelijk gemaakt door:",
    EN: "WDC 2026 is made possible by:",
  },

  // ---- Feature cards ----
  "cards.eyebrow": { NL: "Ontdek WDC", EN: "Discover WDC" },
  "cards.titleA": { NL: "Maak kennis met", EN: "Meet" },
  "cards.titleB": { NL: "het collectief", EN: "the collective" },
  "cards.intro": {
    NL: "Lees meer over ons team, ontdek alles over WDC 2026 of neem direct contact met ons op.",
    EN: "Read more about our team, discover everything about WDC 2026 or get in touch directly.",
  },
  "card.about.eyebrow": { NL: "Het collectief", EN: "The collective" },
  "card.about.title": { NL: "Over ons", EN: "About us" },
  "card.about.body": {
    NL: "Dutch Domino Team (DDT) is van oorsprong een vriendengroep die door het delen van onze projecten via YouTube met elkaar in contact zijn gekomen.",
    EN: "Dutch Domino Team (DDT) is originally a group of friends who came into contact with each other by sharing our projects via YouTube.",
  },
  "card.about.cta": { NL: "Lees meer", EN: "Read more" },
  "card.wdc.eyebrow": { NL: "Hét evenement", EN: "The event" },
  "card.wdc.title": { NL: "WDC 2026", EN: "WDC 2026" },
  "card.wdc.body": {
    NL: "Komende zomer zet het WDC team honderdduizenden dominostenen neer. Bekijk deze pagina voor meer informatie over het evenement.",
    EN: "This summer the WDC team will set up hundreds of thousands of dominoes. View this page for more information about the event.",
  },
  "card.wdc.cta": { NL: "Meer informatie", EN: "More information" },
  "card.contact.eyebrow": { NL: "Vragen of opmerkingen", EN: "Questions or comments" },
  "card.contact.title": { NL: "Contact", EN: "Contact" },
  "card.contact.body": {
    NL: "Heeft u een vraag of een opmerking voor het WDC team? Neem vrijblijvend contact met ons op, wij staan graag voor u klaar.",
    EN: "Do you have a question or comment for the WDC team? Get in touch with us without any obligations, we would love to be there for you.",
  },
  "card.contact.cta": { NL: "Neem contact op", EN: "Contact us" },

  // ---- Social ----
  "social.eyebrow": { NL: "Social", EN: "Social" },
  "social.title": {
    NL: "Volg ons op Facebook, Instagram en YouTube",
    EN: "Follow us on Facebook, Instagram and YouTube",
  },
  "social.cta": { NL: "Volgen op Instagram", EN: "Follow on Instagram" },

  // ---- Contact form ----
  "contact.eyebrow": { NL: "Contact", EN: "Contact" },
  "contact.titleA": { NL: "Heb je een vraag of", EN: "Do you have a question or" },
  "contact.titleB": { NL: "projectidee?", EN: "project idea?" },
  "contact.body": {
    NL: "Stuur ons een bericht via het formulier hiernaast. Of het nu gaat om een evenement, sponsoring of een persvraag — we horen graag van je.",
    EN: "Send us a message using the form on the right. Whether it's about an event, sponsoring or a press question — we'd love to hear from you.",
  },
  "form.name": { NL: "Naam", EN: "Name" },
  "form.namePlaceholder": { NL: "Je naam", EN: "Your name" },
  "form.email": { NL: "E-mailadres", EN: "E-mail address" },
  "form.emailPlaceholder": { NL: "naam@voorbeeld.nl", EN: "name@example.com" },
  "form.message": { NL: "Vraag of opmerking", EN: "Message" },
  "form.messagePlaceholder": { NL: "Vertel ons waar we je mee kunnen helpen...", EN: "Tell us how we can help..." },
  "form.submit": { NL: "Verzenden", EN: "Send" },
  "form.submitting": { NL: "Versturen...", EN: "Sending..." },
  "form.toastTitle": { NL: "Bedankt! Je bericht is verzonden.", EN: "Thanks! Your message has been sent." },
  "form.toastDesc": { NL: "We nemen zo snel mogelijk contact met je op.", EN: "We'll get back to you as soon as possible." },

  // ---- Footer ----
  "footer.tagline": {
    NL: "Domino Art that Connects. De thuisbasis van het Nederlandse domino-collectief.",
    EN: "Domino Art that Connects. The home of the Dutch domino collective.",
  },
  "footer.nav": { NL: "Navigatie", EN: "Navigation" },
  "footer.follow": { NL: "Volg ons op:", EN: "Follow us on:" },
  "footer.copyright": {
    NL: "Alle rechten voorbehouden.",
    EN: "All rights reserved.",
  },
  "footer.slogan": { NL: "Domino Art that Connects", EN: "Domino Art that Connects" },

  // ---- About page ----
  "about.eyebrow": { NL: "Over ons", EN: "About us" },
  "about.titleA": { NL: "Dutch Domino Team —", EN: "Dutch Domino Team —" },
  "about.titleB": { NL: "de oorsprong", EN: "the origins" },
  "about.subtitle": {
    NL: "Dutch Domino Team (DDT) is van oorsprong een vriendengroep. Het bouwen met dominostenen is al lange tijd een hobby van ons allemaal. Door het delen van onze projecten via YouTube zijn we met elkaar in contact gekomen.",
    EN: "The Dutch Domino Team (DDT) started as a group of friends. Building with dominoes had been a pastime and hobby for all of us. Through sharing our projects on YouTube, we got connected to each other.",
  },
  "about.historyEyebrow": { NL: "Onze geschiedenis", EN: "Our history" },
  "about.historyTitleA": { NL: "Van slaapkamer naar", EN: "From bedroom to" },
  "about.historyTitleB": { NL: "wereldrecord", EN: "world record" },
  "about.historyP1": {
    NL: "In het begin kwamen we bij elkaar op visite en bouwden we in slaap- en huiskamers. Dit hebben we uit kunnen breiden tot een succesvol jaarlijks evenement met elke keer een wisselend thema en hoger stenenaantal.",
    EN: "In the beginning we visited each other and started building in our bed- and living rooms. We've managed to expand this to a successful annual event with a different theme each year and an ever-growing number of dominoes.",
  },
  "about.historyP2": {
    NL: "In de loop der jaren kwamen er naast Nederlandse bouwers ook steeds meer internationale domino fans om ons te helpen. Zo hebben we bouwers uit Duitsland, België, Oostenrijk, Frankrijk, Amerika, Engeland, China en Australië kunnen ontmoeten. De naam voor het evenement hebben we daarom veranderd in",
    EN: "Over the years more and more international domino enthusiasts joined our Dutch builders to help set up the dominoes. We've had the pleasure of working with builders from Germany, Belgium, Austria, France, the United States, the United Kingdom, China and Australia. To reflect this growing collaboration, we renamed the event",
  },
  "about.editions": { NL: "Edities", EN: "Editions" },
  "about.editionsTitle": { NL: "Onze evenementen door de jaren", EN: "Our events through the years" },

  // ---- WDC 2026 page ----
  "wdc.eyebrow": { NL: "WDC 2026 — Bucketlist", EN: "WDC 2026 — Bucketlist" },
  "wdc.titleA": { NL: "WDC 2026 —", EN: "WDC 2026 —" },
  "wdc.titleB": { NL: "Bucketlist", EN: "Bucketlist" },
  "wdc.subtitle": {
    NL: "Dit jaar zet het Dutch Domino Team maar liefst 750.000 dominostenen op tijdens World Domino Collective (WDC) 2026 onder het thema Bucketlist. In de diverse subthema's staan persoonlijke dromen van onze bouwers centraal.",
    EN: "This year the Dutch Domino Team will set up no fewer than 750,000 dominoes during World Domino Collective (WDC) 2026 under the theme Bucketlist. The various sub-themes revolve around the personal dreams of our builders.",
  },
  "wdc.fact.period": { NL: "Bouwperiode", EN: "Build period" },
  "wdc.fact.periodValue": { NL: "7 — 23 augustus 2026", EN: "August 7 — 23, 2026" },
  "wdc.fact.falldown": { NL: "Falldown", EN: "Falldown" },
  "wdc.fact.falldownValue": { NL: "Vrijdag 21 aug, 19:00", EN: "Friday Aug 21, 19:00" },
  "wdc.fact.location": { NL: "Locatie", EN: "Location" },
  "wdc.fact.locationValue": { NL: "Sporthal West, Veenendaal", EN: "Sporthal West, Veenendaal" },
  "wdc.fact.tickets": { NL: "Toegang", EN: "Admission" },
  "wdc.fact.ticketsValue": { NL: "€10 per kaart", EN: "€10 per ticket" },

  "wdc.editionEyebrow": { NL: "Editie 2026", EN: "Edition 2026" },
  "wdc.editionTitleA": { NL: "Persoonlijke dromen,", EN: "Personal dreams," },
  "wdc.editionTitleB": { NL: "in domino", EN: "in domino" },
  "wdc.editionP1": {
    NL: "Deze bucketlist-items worden door middel van gedetailleerde designs omgezet naar een dominovloer met meer dan 750.000 dominostenen.",
    EN: "These bucketlist items are translated through detailed designs into a domino floor with more than 750,000 dominoes.",
  },
  "wdc.editionP2": {
    NL: "Volg ons op onze sociale media voor meer informatie over de projecten en updates!",
    EN: "Follow us on social media for more information about the projects and updates!",
  },

  "wdc.reserveTitle": { NL: "Reserveren", EN: "Reservations" },
  "wdc.reserveP1": {
    NL: "Op dit moment is de kaartverkoop nog niet gestart.",
    EN: "Ticket sales have not yet started.",
  },
  "wdc.reserveP2A": {
    NL: "Wees er snel bij — er zijn beperkte toegangstickets te verkrijgen, op = op. De bestelde kaarten dienen bij de ingang contant of met pin te worden afgerekend en kosten",
    EN: "Be quick — there are only a limited number of tickets available, once they're gone they're gone. Tickets must be paid at the entrance in cash or by card and cost",
  },
  "wdc.reserveP2B": { NL: "€10 per stuk", EN: "€10 each" },
  "wdc.reserveCta": { NL: "Naar reserveringsformulier", EN: "Go to ticket form" },

  "wdc.programEyebrow": { NL: "Programma", EN: "Program" },
  "wdc.programTitle": { NL: "Programma van de falldowndag", EN: "Falldown day program" },
  "wdc.programDate": { NL: "Vrijdag 21 augustus 2026", EN: "Friday August 21, 2026" },
  "wdc.program.1.title": { NL: "Deuren open voor publiek", EN: "Doors open to the public" },
  "wdc.program.1.body": { NL: "Welkom in Sporthal West.", EN: "Welcome to Sporthal West." },
  "wdc.program.2.title": { NL: "Deuren sluiten en aanvang show", EN: "Doors close and the show begins" },
  "wdc.program.2.body": { NL: "De show begint — neem alvast je plek in.", EN: "The show begins — take your seat." },
  "wdc.program.3.title": { NL: "Einde show", EN: "Show ends" },
  "wdc.program.3.body": {
    NL: "Aansluitend napraten met de bouwers in het sportcafé met live muziek. Hier wordt ook het aantal gevallen stenen onthuld.",
    EN: "Afterwards chat with the builders in the sports café with live music. The number of toppled stones will also be revealed here.",
  },
  "wdc.program.4.title": { NL: "Einde van het evenement", EN: "End of the event" },
  "wdc.program.4.body": { NL: "Bedankt voor je komst!", EN: "Thank you for coming!" },

  "wdc.rulesEyebrow": { NL: "Huisregels", EN: "House rules" },
  "wdc.rulesTitle": { NL: "Tijdens de falldown", EN: "During the falldown" },
  "wdc.rulesIntro": {
    NL: "Om alles zo goed mogelijk te laten verlopen hebben wij een aantal huishoudelijke regels opgesteld:",
    EN: "To ensure everything goes as smoothly as possible, we have established a few house rules:",
  },
  "wdc.rule.1": {
    NL: "Betreed alsjeblieft niet onze domino-vloer.",
    EN: "Please do not enter our domino floor.",
  },
  "wdc.rule.2": {
    NL: "Zet alsjeblieft je mobiele telefoon op trilstand of helemaal uit.",
    EN: "Please set your mobile phone to vibrate or turn it off completely.",
  },
  "wdc.rule.3": { NL: "Filmen is verboden.", EN: "Filming is not allowed." },
  "wdc.rule.4": { NL: "Foto's maken mag, maar zonder flits.", EN: "You may take photos, but without flash." },
  "wdc.rule.5": {
    NL: "Probeer niet te schreeuwen tijdens het vallen, zodat je het heerlijke geluid van de domino-stenen kunt horen.",
    EN: "Please try not to scream during the fall, so you can hear the delightful sound of the domino stones.",
  },

  "wdc.transportEyebrow": { NL: "Bereikbaarheid", EN: "Getting there" },
  "wdc.transportTitle": { NL: "Welk vervoer kun je gebruiken?", EN: "Which transport can you use?" },
  "wdc.transport.car": { NL: "Auto", EN: "By Car" },
  "wdc.transport.carBody": {
    NL: "Je kan parkeren bij de Park & Ride (P&R) bij station Veenendaal West, let op: het aantal parkeerplaatsen is beperkt. Alternatief kun je parkeren bij de voetbalvelden aan de Verlengde Sportlaan. Vanaf daar is het ongeveer 10 minuten lopen naar Sporthal Veenendaal West.",
    EN: "You can park at the Park & Ride (P&R) near Veenendaal West station, but please note that parking spaces are limited. Alternatively you can park at the football fields on Verlengde Sportlaan. From there, it's about a 10-minute walk to Sporthal Veenendaal West.",
  },
  "wdc.transport.bus": { NL: "Bus", EN: "By Bus" },
  "wdc.transport.busBody": {
    NL: "De dichtstbijzijnde bushalte is Veenendaal West. Vanaf hier is het ongeveer 2 minuten lopen naar de sporthal.",
    EN: "The nearest bus stop is Veenendaal West. From there, it's about a 2-minute walk to the sports hall.",
  },
  "wdc.transport.train": { NL: "Trein", EN: "By Train" },
  "wdc.transport.trainBody": {
    NL: "Het dichtstbijzijnde station is Veenendaal West. Vanaf hier is het ongeveer 2 minuten lopen naar de sporthal.",
    EN: "The nearest train station is Veenendaal West. From there, it's about a 2-minute walk to the sports hall.",
  },

  // ---- Reserveren / Tickets page ----
  "tickets.eyebrow": { NL: "Reserveren", EN: "Tickets" },
  "tickets.titleA": { NL: "Reserveer je", EN: "Reserve your" },
  "tickets.titleB": { NL: "WDC 2026", EN: "WDC 2026" },
  "tickets.titleC": { NL: "kaarten", EN: "tickets" },
  "tickets.subtitle": {
    NL: "Beperkte toegangstickets beschikbaar, op = op. €10 per kaart, contant of pin bij de ingang.",
    EN: "Limited number of tickets available, once they're gone they're gone. €10 per ticket, cash or card at the entrance.",
  },
  "tickets.noticeBold": {
    NL: "Op dit moment is de kaartverkoop nog niet gestart.",
    EN: "Ticket sales have not yet started.",
  },
  "tickets.noticeBody": {
    NL: " Wees er snel bij want er zijn beperkte toegangstickets te verkrijgen, op = op. De bestelde kaarten dienen bij de ingang contant of met pin te worden afgerekend en kosten",
    EN: " Be quick because there are only a limited number of tickets available, once they're gone they're gone. Tickets must be paid at the entrance in cash or by card and cost",
  },
  "tickets.formTitle": { NL: "Reserveringsformulier", EN: "Reservation form" },
  "tickets.perTicket": { NL: "€10 per kaart", EN: "€10 per ticket" },
  "tickets.firstName": { NL: "Voornaam", EN: "First name" },
  "tickets.lastName": { NL: "Achternaam", EN: "Last name" },
  "tickets.phone": { NL: "Telefoonnummer", EN: "Phone number" },
  "tickets.amount": { NL: "Aantal kaarten", EN: "Number of tickets" },
  "tickets.totalLabel": { NL: "Totaal te betalen", EN: "Total to pay" },
  "tickets.atEntrance": { NL: "contant of pin bij ingang", EN: "cash or card at the entrance" },
  "tickets.submit": { NL: "Reservering versturen", EN: "Submit reservation" },
  "tickets.submitting": { NL: "Versturen...", EN: "Sending..." },
  "tickets.toastTitle": { NL: "Reservering ontvangen!", EN: "Reservation received!" },
  "tickets.toastDesc": {
    NL: "We sturen binnen 24 uur een bevestigingsmail.",
    EN: "We'll send a confirmation email within 24 hours.",
  },
  "tickets.honeypot": {
    NL: "Indien je een mens bent, laat het verborgen veld leeg.",
    EN: "If you are human, leave the hidden field empty.",
  },

  // ---- Sponsoren page ----
  "sponsorenPage.eyebrow": { NL: "Sponsoren", EN: "Sponsors" },
  "sponsorenPage.titleA": { NL: "WDC 2026 wordt mede mogelijk gemaakt door", EN: "WDC 2026 is made possible by" },
  "sponsorenPage.titleB": { NL: "onze partners", EN: "our partners" },
  "sponsorenPage.subtitle": {
    NL: "Zonder de steun van deze geweldige bedrijven en partners zou WDC 2026 niet mogelijk zijn.",
    EN: "Without the support of these wonderful companies and partners, WDC 2026 would not be possible.",
  },
  "sponsorenPage.label": { NL: "Sponsor", EN: "Sponsor" },

  // ---- Contact page ----
  "contactPage.eyebrow": { NL: "Contact", EN: "Contact" },
  "contactPage.titleA": { NL: "Laten we", EN: "Let's get" },
  "contactPage.titleB": { NL: "in gesprek", EN: "in touch" },
  "contactPage.titleC": { NL: "gaan", EN: "" },
  "contactPage.subtitle": {
    NL: "Of het nu om een evenement, een sponsoring of een persvraag gaat — we horen graag van je.",
    EN: "Whether it's about an event, sponsoring or a press question — we'd love to hear from you.",
  },
  "contactPage.followEyebrow": { NL: "Volg ons", EN: "Follow us" },
  "contactPage.followTitle": {
    NL: "Volg ons op Facebook, Instagram en YouTube",
    EN: "Follow us on Facebook, Instagram and YouTube",
  },
  "contactPage.email": { NL: "E-mail", EN: "Email" },
  "contactPage.phone": { NL: "Telefoon", EN: "Phone" },
  "contactPage.location": { NL: "Locatie", EN: "Location" },
} as const;
