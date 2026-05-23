import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { heroImages } from "@/data/ddt";

const benefits = [
  "Bouwen met ervaren collega's onder professionele begeleiding",
  "Toegang tot duizenden dominostenen en alle materialen",
  "Onderdeel worden van een hecht, internationaal collectief",
  "Een unieke kans om mee te bouwen aan grote events zoals WDC",
];

const Bouwersdagen = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Bouwersdagen"
        title={<>Word onderdeel van <span className="text-gradient">het collectief</span></>}
        subtitle="Tijdens onze bouwersdagen kun je vrijblijvend kennismaken met het Dutch Domino Team en zelf de handen uit de mouwen steken."
        image={heroImages.ddtIntro}
        crumbs={[{ label: "Home", href: "/" }, { label: "Bouwersdagen" }]}
      />

      <section className="py-20 lg:py-28">
        <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-3 block">
              Meedoen
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Wat is een <span className="text-gradient">bouwersdag</span>?
            </h2>
            <p className="text-muted-foreground mb-5 leading-relaxed">
              Een bouwersdag is hét moment waarop we als collectief samenkomen om te bouwen,
              ideeën uit te wisselen en nieuwe bouwers te verwelkomen. Of je nu beginner bent
              of al jarenlang domineert — iedereen is welkom.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Aanmelden voor een bouwersdag kan eenvoudig via het contactformulier.
              Vertel kort iets over jezelf en je ervaring met domino — we nemen daarna contact
              met je op met de eerstvolgende beschikbare datum.
            </p>

            <Button asChild className="bg-primary hover:bg-primary/90 rounded-full mt-8">
              <Link to="/contact">
                Aanmelden <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <ul className="space-y-4">
            {benefits.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 p-5 rounded-2xl border border-border bg-surface"
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageLayout>
  );
};

export default Bouwersdagen;
