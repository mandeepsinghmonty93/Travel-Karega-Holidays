"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { RiArrowDownSLine, RiCloseLine, RiMenuLine, RiPhoneLine } from "@remixicon/react";
import { nav, site } from "@/lib/site";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";
import BookingButton from "../forms/BookingButton";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Header() {
  const path = usePathname();
  const home = path === "/";
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const f = () => setScrolled(window.scrollY > 8); f(); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  useEffect(() => { setMenu(false); }, [path]);
  const solid = !home || scrolled || menu; // transparent over the hero on the homepage, white elsewhere
  const active = (h: string) => (h === "/" ? path === "/" : path.startsWith(h));
  const link = (h: string) => cn("rounded px-3 py-2 text-xs font-medium", active(h) ? "text-accent" : solid ? "text-navy hover:text-teal" : "text-white/90 hover:text-white");
  const phoneHref = site.phone ? `tel:${site.phone}` : "/contact";

  return (
    <header className={cn("inset-x-0 top-0 z-40 transition-colors", home ? "fixed" : "sticky", solid ? "bg-white shadow-sm" : "bg-transparent")}>
      <div className="container-x flex h-[76px] items-center justify-between gap-4">
        <Link href="/" aria-label="Travel Karega Holidays home" className={cn("shrink-0 rounded-lg", !solid && "bg-white px-2 py-1")}>
          <Image src={images.logo} alt="Travel Karega Holidays" width={176} height={58} priority className="h-11 w-auto md:h-12" />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-3 lg:flex">
          {nav.map((n) => n.children ? (
            <DropdownMenu key={n.href}>
              <DropdownMenuTrigger className={cn(link(n.href), "inline-flex items-center gap-1")}>{n.label}<RiArrowDownSLine size={16} /></DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild><Link href="/packages" className="font-semibold">All Packages</Link></DropdownMenuItem>
                {n.children.map((c) => <DropdownMenuItem key={c.href} asChild><Link href={c.href}>{c.label}</Link></DropdownMenuItem>)}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : <Link key={n.href} href={n.href} className={link(n.href)} aria-current={active(n.href) ? "page" : undefined}>{n.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <BookingButton variant={solid ? "navy" : "outlinePill"} className={cn("hidden sm:inline-flex", solid && "min-h-10 rounded-full px-5 py-2 text-xs")}>Book Now</BookingButton>
          <a href={phoneHref} aria-label={site.phone ? "Call us" : "Contact us"} className={cn("hidden h-10 w-10 place-items-center rounded-full border sm:grid", solid ? "border-navy/30 text-navy hover:bg-mist" : "border-white/80 text-white hover:bg-white/15")}><RiPhoneLine size={18} /></a>
          <Button variant="ghost" className={cn("h-12 w-12 px-0 lg:hidden", !solid && "text-white hover:bg-white/10")} aria-label={menu ? "Close menu" : "Open menu"} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <RiCloseLine /> : <RiMenuLine />}</Button>
        </div>
      </div>
      {menu && (
        <nav aria-label="Mobile" className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-line bg-white px-4 pb-6 pt-2 lg:hidden">
          {nav.map((n) => (<div key={n.href}>
            <Link href={n.href} className="block py-3 font-heading text-base font-bold text-navy">{n.label}</Link>
            {n.children?.map((c) => <Link key={c.href} href={c.href} className="block py-2 pl-4 text-sm text-slate2">{c.label}</Link>)}
          </div>))}
          <BookingButton variant="gold" className="mt-3 w-full">Book Now</BookingButton>
        </nav>
      )}
    </header>
  );
}
