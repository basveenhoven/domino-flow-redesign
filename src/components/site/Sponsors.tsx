// TODO: Replace placeholder sponsor logos with actual sponsor brand assets
const sponsors = [
  { name: "Domino Day Productions", tagline: "Hoofdpartner WDC 2026" },
  { name: "Bouwgroep Nederland", tagline: "Locatiepartner" },
  { name: "Studio Aurora", tagline: "Media & broadcasting" },
  { name: "Logistiek Plus", tagline: "Materialen & transport" },
  { name: "Festival Catering Co.", tagline: "Hospitality partner" },
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
              {/* Placeholder logo block */}
              <div className="h-16 w-full rounded-md bg-surface-light-foreground/5 grid place-items-center mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                <span className="font-display font-bold text-lg text-surface-light-foreground/50 group-hover:text-primary transition-colors">
                  {s.name.split(" ").map((w) => w[0]).join("")}
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
