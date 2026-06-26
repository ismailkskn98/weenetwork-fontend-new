import { getTranslations } from "next-intl/server";
import { Star } from "lucide-react";

import SectionLabel from "@/components/site/home/sectionLabel";
import MotionScrollInView from "@/components/site/common/motionScrollInView";

export default async function TestimonialsSection() {
  const translations = await getTranslations("WeeMenu.testimonials");

  const testimonials = [
    {
      name: translations("testimonial1Name"),
      role: translations("testimonial1Role"),
      content: translations("testimonial1Content"),
      rating: 5,
    },
    {
      name: translations("testimonial2Name"),
      role: translations("testimonial2Role"),
      content: translations("testimonial2Content"),
      rating: 5,
    },
    {
      name: translations("testimonial3Name"),
      role: translations("testimonial3Role"),
      content: translations("testimonial3Content"),
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="weemenu-section bg-surface-warm">
      <div className="gridContainer">
        <MotionScrollInView className="mx-auto max-w-2xl text-center xl:max-w-3xl">
          <SectionLabel>{translations("label")}</SectionLabel>
          <h2 className="weemenu-heading">{translations("title")}</h2>
          <p className="weemenu-lead mx-auto max-w-xl">{translations("description")}</p>
        </MotionScrollInView>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-6 xl:gap-8">
          {testimonials.map((testimonial, index) => (
            <MotionScrollInView
              key={index}
              className="rounded-3xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7 xl:p-8"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="size-4 fill-brand-orange text-brand-orange xl:size-5" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-page-foreground sm:mt-5 sm:text-base">{testimonial.content}</p>
              <div className="mt-5 border-t border-border-soft pt-5 sm:mt-6 sm:pt-6">
                <p className="font-semibold text-page-foreground">{testimonial.name}</p>
                <p className="text-sm text-text-muted">{testimonial.role}</p>
              </div>
            </MotionScrollInView>
          ))}
        </div>
      </div>
    </section>
  );
}
