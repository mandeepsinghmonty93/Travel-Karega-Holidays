"use client";
import { Controller, useForm, type Control } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { DURATIONS, MONTHS, SEATERS, Enquiry, EnquiryContext, enquirySchema } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

type Props = { context?: EnquiryContext; submitLabel: string; idPrefix: string; layout?: "stack" | "hero" };

function Field({ id, label, error, boxed, children }: { id: string; label: string; error?: string; boxed?: boolean; children: React.ReactNode }) {
  return (
    <div>
      {boxed ? (
        <div className="rounded-md border border-line bg-white px-3 pb-1.5 pt-2 focus-within:border-teal focus-within:ring-2 focus-within:ring-gold">
          <Label htmlFor={id} className="mb-0 text-[11px]">{label}</Label>{children}</div>
      ) : (<><Label htmlFor={id}>{label}</Label>{children}</>)}
      {error && <p id={`${id}-err`} role="alert" className="mt-1 text-sm text-red-700">{error}</p>}
    </div>);
}
function SelectField({ control, name, id, placeholder, options, invalid, className }: { control: Control<Enquiry>; name: "duration" | "month" | "seater"; id: string; placeholder: string; options: readonly string[]; invalid: boolean; className?: string }) {
  return (
    <Controller control={control} name={name} render={({ field }) => (
      <Select value={(field.value as string) || ""} onValueChange={field.onChange}>
        <SelectTrigger id={id} className={className} aria-invalid={invalid} aria-describedby={invalid ? `${id}-err` : undefined}><SelectValue placeholder={placeholder} /></SelectTrigger>
        <SelectContent>{options.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
      </Select>)} />);
}

export default function BookingForm({ context = {}, submitLabel, idPrefix, layout = "stack" }: Props) {
  const hero = layout === "hero";
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [msg, setMsg] = useState("");
  const { register, control, handleSubmit, formState: { errors } } = useForm<Enquiry>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { from: "", name: "", mobile: "", duration: "" as never, month: "" as never, category: context.category ?? "Holiday Package", seater: context.seater },
  });
  const i = (n: string) => `${idPrefix}-${n}`;
  const a = (n: keyof Enquiry) => ({ id: i(n), "aria-invalid": !!errors[n], "aria-describedby": errors[n] ? `${i(n)}-err` : undefined });
  const bx = hero ? "h-7 border-0 p-0 text-sm shadow-none focus-visible:outline-none" : "";

  async function onSubmit(data: Enquiry) {
    if (state === "sending") return;
    setState("sending"); setMsg("");
    try {
      const r = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j.error ?? "Something went wrong.");
      setState("ok"); setMsg(`Thank you, ${data.name}. We have received your enquiry and will contact you on ${data.mobile}. This is an enquiry only, not a confirmed booking.`);
    } catch (e) {
      setState("error"); setMsg(e instanceof Error ? e.message : "Network error. Please check your connection and try again.");
    }
  }
  if (state === "ok") return <p role="status" className="rounded-md bg-mist p-4 text-navy">{msg}</p>;

  const fromF = <Field boxed={hero} id={i("from")} label="From" error={errors.from?.message}><Input {...a("from")} {...register("from")} className={bx} placeholder={hero ? "Departure City" : "Departure city, e.g. Faridabad"} autoComplete="address-level2" /></Field>;
  const durF = <Field boxed={hero} id={i("duration")} label="Select Duration" error={errors.duration?.message}><SelectField className={bx} control={control} name="duration" id={i("duration")} placeholder="Select Duration" options={DURATIONS} invalid={!!errors.duration} /></Field>;
  const monF = <Field boxed={hero} id={i("month")} label="Select Month" error={errors.month?.message}><SelectField className={bx} control={control} name="month" id={i("month")} placeholder="Select Month" options={MONTHS} invalid={!!errors.month} /></Field>;
  const nameF = <Field boxed={hero} id={i("name")} label="Name" error={errors.name?.message}><Input {...a("name")} {...register("name")} className={bx} placeholder={hero ? "Your Full Name" : "Your full name"} autoComplete="name" /></Field>;
  const mobF = <Field boxed={hero} id={i("mobile")} label="Mobile Number" error={errors.mobile?.message}><Input {...a("mobile")} {...register("mobile")} className={bx} type="tel" inputMode="tel" placeholder={hero ? "Your 10 Digit Mobile Number" : "10-digit mobile number"} autoComplete="tel" /></Field>;
  const seatF = context.category === "Traveller Booking" ? <Field id={i("seater")} label="Seating capacity"><SelectField control={control} name="seater" id={i("seater")} placeholder="Select seating capacity" options={SEATERS} invalid={false} /></Field> : null;
  const submit = <Button type="submit" variant="teal" disabled={state === "sending"} className={cn("w-full", hero && "min-h-[58px]")}>{state === "sending" ? "SENDING…" : submitLabel}</Button>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={cn("grid gap-4", hero && "gap-3 sm:grid-cols-2")}>
      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" {...register("website")} />
      {context.category && context.category !== "Holiday Package" && <p className="rounded bg-mist px-3 py-2 text-sm text-navy sm:col-span-2">Enquiry for: <strong>{context.category}{context.seater ? ` · ${context.seater}` : ""}</strong></p>}
      {hero ? <>{nameF}{fromF}{monF}{durF}{mobF}{submit}</> : <>{fromF}{durF}{monF}{seatF}{nameF}{mobF}{submit}</>}
      {state === "error" && <p role="alert" className="rounded-md bg-red-50 p-3 text-sm text-red-800 sm:col-span-2">{msg}</p>}
      <p className="text-xs text-slate2 sm:col-span-2">We use these details only to respond to your enquiry. See our <a href="/privacy-policy" className="underline">Privacy Policy</a>.</p>
    </form>
  );
}
