import type { Enquiry } from "@/lib/schemas";
// Add new packages here. Leave unverified fields empty/undefined: pages hide those sections.
export type Pkg = {
  slug: string; title: string; destination: string; destinationLabel: string; durationShort?: string; includes?: ("transfers" | "hotels" | "meals" | "sightseeing")[]; duration?: string; image: string;
  short: string; overview: string; highlights?: string[]; itinerary?: { day: string; title: string; text: string }[];
  inclusions?: string[]; exclusions?: string[]; accommodation?: string; transport?: string; meals?: string;
  departures?: string; price?: string; offer?: string; important?: string; faqs?: { q: string; a: string }[];
  category: Enquiry["category"];
};
export const packages: Pkg[] = [
  { slug: "manali-tour-package", title: "Manali Tour Package", destination: "himachal", destinationLabel: "Himachal Pradesh", durationShort: "4D/3N", duration: "3 Nights / 4 Days", image: "/images/manali-promo.jpg", category: "Manali Tour",
    short: "Scenic valleys, refreshing weather and Himalayan views.",
    overview: "Escape to the mountains and experience scenic valleys, refreshing weather and unforgettable Himalayan views with Travel Karega Holidays. Contact us for the current day-wise plan, inclusions and rates." },
  { slug: "char-dham-tour-package", title: "Char Dham Tour Package", destination: "uttarakhand", destinationLabel: "Uttarakhand", image: "/images/hero-uttarakhand.jpg", category: "Char Dham Tour",
    short: "A pilgrimage journey through the sacred Himalayan shrines of Uttarakhand.",
    overview: "A pilgrimage journey to the Char Dham shrines of Uttarakhand. Route, duration and travel arrangements are confirmed by our team when you enquire.",
    important: "Opening dates, registration requirements and road conditions change each season. Please confirm current details with us and the official Uttarakhand authorities before you travel." },
];
