import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown, X, ArrowUpRight, Mail, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
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

          <button
            onClick={() => setOpen(true)}
            className={cn("lg:hidden p-2 -mr-2 text-foreground", isHomeStyle && "text-white")}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Full-screen mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-[60] transition-all duration-500",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-500",
            open ? "opacity-100" : "opacity-0",
          )}
        />

        {/* Panel */}
        <div
          className={cn(
            "absolute inset-x-3 top-3 bottom-3 rounded-3xl overflow-hidden shadow-2xl",
            "bg-[rgb(14,14,17)] text-white",
            "transition-all duration-500 ease-out origin-top",
            open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95",
          )}
        >
          {/* Decorative gradient blob */}
          <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />

          {/* Header bar */}
          <div className="relative flex items-center justify-between px-6 pt-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Sluit menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body */}
          <div className="relative h-[calc(100%-72px)] overflow-y-auto px-6 pb-8 pt-6">
            <nav className="flex flex-col">
              {ddtNav.map((item, i) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "group flex items-baseline gap-4 py-3 border-b border-white/10 transition-colors",
                      active ? "text-primary" : "text-white hover:text-primary",
                    )}
                  >
                    <span className="text-[10px] font-mono tabular-nums text-white/40 w-6">
                      0{i + 1}
                    </span>
                    <span className="font-display font-semibold text-3xl tracking-tight flex-1">
                      {item.label}
                    </span>
                    <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                );
              })}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className={cn(
                  "group flex items-baseline gap-4 py-3 border-b border-white/10 transition-colors",
                  pathname === "/contact" ? "text-primary" : "text-white hover:text-primary",
                )}
              >
                <span className="text-[10px] font-mono tabular-nums text-white/40 w-6">
                  0{ddtNav.length + 1}
                </span>
                <span className="font-display font-semibold text-3xl tracking-tight flex-1">
                  Contact
                </span>
                <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            </nav>

            {/* WDC card */}
            <div className="mt-8 rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] uppercase tracking-[0.25em] text-primary">
                  World Domino Collective
                </span>
                <span className="text-[10px] font-mono text-white/40">2026</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {wdcNav.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl bg-white/5 hover:bg-white/10 px-3 py-3 transition-colors"
                  >
                    <div className="font-display text-sm font-semibold">{item.label}</div>
                    <div className="text-[10px] text-white/50 mt-0.5 line-clamp-1">{item.desc}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <a
                  href="mailto:info@dutchdominoteam.nl"
                  className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
              <div className="dark">
                <ThemeToggle />
              </div>
            </div>

            <div className="mt-6 text-[10px] uppercase tracking-[0.25em] text-white/30 text-center">
              Dutch Domino Team — sinds 2012
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
