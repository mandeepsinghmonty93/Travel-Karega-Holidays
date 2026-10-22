import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";
// Payload: { name, mobile, email?, category, message } -> forwarded to ENQUIRY_WEBHOOK_URL
export async function POST(req: Request) {
  const p = contactSchema.safeParse(await req.json().catch(() => null));
  if (!p.success) return NextResponse.json({ error: "Invalid details" }, { status: 400 });
  if (p.data.website) return NextResponse.json({ ok: true });
  const url = process.env.ENQUIRY_WEBHOOK_URL;
  if (!url) return NextResponse.json({ error: "Enquiries are not configured yet. Please call us instead." }, { status: 503 });
  try {
    const { website, ...d } = p.data; void website;
    const r = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...d, type: "contact", receivedAt: new Date().toISOString() }) });
    if (!r.ok) throw new Error();
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "We couldn't send your message. Please try again." }, { status: 502 }); }
}
