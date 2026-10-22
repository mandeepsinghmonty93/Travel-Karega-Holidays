import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SafeImage from "../ui/SafeImage";
import BookingButton from "../forms/BookingButton";
import type { Pkg } from "@/data/packages";
export default function PackageCard({ p }: { p: Pkg }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-line bg-white">
      <div className="relative aspect-[16/10]"><SafeImage src={p.image} alt={`${p.title} destination`} sizes="(min-width:768px) 50vw, 100vw" /></div>
      <div className="flex flex-1 flex-col p-6">
        <h2 className="text-xl">{p.title}</h2>
        {p.duration && <p className="mt-1 text-sm font-semibold text-teal">{p.duration}</p>}
        <p className="mt-2 flex-1 text-slate2">{p.short}</p>
        <p className="mt-3 text-sm font-semibold text-navy">{p.price ?? "Enquire for current price"}</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link href={`/packages/${p.slug}`} className={cn(buttonVariants({ variant: "navy" }))}>View Details</Link>
          <BookingButton context={{ category: p.category }} variant="gold">Enquire Now</BookingButton>
        </div>
      </div>
    </article>
  );
}
