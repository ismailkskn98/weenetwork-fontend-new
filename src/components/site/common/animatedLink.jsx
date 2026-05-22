import { cva } from "class-variance-authority";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const animatedLinkVariants = cva("group/action-link inline-flex items-center gap-2 transition-colors duration-300 ease-out", {
  variants: {
    variant: {
      primary: "justify-center rounded-full bg-brand-orange px-5 py-4 text-sm font-semibold text-white hover:bg-brand-orange/90",
      soft: "justify-center rounded-full bg-surface-soft px-5 py-4 text-sm font-semibold text-page-foreground hover:bg-border-soft",
      warm: "justify-center rounded-full bg-surface-warm px-5 py-4 text-sm font-medium text-page-foreground hover:bg-border-soft",
      ghost: "w-fit justify-start p-0 text-sm font-semibold text-white hover:text-white/90",
    },
  },
  defaultVariants: {
    variant: "soft",
  },
});

const motionDuration = "duration-700";
const motionEase = "ease-[cubic-bezier(0.22,1,0.36,1)]";
const motionReduce = "motion-reduce:transition-none motion-reduce:group-hover/action-link:translate-x-0 motion-reduce:group-hover/action-link:translate-y-0";

function AnimatedLabel({ children }) {
  return (
    <span className="relative inline-flex h-5 overflow-hidden">
      <span className={cn("flex flex-col will-change-transform transition-transform group-hover/action-link:-translate-y-5", motionDuration, motionEase, motionReduce)}>
        <span className="flex h-5 items-center leading-5 whitespace-nowrap">{children}</span>
        <span className="flex h-5 items-center leading-5 whitespace-nowrap" aria-hidden="true">
          {children}
        </span>
      </span>
    </span>
  );
}

function AnimatedIcon({ icon: Icon, className }) {
  return (
    <span className="relative inline-flex size-4 shrink-0 overflow-hidden">
      <span className={cn("flex w-8 will-change-transform -translate-x-4 transition-transform group-hover/action-link:translate-x-0", motionDuration, motionEase, motionReduce)}>
        <span className="flex size-4 items-center justify-center">
          <Icon aria-hidden="true" className={cn("size-4 shrink-0", className)} />
        </span>
        <span className="flex size-4 items-center justify-center">
          <Icon aria-hidden="true" className={cn("size-4 shrink-0", className)} />
        </span>
      </span>
    </span>
  );
}

export default function AnimatedLink({ href, children, icon, variant, iconClassName, className }) {
  return (
    <Link href={href} className={cn(animatedLinkVariants({ variant }), className)}>
      <AnimatedLabel>{children}</AnimatedLabel>
      <AnimatedIcon icon={icon} className={iconClassName} />
    </Link>
  );
}

export { animatedLinkVariants };
