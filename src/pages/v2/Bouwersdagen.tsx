import { Hammer, MessageCircle, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/site/v2/PageLayout";
import { PageHero } from "@/components/site/v2/PageHero";
import { scrapedImages } from "@/lib/scrapedImages";
const bouwersHero = scrapedImages.ddtBuild2;

const stappen = [
  {
    title: "Aanmelden",
    body:
      "Stuur ons een bericht via het contactformulier. Vermeld kort wie je bent, je leeftijd en waarom je graag bouwer wilt worden bij DDT.",
  },
  {
    title: "Bouwersdag inplannen",
    body:
      "We nemen contact met je op om een Bouwersdag in te plannen. Een Bouwersdag duurt ongeveer 2 uur en is verdeeld in verschillende onderdelen.",
  },
  {
    title: "Vaardigheden beoordelen",
    body:
      "We beginnen met het beoordelen van je vaardigheden door middel van diverse bouwopdrachten — van 3D-structuren tot het bouwen van dominovelden.",
  },
  {
    title: "Kennismaking",
    body:
      "Daarnaast stellen we vragen om te kijken of je binnen de groep past en om in te schatten waar we jou in kunnen ondersteunen. Gezelligheid staat centraal.",
  },
];

const voorwaarden = [
  "Creatief en geduldig",
  "Plezier in het zetten van duizenden dominostenen",
  "Beschikbaar voor minimaal het jaarlijkse WDC-evenement",
  "Bereid samen te werken in een internationaal team",
];

const Bouwersdagen = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Bouwersdagen"
        title={<>Word <span className="text-gradient">DDT-bouwer</span></>}
        subtitle="Wil jij bouwer zijn bij het grootste domino team ter wereld? Dan zijn wij op zoek naar jou! Tijdens onze Bouwersdagen ontdekken we samen wat jouw sterke punten zijn."
        image={bouwersHero}
        crumbs={[{ label: "Home", href: "/v2" }, { label: "Bouwersdagen" }]}
      />

      {/* Intro */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Hammer className="h-10 w-10 mx-auto text-primary mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Bouw mee aan het grootste domino-evenement ter wereld
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Bij ons jaarlijks evenement bouwen we de grootste en meest schitterende domino-projecten.
              Om al deze stenen neer te zetten hebben we veel bouwers nodig. Ben jij creatief, heb je
              geduld en vind je het geweldig om duizenden dominostenen neer te zetten? Meld je dan aan
              voor een Bouwersdag en word deel van ons team.
            </p>
          </div>
        </div>
      </section>

      {/* Voorwaarden */}
      <section className="pb-20 lg:pb-28">
        <div className="container">
          <div className="max-w-3xl mx-auto rounded-3xl border border-border bg-surface p-8 lg:p-10">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Voorwaarden</span>
            <h3 className="font-display text-2xl font-bold mb-6">Voor het aanmelden</h3>
            <ul className="space-y-3">
              {voorwaarden.map((v) => (
                <li key={v} className="flex items-start gap-3 text-sm text-foreground/85">
                  <span className="h-6 w-6 rounded-full bg-primary/15 grid place-items-center text-primary shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Hoe werkt een Bouwersdag */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Hoe werkt het?</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">Zo verloopt een Bouwersdag</h2>
          </div>
          <div className="space-y-4">
            {stappen.map((s, i) => (
              <div key={s.title} className="grid grid-cols-[60px_1fr] gap-4 items-start p-6 rounded-2xl border border-border bg-background">
                <div className="font-display text-3xl font-bold text-gradient">{i + 1}</div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-10">
            Bij ons staat niet alleen het neerzetten van een record centraal — de gezelligheid is net zo belangrijk.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden border border-primary/30" style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--accent-blue) / 0.1))" }}>
            <MessageCircle className="h-10 w-10 mx-auto text-primary mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Klaar om je aan te melden?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We kijken erg uit naar je aanmelding. Stuur ons een bericht via het contactformulier en we nemen contact met je op.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 h-12 group">
              <Link to="/v2/contact">
                Aanmelden via contact
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Bouwersdagen;
