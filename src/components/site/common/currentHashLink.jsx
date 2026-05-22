"use client";

import { Link } from "@/i18n/navigation";
import { scrollToCurrentHash } from "@/lib/utils";

export default function CurrentHashLink({ href, children, ...props }) {
  return (
    <Link href={href} onClick={() => scrollToCurrentHash(href)} {...props}>
      {children}
    </Link>
  );
}
