import { getTranslations } from "next-intl/server";
import Image from "next/image";

import AnimatedLink from "@/components/site/common/animatedLink";
import MotionScrollInView from "@/components/site/common/motionScrollInView";

function PlayStoreIcon({ className, ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
    </svg>
  );
}

export default async function DownloadSection() {
  const translations = await getTranslations("WeeMenu.download");

  return (
    <section id="download" className="weemenu-section overflow-hidden bg-dark-surface">
      <div className="gridContainer">
        <MotionScrollInView className="relative">
          <div className="flex w-full flex-col items-center gap-12 sm:gap-14 lg:flex-row lg:items-center lg:gap-8 xl:gap-11 2xl:gap-14">
            <div className="w-full flex-1">
              <div className="relative mx-auto max-w-xs sm:max-w-sm lg:mx-0">
                <div className="relative mx-auto aspect-[3/4] max-w-[280px] overflow-hidden rounded-[2.5rem] bg-brand-orange p-6 sm:max-w-sm sm:rounded-[3rem] sm:p-8 lg:max-w-[300px] xl:max-w-sm">
                  <Image
                    src="/images/weeMenuBurger.webp"
                    alt={translations("primaryCardAlt")}
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 300px, 384px"
                    className="object-cover object-center"
                  />
                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-3 backdrop-blur-sm sm:bottom-8 sm:left-8 sm:right-8 sm:p-4">
                    <p className="text-xl font-bold text-page-foreground sm:text-2xl">$12.99</p>
                    <p className="text-sm text-text-muted">{translations("primaryCardTitle")}</p>
                  </div>
                </div>

                <div className="absolute -right-2 top-1/2 hidden aspect-[3/4] max-w-[220px] -translate-y-1/2 overflow-hidden rounded-[2.5rem] bg-white p-5 shadow-2xl lg:block xl:max-w-[260px] xl:rounded-[3rem] xl:p-6 2xl:-right-4 2xl:max-w-[280px]">
                  <Image src="/images/weeMenuClassic.webp" alt={translations("secondaryCardAlt")} fill sizes="(max-width: 1280px) 220px, 280px" className="object-cover object-center" />
                  <div className="absolute bottom-5 left-5 right-5 xl:bottom-6 xl:left-6 xl:right-6">
                    <p className="text-base font-bold text-page-foreground xl:text-lg">$8.50</p>
                    <p className="text-caption text-text-muted">{translations("secondaryCardTitle")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-xl flex-1 lg:max-w-none">
              <h2 className="weemenu-heading-inverse">{translations("title")}</h2>
              <p className="weemenu-lead-inverse max-w-md">{translations("description")}</p>

              <div className="mt-6 sm:mt-8">
                <AnimatedLink href="https://weenetwork.menu/auth/login" variant="primary" icon={PlayStoreIcon} iconClassName="size-5" className="weemenu-btn gap-3 text-white!">
                  {translations("buttonText")}
                </AnimatedLink>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 sm:mt-12 sm:gap-8">
                <div>
                  <p className="text-xl font-bold text-white sm:text-2xl">15+</p>
                  <p className="text-sm text-gray-400">{translations("stat1")}</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-white sm:text-2xl">12k+</p>
                  <p className="text-sm text-gray-400">{translations("stat2")}</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-white sm:text-2xl">95%</p>
                  <p className="text-sm text-gray-400">{translations("stat3")}</p>
                </div>
              </div>
            </div>
          </div>
        </MotionScrollInView>
      </div>
    </section>
  );
}
