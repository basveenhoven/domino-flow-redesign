import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { useI18n } from "@/lib/i18n";
import heroImg from "@/assets/page-wdc-hero.jpg";
import wdcEventImg from "@/assets/wdc-event.jpg";
import ticketsImg from "@/assets/page-tickets-hero.jpg";
import sponsorsImg from "@/assets/page-sponsors-hero.jpg";

const WdcHome = () => {
  const { pick } = useI18n();

  const cards = [
    {
      href: "/wdc/2026",
      image: wdcEventImg,
      eyebrow: pick({ NL: "Editie 2026", EN: "Edition 2026" }),
      title: pick({ NL: "De volgende stap", EN: "The next step" }),
      body: pick({
        NL: "Alles over het thema Bucketlist, de locatie en het programma van WDC 2026.",
        EN: "Everything about the Bucketlist theme, location and program of WDC 2026.",
      }),
      cta: pick({ NL: "Bekijk WDC 2026", EN: "View WDC 2026" }),
    },
    {
      href: "/wdc/reserveren",
      image: ticketsImg,
      eyebrow: pick({ NL: "Tickets", EN: "Tickets" }),
      title: pick({ NL: "Reserveer je plek", EN: "Reserve your spot" }),
      body: pick({
        NL: "Bemachtig je tickets voor de grote falldown ceremonie op 21 augustus 2026.",
        EN: "Get your tickets for the grand falldown ceremony on August 21, 2026.",
      }),
      cta: pick({ NL: "Direct reserveren", EN: "Reserve now" }),
    },
    {
      href: "/wdc/sponsoren",
      image: sponsorsImg,
      eyebrow: pick({ NL: "Partnerships", EN: "Partnerships" }),
      title: pick({ NL: "Bouw mee als partner", EN: "Become a partner" }),
      body: pick({
        NL: "Verbind je merk aan het grootste domino-evenement van dit decennium.",
        EN: "Connect your brand to the biggest domino event of this decade.",
      }),
      cta: pick({ NL: "Partner worden", EN: "Become a partner" }),
    },
  ];

  return (
    <div className="dark bg-background text-foreground">
      <PageLayout>
        <PageHero
          eyebrow={pick({ NL: "World Domino Collective", EN: "World Domino Collective" })}
          title={
            <>
              {pick({ NL: "Ons jaarlijkse", EN: "Our annual" })}{" "}
              <span className="text-primary">
                {pick({ NL: "domino-evenement.", EN: "domino event." })}
              </span>
            </>
          }
          subtitle={pick({
            NL: "Eén keer per jaar organiseert het Dutch Domino Team het World Domino Collective: een groot evenement waar bouwers, publiek en partners samenkomen rond de kunst van domino.",
            EN: "Once a year, the Dutch Domino Team organises the World Domino Collective: a large-scale event where builders, audience and partners come together around the art of domino.",
          })}
          image={heroImg}
          crumbs={[
            { label: pick({ NL: "Home", EN: "Home" }), href: "/" },
            { label: "WDC" },
          ]}
        />

        {/* Hub cards */}
        <section className="container py-20 lg:py-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card) => (
              <Link
                key={card.href}
                to={card.href}
                className="group relative h-[480px] lg:h-[520px] overflow-hidden rounded-3xl border border-border flex flex-col justify-end p-8 transition-all duration-500 hover:border-primary/50"
              >
                <img
                  src={card.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />

                <div className="relative z-10">
                  <span className="text-primary font-bold text-xs tracking-widest uppercase mb-3 block">
                    {card.eyebrow}
                  </span>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-foreground/70 mb-6 line-clamp-2">{card.body}</p>
                  <div className="inline-flex items-center text-foreground font-semibold group-hover:text-primary transition-colors">
                    {card.cta}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Sub-footer CTA */}
        <section className="container pb-24 lg:pb-32">
          <div className="bg-surface rounded-[2.5rem] p-10 md:p-16 text-center border border-border">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-5">
              {pick({
                NL: "Nog vragen over het WDC?",
                EN: "Still have questions about WDC?",
              })}
            </h2>
            <p className="text-foreground/70 mb-10 max-w-xl mx-auto">
              {pick({
                NL: "Ons team staat klaar om al je vragen over deelname, sponsoring of bezoeken te beantwoorden.",
                EN: "Our team is ready to answer any questions about participation, sponsoring or visiting.",
              })}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full transition-all"
              >
                {pick({ NL: "Neem contact op", EN: "Get in touch" })}
              </Link>
              <Link
                to="/wdc/2026"
                className="px-8 py-4 bg-foreground/5 hover:bg-foreground/10 text-foreground font-bold rounded-full border border-border transition-all"
              >
                {pick({ NL: "Meer over WDC 2026", EN: "More about WDC 2026" })}
              </Link>
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default WdcHome;
