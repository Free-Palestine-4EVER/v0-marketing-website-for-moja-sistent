"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Kako se bot integriše sa mojim postojećim sistemima?",
    answer:
      "Integracija je vrlo jednostavna. Za društvene mreže povezujemo bot preko sigurnih API-ja, za email koristimo postojeće email adrese, a za web stranicu dodajemo jednostavan kod. Cijeli proces traje 1-3 dana ovisno o složenosti.",
  },
  {
    question: "Ko pravi i održava botove?",
    answer:
      "Ja lično kreiram sve botove prema vašim specifičnim potrebama. Svaki bot je prilagođen vašem poslovanju, tonu komunikacije i najčešćim upitima. Također pružam kontinuiranu podršku i optimizaciju.",
  },
  {
    question: "Mogu li prilagoditi ton i jezik bota?",
    answer:
      "Apsolutno! Bot može komunicirati formalno ili neformalno, koristiti specifične termine iz vaše branše, i prilagoditi se vašem stilu komunikacije. Možete definirati kako želite da bot predstavlja vaš biznis.",
  },
  {
    question: "Koliko brzo sve proradi?",
    answer:
      "Nakon početnog razgovora, bot je spreman za rad za 3-7 dana. Jednostavniji botovi (FAQ odgovori) mogu biti gotovi za 2-3 dana, dok složeniji sistemi sa rezervacijama trebaju 5-7 dana za potpuno podešavanje.",
  },
  {
    question: "Mogu li kasnije preći na paket od 5 botova?",
    answer:
      "Naravno! Možete početi sa jednim botom i kasnije dodati ostale. Kada pređete na paket od 5 botova, dobijate značajnu uštedu i dodatne funkcionalnosti poput detaljne analitike i prioritetne podrške.",
  },
  {
    question: "Šta ako bot ne zna odgovor na pitanje?",
    answer:
      "Bot je programiran da prepozna kada ne može odgovoriti na upit. U takvim slučajevima će ljubazno reći da će proslijediti pitanje vama i poslati vam notifikaciju sa detaljima upita kako biste mogli odgovoriti lično.",
  },
  {
    question: "Da li mogu vidjeti statistike razgovora?",
    answer:
      "Da! Dobijate mjesečne izvještaje sa statistikama: broj razgovora, najčešća pitanja, vrijeme odgovora, i uspješnost rješavanja upita. Paket od 5 botova uključuje detaljnu analitiku u realnom vremenu.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-6">
            <span className="text-gradient">Često postavljana pitanja</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Odgovori na najčešća pitanja o našim AI chatbotovima i uslugama.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="border-2 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm transition-all duration-200"
            >
              <CardHeader
                className="cursor-pointer"
                onClick={() => toggleFAQ(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    toggleFAQ(index)
                  }
                }}
              >
                <CardTitle className="flex items-center justify-between text-lg">
                  <span className="text-pretty">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </CardTitle>
              </CardHeader>
              {openIndex === index && (
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-pretty">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Imate dodatna pitanja?{" "}
            <span className="text-primary font-medium cursor-pointer hover:underline">Kontaktirajte nas</span> - rado
            ćemo odgovoriti!
          </p>
        </div>
      </div>
    </section>
  )
}
