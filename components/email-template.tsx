import type * as React from "react"

interface ContactEmailTemplateProps {
  firstName: string
  lastName: string
  email: string
  phone: string
  business: string
  message?: string
  selectedBots?: string[]
  selectedPackage?: string
  totalPrice: number
  isAdmin?: boolean
}

const botNames: Record<string, string> = {
  whatsapp: "WhatsApp Bot",
  instagram: "Instagram Bot",
  facebook: "Facebook Bot",
  web: "Web Chat Bot",
  email: "Email Bot",
  "instagram-post": "Instagram Post Bot (Premium)",
  voice: "Voice Call Bot (Premium)",
}

const packageNames: Record<string, string> = {
  single: "Pojedinačni bot",
  five: "Paket 5 botova",
  army: "Assistant Army (7 botova)",
}

export const ContactEmailTemplate: React.FC<Readonly<ContactEmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  phone,
  business,
  message,
  selectedBots = [],
  selectedPackage,
  totalPrice,
  isAdmin = false,
}) => (
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
    </head>
    <body
      style={{
        backgroundColor: "#f6f9fc",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
        margin: 0,
        padding: 0,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      <table
        role="presentation"
        style={{
          width: "100%",
          backgroundColor: "#f6f9fc",
          padding: "40px 0",
        }}
      >
        <tr>
          <td align="center">
            {/* Main Container */}
            <table
              role="presentation"
              style={{
                maxWidth: "600px",
                width: "100%",
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)",
              }}
            >
              {/* Header with Gradient */}
              <tr>
                <td
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    padding: "48px 40px",
                    textAlign: "center",
                  }}
                >
                  <h1
                    style={{
                      margin: 0,
                      fontSize: "32px",
                      fontWeight: "700",
                      color: "#ffffff",
                      letterSpacing: "-0.5px",
                      textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    }}
                  >
                    {isAdmin ? "🔔 Novi Zahtjev" : "✨ Hvala vam!"}
                  </h1>
                  <p
                    style={{
                      margin: "12px 0 0 0",
                      fontSize: "16px",
                      color: "rgba(255, 255, 255, 0.95)",
                      lineHeight: "1.5",
                    }}
                  >
                    {isAdmin ? "Primljen je novi zahtjev za AI asistente" : "Vaš zahtjev je uspješno primljen"}
                  </p>
                </td>
              </tr>

              {/* Content */}
              <tr>
                <td style={{ padding: "40px" }}>
                  {/* Greeting */}
                  <div style={{ marginBottom: "32px" }}>
                    <h2
                      style={{
                        margin: "0 0 16px 0",
                        fontSize: "24px",
                        fontWeight: "600",
                        color: "#1a202c",
                        lineHeight: "1.3",
                      }}
                    >
                      {isAdmin ? `Klijent: ${firstName} ${lastName}` : `Poštovani ${firstName},`}
                    </h2>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "16px",
                        color: "#4a5568",
                        lineHeight: "1.6",
                      }}
                    >
                      {isAdmin
                        ? "Detalji zahtjeva su prikazani ispod."
                        : "Primili smo vaš zahtjev za AI asistente i kontaktiraćemo vas u najkraćem mogućem roku. Naš tim će pregledati vaše potrebe i pripremiti personalizovanu ponudu."}
                    </p>
                  </div>

                  {/* Contact Information Card */}
                  <div
                    style={{
                      backgroundColor: "#f7fafc",
                      borderRadius: "12px",
                      padding: "24px",
                      marginBottom: "32px",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <h3
                      style={{
                        margin: "0 0 16px 0",
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#2d3748",
                      }}
                    >
                      📋 Kontakt Informacije
                    </h3>
                    <table role="presentation" style={{ width: "100%" }}>
                      <tr>
                        <td
                          style={{
                            padding: "8px 0",
                            fontSize: "14px",
                            color: "#718096",
                            width: "140px",
                          }}
                        >
                          <strong>Ime i prezime:</strong>
                        </td>
                        <td
                          style={{
                            padding: "8px 0",
                            fontSize: "14px",
                            color: "#2d3748",
                          }}
                        >
                          {firstName} {lastName}
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            padding: "8px 0",
                            fontSize: "14px",
                            color: "#718096",
                          }}
                        >
                          <strong>Email:</strong>
                        </td>
                        <td
                          style={{
                            padding: "8px 0",
                            fontSize: "14px",
                            color: "#2d3748",
                          }}
                        >
                          {email}
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            padding: "8px 0",
                            fontSize: "14px",
                            color: "#718096",
                          }}
                        >
                          <strong>Telefon:</strong>
                        </td>
                        <td
                          style={{
                            padding: "8px 0",
                            fontSize: "14px",
                            color: "#2d3748",
                          }}
                        >
                          {phone}
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            padding: "8px 0",
                            fontSize: "14px",
                            color: "#718096",
                          }}
                        >
                          <strong>Tip biznisa:</strong>
                        </td>
                        <td
                          style={{
                            padding: "8px 0",
                            fontSize: "14px",
                            color: "#2d3748",
                          }}
                        >
                          {business}
                        </td>
                      </tr>
                    </table>
                  </div>

                  {/* Selected Services */}
                  <div
                    style={{
                      backgroundColor: "#edf2f7",
                      borderRadius: "12px",
                      padding: "24px",
                      marginBottom: "32px",
                      border: "1px solid #cbd5e0",
                    }}
                  >
                    <h3
                      style={{
                        margin: "0 0 16px 0",
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#2d3748",
                      }}
                    >
                      🤖 Odabrani Servisi
                    </h3>

                    {selectedPackage ? (
                      <div
                        style={{
                          backgroundColor: "#ffffff",
                          borderRadius: "8px",
                          padding: "16px",
                          marginBottom: "12px",
                          border: "2px solid #667eea",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div>
                            <div
                              style={{
                                fontSize: "16px",
                                fontWeight: "600",
                                color: "#2d3748",
                                marginBottom: "4px",
                              }}
                            >
                              {packageNames[selectedPackage] || selectedPackage}
                            </div>
                            <div
                              style={{
                                fontSize: "12px",
                                color: "#667eea",
                                fontWeight: "600",
                              }}
                            >
                              🎉 50% POPUST - Prvih 3 mjeseca
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      selectedBots.map((botId) => (
                        <div
                          key={botId}
                          style={{
                            backgroundColor: "#ffffff",
                            borderRadius: "8px",
                            padding: "12px 16px",
                            marginBottom: "8px",
                            border: "1px solid #e2e8f0",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "14px",
                              fontWeight: "500",
                              color: "#2d3748",
                            }}
                          >
                            ✓ {botNames[botId] || botId}
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Message if provided */}
                  {message && (
                    <div
                      style={{
                        backgroundColor: "#fffaf0",
                        borderRadius: "12px",
                        padding: "24px",
                        marginBottom: "32px",
                        border: "1px solid #fbd38d",
                      }}
                    >
                      <h3
                        style={{
                          margin: "0 0 12px 0",
                          fontSize: "18px",
                          fontWeight: "600",
                          color: "#2d3748",
                        }}
                      >
                        💬 Dodatne Napomene
                      </h3>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "14px",
                          color: "#4a5568",
                          lineHeight: "1.6",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        {message}
                      </p>
                    </div>
                  )}

                  {/* Price Summary */}
                  <div
                    style={{
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      borderRadius: "12px",
                      padding: "24px",
                      textAlign: "center",
                      marginBottom: "32px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "14px",
                        color: "rgba(255, 255, 255, 0.9)",
                        marginBottom: "8px",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Ukupna Cijena
                    </div>
                    <div
                      style={{
                        fontSize: "48px",
                        fontWeight: "700",
                        color: "#ffffff",
                        lineHeight: "1",
                        marginBottom: "8px",
                      }}
                    >
                      {totalPrice} BAM
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "rgba(255, 255, 255, 0.95)",
                        fontWeight: "600",
                      }}
                    >
                      mjesečno (prvih 3 mjeseca)
                    </div>
                  </div>

                  {/* Next Steps */}
                  {!isAdmin && (
                    <div
                      style={{
                        backgroundColor: "#f0fff4",
                        borderRadius: "12px",
                        padding: "24px",
                        border: "1px solid #9ae6b4",
                      }}
                    >
                      <h3
                        style={{
                          margin: "0 0 16px 0",
                          fontSize: "18px",
                          fontWeight: "600",
                          color: "#2d3748",
                        }}
                      >
                        🚀 Šta je sljedeće?
                      </h3>
                      <ol
                        style={{
                          margin: 0,
                          paddingLeft: "20px",
                          fontSize: "14px",
                          color: "#4a5568",
                          lineHeight: "1.8",
                        }}
                      >
                        <li>Naš tim će pregledati vaš zahtjev</li>
                        <li>Kontaktiraćemo vas u roku od 24h</li>
                        <li>Dogovorićemo detalje implementacije</li>
                        <li>Započećemo sa razvojem vaših AI asistenata</li>
                      </ol>
                    </div>
                  )}
                </td>
              </tr>

              {/* Footer */}
              <tr>
                <td
                  style={{
                    backgroundColor: "#2d3748",
                    padding: "32px 40px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 16px 0",
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#ffffff",
                    }}
                  >
                    MojaSistent.ba
                  </p>
                  <p
                    style={{
                      margin: "0 0 16px 0",
                      fontSize: "14px",
                      color: "#a0aec0",
                      lineHeight: "1.6",
                    }}
                  >
                    Vaš partner za AI automatizaciju
                  </p>
                  <div style={{ marginBottom: "16px" }}>
                    <a
                      href="https://wa.me/15202389320"
                      style={{
                        display: "inline-block",
                        margin: "0 8px",
                        color: "#4fd1c5",
                        textDecoration: "none",
                        fontSize: "14px",
                      }}
                    >
                      WhatsApp
                    </a>
                    <span style={{ color: "#4a5568" }}>•</span>
                    <a
                      href="mailto:info@mojasistent.ba"
                      style={{
                        display: "inline-block",
                        margin: "0 8px",
                        color: "#4fd1c5",
                        textDecoration: "none",
                        fontSize: "14px",
                      }}
                    >
                      Email
                    </a>
                    <span style={{ color: "#4a5568" }}>•</span>
                    <a
                      href="https://mojasistent.ba"
                      style={{
                        display: "inline-block",
                        margin: "0 8px",
                        color: "#4fd1c5",
                        textDecoration: "none",
                        fontSize: "14px",
                      }}
                    >
                      Website
                    </a>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "12px",
                      color: "#718096",
                    }}
                  >
                    © 2025 MojaSistent.ba. Sva prava zadržana.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
)
