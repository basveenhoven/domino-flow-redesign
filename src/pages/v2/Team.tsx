import { Globe2, Users2, Sparkles } from "lucide-react";
import { PageLayout } from "@/components/site/v2/PageLayout";
import { PageHero } from "@/components/site/v2/PageHero";
import teamHero from "@/assets/about-team.jpg";

const highlights = [
  {
    Icon: Users2,
    label: "30+ leden",
    body: "Een internationaal team dat samen het grootste domino-collectief vormt.",
  },
  {
    Icon: Globe2,
    label: "Wereldwijd",
    body: "Bouwers uit verschillende landen vliegen naar Nederland voor onze evenementen.",
  },
  {
    Icon: Sparkles,
    label: "15+ jaar ervaring",
    body: "Van eerste opzetjes in slaapkamers tot wereldrecordpogingen in sporthallen.",
  },
];

const Team = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Team"
        title={<>Het <span className="text-gradient">Dutch Domino Team</span></>}
        subtitle="Wij organiseren jaarlijks meerdere evenementen en workshops. Het team bestaat tegenwoordig uit meer dan 30 leden vanuit de hele wereld, met een gedeelde passie: het bouwen met dominostenen."
        image={teamHero}
        crumbs={[{ label: "Home", href: "/v2" }, { label: "Team" }]}
      />

      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {highlights.map((h) => (
              <div key={h.label} className="magnetic-card p-8 rounded-2xl border border-border bg-surface text-center">
                <div className="h-12 w-12 mx-auto rounded-xl bg-primary/15 grid place-items-center text-primary mb-5">
                  <h.Icon className="h-5 w-5" />
                </div>
                <div className="font-display text-xl font-bold mb-2">{h.label}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-surface">
        <div className="container max-w-3xl">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Onze oorsprong</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Van slaapkamer tot sporthal
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              De oorsprong van het Dutch Domino Team (DDT) ligt bij een groep vrienden. Via YouTube
              deelden we onze gezamenlijke passie voor het opzetten van dominostenen. Aanvankelijk
              bouwden we in elkaars huis- en slaapkamers.
            </p>
            <p>
              Dit werd na een aantal jaar te klein en toen zijn we gaan bouwen in een sporthal. Later
              is dit uitgegroeid tot een jaarlijks terugkerend evenement. Met ieder jaar een nieuw
              thema, een groter stenenaantal en een team dat tegenwoordig bestaat uit meer dan 30 leden
              vanuit de hele wereld.
            </p>
            <p>
              Domino is een bijzondere en opvallende manier om een boodschap over te brengen. Wij
              kunnen erg veel mogelijk maken met domino — altijd met respect voor de wensen en huisstijl
              van onze opdrachtgevers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Een internationaal collectief
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Het volledige bouwersoverzicht met portretten en specialisaties wordt regelmatig bijgewerkt
            op{" "}
            <a href="https://www.dutchdominoteam.nl/over-ons/" target="_blank" rel="noreferrer" className="text-primary hover:underline">
              dutchdominoteam.nl/over-ons
            </a>.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Team;
