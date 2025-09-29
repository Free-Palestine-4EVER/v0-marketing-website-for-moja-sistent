import { Card } from "@/components/ui/card"
import { Instagram, Mail, Globe, Calendar, FileSpreadsheet, Facebook, Phone } from "lucide-react"

const integrations = [
  {
    name: "Instagram",
    icon: Instagram,
    color: "from-pink-500 to-purple-600",
    description: "Komentari i DM-ovi",
  },
  {
    name: "Facebook",
    icon: Facebook,
    color: "from-blue-600 to-indigo-700",
    description: "Messenger i komentari",
  },
  {
    name: "WhatsApp",
    icon: Phone,
    color: "from-green-500 to-emerald-600",
    description: "Business poruke",
  },
  {
    name: "Email",
    icon: Mail,
    color: "from-blue-500 to-cyan-600",
    description: "Gmail, Outlook, ostali",
  },
  {
    name: "Web stranica",
    icon: Globe,
    color: "from-indigo-500 to-blue-600",
    description: "Live chat widget",
  },
  {
    name: "Kalendari",
    icon: Calendar,
    color: "from-orange-500 to-red-600",
    description: "Google, Outlook kalendar",
  },
  {
    name: "CRM sistemi",
    icon: FileSpreadsheet,
    color: "from-purple-500 to-pink-600",
    description: "Sheets, Airtable, ostali",
  },
]

export function IntegrationsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-6">
            <span className="text-gradient">Radi sa vašim omiljenim alatima</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Naši botovi se lako integrišu sa platformama koje već koristite, bez potrebe za promjenom postojećih
            procesa.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <Card
              key={index}
              className="card-hover p-6 bg-card/50 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 text-center group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${integration.color} text-white mb-4`}>
                <integration.icon className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{integration.name}</h3>
              <p className="text-sm text-muted-foreground">{integration.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Ne vidite vašu platformu? <span className="text-primary font-medium">Kontaktirajte nas</span> - vjerovatno
            možemo integrirati i nju!
          </p>
        </div>
      </div>
    </section>
  )
}
