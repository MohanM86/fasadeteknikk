import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    if (!data.navn || !data.telefon || !data.postnummer || !data.tjeneste || !data.samtykke) {
      return NextResponse.json({ success: false, error: "Manglende felter." }, { status: 400 });
    }
    if (!/^\d{4}$/.test(data.postnummer)) {
      return NextResponse.json({ success: false, error: "Ugyldig postnummer." }, { status: 400 });
    }
    if (process.env.NODE_ENV === "development") { console.log("[LEAD]", JSON.stringify(data, null, 2)); }
    return NextResponse.json({ success: true, id: `lead_${Date.now()}` }, { status: 201 });
  } catch (err) {
    console.error("[LEAD ERROR]", err);
    return NextResponse.json({ success: false, error: "Intern feil." }, { status: 500 });
  }
}
