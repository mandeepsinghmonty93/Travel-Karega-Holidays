"use client";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import { RiCameraLine, RiCarLine, RiHotelLine, RiRestaurantLine } from "@remixicon/react";
import { packages } from "@/data/packages";
import SafeImage from "../ui/SafeImage";
import SectionCarousel from "./SectionCarousel";

const inc = { transfers: [RiCarLine, "Transfers"], hotels: [RiHotelLine, "Hotels"], meals: [RiRestaurantLine, "Meals"], sightseeing: [RiCameraLine, "Sightseeing"] } as const;
export default function PopularPackages() {
  return (
    <section className="overflow-x-clip pt-16"><div className="container-x">
      <SectionCarousel bleed title="Our Popular Packages Plans" subtitle="Escape to the mountains and experience scenic valleys, refreshing weather and unforgettable Himalayan views with Travel Karega Holidays."
        subtitleClass="text-navy" breakpoints={{ 640: { slidesPerView: 2.2 }, 1024: { slidesPerView: 3.2 }, 1280: { slidesPerView: 4.2 } }}>
        {packages.map((p) => (
          <SwiperSlide key={p.slug} className="!h-auto">
            <Link href={`/packages/${p.slug}`} className="flex h-full flex-col rounded-xl bg-white p-2 shadow-sm transition hover:shadow-md">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg"><SafeImage src={p.image} alt={`${p.title} destination`} sizes="(min-width:1024px) 25vw, 80vw" /></div>
              <div className="flex flex-1 flex-col p-3">
                <p className="text-[11px] text-slate2">{p.destinationLabel}</p>
                <h3 className="mt-1 text-sm">{p.title}</h3>
                {p.includes?.length ? <><p className="mt-3 text-[11px] text-slate2">Include</p>
                  <ul className="mt-1 flex gap-3">{p.includes.map((k) => { const [Icon, l] = inc[k]; return <li key={k} className="flex flex-col items-center gap-0.5 text-[10px] text-slate2"><Icon size={16} />{l}</li>; })}</ul></> : null}
                <div className="mt-auto flex items-center justify-between border-t border-line pt-3 text-xs">
                  <span className="text-slate2">{p.durationShort ?? ""}</span>
                  <span className="font-bold text-navy">{p.price ? `From ${p.price}` : "Enquire for price"}</span></div>
              </div>
            </Link>
          </SwiperSlide>))}
      </SectionCarousel>
    </div></section>
  );
}
