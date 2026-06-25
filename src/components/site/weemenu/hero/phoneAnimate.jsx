"use client";
import React from "react";
import { motion } from "framer-motion";
import MotionScrollInView from "../../common/motionScrollInView";
import Image from "next/image";
import { getMenuDisplayImage } from "@/lib/weemenu";

export default function PhoneAnimate({ backgroundCard, textCard, sideBackgroundCard, logoCard }) {
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
    <MotionScrollInView className="flex-1 relative w-full max-w-2xl">
      <div className="relative mx-auto aspect-[1.05/1] w-full max-w-[760px]">
        <div className="absolute right-[6%] top-[8%] hidden size-[62%] rounded-full bg-linear-to-br from-brand-orange/8 via-surface-warm to-transparent blur-3xl lg:block" />

        <div className="absolute left-0 top-[6%] hidden w-[28%] space-y-4 lg:block z-20">
          {backgroundCard ? (
            <motion.div {...floatingMotion(0)} className="rounded-[28px] border border-black/6 bg-white p-3 shadow-[0_18px_50px_rgba(15,23,42,0.09)]">
              <div className="relative aspect-[1/1.06] overflow-hidden rounded-[22px] bg-surface-soft">
                <Image src={backgroundCard.background} alt={backgroundCard.name} fill sizes="220px" className="object-cover" />
              </div>
              <div className="mt-3 flex items-center justify-between gap-3">
                <p className="line-clamp-1 text-sm font-semibold text-page-foreground">{backgroundCard.name}</p>
                <span className="rounded-full bg-brand-orange/10 px-2.5 py-1 text-[11px] font-semibold text-brand-orange">QR</span>
              </div>
            </motion.div>
          ) : null}

          {textCard ? (
            <motion.div {...floatingMotion(1.2)} className="rounded-[24px] border border-black/6 bg-page-foreground px-5 py-4 text-white shadow-[0_18px_50px_rgba(15,23,42,0.16)]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/55">Yayindaki menu</p>
              <p className="mt-3 line-clamp-2 text-lg font-semibold leading-tight">{textCard.name}</p>
              <p className="mt-3 text-sm text-white/70">{textCard.products_count || 0}+ urun</p>
            </motion.div>
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
            <motion.div {...floatingMotion(0.7)} className="rounded-[28px] border border-black/6 bg-white p-3 shadow-[0_18px_50px_rgba(15,23,42,0.09)]">
              <div className="relative aspect-[0.78/1.2] overflow-hidden rounded-[22px] bg-surface-soft">
                <Image src={sideBackgroundCard.background} alt={sideBackgroundCard.name} fill sizes="180px" className="object-cover" />
              </div>
            </motion.div>
          ) : null}
        </div>

        <div className="absolute bottom-[10%] right-[6%] hidden w-[24%] lg:block z-20">
          {logoCard ? (
            <motion.div {...floatingMotion(1.8)} className="rounded-[24px] border border-black/6 bg-white p-3 shadow-[0_18px_50px_rgba(15,23,42,0.09)]">
              <div className="flex items-center gap-3">
                <div className="relative size-14 overflow-hidden rounded-2xl bg-surface-soft">
                  <Image src={getMenuDisplayImage(logoCard, "logo")} alt={logoCard.name} fill sizes="156px" className="object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="line-clamp-1 text-sm font-semibold text-page-foreground">{logoCard.name}</p>
                  <p className="mt-1 text-xs text-text-muted text-nowrap">{logoCard.categories_count || 0}+ kategori</p>
                </div>
              </div>
            </motion.div>
          ) : null}
        </div>
      </div>
    </MotionScrollInView>
  );
}
