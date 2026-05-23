import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Mail, Sparkles, Users, Wrench } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { heroImages } from "@/data/ddt";
import bouwersdagAction from "@/assets/bouwersdag-action.jpg";
import bouwersdagTeam from "@/assets/bouwersdag-team.jpg";
import bouwersdagSkills from "@/assets/bouwersdag-skills.jpg";

const voorwaarden = [
  "Je bent minimaal 15 jaar oud",
  "Je hebt ervaring met verschillende domino technieken",
  "Je kunt goed samenwerken in teamverband",
  "Je kunt je motivatie toelichten waarom je een aanwinst bent",
];

const onderdelen = [
  {
    icon: Wrench,
    title: "Bouwopdrachten",
    text: "Diverse opdrachten zoals 3D structuren en het bouwen van dominovelden om je vaardigheden in kaart te brengen.",
  },
  {
    icon: Users,
    title: "Kennismaking",
    text: "We stellen vragen om te kijken of je binnen de groep past en waar we jou nog in kunnen ondersteunen.",
  },
  {
    icon: Sparkles,
    title: "Ontspannen sfeer",
    text: "In een gezellige, informele setting werk je samen met één van onze ervaren leden — een dag van ongeveer twee uur.",
  },
];

const Bouwersdagen = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Bouwersdagen"
        title={<>Kom jij <span className="text-gradient">ons team versterken</span>?</>}
        subtitle="Wil jij bouwer zijn bij het grootste domino team ter wereld? Tijdens onze bouwersdagen leer je het Dutch Domino Team kennen en steek je zelf de handen uit de mouwen."
        image={heroImages.ddtIntro}
        crumbs={[{ label: "Home", href: "/" }, { label: "Bouwersdagen" }]}
      />

      {/* Intro pitch */}
      <section className="py-20 lg:py-28">
        <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img
              src={bouwersdagTeam}
              alt="Dutch Domino Team bouwers in actie"
              className="w-full aspect-[4/5] object-cover rounded-3xl shadow-elegant"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-primary text-primary-foreground rounded-2xl p-5 shadow-glow w-48">
              <div className="text-3xl font-display font-bold">100k+</div>
              <div className="text-xs uppercase tracking-wider opacity-90">stenen per project</div>
            </div>
          </div>
          <div>
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-3 block">
              Word bouwer
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Bouw mee aan de <span className="text-gradient">grootste projecten</span>
            </h2>
            <p className="text-muted-foreground mb-5 leading-relaxed">
              Bij ons jaarlijks evenement bouwen we de grootste en meest schitterende
              domino projecten. Om al deze stenen neer te zetten, hebben we veel bouwers
              nodig.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ben jij creatief, heb je geduld en vind je het geweldig om duizenden
              dominostenen neer te zetten? Meld je dan aan voor een bouwersdag en word
              deel van ons team.
            </p>
          </div>
        </div>
      </section>

      {/* Voorwaarden */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-3 block">
              Voorwaarden
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
              Voorwaarden voor <span className="text-gradient">aanmelden</span>
            </h2>
          </div>
          <ul className="grid md:grid-cols-2 gap-4">
            {voorwaarden.map((v) => (
              <li
                key={v}
                className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-background"
              >
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <span className="text-base">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Aanmelden */}
      <section className="py-20 lg:py-28">
        <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-3 block">
              Aanmelden
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Stuur ons een <span className="text-gradient">mail</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Stuur een mail naar{" "}
              <a
                href="mailto:bouwersdagen@gmail.com"
                className="text-primary font-medium underline-offset-4 hover:underline"
              >
                bouwersdagen@gmail.com
              </a>{" "}
              en vermeld hierin:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Je naam",
                "Eventueel je YouTube kanaal",
                "In een paar zinnen wat je motivatie is om bij DDT te komen bouwen en waarom wij voor jou zouden moeten kiezen",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">{line}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We nemen contact met je op om een bouwersdag in te plannen. We kijken
              er naar uit om jou te ontmoeten!
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 rounded-full">
              <a href="mailto:bouwersdagen@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Aanmelden via mail
              </a>
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src={bouwersdagAction}
              alt="Bouwer aan het werk tijdens een bouwersdag"
              className="w-full aspect-[4/3] object-cover rounded-3xl shadow-elegant"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Wat houdt een bouwersdag in - parallax style */}
      <section
        className="relative py-32 lg:py-40 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bouwersdagSkills})` }}
      >
        <div className="absolute inset-0 bg-background/85" />
        <div className="container relative z-10">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-3 block">
              Wat houdt het in?
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Wat is een <span className="text-gradient">bouwersdag</span> precies?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Op een bouwersdag gaan we samen ontdekken wat jouw sterke punten zijn en
              waar we je nog in kunnen trainen. In een gezellige en ontspannen sfeer
              ga je met één van onze leden aan de slag. Zo'n dag duurt ongeveer twee
              uur en is verdeeld in verschillende onderdelen.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {onderdelen.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="p-7 rounded-2xl border border-border bg-background/95 backdrop-blur"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tot snel CTA */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-glow p-12 md:p-20 text-center">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/80 mb-3 block">
              Tot snel!
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-primary-foreground mb-6">
              Klaar om mee te bouwen?
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-10 text-lg">
              Stuur ons een mail en wie weet sta jij binnenkort naast onze bouwers
              aan een van de grootste domino projecten ter wereld.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 rounded-full"
              >
                <a href="mailto:bouwersdagen@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> bouwersdagen@gmail.com
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link to="/contact">
                  Contactformulier <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Bouwersdagen;
