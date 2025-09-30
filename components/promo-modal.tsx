"use client"

import { useEffect, useState } from "react"
import { X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function PromoModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const storageKey = "promoModal_jan2025"
    const hasSeenPromo = localStorage.getItem(storageKey)

    console.log("[v0] PromoModal mounted")
    console.log("[v0] hasSeenPromo:", hasSeenPromo)

    if (!hasSeenPromo) {
      // Show modal after 5 seconds
      const timer = setTimeout(() => {
        console.log("[v0] Showing modal after 5 seconds")
        setIsOpen(true)
      }, 5000)

      return () => clearTimeout(timer)
    } else {
      console.log("[v0] Modal already seen, not showing")
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem("promoModal_jan2025", "true")
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Modal - Made much smaller to fit all content without scrolling */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <Card className="relative w-full max-w-md pointer-events-auto animate-in zoom-in-95 duration-300">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 z-10 p-1 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="px-4 py-4 sm:px-5 sm:py-5">
            {/* Badge */}
            <div className="flex justify-center mb-2">
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-medium">
                <Sparkles className="h-3 w-3" />
                Specijalna ponuda
              </div>
            </div>

            {/* Hero Image - Made even smaller */}
            <div className="mb-3 rounded-lg overflow-hidden max-w-[200px] mx-auto">
              <Image
                src="/images/promo-team.jpeg"
                alt="MojAsistent.ba Team"
                width={200}
                height={150}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Content - Reduced all spacing and text sizes */}
            <div className="text-center space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-balance">
                <span className="text-gradient">50% Popust na Prvih 3 Mjeseca!</span>
              </h2>

              <p className="text-xs text-muted-foreground text-pretty">
                Započnite svoju AI automatizaciju sa nevjerovatnom uštedom. Ograničena ponuda!
              </p>

              {/* Price comparison - Made more compact */}
              <div className="flex items-center justify-center gap-3 py-2">
                <div className="text-center">
                  <div className="text-xs text-muted-foreground mb-0.5">Redovna</div>
                  <div className="text-base font-bold text-muted-foreground line-through">200 BAM</div>
                </div>

                <div className="text-lg font-bold text-primary">→</div>

                <div className="text-center">
                  <div className="text-xs text-primary font-medium mb-0.5">Promo</div>
                  <div className="text-xl sm:text-2xl font-bold text-gradient">100 BAM</div>
                  <div className="text-xs text-muted-foreground">prvih 3 mj.</div>
                </div>
              </div>

              {/* CTA Buttons - Made smaller */}
              <div className="flex flex-col sm:flex-row gap-2 justify-center pt-1">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white h-8 text-xs"
                  onClick={() => {
                    handleClose()
                    window.location.href = "/kontakt"
                  }}
                >
                  Iskoristi ponudu
                </Button>

                <Button size="sm" variant="outline" onClick={handleClose} className="h-8 text-xs bg-transparent">
                  Možda kasnije
                </Button>
              </div>

              <p className="text-xs text-muted-foreground pt-1">
                * Ponuda važi za novi ugovor. Nakon 3 mjeseca, cijena se vraća na 200 BAM mjesečno.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}
