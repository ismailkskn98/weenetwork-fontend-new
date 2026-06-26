import { Mail } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

import LanguageChange from "@/components/site/common/languageChange";

import MobileNav from "./mobile-nav";
import Navbar from "./navbar";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import MotionScrollInView from "../common/motionScrollInView";

export default async function Header() {
  const locale = await getLocale();
  const translations = await getTranslations("Navigation");

  const navLinks = [
    { href: "#about", label: translations("about") },
    { href: "#faq", label: translations("blog") },
    { href: "/weemenu", label: translations("weeMenu") },
    { href: "#products-weecard", label: translations("weeCard") },
    { href: "#products-weecatalog", label: translations("weeCatalog") },
  ];

  return (
    <header className="relative z-30 mt-4 sm:mt-6">
      <main className="flex items-center lg:justify-between lg:w-full">
        <Link href="/" aria-label="WeeNetwork home" className="hidden xl:flex items-center gap-2">
          <Image src="/images/logo/Varlık 15500.svg" alt="WeeNetwork logo" width={100} height={100} className="w-16 object-contain sm:w-20" />
        </Link>
        <MotionScrollInView className="w-full lg:w-auto">
          <section className="flex-1 flex w-full max-w-5xl items-center justify-self-center justify-between gap-3 rounded-full bg-surface-soft lg:w-fit px-3 py-2 sm:gap-5 sm:px-4 lg:gap-7.5">
            <Link href="/" aria-label="WeeNetwork home" className="flex xl:hidden items-center gap-2">
              <Image src="/images/logo/Varlık 15500.svg" alt="WeeNetwork logo" width={100} height={100} className="w-16 object-contain sm:w-20" />
            </Link>
            <Navbar links={navLinks} className="hidden lg:flex" />
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="inline-block md:hidden">
                <LanguageChange locale={locale} />
              </div>
              <MobileNav links={navLinks} email={translations("email")} menuLabel={translations("menu")} className="lg:hidden" />
              <a
                href={`mailto:${translations("email")}`}
                className="hidden md:flex h-11 items-center justify-center rounded-full bg-dark-surface px-3 text-white transition-colors duration-300 ease-out hover:bg-dark-soft sm:min-w-44 sm:px-4"
              >
                <Mail aria-hidden="true" className="size-4 sm:hidden" />
                <span className="hidden whitespace-nowrap text-body-sm font-semibold sm:inline text-white">{translations("email")}</span>
              </a>
            </div>
          </section>
        </MotionScrollInView>
        <MotionScrollInView className="relative  hidden lg:block">
          <LanguageChange locale={locale} />
        </MotionScrollInView>
      </main>
    </header>
  );
}
