import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StatementBlock } from "@/components/statement-block"
import { ChatbotGallery } from "@/components/chatbot-gallery"
import { UseCasesSection } from "@/components/use-cases-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { IntegrationsSection } from "@/components/integrations-section"
import { MultipleWorkspacesSection } from "@/components/multiple-workspaces-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatementBlock />
      <ChatbotGallery />
      <PricingSection />
      <UseCasesSection />
      <HowItWorksSection />
      <IntegrationsSection />
      <MultipleWorkspacesSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
