import { Award, ShoppingCart, Play, Headset } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: <Award className="w-12 h-12 text-[#AEFF00]" />,
      title: "Branding",
      description: "Desenvolvemos estratégias personalizadas que incluem análise de mercado, posicionamento e diferenciação, para que sua marca se destaque da concorrência."
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-[#AEFF00]" />,
      title: "E–commerce",
      description: "Elaboramos projetos de implementação e evolução, layouts intuitivos e responsivos que oferecem uma experiência de compra excepcional."
    },
    {
      icon: <Play className="w-12 h-12 text-[#AEFF00]" />,
      title: "Social Media",
      description: "Cuidamos da sua presença em plataformas como Instagram, Facebook, Twitter e LinkedIn, criando uma estratégia personalizada que se alinha aos seus objetivos."
    },
    {
      icon: <Headset className="w-12 h-12 text-[#AEFF00]" />,
      title: "Suporte e Consultoria",
      description: "Analisamos seu negócio e mercado para desenvolver uma estratégia personalizada que se alinha aos seus objetivos e público-alvo."
    }
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-left mb-8">
        <div className="inline-block bg-[#AEFF00]/60 text-black text-sm font-medium px-3 py-1 rounded-full mb-8">Serviços</div>
        <h3 className="text-xl md:text-4xl font-bold text-gray-900">
        Nossa Paleta de Especialização
          </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg relative pt-16">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <a href="/cases">
                <div className="bg-[#000000]/95 p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
                  {service.icon}
                </div>
                </a>
              </div>
              <h4 className="text-lg font-semibold text-center mb-4">{service.title}</h4>
              <p className="text-gray-900 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}