import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Nazad na početnu
              </Link>
            </Button>
          </div>

          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-balance mb-6">
              <span className="text-gradient">Politika privatnosti</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Vaša privatnost je naš prioritet. Evo kako čuvamo i koristimo vaše podatke.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Prikupljanje podataka</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Prikupljamo samo podatke potrebne za pružanje naših usluga: kontakt informacije, detalje o vašem
                  poslovanju i komunikaciju sa chatbotovima.
                </p>
                <p className="text-muted-foreground">
                  Svi podaci se čuvaju sigurno i koriste se isključivo za poboljšanje naših usluga i komunikaciju sa
                  vama.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Korištenje podataka</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Vaše podatke koristimo za kreiranje i održavanje chatbotova, pružanje podrške i slanje važnih
                  obavještenja o usluzi.
                </p>
                <p className="text-muted-foreground">
                  Nikad ne dijelimo vaše podatke sa trećim stranama bez vaše eksplicitne dozvole.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Sigurnost</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Koristimo najnovije sigurnosne tehnologije za zaštitu vaših podataka. Svi podaci su enkriptovani i
                  čuvaju se na sigurnim serverima.
                </p>
                <p className="text-muted-foreground">
                  Redovno ažuriramo naše sigurnosne protokole kako bismo osigurali maksimalnu zaštitu.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Vaša prava</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Imate pravo pristupa, ispravke ili brisanja svojih podataka u bilo koje vrijeme. Kontaktirajte nas na
                  info@mojasistent.ba za bilo kakve zahtjeve.
                </p>
                <p className="text-muted-foreground">
                  Možete odustati od naših usluga u bilo koje vrijeme, a mi ćemo sigurno obrisati sve vaše podatke.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Ova politika je ažurirana 1. januara 2025. Za pitanja kontaktirajte nas na{" "}
              <span className="text-primary">info@mojasistent.ba</span>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
