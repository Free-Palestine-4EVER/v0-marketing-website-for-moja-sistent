"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Mail, MessageCircle, Sparkles, CheckCircle2, Calculator, Tag, Check } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner"

const botTypes = [
  {
    id: "whatsapp",
    name: "WhatsApp Bot",
    price: 100,
    originalPrice: 200,
    description: "Automatski odgovori na WhatsApp poruke",
  },
  {
    id: "instagram",
    name: "Instagram Bot",
    price: 100,
    originalPrice: 200,
    description: "Upravljanje Instagram DM-ovima i komentarima",
  },
  {
    id: "facebook",
    name: "Facebook Bot",
    price: 100,
    originalPrice: 200,
    description: "Automatizacija Facebook Messenger-a",
  },
  { id: "web", name: "Web Chat Bot", price: 100, originalPrice: 200, description: "Live chat za vašu web stranicu" },
  { id: "email", name: "Email Bot", price: 100, originalPrice: 200, description: "Automatsko odgovaranje na emailove" },
  {
    id: "instagram-post",
    name: "Instagram Post Bot",
    price: 500,
    originalPrice: 500,
    description: "Automatsko kreiranje i objavljivanje postova",
    premium: true,
  },
  {
    id: "voice",
    name: "Voice Call Bot",
    price: 750,
    originalPrice: 750,
    description: "AI asistent za telefonske pozive",
    premium: true,
  },
]

const packages = [
  { id: "single", name: "Pojedinačni bot", bots: 1, price: 100, originalPrice: 200, discount: 0, promo: true },
  { id: "five", name: "Paket 5 botova", bots: 5, price: 350, originalPrice: 750, discount: 400, promo: true },
  { id: "army", name: "Assistant Army", bots: 7, price: 2000, originalPrice: 2000, discount: 550, promo: false },
]

export default function ContactPage() {
  const [selectedBots, setSelectedBots] = useState<string[]>([])
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  })

  const calculateTotal = () => {
    if (selectedPackage) {
      const pkg = packages.find((p) => p.id === selectedPackage)
      return pkg ? pkg.price : 0
    }

    return selectedBots.reduce((total, botId) => {
      const bot = botTypes.find((b) => b.id === botId)
      return total + (bot?.price || 0)
    }, 0)
  }

  const totalPrice = calculateTotal()
  const selectedBotsCount = selectedBots.length

  const toggleBot = (botId: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectedBots((prev) => (prev.includes(botId) ? prev.filter((id) => id !== botId) : [...prev, botId]))
  }

  const selectPackage = (packageId: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectedPackage((prev) => (prev === packageId ? null : packageId))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    console.log("[v0] Form submission started")

    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.business) {
      console.log("[v0] Validation failed: missing required fields")
      toast.error("Molimo popunite sva obavezna polja")
      return
    }

    if (!selectedPackage && selectedBots.length === 0) {
      console.log("[v0] Validation failed: no bots or package selected")
      toast.error("Molimo odaberite najmanje jedan bot ili paket")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      console.log("[v0] Validation failed: invalid email")
      toast.error("Molimo unesite validnu email adresu")
      return
    }

    setIsSubmitting(true)
    console.log("[v0] Sending request to API...")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          selectedBots,
          selectedPackage,
          totalPrice,
        }),
      })

      console.log("[v0] API response status:", response.status)

      const data = await response.json()
      console.log("[v0] API response data:", data)

      if (!response.ok) {
        throw new Error(data.error || "Failed to send request")
      }

      toast.success("Uspješno poslato! Provjerite vaš email.")
      console.log("[v0] Form submitted successfully")

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        business: "",
        message: "",
      })
      setSelectedBots([])
      setSelectedPackage(null)
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      toast.error("Došlo je do greške. Molimo pokušajte ponovo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 overflow-x-hidden w-full">
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Nazad na početnu
              </Link>
            </Button>
          </div>

          {/* Promotional Banner - Reduced padding and sizes */}
          <div className="mb-6 max-w-4xl mx-auto">
            <Card className="border-2 border-primary bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Tag className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gradient mb-1">
                      🎉 Specijalna ponuda - 50% popusta!
                    </h3>
                    <p className="text-sm sm:text-base text-foreground mb-0.5">
                      <span className="font-bold">Prvih 3 mjeseca</span> svi chatbotovi samo{" "}
                      <span className="text-primary font-bold">100 BAM</span> umjesto{" "}
                      <span className="line-through text-muted-foreground">200 BAM</span>
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Paket 5 botova: <span className="font-semibold text-primary">350 BAM</span> umjesto{" "}
                      <span className="line-through">750 BAM</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1.5 mb-3">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Konfigurirajte vaše AI rješenje</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-balance mb-4">
              <span className="text-gradient">Rezervišite vaše botove</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Odaberite botove koje trebate i vidite cijenu u realnom vremenu. Bez skrivenih troškova.
            </p>
          </div>
        </div>
      </section>

      {/* Main Booking Form */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Left Column - Bot Selection */}
              <div className="lg:col-span-2 space-y-6">
                {/* Step 1: Package Selection - Reduced padding and spacing */}
                <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm shadow-xl">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                        1
                      </div>
                      <CardTitle className="text-xl">Odaberite paket ili pojedinačne botove</CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Izaberite gotov paket ili kreirajte prilagođeno rješenje
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {/* Package Options - Reduced padding */}
                    <div className="grid md:grid-cols-3 gap-3 mb-4">
                      {packages.map((pkg) => (
                        <Card
                          key={pkg.id}
                          className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                            selectedPackage === pkg.id
                              ? "border-2 border-primary bg-primary/5 shadow-lg"
                              : "border-2 border-border/50 hover:border-primary/50"
                          }`}
                          onClick={(e) => selectPackage(pkg.id, e)}
                        >
                          <CardContent className="p-3 text-center">
                            {pkg.promo && (
                              <div className="mb-1.5">
                                <span className="inline-block bg-primary/20 text-primary px-2 py-0.5 rounded-full text-xs font-bold">
                                  50% POPUST
                                </span>
                              </div>
                            )}
                            <h3 className="font-bold text-base mb-1.5">{pkg.name}</h3>
                            {pkg.promo ? (
                              <>
                                <div className="text-2xl font-bold text-primary mb-0.5">{pkg.price} BAM</div>
                                <div className="text-xs line-through text-muted-foreground mb-0.5">
                                  {pkg.originalPrice} BAM
                                </div>
                                <p className="text-xs text-primary font-semibold mb-1.5">Prvih 3 mjeseca</p>
                              </>
                            ) : (
                              <>
                                <div className="text-2xl font-bold text-primary mb-0.5">{pkg.price} BAM</div>
                                <p className="text-xs text-muted-foreground mb-1.5">mjesečno</p>
                              </>
                            )}
                            <p className="text-xs text-muted-foreground">{pkg.bots} botova</p>
                            {pkg.discount > 0 && pkg.promo && (
                              <div className="mt-1.5 inline-block bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full text-xs font-medium">
                                Ušteda {pkg.discount} BAM
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-border" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">ili odaberite pojedinačno</span>
                      </div>
                    </div>

                    {/* Individual Bot Selection - Removed disabled states */}
                    <div className="space-y-2">
                      <h3 className="font-semibold text-base mb-2 flex items-center gap-2">
                        Standardni botovi
                        <span className="text-xs font-normal text-muted-foreground">
                          (<span className="text-primary font-bold">100 BAM</span>{" "}
                          <span className="line-through">200 BAM</span> - Prvih 3 mjeseca)
                        </span>
                      </h3>
                      <div className="grid md:grid-cols-2 gap-2">
                        {botTypes
                          .filter((bot) => !bot.premium)
                          .map((bot) => (
                            <Card
                              key={bot.id}
                              className={`cursor-pointer transition-all duration-300 ${
                                selectedBots.includes(bot.id)
                                  ? "border-2 border-primary bg-primary/5"
                                  : "border-2 border-border/50 hover:border-primary/30"
                              }`}
                              onClick={(e) => toggleBot(bot.id, e)}
                            >
                              <CardContent className="p-3">
                                <div className="flex items-start gap-2">
                                  <div
                                    className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                                      selectedBots.includes(bot.id)
                                        ? "bg-primary border-primary"
                                        : "border-muted-foreground/30"
                                    }`}
                                  >
                                    {selectedBots.includes(bot.id) && (
                                      <Check className="h-3.5 w-3.5 text-primary-foreground" />
                                    )}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                      <h4 className="font-semibold text-sm">{bot.name}</h4>
                                      <span className="text-xs bg-primary/20 text-primary px-1 py-0.5 rounded-full font-bold">
                                        -50%
                                      </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mb-1">{bot.description}</p>
                                    <div className="flex items-center gap-1.5">
                                      <div className="text-xs font-bold text-primary">{bot.price} BAM/mj</div>
                                      <div className="text-xs line-through text-muted-foreground">
                                        {bot.originalPrice} BAM
                                      </div>
                                    </div>
                                    <p className="text-xs text-primary font-semibold mt-0.5">Prvih 3 mjeseca</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                      </div>

                      <h3 className="font-semibold text-base mb-2 mt-4 flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        Premium botovi
                      </h3>
                      <div className="grid md:grid-cols-2 gap-2">
                        {botTypes
                          .filter((bot) => bot.premium)
                          .map((bot) => (
                            <Card
                              key={bot.id}
                              className={`cursor-pointer transition-all duration-300 border-2 ${
                                selectedBots.includes(bot.id)
                                  ? "border-primary bg-gradient-to-br from-primary/10 to-primary/5"
                                  : "border-primary/30 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/50"
                              }`}
                              onClick={(e) => toggleBot(bot.id, e)}
                            >
                              <CardContent className="p-3">
                                <div className="flex items-start gap-2">
                                  <div
                                    className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                                      selectedBots.includes(bot.id) ? "bg-primary border-primary" : "border-primary/30"
                                    }`}
                                  >
                                    {selectedBots.includes(bot.id) && (
                                      <Check className="h-3.5 w-3.5 text-primary-foreground" />
                                    )}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                      <h4 className="font-semibold text-sm">{bot.name}</h4>
                                      <span className="text-xs bg-primary/20 text-primary px-1.5 py-0.5 rounded-full font-medium">
                                        PREMIUM
                                      </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mb-1">{bot.description}</p>
                                    <div className="text-xs font-bold text-primary">{bot.price} BAM/mj</div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Step 2: Contact Information - Reduced padding and spacing */}
                <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm shadow-xl">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                        2
                      </div>
                      <CardTitle className="text-xl">Vaše informacije</CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground">Unesite podatke kako bismo vas kontaktirali</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div>
                          <Label htmlFor="firstName" className="text-sm">
                            Ime *
                          </Label>
                          <Input
                            id="firstName"
                            placeholder="Vaše ime"
                            className="mt-1 h-9"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-sm">
                            Prezime *
                          </Label>
                          <Input
                            id="lastName"
                            placeholder="Vaše prezime"
                            className="mt-1 h-9"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-sm">
                          Email adresa *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="vas@email.com"
                          className="mt-1 h-9"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-sm">
                          Broj telefona *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+387 XX XXX XXX"
                          className="mt-1 h-9"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="business" className="text-sm">
                          Tip biznisa *
                        </Label>
                        <Input
                          id="business"
                          placeholder="Restoran, hotel, ordinacija..."
                          className="mt-1 h-9"
                          value={formData.business}
                          onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-sm">
                          Dodatne napomene
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Opišite specifične potrebe vašeg biznisa..."
                          className="mt-1 min-h-[80px] text-sm"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Price Calculator (Sticky) - Reduced padding */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 via-card to-card backdrop-blur-sm shadow-2xl">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Calculator className="h-5 w-5 text-primary" />
                        <CardTitle className="text-xl">Kalkulator cijene</CardTitle>
                      </div>
                      <p className="text-xs text-primary font-semibold">🎉 Prvih 3 mjeseca - 50% popust!</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Selected Items */}
                      <div className="space-y-2">
                        <h3 className="font-semibold text-xs text-muted-foreground uppercase tracking-wide">
                          Odabrano:
                        </h3>

                        {selectedPackage ? (
                          <div className="space-y-2">
                            {packages
                              .filter((p) => p.id === selectedPackage)
                              .map((pkg) => (
                                <div
                                  key={pkg.id}
                                  className="flex items-center justify-between p-2.5 bg-primary/10 rounded-lg border border-primary/20"
                                >
                                  <div className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                                    <div>
                                      <div className="font-semibold text-sm">{pkg.name}</div>
                                      <div className="text-xs text-muted-foreground">{pkg.bots} botova uključeno</div>
                                      {pkg.promo && (
                                        <div className="text-xs text-primary font-semibold mt-0.5">Prvih 3 mj.</div>
                                      )}
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <div className="font-bold text-primary text-sm">{pkg.price} BAM</div>
                                    {pkg.promo && (
                                      <div className="text-xs line-through text-muted-foreground">
                                        {pkg.originalPrice} BAM
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                          </div>
                        ) : selectedBots.length > 0 ? (
                          <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                            {selectedBots.map((botId) => {
                              const bot = botTypes.find((b) => b.id === botId)
                              if (!bot) return null
                              return (
                                <div
                                  key={botId}
                                  className="flex items-center justify-between p-2 bg-muted/50 rounded-lg border border-border"
                                >
                                  <div className="flex items-center gap-1.5">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                                    <div>
                                      <div className="font-medium text-xs">{bot.name}</div>
                                      {bot.premium ? (
                                        <span className="text-xs bg-primary/20 text-primary px-1 py-0.5 rounded-full font-medium">
                                          PREMIUM
                                        </span>
                                      ) : (
                                        <span className="text-xs text-primary font-semibold">Prvih 3 mj.</span>
                                      )}
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <div className="font-semibold text-xs">{bot.price} BAM</div>
                                    {!bot.premium && (
                                      <div className="text-xs line-through text-muted-foreground">
                                        {bot.originalPrice} BAM
                                      </div>
                                    )}
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        ) : (
                          <div className="text-center py-6 text-muted-foreground">
                            <Calculator className="h-10 w-10 mx-auto mb-2 opacity-50" />
                            <p className="text-xs">Odaberite botove ili paket</p>
                          </div>
                        )}
                      </div>

                      {/* Total Price */}
                      {(selectedPackage || selectedBots.length > 0) && (
                        <>
                          <div className="border-t border-border pt-3">
                            <div className="flex items-center justify-between mb-1.5 text-sm">
                              <span className="text-muted-foreground">Broj botova:</span>
                              <span className="font-semibold">
                                {selectedPackage
                                  ? packages.find((p) => p.id === selectedPackage)?.bots
                                  : selectedBotsCount}
                              </span>
                            </div>

                            {selectedPackage && packages.find((p) => p.id === selectedPackage)?.discount! > 0 && (
                              <div className="flex items-center justify-between mb-1.5 text-sm">
                                <span className="text-green-600 dark:text-green-400">Ušteda:</span>
                                <span className="font-semibold text-green-600 dark:text-green-400">
                                  {packages.find((p) => p.id === selectedPackage)?.discount} BAM
                                </span>
                              </div>
                            )}
                          </div>

                          <div className="bg-primary/10 rounded-xl p-4 border-2 border-primary/30">
                            <div className="text-center">
                              <div className="text-xs text-muted-foreground mb-1">Cijena prvih 3 mjeseca</div>
                              <div className="text-4xl font-bold text-gradient mb-1">
                                {totalPrice}
                                <span className="text-xl ml-1">BAM</span>
                              </div>
                              <div className="text-xs text-primary font-semibold">50% popust!</div>
                            </div>
                          </div>

                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base py-5 shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            <MessageCircle className="mr-2 h-4 w-4" />
                            {isSubmitting ? "Šalje se..." : "Pošaljite zahtjev"}
                          </Button>

                          <p className="text-xs text-center text-muted-foreground">
                            Kontaktiraćemo vas u roku od 24h sa detaljnom ponudom
                          </p>
                        </>
                      )}
                    </CardContent>
                  </Card>

                  {/* Contact Info Cards - Reduced padding */}
                  <div className="mt-4 space-y-3">
                    <Card className="p-3 bg-card/50 backdrop-blur-sm border-2 border-border/50">
                      <a
                        href="https://wa.me/15202389320"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
                      >
                        <div className="p-1.5 rounded-lg bg-green-600/10 text-green-600">
                          <MessageCircle className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-xs">WhatsApp</h3>
                          <p className="text-xs text-muted-foreground">+1 (520) 238-9320</p>
                        </div>
                      </a>
                    </Card>

                    <Card className="p-3 bg-card/50 backdrop-blur-sm border-2 border-border/50">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                          <Mail className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-xs">Email</h3>
                          <p className="text-xs text-muted-foreground">info@mojasistent.ba</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
