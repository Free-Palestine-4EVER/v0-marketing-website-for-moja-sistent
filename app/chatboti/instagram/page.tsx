import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChatExample } from "@/components/chat-example"
import { IntegrationSteps } from "@/components/integration-steps"
import { ArrowLeft, Heart, MessageCircle, Share, Users } from "lucide-react"

const instagramFeatures = [
  {
    icon: MessageCircle,
    title: "Automatski odgovori na komentare",
    description: "Bot prepoznaje upite u komentarima i odgovara u realnom vremenu",
  },
  {
    icon: Heart,
    title: "Upravljanje direktnim porukama",
    description: "Obrađuje DM-ove, odgovara na pitanja i preusmjerava složene slučajeve",
  },
  {
    icon: Users,
    title: "Praćenje potencijalnih klijenata",
    description: "Identificira zainteresovane korisnike i čuva njihove kontakt informacije",
  },
  {
    icon: Share,
    title: "Promocija proizvoda/usluga",
    description: "Dijeli informacije o vašim ponudama kada korisnici pokažu interes",
  },
]

const chatExamples = [
  {
    title: "Upit o radnom vremenu",
    messages: [
      { sender: "user" as const, text: "Kada ste otvoreni?", time: "14:23" },
      {
        sender: "bot" as const,
        text: "Radimo od ponedjeljka do petka 9:00-17:00, subotom 9:00-14:00. Nedjelja je neradni dan. 😊",
        time: "14:23",
      },
      { sender: "user" as const, text: "Super, hvala!", time: "14:24" },
    ],
  },
  {
    title: "Rezervacija termina",
    messages: [
      { sender: "user" as const, text: "Mogu li rezervirati termin za šišanje?", time: "10:15" },
      {
        sender: "bot" as const,
        text: "Naravno! Dostupni termini za ovu sedmicu: Utorak 15:00, Četvrtak 11:00, Petak 16:30. Koji vam odgovara?",
        time: "10:15",
      },
      { sender: "user" as const, text: "Četvrtak u 11", time: "10:16" },
      {
        sender: "bot" as const,
        text: "Odlično! Rezervisan je termin za četvrtak u 11:00. Molim pošaljite mi vaš broj telefona za potvrdu.",
        time: "10:16",
      },
    ],
  },
]

const integrationSteps = [
  {
    title: "Povezivanje",
    description: "Povezujemo vaš Instagram Business profil sa našim sistemom kroz sigurnu API vezu.",
  },
  {
    title: "Konfiguracija",
    description: "Podešavamo bot prema vašem poslovanju - ton, odgovori, radni sati i specifične informacije.",
  },
  {
    title: "Testiranje",
    description: "Testiramo sve funkcionalnosti i fine-tunujemo odgovore prije puštanja u rad.",
  },
]

export default function InstagramBotPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20">
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
                <span className="text-gradient">Instagram Bot</span>
                <br />
                <span className="text-foreground">Vaš asistent za društvene mreže</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Automatski odgovara na komentare i direktne poruke, vodi rezervacije i pomaže u komunikaciji sa
                pratiteljima na Instagramu.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4">
                Naruči Instagram bota
              </Button>
            </div>

            <div className="relative">
              <div className="relative w-80 h-96 mx-auto">
                <Image
                  src="/images/instagram-bot.png"
                  alt="Instagram Bot"
                  fill
                  className="object-contain animate-float"
                />
                <div className="absolute -inset-8 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full blur-3xl -z-10"></div>
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
            {instagramFeatures.map((feature, index) => (
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
                botAvatar="/images/instagram-bot.png"
                botName="Instagram Bot"
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
            <span className="text-gradient">Spremni za Instagram automatizaciju?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Instagram bot košta <strong>200 BAM mjesečno</strong> ili možete uzeti paket od 5 botova za{" "}
            <strong>750 BAM mjesečno</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4">
              Naruči Instagram bota
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
