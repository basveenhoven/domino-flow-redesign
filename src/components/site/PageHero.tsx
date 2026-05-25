import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  crumbs?: Crumb[];
}

export const PageHero = ({ eyebrow, title, subtitle, image, crumbs }: PageHeroProps) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        // Move image at ~40% of scroll speed for a subtle parallax
        el.style.transform = `translate3d(0, ${y * 0.4}px, 0)`;

        frame = 0;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="dark relative flex items-center overflow-hidden text-foreground min-h-[400px] lg:min-h-[480px] pt-24 pb-16 lg:pt-32 lg:pb-20">
      {/* Full-bleed parallax image */}
      <div className="absolute inset-0 overflow-hidden">

        <img
          ref={imageRef}
          src={image}
          alt=""
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-[120%] object-cover will-change-transform"
        />
        {/* Vignette overlays — dark in both themes so text stays legible on the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
      </div>


      <div className="container relative">
        {crumbs && crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 mb-6"
          >
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {c.href ? (
                  <Link to={c.href} className="hover:text-primary transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-foreground/70">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <span className="text-foreground/20">/</span>}
              </span>
            ))}
          </nav>
        )}

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-10 animate-fade-up">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-black tracking-[0.2em] uppercase text-primary">
            {eyebrow}
          </span>
        </div>

        <h1
          className="font-display text-5xl sm:text-6xl lg:text-8xl font-black leading-[1.05] tracking-tight max-w-5xl animate-fade-up pb-2"
          style={{ animationDelay: "0.1s" }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="mt-8 max-w-2xl text-lg lg:text-2xl text-foreground/70 leading-relaxed font-light animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};
