import type { Metadata } from "next"
import SuperBotoviClient from "./super-botovi-client"

export const metadata: Metadata = {
  title: "Super Botovi - Premium AI Asistenti | MojaSistent.ba",
  description:
    "Napredni AI botovi za rezervacije poziva i automatsko objavljivanje na Instagramu. Premium rješenja za vaš biznis.",
}

export default function SuperBotoviPage() {
  return <SuperBotoviClient />
}
