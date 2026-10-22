import Link from "next/link";
import { RiArrowRightLine, RiBusLine, RiChat3Line, RiPlayFill, RiSuitcase3Line } from "@remixicon/react";
import { images, trending } from "@/data/images";
import SafeImage from "../ui/SafeImage";
import BookingButton from "../forms/BookingButton";

export function TrendingDestinations() {
  return (
    <section className="py-8"><div className="container-x">
      <div className="flex items-end justify-between"><h2 className="text-2xl md:text-[28px]">Trending Destinations</h2>
        <Link href="/packages" className="text-xs text-slate2 hover:text-navy hover:underline">See All</Link></div>
      <div className="mt-6 grid auto-rows-[160px] grid-cols-2 gap-3 lg:auto-rows-[210px] lg:grid-cols-[103fr_75fr_103fr_141fr]">
        {trending.map((d) => (
          <Link key={d.name} href={d.href} className={`group relative overflow-hidden rounded-lg ${d.cls}`}>
            <SafeImage src={d.img} alt={`${d.name} travel destination`} sizes="(min-width:1024px) 40vw, 50vw" className="transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-sm font-semibold text-white">{d.name}</span>
          </Link>))}
      </div>
    </div></section>
  );
}

const why = [
  { Icon: RiSuitcase3Line, h: "Holiday Packages", d: "Explore tour options for popular destinations." },
  { Icon: RiBusLine, h: "Group Transportation", d: "Choose from multiple Traveller seating capacities." },
  { Icon: RiChat3Line, h: "Personalised Enquiries", d: "Share your requirements to discuss suitable travel options." },
];
export function AboutWhy() {
  return (
    <section className="relative px-4 py-14 lg:px-0 lg:py-20">
      <div className="relative mx-auto mb-6 aspect-square w-full max-w-md overflow-hidden rounded-2xl lg:absolute lg:left-[1.5vw] lg:top-[5.8rem] lg:z-10 lg:mb-0 lg:w-[37vw] lg:max-w-none">
        <SafeImage src={images.about} alt="Travellers enjoying a scenic holiday view" sizes="(min-width:1024px) 37vw, 90vw" />
      </div>
      <div className="relative rounded-3xl bg-mint px-6 py-10 lg:ml-[32vw] lg:mr-[1.5vw] lg:min-h-[calc(37vw+3rem)] lg:py-12 lg:pl-[9.6vw] lg:pr-[15vw]">
        <h2 className="text-xl md:text-2xl">About Travel Karega Holidays</h2>
        <p className="mt-4 text-xs leading-relaxed text-slate2 md:text-sm">At Travel Karega Holidays, we help you plan memorable journeys with holiday packages and group transportation options designed around your travel requirements.</p>
        <h3 className="mt-8 text-lg">Why Choose Us?</h3>
        <ul className="relative z-20 mt-5 grid gap-4 sm:grid-cols-3 lg:-ml-[14vw] lg:w-[calc(100%+14vw)]">
          {why.map(({ Icon, h, d }) => (
            <li key={h} className="rounded-xl bg-white p-5 shadow-sm"><Icon size={30} className="text-accent" aria-hidden />
              <h4 className="mt-4 text-sm">{h}</h4><p className="mt-1 text-xs text-slate2">{d}</p></li>))}
        </ul>
      </div>
    </section>
  );
}

export function PlanningBanner() {
  return (
    <section className="py-8"><div className="container-x">
      <div className="relative overflow-hidden rounded-xl bg-navy md:min-h-[220px]">
        <div className="relative z-10 p-8 md:w-1/2 md:py-14 md:pl-10">
          <h2 className="text-xl text-white md:text-2xl">Keep on Planning</h2>
          <p className="mt-2 text-xs text-white/85 md:text-sm">Share your requirements and we will help with your enquiry.</p>
          <BookingButton variant="pill" className="mt-5">Get a Quote <RiPlayFill size={14} /></BookingButton>
        </div>
        <div className="relative h-44 md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-[55%] md:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]">
          <SafeImage src={images.banner} alt="Traveller minibus on a scenic road" sizes="(min-width:768px) 40vw, 100vw" />
        </div>
      </div>
    </div></section>
  );
}

export function FlexibleCTA() {
  return (
    <section className="relative isolate mt-8 flex min-h-[420px] items-center justify-center overflow-hidden bg-navy py-20 text-center text-white md:min-h-[520px]">
      <SafeImage src={images.cta} alt="Mountain landscape at sunset" sizes="100vw" />
      <div className="absolute inset-0 bg-navy/40" />
      <div className="container-x relative">
        <h2 className="mx-auto max-w-3xl text-3xl text-white md:text-5xl">Ready to Plan Your Next Journey?</h2>
        <p className="mx-auto mt-4 max-w-xl text-xs text-white/90 md:text-sm">Whether you are planning a holiday or need comfortable group transportation, let us know your requirements.</p>
        <BookingButton variant="outline" aria-label="Plan your journey: open enquiry form" className="mx-auto mt-8 h-14 min-h-0 w-14 rounded-full border px-0 py-0"><RiArrowRightLine size={22} /></BookingButton>
      </div>
    </section>
  );
}
