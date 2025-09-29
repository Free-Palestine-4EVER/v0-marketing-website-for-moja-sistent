import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const chatbots = [
  {
    id: "instagram",
    name: "Instagram Bot",
    description: "Odgovara na komentare i direktne poruke na Instagramu",
    image: "/images/instagram-bot.png",
    color: "from-pink-500 to-purple-600",
    href: "/chatboti/instagram",
  },
  {
    id: "whatsapp",
    name: "WhatsApp Bot",
    description: "Automatski odgovara na WhatsApp poruke i vodi rezervacije",
    image: "/images/whatsapp-bot.png",
    color: "from-green-500 to-emerald-600",
    href: "/chatboti/whatsapp",
  },
  {
    id: "email",
    name: "Email Bot",
    description: "Obrađuje email upite i šalje automatske odgovore",
    image: "/images/email-bot.png",
    color: "from-blue-500 to-cyan-600",
    href: "/chatboti/email",
  },
  {
    id: "web",
    name: "Web Bot",
    description: "Live chat na vašoj web stranici za instant podršku",
    image: "/images/web-bot.png",
    color: "from-indigo-500 to-blue-600",
    href: "/chatboti/web",
  },
  {
    id: "facebook",
    name: "Facebook Bot",
    description: "Upravlja Facebook Messenger razgovorima",
    image: "/images/facebook-bot.png",
    color: "from-blue-600 to-indigo-700",
    href: "/chatboti/facebook",
  },
  {
    id: "instagram-post",
    name: "Instagram Post Bot",
    description: "Automatski kreira i objavljuje Instagram postove sa AI sadržajem",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/37bd0176-004b-4a61-9a8a-a2ce719073fe.png-hBrkdhTXBt2IX2el8UdBP7sFz7wSBt.jpeg",
    color: "from-orange-500 to-pink-600",
    href: "/super-botovi",
  },
  {
    id: "voice-assistant",
    name: "Voice Assistant",
    description: "Glasovni asistent koji odgovara na pitanja i izvršava komande",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5ea1ef77-0d9c-4317-80bb-dac7231b10c7.png-4WQKdM2nF4EGk2OoV3NKe85cwQ3SGq.jpeg",
    color: "from-purple-500 to-indigo-600",
    href: "/super-botovi",
  },
]

export function ChatbotGallery() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-6">
            <span className="text-gradient">Odaberite svog pomoćnika</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Svaki bot je specijalizovan za određenu platformu i može se prilagoditi vašim specifičnim potrebama.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chatbots.map((bot, index) => (
            <Card
              key={bot.id}
              className="card-hover border-2 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="relative h-64 -mx-6 -mt-6 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${bot.color} opacity-10`}></div>
                  <Image
                    src={bot.image || "/placeholder.svg"}
                    alt={bot.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardTitle className="text-xl font-bold">{bot.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{bot.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full group">
                  <Link href={bot.href}>
                    Saznaj više
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
