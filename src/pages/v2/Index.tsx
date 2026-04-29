import { PageLayout } from "@/components/site/v2/PageLayout";
import { Hero } from "@/components/site/v2/Hero";
import { FeaturedVideo } from "@/components/site/v2/FeaturedVideo";
import { Welkom } from "@/components/site/v2/Welkom";
import { Sponsors } from "@/components/site/v2/Sponsors";
import { FeatureCards } from "@/components/site/v2/FeatureCards";
import { SocialFeed } from "@/components/site/v2/SocialFeed";
import { ContactForm } from "@/components/site/v2/ContactForm";

const Index = () => {
  return (
    <div className="dark bg-background text-foreground">
      <PageLayout>
        <Hero />
        <FeaturedVideo />
        <Welkom />
        <Sponsors />
        <FeatureCards />
        <SocialFeed />
        <ContactForm />
      </PageLayout>
    </div>
  );
};

export default Index;
