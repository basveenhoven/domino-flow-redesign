import { Users, Briefcase, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/site/v2/PageLayout";
import { PageHero } from "@/components/site/v2/PageHero";
import { scrapedImages } from "@/lib/scrapedImages";
const dienstenHero = scrapedImages.ddtMakeAWish;

const services = [
  {
    Icon: Users,
    title: "Workshops",
    body:
      "Tijdens een interactieve workshop gaan cursisten onder professionele begeleiding van het Dutch Domino Team zelf aan de slag. Ze leren naast de basistechnieken ook geavanceerde bouwmethoden. Wij geven workshops met verschillende doeleinden, zoals teambuilding en bedrijfsuitjes. Ook staan wij klaar voor scholen en verenigingen. Een workshop kan op locatie naar keuze gegeven worden — het vloeroppervlak is leidraad voor het aantal cursisten. Ook internationale workshops behoren tot de mogelijkheden.",
  },
  {
    Icon: Briefcase,
    title: "Opdrachten",
    body:
      "Bij een opdracht wordt de visie van de klant besproken en wordt er gekeken welke mogelijkheden er zijn. Dit geeft een duidelijk beeld van het eindproduct, de benodigde tijd en de kosten die dit met zich meebrengt. Neem vrijblijvend contact op met onze creatieve teamleden. Een unieke uitdaging in het verleden was de organisatie van een wereldrecordpoging boekendomino in Arnhem, waar wij leiding gaven aan een team van 20 vrijwilligers.",
  },
  {
    Icon: Sparkles,
    title: "Maatwerk",
    body:
      "Is het lastig om een specifieke opdracht te formuleren? Geen zorgen — wij zijn gespecialiseerd in maatwerk. Via intensief overleg brengen we de visie in kaart en presenteren we verschillende opties. Wij zorgen ervoor dat wij voldoende materiaal meenemen om ter plekke aanpassingen of toevoegingen te kunnen doen op het bestaande plan.",
  },
];

const Diensten = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Diensten"
        title={<>Zeg het met <span className="text-gradient">domino</span></>}
        subtitle="Domino is een bijzondere en opvallende manier om een boodschap over te brengen. Wij kunnen erg veel mogelijk maken — van workshops tot grootschalige bedrijfsopdrachten en maatwerk."
        image={dienstenHero}
        crumbs={[{ label: "Home", href: "/v2" }, { label: "Diensten" }]}
      />

      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s) => (
              <div key={s.title} className="magnetic-card p-8 rounded-2xl border border-border bg-surface flex flex-col">
                <div className="h-12 w-12 rounded-xl bg-primary/15 grid place-items-center text-primary mb-6">
                  <s.Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight mb-4">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="max-w-4xl mx-auto rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden border border-primary/30" style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--accent-blue) / 0.1))" }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Benieuwd naar de mogelijkheden?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Door onze flexibele en creatieve houding zijn wij in staat uw idee vorm te geven en mee te
              bewegen met veranderingen. Door jarenlange ervaring kunnen wij hulp bieden bij projecten van klein tot groot.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 h-12 group">
              <Link to="/v2/contact">
                Neem contact op
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Diensten;
