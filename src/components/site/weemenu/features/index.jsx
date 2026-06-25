import { getTranslations } from "next-intl/server";
import { LayoutTemplate, Palette, FileText, Globe, Smartphone, Wifi, Star, Clock } from "lucide-react";

import SectionLabel from "@/components/site/home/sectionLabel";
import MotionScrollInView from "@/components/site/common/motionScrollInView";

export default async function FeaturesSection() {
  const translations = await getTranslations("WeeMenu.features");

  const features = [
    {
      icon: LayoutTemplate,
      title: translations("feature1Title"),
      description: translations("feature1Description"),
    },
    {
      icon: Palette,
      title: translations("feature2Title"),
      description: translations("feature2Description"),
    },
    {
      icon: FileText,
      title: translations("feature3Title"),
      description: translations("feature3Description"),
    },
    {
      icon: Globe,
      title: translations("feature4Title"),
      description: translations("feature4Description"),
    },
    {
      icon: Smartphone,
      title: translations("feature5Title"),
      description: translations("feature5Description"),
    },
    {
      icon: Wifi,
      title: translations("feature6Title"),
      description: translations("feature6Description"),
    },
    {
      icon: Star,
      title: translations("feature7Title"),
      description: translations("feature7Description"),
    },
    {
      icon: Clock,
      title: translations("feature8Title"),
      description: translations("feature8Description"),
    },
  ];

  return (
    <section id="features" className="pb-14 lg:pb-24">
      <div className="">
        <MotionScrollInView className="mx-auto max-w-2xl text-center">
          <SectionLabel>{translations("label")}</SectionLabel>
          <h2 className="mt-5 text-[1.75rem] font-semibold leading-tight text-page-foreground sm:mt-6 sm:text-4xl xl:text-[2.75rem]">{translations("title")}</h2>
          <p className="mt-3 text-base leading-7 text-text-muted sm:mt-4 sm:text-lg">{translations("description")}</p>
        </MotionScrollInView>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 xl:mt-14 xl:grid-cols-4 xl:gap-5">
          {features.map((feature, index) => (
            <MotionScrollInView
              key={feature.title}
              className="rounded-2xl border border-border-soft/70 bg-white p-4 transition-colors duration-300 hover:border-border-soft hover:bg-surface-soft/35 sm:p-5"
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <div className="flex items-start gap-3.5">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-page-foreground/4 text-page-foreground">
                  <feature.icon className="size-4" strokeWidth={1.75} />
                </div>
                <div className="min-w-0 pt-0.5">
                  <h3 className="text-[15px] font-semibold leading-snug text-page-foreground sm:text-base">{feature.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-text-muted">{feature.description}</p>
                </div>
              </div>
            </MotionScrollInView>
          ))}
        </div>
      </div>
    </section>
  );
}
