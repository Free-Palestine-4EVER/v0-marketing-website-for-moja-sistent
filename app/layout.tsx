import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
import { PromoModal } from "@/components/promo-modal"

export const metadata: Metadata = {
  title: "MojAsistent.ba - AI Zaposlenici koji nikad ne spavaju",
  description:
    "Iznajmite chatbote koji odgovaraju na upite, vode rezervacije i rješavaju FAQ – na društvenim mrežama, webu i e-mailu.",
  generator: "v0.app",
  keywords: "AI chatbot, automatizacija, rezervacije, FAQ, društvene mreže, Bosna",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "MojAsistent.ba - AI Zaposlenici",
    description: "Vaši pomoćnici koji nikad ne spavaju",
    url: "https://www.mojasistent.ba",
    siteName: "MojAsistent.ba",
    locale: "bs_BA",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 1200,
        alt: "MojAsistent.ba - AI Zaposlenici",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MojAsistent.ba - AI Zaposlenici",
    description: "Vaši pomoćnici koji nikad ne spavaju",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bs">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased overflow-x-hidden`}>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1683965825606930');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1683965825606930&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End of Facebook Pixel tracking code */}

        <Suspense fallback={null}>{children}</Suspense>
        <PromoModal />
        <Analytics />
        <elevenlabs-convai agent-id="agent_4801k6e7zmgjftf9gb57vmm576ac"></elevenlabs-convai>
        <Script src="https://unpkg.com/@elevenlabs/convai-widget-embed" strategy="afterInteractive" />
      </body>
    </html>
  )
}
