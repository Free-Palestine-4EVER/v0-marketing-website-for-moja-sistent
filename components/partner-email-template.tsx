import type * as React from "react"

interface PartnerEmailTemplateProps {
  companyName: string
  contactPerson: string
  email: string
  phone: string
  website?: string
  partnerType: string
  message: string
  isAdmin: boolean
}

export const PartnerEmailTemplate: React.FC<PartnerEmailTemplateProps> = ({
  companyName,
  contactPerson,
  email,
  phone,
  website,
  partnerType,
  message,
  isAdmin,
}) => {
  const partnerTypeLabels: Record<string, string> = {
    agency: "Marketing/Web Agencija",
    reseller: "Reseller",
    consultant: "Konsultant/Freelancer",
    other: "Ostalo",
  }

  if (isAdmin) {
    return (
      <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
        <div style={{ backgroundColor: "#f8f9fa", padding: "40px 20px", textAlign: "center" }}>
          <h1 style={{ color: "#1a1a1a", margin: 0 }}>Nova prijava za partnerstvo</h1>
        </div>
        <div style={{ padding: "40px 20px", backgroundColor: "#ffffff" }}>
          <h2 style={{ color: "#1a1a1a", marginTop: 0 }}>Detalji kompanije</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tr>
              <td style={{ padding: "12px 0", borderBottom: "1px solid #e5e7eb", fontWeight: "bold", width: "40%" }}>
                Naziv kompanije:
              </td>
              <td style={{ padding: "12px 0", borderBottom: "1px solid #e5e7eb" }}>{companyName}</td>
            </tr>
            <tr>
              <td style={{ padding: "12px 0", borderBottom: "1px solid #e5e7eb", fontWeight: "bold" }}>
                Kontakt osoba:
              </td>
              <td style={{ padding: "12px 0", borderBottom: "1px solid #e5e7eb" }}>{contactPerson}</td>
            </tr>
            <tr>
              <td style={{ padding: "12px 0", borderBottom: "1px solid #e5e7eb", fontWeight: "bold" }}>Email:</td>
              <td style={{ padding: "12px 0", borderBottom: "1px solid #e5e7eb" }}>
                <a href={`mailto:${email}`} style={{ color: "#3b82f6" }}>
                  {email}
                </a>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "12px 0", borderBottom: "1px solid #e5e7eb", fontWeight: "bold" }}>Telefon:</td>
              <td style={{ padding: "12px 0", borderBottom: "1px solid #e5e7eb" }}>
                <a href={`tel:${phone}`} style={{ color: "#3b82f6" }}>
                  {phone}
                </a>
              </td>
            </tr>
            {website && (
              <tr>
                <td style={{ padding: "12px 0", borderBottom: "1px solid #e5e7eb", fontWeight: "bold" }}>Website:</td>
                <td style={{ padding: "12px 0", borderBottom: "1px solid #e5e7eb" }}>
                  <a href={website} target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6" }}>
                    {website}
                  </a>
                </td>
              </tr>
            )}
            <tr>
              <td style={{ padding: "12px 0", borderBottom: "1px solid #e5e7eb", fontWeight: "bold" }}>
                Tip partnera:
              </td>
              <td style={{ padding: "12px 0", borderBottom: "1px solid #e5e7eb" }}>
                {partnerTypeLabels[partnerType] || partnerType}
              </td>
            </tr>
          </table>

          <h2 style={{ color: "#1a1a1a", marginTop: "32px" }}>Poruka</h2>
          <div
            style={{
              backgroundColor: "#f8f9fa",
              padding: "20px",
              borderRadius: "8px",
              borderLeft: "4px solid #3b82f6",
            }}
          >
            <p style={{ margin: 0, lineHeight: "1.6", color: "#4b5563" }}>{message}</p>
          </div>
        </div>
        <div style={{ backgroundColor: "#f8f9fa", padding: "20px", textAlign: "center" }}>
          <p style={{ margin: 0, color: "#6b7280", fontSize: "14px" }}>© 2025 MojAsistent.ba</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <div style={{ backgroundColor: "#f8f9fa", padding: "40px 20px", textAlign: "center" }}>
        <h1 style={{ color: "#1a1a1a", margin: 0 }}>Hvala na interesovanju!</h1>
      </div>
      <div style={{ padding: "40px 20px", backgroundColor: "#ffffff" }}>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4b5563" }}>Poštovani {contactPerson},</p>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4b5563" }}>
          Hvala vam što ste se prijavili za naš partnerski program. Primili smo vašu prijavu i veoma smo uzbuđeni zbog
          mogućnosti saradnje sa {companyName}.
        </p>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4b5563" }}>
          Naš tim će pregledati vašu prijavu i kontaktirati vas u najkraćem mogućem roku kako bismo razgovarali o
          detaljima partnerstva i odgovorili na sva vaša pitanja.
        </p>
        <div
          style={{
            backgroundColor: "#f0f9ff",
            padding: "20px",
            borderRadius: "8px",
            marginTop: "24px",
            marginBottom: "24px",
          }}
        >
          <h3 style={{ color: "#1a1a1a", marginTop: 0 }}>Šta slijedi?</h3>
          <ul style={{ color: "#4b5563", lineHeight: "1.8", paddingLeft: "20px" }}>
            <li>Naš tim će pregledati vašu prijavu</li>
            <li>Kontaktirat ćemo vas za inicijalni razgovor</li>
            <li>Dogovorit ćemo detalje saradnje</li>
            <li>Započet ćemo sa obukom i onboardingom</li>
          </ul>
        </div>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4b5563" }}>
          U međuvremenu, slobodno nas kontaktirajte na{" "}
          <a href="mailto:info@mojasistent.ba" style={{ color: "#3b82f6" }}>
            info@mojasistent.ba
          </a>{" "}
          ili{" "}
          <a href="https://wa.me/15202389320" style={{ color: "#3b82f6" }}>
            WhatsApp
          </a>{" "}
          ako imate bilo kakvih pitanja.
        </p>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4b5563", marginBottom: 0 }}>
          Srdačan pozdrav,
          <br />
          <strong>MojAsistent.ba tim</strong>
        </p>
      </div>
      <div style={{ backgroundColor: "#f8f9fa", padding: "20px", textAlign: "center" }}>
        <p style={{ margin: 0, color: "#6b7280", fontSize: "14px" }}>© 2025 MojAsistent.ba</p>
      </div>
    </div>
  )
}
