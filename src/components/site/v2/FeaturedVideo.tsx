import { useState } from "react";
import { Play } from "lucide-react";

const VIDEO_ID = "QV38Xlbl40k";
const VIDEO_TITLE = "1.000.000 DOMINOES - WDC 2025 - MILESTONES";

export const FeaturedVideo = () => {
  const [activated, setActivated] = useState(false);

  return (
    <section id="video" className="relative py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">Falldown 2025</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight max-w-3xl">
            Bekijk hier de falldown van <span className="text-gradient">WDC 2025 — Milestones</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-2xl">
            Tijdens WDC 2025 brak het Dutch Domino Team de mijlpaal van 1.000.000 gevallen dominostenen,
            ter ere van ons 15-jarig jubileum onder het thema Milestones.
          </p>
          <div className="hairline w-32 mt-8" />
        </div>

        <div className="relative max-w-6xl mx-auto group">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/30 via-accent-blue/30 to-primary/30 opacity-60 blur-2xl group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/60 bg-surface">
            {activated ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                title={VIDEO_TITLE}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setActivated(true)}
                aria-label={`Speel video af: ${VIDEO_TITLE}`}
                className="group/play absolute inset-0 w-full h-full block"
              >
                <img
                  src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt={VIDEO_TITLE}
                  loading="lazy"
                  decoding="async"
                  width={1280}
                  height={720}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 grid place-items-center bg-gradient-to-t from-background/60 via-transparent to-transparent">
                  <div className="h-20 w-20 rounded-full bg-primary/90 grid place-items-center backdrop-blur-md transition-transform duration-300 group-hover/play:scale-110">
                    <Play className="h-7 w-7 fill-current text-primary-foreground ml-1" />
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
