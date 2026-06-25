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
    <section id="download" className="py-16 lg:py-24 bg-dark-surface overflow-hidden">
      <div className="gridContainer">
        <MotionScrollInView className="relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 w-full">
              <div className="relative">
                <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-[3rem] overflow-hidden bg-brand-orange p-8">
                  <Image
                    src="/images/weeMenuBurger.webp"
                    alt="Delicious Burger"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center"
                  />
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4">
                    <p className="text-2xl font-bold text-page-foreground">$12.99</p>
                    <p className="text-sm text-text-muted">Classic Burger</p>
                  </div>
                </div>

                <div className="absolute -right-4 top-1/2 -translate-y-1/2 aspect-[3/4] max-w-[280px] rounded-[3rem] overflow-hidden bg-white p-6 shadow-2xl hidden lg:block">
                  <Image
                    src="/images/weeMenuClassic.webp"
                    alt="Classic Menu"
                    fill
                    sizes="280px"
                    className="object-cover object-center"
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-lg font-bold text-page-foreground">$8.50</p>
                    <p className="text-xs text-text-muted">Classic Dish</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 max-w-xl">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                {translations("title")}
              </h2>
              <p className="mt-4 text-base text-gray-400 sm:text-lg">
                {translations("description")}
              </p>

              <div className="mt-8">
                <AnimatedLink href="https://weenetwork.menu/auth/login" variant="primary" icon={PlayStoreIcon} className="gap-3 px-8 text-base sm:text-lg">
                  {translations("buttonText")}
                </AnimatedLink>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <p className="text-2xl font-bold text-white">15+</p>
                  <p className="text-sm text-gray-400">{translations("stat1")}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">12k+</p>
                  <p className="text-sm text-gray-400">{translations("stat2")}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">95%</p>
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
