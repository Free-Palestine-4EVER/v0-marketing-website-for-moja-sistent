import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Mail, MessageCircle, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
              <span className="text-gradient">Kontakt</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Spremni smo odgovoriti na sva vaša pitanja i pomoći vam da automatizujete komunikaciju sa klijentima.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Kontaktirajte nas</h2>

              <div className="space-y-6 mb-8">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-border/50">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">WhatsApp</h3>
                      <p className="text-muted-foreground">+387 XX XXX XXX</p>
                      <p className="text-sm text-muted-foreground">Najbrži način komunikacije</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-border/50">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">info@mojasistent.ba</p>
                      <p className="text-sm text-muted-foreground">Odgovaramo u roku od 24h</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-border/50">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Radno vrijeme</h3>
                      <p className="text-muted-foreground">Pon-Pet: 9:00 - 17:00</p>
                      <p className="text-sm text-muted-foreground">WhatsApp dostupan 24/7</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-border/50">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Lokacija</h3>
                      <p className="text-muted-foreground">Bosna i Hercegovina</p>
                      <p className="text-sm text-muted-foreground">Radimo sa klijentima širom regije</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border/50">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Pošaljite nam poruku</CardTitle>
                  <p className="text-muted-foreground">
                    Opišite vaš biznis i potrebe - odgovorićemo sa personalizovanom ponudom.
                  </p>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Ime</Label>
                        <Input id="firstName" placeholder="Vaše ime" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Prezime</Label>
                        <Input id="lastName" placeholder="Vaše prezime" className="mt-1" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email adresa</Label>
                      <Input id="email" type="email" placeholder="vas@email.com" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="phone">Broj telefona</Label>
                      <Input id="phone" placeholder="+387 XX XXX XXX" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="business">Tip biznisa</Label>
                      <Input id="business" placeholder="Restoran, hotel, ordinacija..." className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="message">Poruka</Label>
                      <Textarea
                        id="message"
                        placeholder="Opišite vaš biznis i kako možemo pomoći..."
                        className="mt-1 min-h-[120px]"
                      />
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                      Pošaljite poruku
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
