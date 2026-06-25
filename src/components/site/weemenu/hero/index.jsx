import Image from "next/image";
import { ArrowRight, BadgeCheck, Globe, ScanLine } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

import AnimatedLink from "@/components/site/common/animatedLink";
import SectionLabel from "@/components/site/home/sectionLabel";
import MotionScrollInView from "@/components/site/common/motionScrollInView";
import MotionScrollInViewOpacity from "@/components/site/common/motionScrollInViewOpacity";
import { fetchLatestMenus, getMenuDisplayImage, hasMenuImage, pickMenus } from "@/lib/weemenu";

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

        <MotionScrollInView className="flex-1 relative w-full max-w-2xl">
          <div className="relative mx-auto aspect-[1.05/1] w-full max-w-[760px]">
            <div className="absolute right-[6%] top-[8%] hidden size-[62%] rounded-full bg-linear-to-br from-brand-orange/8 via-surface-warm to-transparent blur-3xl lg:block" />

            <div className="absolute left-0 top-[6%] hidden w-[28%] space-y-4 lg:block z-20">
              {backgroundCard ? (
                <div className="rounded-[28px] border border-black/6 bg-white p-3 shadow-[0_18px_50px_rgba(15,23,42,0.09)]">
                  <div className="relative aspect-[1/1.06] overflow-hidden rounded-[22px] bg-surface-soft">
                    <Image src={backgroundCard.background} alt={backgroundCard.name} fill sizes="220px" className="object-cover" />
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <p className="line-clamp-1 text-sm font-semibold text-page-foreground">{backgroundCard.name}</p>
                    <span className="rounded-full bg-brand-orange/10 px-2.5 py-1 text-[11px] font-semibold text-brand-orange">QR</span>
                  </div>
                </div>
              ) : null}

              {textCard ? (
                <div className="rounded-[24px] border border-black/6 bg-page-foreground px-5 py-4 text-white shadow-[0_18px_50px_rgba(15,23,42,0.16)]">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/55">Yayindaki menu</p>
                  <p className="mt-3 line-clamp-2 text-lg font-semibold leading-tight">{textCard.name}</p>
                  <p className="mt-3 text-sm text-white/70">{textCard.products_count || 0}+ urun</p>
                </div>
              ) : null}
            </div>

            <div className="absolute left-1/2 top-1/2 z-10 w-[56%] max-w-[360px] -translate-x-1/2 -translate-y-1/2">
              <div className="relative aspect-9/19 rounded-[3rem] bg-[#101010] p-2 shadow-sm ring-1 ring-black/8">
                <div className="absolute left-1/2 top-3 z-10 h-7 w-30 -translate-x-1/2 rounded-full bg-black/80" />
                <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-black">
                  <Image src="/images/weemenu/hero-menu-example.webp" alt="WeeMenu App Interface" fill sizes="(max-width: 768px) 75vw, 360px" className="object-cover object-center" priority />
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-[4%] hidden w-[20%] lg:block z-20">
              {sideBackgroundCard ? (
                <div className="rounded-[28px] border border-black/6 bg-white p-3 shadow-[0_18px_50px_rgba(15,23,42,0.09)]">
                  <div className="relative aspect-[0.78/1.2] overflow-hidden rounded-[22px] bg-surface-soft">
                    <Image src={sideBackgroundCard.background} alt={sideBackgroundCard.name} fill sizes="180px" className="object-cover" />
                  </div>
                </div>
              ) : null}
            </div>

            <div className="absolute bottom-[10%] right-[6%] hidden w-[24%] lg:block z-20">
              {logoCard ? (
                <div className="rounded-[24px] border border-black/6 bg-white p-3 shadow-[0_18px_50px_rgba(15,23,42,0.09)]">
                  <div className="flex items-center gap-3">
                    <div className="relative size-14 overflow-hidden rounded-2xl bg-surface-soft">
                      <Image src={getMenuDisplayImage(logoCard, "logo")} alt={logoCard.name} fill sizes="156px" className="object-cover" />
                    </div>
                    <div className="min-w-0">
                      <p className="line-clamp-1 text-sm font-semibold text-page-foreground">{logoCard.name}</p>
                      <p className="mt-1 text-xs text-text-muted text-nowrap">{logoCard.categories_count || 0}+ kategori</p>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </MotionScrollInView>
      </div>
    </section>
  );
}
