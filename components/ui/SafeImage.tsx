"use client";
import Image from "next/image";
import { useState } from "react";
type P = { src: string; alt: string; priority?: boolean; className?: string; sizes?: string };
export default function SafeImage({ src, alt, priority, className = "", sizes = "100vw" }: P) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div role="img" aria-label={alt} className={`absolute inset-0 bg-gradient-to-br from-navy to-teal ${className}`} />;
  return <Image src={src} alt={alt} fill priority={priority} sizes={sizes} onError={() => setFailed(true)} className={`object-cover ${className}`} />;
}
