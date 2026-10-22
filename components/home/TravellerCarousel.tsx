"use client";
import { SwiperSlide } from "swiper/react";
import { images, travellers } from "@/data/images";
import SafeImage from "../ui/SafeImage";
import SectionCarousel from "./SectionCarousel";
import { useBooking } from "../forms/BookingProvider";
import type { Enquiry } from "@/lib/schemas";

export default function TravellerCarousel() {
  const { openBooking } = useBooking();
  return (
    <section id="traveller-booking" className="py-16"><div className="container-x">
      <SectionCarousel title="Comfortable Group Travel for Every Journey" subtitleClass="text-accent"
        subtitle="Choose a suitable seating capacity for your next family holiday, group tour, corporate outing or outstation trip."
        breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
        {travellers.map((t) => (
          <SwiperSlide key={t.seats} className="!h-auto">
            <button type="button" aria-label={`Check availability for ${t.seats} seater Traveller`} onClick={() => openBooking({ category: "Traveller Booking", seater: `${t.seats} Seater` as Enquiry["seater"] })} className="group block w-full text-left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl"><SafeImage src={images.traveller(t.seats)} alt={`${t.seats} seater Traveller (representative image)`} sizes="(min-width:1024px) 33vw, 85vw" className="transition duration-500 group-hover:scale-105" /></div>
              <h3 className="mt-3 text-base group-hover:underline">{t.seats} Seater Traveller</h3>
              <p className="mt-1 text-sm text-slate2">{t.desc}</p>
            </button>
          </SwiperSlide>))}
      </SectionCarousel>
    </div></section>
  );
}
