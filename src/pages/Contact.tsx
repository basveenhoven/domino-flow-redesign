import { Mail, MapPin, Phone, Facebook, Instagram, Youtube } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import contactImg from "@/assets/contact-dominoes.jpg";

const channels = [
  { Icon: Mail, label: "E-mail", value: "info@worlddominocollective.nl", href: "mailto:info@worlddominocollective.nl" },
  { Icon: Phone, label: "Telefoon", value: "+31 (0)20 123 4567", href: "tel:+31201234567" },
  { Icon: MapPin, label: "Locatie", value: "Amsterdam, Nederland" },
];

const socials = [
  { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/dutchdominoteam" },
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/dutch_domino_team/" },
  { Icon: Youtube, label: "YouTube", href: "https://www.youtube.com/c/DutchDominoTeam" },
];

const Contact = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Contact"
        title={<>Laten we <span className="text-gradient">in gesprek</span> gaan</>}
        subtitle="Of het nu om een workshop, een evenement, een sponsoring of een persvraag gaat — we horen graag van je."
        image={contactImg}
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
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
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Volg ons</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-8">
              Volg ons op Facebook, Instagram en YouTube
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
