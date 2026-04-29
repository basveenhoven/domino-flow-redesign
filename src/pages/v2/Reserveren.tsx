import { useState } from "react";
import { Ticket, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { PageLayout } from "@/components/site/v2/PageLayout";
import { PageHero } from "@/components/site/v2/PageHero";
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
    setTimeout(() => {
      toast.success("Reservering ontvangen", {
        description: "Bedankt — we sturen je een bevestiging zodra de kaartverkoop officieel start.",
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
        title={<>Reserveer je plek voor de <span className="text-gradient">falldown</span></>}
        subtitle="Op vrijdagavond 21 augustus 2026 vindt de falldown van WDC 2026 plaats. Tickets kosten €10 per persoon en worden bij de ingang afgerekend."
        image={ticketsHero}
        crumbs={[{ label: "Home", href: "/v2" }, { label: "Reserveren" }]}
      />

      <section className="pb-24">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-3 p-5 rounded-2xl border border-primary/30 bg-primary/5 mb-8">
              <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div className="text-sm text-foreground/85 leading-relaxed">
                <strong className="text-foreground">Let op: </strong>
                Op dit moment is de officiële kaartverkoop nog niet gestart. Je kunt hieronder vrijblijvend een
                vooraankondiging plaatsen. Tickets kosten <strong className="text-foreground">€10 per stuk</strong>.
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-surface p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-xl bg-primary/15 grid place-items-center text-primary">
                  <Ticket className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold">Vooraankondiging tickets</div>
                  <div className="text-sm text-muted-foreground">€10 per ticket</div>
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
                    <Label htmlFor="email">E-mail *</Label>
                    <Input id="email" name="email" type="email" required className="h-12 bg-background border-border rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefoon">Telefoonnummer</Label>
                    <Input id="telefoon" name="telefoon" type="tel" className="h-12 bg-background border-border rounded-xl" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="aantal">Aantal personen *</Label>
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
                    <div className="text-xs text-muted-foreground tracking-wider uppercase">Totaal</div>
                    <div className="font-display text-3xl font-bold text-gradient">€{aantal * 10}</div>
                  </div>
                  <div className="text-right text-xs text-muted-foreground">
                    <div>{aantal} × €10</div>
                    <div>Te voldoen bij de ingang</div>
                  </div>
                </div>

                <Button type="submit" size="lg" disabled={submitting} className="w-full bg-primary hover:bg-primary/90 rounded-full h-12">
                  {submitting ? "Versturen…" : "Plek reserveren"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Door te versturen ga je akkoord met onze huisregels. We bewaren je gegevens uitsluitend voor deze reservering.
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
