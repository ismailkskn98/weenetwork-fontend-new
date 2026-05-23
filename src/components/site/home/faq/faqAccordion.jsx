"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import MotionScrollInView from "../../common/motionScrollInView";

export default function FaqAccordion({ items }) {
  return (
    <MotionScrollInView className="mx-aut w-full">
      <Accordion type="single" collapsible className="mt-9 w-full sm:mt-10">
        {items.map((faqItem) => (
          <AccordionItem key={faqItem.question} value={faqItem.question}>
            <AccordionTrigger>{faqItem.question}</AccordionTrigger>
            <AccordionContent>{faqItem.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </MotionScrollInView>
  );
}
