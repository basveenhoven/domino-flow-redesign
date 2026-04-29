import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";

const useCountUp = (target: number, active: boolean, duration = 2000) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.floor(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
};

const StatItem = ({ value, suffix, label, active, locale }: { value: number; suffix: string; label: string; active: boolean; locale: string }) => {
  const display = useCountUp(value, active);
  return (
    <div className="text-center">
      <div className="font-display text-4xl md:text-6xl font-bold tracking-tight text-gradient">
        {display.toLocaleString(locale)}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground tracking-wide uppercase">{label}</div>
    </div>
  );
};

export const Welkom = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const { t, lang } = useI18n();

  const stats = [
    { value: 1000000, suffix: "+", label: t("stat.fallenStones") },
    { value: 15, suffix: t("stat.years"), label: t("stat.anniversary") },
    { value: 30, suffix: "+", label: t("stat.builders") },
  ];

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setActive(true),
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="welkom" className="relative py-24 lg:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6 block">{t("welkom.eyebrow")}</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-8">
            {t("welkom.titleA")} <br />
            <span className="text-gradient">{t("welkom.titleB")}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("welkom.body")}
          </p>
        </div>

        <div ref={ref} className="hairline mt-20 mb-16 max-w-4xl mx-auto" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} active={active} locale={lang === "EN" ? "en-US" : "nl-NL"} />
          ))}
        </div>
      </div>
    </section>
  );
};
