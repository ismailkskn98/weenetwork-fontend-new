import { getTranslations } from "next-intl/server";

import FaqAccordion from "./faqAccordion";
import SectionLabel from "../sectionLabel";
import MotionScrollInView from "../../common/motionScrollInView";

export default async function FaqSection() {
  const translations = await getTranslations("Home.faq");
  const faqItems = translations.raw("items");

  return (
    <section id="faq" className="pb-20 lg:pb-24">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-0">
        <MotionScrollInView className="text-center">
          <SectionLabel>{translations("label")}</SectionLabel>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-page-foreground sm:text-5xl">
            <span className="block">{translations("titleFirst")}</span>
            <span className="block">{translations("titleSecond")}</span>
          </h2>
        </MotionScrollInView>
        <FaqAccordion items={faqItems} />
      </div>
    </section>
  );
}
