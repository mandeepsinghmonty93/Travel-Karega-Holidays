import Link from "next/link";
import { RiFacebookFill, RiInstagramLine, RiYoutubeFill } from "@remixicon/react";
import { site } from "@/lib/site";

const h = "text-sm font-bold text-navy font-heading";
const l = "block py-1 text-xs text-slate2 hover:text-navy hover:underline";
export default function Footer() {
  const socials = [[site.social.facebook, RiFacebookFill, "Facebook"], [site.social.instagram, RiInstagramLine, "Instagram"], [site.social.youtube, RiYoutubeFill, "YouTube"]] as const;
  const has = socials.some(([u]) => u);
  return (
    <footer className="bg-mint">
      <div className="container-x py-14">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-heading text-sm font-bold text-navy">Speak to our expert at{" "}
            {site.phone ? <a href={`tel:${site.phone}`} className="text-accent">{site.phone}</a> : <Link href="/contact" className="text-accent underline">send an enquiry</Link>}</p>
          {has && <div className="flex items-center gap-3"><span className="font-heading text-xs font-bold text-navy">Follow Us</span>
            {socials.map(([u, Icon, n]) => u ? <a key={n} href={u} aria-label={n} className="grid h-9 w-9 place-items-center rounded-full bg-white text-navy hover:text-teal"><Icon size={18} /></a> : null)}</div>}
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-3 md:grid-cols-[1.4fr_1fr_1fr]">
          <div><h3 className={h}>Contact</h3>
            <address className="mt-3 space-y-1 text-xs not-italic text-slate2"><p>{site.location}</p>
              {site.email && <p><a href={`mailto:${site.email}`} className="hover:text-navy">{site.email}</a></p>}
              {site.whatsapp && <p><a href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`} className="hover:text-navy">WhatsApp</a></p>}</address></div>
          <div><h3 className={h}>Company</h3><ul className="mt-3">
            <li><Link className={l} href="/about">About Us</Link></li><li><Link className={l} href="/contact">Contact Us</Link></li>
            <li><Link className={l} href="/privacy-policy">Privacy Policy</Link></li><li><Link className={l} href="/terms-and-conditions">Terms &amp; Conditions</Link></li></ul></div>
          <div><h3 className={h}>Support</h3><ul className="mt-3">
            <li><Link className={l} href="/contact">Get in Touch</Link></li><li><Link className={l} href="/packages">Packages</Link></li>
            <li><Link className={l} href="/services#traveller-booking">Traveller Booking</Link></li><li><Link className={l} href="/services#car-rental">Car Rental</Link></li></ul></div>
        </div>
        <div className="mt-12 flex flex-col gap-3 text-xs text-slate2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Travel Karega Holidays. All rights reserved.</p>
          <p className="tagline text-navy">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
