"use client";

import { useMemo, useState } from "react";
import { LayoutTemplate, Package, QrCode, Settings, UtensilsCrossed } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import MotionScrollInView from "@/components/site/common/motionScrollInView";
import { cn } from "@/lib/utils";

const CATEGORY_ICONS = {
  menu: UtensilsCrossed,
  products: Package,
  templates: LayoutTemplate,
  settings: Settings,
  qr: QrCode,
};

export default function WeeMenuFaqAccordion({ items, categories, allLabel }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const categoryKeys = useMemo(() => Object.keys(categories), [categories]);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  return (
    <MotionScrollInView className="w-full">
      <div className="mt-8 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden">
        <CategoryTab active={activeCategory === "all"} onClick={() => setActiveCategory("all")}>
          {allLabel}
        </CategoryTab>
        {categoryKeys.map((key) => (
          <CategoryTab key={key} active={activeCategory === key} onClick={() => setActiveCategory(key)}>
            {categories[key]}
          </CategoryTab>
        ))}
      </div>

      <Accordion key={activeCategory} type="single" collapsible className="mt-6 w-full sm:mt-8">
        {filteredItems.slice(0, 8).map((faqItem) => {
          const Icon = CATEGORY_ICONS[faqItem.category] ?? UtensilsCrossed;

          return (
            <AccordionItem key={faqItem.question} value={faqItem.question}>
              <AccordionTrigger className="gap-4 sm:gap-5">
                <span className="flex min-w-0 items-center gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border-soft bg-surface-soft">
                    <Icon aria-hidden="true" className="size-[18px] text-page-foreground" />
                  </span>
                  <span className="text-left">{faqItem.question}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pl-14 sm:pl-18">{faqItem.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </MotionScrollInView>
  );
}

function CategoryTab({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors duration-300",
        active ? "border-page-foreground bg-page-foreground text-white" : "border-border-soft bg-white text-page-foreground hover:border-page-foreground/20 hover:bg-surface-soft",
      )}
    >
      {children}
    </button>
  );
}
