import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terms & Conditions", alternates: { canonical: "/terms-and-conditions" } };
export default function Terms() {
  return (<section className="section"><div className="container-x max-w-3xl space-y-4 text-slate2">
    <h1 className="text-3xl">Terms &amp; Conditions</h1>
    <p>Draft for review: replace with your confirmed booking, payment and cancellation terms.</p>
    <h2 className="text-xl">Enquiries</h2><p>Submitting a form on this website is an enquiry. It is not a confirmed booking, and availability and prices are confirmed only by our team.</p>
    <h2 className="text-xl">Packages and vehicles</h2><p>Itineraries, inclusions, prices and vehicles may change. Images are representative unless stated.</p>
    <h2 className="text-xl">Payments and cancellations</h2><p>Add your confirmed payment and cancellation terms here.</p>
  </div></section>);
}
