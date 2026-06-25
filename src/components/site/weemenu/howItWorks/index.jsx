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
    <div ref={rootRef} className="relative mx-auto w-full max-w-5xl">
      <div className="relative mx-auto aspect-square w-full max-w-4xl">
        {/* Ring */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full border border-gray-200" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-[6%] rounded-full border border-dashed border-gray-300" />

        {/* Phone mock */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="relative w-[230px] sm:w-[285px] lg:w-[300px] aspect-9/19 p-2 rounded-[2.75rem] bg-gray-900 shadow-2xl ring-1 ring-gray-200">
            <div className="absolute left-1/2 top-3 h-7 w-32 -translate-x-1/2 rounded-full bg-black/70" />
            <div className="absolute inset-2 overflow-hidden rounded-[2.25rem] bg-white">
              <PhoneScreenCarousel />
            </div>
          </div>
        </div>

        {/* Orbit */}
        <div className="orbit-spin absolute inset-0 z-30">
          {steps.map((step, index) => {
            const posClass = index === 0 ? "left-[6%] top-[14%]" : index === 1 ? "right-[6%] top-[14%]" : index === 2 ? "left-[6%] bottom-[14%]" : "right-[6%] bottom-[14%]";

            return (
              <div key={step.title} data-orbit-card className={["orbit-counter-spin absolute z-40 w-[240px] rounded-2xl bg-white p-5 shadow-lg ring-1 ring-black/5", posClass].join(" ")}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-page-foreground">{step.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-text-muted">{step.description}</p>
                  </div>
                  <div className={["shrink-0 rounded-full p-2 text-white", step.iconBg].join(" ")}>
                    <step.icon className="size-4" />
                  </div>
                </div>
                <div aria-hidden="true" className={["mt-4 h-[2px] w-full rounded-full", step.accent].join(" ")} />
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
    <section id="how-it-works" className="pb-16 lg:pb-24 bg-white overflow-hidden">
      <div className="">
        <MotionScrollInView className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>{translations("label")}</SectionLabel>
          <h2 className="mt-6 text-3xl font-semibold text-page-foreground sm:text-4xl lg:text-5xl">{translations("title")}</h2>
          <p className="mt-4 text-base text-text-muted sm:text-lg">{translations("description")}</p>
        </MotionScrollInView>

        <div className="hidden lg:block">
          <OrbitCards steps={steps} />
        </div>

        {/* Fallback for mobile - show cards in grid */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div key={step.title} className="bg-white rounded-2xl p-5 shadow-lg ring-1 ring-black/5">
              <div className="flex justify-end mb-2">
                <div className={["rounded-full p-2 text-white", step.iconBg].join(" ")}>
                  <step.icon className="size-4" />
                </div>
              </div>
              <h3 className="text-sm font-semibold text-page-foreground text-left">{step.title}</h3>
              <p className="text-xs text-text-muted text-left mt-1 leading-relaxed">{step.description}</p>
              <div aria-hidden="true" className={["mt-4 h-[2px] w-full rounded-full", step.accent].join(" ")} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
