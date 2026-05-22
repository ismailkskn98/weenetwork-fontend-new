"use client";

import Image from "next/image";
import { useTransition } from "react";

import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const languages = [
  { value: "tr", label: "Türkçe", flag: "tr" },
  { value: "en", label: "English", flag: "gb" },
  { value: "az", label: "Azərbaycanca", flag: "az" },
  { value: "ru", label: "Русский", flag: "ru" },
  { value: "ka", label: "ქართული", flag: "ge" },
];

export default function LanguageChange({ locale, className }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const currentLanguage = languages.find((language) => language.value === locale);

  function handleLanguageChange(selectedLanguage) {
    startTransition(() => {
      router.replace(pathname, { locale: selectedLanguage });
    });
  }

  return (
    <Select value={locale} onValueChange={handleLanguageChange} disabled={isPending}>
      <SelectTrigger
        aria-label="Select language"
        className={cn(
          "h-11 min-w-18 cursor-pointer gap-2 rounded-full border border-black/5 px-4 text-page-foreground focus-visible:ring-2 focus-visible:ring-brand-orange/20 disabled:opacity-60 [&>svg:last-of-type]:size-3 [&>svg:last-of-type]:text-brand-blue bg-surface-soft",
          className,
        )}
      >
        {currentLanguage && (
          <>
            <Image src={`https://flagcdn.com/24x18/${currentLanguage.flag}.png`} alt="" width={24} height={18} className="h-4 w-5 shrink-0 object-cover" />
            <span className="sr-only">{currentLanguage.label}</span>
          </>
        )}
      </SelectTrigger>

      <SelectContent align="end" sideOffset={10} className="min-w-40 rounded-md border border-black/5 bg-white p-1 shadow-[0_4px_14px_rgba(13,13,13,0.14)] ring-0">
        {languages.map((language) => (
          <SelectItem
            key={language.value}
            value={language.value}
            className="cursor-pointer rounded-sm py-2 pr-9 pl-2.5 text-xs text-page-foreground focus:bg-surface-soft focus:text-page-foreground data-highlighted:bg-surface-soft data-highlighted:text-page-foreground [&_svg]:text-[#4a806e]"
          >
            <span className="flex items-center gap-2.5">
              <Image src={`https://flagcdn.com/24x18/${language.flag}.png`} alt="" width={24} height={18} className="h-3.5 w-4 shrink-0 object-cover" />
              {language.label}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
