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
  /** legacy full-bleed layout (used by pages that still need it) */
  variant?: "split" | "full";
}

export const PageHero = ({ eyebrow, title, subtitle, image, crumbs, variant = "split" }: PageHeroProps) => {
  if (variant === "full") {
    return (
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden min-h-[70vh] lg:min-h-[80vh] flex items-end">
        <div className="absolute inset-0 -z-10">
          <img
            src={image}
            alt=""
            width={1920}
            height={1280}
            className="w-full h-full object-cover opacity-90 animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/20 to-transparent" />
        </div>

        <div className="container relative">
          {crumbs && crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
              {crumbs.map((c, i) => (
                <span key={i} className="flex items-center gap-2">
                  {c.href ? (
                    <Link to={c.href} className="hover:text-primary transition-colors">{c.label}</Link>
                  ) : (
                    <span className="text-foreground">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
                </span>
              ))}
            </nav>
          )}

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm mb-6 animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">{eyebrow}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight max-w-4xl animate-fade-up pb-2" style={{ animationDelay: "0.1s" }}>
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 max-w-2xl text-base lg:text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              {subtitle}
            </p>
          )}
        </div>
      </section>
    );
  }

  // Split variant — clean light layout with photo card on the right
  return (
    <section className="relative pt-28 lg:pt-36 pb-12 lg:pb-20 overflow-hidden">
      {/* subtle background accent */}
      <div className="absolute inset-x-0 top-0 h-[420px] -z-10 opacity-60"
        style={{ background: "radial-gradient(60% 60% at 80% 0%, hsl(var(--primary) / 0.10), transparent 70%)" }}
      />

      <div className="container">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {c.href ? (
                  <Link to={c.href} className="hover:text-primary transition-colors">{c.label}</Link>
                ) : (
                  <span className="text-foreground">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </nav>
        )}

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 mb-6 animate-fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">{eyebrow}</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight animate-fade-up pb-2" style={{ animationDelay: "0.1s" }}>
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 max-w-xl text-base lg:text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
                {subtitle}
              </p>
            )}
          </div>
          <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-3xl overflow-hidden border border-border shadow-xl animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <img src={image} alt="" loading="eager" className="w-full h-full object-cover" />
            <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
