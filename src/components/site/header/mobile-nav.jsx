"use client";

import { Mail, Menu, XIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import { isActiveLink } from "./navbar";

export default function MobileNav({ links, email, menuLabel, className }) {
  const pathname = usePathname();

  return (
    <Sheet modal={false}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon-lg"
            aria-label={menuLabel}
            className={cn("rounded-full text-page-foreground transition-colors duration-300 ease-out hover:bg-white/90 hover:text-brand-orange", className)}
          />
        }
      >
        <Menu aria-hidden="true" className="size-5" />
      </SheetTrigger>

      <SheetContent side="right" showCloseButton={false} className="flex w-[min(100vw-1.5rem,20rem)] flex-col gap-0 rounded-l-[28px] bg-white border-0! p-0 ssm:max-w-xs">
        <SheetHeader className="gap-3 border-b border-surface-soft px-5 py-5 flex flex-row items-center justify-between w-full">
          <Link href="/" aria-label="WeeNetwork home" className="w-fit">
            <Image src="/images/logo/Varlık 18500.png" alt="" width={88} height={88} className="h-9 w-auto object-contain" />
          </Link>
          <SheetClose className="text-page-foreground cursor-pointer">
            <XIcon aria-hidden="true" className="size-5" />
          </SheetClose>
        </SheetHeader>

        <nav aria-label="Primary navigation" className="flex flex-1 flex-col gap-1 px-3 py-4">
          {links.map((link) => {
            const isActive = isActiveLink(pathname, link.href);
            return (
              <SheetClose
                key={`${link.href}-${link.label}`}
                render={
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex min-h-12 items-center rounded-2xl px-4 text-[15px] font-medium text-page-foreground transition-colors duration-300 ease-out hover:bg-surface-soft hover:text-brand-orange",
                      isActive && "bg-surface-soft text-brand-orange",
                    )}
                  />
                }
              >
                {link.label}
              </SheetClose>
            );
          })}
        </nav>

        <SheetFooter className="border-t border-surface-soft px-5 py-5">
          <a
            href={`mailto:${email}`}
            className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-dark-surface px-4 text-sm font-semibold text-white transition-colors duration-300 ease-out hover:bg-dark-soft"
          >
            <Mail aria-hidden="true" className="size-4 shrink-0" />
            <span className="truncate text-white">{email}</span>
          </a>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
