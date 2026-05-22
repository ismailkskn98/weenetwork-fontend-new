import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import localFont from "next/font/local";

import { routing } from "@/i18n/routing";

import "../globals.css";

const plusJakartaSans = localFont({
  src: [
    {
      path: "../../fonts/PlusJakartaSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/PlusJakartaSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/PlusJakartaSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/PlusJakartaSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/PlusJakartaSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/PlusJakartaSans-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const notoSans = localFont({
  src: [
    {
      path: "../../fonts/NotoSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/NotoSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/NotoSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/NotoSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/NotoSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/NotoSans-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../fonts/NotoSans-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSansGeorgian = localFont({
  src: [
    {
      path: "../../fonts/NotoSansGeorgian-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/NotoSansGeorgian-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/NotoSansGeorgian-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/NotoSansGeorgian-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/NotoSansGeorgian-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/NotoSansGeorgian-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../fonts/NotoSansGeorgian-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-noto-sans-georgian",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://weenetwork.com"),
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning className={`${plusJakartaSans.variable} ${notoSans.variable} ${notoSansGeorgian.variable}`}>
      <body suppressHydrationWarning className="font-sans gridContainer antialiased">
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
