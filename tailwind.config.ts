import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { navy: "#142D56", teal: "#168F87", gold: "#F2B323", mist: "#F7F9FC", mint: "#E9F3F1", accent: "#EF6C1A", ink: "#202938", slate2: "#667085", line: "#E5E7EB" },
    fontFamily: { heading: ["var(--font-montserrat)", "sans-serif"], script: ["var(--font-lobster)", "cursive"], body: ["var(--font-inter)", "sans-serif"] },
  } },
  plugins: [],
} satisfies Config;
