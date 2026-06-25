import { ArrowRight, ContactRound, LibraryBig, UtensilsCrossed } from "lucide-react";
import { getTranslations } from "next-intl/server";

import AnimatedLink from "@/components/site/common/animatedLink";

import SectionLabel from "../sectionLabel";
import Image from "next/image";
import MotionScrollInViewOpacity from "../../common/motionScrollInViewOpacity";
import MotionScrollInView from "../../common/motionScrollInView";
import MotionScrollInViewVariant from "../../common/motionScrollInViewVariant";

const solutionCards = [
  { key: "weeCard", iconTop: "solutions-weecard-top", iconBottom: "solutions-weecard-bottom" },
  { key: "weeMenu", iconTop: "solutions-weemenu-top", iconBottom: "solutions-weemenu-bottom" },
  { key: "weeCatalog", iconTop: "solutions-weecatalog-top", iconBottom: "solutions-weecatalog-bottom" },
];

export default async function SolutionsSection() {
  const translations = await getTranslations("Home.solutions");

  return (
    <MotionScrollInViewOpacity id="solutions" className="fluid gridContainer bg-dark-surface py-16 text-white lg:py-20">
      <main>
        <article className="mx-auto max-w-3xl text-center">
          <SectionLabel>{translations("label")}</SectionLabel>
          <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
            <span className="block">{translations("titleFirst")}</span>
            <span className="block">{translations("titleSecond")}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-text-subtle sm:text-lg">{translations("description")}</p>
        </article>

        <MotionScrollInViewVariant className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-3">
          {solutionCards.map((card) => {
            return (
              <article key={card.key} className="relative flex min-h-72 overflow-hidden rounded-[28px] bg-brand-orange p-7 shadow-[0_20px_55px_rgba(255,81,0,0.22)] sm:p-8">
                <span className="absolute -right-4 -bottom-4 size-45 rounded-full bg-[#FFCBB3] blur-[60px]" />
                <div className="absolute top-[-25%] right-0 w-76.25 h-76.25 translate-x-[clamp(35%,60vw,80%)] sm:translate-x-[clamp(35%,20vw,70%)] border border-white border-dashed rounded-full">
                  <Image src={`/images/${card.iconTop}.svg`} alt="" width={0} height={0} className="absolute top-1/2 -translate-1/2 left-0 w-auto h-8 2xl:h-10" />
                </div>
                <div className="absolute bottom-[-65%] right-0 w-76.25 h-76.25 translate-x-[clamp(30%,60vw,70%)] sm:translate-x-[clamp(30%,15vw,60%)] border border-white border-dashed rounded-[99999]">
                  <Image src={`/images/${card.iconBottom}.svg`} alt="" width={0} height={0} className="absolute top-1/5 -translate-1/2 left-1/10 w-auto h-8 2xl:h-10" />
                </div>
                <div className="relative flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl 2xl:text-2xl font-bold">{translations(`${card.key}.title`)}</h3>
                    <p className="mt-1 text-sm 2xl:text-base font-semibold text-white/95">{translations(`${card.key}.subtitle`)}</p>
                    <p className="mt-3 2xl:mt-6 text-sm leading-6 text-white/95 2xl:text-base max-w-xs lg:max-w-62.5 2xl:max-w-xs">{translations(`${card.key}.description`)}</p>
                  </div>

                  <AnimatedLink href="#products" variant="ghost" icon={ArrowRight} className="mt-10">
                    {translations("learnMore")}
                  </AnimatedLink>
                </div>
              </article>
            );
          })}
        </MotionScrollInViewVariant>
      </main>
    </MotionScrollInViewOpacity>
  );
}
