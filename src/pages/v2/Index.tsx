import { PageLayout } from "@/components/site/v2/PageLayout";
import { Hero } from "@/components/site/v2/Hero";
import { FeaturedVideo } from "@/components/site/v2/FeaturedVideo";
import { Welkom } from "@/components/site/v2/Welkom";
import { Sponsors } from "@/components/site/v2/Sponsors";
import { FeatureCards } from "@/components/site/v2/FeatureCards";
import { DDTServices } from "@/components/site/v2/DDTServices";
import { SocialFeed } from "@/components/site/v2/SocialFeed";
import { ContactForm } from "@/components/site/v2/ContactForm";

const Index = () => {
  return (
    <PageLayout>
      <Hero />
      <Welkom />
      <FeatureCards />
      <FeaturedVideo />
      <DDTServices />
      <Sponsors />
      <SocialFeed />
      <ContactForm />
    </PageLayout>
  );
};

export default Index;
