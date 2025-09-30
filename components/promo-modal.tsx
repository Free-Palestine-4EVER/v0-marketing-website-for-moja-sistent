"use client"

import { useEffect, useState } from "react"
import { X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function PromoModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    console.log("[v0] PromoModal mounted")

    // Check if user has already seen the modal
    const hasSeenPromo = localStorage.getItem("hasSeenPromo")
    console.log("[v0] hasSeenPromo:", hasSeenPromo)

    if (!hasSeenPromo) {
      console.log("[v0] Setting 5 second timer for modal")
      // Show modal after 5 seconds
      const timer = setTimeout(() => {
        console.log("[v0] Opening modal now")
        setIsOpen(true)
      }, 5000)

      return () => clearTimeout(timer)
    } else {
      console.log("[v0] Modal already seen, not showing")
    }
  }, [])

  const handleClose = () => {
    console.log("[v0] Closing modal")
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 pointer-events-none">
        <Card className="relative w-full max-w-lg pointer-events-auto animate-in zoom-in-95 duration-300">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="px-4 py-5 sm:px-6 sm:py-6">
            {/* Badge */}
            <div className="flex justify-center mb-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-medium">
                <Sparkles className="h-3 w-3" />
                Specijalna ponuda
              </div>
            </div>

            {/* Hero Image - Fixed image URL to use local public folder path */}
            <div className="mb-4 rounded-lg overflow-hidden max-w-xs mx-auto">
              <Image
                src="/images/promo-team.jpeg"
                alt="MojAsistent.ba Team"
                width={400}
                height={300}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Content */}
            <div className="text-center space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-balance">
                <span className="text-gradient">50% Popust na Prvih 3 Mjeseca!</span>
              </h2>

              <p className="text-sm text-muted-foreground text-pretty">
                Započnite svoju AI automatizaciju sa nevjerovatnom uštedom. Ograničena ponuda!
              </p>

              {/* Price comparison */}
              <div className="flex items-center justify-center gap-4 py-3">
                <div className="text-center">
                  <div className="text-xs text-muted-foreground mb-1">Redovna cijena</div>
                  <div className="text-lg sm:text-xl font-bold text-muted-foreground line-through">200 BAM</div>
                </div>

                <div className="text-xl font-bold text-primary">→</div>

                <div className="text-center">
                  <div className="text-xs text-primary font-medium mb-1">Promo cijena</div>
                  <div className="text-2xl sm:text-3xl font-bold text-gradient">100 BAM</div>
                  <div className="text-xs text-muted-foreground">mjesečno, prvih 3 mjeseca</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 justify-center pt-2">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  onClick={() => {
                    handleClose()
                    window.location.href = "/kontakt"
                  }}
                >
                  Iskoristi ponudu
                </Button>

                <Button size="sm" variant="outline" onClick={handleClose}>
                  Možda kasnije
                </Button>
              </div>

              <p className="text-xs text-muted-foreground pt-2">
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
