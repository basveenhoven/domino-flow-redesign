import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Over ons", href: "#over-ons" },
  { label: "WDC 2026", href: "#wdc-2026" },
  { label: "Reserveren", href: "#reserveren" },
  { label: "Sponsoren", href: "#sponsoren" },
  { label: "Contact", href: "#contact" },
];

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"NL" | "EN">("NL");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "glass py-3" : "py-5 bg-transparent",
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="relative h-9 w-9 rounded-md bg-gradient-to-br from-primary to-accent-blue grid place-items-center overflow-hidden">
            <span className="font-display font-bold text-primary-foreground text-sm">W</span>
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-sm tracking-tight">World Domino</div>
            <div className="font-display text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Collective</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "NL" ? "EN" : "NL")}
            className="hidden md:flex items-center text-xs font-medium tracking-wider px-3 py-1.5 rounded-full border border-border hover:border-primary/60 transition-colors"
            aria-label="Toggle language"
          >
            <span className={cn("transition-colors", lang === "NL" ? "text-foreground" : "text-muted-foreground")}>NL</span>
            <span className="mx-1.5 text-muted-foreground">/</span>
            <span className={cn("transition-colors", lang === "EN" ? "text-foreground" : "text-muted-foreground")}>EN</span>
          </button>

          <Button asChild size="sm" className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5">
            <a href="#reserveren">Reserveren</a>
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
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="py-3 px-2 text-lg font-display font-medium border-b border-border/40 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <Button asChild className="mt-6 bg-primary hover:bg-primary/90 rounded-full">
                  <a href="#reserveren" onClick={() => setOpen(false)}>Reserveren</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
