import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

const YOUTUBE_ID = "-YMnZdORE24";

export const Hero = () => {
  const { t } = useI18n();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* YouTube background — sized larger than viewport to hide controls and letterboxing */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full pointer-events-none">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&disablekb=1&playlist=${YOUTUBE_ID}`}
            title="Hero background video"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0" style={{ backgroundColor: "hsl(240 8% 6% / 0.3)" }} />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, hsl(240 8% 6%) 0%, hsl(240 8% 6% / 0.4) 50%, transparent 100%)",
          }}
        />
      </div>

      <div className="container relative z-10 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">{t("hero.eyebrow")}</span>
          </div>

          <h1
            className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8 animate-fade-up text-white"
            style={{ animationDelay: "0.2s" }}
          >
            {t("hero.titleA")}<br />
            <span className="text-gradient">{t("hero.titleB")}</span>
          </h1>

          <p
            className="text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed mb-10 animate-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            {t("hero.body")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-7 h-12 text-base group">
              <Link to="/wdc/2026">
                {t("hero.ctaPrimary")}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-7 h-12 text-base border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm"
            >
              <a href="#video">
                <Play className="mr-1 h-4 w-4 fill-current" />
                {t("hero.ctaSecondary")}
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/60 z-10">
        <span className="text-[10px] tracking-[0.3em] uppercase">{t("hero.scroll")}</span>
        <div className="relative h-10 w-px bg-border overflow-hidden">
          <div className="absolute top-0 left-0 h-3 w-px bg-primary animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
};
