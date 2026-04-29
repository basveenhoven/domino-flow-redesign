import { Mail, MapPin, Phone, Facebook, Instagram, Youtube } from "lucide-react";
import { PageLayout } from "@/components/site/v2/PageLayout";
import { PageHero } from "@/components/site/v2/PageHero";
import { ContactForm } from "@/components/site/v2/ContactForm";
import contactImg from "@/assets/contact-dominoes.jpg";
import { useI18n } from "@/lib/i18n";

const socials = [
  { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/dutchdominoteam" },
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/dutch_domino_team/" },
  { Icon: Youtube, label: "YouTube", href: "https://www.youtube.com/c/DutchDominoTeam" },
];

const Contact = () => {
  const { t, pick } = useI18n();

  const channels = [
    { Icon: Mail, label: t("contactPage.email"), value: "info@dutchdominoteam.nl", href: "mailto:info@dutchdominoteam.nl" },
    { Icon: MapPin, label: t("contactPage.location"), value: "Violenstraat 3, 5721 EP Asten" },
    { Icon: Phone, label: pick({ NL: "KVK", EN: "Chamber of Commerce" }), value: "60890657" },
  ];

  return (
    <PageLayout>
      <PageHero
        eyebrow={t("contactPage.eyebrow")}
        title={
          <>
            {t("contactPage.titleA")} <span className="text-gradient">{t("contactPage.titleB")}</span>
            {t("contactPage.titleC") && ` ${t("contactPage.titleC")}`}
          </>
        }
        subtitle={t("contactPage.subtitle")}
        image={contactImg}
        crumbs={[{ label: t("nav.home"), href: "/" }, { label: t("nav.contact") }]}
      />

      {/* Contact channels */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {channels.map(({ Icon, label, value, href }) => {
              const inner = (
                <>
                  <div className="h-12 w-12 rounded-xl bg-primary/15 grid place-items-center text-primary mb-5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">{label}</div>
                  <div className="font-display font-semibold">{value}</div>
                </>
              );
              return href ? (
                <a key={label} href={href} className="magnetic-card block p-7 rounded-2xl border border-border bg-surface hover:border-primary/50 transition-colors">
                  {inner}
                </a>
              ) : (
                <div key={label} className="p-7 rounded-2xl border border-border bg-surface">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactForm />

      {/* Socials */}
      <section className="py-20 bg-surface">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">{t("contactPage.followEyebrow")}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-8">
              {t("contactPage.followTitle")}
            </h2>
            <div className="flex items-center justify-center gap-3">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="h-12 w-12 grid place-items-center rounded-full border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
