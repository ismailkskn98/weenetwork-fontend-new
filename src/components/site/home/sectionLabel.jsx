import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function SectionLabel({ children, classNames, spanClassNames, imageClassNames }) {
  return (
    <p className={cn("inline-flex items-center gap-2 rounded-full bg-surface-soft px-3 py-2 text-xs font-semibold text-page-foreground", classNames)}>
      <span className={cn("flex size-6 items-center justify-center rounded-full bg-white", spanClassNames)}>
        <Image src="/images/section-badge-icon.svg" alt="" width={20} height={20} className={cn("w-3 h-3 object-contain object-center animate-spin [animation-duration:5s]", imageClassNames)} />
      </span>
      {children}
    </p>
  );
}
