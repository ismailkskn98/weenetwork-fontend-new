"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, QrCode } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { resolveImageUrl } from "@/lib/weemenu";

function toMenuUrl(slug) {
  return `https://weenetwork.menu/menu/${encodeURIComponent(slug)}`;
}

function formatCounts(template, categoriesCount, productsCount) {
  return template.replace("{categories}", String(categoriesCount ?? 0)).replace("{products}", String(productsCount ?? 0));
}

export default function SampleMenusCarousel({ items, translations }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items || items.length === 0) return null;

  return (
    <div className="relative">
      <div className="mb-6 flex items-center justify-between gap-4 sm:mb-8">
        <div className="min-w-0">
          <p className="text-sm font-medium text-text-muted">{translations.scanToOpen}</p>
          <div className="mt-3 flex items-center gap-3">
            <div className="h-1.5 w-20 overflow-hidden rounded-full bg-gray-100">
              <div className="h-full rounded-full bg-page-foreground transition-all duration-300" style={{ width: `${((activeIndex + 1) / items.length) * 100}%` }} />
            </div>
            <p className="text-sm font-semibold tabular-nums text-page-foreground">
              {String(activeIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            ref={prevRef}
            type="button"
            className="flex size-10 items-center justify-center rounded-full border border-black/10 bg-white text-page-foreground shadow-sm transition hover:border-black/20 hover:bg-surface-soft sm:size-11"
            aria-label={translations.prev}
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            ref={nextRef}
            type="button"
            className="flex size-10 items-center justify-center rounded-full border border-black/10 bg-page-foreground text-white shadow-sm transition hover:opacity-90 sm:size-11"
            aria-label={translations.next}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, A11y]}
        onBeforeInit={(swiper) => {
          if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation
        spaceBetween={16}
        slidesPerView={1.08}
        breakpoints={{
          640: { slidesPerView: 1.25, spaceBetween: 18 },
          768: { slidesPerView: 1.6, spaceBetween: 20 },
          1024: { slidesPerView: 2.2, spaceBetween: 22 },
          1280: { slidesPerView: 2.6, spaceBetween: 24 },
          1536: { slidesPerView: 3, spaceBetween: 24 },
        }}
        className="overflow-visible"
      >
        {items.map((menu) => {
          const href = toMenuUrl(menu.url);
          const bg = resolveImageUrl(menu.background || menu.logo_image);
          return (
            <SwiperSlide key={menu.id} className="p-1">
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group relative block rounded-[28px] border border-black/8 bg-[#fcfcfb] p-2.5 sm:rounded-[32px] sm:p-3"
                aria-label={`${menu.name} - ${translations.openInNewTab}`}
              >
                <div className="relative overflow-hidden rounded-[26px] border border-black/6 bg-white">
                  <div className="relative aspect-[4/3.7] overflow-hidden bg-linear-to-br from-[#f7efe5] via-[#fbfbfb] to-[#eef3f8]">
                    {bg ? (
                      <Image src={bg} alt={menu.name} fill sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 380px" className="object-cover transition duration-700 group-hover:scale-[1.06]" />
                    ) : (
                      <Image
                        src={"/images/weemenu/restoran-modern.jpg"}
                        alt={menu.name}
                        fill
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 380px"
                        className="object-cover transition duration-700 group-hover:scale-[1.06]"
                      />
                    )}

                    <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/70 z-10" />

                    <div className="absolute z-20 left-4 right-4 top-4 flex items-center justify-end sm:justify-between gap-3">
                      <div className="hidden sm:flex items-center gap-2 rounded-full border border-black/5 bg-white/88 px-3 py-2 text-caption font-semibold text-page-foreground shadow-[0_8px_20px_rgba(15,23,42,0.08)] backdrop-blur-md">
                        <QrCode className="size-3.5 text-brand-orange" />
                        {translations.scanToOpen}
                      </div>
                      <div className="rounded-full border border-black/5 bg-white/88 p-2 text-page-foreground shadow-[0_8px_20px_rgba(15,23,42,0.08)] backdrop-blur-md transition group-hover:scale-105">
                        <ArrowUpRight className="size-4.5" />
                      </div>
                    </div>

                    <div className="absolute z-20 inset-0 flex items-center justify-center p-6">
                      <div className="w-full max-w-[260px] text-center transition duration-300">
                        <div className="relative mx-auto flex min-h-[100px] sm:min-h-[138px] items-center justify-center">
                          <div className="pointer-events-none absolute inset-0 flex items-center justify-center transition duration-300 group-hover:scale-95 group-hover:opacity-0">
                            <div className="rounded-[22px] border border-black/6 bg-white p-2 shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
                              <div className="block md:hidden">
                                <QRCodeSVG value={href} size={80} includeMargin />
                              </div>
                              <div className="hidden md:block">
                                <QRCodeSVG value={href} size={110} includeMargin />
                              </div>
                            </div>
                          </div>

                          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                            <div className="size-[130px] gap-2 rounded-[22px] bg-page-foreground px-5 py-3 text-sm font-semibold text-white shadow-lg flex flex-col items-center justify-center">
                              <ArrowUpRight className="size-5" />
                              {translations.viewMenu}
                            </div>
                          </div>
                        </div>

                        <p className="mt-4 line-clamp-2 text-base sm:text-lg font-semibold leading-tight text-white">{menu.name}</p>

                        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                          <span className="rounded-full border border-white/6 bg-white/15 px-3 py-1.5 text-caption font-medium text-white">
                            {menu.categories_count ?? 0} {translations.categoryCount}
                          </span>
                          <span className="rounded-full border border-white/6 bg-white/15 px-3 py-1.5 text-caption font-medium text-white">
                            {menu.products_count ?? 0} {translations.productCount}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="mt-6 flex items-center justify-center gap-2 lg:hidden">
        {items.map((menu, index) => (
          <span key={menu.id} className={["h-1.5 rounded-full transition-all duration-300", index === activeIndex ? "w-8 bg-page-foreground" : "w-2 bg-gray-300"].join(" ")} aria-hidden="true" />
        ))}
      </div>
    </div>
  );
}
