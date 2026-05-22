"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { cn, scrollToCurrentHash } from "@/lib/utils";

function isActiveFooterLink(pathname, href) {
  return !href.startsWith("#") && pathname === href;
}

export default function FooterLinks({ columns }) {
  const pathname = usePathname();

  return (
    <div className="grid gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-[1fr_1fr_0.85fr]">
      {columns.map((column) => (
        <section key={column.title} className="border-t border-white/30 pt-4">
          <h2 className="text-xs font-medium text-white/55">{column.title}</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            {column.links.map((link) => {
              const isActive = isActiveFooterLink(pathname, link.href);

              return (
                <Link
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  target={link.target}
                  rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => scrollToCurrentHash(link.href)}
                  className={cn("w-fit transition-colors duration-300 ease-out hover:text-brand-orange!", isActive ? "text-brand-orange!" : "text-white")}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
