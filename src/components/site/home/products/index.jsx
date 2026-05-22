import { ArrowRight, Check, Sparkle, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import AnimatedLink from "@/components/site/common/animatedLink";

import SectionLabel from "../sectionLabel";

function ProductList({ items }) {
  return (
    <ul className="mt-5 space-y-0 text-[13px] leading-6 text-text-muted">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-page-foreground" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProductLink({ href, children }) {
  return (
    <AnimatedLink href={href} variant="warm" icon={ArrowRight} className="mt-6 w-fit">
      {children}
    </AnimatedLink>
  );
}

export default async function ProductsSection() {
  const translations = await getTranslations("Home.products");
  const weeCardItems = translations.raw("weeCard.items");
  const weeMenuItems = translations.raw("weeMenu.items");
  const weeCatalogItems = translations.raw("weeCatalog.items");

  return (
    <section id="products" className="pb-20 lg:pb-24">
      <div>
        <header>
          <SectionLabel>{translations("label")}</SectionLabel>
          <h2 className="mt-5 text-3xl font-semibold text-page-foreground sm:text-5xl">{translations("title")}</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-text-muted sm:text-lg">{translations("description")}</p>
        </header>

        <div className="mt-8 space-y-5 lg:mt-10">
          <article id="products-weecard" className="grid overflow-hidden rounded-[28px] border border-border-soft bg-surface-warm p-2 lg:grid-cols-[1fr_1.2fr]">
            <article className="flex flex-col justify-between rounded-[22px] bg-white p-7 sm:p-9">
                <div className="flex flex-col">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-surface-warm">
                    <Image src="/images/weeCardPreview.png" alt="" width={100} height={100} className="size-8 object-contain" />
                  </div>
                  <h3 className="mt-6 text-3xl font-medum">WeeCard</h3>
                  <p className="mt-1 text-sm text-text-muted">{translations("weeCard.subtitle")}</p>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-text-muted">{translations("weeCard.description")}</p>
                  <ProductList items={weeCardItems} />
                </div>
                <ProductLink href="https://weenetwork.cards">{translations("weeCard.button")}</ProductLink>
              </article>

              <div className="relative flex overflow-hidden rounded-[22px] max-h-133.75">
                <div className="absolute inset-x-0 bottom-0 z-40 h-28 bg-linear-to-t from-surface-warm via-surface-warm/80 to-transparent" />
                <article className="relative flex-1 flex items-start w-full overflow-hidden pt-8">
                  <div className="relative bg-white -rotate-8 mt-6 translate-x-1/5 rounded-[20px] aspect-280/569 w-full max-w-70 overflow-hidden z-10">
                    <Image src="/images/weeCardProfileOne.png" alt="WeeCard dark profile preview" fill unoptimized className="object-center rounded-[20px] border-[3px] border-white" />
                  </div>
                  <div className="relative bg-white rounded-[20px] aspect-310/630 w-full max-w-77.5 scale-110 overflow-hidden z-20 ">
                    <Image src="/images/weeCardProfileTwo.png" alt="WeeCard baby shop profile preview" fill unoptimized className="object-center rounded-[20px] border-[3px] border-white" />
                  </div>
                  <div className="relative bg-white rotate-8 mt-6 -translate-x-1/5 rounded-[20px] aspect-280/569 w-full max-w-70 overflow-hidden z-30 ">
                    <Image src="/images/weeCardProfileThree.png" alt="WeeCard blue profile preview" fill unoptimized className="object-center rounded-[20px] border-[3px] border-white" />
                  </div>
                </article>
              </div>
          </article>

          <article id="products-weemenu" className="grid overflow-hidden rounded-[28px] border border-border-soft bg-surface-warm p-2 lg:grid-cols-[1.2fr_1fr]">
              <div className="relative flex overflow-hidden rounded-[22px] max-h-133.75">
                <div className="absolute inset-x-0 bottom-0 z-40 h-28 bg-linear-to-t from-surface-warm via-surface-warm/80 to-transparent" />
                <article className="relative flex-1 flex items-start w-full overflow-hidden pt-8">
                  <div className="relative bg-white -rotate-8 mt-6 translate-x-1/5 rounded-[20px] aspect-280/569 w-full max-w-70 overflow-hidden z-30">
                    <Image src="/images/weeMenuClassic.png" alt="WeeMenu classic profile preview" fill unoptimized className="object-center rounded-[20px] border-[3px] border-white" />
                  </div>
                  <div className="relative bg-white rounded-[20px] aspect-310/630 w-full max-w-77.5 scale-110 overflow-hidden z-20 ">
                    <Image src="/images/weeMenuDefault.png" alt="WeeMenu default profile preview" fill unoptimized className="object-center rounded-[20px] border-[3px] border-white" />
                  </div>
                  <div className="relative bg-white rotate-8 mt-6 -translate-x-1/5 rounded-[20px] aspect-280/569 w-full max-w-70 overflow-hidden z-10">
                    <Image src="/images/weeMenuBurger.png" alt="WeeMenu burger profile preview" fill unoptimized className="object-center rounded-[20px] border-[3px] border-white" />
                  </div>
                </article>
              </div>

              <div className="flex flex-col justify-between order-1 rounded-[22px] bg-white p-7 sm:p-9 lg:order-2">
                <div className="flex flex-col items-start rounded-[22px] overflow-hidden max-h-133.75">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-surface-warm">
                    <Image src="/images/weeMenuPreview.png" alt="" width={100} height={100} className="size-8 object-contain" />
                  </div>
                  <h3 className="mt-6 text-3xl font-medium">WeeMenu</h3>
                  <p className="mt-1 text-sm text-text-muted">{translations("weeMenu.subtitle")}</p>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-text-muted">{translations("weeMenu.description")}</p>
                  <ProductList items={weeMenuItems} />
                </div>
                <ProductLink href="https://weenetwork.menu">{translations("weeMenu.button")}</ProductLink>
              </div>
          </article>

          <article id="products-weecatalog" className="grid overflow-hidden rounded-[28px] border border-border-soft bg-surface-warm p-2 lg:grid-cols-[1fr_1fr]">
              <div className="flex flex-col justify-between rounded-[22px] bg-white p-7 sm:p-9">
                <div className="flex flex-col items-start">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-surface-soft">
                    <Image src="/images/weeCatalogPreview.png" alt="" width={100} height={100} className="size-8 object-contain" />
                  </div>
                  <h3 className="mt-6 text-3xl font-medium">WeeCatalog</h3>
                  <p className="mt-1 text-sm text-text-muted">{translations("weeCatalog.subtitle")}</p>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-text-muted">{translations("weeCatalog.description")}</p>
                  <ProductList items={weeCatalogItems} />
                </div>
                {/* <ProductLink>{translations("weeCatalog.button")}</ProductLink> */}
              </div>

              <article className="relative min-h-90 rounded-[22px] p-6 sm:min-h-117.5 sm:p-8 overflow-hidden max-h-133.75">
                <div className="absolute inset-x-0 bottom-0 z-40 h-28 bg-linear-to-t from-surface-warm via-surface-warm/80 to-transparent" />
                <div className="relative">
                  <SectionLabel classNames="absolute right-0 top-0 z-30 bg-dark-surface text-white" spanClassNames="">
                    {translations("weeCatalog.status")}
                  </SectionLabel>
                  <div className="relative flex items-start justify-center rounded-[28px] gap-4.5 bg-linear-to-b from-white to-transparent overflow-hidden blur-[2px]">
                    <div className="aspect-280/569 w-full max-w-70 bg-surface-soft border-[3px] border-white rounded-[22px] mt-16" />
                    <div className="aspect-280/569 w-full max-w-70 bg-surface-soft border-[3px] border-white rounded-[22px] mt-33.25" />
                  </div>
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <strong className="block text-[32px] font-medium">WeeCatalog</strong>
                    <span className="text-base text-text-muted">{translations("weeCatalog.subtitle")}</span>
                  </div>
                </div>
              </article>
          </article>
        </div>
      </div>
    </section>
  );
}
