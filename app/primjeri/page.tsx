import { Navigation } from "@/components/navigation"
import { TestimonialsSection } from "@/components/testimonials-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ExamplesPage() {
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
              <span className="text-gradient">Primjeri korištenja</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Pogledajte kako naši klijenti koriste AI chatbote za automatizaciju komunikacije i povećanje efikasnosti
              svojih biznisa.
            </p>
          </div>
        </div>
      </section>

      <UseCasesSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
