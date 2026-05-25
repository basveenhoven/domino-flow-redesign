import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

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
  return (
    <section className="dark relative flex items-center overflow-hidden bg-background text-foreground min-h-[640px] lg:min-h-[760px] pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Full-bleed image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={image}
          alt=""
          width={1920}
          height={1280}
          className="w-full h-full object-cover animate-ken-burns"
        />
        {/* Strong left-to-right gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        {/* Bottom fade into the page */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      <div className="container relative">
        {crumbs && crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 mb-10"
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
