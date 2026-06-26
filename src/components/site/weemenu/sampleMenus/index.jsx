import { getLocale, getTranslations } from "next-intl/server";

import SectionLabel from "@/components/site/home/sectionLabel";
import MotionScrollInView from "@/components/site/common/motionScrollInView";

import { fetchLatestMenus } from "@/lib/weemenu";

import SampleMenusCarousel from "./carousel";

export default async function SampleMenusSection() {
  const locale = await getLocale();
  const translations = await getTranslations("WeeMenu.sampleMenus");
  const items = await fetchLatestMenus(locale);

  if (!items || items.length === 0) return null;

  return (
    <section id="sample-menus" className="weemenu-section overflow-hidden bg-white">
      <div className="gridContainer">
        <MotionScrollInView className="max-w-2xl lg:max-w-3xl">
          <SectionLabel>{translations("label")}</SectionLabel>
          <h2 className="weemenu-heading max-w-2xl">{translations("title")}</h2>
          <p className="weemenu-lead max-w-2xl">{translations("description")}</p>
        </MotionScrollInView>

        <div className="mt-10 sm:mt-12 lg:mt-14">
          <SampleMenusCarousel
            items={items}
            translations={{
              prev: translations("prev"),
              next: translations("next"),
              viewMenu: translations("viewMenu"),
              scanToOpen: translations("scanToOpen"),
              openInNewTab: translations("openInNewTab"),
              counts: translations.raw("counts"),
              categoryCount: translations("categoryCount"),
              productCount: translations("productCount"),
            }}
          />
        </div>
      </div>
    </section>
  );
}
