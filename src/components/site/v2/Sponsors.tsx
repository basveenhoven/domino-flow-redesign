import { Link } from "react-router-dom";
import logoDonDomino from "@/assets/sponsors/don-domino.png";
import logoSportservice from "@/assets/sponsors/sportservice-veenendaal.png";
import logoHorecaDeVallei from "@/assets/sponsors/horeca-de-vallei.png";
import logoGebroedersVanEijk from "@/assets/sponsors/gebroeders-van-eijk.png";
import logoHevesh5 from "@/assets/sponsors/hevesh5.png";
import { useI18n } from "@/lib/i18n";

export const Sponsors = () => {
  const { t, pick } = useI18n();

  const sponsors = [
    {
      id: "dondomino",
      name: "Don Domino",
      tagline: pick({ NL: "Eindeloos bouwplezier met domino!", EN: "Endless building fun with dominoes!" }),
      logo: logoDonDomino,
    },
    {
      id: "sportservice-veenendaal",
      name: "Sport service Veenendaal",
      tagline: pick({ NL: "Sport is meer dan bewegen!", EN: "Sport is more than movement!" }),
      logo: logoSportservice,
    },
    {
      id: "horeca-de-vallei",
      name: "Horeca de Vallei",
      tagline: pick({ NL: "Een sportieve ontmoetingsplek!", EN: "A sporty meeting place!" }),
      logo: logoHorecaDeVallei,
    },
    {
      id: "gebroeders-van-eijk",
      name: "Gebroeders van Eijk",
      tagline: pick({ NL: "Service en Flexibiliteit!", EN: "Service and Flexibility!" }),
      logo: logoGebroedersVanEijk,
    },
    {
      id: "hevesh5",
      name: "Hevesh5",
      tagline: pick({
        NL: "De domino kunstenaar die de wereld veroverde!",
        EN: "The domino artist who conquered the world!",
      }),
      logo: logoHevesh5,
    },
  ];

  return (
    <section id="sponsoren" className="relative py-24 lg:py-32 bg-surface-light text-surface-light-foreground">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">{t("sponsors.eyebrow")}</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            {t("sponsors.title")}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {sponsors.map((s, i) => (
            <Link
              key={s.id}
              to={`/sponsoren#${s.id}`}
              aria-label={`${s.name}`}
              className="group flex flex-col items-center text-center p-8 rounded-2xl bg-background/5 border border-surface-light-foreground/10 hover:border-primary/40 hover:bg-background/10 transition-all duration-500 magnetic-card"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="h-24 w-full grid place-items-center mb-5">
                <img
                  src={s.logo}
                  alt={`${s.name} logo`}
                  loading="lazy"
                  className="max-h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display font-semibold text-sm leading-tight group-hover:text-primary transition-colors">{s.name}</h3>
              <p className="text-xs text-surface-light-foreground/60 mt-1.5">{s.tagline}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
