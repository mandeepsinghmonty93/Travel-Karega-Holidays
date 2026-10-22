import { NextResponse } from "next/server";
import { enquirySchema } from "@/lib/schemas";

// Payload (JSON): { from, duration, month, name, mobile, category, seater? }
// Forwards to ENQUIRY_WEBHOOK_URL. Without it we return 503 - we never fake success.
const hits = new Map<string, number[]>();
export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 60_000);
  if (recent.length >= 5) return NextResponse.json({ error: "Too many requests. Please try again shortly." }, { status: 429 });
  hits.set(ip, [...recent, now]);

  const parsed = enquirySchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid details", issues: parsed.error.flatten() }, { status: 400 });
  if (parsed.data.website) return NextResponse.json({ ok: true }); // bot honeypot

  const url = process.env.ENQUIRY_WEBHOOK_URL;
  if (!url) return NextResponse.json({ error: "Enquiries are not configured yet. Please call us instead." }, { status: 503 });
  try {
    const { website, ...payload } = parsed.data; void website;
    const r = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...payload, receivedAt: new Date().toISOString() }) });
    if (!r.ok) throw new Error(String(r.status));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "We couldn't send your enquiry. Please try again." }, { status: 502 });
  }
}
