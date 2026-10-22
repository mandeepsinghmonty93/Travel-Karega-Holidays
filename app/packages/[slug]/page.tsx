import type { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/pages/PageHero";
import PackageCard from "@/components/pages/PackageCard";
import BookingButton from "@/components/forms/BookingButton";
import { packages } from "@/data/packages";

export const dynamicParams = false;
export function generateStaticParams() { return packages.map((p) => ({ slug: p.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = packages.find((x) => x.slug === params.slug); if (!p) return {};
  return { title: p.title, description: p.short, alternates: { canonical: `/packages/${p.slug}` } };
}
const List = ({ t, items }: { t: string; items?: string[] }) => items?.length ? (
  <div><h3 className="text-lg">{t}</h3><ul className="mt-3 list-disc space-y-1 pl-5 text-slate2">{items.map((i) => <li key={i}>{i}</li>)}</ul></div>) : null;

export default function PackagePage({ params }: { params: { slug: string } }) {
  const p = packages.find((x) => x.slug === params.slug); if (!p) notFound();
  const others = packages.filter((x) => x.slug !== p.slug);
  return (<>
    <PageHero title={p.title} sub={p.duration} img={p.image} alt={`${p.title} destination`} />
    <section className="section"><div className="container-x grid gap-10 lg:grid-cols-[2fr_1fr]">
      <div className="space-y-10">
        <div><h2 className="text-2xl">Overview</h2><p className="mt-3 max-w-prose text-slate2">{p.overview}</p></div>
        {p.important && <div className="rounded-lg border-l-4 border-gold bg-mist p-5 text-navy"><h3 className="text-base">Important travel information</h3><p className="mt-1 text-sm">{p.important}</p></div>}
        <List t="Highlights" items={p.highlights} />
        {p.itinerary?.length ? <div><h2 className="text-2xl">Day-wise itinerary</h2><ol className="mt-4 space-y-4">{p.itinerary.map((d) => (
          <li key={d.day} className="rounded-lg border border-line p-5"><h3 className="text-base">{d.day}: {d.title}</h3><p className="mt-1 text-slate2">{d.text}</p></li>))}</ol></div>
          : <p className="rounded-lg bg-mist p-5 text-slate2">The day-wise itinerary is shared when you enquire, so you always get the current plan.</p>}
        <div className="grid gap-8 sm:grid-cols-2"><List t="Inclusions" items={p.inclusions} /><List t="Exclusions" items={p.exclusions} /></div>
        {[["Accommodation", p.accommodation], ["Transportation", p.transport], ["Meals", p.meals], ["Departure dates", p.departures]].map(([t, v]) => v ? <div key={t}><h3 className="text-lg">{t}</h3><p className="mt-2 text-slate2">{v}</p></div> : null)}
        {p.faqs?.length ? <div><h2 className="text-2xl">FAQs</h2>{p.faqs.map((f) => <details key={f.q} className="mt-3 rounded border border-line p-4"><summary className="cursor-pointer font-semibold text-navy">{f.q}</summary><p className="mt-2 text-slate2">{f.a}</p></details>)}</div> : null}
      </div>
      <aside className="h-fit rounded-lg border-t-4 border-gold bg-white p-6 shadow-md lg:sticky lg:top-24">
        {p.duration && <p className="font-heading font-bold text-navy">{p.duration}</p>}
        <p className="mt-2 font-semibold text-teal">{p.price ?? "Special package offers available"}</p>
        {p.offer && <p className="mt-1 text-sm">{p.offer}</p>}
        <BookingButton context={{ category: p.category }} variant="gold" className="mt-5 w-full">Enquire About This Tour</BookingButton>
      </aside>
    </div></section>
    <section className="section bg-mist"><div className="container-x"><h2 className="text-2xl">Related tours</h2>
      <div className="mt-6 grid gap-8 md:grid-cols-2">{others.map((o) => <PackageCard key={o.slug} p={o} />)}</div></div></section>
    <section className="bg-navy py-14 text-center text-white"><div className="container-x"><h2 className="text-2xl text-white">Ready to Plan Your Next Journey?</h2>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row"><BookingButton context={{ category: p.category }} variant="gold">Enquire Now</BookingButton><Link href="/contact" className={cn(buttonVariants({ variant: "outline" }))}>Contact Us</Link></div></div></section>
  </>);
}
