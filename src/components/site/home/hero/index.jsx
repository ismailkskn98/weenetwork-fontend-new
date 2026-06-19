import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

import AnimatedLink from "@/components/site/common/animatedLink";
import HeroVideoDialog from "@/components/site/common/heroVideoDialog";
import MotionScrollInView from "../../common/motionScrollInView";
import MotionScrollInViewOpacity from "../../common/motionScrollInViewOpacity";

export default async function HeroSection() {
  const translations = await getTranslations("Home.hero");

  return (
    <section className="fluid gridContainer relative isolate overflow-hidden pb-16 sm:pb-24 pt-20 sm:pt-24 lg:pt-27 lg:min-h-180">
      {/* <Image src="/images/heroTexture.png" alt="" fill priority sizes="100vw" className="fluid -z-20 object-cover object-top opacity-60" /> */}
      <MotionScrollInViewOpacity className="fluid absolute inset-0 -z-10 pointer-events-none opacity-25!">
        <video autoPlay muted loop playsInline className="fluid absolute inset-x-0 top-0 z-0 w-full h-full object-cover object-[50%_20%]">
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </MotionScrollInViewOpacity>

      <MotionScrollInView className="flex w-full max-w-5xl flex-col items-center justify-self-center text-center">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-xl bg-surface-soft">
            <Image src="/images/badge-icon.svg" alt="" width={20} height={20} className="w-4 h-4 object-contain object-center animate-spin animation-duration-[5s]" />
          </span>
          <span className="text-left leading-tight">
            <strong className="block text-sm font-semibold text-page-foreground sm:text-base leading-none">{translations("eyebrowTitle")}</strong>
            <span className="block text-xs font-semibold text-text-muted sm:text-sm">{translations("eyebrowText")}</span>
          </span>
        </div>

        <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-[1.02] tracking-normal text-page-foreground sm:text-6xl lg:text-[86px] lg:leading-25">
          <span className="block">{translations("titleStart")}</span>
          <span className="block">{translations("titleMiddle")}</span>
          <span className="block text-brand-blue">{translations("titleAccent")}</span>
        </h1>

        <p className="mt-3 sm:mt-5 max-w-145 text-base leading-7 text-text-muted sm:text-lg lg:text-xl font-normal">{translations("description")}</p>

        <div className="relative z-20 mt-5 sm:mt-8 flex w-full max-w-md flex-col justify-center gap-4 sm:w-auto sm:max-w-none sm:flex-row">
          <HeroVideoDialog label={translations("videoButton")} className="w-full sm:w-auto" />
          <AnimatedLink href="#solutions" variant="soft" icon={ArrowRight} className="w-full sm:w-auto">
            {translations("solutionsButton")}
          </AnimatedLink>
        </div>
      </MotionScrollInView>
    </section>
  );
}
