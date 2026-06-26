import Footer from "@/components/site/footer";
import Header from "@/components/site/header";
import FreeTrialBanner from "@/components/site/weemenu/freeTrial/freeTrialBanner";
import FreeTrialBannerGate from "@/components/site/weemenu/freeTrial/freeTrialBannerGate";
import { ReactLenis } from "@/lib/lenis";

export default function SiteLayout({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        wheelMultiplier: 1.1,
        touchMultiplier: 1,
        autoRaf: true,
        overscroll: true,
      }}
    >
      <FreeTrialBannerGate>
        <FreeTrialBanner />
      </FreeTrialBannerGate>
      <Header />
      {children}
      <Footer />
    </ReactLenis>
  );
}
