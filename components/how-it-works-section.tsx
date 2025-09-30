"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MessageCircle, Settings, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Kratak razgovor",
    description: "Razgovaramo o vašem poslovanju, klijentima i najčešćim upitima koje dobijate.",
    details: ["Analiza vaših potreba", "Identifikacija ključnih procesa", "Definiranje ciljeva automatizacije"],
    color: "from-blue-500 to-cyan-600",
  },
  {
    number: "02",
    icon: Settings,
    title: "Izrada i trening bota",
    description: "Kreiram personalizovanog bota sa vašim tonom komunikacije i specifičnim informacijama.",
    details: ["Kreiranje odgovora po mjeri", "Podešavanje tona i stila", "Integracija sa vašim sistemima"],
    color: "from-purple-500 to-pink-600",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Lansiranje i praćenje",
    description: "Puštamo bota u rad, pratimo performanse i kontinuirano optimizujemo rezultate.",
    details: ["Testiranje i pokretanje", "Praćenje statistika", "Kontinuirana optimizacija"],
    color: "from-green-500 to-emerald-600",
  },
]

export function HowItWorksSection() {
  const router = useRouter()

  return (
    <section id="kako-radi" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-4">
            <span className="text-gradient">Kako funkcioniše u 3 koraka</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Jednostavan proces od prvog razgovora do potpuno funkcionalnog AI asistenta za vaš biznis.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative group">
                  {/* Glow effect on hover */}
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-br ${step.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}
                  />

                  {/* Main card */}
                  <div className="relative bg-card/80 backdrop-blur-sm border border-border/40 rounded-3xl p-8 shadow-xl shadow-black/5 group-hover:shadow-2xl group-hover:shadow-black/10 transition-all duration-500 group-hover:-translate-y-1">
                    {/* Number badge - elegant and minimal */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-background to-muted border border-border/50 shadow-lg flex items-center justify-center">
                      <span
                        className={`text-2xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Icon - integrated design */}
                    <div className="mb-6 relative">
                      <div
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg shadow-black/10`}
                      >
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3 text-balance">{step.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">{step.description}</p>

                    {/* Details - refined list */}
                    <div className="space-y-3 pt-4 border-t border-border/30">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-3 group/item">
                          <div
                            className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${step.color} flex-shrink-0 group-hover/item:scale-150 transition-transform`}
                          />
                          <span className="text-sm text-muted-foreground/80 group-hover/item:text-muted-foreground transition-colors">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12"
            onClick={() => router.push("/kontakt")}
          >
            Rezerviši demo
          </Button>
          <p className="text-xs text-muted-foreground mt-3">Besplatan razgovor o vašim potrebama • Bez obaveza</p>
        </div>
      </div>
    </section>
  )
}
