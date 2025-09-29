import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-gradient mb-4 block">
              MojAsistent.ba
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              AI zaposlenici koji nikad ne spavaju. Automatizujte komunikaciju sa klijentima i fokusirajte se na rast
              vašeg biznisa.
            </p>
            <div className="flex gap-2">
              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                <a href="https://wa.me/15202389320" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Brze veze</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Početna
                </Link>
              </li>
              <li>
                <Link href="/chatboti" className="text-muted-foreground hover:text-primary transition-colors">
                  Chatboti
                </Link>
              </li>
              <li>
                <Link href="/cijene" className="text-muted-foreground hover:text-primary transition-colors">
                  Cijene
                </Link>
              </li>
              <li>
                <Link href="/primjeri" className="text-muted-foreground hover:text-primary transition-colors">
                  Primjeri
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-muted-foreground hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Chatbots */}
          <div>
            <h3 className="font-semibold mb-4">Chatboti</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/chatboti/instagram" className="text-muted-foreground hover:text-primary transition-colors">
                  Instagram Bot
                </Link>
              </li>
              <li>
                <Link href="/chatboti/whatsapp" className="text-muted-foreground hover:text-primary transition-colors">
                  WhatsApp Bot
                </Link>
              </li>
              <li>
                <Link href="/chatboti/email" className="text-muted-foreground hover:text-primary transition-colors">
                  Email Bot
                </Link>
              </li>
              <li>
                <Link href="/chatboti/web" className="text-muted-foreground hover:text-primary transition-colors">
                  Web Bot
                </Link>
              </li>
              <li>
                <Link href="/chatboti/facebook" className="text-muted-foreground hover:text-primary transition-colors">
                  Facebook Bot
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                info@mojasistent.ba
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-muted-foreground" />
                <a
                  href="https://wa.me/15202389320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +1 (520) 238-9320
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Bosna i Hercegovina
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 MojAsistent.ba. Sva prava zadržana.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privatnost
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Uslovi korištenja
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
