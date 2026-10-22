"use client";
import { Swiper } from "swiper/react";
import { A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import type { SwiperOptions } from "swiper/types";
import "swiper/css";
import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import { cn } from "@/lib/utils";

const btn = "grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-navy shadow-sm hover:bg-mist";
type P = { title: string; subtitle: string; subtitleClass?: string; breakpoints: SwiperOptions["breakpoints"]; bleed?: boolean; children: React.ReactNode };
export default function SectionCarousel({ title, subtitle, subtitleClass, breakpoints, bleed, children }: P) {
  const [sw, setSw] = useState<SwiperType | null>(null);
  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div><h2 className="text-2xl md:text-[28px]">{title}</h2>
          <p className={cn("mt-2 max-w-3xl text-xs font-semibold md:text-sm", subtitleClass)}>{subtitle}</p></div>
        <div className="flex shrink-0 gap-3">
          <button type="button" aria-label="Previous" className={btn} onClick={() => sw?.slidePrev()}><RiArrowLeftSLine /></button>
          <button type="button" aria-label="Next" className={btn} onClick={() => sw?.slideNext()}><RiArrowRightSLine /></button>
        </div>
      </div>
      <Swiper className={cn("mt-8", bleed && "!overflow-visible")} modules={[A11y]} onSwiper={setSw} spaceBetween={20} slidesPerView={1.15} breakpoints={breakpoints}>{children}</Swiper>
    </div>
  );
}
