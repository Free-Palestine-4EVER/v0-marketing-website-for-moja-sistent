import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChatExample } from "@/components/chat-example"
import { IntegrationSteps } from "@/components/integration-steps"
import { ArrowLeft, Mail, Filter, Clock, Archive } from "lucide-react"

const emailFeatures = [
  {
    icon: Mail,
    title: "Automatski odgovori na email-ove",
    description: "Bot čita dolazne email-ove i šalje personalizirane automatske odgovore",
  },
  {
    icon: Filter,
    title: "Kategorizacija email-ova",
    description: "Sortira email-ove po prioritetu i preusmjerava važne poruke",
  },
  {
    icon: Clock,
    title: "Zakazivanje odgovora",
    description: "Može zakazati slanje odgovora u određeno vrijeme ili datum",
  },
  {
    icon: Archive,
    title: "Upravljanje inbox-om",
    description: "Organizuje email-ove, arhivira riješene upite i vodi evidenciju",
  },
]

const chatExamples = [
  {
    title: "Upit o proizvodu",
    messages: [
      {
        sender: "user" as const,
        text: "Poštovani, zanima me vaš proizvod XYZ. Molim više informacija.",
        time: "10:30",
      },
      {
        sender: "bot" as const,
        text: "Hvala na upitu! Proizvod XYZ košta 150 KM, dostupan je u 3 boje. Specifikacije šaljem u prilogu. Trebate li dodatne informacije?",
        time: "10:31",
      },
    ],
  },
  {
    title: "Zahtjev za podršku",
    messages: [
      { sender: "user" as const, text: "Imam problem sa vašom uslugom. Molim hitnu pomoć.", time: "14:15" },
      {
        sender: "bot" as const,
        text: "Žao mi je zbog problema. Vaš zahtjev je proslijeđen našem tehničkom timu. Kontaktiraće vas u roku od 2 sata. Ticket broj: #12345",
        time: "14:15",
      },
    ],
  },
]

const integrationSteps = [
  {
    title: "Email integracija",
    description: "Povezujemo bot sa vašim email sistemom (Gmail, Outlook, ili bilo koji drugi).",
  },
  {
    title: "Kreiranje template-a",
    description: "Pravimo personalizirane template-e za različite tipove upita i situacija.",
  },
  {
    title: "Testiranje i optimizacija",
    description: "Testiramo automatske odgovore i fine-tunujemo sistem za najbolje rezultate.",
  },
]

export default function EmailBotPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
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
                <span className="text-gradient">Email Bot</span>
                <br />
                <span className="text-foreground">Automatska email podrška</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Automatski obrađuje dolazne email-ove, šalje personalizirane odgovore i organizuje vašu email
                komunikaciju.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4">
                Naruči Email bota
              </Button>
            </div>

            <div className="relative">
              <div className="relative w-80 h-96 mx-auto">
                <Image src="/images/email-bot.png" alt="Email Bot" fill className="object-contain animate-float" />
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 to-cyan-600/20 rounded-full blur-3xl -z-10"></div>
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
            {emailFeatures.map((feature, index) => (
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
            <span className="text-gradient">Primjeri email odgovora</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {chatExamples.map((example, index) => (
              <ChatExample
                key={index}
                title={example.title}
                messages={example.messages}
                botAvatar="/images/email-bot.png"
                botName="Email Bot"
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
            <span className="text-gradient">Spremni za email automatizaciju?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Email bot košta <strong>200 BAM mjesečno</strong> ili možete uzeti paket od 5 botova za{" "}
            <strong>750 BAM mjesečno</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4">
              Naruči Email bota
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
