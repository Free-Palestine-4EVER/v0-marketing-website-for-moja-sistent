"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles, MessageCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-background/80 backdrop-blur-md border-b border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 hover:scale-105 transition-transform">
            <Image src="/images/logo.png" alt="MojAsistent.ba Logo" width={48} height={48} className="w-12 h-12" />
            <span className="text-xl font-bold text-gradient">MojAsistent.ba</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors relative group">
              Početna
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/chatboti" className="text-foreground hover:text-primary transition-colors relative group">
              Chatboti
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/super-botovi" className="relative group">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent font-semibold hover:from-purple-300 hover:via-pink-300 hover:to-cyan-300 transition-all duration-300">
                Super Botovi
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all group-hover:w-full"></span>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </Link>
            <Link href="/cijene" className="text-foreground hover:text-primary transition-colors relative group">
              Cijene
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/primjeri" className="text-foreground hover:text-primary transition-colors relative group">
              Primjeri
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/faq" className="text-foreground hover:text-primary transition-colors relative group">
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/kontakt" className="text-foreground hover:text-primary transition-colors relative group">
              Kontakt
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground btn-primary hover:scale-105 transition-transform"
              onClick={() => {
                router.push("/kontakt")
              }}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Kontaktiraj nas
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-in slide-in-from-top-2 duration-300">
            <div className="relative px-2 pt-4 pb-6 mt-2 bg-gradient-to-br from-background via-background/95 to-background/90 backdrop-blur-xl rounded-2xl border border-border/50 shadow-2xl overflow-hidden">
              {/* Futuristic background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

              <div className="relative space-y-2">
                <Link
                  href="/"
                  className="block px-4 py-3 text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent rounded-xl transition-all duration-300 transform hover:translate-x-1"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-6 bg-gradient-to-b from-primary/50 to-transparent rounded-full"></div>
                    Početna
                  </div>
                </Link>

                <Link
                  href="/chatboti"
                  className="block px-4 py-3 text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent rounded-xl transition-all duration-300 transform hover:translate-x-1"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-6 bg-gradient-to-b from-primary/50 to-transparent rounded-full"></div>
                    Chatboti
                  </div>
                </Link>

                {/* Super Botovi with special mobile styling */}
                <Link
                  href="/super-botovi"
                  className="block px-4 py-3 rounded-xl transition-all duration-300 transform hover:translate-x-1 relative overflow-hidden group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-3">
                    <div className="w-1 h-6 bg-gradient-to-b from-purple-400 via-pink-400 to-cyan-400 rounded-full"></div>
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                      Super Botovi
                    </span>
                    <div className="ml-auto">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                    </div>
                  </div>
                </Link>

                <Link
                  href="/cijene"
                  className="block px-4 py-3 text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent rounded-xl transition-all duration-300 transform hover:translate-x-1"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-6 bg-gradient-to-b from-primary/50 to-transparent rounded-full"></div>
                    Cijene
                  </div>
                </Link>

                <Link
                  href="/primjeri"
                  className="block px-4 py-3 text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent rounded-xl transition-all duration-300 transform hover:translate-x-1"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-6 bg-gradient-to-b from-primary/50 to-transparent rounded-full"></div>
                    Primjeri
                  </div>
                </Link>

                <Link
                  href="/faq"
                  className="block px-4 py-3 text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent rounded-xl transition-all duration-300 transform hover:translate-x-1"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-6 bg-gradient-to-b from-primary/50 to-transparent rounded-full"></div>
                    FAQ
                  </div>
                </Link>

                <Link
                  href="/kontakt"
                  className="block px-4 py-3 text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent rounded-xl transition-all duration-300 transform hover:translate-x-1"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-6 bg-gradient-to-b from-primary/50 to-transparent rounded-full"></div>
                    Kontakt
                  </div>
                </Link>

                <div className="px-4 py-4 mt-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4"></div>
                  <Button
                    className="w-full bg-gradient-to-r from-primary via-primary to-primary/80 hover:from-primary/90 hover:via-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-[1.02]"
                    onClick={() => {
                      router.push("/kontakt")
                      setIsOpen(false)
                    }}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Kontaktiraj nas
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
