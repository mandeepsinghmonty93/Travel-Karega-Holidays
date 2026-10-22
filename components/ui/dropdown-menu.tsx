"use client";
import * as React from "react";
import * as P from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";
const DropdownMenu = P.Root;
const DropdownMenuTrigger = P.Trigger;
const DropdownMenuContent = React.forwardRef<React.ElementRef<typeof P.Content>, React.ComponentPropsWithoutRef<typeof P.Content>>(({ className, sideOffset = 6, ...props }, ref) => (
  <P.Portal><P.Content ref={ref} sideOffset={sideOffset} className={cn("z-50 min-w-64 rounded-md border border-line bg-white py-2 shadow-lg", className)} {...props} /></P.Portal>));
DropdownMenuContent.displayName = "DropdownMenuContent";
const DropdownMenuItem = React.forwardRef<React.ElementRef<typeof P.Item>, React.ComponentPropsWithoutRef<typeof P.Item>>(({ className, ...props }, ref) => (
  <P.Item ref={ref} className={cn("block cursor-pointer px-4 py-2.5 text-sm text-navy outline-none data-[highlighted]:bg-mist", className)} {...props} />));
DropdownMenuItem.displayName = "DropdownMenuItem";
export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem };
