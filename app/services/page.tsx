import type { Metadata } from "next";
import PageHero from "@/components/pages/PageHero";
import SafeImage from "@/components/ui/SafeImage";
import BookingButton from "@/components/forms/BookingButton";
import ContactForm from "@/components/pages/ContactForm";
import { images, travellers } from "@/data/images";
import type { Enquiry } from "@/lib/schemas";
export const metadata: Metadata = { title: "Traveller Booking & Car Rental in Faridabad", description: "Enquire about 12 to 26 seater Traveller booking and car rental for family trips, group tours and outstation travel from Faridabad.", alternates: { canonical: "/services" } };
// Edit to match what is actually offered (add airport transfers / corporate travel once confirmed).
const carServices = [["Local travel", "Cars for getting around the city."], ["Outstation travel", "Car rental for journeys beyond the city."], ["Family trips", "Convenient travel for family outings."]];
export default function Services() {
  return (<>
    <PageHero title="Our Services" sub="Group transportation and car rental for every journey." img="/images/hero-uttarakhand.jpg" alt="Mountain road journey" />
    <section id="traveller-booking" className="section scroll-mt-20"><div className="container-x">
      <h2 className="text-3xl">Traveller Booking</h2>
      <p className="mt-3 max-w-prose text-slate2">Choose a seating capacity for family travel, group tours or outstation journeys. Availability is confirmed by our team after your enquiry.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{travellers.map((t) => (
        <article key={t.seats} className="overflow-hidden rounded-lg border border-line"><div className="relative aspect-[4/3]"><SafeImage src={images.traveller(t.seats)} alt={`${t.seats} seater Traveller (representative image)`} sizes="(min-width:1024px) 33vw, 100vw" /></div>
          <div className="p-5"><h3 className="text-lg">{t.seats} Seater Traveller</h3><p className="mt-2 text-sm text-slate2">{t.desc}</p>
            <BookingButton context={{ category: "Traveller Booking", seater: `${t.seats} Seater` as Enquiry["seater"] }} variant="teal" className="mt-4 w-full">Check Availability</BookingButton></div></article>))}</div>
    </div></section>
    <section id="car-rental" className="section scroll-mt-20 bg-mist"><div className="container-x grid gap-10 lg:grid-cols-2">
      <div><h2 className="text-3xl">Car Rental</h2><p className="mt-3 text-slate2">Tell us what you need and we will share suitable options.</p>
        <ul className="mt-6 space-y-3">{carServices.map(([h, t]) => <li key={h} className="rounded-lg bg-white p-4"><h3 className="text-base">{h}</h3><p className="text-sm text-slate2">{t}</p></li>)}</ul>
        <BookingButton context={{ category: "Car Rental" }} variant="gold" className="mt-6">Enquire About Car Rental</BookingButton></div>
      <div className="rounded-lg bg-white p-6 shadow-sm"><h3 className="mb-4 text-xl">Send an enquiry</h3><ContactForm defaultCategory="Car Rental" /></div>
    </div></section>
  </>);
}
