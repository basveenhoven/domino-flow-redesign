import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dominoes.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Spectaculaire domino-opstelling tijdens een falldown"
          width={1920}
          height={1280}
          className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/70" />
      </div>

      {/* Glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] -z-10 opacity-50 animate-glow-pulse" style={{ background: "var(--gradient-glow)" }} />

      <div className="container relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/90">WDC 2026</span>
          </div>

          <h1
            className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Domino Art<br />
            <span className="text-gradient">that Connects</span>
          </h1>

          <p
            className="text-base sm:text-lg lg:text-xl text-foreground/75 max-w-2xl leading-relaxed mb-10 animate-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            World Domino Collective brengt de meest creatieve domino-kunstenaars samen. Ontdek spectaculaire
            opstellingen, evenementen en workshops — een wereld waar duizenden stenen tot leven komen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-7 h-12 text-base group">
              <a href="#wdc-2026">
                Bekijk WDC 2026
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
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
