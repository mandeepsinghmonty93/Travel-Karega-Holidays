import { z } from "zod";
export const DURATIONS = ["1 to 3 Days", "4 to 6 Days", "7 to 9 Days"] as const;
// Central list: add upcoming months here only.
export const MONTHS = ["November 2026", "December 2026", "January 2027", "February 2027", "March 2027"] as const;
export const CATEGORIES = ["Holiday Package", "Manali Tour", "Char Dham Tour", "Traveller Booking", "Car Rental", "General Contact"] as const;
export const SEATERS = ["12 Seater", "14 Seater", "17 Seater", "20 Seater", "26 Seater"] as const;

export const enquirySchema = z.object({
  from: z.string().trim().min(2, "Enter your departure city or pickup location"),
  duration: z.enum(DURATIONS, { errorMap: () => ({ message: "Select a duration" }) }),
  month: z.enum(MONTHS, { errorMap: () => ({ message: "Select a month" }) }),
  name: z.string().trim().min(2, "Enter your name"),
  mobile: z.string().trim().regex(/^(?:\+91[\s-]?|91[\s-]?|0)?[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  category: z.enum(CATEGORIES),
  seater: z.enum(SEATERS).optional(),
  website: z.string().max(0).optional(), // honeypot
});
export type Enquiry = z.infer<typeof enquirySchema>;
export type EnquiryContext = { category?: Enquiry["category"]; seater?: Enquiry["seater"] };

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name"),
  mobile: z.string().trim().regex(/^(?:\+91[\s-]?|91[\s-]?|0)?[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().trim().email("Enter a valid email").optional().or(z.literal("")),
  category: z.enum(CATEGORIES),
  message: z.string().trim().min(5, "Tell us a little about your requirement").max(1000),
  website: z.string().max(0).optional(),
});
export type Contact = z.infer<typeof contactSchema>;
