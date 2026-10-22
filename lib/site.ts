// Unverified details stay empty; UI hides them until filled via env vars.
export const site = {
  name: "Travel Karega Holidays",
  tagline: "EXPLORE • CONNECT • EXPERIENCE",
  location: "Faridabad, Haryana, India",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  social: { facebook: process.env.NEXT_PUBLIC_FACEBOOK ?? "", instagram: process.env.NEXT_PUBLIC_INSTAGRAM ?? "", youtube: process.env.NEXT_PUBLIC_YOUTUBE ?? "" },
  autoPopup: process.env.NEXT_PUBLIC_AUTO_POPUP === "true",
};
export const nav = [
  { label: "Home", href: "/" }, { label: "About Us", href: "/about" },
  { label: "Packages", href: "/packages", children: [
    { label: "Manali Tour Package", href: "/packages/manali-tour-package" },
    { label: "Char Dham Tour Package", href: "/packages/char-dham-tour-package" } ] },
  { label: "Our Services", href: "/services" }, { label: "Contact Us", href: "/contact" },
];
