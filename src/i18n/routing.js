import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "tr", "az", "ru", "ka"],
  defaultLocale: "en",
  localePrefix: "always",
});
