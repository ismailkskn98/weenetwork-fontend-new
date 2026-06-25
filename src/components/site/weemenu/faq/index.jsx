import { getTranslations } from "next-intl/server";

import SectionLabel from "@/components/site/home/sectionLabel";
import MotionScrollInView from "@/components/site/common/motionScrollInView";

import WeeMenuFaqAccordion from "./faqAccordion";

export default async function FaqSection() {
  const translations = await getTranslations("WeeMenu.faq");
  const faqItems = translations.raw("items");
  const categories = translations.raw("categories");

  return (
    <section id="faq" className="py-16 lg:py-24">
      <div className="">
        <div className="mx-auto max-w-3xl">
          <MotionScrollInView>
            <SectionLabel>{translations("label")}</SectionLabel>
            <h2 className="mt-6 text-3xl font-semibold leading-tight text-page-foreground sm:text-4xl lg:text-5xl">{translations("title")}</h2>
            <p className="mt-4 text-base leading-7 text-text-muted sm:text-lg">{translations("description")}</p>
          </MotionScrollInView>

          <WeeMenuFaqAccordion items={faqItems} categories={categories} allLabel={translations("all")} />
        </div>
      </div>
    </section>
  );
}
