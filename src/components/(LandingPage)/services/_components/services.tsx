import { Award, ShoppingCart, Play, Headset } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: <Award className="w-12 h-12 text-[#AEFF00]" />,
      title: "BRANDING",
      description: "Nosso serviço de branding oferece uma abordagem completa para ajudar sua empresa a criar uma identidade única e memorável."
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-[#AEFF00]" />,
      title: "E–COMMERCE",
      description: "Nossos serviços de e-commerce são projetados para ajudar sua empresa a construir e otimizar sua loja virtual, proporcionando uma experiência de compra excepcional para seus clientes."
    },
    {
      icon: <Play className="w-12 h-12 text-[#AEFF00]" />,
      title: "SOCIAL MEDIA",
      description: "Nossos serviços de social media são projetados para ajudar sua empresa a construir uma comunidade engajada, fortalecer sua imagem e impulsionar suas vendas."
    },
    {
      icon: <Headset className="w-12 h-12 text-[#AEFF00]" />,
      title: "Suporte e Consultoria",
      description: "Nossos serviços de suporte e consultoria em marketing oferecem a expertise necessária para ajudar sua empresa a alcançar seus objetivos e se destacar no mercado."
    }
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-left mb-8">
        <div className="inline-block bg-[#AEFF00]/60 text-black text-sm font-medium px-3 py-1 rounded-full mb-8">Serviços</div>
        <h3 className="text-3xl font-bold text-gray-900">
            Veja como podemos apoiar sua empresa
          </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg relative pt-16">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-[#000000]/95 p-4 rounded-full shadow-lg">
                  {service.icon}
                </div>
              </div>
              <h4 className="text-xl font-semibold text-center mb-4">{service.title}</h4>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}