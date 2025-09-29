import { Building, Users, BarChart3, Settings } from "lucide-react"

const features = [
  {
    icon: Building,
    title: "Više lokacija",
    description: "Upravljajte botovima za različite poslovnice iz jednog mjesta",
  },
  {
    icon: Users,
    title: "Tim botova",
    description: "Svaki bot specijalizovan za određenu lokaciju ili uslugu",
  },
  {
    icon: BarChart3,
    title: "Centralizirane statistike",
    description: "Pratite performanse svih botova kroz jedinstvenu kontrolnu tablu",
  },
  {
    icon: Settings,
    title: "Jednostavno upravljanje",
    description: "Mijenjajte postavke za sve botove odjednom ili pojedinačno",
  },
]

export function MultipleWorkspacesSection() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-3">
            <span className="text-gradient">Više poslovnica?</span>{" "}
            <span className="text-foreground">Jedan tim botova.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upravljajte svim botovima iz jedne kontrolne table. Svaki bot prilagođen specifičnostima lokacije.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-5 hover:border-primary/30 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:from-primary/20 group-hover:to-primary/10 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
