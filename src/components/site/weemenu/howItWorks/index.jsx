"use client";

import { useTranslations } from "next-intl";
import { LayoutTemplate, Palette, FileText, Smartphone } from "lucide-react";
import { useEffect, useMemo, useRef } from "react";

import SectionLabel from "@/components/site/home/sectionLabel";
import MotionScrollInView from "@/components/site/common/motionScrollInView";
import PhoneScreenCarousel from "./phoneScreenCarousel";

function OrbitCards({ steps }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        root.classList.toggle("orbit-paused", !entry.isIntersecting);
      },
      { rootMargin: "80px", threshold: 0 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="relative mx-auto w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
      <div className="relative mx-auto aspect-square w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full border border-gray-200" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-[6%] rounded-full border border-dashed border-gray-300" />

        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="relative aspect-9/19 h-[min(52dvh,560px)] w-auto sm:h-[min(56dvh,600px)] lg:h-auto lg:w-[46%] lg:max-w-[220px] xl:max-w-[260px] 2xl:max-w-[300px] rounded-[2.5rem] bg-gray-900 p-1.5 shadow-2xl ring-1 ring-gray-200 lg:rounded-[2.75rem] lg:p-2 2xl:rounded-[2.75rem]">
            <div className="absolute left-1/2 top-2.5 h-6 w-24 -translate-x-1/2 rounded-full bg-black/70 lg:top-3 lg:h-7 lg:w-32" />
            <div className="absolute inset-1.5 overflow-hidden rounded-[2rem] bg-white lg:inset-2 lg:rounded-[2.25rem]">
              <PhoneScreenCarousel />
            </div>
          </div>
        </div>

        <div className="orbit-spin absolute inset-0 z-30">
          {steps.map((step, index) => {
            const posClass = index === 0 ? "left-[6%] top-[14%]" : index === 1 ? "right-[6%] top-[14%]" : index === 2 ? "left-[6%] bottom-[14%]" : "right-[6%] bottom-[14%]";

            return (
              <div
                key={step.title}
                data-orbit-card
                className={["orbit-counter-spin absolute z-40 w-[200px] rounded-2xl bg-white p-4 shadow-lg ring-1 ring-black/5 xl:w-[220px] xl:p-5 2xl:w-[240px]", posClass].join(" ")}
              >
                <div className="flex items-start flex-col xl:flex-row xl:justify-between gap-2 xl:gap-4">
                  <div className="order-2 xl:order-1">
                    <h3 className="text-body-md font-semibold text-page-foreground xl:text-sm">{step.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-text-muted xl:text-sm">{step.description}</p>
                  </div>
                  <div className={["shrink-0 order-1 xl:order-2 rounded-full p-2 text-white", step.iconBg].join(" ")}>
                    <step.icon className="size-4" />
                  </div>
                </div>
                <div aria-hidden="true" className={["mt-3 h-[2px] w-full rounded-full xl:mt-4", step.accent].join(" ")} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  const translations = useTranslations("WeeMenu.howItWorks");

  const steps = useMemo(
    () => [
      {
        icon: LayoutTemplate,
        title: translations("step1Title"),
        description: translations("step1Description"),
        iconBg: "bg-blue-600",
        accent: "bg-blue-200",
      },
      {
        icon: Palette,
        title: translations("step2Title"),
        description: translations("step2Description"),
        iconBg: "bg-brand-orange",
        accent: "bg-orange-200",
      },
      {
        icon: FileText,
        title: translations("step3Title"),
        description: translations("step3Description"),
        iconBg: "bg-emerald-600",
        accent: "bg-emerald-200",
      },
      {
        icon: Smartphone,
        title: translations("step4Title"),
        description: translations("step4Description"),
        iconBg: "bg-purple-600",
        accent: "bg-purple-200",
      },
    ],
    [translations],
  );

  return (
    <section id="how-it-works" className="weemenu-section overflow-hidden bg-white">
      <div className="gridContainer">
        <MotionScrollInView className="mx-auto mb-12 max-w-2xl text-center sm:mb-14 lg:mb-16 xl:max-w-3xl">
          <SectionLabel>{translations("label")}</SectionLabel>
          <h2 className="weemenu-heading">{translations("title")}</h2>
          <p className="weemenu-lead mx-auto max-w-xl">{translations("description")}</p>
        </MotionScrollInView>

        <div className="hidden lg:block">
          <OrbitCards steps={steps} />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:hidden">
          {steps.map((step) => (
            <div key={step.title} className="rounded-2xl bg-white p-4 shadow-lg ring-1 ring-black/5 sm:p-5">
              <div className="mb-2 flex justify-end">
                <div className={["rounded-full p-2 text-white", step.iconBg].join(" ")}>
                  <step.icon className="size-4" />
                </div>
              </div>
              <h3 className="text-left text-body-md font-semibold text-page-foreground">{step.title}</h3>
              <p className="mt-1 text-left text-xs leading-relaxed text-text-muted sm:text-sm">{step.description}</p>
              <div aria-hidden="true" className={["mt-4 h-[2px] w-full rounded-full", step.accent].join(" ")} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
