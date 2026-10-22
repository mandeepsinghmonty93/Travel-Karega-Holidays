
"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

import "swiper/css";

import { images } from "@/data/images";
import SafeImage from "../ui/SafeImage";

const arrow =
  "pointer-events-auto absolute top-[46%] z-30 grid h-11 w-11 place-items-center rounded-full border border-white/80 text-white hover:bg-white/15 md:h-12 md:w-12";

export default function Hero() {
  const [reduce, setReduce] = useState(true);
  const [sw, setSw] = useState<SwiperType | null>(null);

  useEffect(() => {
    setReduce(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  return (
    <section
      aria-label="Featured destinations"
      className="relative h-[560px] bg-navy md:h-[700px]"
    >
      {/* Background Image Slider */}
      <Swiper
        className="absolute inset-0 h-full"
        modules={[A11y, Autoplay]}
        onSwiper={setSw}
        loop={images.hero.length > 1}
        speed={800}
        autoplay={
          reduce
            ? false
            : {
                delay: 6000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }
        }
      >
        {images.hero.map((s, i) => (
          <SwiperSlide key={s.place}>
            <div className="relative h-full w-full">
              <SafeImage
                src={s.src}
                alt={s.alt}
                priority={i === 0}
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dark Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-navy/40" />

      {/* Hero Text */}
      <div className="container-x pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center pb-28 pt-16 text-center">
        <p className="max-w-xl text-xs text-white/90 sm:text-sm">
          Discover beautiful destinations, memorable holiday packages and
          comfortable group travel experiences.
        </p>

        <h1 className="mt-3 max-w-3xl text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
          Your Journey Begins with Travel Karega Holidays
        </h1>
      </div>

      {/* Previous Slide Button */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => sw?.slidePrev()}
        className={`${arrow} left-3 md:left-8`}
      >
        <RiArrowLeftSLine size={28} />
      </button>

      {/* Next Slide Button */}
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => sw?.slideNext()}
        className={`${arrow} right-3 md:right-8`}
      >
        <RiArrowRightSLine size={28} />
      </button>
    </section>
  );
}
