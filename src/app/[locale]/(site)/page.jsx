import { getTranslations } from "next-intl/server";

import Home from "@/components/site/home";
import { routing } from "@/i18n/routing";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const translations = await getTranslations({
    locale,
    namespace: "Seo.home",
  });

  return {
    title: translations("title"),
    description: translations("description"),
    keywords: translations.raw("keywords"),
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(routing.locales.map((supportedLocale) => [supportedLocale, `/${supportedLocale}`])),
    },
    openGraph: {
      title: translations("title"),
      description: translations("description"),
      url: `/${locale}`,
      siteName: "WeeNetwork",
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: translations("title"),
      description: translations("description"),
    },
  };
}

export default function HomePage() {
  return (
    <main className="w-full fluid gridContainer">
      <Home />
    </main>
  );
}
