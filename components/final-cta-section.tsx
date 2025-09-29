"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export function FinalCTASection() {
  const router = useRouter()

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative">
          <h2 className="text-4xl sm:text-6xl font-bold text-balance mb-6">
            <span className="text-gradient">Vaš novi tim sa beskonačnim znanjem.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Počnite danas – a mi ćemo odraditi težak dio posla. Vaši AI asistenti će biti spremni za rad za manje od
            sedmicu dana.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4"
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
              className="text-lg px-8 py-4 bg-background/80 backdrop-blur-sm"
              onClick={() => {
                router.push("/kontakt")
              }}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Kontakt
            </Button>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              Besplatan početni razgovor
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              Bez skrivenih troškova
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              Podrška na bosanskom jeziku
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute -inset-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  )
}
