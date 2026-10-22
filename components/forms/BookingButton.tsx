"use client";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useBooking } from "./BookingProvider";
import { EnquiryContext } from "@/lib/schemas";
export default function BookingButton({ context, ...props }: ButtonProps & { context?: EnquiryContext }) {
  const { openBooking } = useBooking();
  return <Button type="button" onClick={() => openBooking(context)} {...props} />;
}
