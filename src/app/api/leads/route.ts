import { NextResponse } from "next/server";
import { sendLeadConfirmation, sendLeadNotification } from "@/lib/email";
import { persistLead, shouldPersistLeadsToDisk } from "@/lib/leads-store";
import { leadSchema } from "@/lib/validation";

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

    const lead = await persistLead(parsed.data);
    const savedToFile = shouldPersistLeadsToDisk();
    const result = await sendLeadNotification(parsed.data);

    try {
      await sendLeadConfirmation(parsed.data);
    } catch (err) {
      console.error("[leads] Confirmation failed:", err);
    }

    const isDev = process.env.NODE_ENV === "development";

    return NextResponse.json({
      ok: true,
      id: lead.id,
      savedTo: savedToFile ? "data/leads.json" : undefined,
      emailSent: result.sent,
      emailMethod: "method" in result ? result.method : undefined,
      previewUrl: "previewUrl" in result ? result.previewUrl : undefined,
      emailNote:
        "devNote" in result && result.devNote
          ? result.devNote
          : result.sent
            ? "Your enquiry was emailed to our team."
            : isDev
              ? `Saved locally. Email us at tbeshgmail.com or add WEB3FORMS_ACCESS_KEY to .env.local.`
              : `We received your enquiry but email delivery is not configured. Please email tbesh@gmail.com, or set WEB3FORMS_ACCESS_KEY in Vercel Environment Variables.`,
      isDev,
    });
  } catch (err) {
    console.error("[leads] Error:", err);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
