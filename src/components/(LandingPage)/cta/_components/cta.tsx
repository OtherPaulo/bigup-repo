import Image from 'next/image'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="relative overflow-hidden rounded-lg">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#CB6CE6]/90 to-[#7800FF]/90" />
      
      {/* Content container */}
      <div className="relative container mx-auto px-4 py-16 md:py-16 flex flex-col md:flex-row items-center">
        {/* Text content */}
        <div className=" text-white z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Potencialize Suas Estratégias de Marketing
          </h2>
          <p className="text-lg mb-8 ">
            Descubra como nossas soluções inovadoras podem transformar seu negócio e expandir seu alcance.
          </p>
          <Link href="https://api.whatsapp.com/send/?phone=5592994094783" target="_blank" rel="noopener noreferrer" className="bg-[#7800FF] px-4 py-2 rounded-full hover:bg-[#7800FF] transition-colors">
              Fale com um Especialista
            </Link>
        </div>
        
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-16 h-16 bg-yellow-300 rounded-full blur-xl opacity-50" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-300 rounded-full blur-xl opacity-50" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-3xl bg-white opacity-5 rounded-full blur-3xl" />
    </section>
  )
}