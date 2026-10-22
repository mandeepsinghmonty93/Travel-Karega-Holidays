import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy-policy" } };
export default function Privacy() {
  return (<section className="section"><div className="container-x max-w-3xl space-y-4 text-slate2">
    <h1 className="text-3xl">Privacy Policy</h1>
    <p>Draft for review: have this checked by a legal adviser before relying on it.</p>
    <h2 className="text-xl">What we collect</h2><p>When you submit an enquiry we collect your name, mobile number, departure city, travel month and duration, and any message or email you choose to give.</p>
    <h2 className="text-xl">How we use it</h2><p>We use these details only to respond to your enquiry about holiday packages, Traveller booking or car rental.</p>
    <h2 className="text-xl">Sharing and retention</h2><p>We do not sell your details. Add here how long enquiries are kept and which service providers receive them.</p>
    <h2 className="text-xl">Your choices</h2><p>You can ask us to correct or delete your details by contacting us through the Contact page.</p>
  </div></section>);
}
