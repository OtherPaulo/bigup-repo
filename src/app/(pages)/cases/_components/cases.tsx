import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Header from "@/components/(LandingPage)/header/_components/header"
import Footer from "@/components/(LandingPage)/footer/_components/footer"
import Chat from "@/components/chat/_components/chat"

export default function CaseSection() {
  const cases = [
    {
      name: "Us Clean Cosmetics",
      logo: "/placeholder.svg?height=80&width=200",
      href: "#",
    },
    {
      name: "Nutty Friends",
      logo: "/placeholder.svg?height=80&width=200",
      href: "#",
    },
    {
      name: "Megga Zavatti",
      logo: "/placeholder.svg?height=80&width=200",
      href: "#",
    },
  ]

  return (
    <>
    <Header/>
    <main>
    <section className="bg-black py-16 md:py-24">
      <div className="container min-h-screen mt-32 mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Quem confia na Big Deal
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseStudy, index) => (
            <Card 
              key={index}
              className="bg-white rounded-lg overflow-hidden group hover:shadow-lg transition-shadow duration-200"
            >
              <CardContent className="p-8 flex items-center justify-center min-h-[200px]">
                <Image
                  src={caseStudy.logo}
                  alt={`${caseStudy.name} logo`}
                  width={200}
                  height={80}
                  className="max-w-[200px] h-auto"
                />
              </CardContent>
              <CardFooter className="bg-neutral-950 p-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">
                  {caseStudy.name}
                </h3>
                <Button
                  variant="link"
                  asChild
                  className="text-[#C1FF02] hover:text-[#C1FF02]/90 p-0 h-auto font-medium"
                >
                  <a href={caseStudy.href}>
                    Visualizar
                  </a>
                </Button>
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