import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
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
              <span className="text-gradient">Uslovi korištenja</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Uslovi i pravila korištenja naših AI chatbot usluga.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Usluge</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  MojaSistent.ba pruža usluge kreiranja i održavanja AI chatbotova za različite platforme uključujući
                  Instagram, Facebook, WhatsApp, email i web stranice.
                </p>
                <p className="text-muted-foreground">
                  Sve usluge se pružaju prema dogovorenim specifikacijama i u skladu sa najboljim praksama industrije.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Plaćanje</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Usluge se naplaćuju mjesečno unaprijed. Pojedinačni bot košta 200 BAM mjesečno, a paket od 5 botova
                  750 BAM mjesečno.
                </p>
                <p className="text-muted-foreground">
                  Plaćanje se vrši do 5. u mjesecu za tekući mjesec. Kašnjenje u plaćanju može rezultovati privremenim
                  prekidom usluge.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Otkazivanje</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Možete otkazati uslugu u bilo koje vrijeme sa otkaznim rokom od 30 dana. Otkazivanje se vrši pisanim
                  putem na info@mojasistent.ba.
                </p>
                <p className="text-muted-foreground">
                  Nakon otkazivanja, botovi će prestati raditi na kraju tekućeg obračunskog perioda.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Odgovornost</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Garantujemo 99% uptime za naše usluge. U slučaju prekida duljeg od 24 sata, pružićemo kompenzaciju u
                  vidu produžetka usluge.
                </p>
                <p className="text-muted-foreground">
                  Nismo odgovorni za sadržaj koji bot generiše na osnovu netačnih informacija koje ste nam pružili.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Ovi uslovi su ažurirani 1. januara 2025. Za pitanja kontaktirajte nas na{" "}
              <span className="text-primary">info@mojasistent.ba</span>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
