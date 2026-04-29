import { Globe2, Users2, Sparkles, Info } from "lucide-react";
import { PageLayout } from "@/components/site/v2/PageLayout";
import { PageHero } from "@/components/site/v2/PageHero";
import { scrapedImages } from "@/lib/scrapedImages";
import { teamMembers } from "@/lib/teamMembers";

const highlights = [
  { Icon: Users2, label: "30+ leden", body: "Een internationaal team dat samen het grootste domino-collectief vormt." },
  { Icon: Globe2, label: "Wereldwijd", body: "Bouwers uit Duitsland, België, VS, Engeland, China en Australië." },
  { Icon: Sparkles, label: "15+ jaar ervaring", body: "Van eerste opzetjes in slaapkamers tot wereldrecordpogingen in sporthallen." },
];

const Team = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Team"
        title={<>Het <span className="text-gradient">Dutch Domino Team</span></>}
        subtitle="Wij organiseren jaarlijks meerdere evenementen en workshops. Het team bestaat tegenwoordig uit meer dan 30 leden vanuit de hele wereld, met een gedeelde passie: het bouwen met dominostenen."
        image={scrapedImages.ddtTeam2019}
        crumbs={[{ label: "Home", href: "/v2" }, { label: "Team" }]}
      />

      {/* Highlights */}
      <section className="py-16">
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

      {/* Member grid */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">De bouwers</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">Maak kennis met het team</h2>
            <p className="text-muted-foreground mt-4">
              Een selectie van onze vaste bouwers, gastartiesten en internationale collega's.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {teamMembers.map((m) => (
              <article key={m.slug} className="magnetic-card flex flex-col rounded-2xl border border-border bg-background overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-bold leading-tight">{m.name}</h3>
                  <div className="text-xs text-primary font-medium tracking-wide uppercase mt-1">{m.role}</div>
                  <div className="text-xs text-muted-foreground mt-1 mb-3">{m.country}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{m.bio}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-12 flex gap-3 p-5 rounded-2xl border border-border bg-background">
            <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Het Dutch Domino Team telt meer dan 30 actieve bouwers. De volledige bouwerslijst met
              portretten en specialisaties wordt regelmatig bijgewerkt op{" "}
              <a href="https://www.dutchdominoteam.nl/over-ons/" target="_blank" rel="noreferrer" className="text-primary hover:underline">
                dutchdominoteam.nl/over-ons
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="py-20 lg:py-28">
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
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Team;
