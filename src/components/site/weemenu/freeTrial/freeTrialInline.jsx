import { getTranslations } from "next-intl/server";

import { cn } from "@/lib/utils";
import { WEEMENU_LOGIN_URL } from "@/lib/weemenu";

export default async function FreeTrialInline({ variant = "default", className }) {
  const translations = await getTranslations("WeeMenu.freeTrial");
  const isInverse = variant === "inverse";

  return (
    <p className={cn("text-sm leading-6", isInverse ? "text-white/80" : "text-text-muted", className)}>
      {translations("inlineMessage")}{" "}
      <a
        href={WEEMENU_LOGIN_URL}
        className={cn(
          "font-semibold underline! underline-offset-2! transition-colors",
          isInverse ? "text-white! decoration-white/70! hover:decoration-white!" : "text-brand-orange! decoration-brand-orange/40! hover:decoration-brand-orange!",
        )}
      >
        {translations("inlineLink")}
      </a>
    </p>
  );
}
