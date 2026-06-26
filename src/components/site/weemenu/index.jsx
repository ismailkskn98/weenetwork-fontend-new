import HeroSection from "./hero";
import HowItWorksSection from "./howItWorks";
import FeaturesSection from "./features";
import SampleMenusSection from "./sampleMenus";
import TrustedBySection from "./trustedBy";
import DashboardAccessSection from "./dashboardAccess";
import FaqSection from "./faq";

export default function WeeMenu() {
  return (
    <>
      <HeroSection />      <HowItWorksSection />
      <FeaturesSection />
      <SampleMenusSection />
      <TrustedBySection />
      <DashboardAccessSection />
      <FaqSection />
    </>
  );
}
