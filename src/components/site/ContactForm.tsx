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
    if (honeypot) return; // bot

    setSubmitting(true);
    // TODO: wire up to backend (e.g. Lovable Cloud edge function)
    setTimeout(() => {
      toast.success("Bedankt! Je bericht is verzonden.", {
        description: "We nemen zo snel mogelijk contact met je op.",
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
              Heb je een vraag of <br />
              <span className="text-gradient">projectidee?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              Stuur ons een bericht via het formulier hiernaast. Of het nu gaat om een workshop, een
              evenement of een samenwerking — we horen graag van je.
            </p>
            <div className="hairline w-20 mb-8" />
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>World Domino Collective</p>
              <p>Nederland</p>
              {/* TODO: real contact details */}
              <p>info@worlddominocollective.nl</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-background p-8 lg:p-10 space-y-6">
            {/* Honeypot */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <div className="space-y-2">
              <Label htmlFor="naam">Naam</Label>
              <Input id="naam" name="naam" required placeholder="Je naam" className="h-12 bg-surface border-border rounded-xl" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mailadres</Label>
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
              <Label htmlFor="bericht">Vraag of opmerking</Label>
              <Textarea
                id="bericht"
                name="bericht"
                required
                rows={6}
                placeholder="Vertel ons waar we je mee kunnen helpen..."
                className="bg-surface border-border rounded-xl resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={submitting}
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 text-base group"
            >
              {submitting ? "Versturen..." : "Verzenden"}
              <Send className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
