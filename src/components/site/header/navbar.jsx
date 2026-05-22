"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

function removeLocalePrefix(pathname) {
  const [, firstSegment, ...remainingSegments] = pathname.split("/");

  if (!routing.locales.includes(firstSegment)) {
    return pathname;
  }

  return `/${remainingSegments.join("/")}`;
}

export function isActiveLink(pathname, href) {
  if (!pathname || href.startsWith("#")) {
    return false;
  }

  const currentPathname = removeLocalePrefix(pathname);
  const linkPathname = href.split("#")[0] || "/";

  if (linkPathname === "/") {
    return currentPathname === "/";
  }

  return currentPathname === linkPathname || currentPathname.startsWith(`${linkPathname}/`);
}

export default function Navbar({ links, className }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation" className={cn("items-center gap-4", className)}>
      {links.map((link) => {
        const isActive = isActiveLink(pathname, link.href);

        return (
          <Link
            key={link.label}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "whitespace-nowrap text-[15px] font-normal text-page-foreground transition-colors duration-300 ease-out hover:text-brand-orange",
              isActive && "text-brand-orange",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
