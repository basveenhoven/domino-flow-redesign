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
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={image}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-50 animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      </div>

      <div className="container relative">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {c.href ? (
                  <Link to={c.href} className="hover:text-primary transition-colors">
                    {c.label}
                  </Link>
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
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/90">{eyebrow}</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1] tracking-tight max-w-4xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
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
};
