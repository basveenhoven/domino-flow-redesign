import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown, ChevronRight, ChevronLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import { ThemeToggle } from "@/components/site/ThemeToggle";

const ddtNav: { label: { NL: string; EN: string }; href: string }[] = [
  { label: { NL: "Home", EN: "Home" }, href: "/" },
  { label: { NL: "Over ons", EN: "About us" }, href: "/over-ons" },
  { label: { NL: "Diensten", EN: "Services" }, href: "/diensten" },
  { label: { NL: "Projecten", EN: "Projects" }, href: "/projecten" },
  { label: { NL: "Bouwersdagen", EN: "Builder days" }, href: "/bouwersdagen" },
];

const wdcNav: { label: { NL: string; EN: string }; href: string; desc: { NL: string; EN: string } }[] = [
  { label: { NL: "WDC Home", EN: "WDC Home" }, href: "/wdc", desc: { NL: "Overzicht van het evenement", EN: "Event overview" } },
  { label: { NL: "WDC 2026", EN: "WDC 2026" }, href: "/wdc/2026", desc: { NL: "Bucketlist — programma & info", EN: "Bucketlist — program & info" } },
  { label: { NL: "Vorige edities", EN: "Past editions" }, href: "/wdc/edities", desc: { NL: "Terugblik 2021 — 2025", EN: "Look back 2021 — 2025" } },
  { label: { NL: "Reserveren", EN: "Tickets" }, href: "/wdc/reserveren", desc: { NL: "Tickets voor de falldown", EN: "Tickets for the falldown" } },
  { label: { NL: "Sponsoren", EN: "Sponsors" }, href: "/wdc/sponsoren", desc: { NL: "Partners van WDC 2026", EN: "Partners of WDC 2026" } },
];

const contactLabel = { NL: "Contact", EN: "Contact" };

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [wdcOpen, setWdcOpen] = useState(false);
  const { lang, setLang, pick } = useI18n();
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
                {pick(item.label)}
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
              <div className="absolute right-0 top-full pt-3 w-56">
                <div className="relative">
                  <div className="absolute -top-1 right-8 w-3 h-3 bg-primary rotate-45" />
                  <div className="relative rounded-xl border border-border bg-background shadow-2xl shadow-primary/10 overflow-hidden">
                    <div className="h-1 w-full bg-primary" />
                    <div className="py-2">
                      {wdcNav.map((d) => {
                        const active = pathname === d.href;
                        return (
                          <Link
                            key={d.href}
                            to={d.href}
                            className={cn(
                              "group flex items-center px-4 py-3 text-sm font-display font-medium transition-all duration-200",
                              active
                                ? "bg-foreground/5 text-primary"
                                : "text-foreground/80 hover:bg-foreground/5 hover:text-foreground",
                            )}
                          >
                            <span
                              className={cn(
                                "mr-3 h-1.5 w-1.5 rounded-full transition-all duration-200",
                                active
                                  ? "bg-primary shadow-[0_0_8px_hsl(var(--primary))]"
                                  : "bg-transparent group-hover:bg-foreground/20",
                              )}
                            />
                            {pick(d.label)}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
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
            <SheetContent
              side="right"
              className="dark w-[320px] border-l border-white/5 overflow-hidden p-0 [&>button]:hidden"
              style={{ backgroundColor: "#121214" }}
            >
              <div className="relative h-full overflow-hidden text-neutral-300">
                {/* Level 1 */}
                <div
                  className={cn(
                    "absolute inset-0 flex flex-col transition-transform duration-300 ease-out",
                    wdcOpen ? "-translate-x-full" : "translate-x-0",
                  )}
                >
                  {/* Header */}
                  <div className="p-6 flex justify-between items-center">
                    <span className="text-primary font-display text-xl font-bold tracking-tight">
                      DDT
                    </span>
                    <button
                      onClick={() => setOpen(false)}
                      className="text-neutral-400 hover:text-white transition-colors"
                      aria-label="Sluit menu"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  {/* Nav */}
                  <nav className="flex-1 px-4 mt-4 overflow-y-auto">
                    <ul className="space-y-1">
                      {ddtNav.map((item) => {
                        const active = pathname === item.href;
                        return (
                          <li key={item.href}>
                            {active ? (
                              <Link
                                to={item.href}
                                onClick={() => setOpen(false)}
                                className="flex items-center px-4 py-4 text-primary font-display font-semibold text-lg transition-colors"
                              >
                                <span className="mr-3 w-1 h-5 bg-primary rounded-full" />
                                {pick(item.label)}
                              </Link>
                            ) : (
                              <Link
                                to={item.href}
                                onClick={() => setOpen(false)}
                                className="block px-4 py-4 text-neutral-300 hover:text-white font-display font-medium text-lg border-b border-neutral-800/50 transition-colors"
                              >
                                {pick(item.label)}
                              </Link>
                            )}
                          </li>
                        );
                      })}

                      <li>
                        <button
                          type="button"
                          onClick={() => setWdcOpen(true)}
                          className={cn(
                            "w-full flex items-center justify-between px-4 py-4 font-display font-medium text-lg border-b border-neutral-800/50 group transition-colors text-left",
                            pathname.startsWith("/wdc")
                              ? "text-primary"
                              : "text-neutral-300 hover:text-white",
                          )}
                        >
                          <span>WDC</span>
                          <ChevronRight className="h-5 w-5 text-neutral-500 group-hover:text-primary transition-transform group-hover:translate-x-1" />
                        </button>
                      </li>

                      <li>
                        <Link
                          to="/contact"
                          onClick={() => setOpen(false)}
                          className={cn(
                            "block px-4 py-4 font-display font-medium text-lg transition-colors",
                            pathname === "/contact"
                              ? "text-primary"
                              : "text-neutral-300 hover:text-white",
                          )}
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>

                  {/* Footer */}
                  <div className="mt-auto p-6 border-t border-neutral-800 flex items-center justify-between gap-4">
                    <div className="inline-flex items-center rounded-xl bg-neutral-800/50 border border-neutral-700/50 p-1 text-xs font-semibold tracking-wider">
                      <button
                        type="button"
                        onClick={() => setLang("NL")}
                        aria-pressed={lang === "NL"}
                        className={cn(
                          "px-3 py-1.5 rounded-lg transition-colors",
                          lang === "NL"
                            ? "bg-primary text-primary-foreground"
                            : "text-neutral-400 hover:text-white",
                        )}
                      >
                        NL
                      </button>
                      <button
                        type="button"
                        onClick={() => setLang("EN")}
                        aria-pressed={lang === "EN"}
                        className={cn(
                          "px-3 py-1.5 rounded-lg transition-colors",
                          lang === "EN"
                            ? "bg-primary text-primary-foreground"
                            : "text-neutral-400 hover:text-white",
                        )}
                      >
                        EN
                      </button>
                    </div>
                    <ThemeToggle className="rounded-xl bg-neutral-800/50 border border-neutral-700/50 text-neutral-300 hover:bg-neutral-800 hover:text-primary" />
                  </div>
                </div>

                {/* Level 2 — WDC submenu */}
                <div
                  className={cn(
                    "absolute inset-0 flex flex-col transition-transform duration-300 ease-out",
                    wdcOpen ? "translate-x-0" : "translate-x-full",
                  )}
                  style={{ backgroundColor: "#121214" }}
                  aria-hidden={!wdcOpen}
                >
                  {/* Header */}
                  <div className="p-6 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setWdcOpen(false)}
                      className="inline-flex items-center gap-2 text-primary font-display text-xl font-bold tracking-tight hover:text-primary/80 transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                      WDC
                    </button>
                    <button
                      onClick={() => setOpen(false)}
                      className="text-neutral-400 hover:text-white transition-colors"
                      aria-label="Sluit menu"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  {/* Nav */}
                  <nav className="flex-1 px-4 mt-4 overflow-y-auto">
                    <ul className="space-y-1">
                      {wdcNav.map((item) => {
                        const active = pathname === item.href;
                        return (
                          <li key={item.href}>
                            {active ? (
                              <Link
                                to={item.href}
                                onClick={() => setOpen(false)}
                                className="flex items-center px-4 py-4 text-primary font-display font-semibold text-lg transition-colors"
                              >
                                <span className="mr-3 w-1 h-5 bg-primary rounded-full" />
                                {pick(item.label)}
                              </Link>
                            ) : (
                              <Link
                                to={item.href}
                                onClick={() => setOpen(false)}
                                className="block px-4 py-4 text-neutral-300 hover:text-white font-display font-medium text-lg border-b border-neutral-800/50 transition-colors"
                              >
                                {pick(item.label)}
                              </Link>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
