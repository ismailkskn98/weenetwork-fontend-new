import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function scrollToCurrentHash(href) {
  if (!href.startsWith("#") || window.location.hash !== href) {
    return;
  }

  document.getElementById(href.slice(1))?.scrollIntoView();
}
