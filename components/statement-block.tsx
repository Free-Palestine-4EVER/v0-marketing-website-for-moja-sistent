import { MessageSquare, Calendar, ShoppingCart, Users } from "lucide-react"

export function StatementBlock() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-6">
          Stvarni, vrijedni pomoćnici – <span className="text-gradient">personalizirani za vaš biznis.</span>
        </h2>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-12">
          Naši AI chatboti rade 24/7, nikad ne uzimaju pauzu i uvijek su spremni pomoći vašim klijentima. Automatizujte
          rutinske zadatke i fokusirajte se na ono što je stvarno važno za vaš biznis.
        </p>

        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            FAQ
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Rezervacije
          </div>
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-primary" />
            Prodaja
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Leadovi
          </div>
        </div>
      </div>
    </section>
  )
}
