import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useI18n } from "@/lib/i18n";

export const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const { t } = useI18n();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("website") as HTMLInputElement)?.value;
    if (honeypot) return; // bot

    setSubmitting(true);
    setTimeout(() => {
      toast.success(t("form.toastTitle"), {
        description: t("form.toastDesc"),
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
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">{t("contact.eyebrow")}</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
              {t("contact.titleA")} <br />
              <span className="text-gradient">{t("contact.titleB")}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              {t("contact.body")}
            </p>
            <div className="hairline w-20 mb-8" />
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>World Domino Collective</p>
              <p>Nederland</p>
              <p>info@dutchdominoteam.nl</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-background p-8 lg:p-10 space-y-6">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <div className="space-y-2">
              <Label htmlFor="naam">{t("form.name")}</Label>
              <Input id="naam" name="naam" required placeholder={t("form.namePlaceholder")} className="h-12 bg-surface border-border rounded-xl" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t("form.email")}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t("form.emailPlaceholder")}
                className="h-12 bg-surface border-border rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bericht">{t("form.message")}</Label>
              <Textarea
                id="bericht"
                name="bericht"
                required
                rows={6}
                placeholder={t("form.messagePlaceholder")}
                className="bg-surface border-border rounded-xl resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={submitting}
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 text-base group"
            >
              {submitting ? t("form.submitting") : t("form.submit")}
              <Send className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
