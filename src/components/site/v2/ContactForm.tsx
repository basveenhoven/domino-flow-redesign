import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("website") as HTMLInputElement)?.value;
    if (honeypot) return;

    setSubmitting(true);
    setTimeout(() => {
      toast.success("Bericht verzonden", {
        description: "Bedankt voor je bericht — we nemen zo snel mogelijk contact met je op.",
      });
      form.reset();
      setSubmitting(false);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-surface">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-32">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Contact</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Neem contact <br />
              <span className="text-gradient">met ons op</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              Wilt u contact met het Dutch Domino Team? Laat het ons weten door dit formulier in te vullen.
              Uw gegevens worden met zorg behandeld en niet verspreid.
            </p>
            <div className="hairline w-20 mb-8" />
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>World Domino Collective</p>
              <p>Violenstraat 3, 5721 EP Asten</p>
              <p>info@dutchdominoteam.nl</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-background p-8 lg:p-10 space-y-6">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <div className="space-y-2">
              <Label htmlFor="naam">Naam</Label>
              <Input id="naam" name="naam" required placeholder="Uw naam" className="h-12 bg-surface border-border rounded-xl" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="naam@voorbeeld.nl"
                className="h-12 bg-surface border-border rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bericht">Bericht</Label>
              <Textarea
                id="bericht"
                name="bericht"
                required
                rows={6}
                placeholder="Waar kunnen wij u mee helpen?"
                className="bg-surface border-border rounded-xl resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={submitting}
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 text-base group"
            >
              {submitting ? "Versturen…" : "Verstuur bericht"}
              <Send className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
