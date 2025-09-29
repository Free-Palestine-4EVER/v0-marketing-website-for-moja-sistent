import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Calendar, Clock, ArrowRight, BarChart } from "lucide-react"

const useCases = [
  {
    icon: MessageSquare,
    title: "Odgovori na društvenim mrežama",
    description: "Bot automatski odgovara na komentare i poruke na Instagramu, Facebooku i WhatsApp-u",
    color: "from-pink-500 to-purple-600",
    examples: ["Odgovori na FAQ", "Informacije o proizvodima", "Usmjeravanje na web stranicu"],
  },
  {
    icon: Calendar,
    title: "Rezervacije hotela i ordinacija",
    description: "Automatsko zakazivanje termina za hotele, zubne ordinacije, frizerske salone i spa centre",
    color: "from-blue-500 to-cyan-600",
    examples: ["Provjera dostupnosti", "Potvrda rezervacije", "Podsjetnici za termine"],
  },
  {
    icon: Clock,
    title: "Instant odgovori na FAQ",
    description: "24/7 odgovori na najčešća pitanja o radnom vremenu, cijenama i uslugama",
    color: "from-green-500 to-emerald-600",
    examples: ["Radno vrijeme", "Cijene usluga", "Lokacija i kontakt"],
  },
  {
    icon: ArrowRight,
    title: "Preusmjeravanje složenih slučajeva",
    description: "Prepoznaje kada je potrebna ljudska intervencija i preusmjerava razgovor",
    color: "from-orange-500 to-red-600",
    examples: ["Tehnička podrška", "Prilagođeni zahtjevi", "Žalbe i reklamacije"],
  },
  {
    icon: BarChart,
    title: "Praćenje i analiza leadova",
    description: "Prikuplja kontakt informacije zainteresovanih klijenata i prati konverzije",
    color: "from-indigo-500 to-purple-600",
    examples: ["Kontakt informacije", "Interesovanja klijenata", "Statistike razgovora"],
  },
]

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
            <span className="text-gradient">Automatizuje rad.</span>
            <br />
            <span className="text-foreground">Čak i dok spavate.</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto text-pretty">
            Naši AI botovi rade bez prestanka, rješavaju rutinske zadatke i oslobađaju vaše vrijeme za važnije stvari.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <Card
                key={index}
                className="card-hover border border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm group relative overflow-hidden"
              >
                {/* Subtle gradient accent */}
                <div
                  className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${useCase.color} opacity-5 blur-2xl group-hover:opacity-10 transition-opacity`}
                />

                <CardHeader className="pb-3 space-y-0">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${useCase.color} text-white flex-shrink-0`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base font-semibold leading-tight mb-1.5">{useCase.title}</CardTitle>
                      <p className="text-xs text-muted-foreground leading-relaxed">{useCase.description}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-1.5">
                    {useCase.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${useCase.color} flex-shrink-0`} />
                        <span className="leading-tight">{example}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
