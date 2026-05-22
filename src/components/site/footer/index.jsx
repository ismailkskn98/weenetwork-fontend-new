import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

import FooterLinks from "./footer-links";

const footerColumns = [
  {
    titleKey: "pages",
    links: [
      { href: "/", labelKey: "home" },
      { href: "mailto:info@weenetwork.com", labelKey: "contact" },
      { href: "https://weenetwork.cards", label: "WeeCard", target: "_blank" },
      { href: "https://weenetwork.menu", label: "WeeMenu" },
      { href: "#products", label: "WeeCatalog" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    titleKey: "examples",
    links: [
      { href: "https://weenetwork.cards/tr/card/new1", labelKey: "weeCardExample" },
      { href: "https://weenetwork.menu/tr/menu/sokak", labelKey: "weeMenuExample" },
      { href: "#products", labelKey: "weeCatalogExample" },
      { href: "#faq", labelKey: "latestBlog" },
    ],
  },
  {
    titleKey: "legal",
    links: [
      { href: "#", labelKey: "terms" },
      { href: "#", labelKey: "privacy" },
      { href: "#", labelKey: "cookies" },
    ],
  },
];

export default async function Footer() {
  const translations = await getTranslations("Footer");
  const currentYear = new Date().getFullYear();
  const translatedFooterColumns = footerColumns.map((column) => ({
    title: translations(column.titleKey),
    links: column.links.map((link) => ({
      ...link,
      label: link.label || translations(link.labelKey),
    })),
  }));

  return (
    <footer
      id="contact"
      className="fluid gridContainer gap-10 bg-dark-surface py-14 text-white sm:py-16 lg:py-20 overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "8px 8px",
      }}
    >
      <section className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-12">
        <article className="flex flex-col justify-between gap-10">
          <Link href="/" className="relative flex w-fit items-center gap-2">
            <Image src="/images/logo/Varlık 20500.svg" alt="WeeNetwork logo" width={100} height={100} className="w-24 object-contain sm:w-28" />
          </Link>
        </article>

        <FooterLinks columns={translatedFooterColumns} />
      </section>
      <section className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-12">
        <article className="flex flex-col justify-between gap-10 lg:gap-20">
          <div className="flex flex-wrap gap-3">
            {[
              { url: "https://www.instagram.com/weecomi_international_official/", icon: FaInstagram },
              { url: "https://www.facebook.com/profile.php?id=61578091767255", icon: FaFacebookF },
              { url: "https://x.com/weecoinspremium", icon: FaXTwitter },
              { url: "https://www.youtube.com/@Weecoins", icon: FaYoutube },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-11 items-center justify-center rounded-full bg-white/25 transition-colors duration-300 ease-out hover:bg-brand-orange"
                >
                  <Icon className="size-5 text-white" />
                </Link>
              );
            })}
          </div>
          <p className="max-w-xs text-xs leading-6 text-white/65">
            (c) {currentYear} <span className="text-white">WeeNetwork</span>, {translations("copyright")}. {translations("poweredBy")}.
          </p>
        </article>
        <article className="max-w-sm border-t border-white/30 pt-4">
          <div className="flex flex-col gap-10 sm:gap-14 lg:gap-40">
            <div>
              <h2 className="text-xs font-medium text-white/55">{translations("support")}</h2>
              <a href="mailto:info@weenetwork.com" className="mt-3 block text-sm transition-colors duration-300 ease-out hover:text-brand-orange">
                info@weenetwork.com
              </a>
              <a href="mailto:info@weecomi.com" className="mt-2 block text-sm transition-colors duration-300 ease-out hover:text-brand-orange">
                info@weecomi.com
              </a>
            </div>

            <div>
              <h2 className="text-xs font-medium text-white/55">{translations("phone")}</h2>
              <a href="tel:+908503020731" className="mt-3 block text-sm transition-colors duration-300 ease-out hover:text-brand-orange">
                +90 (850) 302 0731
              </a>
            </div>
          </div>
        </article>
      </section>
    </footer>
  );
}
