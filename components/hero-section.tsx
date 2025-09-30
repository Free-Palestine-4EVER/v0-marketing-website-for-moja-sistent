"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, DollarSign } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const router = useRouter()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background gradient glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-glow rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 gradient-glow rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-glow rounded-full opacity-20 animate-pulse-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center animate-in slide-in-from-left duration-700">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              <span className="text-gradient">AI zaposlenici.</span>
              <br />
              <span className="text-foreground">Vaši pomoćnici koji nikad ne spavaju.</span>
            </h1>

            <p className="text-xl text-muted-foreground mt-6 text-pretty max-w-2xl mx-auto animate-in slide-in-from-left duration-700 delay-200">
              Iznajmite chatbote koji odgovaraju na upite, vode rezervacije i rješavaju FAQ – na društvenim mrežama,
              webu i e-mailu. Ja pravim botove po mjeri vašeg posla.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center animate-in slide-in-from-left duration-700 delay-400">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 btn-primary hover:scale-105 transition-transform"
                onClick={() => {
                  router.push("/kontakt")
                }}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Kontaktiraj nas
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-2 bg-transparent hover:bg-muted/50 hover:scale-105 transition-all"
                onClick={() => document.getElementById("cijene")?.scrollIntoView({ behavior: "smooth" })}
              >
                <DollarSign className="mr-2 h-5 w-5" />
                Pogledaj cijene
              </Button>
            </div>
          </div>

          <div className="relative animate-in slide-in-from-right duration-700 delay-300">
            <div className="relative mx-auto max-w-lg">
              <Image
                src="/images/ai-team-office.png"
                alt="MojaSistent.ba AI team in modern office - 5 AI assistants for Instagram, WhatsApp, Email, Web, and more"
                width={600}
                height={600}
                className="w-full h-auto rounded-3xl shadow-2xl animate-float"
                priority
              />
              {/* Enhanced glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl -z-10 animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
