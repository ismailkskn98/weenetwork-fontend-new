import { getTranslations } from "next-intl/server";

import SectionLabel from "@/components/site/home/sectionLabel";
import MotionScrollInView from "@/components/site/common/motionScrollInView";

import WeeMenuFaqAccordion from "./faqAccordion";

export default async function FaqSection() {
  const translations = await getTranslations("WeeMenu.faq");
  const faqItems = translations.raw("items");
  const categories = translations.raw("categories");

  return (
    <section id="faq" className="weemenu-section">
      <div className="gridContainer">
        <div className="mx-auto max-w-3xl">
          <MotionScrollInView>
            <SectionLabel>{translations("label")}</SectionLabel>
            <h2 className="weemenu-heading">{translations("title")}</h2>
            <p className="weemenu-lead">{translations("description")}</p>
          </MotionScrollInView>

          <WeeMenuFaqAccordion items={faqItems} categories={categories} allLabel={translations("all")} />
        </div>
      </div>
    </section>
  );
}
