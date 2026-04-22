import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { FeaturedVideo } from "@/components/site/FeaturedVideo";
import { Welkom } from "@/components/site/Welkom";
import { Sponsors } from "@/components/site/Sponsors";
import { FeatureCards } from "@/components/site/FeatureCards";
import { SocialFeed } from "@/components/site/SocialFeed";
import { ContactForm } from "@/components/site/ContactForm";
import { SiteFooter } from "@/components/site/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <FeaturedVideo />
        <Welkom />
        <Sponsors />
        <FeatureCards />
        <SocialFeed />
        <ContactForm />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
