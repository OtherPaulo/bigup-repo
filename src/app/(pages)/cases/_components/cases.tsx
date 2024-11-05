import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Header from "@/components/(LandingPage)/header/_components/header"
import Footer from "@/components/(LandingPage)/footer/_components/footer"
import Chat from "@/components/chat/_components/chat"
import { ExternalLink } from "lucide-react"

export default function CaseSection() {
  const cases = [
    {
      name: "Us Clean Cosmetics",
      img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20(13)-FagNFxkgMzj5yn4esWntS8DFCyqJrV.png",
      href: "https://www.instagram.com/uscleancosmetics",
      type: "Skin Care",
    },
    {
      name: "Nutty Friends",
      img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20(12)-8UXco7UfV8SM7cJQUjbzlS4Yi81dsR.png",
      href: "https://www.instagram.com/nuttyfriends/",
      type: "Pastas de Amendoim",
    },
    {
      name: "Megga Zavatti",
      img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zavatti-wvzeNYzEZrTWnfNa86xayTWQ9QpuqH.png",
      href: "https://www.instagram.com/meggazavattimarmores/",
      type: "Mármores e Granitos",
    },
    {
      name: "Encaixa.ai",
      img: "case-encaixa-ai.png",
      href: "https://www.encaixa.ai/",
      type: "Plataforma SaaS",
    },
    {
      name: "La Ganexa",
      img: "/case-laganexa.png",
      href: "https://www.lojalaganexa.com.br/",
      type: "Pasta de Amendoim",
    },
    {
      name: "Agora Facilita",
      img: "/case-agora-facilita.png",
      href: "https://www.agorafacilita.com/",
      type: "Ecommerce",
    },
  ]

  return (
    <>
    <Header/>
    <main>
    <section className="bg-black py-16 md:py-24">
      <div className="container min-h-screen mt-32 mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-12">
          Clientes com quem Trabalhamos:
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cases.map((item) => (
        <Card key={item.name} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-video relative overflow-hidden group">
              <img
              src={item.img}
              alt={`${item.name} case study`}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
                <div className="absolute inset-0 bg-gray-950 opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">{item.type}</span>
                </div>
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between p-6">
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <a href={item.href} target="_blank">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 hover:bg-[#aeff00]"
            >
              Visualizar
              <ExternalLink className="h-4 w-4" />
            </Button>
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
      </div>
    </section>
    <Chat/>
    </main>
    <Footer/>
    </>
  )
}