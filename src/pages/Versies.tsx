import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Versies = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-14">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
            Kies een versie
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Welkom bij <span className="text-gradient">World Domino Collective</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Bekijk de site in twee verschillende versies en kies welke je wilt verkennen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              version: "V1",
              title: "Versie 1",
              description: "De originele versie van de site.",
              href: "/",
            },
            {
              version: "V2",
              title: "Versie 2",
              description: "De nieuwe variant van de site.",
              href: "/v2",
            },
          ].map((v) => (
            <Link
              key={v.version}
              to={v.href}
              className="magnetic-card group block rounded-3xl border border-border bg-surface p-10 hover:border-primary/60 transition-colors"
            >
              <div className="font-display text-7xl md:text-8xl font-bold text-gradient mb-6">
                {v.version}
              </div>
              <h2 className="font-display text-2xl font-semibold mb-2">{v.title}</h2>
              <p className="text-muted-foreground mb-8">{v.description}</p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 rounded-full px-6 h-11 group/btn pointer-events-none"
              >
                <span>
                  Bekijk {v.version}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Versies;
