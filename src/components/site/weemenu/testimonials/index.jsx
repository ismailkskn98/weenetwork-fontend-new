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
    <section id="testimonials" className="py-16 lg:py-24 bg-surface-warm">
      <div className="gridContainer">
        <MotionScrollInView className="text-center max-w-3xl mx-auto">
          <SectionLabel>{translations("label")}</SectionLabel>
          <h2 className="mt-6 text-3xl font-semibold text-page-foreground sm:text-4xl lg:text-5xl">
            {translations("title")}
          </h2>
          <p className="mt-4 text-base text-text-muted sm:text-lg">
            {translations("description")}
          </p>
        </MotionScrollInView>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <MotionScrollInView
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 fill-brand-orange text-brand-orange"
                  />
                ))}
              </div>
              <p className="mt-5 text-base text-page-foreground leading-relaxed">
                {testimonial.content}
              </p>
              <div className="mt-6 pt-6 border-t border-border-soft">
                <p className="font-semibold text-page-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-text-muted">{testimonial.role}</p>
              </div>
            </MotionScrollInView>
          ))}
        </div>
      </div>
    </section>
  );
}
