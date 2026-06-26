"use client";

import { usePathname } from "@/i18n/navigation";

function isWeeMenuPath(pathname) {
  return pathname === "/weemenu" || pathname.startsWith("/weemenu/");
}

export default function FreeTrialBannerGate({ children }) {
  const pathname = usePathname();

  if (!isWeeMenuPath(pathname)) {
    return null;
  }

  return children;
}
