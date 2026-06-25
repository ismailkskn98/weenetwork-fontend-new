"use client";

import Image from "next/image";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const THEMES = [
  { key: "dark", image: "/images/weemenu/dark.png" },
  { key: "light", image: "/images/weemenu/light.png" },
];

export default function ThemePreview({ labels }) {
  const [activeTheme, setActiveTheme] = useState("dark");
  const tabRefs = useRef({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const updateIndicator = useCallback(() => {
    const el = tabRefs.current[activeTheme];
    if (!el) return;
    setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
  }, [activeTheme]);

  useLayoutEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  return (
    <div className="relative w-full">
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-4 top-6 bottom-14 -z-10 rounded-[2rem] blur-3xl transition-colors duration-700 lg:inset-x-6",
          activeTheme === "dark" ? "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" : "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]",
        )}
      />

      <div className="relative mx-auto aspect-5/4 max-h-[240px] w-full overflow-hidden sm:max-h-[300px] sm:aspect-16/11 lg:mx-0 lg:max-h-none lg:aspect-16/11 xl:aspect-16/10">
        {THEMES.map((theme) => (
          <Image
            key={theme.key}
            src={theme.image}
            alt={labels[theme.key]}
            fill
            unoptimized
            priority={theme.key === "dark"}
            className={cn(
              "object-contain object-center transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
              activeTheme === theme.key ? "scale-100 opacity-100 blur-0" : "pointer-events-none scale-[0.98] opacity-0 blur-[2px]",
            )}
          />
        ))}
      </div>

      <div className="mt-5 flex justify-center">
        <div className="relative flex gap-7 border-b border-white/20 px-1 sm:gap-8">
          {THEMES.map((theme) => {
            const isActive = activeTheme === theme.key;
            return (
              <button
                key={theme.key}
                ref={(node) => {
                  tabRefs.current[theme.key] = node;
                }}
                type="button"
                onClick={() => setActiveTheme(theme.key)}
                className={cn("relative cursor-pointer pb-2.5 text-sm font-medium tracking-[0.01em] transition-colors duration-300", isActive ? "text-white" : "text-white/65 hover:text-white")}
                aria-pressed={isActive}
              >
                {labels[theme.key]}
              </button>
            );
          })}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 h-px rounded-full bg-white transition-[left,width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
            style={{ left: indicator.left, width: indicator.width }}
          />
        </div>
      </div>
    </div>
  );
}
