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
    <section id="dashboard-access" className="fluid overflow-hidden bg-black py-14 sm:py-16 lg:py-20 2xl:py-24 my-4">
      <div className="gridContainer">
        <MotionScrollInView>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-center lg:gap-8 xl:gap-11 2xl:gap-14">
            <div className="max-w-lg lg:max-w-none lg:py-2 xl:max-w-xl md:mx-auto lg:mx-0 md:text-center lg:text-start">
              <SectionLabel classNames="bg-white/10 text-white" spanClassNames="bg-white/90">
                {translations("label")}
              </SectionLabel>
              <h2 className="weemenu-heading-inverse lg:text-display-section-lg xl:text-display-section-xl">{translations("title")}</h2>
              <p className="weemenu-lead-inverse max-w-md md:mx-auto lg:mx-0">{translations("description")}</p>

              <div className="mt-6 sm:mt-8">
                <AnimatedLink href="https://weenetwork.menu/auth/login" variant="primary" icon={ArrowRight} iconClassName="size-5" className="weemenu-btn text-white!">
                  {translations("buttonText")}
                </AnimatedLink>
              </div>

              <div className="mt-8 flex flex-wrap gap-2 sm:mt-10 md:justify-center lg:justify-start">
                {DEVICES.map(({ key, icon: Icon }) => (
                  <span key={key} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-sm text-white/90 lg:text-xs xl:text-sm">
                    <Icon aria-hidden="true" className="size-3.5 text-white/70" />
                    {translations(key)}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full max-w-md md:mx-auto lg:mx-0 lg:max-w-none lg:justify-self-auto lg:pl-1">
              <ThemePreview labels={{ dark: translations("themeDark"), light: translations("themeLight") }} />
            </div>
          </div>
        </MotionScrollInView>
      </div>
    </section>
  );
}
