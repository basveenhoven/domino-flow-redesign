import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import s1 from "@/assets/social-1.jpg";
import s2 from "@/assets/social-2.jpg";
import s3 from "@/assets/social-3.jpg";
import s4 from "@/assets/social-4.jpg";
import { useI18n } from "@/lib/i18n";

const posts = [
  { img: s1, caption: "We're so back 🔥 The Dutch Domino Team association — speedbuild Duck Hunt 🦆 #dutchdominoteam #duckhunt #wdc" },
  { img: s2, caption: "🎯 Half a year ago we made history: ONE MILLION dominoes toppled — a record no independent domino team has EVER achieved before 💪" },
  { img: s3, caption: "𝐈𝐧𝐭𝐫𝐨𝐝𝐮𝐜𝐢𝐧𝐠 𝐭𝐡𝐞 𝐭𝐡𝐞𝐦𝐞 𝐟𝐨𝐫 𝐖𝐃𝐂 𝟐𝟎𝟐𝟔... ⏳🪣👀 #WDC #domino #announcement" },
  { img: s4, caption: "WDC 2025 — 1 MILLION DOMINOES! Video is now live on YouTube 🔥🔥" },
];

export const SocialFeed = () => {
  const { t } = useI18n();
  return (
    <section id="social" className="relative py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">{t("social.eyebrow")}</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight max-w-2xl">
              {t("social.title")}
            </h2>
          </div>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-border hover:border-primary/60 self-start md:self-auto"
          >
            <a href="https://www.instagram.com/dutch_domino_team/" target="_blank" rel="noreferrer">
              <Instagram className="mr-2 h-4 w-4" />
              {t("social.cta")}
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
          {posts.map((p, i) => (
            <a
              key={i}
              href="https://www.instagram.com/dutch_domino_team/"
              target="_blank"
              rel="noreferrer"
              className={`group relative overflow-hidden rounded-2xl border border-border bg-surface ${
                i === 0 ? "row-span-2 md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <img
                src={p.img}
                alt={p.caption}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-sm text-foreground/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {p.caption}
                </p>
              </div>
              <div className="absolute top-3 right-3 h-8 w-8 grid place-items-center rounded-full bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <Instagram className="h-4 w-4 text-foreground" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
