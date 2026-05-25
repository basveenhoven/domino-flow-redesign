import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import { ThemeToggle } from "@/components/site/ThemeToggle";

const ddtNav = [
  { label: "Home", href: "/" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Diensten", href: "/diensten" },
  { label: "Projecten", href: "/projecten" },
  { label: "Bouwersdagen", href: "/bouwersdagen" },
];

const wdcNav = [
  { label: "WDC Home", href: "/wdc", desc: "Overzicht van het evenement" },
  { label: "WDC 2026", href: "/wdc/2026", desc: "Bucketlist — programma & info" },
  { label: "Reserveren", href: "/wdc/reserveren", desc: "Tickets voor de falldown" },
  { label: "Sponsoren", href: "/wdc/sponsoren", desc: "Partners van WDC 2026" },
];

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [wdcOpen, setWdcOpen] = useState(false);
  const { lang, setLang } = useI18n();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDdtHome = pathname === "/";
  const isWdcHome = pathname === "/wdc";
  const isHomeStyle = isDdtHome || isWdcHome;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isHomeStyle
          ? "home-header dark text-foreground py-3 border-b border-border/60"
          : cn(scrolled ? "glass py-3" : "bg-transparent py-5"),
      )}
      style={isHomeStyle ? { backgroundColor: "rgb(14, 14, 17)" } : undefined}
    >
      <div className="container flex items-center justify-between">
        <Link
          to="/"
          className={cn(
            "font-display font-bold text-sm sm:text-base tracking-tight hover:text-primary transition-colors",
            isHomeStyle && "text-white",
          )}
        >
          Dutch Domino Team
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {ddtNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn("nav-link", active && "text-primary hover:text-primary")}
              >
                {item.label}
              </Link>
            );
          })}

          <div
            className="relative"
            onMouseEnter={() => setWdcOpen(true)}
            onMouseLeave={() => setWdcOpen(false)}
          >
            <button
              type="button"
              className={cn(
                "nav-link inline-flex items-center gap-1",
                pathname.startsWith("/wdc") && "text-primary",
              )}
            >
              WDC
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {wdcOpen && (
              <div className="absolute right-0 top-full pt-3 w-72">
                <div className="rounded-2xl border border-border bg-background shadow-xl p-2">
                  {wdcNav.map((d) => (
                    <Link
                      key={d.href}
                      to={d.href}
                      className="block px-4 py-3 rounded-xl hover:bg-surface transition-colors"
                    >
                      <div className="font-display text-sm font-semibold">{d.label}</div>
                      <div className="text-xs text-muted-foreground">{d.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className={cn("nav-link", pathname === "/contact" && "text-primary hover:text-primary")}
          >
            Contact
          </Link>
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
                  : "text-muted-foreground hover:text-foreground",
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
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              EN
            </button>
          </div>

          <Button
            asChild
            size="sm"
            className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5"
          >
            <Link to="/contact">Contact</Link>
          </Button>

          <Sheet open={open} onOpenChange={(o) => { setOpen(o); if (!o) setWdcOpen(false); }}>
            <SheetTrigger asChild>
              <button
                className={cn("lg:hidden p-2 -mr-2 text-foreground", isHomeStyle && "text-white")}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-surface border-border overflow-hidden p-0">
              <div className="relative h-full overflow-hidden">
                {/* Level 1 */}
                <div
                  className={cn(
                    "absolute inset-0 p-6 overflow-y-auto transition-transform duration-300 ease-out",
                    wdcOpen ? "-translate-x-full" : "translate-x-0",
                  )}
                >
                  <div className="flex flex-col gap-1 mt-8">
                    {ddtNav.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "py-3 px-2 text-lg font-display font-medium border-b border-border/40 hover:text-primary transition-colors",
                          pathname === item.href && "text-primary",
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}

                    <button
                      type="button"
                      onClick={() => setWdcOpen(true)}
                      className={cn(
                        "py-3 px-2 text-lg font-display font-medium border-b border-border/40 hover:text-primary transition-colors flex items-center justify-between text-left",
                        pathname.startsWith("/wdc") && "text-primary",
                      )}
                    >
                      <span>WDC</span>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </button>

                    <Link
                      to="/contact"
                      onClick={() => setOpen(false)}
                      className={cn(
                        "py-3 px-2 text-lg font-display font-medium border-b border-border/40 hover:text-primary transition-colors",
                        pathname === "/contact" && "text-primary",
                      )}
                    >
                      Contact
                    </Link>

                    <div className="flex items-center justify-between mt-6 px-2 py-3 border-t border-border/40">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">Theme</span>
                      <ThemeToggle />
                    </div>
                  </div>
                </div>

                {/* Level 2 — WDC submenu */}
                <div
                  className={cn(
                    "absolute inset-0 p-6 overflow-y-auto bg-surface transition-transform duration-300 ease-out",
                    wdcOpen ? "translate-x-0" : "translate-x-full",
                  )}
                  aria-hidden={!wdcOpen}
                >
                  <button
                    type="button"
                    onClick={() => setWdcOpen(false)}
                    className="mt-8 mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors px-2"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Terug
                  </button>

                  <div className="px-2 mb-4">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-primary mb-1">
                      World Domino Collective
                    </div>
                    <div className="font-display text-2xl font-semibold">WDC 2026</div>
                  </div>

                  <div className="flex flex-col gap-1">
                    {wdcNav.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "block py-3 px-2 border-b border-border/40 hover:text-primary transition-colors",
                          pathname === item.href && "text-primary",
                        )}
                      >
                        <div className="font-display text-base font-semibold">{item.label}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
