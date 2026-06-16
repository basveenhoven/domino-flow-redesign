import { Play } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const FeaturedVideo = () => {
  const { t } = useI18n();
  return (
    <section id="video" className="relative py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">{t("video.eyebrow")}</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight max-w-3xl">
            {t("video.titleA")} <span className="text-gradient">{t("video.titleB")}</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-2xl">
            {t("video.body")}
          </p>
          <div className="hairline w-32 mt-8" />
        </div>

        <div className="relative max-w-6xl mx-auto group">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/30 via-accent-blue/30 to-primary/30 opacity-60 blur-2xl group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/60 bg-surface">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/-YMnZdORE24"
              title="WDC 2025 - Domino Falldown"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-0 grid place-items-center bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-0">
              <div className="h-20 w-20 rounded-full bg-primary/90 grid place-items-center backdrop-blur-md">
                <Play className="h-7 w-7 fill-current text-primary-foreground ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
