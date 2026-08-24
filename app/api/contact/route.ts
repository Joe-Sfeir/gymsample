import { NextResponse } from "next/server";
import { createContactInquiry } from "@/lib/services/inquiries";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const result = await createContactInquiry(body);
    if (!result.ok) {
      return NextResponse.json(
        { ok: false, error: result.error.message },
        { status: result.error.code === "VALIDATION" ? 400 : 503 },
      );
    }
    return NextResponse.json(
      {
        ok: true,
        receipt: result.data.id,
        mode: "demo",
        retained: false,
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }
}
