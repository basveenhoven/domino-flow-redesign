import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const socials = [
  { Icon: Facebook, href: "https://www.facebook.com/dutchdominoteam", label: "Facebook" },
  { Icon: Youtube, href: "https://www.youtube.com/c/DutchDominoTeam", label: "YouTube" },
  { Icon: Instagram, href: "https://www.instagram.com/dutch_domino_team/", label: "Instagram" },
];

export const SiteFooter = () => {
  const { t } = useI18n();
  const footerNav = [
    { label: "Home", href: "/" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Diensten", href: "/diensten" },
    { label: "Projecten", href: "/projecten" },
    { label: "Team", href: "/team" },
    { label: "WDC 2026", href: "/wdc/2026" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative bg-background border-t border-border">
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link to="/" className="font-display font-bold text-lg tracking-tight hover:text-primary transition-colors mb-4 inline-block">
              Dutch Domino Team
            </Link>

            <p className="text-sm text-muted-foreground max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase mb-4">{t("footer.nav")}</h4>
            <ul className="space-y-2.5">
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
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase mb-4">{t("footer.follow")}</h4>
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
          <p>© {new Date().getFullYear()} Dutch Domino Team. {t("footer.copyright")}</p>
          <p className="font-display tracking-[0.2em] uppercase">{t("footer.slogan")}</p>
        </div>
      </div>
    </footer>
  );
};
