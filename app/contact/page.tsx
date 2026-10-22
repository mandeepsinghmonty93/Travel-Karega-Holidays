import type { Metadata } from "next";
import PageHero from "@/components/pages/PageHero";
import ContactForm from "@/components/pages/ContactForm";
import BookingButton from "@/components/forms/BookingButton";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "Contact Us", description: "Contact Travel Karega Holidays in Faridabad for holiday packages, Traveller booking and car rental enquiries.", alternates: { canonical: "/contact" } };
export default function Contact() {
  return (<>
    <PageHero title="Contact Us" sub="Tell us your plans and we will help with your enquiry." img="/images/hero-manali.jpg" alt="Snow-covered mountains" />
    <section className="section"><div className="container-x grid gap-12 lg:grid-cols-[3fr_2fr]">
      <div><h2 className="text-2xl">Send us a message</h2><div className="mt-5"><ContactForm /></div></div>
      <div className="space-y-6">
        <div className="rounded-lg bg-mist p-6"><h2 className="text-xl">Get in touch</h2>
          <address className="mt-3 space-y-2 not-italic text-slate2"><p>{site.location}</p>
            {site.phone && <p><a className="text-teal underline" href={`tel:${site.phone}`}>{site.phone}</a></p>}
            {site.email && <p><a className="text-teal underline" href={`mailto:${site.email}`}>{site.email}</a></p>}
            {site.whatsapp && <p><a className="text-teal underline" href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}>Chat on WhatsApp</a></p>}
            {!site.phone && !site.email && <p className="text-sm">Phone and email will appear here once added.</p>}</address></div>
        <div className="rounded-lg border border-line p-6"><h2 className="text-xl">Quick enquiry</h2>
          <div className="mt-4 grid gap-3">
            <BookingButton context={{ category: "Holiday Package" }} variant="navy">Holiday Package</BookingButton>
            <BookingButton context={{ category: "Traveller Booking", seater: "12 Seater" }} variant="teal">Traveller Rental</BookingButton>
            <BookingButton context={{ category: "Car Rental" }} variant="gold">Car Rental</BookingButton></div></div>
      </div></div></section>
  </>);
}
