"use client";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import BookingForm from "./BookingForm";
import { EnquiryContext } from "@/lib/schemas";
import { site } from "@/lib/site";

const Ctx = createContext<{ openBooking: (c?: EnquiryContext) => void }>({ openBooking: () => {} });
export const useBooking = () => useContext(Ctx);

export default function BookingProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [ctx, setCtx] = useState<EnquiryContext>({});
  const [key, setKey] = useState(0);
  const trigger = useRef<HTMLElement | null>(null);

  const openBooking = useCallback((c: EnquiryContext = {}) => {
    trigger.current = document.activeElement as HTMLElement;
    setCtx(c); setKey((k) => k + 1); setOpen(true);
  }, []);

  // Optional auto popup: off by default, once per session, never while typing in another form.
  useEffect(() => {
    if (!site.autoPopup || sessionStorage.getItem("tk-popup-seen")) return;
    const t = setTimeout(() => {
      const a = document.activeElement;
      if (a && ["INPUT", "SELECT", "TEXTAREA"].includes(a.tagName)) return;
      sessionStorage.setItem("tk-popup-seen", "1"); openBooking();
    }, 25000);
    return () => clearTimeout(t);
  }, [openBooking]);

  return (
    <Ctx.Provider value={{ openBooking }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent onCloseAutoFocus={(e) => { e.preventDefault(); trigger.current?.focus(); }}>
          <DialogHeader>
            <DialogTitle>Let&apos;s Plan Your Next Journey</DialogTitle>
            <DialogDescription className="script text-xl text-teal">Tell us a little about your travel plans.</DialogDescription>
          </DialogHeader>
          <BookingForm key={key} context={ctx} submitLabel="SUBMIT ENQUIRY" idPrefix="popup" />
        </DialogContent>
      </Dialog>
    </Ctx.Provider>
  );
}
