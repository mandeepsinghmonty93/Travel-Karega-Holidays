import SafeImage from "../ui/SafeImage";
export default function PageHero({ title, sub, img, alt }: { title: string; sub?: string; img: string; alt: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-20 md:py-28">
      <SafeImage src={img} alt={alt} priority /><div className="absolute inset-0 bg-navy/70" />
      <div className="container-x relative text-white"><h1 className="max-w-3xl text-3xl text-white md:text-5xl">{title}</h1>
        {sub && <p className="script mt-4 max-w-2xl text-xl md:text-2xl">{sub}</p>}</div>
    </section>
  );
}
