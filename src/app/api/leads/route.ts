import { NextResponse } from "next/server";
import { submitLeadViaFormSubmit } from "@/lib/formsubmit";
import { site } from "@/lib/site";
import { leadSchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "leads",
    delivery: "formsubmit",
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "validation_failed", fieldErrors: parsed.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const origin = request.headers.get("origin") ?? site.url.replace(/\/$/, "");
    const result = await submitLeadViaFormSubmit(parsed.data, origin);

    if (!result.ok) {
      return NextResponse.json(
        { ok: false, error: "formsubmit_failed", message: result.message },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[leads] Error:", err);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
