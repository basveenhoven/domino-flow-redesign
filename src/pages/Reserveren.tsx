import { useState } from "react";
import { Check, Ticket, Sparkles, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import ticketsHero from "@/assets/page-tickets-hero.jpg";

type TierId = "standaard" | "premium" | "vip";

const tiers: { id: TierId; Icon: typeof Ticket; name: string; price: string; description: string; perks: string[]; featured?: boolean }[] = [
  {
    id: "standaard",
    Icon: Ticket,
    name: "Standaard",
    price: "€39",
    description: "Toegang tot het volledige evenement.",
    perks: ["Toegang vanaf 10:00", "Vrij parcours", "Live falldown", "Programmaboekje"],
  },
  {
    id: "premium",
    Icon: Sparkles,
    name: "Premium",
    price: "€89",
    description: "Beste plekken en achter-de-schermen toegang.",
    perks: ["Premium zitplaats", "Backstage tour", "Meet & greet team", "Welkomstdrankje", "Exclusief shirt"],
    featured: true,
  },
  {
    id: "vip",
    Icon: Crown,
    name: "VIP",
    price: "€249",
    description: "De ultieme WDC ervaring.",
    perks: ["Eerste rij", "Bouwteam diner", "Privé tour", "Volledig verzorgde dag", "VIP gift bag", "Aftermovie premiere"],
  },
];

const Reserveren = () => {
  const [tier, setTier] = useState<TierId>("premium");
  const [qty, setQty] = useState(2);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("website") as HTMLInputElement)?.value;
    if (honeypot) return;
    setSubmitting(true);
    // TODO: wire up to backend (Lovable Cloud edge function for ticket reservations)
    setTimeout(() => {
      toast.success("Reservering ontvangen!", {
        description: "We sturen binnen 24 uur een bevestigingsmail met betaalinstructies.",
      });
      form.reset();
      setQty(1);
      setSubmitting(false);
    }, 800);
  };

  const selected = tiers.find((t) => t.id === tier)!;

  return (
    <PageLayout>
      <PageHero
        eyebrow="Reserveren"
        title={<>Reserveer je <span className="text-gradient">WDC 2026</span> ticket</>}
        subtitle="Kies het pakket dat bij je past en wees erbij op zaterdag 14 november 2026 in de Amsterdam RAI."
        image={ticketsHero}
        crumbs={[{ label: "Home", href: "/" }, { label: "Reserveren" }]}
      />

      {/* Tier cards */}
      <section className="pb-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t) => {
              const isSelected = tier === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTier(t.id)}
                  className={cn(
                    "magnetic-card text-left rounded-3xl border p-8 bg-surface relative overflow-hidden transition-all",
                    isSelected ? "border-primary ring-2 ring-primary/40" : "border-border hover:border-primary/50",
                    t.featured && "lg:scale-[1.02]",
                  )}
                >
                  {t.featured && (
                    <div className="absolute top-5 right-5 text-[10px] font-medium tracking-[0.2em] uppercase px-2.5 py-1 rounded-full bg-primary text-primary-foreground">
                      Populair
                    </div>
                  )}
                  <div className="h-12 w-12 rounded-xl bg-primary/15 grid place-items-center text-primary mb-6">
                    <t.Icon className="h-5 w-5" />
                  </div>
                  <div className="font-display text-2xl font-bold mb-1">{t.name}</div>
                  <div className="font-display text-4xl font-bold text-gradient mb-3">{t.price}</div>
                  <p className="text-sm text-muted-foreground mb-6">{t.description}</p>
                  <ul className="space-y-2.5">
                    {t.perks.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/85">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={cn("mt-6 text-xs font-medium tracking-wide uppercase", isSelected ? "text-primary" : "text-muted-foreground")}>
                    {isSelected ? "✓ Geselecteerd" : "Selecteer"}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container">
          <div className="max-w-3xl mx-auto rounded-3xl border border-border bg-background p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-xl bg-primary/15 grid place-items-center text-primary">
                <Ticket className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-2xl font-bold">Jouw reservering</div>
                <div className="text-sm text-muted-foreground">
                  {selected.name} — {selected.price} per persoon
                </div>
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="voornaam">Voornaam</Label>
                  <Input id="voornaam" name="voornaam" required className="h-12 bg-surface border-border rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="achternaam">Achternaam</Label>
                  <Input id="achternaam" name="achternaam" required className="h-12 bg-surface border-border rounded-xl" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mailadres</Label>
                  <Input id="email" name="email" type="email" required className="h-12 bg-surface border-border rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefoon">Telefoonnummer</Label>
                  <Input id="telefoon" name="telefoon" type="tel" className="h-12 bg-surface border-border rounded-xl" />
                </div>
              </div>

              <div className="space-y-3">
                <Label>Aantal tickets</Label>
                <RadioGroup value={String(qty)} onValueChange={(v) => setQty(Number(v))} className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <Label
                      key={n}
                      htmlFor={`qty-${n}`}
                      className={cn(
                        "h-12 grid place-items-center rounded-xl border cursor-pointer font-display font-semibold transition-colors",
                        qty === n ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/50",
                      )}
                    >
                      <RadioGroupItem id={`qty-${n}`} value={String(n)} className="sr-only" />
                      {n}
                    </Label>
                  ))}
                </RadioGroup>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-5 flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted-foreground tracking-wider uppercase">Totaal</div>
                  <div className="font-display text-3xl font-bold text-gradient">
                    €{Number(selected.price.replace("€", "")) * qty}
                  </div>
                </div>
                <div className="text-right text-xs text-muted-foreground">
                  <div>{qty} × {selected.name}</div>
                  <div>incl. BTW</div>
                </div>
              </div>

              <Button type="submit" size="lg" disabled={submitting} className="w-full bg-primary hover:bg-primary/90 rounded-full h-12">
                {submitting ? "Verzenden..." : "Bevestig reservering"}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Door te reserveren ga je akkoord met onze algemene voorwaarden. Betaling per factuur of iDEAL.
              </p>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Reserveren;
