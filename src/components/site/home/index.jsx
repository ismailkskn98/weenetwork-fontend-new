import AboutSection from "./about";
import FaqSection from "./faq";
import HeroSection from "./hero";
import ProductsSection from "./products";
import SolutionsSection from "./solutions";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <AboutSection />
      <ProductsSection />
      <FaqSection />
    </>
  );
}
