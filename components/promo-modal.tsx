"use client"

import { useEffect, useState } from "react"
import { X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function PromoModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user has already seen the modal
    const hasSeenPromo = localStorage.getItem("hasSeenPromo")

    if (!hasSeenPromo) {
      // Show modal after 5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem("hasSeenPromo", "true")
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <Card className="relative w-full max-w-2xl pointer-events-auto animate-in zoom-in-95 duration-300 overflow-hidden border-2 border-primary/20 shadow-2xl">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10" />

          <div className="relative p-8 sm:p-12">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium shadow-lg">
                <Sparkles className="h-4 w-4" />
                Specijalna ponuda
              </div>
            </div>

            {/* Hero Image */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0eb12d11-f6f3-4c85-bf53-fba17b1de8ef.png-0kWbIAgAOJhgOjBVvxi3lCYhOCN1bC.jpeg"
                alt="MojAsistent.ba Team"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Content */}
            <div className="text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-balance">
                <span className="text-gradient">50% Popust na Prvih 3 Mjeseca!</span>
              </h2>

              <p className="text-lg text-muted-foreground text-pretty max-w-xl mx-auto">
                Započnite svoju AI automatizaciju sa nevjerovatnom uštedom. Ograničena ponuda!
              </p>

              {/* Price comparison */}
              <div className="flex items-center justify-center gap-8 py-6">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">Redovna cijena</div>
                  <div className="text-3xl font-bold text-muted-foreground line-through">200 BAM</div>
                </div>

                <div className="text-4xl font-bold text-primary">→</div>

                <div className="text-center">
                  <div className="text-sm text-primary font-medium mb-2">Promo cijena</div>
                  <div className="text-5xl font-bold text-gradient">100 BAM</div>
                  <div className="text-sm text-muted-foreground mt-1">mjesečno, prvih 3 mjeseca</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg"
                  onClick={() => {
                    handleClose()
                    window.location.href = "/kontakt"
                  }}
                >
                  Iskoristi ponudu
                </Button>

                <Button size="lg" variant="outline" onClick={handleClose}>
                  Možda kasnije
                </Button>
              </div>

              <p className="text-xs text-muted-foreground pt-4">
                * Ponuda važi za novi ugovor o iznajmljivanju chatbota. Nakon 3 mjeseca, cijena se vraća na redovnih 200
                BAM mjesečno.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}
