import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, Package, Headphones } from "lucide-react"

export default function ParceriaSection() {
  const services = [
    {
      icon: Users,
      title: "Equipes de Alta Performance",
      href: "#",
    },
    {
      icon: Package,
      title: "Desenvolvimento de Produtos",
      href: "#",
    },
    {
      icon: Headphones,
      title: "Sustentação e Suporte",
      href: "#",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400/20 rounded-lg" />
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute top-0 w-full h-8 bg-gray-900/10 backdrop-blur-sm rounded-t-lg">
                <div className="flex items-center h-full px-4 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-500" />
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Equipe trabalhando"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg object-cover aspect-[4/3]"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Parceria Estratégica
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ao optar por nosso serviço, você estará investindo em uma parceria estratégica que potencializa o sucesso dos seus projetos digitais. Estamos aqui para proporcionar a vantagem competitiva que sua empresa precisa para crescer.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Descubra também outros serviços que podem beneficiar seu negócio:
              </h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="group flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-primary/10 transition-colors">
                        <service.icon className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{service.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <a href="">
            <Button size="lg" className="bg-cyan-400 mt-8 hover:bg-cyan-500 text-white">
              ENTRE EM CONTATO
            </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}