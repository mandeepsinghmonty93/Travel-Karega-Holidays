"use client";
import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine, RiDoubleQuotesL } from "@remixicon/react";
import { reviews } from "@/data/images";
import { cn } from "@/lib/utils";

// Only verified reviews (data/images.ts) are shown in production. In development, clearly-marked samples let you see the design.
const samples = ["A", "B", "C"].map((x) => ({ name: `Sample Customer ${x}`, text: "Sample text for design preview only. Add verified customer reviews in data/images.ts and this notice disappears.", trip: "Development preview" }));
const nb = "absolute top-1/3 grid h-10 w-10 place-items-center rounded-full bg-mint text-navy hover:bg-mint/70";
export default function Reviews() {
  const list = reviews.length ? reviews : process.env.NODE_ENV === "development" ? samples : [];
  const [i, setI] = useState(0);
  if (!list.length) return null;
  const r = list[i % list.length];
  const go = (d: number) => setI((i + d + list.length) % list.length);
  return (
    <section className="bg-mist py-20"><div className="container-x relative text-center">
      <h2 className="text-xl md:text-2xl">Customer Reviews</h2>
      <RiDoubleQuotesL size={48} className="mx-auto mt-8 text-teal" aria-hidden />
      <blockquote className="mx-auto mt-4 max-w-3xl text-sm text-ink md:text-base" aria-live="polite">{r.text}</blockquote>
      <p className="mt-6 text-sm font-bold text-navy">{r.name}</p>
      {r.trip && <p className="text-xs text-slate2">{r.trip}</p>}
      <div className="mt-6 flex justify-center gap-3">
        {list.map((x, k) => (
          <button key={x.name} type="button" aria-label={`Show review from ${x.name}`} aria-pressed={k === i % list.length} onClick={() => setI(k)}
            className={cn("grid h-11 w-11 place-items-center rounded-full bg-teal text-sm font-bold text-white", k === i % list.length && "ring-2 ring-teal ring-offset-2")}>{x.name.replace("Sample ", "").charAt(0)}</button>))}
      </div>
      {list === samples && <p className="mt-4 text-xs text-accent">Sample reviews: development only, never shown in production.</p>}
      {list.length > 1 && <><button type="button" aria-label="Previous review" onClick={() => go(-1)} className={`${nb} left-0`}><RiArrowLeftSLine /></button>
        <button type="button" aria-label="Next review" onClick={() => go(1)} className={`${nb} right-0`}><RiArrowRightSLine /></button></>}
    </div></section>
  );
}
