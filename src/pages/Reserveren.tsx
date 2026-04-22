import { useState } from "react";
import { Ticket, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import ticketsHero from "@/assets/page-tickets-hero.jpg";

const Reserveren = () => {
  const [submitting, setSubmitting] = useState(false);
  const [aantal, setAantal] = useState(2);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("website") as HTMLInputElement)?.value;
    if (honeypot) return;
    setSubmitting(true);
    // TODO: wire up to backend (Lovable Cloud edge function for ticket reservations)
    setTimeout(() => {
      toast.success("Reservering ontvangen!", {
        description: "We sturen binnen 24 uur een bevestigingsmail.",
      });
      form.reset();
      setAantal(2);
      setSubmitting(false);
    }, 800);
  };

  return (
    <PageLayout>
      <PageHero
        eyebrow="Reserveren"
        title={<>Reserveer je <span className="text-gradient">WDC 2026</span> kaarten</>}
        subtitle="Beperkte toegangstickets beschikbaar, op = op. €10 per kaart, contant of pin bij de ingang."
        image={ticketsHero}
        crumbs={[{ label: "Home", href: "/" }, { label: "Reserveren" }]}
      />

      <section className="pb-24">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {/* Info notice */}
            <div className="flex gap-3 p-5 rounded-2xl border border-primary/30 bg-primary/5 mb-8">
              <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div className="text-sm text-foreground/85 leading-relaxed">
                <strong className="text-foreground">Op dit moment is de kaartverkoop nog niet gestart.</strong>{" "}
                Wees er snel bij want er zijn beperkte toegangstickets te verkrijgen, op = op. De bestelde
                kaarten dienen bij de ingang contant of met pin te worden afgerekend en kosten{" "}
                <strong className="text-foreground">€10 per stuk</strong>.
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-surface p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-xl bg-primary/15 grid place-items-center text-primary">
                  <Ticket className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold">Reserveringsformulier</div>
                  <div className="text-sm text-muted-foreground">€10 per kaart</div>
                </div>
              </div>

              <form onSubmit={onSubmit} className="space-y-6">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="voornaam">Voornaam *</Label>
                    <Input id="voornaam" name="voornaam" required className="h-12 bg-background border-border rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="achternaam">Achternaam *</Label>
                    <Input id="achternaam" name="achternaam" required className="h-12 bg-background border-border rounded-xl" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mailadres *</Label>
                    <Input id="email" name="email" type="email" required className="h-12 bg-background border-border rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefoon">Telefoonnummer</Label>
                    <Input id="telefoon" name="telefoon" type="tel" className="h-12 bg-background border-border rounded-xl" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="aantal">Aantal kaarten *</Label>
                  <Input
                    id="aantal"
                    name="aantal"
                    type="number"
                    min={1}
                    max={20}
                    required
                    value={aantal}
                    onChange={(e) => setAantal(Math.max(1, Number(e.target.value) || 1))}
                    className="h-12 bg-background border-border rounded-xl"
                  />
                </div>

                <div className="rounded-2xl border border-border bg-background p-5 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground tracking-wider uppercase">Totaal te betalen</div>
                    <div className="font-display text-3xl font-bold text-gradient">€{aantal * 10}</div>
                  </div>
                  <div className="text-right text-xs text-muted-foreground">
                    <div>{aantal} × €10</div>
                    <div>contant of pin bij ingang</div>
                  </div>
                </div>

                <Button type="submit" size="lg" disabled={submitting} className="w-full bg-primary hover:bg-primary/90 rounded-full h-12">
                  {submitting ? "Versturen..." : "Reservering versturen"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Indien je een mens bent, laat het verborgen veld leeg.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Reserveren;
