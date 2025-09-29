import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  Phone,
  Instagram,
  Sparkles,
  Star,
  Clock,
  TrendingUp,
  Shield,
  CheckCircle,
  Calendar,
  MessageSquare,
  BarChart3,
  Target,
  Headphones,
  Camera,
  Heart,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Super Botovi - Premium AI Asistenti | MojaSistent.ba",
  description:
    "Napredni AI botovi za rezervacije poziva i automatsko objavljivanje na Instagramu. Premium rješenja za vaš biznis.",
}

export default function SuperBotoviPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="bg-gradient-to-br from-pink-500 via-purple-600 to-orange-500 min-h-screen">
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-4 border border-white/30">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-xs font-medium text-white">PREMIUM COLLECTION</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">Super Botovi</h1>

            <p className="text-base text-white/90 max-w-xl mx-auto mb-8 text-center">
              Najnapredniji AI asistenti dizajnirani za maksimalnu efikasnost vašeg biznisa. Automatizujte pozive i
              društvene mreže sa našim premium rješenjima koji rade 24/7 bez prestanka.
            </p>

            {/* Stats - Made smaller and more compact */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-lg mx-auto mb-8">
              <div className="text-center">
                <div className="text-xl font-bold text-white">24/7</div>
                <div className="text-xs text-white/80">Dostupnost</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">99%</div>
                <div className="text-xs text-white/80">Preciznost</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">10x</div>
                <div className="text-xs text-white/80">Brža obrada</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">0</div>
                <div className="text-xs text-white/80">Propuštenih poziva</div>
              </div>
            </div>
          </div>
        </section>

        {/* Super Bots Detailed Grid */}
        <section className="pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Call Reservation Bot */}
              <div className="space-y-4">
                <Card className="relative overflow-hidden border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:border-white/50 transition-all duration-300 group">
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <CardHeader className="relative pb-3">
                    <div className="flex items-center gap-2 mb-2 justify-center">
                      <div className="p-2 rounded-lg bg-white/20 border border-white/30">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                        <Star className="w-3 h-3 mr-1" />
                        PREMIUM
                      </Badge>
                    </div>

                    <CardTitle className="text-lg font-bold text-white mb-2 text-center">
                      Call Reservation Bot
                    </CardTitle>
                    <CardDescription className="text-sm text-white/90 text-center">
                      Napredni AI asistent koji automatski prima pozive, upravlja rezervacijama i pruža podršku
                      klijentima 24/7 na bosanskom jeziku
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative space-y-4">
                    {/* Hero Image - Made smaller */}
                    <div className="relative rounded-lg overflow-hidden border border-white/20 mx-auto max-w-xs">
                      <Image
                        src="/images/voice-assistant-superbot.png"
                        alt="Voice Assistant SuperBot - AI asistent za automatsko primanje poziva i rezervacije"
                        width={300}
                        height={200}
                        className="w-full h-auto"
                      />
                    </div>

                    {/* Key Features - Made more compact */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white text-sm mb-2 text-center">Ključne funkcionalnosti:</h4>
                      <div className="grid gap-1">
                        <div className="flex items-center gap-2 justify-center">
                          <Headphones className="w-3 h-3 text-white" />
                          <span className="text-xs text-white">Automatski odgovor na pozive sa prirodnim glasom</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <Calendar className="w-3 h-3 text-white" />
                          <span className="text-xs text-white">Upravljanje rezervacijama u realnom vremenu</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <Clock className="w-3 h-3 text-white" />
                          <span className="text-xs text-white">Provjera dostupnosti i automatsko zakazivanje</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <MessageSquare className="w-3 h-3 text-white" />
                          <span className="text-xs text-white">Prirodan razgovor na bosanskom jeziku</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <Shield className="w-3 h-3 text-white" />
                          <span className="text-xs text-white">Sigurno čuvanje podataka o klijentima</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <BarChart3 className="w-3 h-3 text-white" />
                          <span className="text-xs text-white">Detaljni izvještaji o pozivima i rezervacijama</span>
                        </div>
                      </div>
                    </div>

                    {/* Use Cases - Made more compact */}
                    <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                      <h4 className="font-semibold text-white text-sm mb-2 text-center">Idealno za:</h4>
                      <div className="grid gap-1 text-xs">
                        <div className="flex items-center gap-2 justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                          <span className="text-white">Restorane i kafiće</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                          <span className="text-white">Frizerske i kozmetičke salone</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                          <span className="text-white">Medicinske ordinacije</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                          <span className="text-white">Hotele i apartmane</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                          <span className="text-white">Sportske centre i teretane</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/20">
                      <div className="text-center mb-3">
                        <p className="text-xs text-white/80 mb-1">Cijena na upit - prilagođeno vašim potrebama</p>
                        <p className="text-xl font-bold text-white">Kontaktirajte nas</p>
                        <p className="text-xs text-white/80 mt-1">Besplatna konsultacija i demo</p>
                      </div>

                      <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-300">
                        <Phone className="w-4 h-4 mr-2" />
                        Zatražite ponudu
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Instagram Scheduler Bot */}
              <div className="space-y-4">
                <Card className="relative overflow-hidden border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:border-white/50 transition-all duration-300 group">
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <CardHeader className="relative pb-3">
                    <div className="flex items-center gap-2 mb-2 justify-center">
                      <div className="p-2 rounded-lg bg-white/20 border border-white/30">
                        <Instagram className="w-5 h-5 text-white" />
                      </div>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                        <Star className="w-3 h-3 mr-1" />
                        PREMIUM
                      </Badge>
                    </div>

                    <CardTitle className="text-lg font-bold text-white mb-2 text-center">
                      Instagram Scheduler Bot
                    </CardTitle>
                    <CardDescription className="text-sm text-white/90 text-center">
                      Revolucionarni AI asistent za automatsko kreiranje, planiranje i objavljivanje sadržaja na
                      Instagramu sa naprednom optimizacijom
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative space-y-4">
                    {/* Hero Image - Made smaller */}
                    <div className="relative rounded-lg overflow-hidden border border-white/20 mx-auto max-w-xs">
                      <Image
                        src="/images/instagram-superbot.png"
                        alt="Instagram SuperBot - AI asistent za automatsko upravljanje Instagram sadržajem"
                        width={300}
                        height={200}
                        className="w-full h-auto"
                      />
                    </div>

                    {/* Key Features */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white mb-2 text-center text-sm">Napredne funkcionalnosti:</h4>
                      <div className="grid gap-1">
                        <div className="flex items-center gap-2 justify-center">
                          <Camera className="w-3 h-3 text-white" />
                          <span className="text-xs text-white">AI generiranje vizualnog sadržaja i opisa</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <Clock className="w-3 h-3 text-white" />
                          <span className="text-xs text-white">Automatsko objavljivanje u optimalno vrijeme</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <TrendingUp className="w-3 h-3 text-white" />
                          <span className="text-xs text-white">Analiza trendova i hashtag optimizacija</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <Target className="w-3 h-3 text-white" />
                          <span className="text-xs text-white">Personalizovani sadržaj za vašu publiku</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <BarChart3 className="w-3 h-3 text-white" />
                          <span className="text-xs text-white">Detaljni izvještaji o performansama</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <Heart className="w-3 h-3 text-white" />
                          <span className="text-xs text-white">Automatsko odgovaranje na komentare</span>
                        </div>
                      </div>
                    </div>

                    {/* What's Included */}
                    <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                      <h4 className="font-semibold text-white mb-2 text-center text-sm">Šta dobijate:</h4>
                      <div className="grid gap-1 text-xs">
                        <div className="flex items-center gap-2 justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                          <span className="text-white">Do 30 postova mjesečno</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                          <span className="text-white">Stories i Reels automatizacija</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                          <span className="text-white">Hashtag istraživanje i optimizacija</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                          <span className="text-white">Engagement analitika</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                          <span className="text-white">Konkurentska analiza</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/20 rounded-lg p-3 border border-white/30">
                      <div className="flex items-center gap-2 mb-2 justify-center">
                        <Sparkles className="w-4 h-4 text-white" />
                        <span className="text-sm font-semibold text-white">BONUS UKLJUČEN</span>
                      </div>
                      <p className="text-white mb-1 text-center text-xs">
                        Instagram chatbot BESPLATNO uključen u paketu!
                      </p>
                      <p className="text-xs text-white/80 text-center">Vrijednost: 200 BAM mjesečno</p>
                    </div>

                    <div className="pt-3 border-t border-white/20">
                      <div className="text-center mb-4">
                        <p className="text-xs text-white/80 mb-1">Mjesečna pretplata</p>
                        <p className="text-2xl font-bold text-white">750 BAM</p>
                        <p className="text-xs text-white/80 mt-1">+ besplatan Instagram chatbot (200 BAM vrijednost)</p>
                        <p className="text-xs text-white mt-1">Ušteda od 200 BAM mjesečno!</p>
                      </div>

                      <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-300">
                        <Instagram className="w-4 h-4 mr-2" />
                        Započni odmah
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section - Made smaller and centered */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Zašto odabrati Super Botove?</h2>
              <p className="text-base text-white/90">Poredite naša premium rješenja sa standardnim opcijama</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Card className="border-white/30 bg-white/10 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-center text-base text-white">Standardni Chatbot</CardTitle>
                  <CardDescription className="text-center text-sm text-white/80">
                    Osnovna funkcionalnost
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-white/80 justify-center">
                    <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    <span className="text-xs">Osnovni odgovori</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80 justify-center">
                    <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    <span className="text-xs">Ograničena personalizacija</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80 justify-center">
                    <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    <span className="text-xs">Osnovna analitika</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-white/50 bg-white/20 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-white"></div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-white" />
                    <Badge className="bg-white/30 text-white text-xs border-white/30">PREMIUM</Badge>
                  </div>
                  <CardTitle className="text-center text-base text-white">Super Botovi</CardTitle>
                  <CardDescription className="text-center text-sm text-white/90">
                    Napredna AI tehnologija
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                    <span className="text-xs text-white">Napredna AI inteligencija</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                    <span className="text-xs text-white">Potpuna automatizacija</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                    <span className="text-xs text-white">Detaljni izvještaji</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                    <span className="text-xs text-white">24/7 podrška</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                    <span className="text-xs text-white">Prilagođeno vašem biznisu</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/30 bg-white/10 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-center text-base text-white">Ručno upravljanje</CardTitle>
                  <CardDescription className="text-center text-sm text-white/80">Tradicionalni pristup</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-white/80 justify-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-xs">Ograničeno radno vrijeme</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80 justify-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-xs">Ljudske greške</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80 justify-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-xs">Visoki troškovi osoblja</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ROI Section - Made smaller and centered */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Povrat investicije</h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card className="border-white/30 bg-white/10 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white text-base text-center">Mjesečne uštede</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-xl font-bold text-white mb-2">2,000+ BAM</div>
                  <p className="text-xs text-white/80">
                    Ušteda na troškovima osoblja, propuštenim pozivima i neoptimalnom social media upravljanju
                  </p>
                </CardContent>
              </Card>

              <Card className="border-white/30 bg-white/10 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white text-base text-center">Povećanje prihoda</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-xl font-bold text-white mb-2">30-50%</div>
                  <p className="text-xs text-white/80">
                    Više rezervacija, bolje Instagram engagement i zadovoljniji klijenti
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section - Made smaller and centered */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white text-center">
                Spremni za revoluciju u vašem poslovanju?
              </h2>
              <p className="text-sm text-white/90 mb-6 text-center">
                Naši Super Botovi će transformirati način kako komunicirate sa klijentima i upravljate društvenim
                mrežama. Pridružite se stotinama zadovoljnih klijenata koji su već automatizovali svoj biznis.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="default"
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Kontaktirajte nas
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  size="default"
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Započni sa Instagram Botom
                </Button>
              </div>
              <p className="text-xs text-white/80 mt-3 text-center">
                Besplatna konsultacija • Demo u realnom vremenu • Bez obaveza
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
