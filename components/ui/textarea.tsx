import * as React from "react";
import { cn } from "@/lib/utils";
const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn("min-h-28 w-full rounded-md border border-line bg-white px-3 py-3 text-base text-ink placeholder:text-slate2 focus-visible:border-teal aria-[invalid=true]:border-red-600", className)} {...props} />));
Textarea.displayName = "Textarea";
export { Textarea };
