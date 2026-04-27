import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import { ThemeToggle } from "@/components/site/ThemeToggle";

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useI18n();
  const { pathname } = useLocation();

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/over-ons" },
    { label: t("nav.wdc"), href: "/wdc-2026" },
    { label: t("nav.tickets"), href: "/reserveren" },
    { label: t("nav.sponsors"), href: "/sponsoren" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isHome && "dark text-foreground",
        scrolled || !isHome
          ? isHome
            ? "py-3 border-b border-border/60 backdrop-blur-xl"
            : "glass py-3"
          : "bg-transparent py-5",
      )}
      style={isHome && (scrolled || !isHome) ? { backgroundColor: "rgba(14, 14, 17, 0.7)" } : isHome ? undefined : undefined}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-sm sm:text-base tracking-tight hover:text-primary transition-colors">
          World Domino Collective
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn("nav-link", active && "text-primary")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle className="hidden sm:inline-flex" />
          <div className="flex items-center gap-0.5 text-xs font-medium tracking-wider">
            <button
              type="button"
              onClick={() => setLang("NL")}
              aria-pressed={lang === "NL"}
              className={cn(
                "px-2.5 py-2 md:px-2 md:py-1 rounded-md transition-colors min-w-[36px]",
                lang === "NL"
                  ? "text-primary bg-primary/10 md:bg-transparent"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              NL
            </button>
            <span className="text-muted-foreground hidden md:inline">/</span>
            <button
              type="button"
              onClick={() => setLang("EN")}
              aria-pressed={lang === "EN"}
              className={cn(
                "px-2.5 py-2 md:px-2 md:py-1 rounded-md transition-colors min-w-[36px]",
                lang === "EN"
                  ? "text-primary bg-primary/10 md:bg-transparent"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              EN
            </button>
          </div>

          <Button asChild size="sm" className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5">
            <Link to="/reserveren">{t("nav.cta")}</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden p-2 -mr-2 text-foreground" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-surface border-border">
              <div className="flex flex-col gap-1 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="py-3 px-2 text-lg font-display font-medium border-b border-border/40 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="flex items-center gap-2 mt-6 mb-2 px-2 text-xs uppercase tracking-wider text-muted-foreground">
                  Language
                </div>
                <div className="flex items-center gap-2 px-2">
                  <button
                    type="button"
                    onClick={() => setLang("NL")}
                    className={cn(
                      "flex-1 py-2 rounded-full text-sm font-medium border transition-colors",
                      lang === "NL"
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border text-muted-foreground hover:text-foreground"
                    )}
                  >
                    Nederlands
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang("EN")}
                    className={cn(
                      "flex-1 py-2 rounded-full text-sm font-medium border transition-colors",
                      lang === "EN"
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border text-muted-foreground hover:text-foreground"
                    )}
                  >
                    English
                  </button>
                </div>

                <div className="flex items-center justify-between mt-6 px-2 py-3 border-t border-border/40">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Theme</span>
                  <ThemeToggle />
                </div>

                <Button asChild className="mt-4 bg-primary hover:bg-primary/90 rounded-full">
                  <Link to="/reserveren" onClick={() => setOpen(false)}>{t("nav.cta")}</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
