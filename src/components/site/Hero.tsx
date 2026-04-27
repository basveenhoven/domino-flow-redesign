import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import heroPoster from "@/assets/hero-dominoes.jpg";
import { useI18n } from "@/lib/i18n";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { t } = useI18n();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const ensurePlayback = async () => {
      try {
        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;
        await video.play();
      } catch {
        // Silent fallback to poster when browser blocks autoplay
      }
    };

    void ensurePlayback();

    return () => {
      video.pause();
    };
  }, []);

  const handleVideoReady = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playbackRate = 0.9;
    void video.play().catch(() => undefined);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={heroVideo.url}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          aria-hidden="true"
          onLoadedData={handleVideoReady}
          className="h-full w-full object-cover"
        />
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
            className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            {t("hero.titleA")}<br />
            <span className="text-gradient">{t("hero.titleB")}</span>
          </h1>

          <p
            className="text-base sm:text-lg lg:text-xl text-foreground/80 max-w-2xl leading-relaxed mb-10 animate-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            {t("hero.body")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-7 h-12 text-base group">
              <Link to="/wdc-2026">
                {t("hero.ctaPrimary")}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-7 h-12 text-base border-foreground/20 bg-foreground/5 hover:bg-foreground/10 text-foreground backdrop-blur-sm"
            >
              <a href="#video">
                <Play className="mr-1 h-4 w-4 fill-current" />
                {t("hero.ctaSecondary")}
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground z-10">
        <span className="text-[10px] tracking-[0.3em] uppercase">{t("hero.scroll")}</span>
        <div className="relative h-10 w-px bg-border overflow-hidden">
          <div className="absolute top-0 left-0 h-3 w-px bg-primary animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
};
