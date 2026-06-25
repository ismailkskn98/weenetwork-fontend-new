import { getTranslations } from "next-intl/server";

import WeeMenu from "@/components/site/weemenu";
import { routing } from "@/i18n/routing";

const logoImageUrl = "/images/logo/Varl%C4%B1k%2018500.png";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const translations = await getTranslations({
    locale,
    namespace: "Seo.weemenu",
  });

  return {
    title: translations("title"),
    description: translations("description"),
    keywords: translations.raw("keywords"),
    alternates: {
      canonical: `/${locale}/weemenu`,
      languages: {
        ...Object.fromEntries(routing.locales.map((supportedLocale) => [supportedLocale, `/${supportedLocale}/weemenu`])),
        "x-default": `/${routing.defaultLocale}/weemenu`,
      },
    },
    openGraph: {
      title: translations("title"),
      description: translations("description"),
      url: `/${locale}/weemenu`,
      siteName: "WeeNetwork",
      locale,
      type: "website",
      images: [
        {
          url: logoImageUrl,
          alt: "WeeMenu",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: translations("title"),
      description: translations("description"),
      images: [logoImageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function WeeMenuPage() {
  return (
    <main className="w-full fluid gridContainer">
      <WeeMenu />
    </main>
  );
}
