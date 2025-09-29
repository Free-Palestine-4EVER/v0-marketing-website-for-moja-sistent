import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Marko Petrović",
    role: "Vlasnik restorana 'Stari grad'",
    avatar: "/restaurant-owner.png",
    content:
      "Bot je revolucionirao naš način rada. Sada automatski prima rezervacije 24/7, a ja se mogu fokusirati na kvalitet hrane i usluge. Preporučujem svima!",
    rating: 5,
  },
  {
    name: "Dr. Ana Nikolić",
    role: "Zubna ordinacija 'Osmijeh'",
    avatar: "/female-dentist.png",
    content:
      "Pacijenti mogu zakazati termine i van radnog vremena. Bot odgovara na osnovna pitanja o tretmanima i cijenama. Uštedjela sam sate vremena dnevno.",
    rating: 5,
  },
  {
    name: "Stefan Jovanović",
    role: "Frizerski salon 'Style'",
    avatar: "/male-hairdresser.png",
    content:
      "Instagram bot odgovara na komentare i poruke dok ja radim sa klijentima. Povećao se broj rezervacija za 40% jer ljudi mogu kontaktirati u bilo koje vrijeme.",
    rating: 5,
  },
  {
    name: "Milica Stojanović",
    role: "Spa centar 'Relax'",
    avatar: "/spa-owner-female.jpg",
    content:
      "WhatsApp bot je savršen za naše klijente. Mogu rezervirati tretmane, pitati o cijenama i dobiti informacije o dostupnosti. Vrlo jednostavno i efikasno.",
    rating: 5,
  },
  {
    name: "Nikola Mitrović",
    role: "Hotel 'Planinski raj'",
    avatar: "/hotel-manager.png",
    content:
      "Imamo 5 botova za različite platforme. Gosti mogu rezervirati sobe, pitati o sadržajima hotela i dobiti informacije o lokalnim atrakcijama. Odličan sistem!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-6">
            <span className="text-gradient">Šta kažu naši klijenti</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Pridružite se stotinama zadovoljnih biznisa koji su automatizovali svoju komunikaciju sa klijentima.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="card-hover border-2 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-muted-foreground mb-6 text-pretty">"{testimonial.content}"</blockquote>

                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
