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
    <section id="sample-menus" className="pb-16 lg:pb-24 bg-white overflow-hidden">
      <div className="">
        <MotionScrollInView className="max-w-3xl">
          <SectionLabel>{translations("label")}</SectionLabel>
          <h2 className="mt-6 max-w-2xl text-3xl font-semibold leading-[1.08] text-page-foreground sm:text-4xl lg:text-5xl">{translations("title")}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted sm:text-lg">{translations("description")}</p>
        </MotionScrollInView>

        <div className="mt-12">
          <SampleMenusCarousel
            items={items}
            translations={{
              prev: translations("prev"),
              next: translations("next"),
              viewMenu: translations("viewMenu"),
              scanToOpen: translations("scanToOpen"),
              openInNewTab: translations("openInNewTab"),
              counts: translations.raw("counts"),
            }}
          />
        </div>
      </div>
    </section>
  );
}
