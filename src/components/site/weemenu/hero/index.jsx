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

  return (
    <section className="fluid gridContainer relative isolate overflow-hidden pb-14 pt-9 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-18 xl:pb-24 xl:pt-20">
      <MotionScrollInViewOpacity className="fluid absolute inset-0 -z-10 pointer-events-none opacity-15!">
        <div className="fluid absolute inset-0 bg-linear-to-br from-surface-soft via-white to-surface-warm" />
      </MotionScrollInViewOpacity>

      <div className="flex flex-col gap-14 xl:flex-row xl:items-center xl:gap-16">
        <MotionScrollInView className="flex-1 max-w-2xl pt-4">
          <SectionLabel>{translations("label")}</SectionLabel>

          <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.03] text-page-foreground sm:text-5xl xl:text-[66px] xl:leading-[1.02]">{translations("title")}</h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-text-muted sm:text-lg">{translations("description")}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <AnimatedLink href="https://weenetwork.menu/auth/login" variant="primary" icon={ArrowRight} iconClassName="size-5" className="px-7 text-sm lg:text-base text-white!">
              {translations("primaryButton")}
            </AnimatedLink>
            <AnimatedLink
              href="#features"
              variant="soft"
              icon={ArrowRight}
              iconClassName="size-5"
              className="border border-page-foreground/12 bg-white px-7 text-sm lg:text-base hover:bg-surface-soft"
            >
              {translations("secondaryButton")}
            </AnimatedLink>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-black/6 bg-white px-4 py-4 shadow-sm">
              <ScanLine className="size-5 text-brand-orange" />
              <p className="mt-3 text-sm font-semibold text-page-foreground">QR ile aninda erisim</p>
              <p className="mt-1 text-xs leading-5 text-text-muted">Musteriler menuyu saniyeler icinde acabilir.</p>
            </div>
            <div className="rounded-2xl border border-black/6 bg-white px-4 py-4 shadow-sm">
              <Globe className="size-5 text-brand-orange" />
              <p className="mt-3 text-sm font-semibold text-page-foreground">Coklu dil akisi</p>
              <p className="mt-1 text-xs leading-5 text-text-muted">Farkli kitlelere tek panelden hitap edin.</p>
            </div>
            <div className="rounded-2xl border border-black/6 bg-white px-4 py-4 shadow-sm">
              <BadgeCheck className="size-5 text-brand-orange" />
              <p className="mt-3 text-sm font-semibold text-page-foreground">Anlik menu guncelleme</p>
              <p className="mt-1 text-xs leading-5 text-text-muted">Fiyatlari ve urunleri tekrar baski olmadan yonetin.</p>
            </div>
          </div>

          <div className="mt-12">
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
