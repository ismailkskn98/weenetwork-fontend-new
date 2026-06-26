"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

const ROW_CONFIG = [
  { reverse: false, duration: "78s" },
  { reverse: true, duration: "88s" },
  { reverse: false, duration: "96s" },
  { reverse: true, duration: "104s" },
  { reverse: false, duration: "112s" },
];

function shuffleArray(array) {
  const next = [...array];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function ensureMarqueeItems(items, minLength = 10) {
  if (items.length === 0) return [];
  if (items.length >= minLength) return items;

  const duplicated = [];
  while (duplicated.length < minLength) {
    duplicated.push(...items);
  }
  return duplicated.slice(0, minLength);
}

function LogoCard({ item }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      aria-label={item.name}
      className={cn(
        "relative flex min-w-[168px] items-center gap-3 overflow-hidden rounded-2xl border border-black/6 bg-white px-3.5 py-3",
        "shadow-[0_2px_12px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:scale-[1.02]",
      )}
    >
      <div className="relative size-10 shrink-0 overflow-hidden rounded-full bg-surface-soft">
        <Image src={item.logo} alt={item.name} fill sizes="40px" className="object-cover" />
      </div>
      <span className="line-clamp-2 text-left text-sm font-medium leading-tight text-page-foreground">{item.name}</span>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 top-1/2 size-16 -translate-y-1/2 rounded-full bg-brand-orange/10 blur-2xl"
      />
    </a>
  );
}

function MarqueeRow({ items, reverse = false, duration = "80s" }) {
  const trackItems = useMemo(() => [...items, ...items], [items]);

  if (items.length === 0) return null;

  return (
    <div className="integrations-marquee-row overflow-hidden py-1.5">
      <div
        className={cn("integrations-marquee-track flex w-max gap-3", reverse && "integrations-marquee-track-reverse")}
        style={{ "--marquee-duration": duration }}
      >
        {trackItems.map((item, index) => (
          <LogoCard key={`${item.id}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Integrations({ items = [], className }) {
  const [rows, setRows] = useState([]);

  const marqueeItems = useMemo(() => ensureMarqueeItems(items), [items]);

  useEffect(() => {
    if (marqueeItems.length === 0) {
      setRows([]);
      return;
    }

    setRows(ROW_CONFIG.map(() => shuffleArray(marqueeItems)));
  }, [marqueeItems]);

  if (items.length === 0) return null;

  return (
    <div className={cn("relative flex w-full flex-col items-center justify-center overflow-hidden", className)}>
      {ROW_CONFIG.map((config, index) => (
        <MarqueeRow key={`row-${index}`} items={rows[index] ?? marqueeItems} reverse={config.reverse} duration={config.duration} />
      ))}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-linear-to-r from-page-background via-page-background/80 to-transparent sm:w-24 lg:w-32" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-linear-to-l from-page-background via-page-background/80 to-transparent sm:w-24 lg:w-32" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-full bg-linear-to-b from-transparent via-page-background/20 to-page-background/80" />
    </div>
  );
}
