import { getLocale, getTranslations } from "next-intl/server";
import { fetchPlatformStats, fetchTrustedLogos, toMenuPublicUrl } from "@/lib/weemenu";

import LogoMarquee from "./logoMarquee";

function formatStat(value) {
  if (value >= 1000) {
    return `${Math.floor(value / 1000)}k+`;
  }
  return `${value}+`;
}

export default async function TrustedBySection() {
  const locale = await getLocale();
  const translations = await getTranslations("WeeMenu.trustedBy");
  const [logos, stats] = await Promise.all([fetchTrustedLogos(locale, 32), fetchPlatformStats()]);

  if (!logos.length) return null;

  const marqueeItems = logos.map((menu) => ({
    id: menu.id,
    name: menu.name,
    logo: menu.logo_image,
    href: toMenuPublicUrl(menu.url),
  }));

  const statItems = stats
    ? [
        { label: translations("stat1"), value: formatStat(stats.active_menus) },
        { label: translations("stat2"), value: formatStat(stats.visible_products) },
        { label: translations("stat3"), value: formatStat(stats.menus_with_logo) },
      ]
    : [];

  return (
    <section id="trusted-by" className="weemenu-section relative overflow-hidden">
      <div className="gridContainer">
        <div className="relative overflow-hidden">
          <LogoMarquee items={marqueeItems} />
        </div>
      </div>
    </section>
  );
}
