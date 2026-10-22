import * as React from "react";
import { cn } from "@/lib/utils";
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, type, ...props }, ref) => (
  <input ref={ref} type={type} className={cn("h-12 w-full rounded-md border border-line bg-white px-3 text-base text-ink placeholder:text-slate2 focus-visible:border-teal disabled:opacity-60 aria-[invalid=true]:border-red-600", className)} {...props} />));
Input.displayName = "Input";
export { Input };
