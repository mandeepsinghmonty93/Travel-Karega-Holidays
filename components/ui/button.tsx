import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-md px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide transition-colors disabled:pointer-events-none disabled:opacity-60",
  { variants: { variant: {
      default: "bg-navy text-white hover:bg-navy/90",
      navy: "bg-navy text-white hover:bg-[#0e2142]",
      teal: "bg-teal text-white hover:bg-[#127a73]",
      gold: "bg-gold text-navy hover:bg-[#dca112]",
      outline: "border-2 border-white text-white hover:bg-white hover:text-navy",
      ghost: "text-navy hover:bg-mist",
      pill: "min-h-10 rounded-full bg-white px-5 py-2 text-sm font-semibold normal-case tracking-normal text-navy hover:bg-mist",
      outlinePill: "min-h-10 rounded-full border border-white/80 px-5 py-2 text-xs font-semibold normal-case tracking-normal text-white hover:bg-white hover:text-navy" } },
    defaultVariants: { variant: "default" } });

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp ref={ref} className={cn(buttonVariants({ variant }), className)} {...props} />;
});
Button.displayName = "Button";
export { Button };
