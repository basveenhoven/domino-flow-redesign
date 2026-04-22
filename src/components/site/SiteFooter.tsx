import { Facebook, Instagram, Youtube } from "lucide-react";

const footerNav = [
  { label: "Home", href: "#home" },
  { label: "Over ons", href: "#over-ons" },
  { label: "WDC 2026", href: "#wdc-2026" },
  { label: "Reserveren", href: "#reserveren" },
  { label: "Sponsoren", href: "#sponsoren" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export const SiteFooter = () => {
  return (
    <footer className="relative bg-background border-t border-border">
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <a href="#home" className="flex items-center gap-2.5 mb-4">
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-primary to-accent-blue grid place-items-center">
                <span className="font-display font-bold text-primary-foreground">W</span>
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold tracking-tight">World Domino</div>
                <div className="font-display text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Collective</div>
              </div>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Domino Art that Connects. De thuisbasis van het Nederlandse domino-collectief.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase mb-4">Navigatie</h4>
            <ul className="space-y-2.5">
              {footerNav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase mb-4">Volg ons op:</h4>
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="h-11 w-11 grid place-items-center rounded-full border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hairline mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} World Domino Collective. Alle rechten voorbehouden.</p>
          <p className="font-display tracking-[0.2em] uppercase">Domino Art that Connects</p>
        </div>
      </div>
    </footer>
  );
};
