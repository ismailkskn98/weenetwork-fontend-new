import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { Plus } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  className,
  type = "single",
  collapsible: _collapsible,
  ...props
}) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col", className)}
      multiple={type === "multiple"}
      {...props} />
  );
}

function AccordionItem({
  className,
  ...props
}) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-border-soft last:border-b-0", className)}
      {...props} />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger flex w-full flex-1 items-center justify-between gap-4 py-5 text-left text-base font-medium text-page-foreground transition-colors duration-300 ease-out outline-none hover:text-brand-orange focus-visible:text-brand-orange disabled:pointer-events-none disabled:opacity-50 sm:py-6",
          className
        )}
        {...props}>
        <span className="min-w-0 flex-1 pr-4">{children}</span>
        <span
          data-slot="accordion-trigger-icon"
          className="flex size-6 shrink-0 items-center justify-center text-page-foreground"
          aria-hidden="true"
        >
          <Plus className="size-5 stroke-[1.75] transition-transform duration-300 ease-out group-aria-expanded/accordion-trigger:rotate-45" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="overflow-hidden text-base data-open:animate-accordion-down data-closed:animate-accordion-up"
      {...props}>
      <div
        className={cn(
          "h-(--accordion-panel-height) pb-5 text-text-muted leading-relaxed data-ending-style:h-0 data-starting-style:h-0 sm:pb-6 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-page-foreground [&_p:not(:last-child)]:mb-4",
          className
        )}>
        {children}
      </div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
