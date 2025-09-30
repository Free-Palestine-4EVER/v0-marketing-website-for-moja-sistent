"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChatExample } from "@/components/chat-example"
import { IntegrationSteps } from "@/components/integration-steps"
import { ArrowLeft, MessageSquare, Calendar, Clock, Users } from "lucide-react"

const whatsappFeatures = [
  {
    icon: MessageSquare,
    title: "Automatski odgovori na poruke",
    description: "Bot odmah odgovara na WhatsApp poruke, čak i van radnog vremena",
  },
  {
    icon: Calendar,
    title: "Rezervacija termina",
    description: "Omogućava klijentima da rezervišu termine direktno kroz WhatsApp chat",
  },
  {
    icon: Clock,
    title: "24/7 dostupnost",
    description: "Radi non-stop, odgovara na osnovna pitanja i čuva poruke za vas",
  },
  {
    icon: Users,
    title: "Upravljanje grupnim chatovima",
    description: "Može moderirati grupe i odgovarati na česta pitanja u grupnim razgovorima",
  },
]

const chatExamples = [
  {
    title: "Rezervacija u restoranu",
    messages: [
      { sender: "user" as const, text: "Pozdrav, mogu li rezervirati sto za večeras?", time: "18:30" },
      {
        sender: "bot" as const,
        text: "Pozdrav! Za koliko osoba trebate rezervaciju i u koje vrijeme?",
        time: "18:30",
      },
      { sender: "user" as const, text: "Za 4 osobe, oko 20:00", time: "18:31" },
      {
        sender: "bot" as const,
        text: "Odlično! Imamo slobodan sto za 4 osobe u 20:00. Molim vaše ime i broj telefona za rezervaciju.",
        time: "18:31",
      },
    ],
  },
  {
    title: "Upit o usluzi",
    messages: [
      { sender: "user" as const, text: "Koliko košta čišćenje stana od 60m²?", time: "09:15" },
      {
        sender: "bot" as const,
        text: "Čišćenje stana od 60m² košta 80 KM. Uključuje sve prostorije, kupatilo i kuhinju. Trebate li rezervirati termin?",
        time: "09:15",
      },
      { sender: "user" as const, text: "Da, kada imate slobodno?", time: "09:16" },
      {
        sender: "bot" as const,
        text: "Dostupni termini: Sutra u 10:00, prekosutra u 14:00, ili petak u 09:00. Koji vam odgovara?",
        time: "09:16",
      },
    ],
  },
]

const integrationSteps = [
  {
    title: "WhatsApp Business setup",
    description: "Podešavamo vaš WhatsApp Business profil i povezujemo ga sa našim bot sistemom.",
  },
  {
    title: "Prilagođavanje odgovora",
    description: "Kreiramo personalizirane odgovore specifične za vaš biznis i usluge.",
  },
  {
    title: "Testiranje i pokretanje",
    description: "Testiramo sve funkcionalnosti i puštamo bota u rad sa vašim klijentima.",
  },
]

export default function WhatsAppBotPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
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
                <span className="text-gradient">WhatsApp Bot</span>
                <br />
                <span className="text-foreground">Direktna komunikacija sa klijentima</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Automatski odgovara na WhatsApp poruke, vodi rezervacije i pomaže u komunikaciji sa klijentima 24/7.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4"
                onClick={() => router.push("/kontakt")}
              >
                Naruči WhatsApp bota
              </Button>
            </div>

            <div className="relative">
              <div className="relative w-80 h-96 mx-auto">
                <Image
                  src="/images/whatsapp-bot.png"
                  alt="WhatsApp Bot"
                  fill
                  className="object-contain animate-float"
                />
                <div className="absolute -inset-8 bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-full blur-3xl -z-10"></div>
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
            {whatsappFeatures.map((feature, index) => (
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
                botAvatar="/images/whatsapp-bot.png"
                botName="WhatsApp Bot"
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
            <span className="text-gradient">Spremni za WhatsApp automatizaciju?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            WhatsApp bot košta <strong>200 BAM mjesečno</strong> ili možete uzeti paket od 5 botova za{" "}
            <strong>750 BAM mjesečno</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4"
              onClick={() => router.push("/kontakt")}
            >
              Naruči WhatsApp bota
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
