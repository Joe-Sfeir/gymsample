import { NextResponse } from "next/server";
import { createTrialBooking } from "@/lib/services/inquiries";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const result = await createTrialBooking(body);
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
        appointmentCreated: false,
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
