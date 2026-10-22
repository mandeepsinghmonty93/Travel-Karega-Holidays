import type { Metadata } from "next";
import { Montserrat, Lobster, Inter } from "next/font/google";
import "./globals.css";
import BookingProvider from "@/components/forms/BookingProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "700"], variable: "--font-montserrat", display: "swap" });
const lobster = Lobster({ subsets: ["latin"], weight: "400", variable: "--font-lobster", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Travel Karega Holidays | Travel Agency in Faridabad", template: "%s | Travel Karega Holidays" },
  description: "Holiday packages, Traveller booking and car rental from Faridabad. Enquire about Manali and Char Dham tour packages with Travel Karega Holidays.",
  openGraph: { title: "Travel Karega Holidays", description: "Holiday packages, Traveller booking and car rental from Faridabad.", type: "website", locale: "en_IN" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${montserrat.variable} ${lobster.variable} ${inter.variable}`}>
      <body>
        <BookingProvider>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[60] focus:rounded focus:bg-gold focus:px-4 focus:py-2">Skip to content</a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </BookingProvider>
      </body>
    </html>
  );
}
