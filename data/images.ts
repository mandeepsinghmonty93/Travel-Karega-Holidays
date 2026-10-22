// Drop licensed photos at these paths (see README "Image assets"). Missing files fall back to a brand-colour block.
export const images = {
  logo: "/images/logo.png",
  hero: [
    { src: "/images/slider-1.webp", alt: "Snow-covered Himalayan peaks above the Manali valley", place: "Manali" },
    { src: "/images/hero-himachal.jpg", alt: "Pine forest and mountain road in Himachal Pradesh", place: "Himachal Pradesh" },
    { src: "/images/slider-1.webp", alt: "River valley and Himalayan ridges in Uttarakhand", place: "Uttarakhand" },
    { src: "/images/hero-rajasthan.jpg", alt: "Heritage fort and palace in Rajasthan", place: "Rajasthan" },
  ],
  manali: "/images/manali-promo.jpg",
  whyUs: "/images/why-road-journey.jpg",
  cta: "/images/cta-background.jpg", banner: "/images/banner-traveller.jpg", about: "/images/about-travel.jpg",
  traveller: (n: number) => `/images/traveller-${n}.jpg`,
};
export const destinations = [
  { name: "Uttarakhand", img: "/images/dest-uttarakhand.jpg", cta: "Explore Uttarakhand", desc: "Explore scenic mountain landscapes, peaceful retreats and spiritual destinations.", href: "/packages?destination=uttarakhand" },
  { name: "Himachal Pradesh", img: "/images/dest-himachal.jpg", cta: "Explore Himachal", desc: "Discover mountain holidays, scenic drives and refreshing Himalayan escapes.", href: "/packages?destination=himachal" },
  { name: "Rajasthan", img: "/images/dest-rajasthan.jpg", cta: "Explore Rajasthan", desc: "Experience heritage architecture, vibrant culture and memorable getaways.", href: "/packages?destination=rajasthan" },
];
export const travellers = [
  { seats: 12, desc: "Suited to small families and compact groups." },
  { seats: 14, desc: "A comfortable fit for extended family trips." },
  { seats: 17, desc: "Works well for group tours and outstation journeys." },
  { seats: 20, desc: "Made for larger parties, outings and corporate groups." },
  { seats: 26, desc: "Our largest option for big groups travelling together." },
];
// Add only verified reviews: { name, text, trip?, rating? }
export const reviews: { name: string; text: string; trip?: string }[] = [];

// Trending Destinations mosaic (order matters: matches the design grid). Tiles only link to a filtered packages page.
export const trending = [
  { name: "Himachal Pradesh", img: "/images/dest-himachal.jpg", href: "/packages?destination=himachal", cls: "lg:col-start-1 lg:row-start-1" },
  { name: "Uttarakhand", img: "/images/dest-uttarakhand.jpg", href: "/packages?destination=uttarakhand", cls: "lg:col-start-2 lg:col-span-2 lg:row-start-1" },
  { name: "Rajasthan", img: "/images/dest-rajasthan.jpg", href: "/packages?destination=rajasthan", cls: "row-span-2 lg:col-start-4 lg:row-start-1" },
  { name: "Madhya Pradesh", img: "/images/dest-madhya-pradesh.jpg", href: "/packages?destination=madhya-pradesh", cls: "lg:col-start-1 lg:col-span-2 lg:row-start-2" },
  { name: "Goa", img: "/images/dest-goa.jpg", href: "/packages?destination=goa", cls: "lg:col-start-3 lg:row-start-2" },
];
