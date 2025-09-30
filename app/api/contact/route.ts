import { Resend } from "resend"
import { NextResponse } from "next/server"
import { ContactEmailTemplate } from "@/components/email-template"

const resend = new Resend("re_5Po7PpaL_B69M46fmAAgNvCByF3S7trPx")

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, business, message, selectedBots, selectedPackage, totalPrice } = body

    console.log("[v0] Received contact form submission:", { email, firstName, lastName })

    // Send email to client
    const { data, error } = await resend.emails.send({
      from: "MojaSistent.ba <onboarding@resend.dev>",
      to: [email],
      subject: "Potvrda vašeg zahtjeva - MojaSistent.ba 🤖",
      react: ContactEmailTemplate({
        firstName,
        lastName,
        email,
        phone,
        business,
        message,
        selectedBots,
        selectedPackage,
        totalPrice,
      }),
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    console.log("[v0] Email sent successfully:", data)

    // Optionally send notification to admin
    await resend.emails.send({
      from: "MojaSistent.ba <onboarding@resend.dev>",
      to: ["info@mojasistent.ba"],
      subject: `Novi zahtjev od ${firstName} ${lastName}`,
      react: ContactEmailTemplate({
        firstName,
        lastName,
        email,
        phone,
        business,
        message,
        selectedBots,
        selectedPackage,
        totalPrice,
        isAdmin: true,
      }),
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("[v0] API route error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
