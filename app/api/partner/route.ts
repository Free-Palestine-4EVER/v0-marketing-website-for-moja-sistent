import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { PartnerEmailTemplate } from "@/components/partner-email-template"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { companyName, contactPerson, email, phone, website, partnerType, message } = body

    // Send email to admin
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: "MojAsistent.ba <info@mojasistent.ba>",
      to: "info@mojasistent.ba",
      subject: `Nova prijava za partnerstvo - ${companyName}`,
      react: PartnerEmailTemplate({
        companyName,
        contactPerson,
        email,
        phone,
        website,
        partnerType,
        message,
        isAdmin: true,
      }),
    })

    if (adminError) {
      console.error("[v0] Admin email error:", adminError)
      throw adminError
    }

    // Send confirmation email to partner
    const { data: partnerData, error: partnerError } = await resend.emails.send({
      from: "MojAsistent.ba <info@mojasistent.ba>",
      to: email,
      subject: "Hvala na interesovanju za partnerstvo - MojAsistent.ba",
      react: PartnerEmailTemplate({
        companyName,
        contactPerson,
        email,
        phone,
        website,
        partnerType,
        message,
        isAdmin: false,
      }),
    })

    if (partnerError) {
      console.error("[v0] Partner confirmation email error:", partnerError)
    }

    return NextResponse.json({ success: true, adminData, partnerData })
  } catch (error) {
    console.error("[v0] Partner form submission error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
