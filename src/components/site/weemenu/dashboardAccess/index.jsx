import { getTranslations } from "next-intl/server";
import { ArrowRight, Monitor, Smartphone as Mobile, Tablet } from "lucide-react";

import AnimatedLink from "@/components/site/common/animatedLink";
import MotionScrollInView from "@/components/site/common/motionScrollInView";
import SectionLabel from "@/components/site/home/sectionLabel";

import ThemePreview from "./themePreview";

const DEVICES = [
  { key: "device1", icon: Monitor },
  { key: "device2", icon: Tablet },
  { key: "device3", icon: Mobile },
];

export default async function DashboardAccessSection() {
  const translations = await getTranslations("WeeMenu.dashboardAccess");

  return (
    <section id="dashboard-access" className="fluid overflow-hidden bg-black py-14 sm:py-16 lg:py-20 xl:py-24">
      <div className="gridContainer">
        <MotionScrollInView>
          <div className="grid lg:items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-8 xl:gap-14">
            <div className="max-w-lg lg:max-w-xl lg:py-2">
              <SectionLabel classNames="bg-white/10 text-white" spanClassNames="bg-white/90">
                {translations("label")}
              </SectionLabel>
              <h2 className="mt-5 text-[1.75rem] font-semibold leading-[1.1] text-white sm:mt-6 sm:text-4xl lg:text-[2.35rem] xl:text-[2.65rem]">{translations("title")}</h2>
              <p className="mt-3 max-w-md text-base leading-7 text-white/75 sm:mt-4 sm:text-lg">{translations("description")}</p>

              <div className="mt-6 sm:mt-8">
                <AnimatedLink href="https://weenetwork.menu/auth/login" variant="primary" icon={ArrowRight} className="px-7 text-base">
                  {translations("buttonText")}
                </AnimatedLink>
              </div>

              <div className="mt-8 flex flex-wrap gap-2 sm:mt-10">
                {DEVICES.map(({ key, icon: Icon }) => (
                  <span key={key} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-sm text-white/90">
                    <Icon aria-hidden="true" className="size-3.5 text-white/70" />
                    {translations(key)}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full max-w-md lg:max-w-none lg:justify-self-auto lg:pl-1">
              <ThemePreview labels={{ dark: translations("themeDark"), light: translations("themeLight") }} />
            </div>
          </div>
        </MotionScrollInView>
      </div>
    </section>
  );
}
