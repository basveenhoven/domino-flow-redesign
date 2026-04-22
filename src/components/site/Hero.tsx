import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import heroPoster from "@/assets/hero-dominoes.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background autoplay video */}
      <div className="absolute inset-0 -z-10">
        <video
          src={heroVideo.url}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        {/* Subtiele overlays: video blijft duidelijk zichtbaar, tekst leesbaar */}
        <div className="absolute inset-0 bg-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="container relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/90">WDC 2026 — Bucketlist</span>
          </div>

          <h1
            className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Domino Art<br />
            <span className="text-gradient">that Connects</span>
          </h1>

          <p
            className="text-base sm:text-lg lg:text-xl text-foreground/80 max-w-2xl leading-relaxed mb-10 animate-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            Welkom bij het World Domino Collective, het grootste domino evenement van dit decennium,
            georganiseerd door het Dutch Domino Team. Maak kennis met onze bouwers, ons thema en de
            geschiedenis van onze organisatie.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-7 h-12 text-base group">
              <Link to="/wdc-2026">
                Bekijk WDC 2026
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
                Watch the Falldown
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="relative h-10 w-px bg-border overflow-hidden">
          <div className="absolute top-0 left-0 h-3 w-px bg-primary animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
};
