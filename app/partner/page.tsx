"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle2,
  TrendingUp,
  Users,
  Zap,
  Award,
  HeadphonesIcon,
  Rocket,
  DollarSign,
  Target,
  MessageCircle,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function PartnerPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    website: "",
    partnerType: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/partner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setIsSubmitted(true)
      toast({
        title: "Uspješno poslano!",
        description: "Kontaktirat ćemo vas uskoro.",
      })
    } catch (error) {
      toast({
        title: "Greška",
        description: "Molimo pokušajte ponovo.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (isSubmitted) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen pt-24 pb-16">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-gradient-to-br from-primary/10 via-background to-background border border-primary/20 rounded-2xl p-12 shadow-xl">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Hvala na interesovanju!</h1>
              <p className="text-muted-foreground text-lg mb-8">
                Primili smo vašu prijavu za partnerstvo. Naš tim će vas kontaktirati u najkraćem mogućem roku kako bismo
                razgovarali o mogućnostima saradnje.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button onClick={() => (window.location.href = "/")} variant="outline">
                  Nazad na početnu
                </Button>
                <Button onClick={() => setIsSubmitted(false)}>Nova prijava</Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
                Partnerski program
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Rastite zajedno sa nama</h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                Pridružite se našoj mreži partnera i otključajte nove mogućnosti za rast vašeg biznisa. Zajedno možemo
                pružiti AI rješenja koja transformišu način na koji kompanije komuniciraju sa svojim klijentima.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button
                  size="lg"
                  onClick={() => document.getElementById("partner-form")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Postanite partner
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://wa.me/15202389320" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Razgovarajmo
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl p-8 backdrop-blur-sm border border-primary/20">
                <div className="h-full flex flex-col justify-center gap-6">
                  <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-lg">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">30%</div>
                        <div className="text-sm text-muted-foreground">Provizija</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-lg">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">24/7</div>
                        <div className="text-sm text-muted-foreground">Podrška</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-lg">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">Premium</div>
                        <div className="text-sm text-muted-foreground">Resursi</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Zašto postati naš partner?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Nudimo kompletnu podršku i resurse koji vam omogućavaju da uspješno prodajete naša AI rješenja
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Atraktivna provizija</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Zarađujte do 30% provizije na svaku prodaju. Što više prodajete, veća je vaša zarada. Bez limita na
                  potencijalni prihod.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <HeadphonesIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Posvećena podrška</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Naš tim je dostupan 24/7 da vam pomogne sa tehničkim pitanjima, prodajnim strategijama i podrškom
                  klijentima.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Marketing materijali</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pristup profesionalnim marketing materijalima, prezentacijama, case studies i demo verzijama za vaše
                  klijente.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Brza implementacija</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Naša tehnologija omogućava brzu implementaciju za vaše klijente. Od prvog kontakta do live bota za
                  samo nekoliko dana.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Obuka i certifikacija</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Besplatna obuka za vas i vaš tim. Postanite certificirani MojAsistent partner i steknite ekspertizu u
                  AI chatbot tehnologiji.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Zajednička prodaja</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Naš sales tim će vam pomoći u zatvaranju većih dealova. Zajedno radimo na uspjehu vaših klijenata.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Partner Types Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ko može biti partner?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Tražimo različite tipove partnera koji mogu doprinijeti rastu naše zajedničke vizije
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Agencije</h3>
              <p className="text-muted-foreground leading-relaxed">
                Marketing, web development i digitalne agencije koje žele proširiti svoj portfolio sa AI rješenjima.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reselleri</h3>
              <p className="text-muted-foreground leading-relaxed">
                Kompanije koje prodaju software i tehnološka rješenja i žele dodati AI chatbote u svoju ponudu.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Konsultanti</h3>
              <p className="text-muted-foreground leading-relaxed">
                Poslovni konsultanti i freelanceri koji žele ponuditi svojim klijentima najnovija AI rješenja.
              </p>
            </div>
          </div>
        </section>

        {/* Partner Form Section */}
        <section id="partner-form" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-card via-card to-card/50 border-2 border-primary/20 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Prijavite se za partnerstvo</h2>
              <p className="text-muted-foreground text-lg text-pretty">
                Popunite formu ispod i kontaktirat ćemo vas u najkraćem roku
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName">
                    Naziv kompanije <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    placeholder="Vaša kompanija d.o.o."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactPerson">
                    Kontakt osoba <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    placeholder="Ime i prezime"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="email@kompanija.ba"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Telefon <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+387 XX XXX XXX"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://vasa-kompanija.ba"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="partnerType">
                  Tip partnera <span className="text-destructive">*</span>
                </Label>
                <select
                  id="partnerType"
                  name="partnerType"
                  value={formData.partnerType}
                  onChange={handleChange}
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Izaberite tip partnera</option>
                  <option value="agency">Marketing/Web Agencija</option>
                  <option value="reseller">Reseller</option>
                  <option value="consultant">Konsultant/Freelancer</option>
                  <option value="other">Ostalo</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Poruka <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Recite nam nešto o vašoj kompaniji i zašto želite postati naš partner..."
                  rows={5}
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                    Šaljem...
                  </>
                ) : (
                  <>
                    <Rocket className="mr-2 h-5 w-5" />
                    Pošaljite prijavu
                  </>
                )}
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
