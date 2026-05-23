import { Sparkle } from "lucide-react";
import { getTranslations } from "next-intl/server";

import SectionLabel from "../sectionLabel";
import WordOpacityReveal from "./aboutAnimateText";

export default async function AboutSection() {
  const translations = await getTranslations("Home.about");

  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <SectionLabel>{translations("label")}</SectionLabel>

        <p className="mx-auto mt-6 sm:max-w-225 text-2xl font-medium leading-relaxed text-page-foreground sm:text-2xl lg:text-3xl">
          <WordOpacityReveal>
            {translations.rich("content", {
              digitalTools: (chunks) => <span className="inline-block rounded-full bg-brand-orange px-2 py-1 text-white">{chunks}</span>,
              features: (chunks) => <span className="font-medium">{chunks}</span>,
              icon: () => (
                <span aria-hidden="true" className="mx-1 my-auto inline-flex size-6 items-center justify-center rounded-full bg-brand-blue text-white sm:size-7">
                  <Sparkle className="size-4 fill-current stroke-0 sm:size-5" />
                </span>
              ),
            })}
          </WordOpacityReveal>
        </p>
      </div>
    </section>
  );
}
