import type { Metadata } from "next";
import PageHero from "@/components/pages/PageHero";
import BookingButton from "@/components/forms/BookingButton";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "About Us", description: "Travel Karega Holidays is a Faridabad-based travel business offering holiday packages, Traveller rentals and car rental.", alternates: { canonical: "/about" } };
const blocks = [
  ["Holiday packages", "Tour packages for popular destinations, starting with Manali and Char Dham."],
  ["Traveller booking", "Group transportation in 12, 14, 17, 20 and 26 seater Travellers for family trips, group tours and outstation travel."],
  ["Car rental", "Car rental for personal travel, family outings and outstation journeys."],
];
export default function About() {
  return (<>
    <PageHero title="About Travel Karega Holidays" sub={site.tagline} img="/images/hero-himachal.jpg" alt="Himalayan landscape" />
    <section className="section"><div className="container-x grid gap-12 lg:grid-cols-2">
      <div><h2 className="text-3xl">Who we are</h2>
        <p className="mt-4 max-w-prose text-slate2">Travel Karega Holidays is a travel business based in {site.location}, helping people plan holiday packages, group tours, Traveller rentals and car rental trips.</p></div>
      <div className="grid gap-6">
        <div className="rounded-lg bg-mist p-6"><h3 className="text-lg">Our mission</h3><p className="mt-2 text-slate2">To help travellers plan comfortable, memorable journeys with clear communication and options that fit their requirements.</p></div>
        <div className="rounded-lg bg-mist p-6"><h3 className="text-lg">Our vision</h3><p className="mt-2 text-slate2">To be a travel brand families and groups trust for their next holiday.</p></div>
      </div></div></section>
    <section className="section bg-mist"><div className="container-x"><h2 className="text-3xl">What we offer</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">{blocks.map(([h, t]) => <div key={h} className="rounded-lg bg-white p-6"><h3 className="text-lg">{h}</h3><p className="mt-2 text-slate2">{t}</p></div>)}</div>
      <h2 className="mt-14 text-3xl">How we work with you</h2>
      <p className="mt-3 max-w-prose text-slate2">Share your plans through our enquiry form. Our team reviews your requirements and gets in touch to discuss suitable options.</p>
      <BookingButton variant="gold" className="mt-6">PLAN YOUR TRIP</BookingButton></div></section>
  </>);
}
