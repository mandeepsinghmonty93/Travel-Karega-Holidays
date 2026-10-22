import Hero from "@/components/home/Hero";
import HeroForm from "@/components/home/HeroForm";
import PopularPackages from "@/components/home/PopularPackages";
import TravellerCarousel from "@/components/home/TravellerCarousel";
import Reviews from "@/components/home/Reviews";
import { TrendingDestinations, AboutWhy, PlanningBanner, FlexibleCTA } from "@/components/home/Sections";

export default function Home() {
  return (<>
    <Hero />
    <div className="relative z-10 -mt-14 rounded-t-[3.5rem] bg-mint pb-16 md:-mt-16 md:rounded-t-[4rem]"><HeroForm /><PopularPackages /></div>
    <TravellerCarousel /><TrendingDestinations /><AboutWhy /><PlanningBanner /><Reviews /><FlexibleCTA />
  </>);
}
