import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/site/ThemeToggle";

const mainNav = [
  { label: "Home", href: "/v2" },
  { label: "Over ons", href: "/v2/over-ons" },
  { label: "WDC 2026", href: "/v2/wdc-2026" },
  { label: "Reserveren", href: "/v2/reserveren" },
  { label: "Sponsoren", href: "/v2/sponsoren" },
  { label: "Contact", href: "/v2/contact" },
];

const ddtNav = [
  { label: "Diensten", href: "/v2/diensten", desc: "Workshops, opdrachten en maatwerk" },
  { label: "Projecten", href: "/v2/projecten", desc: "Archief van DDT-projecten" },
  { label: "Bouwersdagen", href: "/v2/bouwersdagen", desc: "Word onderdeel van het team" },
  { label: "Team", href: "/v2/team", desc: "Over de bouwers achter DDT" },
];

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [ddtOpen, setDdtOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/v2";
  const ticketsHref = "/v2/reserveren";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isHome
          ? "home-header py-3 border-b border-border/60 bg-background/95 backdrop-blur"
          : cn(scrolled ? "glass py-3" : "bg-transparent py-5"),
      )}
    >
      <div className="container flex items-center justify-between">
        <Link
          to="/v2"
          className="font-display font-bold text-sm sm:text-base tracking-tight text-foreground hover:text-primary transition-colors"
        >
          World Domino Collective
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {mainNav.map((item) => {
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

          {/* DDT dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDdtOpen(true)}
            onMouseLeave={() => setDdtOpen(false)}
          >
            <button
              type="button"
              className={cn(
                "nav-link inline-flex items-center gap-1",
                ddtNav.some((d) => pathname === d.href) && "text-primary",
              )}
            >
              DDT
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {ddtOpen && (
              <div className="absolute right-0 top-full pt-3 w-72">
                <div className="rounded-2xl border border-border bg-background shadow-xl p-2">
                  {ddtNav.map((d) => (
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
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle className="hidden sm:inline-flex" />

          <Button asChild size="sm" className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5">
            <Link to={ticketsHref}>Reserveren</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden p-2 -mr-2 text-foreground" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-surface border-border overflow-y-auto">
              <div className="flex flex-col gap-1 mt-8">
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="py-3 px-2 text-lg font-display font-medium border-b border-border/40 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="mt-4 mb-1 px-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Dutch Domino Team
                </div>
                {ddtNav.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="py-3 px-2 text-base font-display font-medium border-b border-border/40 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="flex items-center justify-between mt-6 px-2 py-3 border-t border-border/40">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Theme</span>
                  <ThemeToggle />
                </div>

                <Button asChild className="mt-4 bg-primary hover:bg-primary/90 rounded-full">
                  <Link to={ticketsHref} onClick={() => setOpen(false)}>Reserveren</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
