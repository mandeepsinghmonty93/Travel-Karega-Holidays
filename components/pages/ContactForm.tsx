"use client";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { CATEGORIES, Contact, contactSchema } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactForm({ defaultCategory = "General Contact" }: { defaultCategory?: Contact["category"] }) {
  const [st, setSt] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [msg, setMsg] = useState("");
  const { register, control, handleSubmit, formState: { errors } } = useForm<Contact>({ resolver: zodResolver(contactSchema), defaultValues: { name: "", mobile: "", email: "", message: "", category: defaultCategory } });
  const E = ({ n }: { n: keyof Contact }) => errors[n] ? <p id={`c-${n}-err`} role="alert" className="mt-1 text-sm text-red-700">{errors[n]?.message}</p> : null;
  const p = (n: keyof Contact) => ({ id: `c-${n}`, "aria-invalid": !!errors[n], "aria-describedby": errors[n] ? `c-${n}-err` : undefined });
  async function onSubmit(d: Contact) {
    if (st === "sending") return; setSt("sending");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
      const j = await r.json().catch(() => ({})); if (!r.ok) throw new Error(j.error ?? "Something went wrong.");
      setSt("ok");
    } catch (e) { setSt("error"); setMsg(e instanceof Error ? e.message : "Network error. Please try again."); }
  }
  if (st === "ok") return <p role="status" className="rounded-md bg-mist p-4 text-navy">Thank you. We have received your message and will get back to you. This is an enquiry, not a confirmed booking.</p>;
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-4">
      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" {...register("website")} />
      <div><Label htmlFor="c-name">Name</Label><Input {...p("name")} autoComplete="name" {...register("name")} /><E n="name" /></div>
      <div><Label htmlFor="c-mobile">Mobile Number</Label><Input {...p("mobile")} type="tel" inputMode="tel" autoComplete="tel" {...register("mobile")} /><E n="mobile" /></div>
      <div><Label htmlFor="c-email">Email (optional)</Label><Input {...p("email")} type="email" autoComplete="email" {...register("email")} /><E n="email" /></div>
      <div><Label htmlFor="c-category">Enquiry Type</Label>
        <Controller control={control} name="category" render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}><SelectTrigger id="c-category"><SelectValue /></SelectTrigger>
            <SelectContent>{CATEGORIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent></Select>)} /></div>
      <div><Label htmlFor="c-message">Message</Label><Textarea {...p("message")} rows={5} {...register("message")} /><E n="message" /></div>
      {st === "error" && <p role="alert" className="rounded-md bg-red-50 p-3 text-sm text-red-800">{msg}</p>}
      <Button type="submit" variant="teal" disabled={st === "sending"}>{st === "sending" ? "SENDING…" : "SEND MESSAGE"}</Button>
      <p className="text-xs text-slate2">We use these details only to respond to you. See our <a href="/privacy-policy" className="underline">Privacy Policy</a>.</p>
    </form>
  );
}
