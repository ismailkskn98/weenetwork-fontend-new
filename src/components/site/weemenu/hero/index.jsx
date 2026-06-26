import Image from "next/image";
import { ArrowRight, BadgeCheck, Globe, ScanLine } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

import AnimatedLink from "@/components/site/common/animatedLink";
import SectionLabel from "@/components/site/home/sectionLabel";
import MotionScrollInView from "@/components/site/common/motionScrollInView";
import MotionScrollInViewOpacity from "@/components/site/common/motionScrollInViewOpacity";
import { fetchLatestMenus, getMenuDisplayImage, hasMenuImage, pickMenus } from "@/lib/weemenu";
import PhoneAnimate from "./phoneAnimate";

export default async function HeroSection() {
  const locale = await getLocale();
  const translations = await getTranslations("WeeMenu.hero");
  const menus = await fetchLatestMenus(locale, 20);
  const [backgroundCard, textCard, sideBackgroundCard, logoCard] = pickMenus(menus, [{ type: "background" }, { type: "text" }, { type: "background" }, { type: "any" }]);
  const marqueeMenus = menus.filter((menu) => hasMenuImage(menu));
  const duplicatedMarqueeMenus = marqueeMenus.length > 0 ? [...marqueeMenus, ...marqueeMenus] : [];
  const featureItems = [
    {
      icon: ScanLine,
      title: translations("featureCards.scan.title"),
      description: translations("featureCards.scan.description"),
    },
    {
      icon: Globe,
      title: translations("featureCards.language.title"),
      description: translations("featureCards.language.description"),
    },
    {
      icon: BadgeCheck,
      title: translations("featureCards.update.title"),
      description: translations("featureCards.update.description"),
    },
  ];

  return (
    <section className="fluid gridContainer relative isolate overflow-x-hidden pb-14 pt-8 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-12 xl:pt-14 2xl:pb-24 2xl:pt-18">
      <MotionScrollInViewOpacity className="fluid absolute inset-0 -z-10 pointer-events-none opacity-25! rotate-180">
        <video autoPlay muted loop playsInline className="fluid absolute inset-x-0 top-0 z-0 w-full h-full object-cover object-[50%_30%]">
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </MotionScrollInViewOpacity>
      <div className="flex flex-col gap-12 sm:gap-14 lg:flex-row md:items-center md:justify-center lg:gap-8 xl:gap-11 2xl:gap-14 w-full">
        <MotionScrollInView className="min-w-0 flex-1 max-w-xl md:text-center lg:text-start md:mx-auto lg:mx-0 pt-4 lg:max-w-[48%] lg:pt-0 xl:max-w-lg 2xl:max-w-2xl">
          <SectionLabel>{translations("label")}</SectionLabel>
          <h1 className="mt-7 max-w-[12ch] md:mx-auto lg:mx-0 text-4xl font-semibold leading-display-tight tracking-[-0.04em] text-page-foreground sm:text-5xl lg:mt-5 lg:max-w-[11ch] lg:text-display-sm lg:leading-display-snug xl:text-display-md xl:max-w-[10ch] 2xl:text-display-lg 2xl:leading-display-tight">
            {translations("title")}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8 lg:mt-4 lg:max-w-md lg:text-base lg:leading-7 xl:max-w-lg xl:text-lg xl:leading-8 2xl:max-w-xl">
            {translations("description")}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row md:justify-center lg:justify-start lg:mt-6 xl:mt-8">
            <AnimatedLink
              href="https://weenetwork.menu/auth/login"
              variant="primary"
              icon={ArrowRight}
              iconClassName="size-5"
              className="px-6 text-sm lg:px-5 lg:text-sm xl:px-6 xl:text-base 2xl:px-7 text-white!"
            >
              {translations("primaryButton")}
            </AnimatedLink>
            <AnimatedLink
              href="#features"
              variant="soft"
              icon={ArrowRight}
              iconClassName="size-5"
              className="border border-page-foreground/12 bg-white px-6 text-sm hover:bg-surface-soft lg:px-5 lg:text-sm xl:px-6 xl:text-base 2xl:px-7"
            >
              {translations("secondaryButton")}
            </AnimatedLink>
          </div>

          <div className="mt-10 lg:mt-8 xl:mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-subtle">{translations("trustLabel")}</p>

            {duplicatedMarqueeMenus.length > 0 ? (
              <div className="mt-5 overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="hero-marquee flex min-w-max items-center gap-4">
                  {duplicatedMarqueeMenus.map((menu, index) => (
                    <div key={`${menu.id}-${index}`} className="flex min-w-[160px] items-center gap-3 rounded-full border border-black/6 bg-white px-4 py-2.5 shadow-sm">
                      <div className="relative size-9 overflow-hidden rounded-full bg-surface-soft">
                        <Image src={getMenuDisplayImage(menu, "logo")} alt={menu.name} fill sizes="36px" className="object-cover" />
                      </div>
                      <span className="line-clamp-1 text-sm font-medium text-page-foreground">{menu.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </MotionScrollInView>

        <PhoneAnimate backgroundCard={backgroundCard} textCard={textCard} sideBackgroundCard={sideBackgroundCard} logoCard={logoCard} />
      </div>
    </section>
  );
}
