"use client";
import { motion } from "framer-motion";
import MotionScrollInView from "../../common/motionScrollInView";
import Image from "next/image";
import { getMenuDisplayImage } from "@/lib/weemenu";

export default function PhoneAnimate({ backgroundCard, textCard, sideBackgroundCard, logoCard, labels }) {
  const floatingMotion = (delay = 0) => ({
    animate: {
      x: [0, 5, -4, 3, 0],
      y: [0, -7, 4, -3, 0],
      rotate: [0, 0.3, -0.3, 0.2, 0],
      duration: 8,
    },
    transition: {
      duration: 7,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
      delay,
    },
  });

  return (
    <MotionScrollInView className="relative w-full max-w-[600px] lg:max-w-[420px] xl:max-w-[500px] 2xl:max-w-[600px]">
      <div className="relative mx-auto w-full max-w-[600px] lg:max-w-[420px] xl:max-w-[500px] 2xl:max-w-[600px]">
        <div className="relative">
          <div className="flex justify-center">
            <div className="relative z-10 mx-auto aspect-9/19 w-[min(72vw,300px)] shrink-0 sm:w-[min(68vw,340px)] lg:w-[52%] lg:max-w-[260px] xl:w-[54%] xl:max-w-[310px] 2xl:w-[58%] 2xl:max-w-[370px]">
              <div className="relative h-full w-full rounded-[2.5rem] bg-[#101010] p-1.5 ring-1 ring-black/8 lg:rounded-[2.75rem] lg:p-2 2xl:rounded-[3rem]">
                <div className="absolute left-1/2 top-2.5 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black/80 lg:top-3 lg:h-7 lg:w-30" />
                <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-black lg:rounded-[2.25rem] 2xl:rounded-[2.5rem]">
                  <Image
                    src="/images/weemenu/hero-menu-example.webp"
                    alt={labels.appInterfaceAlt}
                    fill
                    sizes="(max-width: 640px) 75vw, (max-width: 1024px) 280px, (max-width: 1536px) 320px, 370px"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 *:pointer-events-auto">
            <div className="absolute left-[2%] top-[10%] z-20 hidden w-[28%] space-y-3 lg:block lg:space-y-3 xl:space-y-4">
              {backgroundCard ? (
                <motion.div {...floatingMotion(0)} className="rounded-[22px] border border-black/6 bg-white p-2.5 xl:rounded-[28px] xl:p-3">
                  <div className="relative aspect-[1/1.06] overflow-hidden rounded-[18px] bg-surface-soft xl:rounded-[22px]">
                    <Image src={backgroundCard.background} alt={backgroundCard.name} fill sizes="(max-width: 1280px) 160px, 220px" className="object-cover" />
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-2 xl:mt-3 xl:gap-3">
                    <p className="line-clamp-1 text-xs font-semibold text-page-foreground xl:text-sm">{backgroundCard.name}</p>
                    <span className="rounded-full bg-brand-orange/10 px-2 py-0.5 text-2xs font-semibold text-brand-orange xl:px-2.5 xl:py-1 xl:text-caption">{labels.qrBadge}</span>
                  </div>
                </motion.div>
              ) : null}

              {textCard ? (
                <motion.div
                  {...floatingMotion(1.2)}
                  className="rounded-[20px] border border-black/6 bg-page-foreground px-4 py-3 text-white shadow-[0_18px_50px_rgba(15,23,42,0.16)] xl:rounded-[24px] xl:px-5 xl:py-4"
                >
                  <p className="text-2xs uppercase tracking-[0.18em] text-white/55 xl:text-caption">{labels.liveMenuLabel}</p>
                  <p className="mt-2 line-clamp-2 text-base font-semibold leading-tight xl:mt-3 xl:text-lg">{textCard.name}</p>
                  <p className="mt-2 text-xs text-white/70 xl:mt-3 xl:text-sm">
                    {textCard.products_count || 0}+ {labels.productCountSuffix}
                  </p>
                </motion.div>
              ) : null}
            </div>

            <div className="absolute right-[2%] top-[8%] z-20 hidden w-[20%] lg:block">
              {sideBackgroundCard ? (
                <motion.div {...floatingMotion(0.7)} className="rounded-[22px] border border-black/6 bg-white p-2.5 shadow-[0_18px_50px_rgba(15,23,42,0.09)] xl:rounded-[28px] xl:p-3">
                  <div className="relative aspect-[0.78/1.2] overflow-hidden rounded-[18px] bg-surface-soft xl:rounded-[22px]">
                    <Image src={sideBackgroundCard.background} alt={sideBackgroundCard.name} fill sizes="(max-width: 1280px) 140px, 180px" className="object-cover" />
                  </div>
                </motion.div>
              ) : null}
            </div>

            <div className="absolute bottom-[14%] left-[4%] z-20 w-[52%] max-w-[220px] sm:bottom-[12%] sm:left-[6%] sm:w-[44%] lg:hidden">
              {textCard ? (
                <motion.div {...floatingMotion(0.5)} className="rounded-[24px] border border-black/6 bg-page-foreground px-4 py-4 text-white shadow-[0_18px_50px_rgba(15,23,42,0.18)]">
                  <p className="text-caption uppercase tracking-[0.18em] text-white/55">{labels.liveMenuLabel}</p>
                  <p className="mt-2 line-clamp-2 text-base font-semibold leading-tight">{textCard.name}</p>
                  <p className="mt-2 text-xs text-white/70">
                    {textCard.products_count || 0}+ {labels.productCountSuffix}
                  </p>
                </motion.div>
              ) : null}
            </div>

            <div className="absolute bottom-[12%] right-[8%] z-20 w-[34%] max-w-[150px] sm:bottom-[10%] sm:right-[10%] sm:w-[28%] lg:hidden">
              {logoCard ? (
                <motion.div {...floatingMotion(1.1)} className="rounded-[22px] border border-black/6 bg-white p-2.5 shadow-[0_18px_50px_rgba(15,23,42,0.10)]">
                  <div className="flex items-center gap-2.5">
                    <div className="relative size-11 overflow-hidden rounded-xl bg-surface-soft">
                      <Image src={getMenuDisplayImage(logoCard, "logo")} alt={logoCard.name} fill sizes="44px" className="object-cover" />
                    </div>
                    <div className="min-w-0">
                      <p className="line-clamp-1 text-xs font-semibold text-page-foreground">{logoCard.name}</p>
                      <p className="mt-0.5 text-caption text-text-muted">
                        {logoCard.categories_count || 0}+ {labels.categoryCountSuffix}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </div>

            <div className="absolute bottom-[10%] right-[6%] z-20 hidden w-[24%] lg:block">
              {logoCard ? (
                <motion.div {...floatingMotion(1.8)} className="rounded-[20px] border border-black/6 bg-white p-2.5 shadow-[0_18px_50px_rgba(15,23,42,0.09)] xl:rounded-[24px] xl:p-3">
                  <div className="flex items-center gap-2.5 xl:gap-3">
                    <div className="relative size-11 overflow-hidden rounded-xl bg-surface-soft xl:size-14 xl:rounded-2xl">
                      <Image src={getMenuDisplayImage(logoCard, "logo")} alt={logoCard.name} fill sizes="(max-width: 1280px) 44px, 56px" className="object-cover" />
                    </div>
                    <div className="min-w-0">
                      <p className="line-clamp-1 text-xs font-semibold text-page-foreground xl:text-sm">{logoCard.name}</p>
                      <p className="mt-0.5 text-2xs text-text-muted xl:mt-1 xl:text-xs">
                        {logoCard.categories_count || 0}+ {labels.categoryCountSuffix}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </MotionScrollInView>
  );
}
