import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/pages/PageHero";
import PackageCard from "@/components/pages/PackageCard";
import { packages } from "@/data/packages";
export const metadata: Metadata = { title: "Holiday Packages", description: "Manali and Char Dham tour packages from Faridabad with Travel Karega Holidays. View details and send an enquiry.", alternates: { canonical: "/packages" } };
export default function Packages({ searchParams }: { searchParams: { destination?: string } }) {
  const d = searchParams.destination;
  const list = d ? packages.filter((p) => p.destination === d) : packages;
  return (<>
    <PageHero title="Holiday Packages" sub="Explore tour packages planned around mountains, culture and pilgrimage." img="/images/hero-himachal.jpg" alt="Himalayan mountain road" />
    <section className="section"><div className="container-x">
      {d && <p className="mb-6 text-slate2">Showing packages for <strong className="capitalize">{d}</strong>. <Link className="text-teal underline" href="/packages">View all</Link></p>}
      {list.length ? <div className="grid gap-8 md:grid-cols-2">{list.map((p) => <PackageCard key={p.slug} p={p} />)}</div>
        : <p className="rounded-lg bg-mist p-8 text-navy">We don&apos;t have a package listed for this destination yet. <Link href="/contact" className="text-teal underline">Contact us</Link> with your plans.</p>}
    </div></section>
  </>);
}
