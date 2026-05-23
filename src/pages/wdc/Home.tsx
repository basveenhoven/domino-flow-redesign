import { PageLayout } from "@/components/site/PageLayout";
import { Hero } from "@/components/site/Hero";
import { FeaturedVideo } from "@/components/site/FeaturedVideo";
import { Welkom } from "@/components/site/Welkom";
import { Sponsors } from "@/components/site/Sponsors";
import { FeatureCards } from "@/components/site/FeatureCards";
import { SocialFeed } from "@/components/site/SocialFeed";
import { ContactForm } from "@/components/site/ContactForm";

const WdcHome = () => {
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

export default WdcHome;
