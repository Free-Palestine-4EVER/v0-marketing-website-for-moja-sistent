import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChatExample } from "@/components/chat-example"
import { IntegrationSteps } from "@/components/integration-steps"
import { ArrowLeft, Globe, Zap, BarChart, Settings } from "lucide-react"

const webFeatures = [
  {
    icon: Globe,
    title: "Live chat na web stranici",
    description: "Integriše se direktno u vašu web stranicu kao chat widget",
  },
  {
    icon: Zap,
    title: "Instant odgovori",
    description: "Odgovara na pitanja posetilaca u realnom vremenu, 24/7",
  },
  {
    icon: BarChart,
    title: "Analitika i izvještaji",
    description: "Prati statistike razgovora i najčešća pitanja posetilaca",
  },
  {
    icon: Settings,
    title: "Prilagodljiv dizajn",
    description: "Chat widget se prilagođava dizajnu vaše web stranice",
  },
]

const chatExamples = [
  {
    title: "Upit o usluzi",
    messages: [
      { sender: "user" as const, text: "Pozdrav, trebam informacije o vašim uslugama", time: "16:45" },
      {
        sender: "bot" as const,
        text: "Pozdrav! Rado ću vam pomoći. Nudimo web dizajn, SEO optimizaciju i održavanje stranica. Šta vas konkretno zanima?",
        time: "16:45",
      },
      { sender: "user" as const, text: "Koliko košta izrada web stranice?", time: "16:46" },
      {
        sender: "bot" as const,
        text: "Cijene zavise od složenosti. Osnovna stranica od 1500 KM, e-commerce od 3000 KM. Mogu li zakazati konsultacije da razgovaramo detaljnije?",
        time: "16:46",
      },
    ],
  },
  {
    title: "Tehnička podrška",
    messages: [
      { sender: "user" as const, text: "Imam problem sa prijavom na sistem", time: "11:20" },
      {
        sender: "bot" as const,
        text: "Žao mi je zbog problema. Pokušajte resetovati lozinku klikom na 'Zaboravili ste lozinku?' ili kontaktirajte podršku na support@example.com",
        time: "11:20",
      },
      { sender: "user" as const, text: "Hvala, pokušaću", time: "11:21" },
    ],
  },
]

const integrationSteps = [
  {
    title: "Kod integracija",
    description: "Dodajemo jednostavan kod na vašu web stranicu - potrebno je samo kopirati i zalijepiti.",
  },
  {
    title: "Dizajn prilagođavanje",
    description: "Prilagođavamo boje, poziciju i stil chat widget-a vašem web dizajnu.",
  },
  {
    title: "Testiranje i pokretanje",
    description: "Testiramo funkcionalnost na vašoj stranici i puštamo bot u rad.",
  },
]

export default function WebBotPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Nazad na početnu
              </Link>
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-balance mb-6">
                <span className="text-gradient">Web Bot</span>
                <br />
                <span className="text-foreground">Live chat za vašu web stranicu</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Integriše se direktno u vašu web stranicu i pomaže posetiteljima u realnom vremenu sa instant
                odgovorima.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4">
                Naruči Web bota
              </Button>
            </div>

            <div className="relative">
              <div className="relative w-80 h-96 mx-auto">
                <Image src="/images/web-bot.png" alt="Web Bot" fill className="object-contain animate-float" />
                <div className="absolute -inset-8 bg-gradient-to-r from-indigo-500/20 to-blue-600/20 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-gradient">Šta ovaj bot radi</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {webFeatures.map((feature, index) => (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-2 border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Examples */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-gradient">Primjeri razgovora</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {chatExamples.map((example, index) => (
              <ChatExample
                key={index}
                title={example.title}
                messages={example.messages}
                botAvatar="/images/web-bot.png"
                botName="Web Bot"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Integration Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-gradient">Kako se integriše</span>
          </h2>

          <IntegrationSteps steps={integrationSteps} />
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-gradient">Spremni za web chat automatizaciju?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Web bot košta <strong>200 BAM mjesečno</strong> ili možete uzeti paket od 5 botova za{" "}
            <strong>750 BAM mjesečno</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4">
              Naruči Web bota
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent" asChild>
              <Link href="/cijene">Pogledaj sve cijene</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
