"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, MessageCircle, Plus } from "lucide-react"
import { useRouter } from "next/navigation"

const pricingPlans = [
  {
    name: "Pojedinačni bot",
    price: "200",
    currency: "BAM",
    period: "mjesečno",
    description: "Idealno za manje biznise koji trebaju automatizaciju jedne platforme",
    features: [
      "1 AI chatbot po izboru",
      "Neograničeni razgovori",
      "Inicijalno podešavanje uključeno",
      "Osnovna obuka za korištenje",
      "Email podrška",
      "Mjesečni izvještaji",
    ],
    popular: false,
    cta: "Kontaktiraj nas",
  },
  {
    name: "Paket 5 botova",
    price: "750",
    currency: "BAM",
    period: "mjesečno",
    description: "Najbolja vrijednost za biznise koji žele potpunu automatizaciju",
    features: [
      "5 AI chatbotova (svi tipovi)",
      "Neograničeni razgovori",
      "Prioritetno podešavanje",
      "Detaljno obučavanje tima",
      "Prioritetna podrška",
      "Detaljni izvještaji i analitika",
      "Prilagođene integracije",
      "Mjesečne optimizacije",
    ],
    popular: true,
    cta: "Kontaktiraj nas",
    savings: "Ušteda od 250 BAM mjesečno!",
  },
  {
    name: "Assistant Army",
    price: "2000",
    currency: "BAM",
    period: "mjesečno",
    description: "Kompletno AI rješenje sa premium asistentima za maksimalnu automatizaciju",
    features: [
      "5 standardnih AI chatbotova",
      "Instagram Post Bot (750 BAM vrijednost)",
      "Voice Assistant za pozive (500 BAM vrijednost)",
      "24/7 premium podrška",
      "Prioritetno podešavanje i obuka",
      "Napredni izvještaji i analitika",
      "Mjesečne optimizacije",
      "Prilagođene integracije",
      "Dedicirani account manager",
    ],
    popular: false,
    cta: "Kontaktiraj nas",
    savings: "Ušteda od 550+ BAM mjesečno!",
    premium: true,
  },
]

const premiumAddOns = [
  {
    name: "Instagram Post Bot",
    price: "750",
    currency: "BAM",
    period: "mjesečno",
    description: "Automatski kreira i objavljuje Instagram postove koristeći AI",
    features: [
      "Automatsko kreiranje postova",
      "AI generisani sadržaj i slike",
      "Zakazivanje objava",
      "Analitika performansi",
      "Prilagođen brand voice",
    ],
  },
  {
    name: "Voice Call Bot",
    price: "500",
    currency: "BAM",
    period: "mjesečno",
    description: "AI asistent koji obavlja i prima telefonske pozive",
    features: [
      "Prirodan glasovni razgovor",
      "Zakazivanje termina",
      "Odgovaranje na upite",
      "Pozivni izvještaji",
      "Integracija sa CRM-om",
    ],
  },
]

export function PricingSection() {
  const router = useRouter()

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-6">
            <span className="text-gradient">Jednostavan i jasan cjenovnik</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Transparentne cijene bez skrivenih troškova. Sve što trebate za uspješnu automatizaciju vašeg biznisa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative card-hover border-2 ${
                plan.popular
                  ? "border-primary bg-primary/5 scale-105"
                  : plan.premium
                    ? "border-gradient bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20"
                    : "border-border/50 hover:border-primary/50 bg-card/50"
              } backdrop-blur-sm overflow-visible`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                    <Star className="h-4 w-4 fill-current" />
                    Najbolja vrijednost
                  </div>
                </div>
              )}

              {plan.premium && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                    <Star className="h-4 w-4 fill-current" />
                    Premium
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                  <span className="text-xl text-muted-foreground ml-2">
                    {plan.currency} / {plan.period}
                  </span>
                </div>
                <p className="text-muted-foreground text-pretty">{plan.description}</p>
                {plan.savings && (
                  <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium mt-2">
                    {plan.savings}
                  </div>
                )}
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full mt-8 ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : plan.premium
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                        : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                  }`}
                  size="lg"
                  onClick={() => {
                    router.push("/kontakt")
                  }}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
              <span className="text-gradient">Premium Dodaci</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Nadogradite bilo koji plan sa našim naprednim AI asistentima
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {premiumAddOns.map((addon, index) => (
              <Card
                key={index}
                className="relative card-hover border-2 border-gradient bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 backdrop-blur-sm"
              >
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Plus className="h-3 w-3" />
                    Dodatak
                  </div>
                </div>

                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold mb-2">{addon.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gradient">{addon.price}</span>
                    <span className="text-lg text-muted-foreground ml-2">
                      {addon.currency} / {addon.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-pretty">{addon.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {addon.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                    size="lg"
                    onClick={() => {
                      router.push("/kontakt")
                    }}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Kontaktiraj nas
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            <strong>Uključeno u sve opcije:</strong> Inicijalno podešavanje i osnovna obuka
          </p>
          <p className="text-sm text-muted-foreground">
            Trebate prilagođeno rješenje? <span className="text-primary font-medium">Kontaktirajte nas</span> za
            personalizovanu ponudu.
          </p>
        </div>
      </div>
    </section>
  )
}
