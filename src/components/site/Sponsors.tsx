// Real WDC 2026 sponsors (from worlddominocollective.nl)
const sponsors = [
  { name: "Don Domino", tagline: "Eindeloos bouwplezier met domino!" },
  { name: "Sport service Veenendaal", tagline: "Sport is meer dan bewegen!" },
  { name: "Horeca de Vallei", tagline: "Een sportieve ontmoetingsplek!" },
  { name: "Gebroeders van Eijk", tagline: "Service en Flexibiliteit!" },
  { name: "Hevesh5", tagline: "De domino kunstenaar die de wereld veroverde!" },
];

export const Sponsors = () => {
  return (
    <section id="sponsoren" className="relative py-24 lg:py-32 bg-surface-light text-surface-light-foreground">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Partners</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            WDC 2026 wordt mede mogelijk gemaakt door:
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {sponsors.map((s, i) => (
            <div
              key={s.name}
              className="group flex flex-col items-center text-center p-8 rounded-2xl bg-background/5 border border-surface-light-foreground/10 hover:border-primary/40 hover:bg-background/10 transition-all duration-500 magnetic-card"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {/* TODO: replace placeholder logo block with actual sponsor logos */}
              <div className="h-16 w-full rounded-md bg-surface-light-foreground/5 grid place-items-center mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                <span className="font-display font-bold text-lg text-surface-light-foreground/50 group-hover:text-primary transition-colors">
                  {s.name.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                </span>
              </div>
              <h3 className="font-display font-semibold text-sm leading-tight">{s.name}</h3>
              <p className="text-xs text-surface-light-foreground/60 mt-1.5">{s.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
