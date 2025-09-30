"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChatExample } from "@/components/chat-example"
import { IntegrationSteps } from "@/components/integration-steps"
import { ArrowLeft, MessageCircle, Users, Share2, BarChart3 } from "lucide-react"

const facebookFeatures = [
  {
    icon: MessageCircle,
    title: "Facebook Messenger automatizacija",
    description: "Automatski odgovara na poruke u Facebook Messenger-u",
  },
  {
    icon: Users,
    title: "Upravljanje komentarima",
    description: "Odgovara na komentare na vašim Facebook postovima",
  },
  {
    icon: Share2,
    title: "Lead generiranje",
    description: "Prikuplja kontakt informacije zainteresovanih korisnika",
  },
  {
    icon: BarChart3,
    title: "Analitika angažmana",
    description: "Prati statistike interakcija i angažmana na Facebook stranici",
  },
]

const chatExamples = [
  {
    title: "Upit o proizvodu",
    messages: [
      { sender: "user" as const, text: "Vidio sam vaš post o novom proizvodu. Gdje mogu kupiti?", time: "13:20" },
      {
        sender: "bot" as const,
        text: "Hvala na interesovanju! Novi proizvod možete kupiti u našoj prodavnici ili online. Trebate li link za online kupovinu?",
        time: "13:20",
      },
      { sender: "user" as const, text: "Da, molim link", time: "13:21" },
      {
        sender: "bot" as const,
        text: "Evo linka: www.example.com/shop. Takođe imate 10% popusta sa kodom FACEBOOK10. Trebate li još informacija?",
        time: "13:21",
      },
    ],
  },
  {
    title: "Rezervacija događaja",
    messages: [
      { sender: "user" as const, text: "Mogu li rezervirati mjesto za vaš događaj sutra?", time: "19:30" },
      {
        sender: "bot" as const,
        text: "Naravno! Događaj je sutra u 19:00. Molim vaše ime i broj telefona za rezervaciju.",
        time: "19:30",
      },
      { sender: "user" as const, text: "Marko Petrović, 065-123-456", time: "19:31" },
      {
        sender: "bot" as const,
        text: "Odlično Marko! Rezervacija je potvrđena. Vidimo se sutra u 19:00. Poslat ću vam podsjetnik.",
        time: "19:31",
      },
    ],
  },
]

const integrationSteps = [
  {
    title: "Facebook integracija",
    description: "Povezujemo bot sa vašom Facebook stranicom kroz Facebook Business API.",
  },
  {
    title: "Podešavanje odgovora",
    description: "Kreiramo personalizirane odgovore za različite tipove upita i interakcija.",
  },
  {
    title: "Testiranje i optimizacija",
    description: "Testiramo bot na vašoj Facebook stranici i optimizujemo performanse.",
  },
]

export default function FacebookBotPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
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
                <span className="text-gradient">Facebook Bot</span>
                <br />
                <span className="text-foreground">Automatizacija za Facebook stranicu</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Automatski upravlja Facebook Messenger razgovorima, odgovara na komentare i pomaže u komunikaciji sa
                pratiteljima.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4"
                onClick={() => router.push("/kontakt")}
              >
                Naruči Facebook bota
              </Button>
            </div>

            <div className="relative">
              <div className="relative w-80 h-96 mx-auto">
                <Image
                  src="/images/facebook-bot.png"
                  alt="Facebook Bot"
                  fill
                  className="object-contain animate-float"
                />
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/20 to-indigo-700/20 rounded-full blur-3xl -z-10"></div>
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
            {facebookFeatures.map((feature, index) => (
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
                botAvatar="/images/facebook-bot.png"
                botName="Facebook Bot"
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
            <span className="text-gradient">Spremni za Facebook automatizaciju?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Facebook bot košta <strong>200 BAM mjesečno</strong> ili možete uzeti paket od 5 botova za{" "}
            <strong>750 BAM mjesečno</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4"
              onClick={() => router.push("/kontakt")}
            >
              Naruči Facebook bota
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
