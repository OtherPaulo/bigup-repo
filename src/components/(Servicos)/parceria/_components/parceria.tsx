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
              <img
                src="/parceria estrategica.jpeg"
                alt="Parceria Estratégica"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg object-cover aspect-[4/3]"
              />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
                Parceria Estratégica
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ao optar por nosso serviço, você estará investindo em uma parceria estratégica que potencializa o sucesso dos seus projetos digitais. Estamos aqui para proporcionar a vantagem competitiva que sua empresa precisa para crescer.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
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
            <a href="https://api.whatsapp.com/send/?phone=5511953843871" target="_blank">
            <Button size="lg" className="bg-[#aeff00] rounded-full mt-8 hover:bg-[#aeff00] text-black">
              ENTRE EM CONTATO
            </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}