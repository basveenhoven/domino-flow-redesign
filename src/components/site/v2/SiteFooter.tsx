import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

const socials = [
  { Icon: Facebook, href: "https://www.facebook.com/dutchdominoteam", label: "Facebook" },
  { Icon: Youtube, href: "https://www.youtube.com/c/DutchDominoTeam", label: "YouTube" },
  { Icon: Instagram, href: "https://www.instagram.com/dutch_domino_team/", label: "Instagram" },
];

const footerNav = [
  { label: "Home", href: "/v2" },
  { label: "Over ons", href: "/v2/over-ons" },
  { label: "WDC 2026", href: "/v2/wdc-2026" },
  { label: "Reserveren", href: "/v2/reserveren" },
  { label: "Sponsoren", href: "/v2/sponsoren" },
  { label: "Diensten (DDT)", href: "/v2/diensten" },
  { label: "Projecten (DDT)", href: "/v2/projecten" },
  { label: "Bouwersdagen", href: "/v2/bouwersdagen" },
  { label: "Team", href: "/v2/team" },
  { label: "Contact", href: "/v2/contact" },
];

export const SiteFooter = () => {
  return (
    <footer className="relative bg-background border-t border-border">
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link to="/v2" className="font-display font-bold text-lg tracking-tight hover:text-primary transition-colors mb-4 inline-block">
              World Domino Collective
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Een initiatief van het Dutch Domino Team — Zeg het met Domino.
            </p>
            <div className="mt-6 space-y-1 text-xs text-muted-foreground">
              <p>Vereniging Dutch Domino Team</p>
              <p>Violenstraat 3, 5721 EP Asten</p>
              <p>KvK 60890657 · NL54 RABO 0184 8471 33</p>
              <p>info@dutchdominoteam.nl</p>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase mb-4">Navigatie</h4>
            <ul className="space-y-2.5 grid grid-cols-2 gap-x-4">
              {footerNav.map((n) => (
                <li key={n.href}>
                  <Link to={n.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase mb-4">Volg ons</h4>
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
          <p>© {new Date().getFullYear()} World Domino Collective. Een initiatief van het Dutch Domino Team.</p>
          <p className="font-display tracking-[0.2em] uppercase">Zeg het met Domino</p>
        </div>
      </div>
    </footer>
  );
};
