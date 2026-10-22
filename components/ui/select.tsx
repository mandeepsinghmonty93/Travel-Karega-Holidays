"use client";
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { RiArrowDownSLine, RiCheckLine } from "@remixicon/react";
import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger ref={ref} className={cn("flex h-12 w-full items-center justify-between rounded-md border border-line bg-white px-3 text-left text-base text-ink data-[placeholder]:text-slate2 focus-visible:border-teal aria-[invalid=true]:border-red-600", className)} {...props}>
    {children}<SelectPrimitive.Icon asChild><RiArrowDownSLine size={20} className="text-slate2" /></SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>));
SelectTrigger.displayName = "SelectTrigger";

const SelectContent = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Content>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content ref={ref} position={position} sideOffset={4} className={cn("relative z-[60] max-h-72 min-w-[8rem] overflow-hidden rounded-md border border-line bg-white shadow-lg", position === "popper" && "w-[var(--radix-select-trigger-width)]", className)} {...props}>
      <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>));
SelectContent.displayName = "SelectContent";

const SelectItem = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Item>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item ref={ref} className={cn("relative flex min-h-11 cursor-pointer select-none items-center rounded px-3 pr-8 text-base text-ink outline-none data-[highlighted]:bg-mist data-[state=checked]:font-semibold", className)} {...props}>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator className="absolute right-2"><RiCheckLine size={18} className="text-teal" /></SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>));
SelectItem.displayName = "SelectItem";
export { Select, SelectValue, SelectTrigger, SelectContent, SelectItem };
