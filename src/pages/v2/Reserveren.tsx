import { useState } from "react";
import { Ticket, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { PageLayout } from "@/components/site/v2/PageLayout";
import { PageHero } from "@/components/site/v2/PageHero";
import ticketsHero from "@/assets/page-tickets-hero.jpg";
import { useI18n } from "@/lib/i18n";

const Reserveren = () => {
  const [submitting, setSubmitting] = useState(false);
  const [aantal, setAantal] = useState(2);
  const { t } = useI18n();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("website") as HTMLInputElement)?.value;
    if (honeypot) return;
    setSubmitting(true);
    setTimeout(() => {
      toast.success(t("tickets.toastTitle"), {
        description: t("tickets.toastDesc"),
      });
      form.reset();
      setAantal(2);
      setSubmitting(false);
    }, 800);
  };

  return (
    <PageLayout>
      <PageHero
        eyebrow={t("tickets.eyebrow")}
        title={<>{t("tickets.titleA")} <span className="text-gradient">{t("tickets.titleB")}</span> {t("tickets.titleC")}</>}
        subtitle={t("tickets.subtitle")}
        image={ticketsHero}
        crumbs={[{ label: t("nav.home"), href: "/" }, { label: t("nav.tickets") }]}
      />

      <section className="pb-24">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {/* Info notice */}
            <div className="flex gap-3 p-5 rounded-2xl border border-primary/30 bg-primary/5 mb-8">
              <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div className="text-sm text-foreground/85 leading-relaxed">
                <strong className="text-foreground">{t("tickets.noticeBold")}</strong>
                {t("tickets.noticeBody")}{" "}
                <strong className="text-foreground">€10 {t("tickets.atEntrance").includes("ticket") ? "each" : "per stuk"}</strong>.
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-surface p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-xl bg-primary/15 grid place-items-center text-primary">
                  <Ticket className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold">{t("tickets.formTitle")}</div>
                  <div className="text-sm text-muted-foreground">{t("tickets.perTicket")}</div>
                </div>
              </div>

              <form onSubmit={onSubmit} className="space-y-6">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="voornaam">{t("tickets.firstName")} *</Label>
                    <Input id="voornaam" name="voornaam" required className="h-12 bg-background border-border rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="achternaam">{t("tickets.lastName")} *</Label>
                    <Input id="achternaam" name="achternaam" required className="h-12 bg-background border-border rounded-xl" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("form.email")} *</Label>
                    <Input id="email" name="email" type="email" required className="h-12 bg-background border-border rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefoon">{t("tickets.phone")}</Label>
                    <Input id="telefoon" name="telefoon" type="tel" className="h-12 bg-background border-border rounded-xl" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="aantal">{t("tickets.amount")} *</Label>
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
                    <div className="text-xs text-muted-foreground tracking-wider uppercase">{t("tickets.totalLabel")}</div>
                    <div className="font-display text-3xl font-bold text-gradient">€{aantal * 10}</div>
                  </div>
                  <div className="text-right text-xs text-muted-foreground">
                    <div>{aantal} × €10</div>
                    <div>{t("tickets.atEntrance")}</div>
                  </div>
                </div>

                <Button type="submit" size="lg" disabled={submitting} className="w-full bg-primary hover:bg-primary/90 rounded-full h-12">
                  {submitting ? t("tickets.submitting") : t("tickets.submit")}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  {t("tickets.honeypot")}
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
