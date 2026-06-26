import { getTranslations } from "next-intl/server";

import { WEEMENU_LOGIN_URL } from "@/lib/weemenu";
import MotionScrollInViewOpacity from "../../common/motionScrollInViewOpacity";

export default async function FreeTrialBanner() {
  const translations = await getTranslations("WeeMenu.freeTrial");

  return (
    <>
      <MotionScrollInViewOpacity className="fluid sticky top-0 z-50 flex min-h-10 items-center justify-center bg-brand-orange px-4 py-2 text-center text-sm font-medium text-white sm:min-h-11 sm:text-body-md">
        <p>
          {translations("bannerMessage")}{" "}
          <a href={WEEMENU_LOGIN_URL} className="font-semibold underline! underline-offset-2! decoration-white/90! transition-colors hover:decoration-white!">
            {translations("bannerLink")}
          </a>
        </p>
      </MotionScrollInViewOpacity>
    </>
  );
}
