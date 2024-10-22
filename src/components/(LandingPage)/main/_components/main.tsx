import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { FlipWords } from '@/components/ui/flip-words';

export default function Main() {
    const words = ["Branding", "Loja Virtual", "Social Media", "Sites Profissionais"];

  return (
    <section className="relative min-h-[93vh] flex items-center overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute w-full h-full object-cover"
      >
        <source src="/video3.mp4" type="video/mp4" />
      </video>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl text-white">
        <div className="inline-block bg-[#e8ffa8] text-black text-sm font-medium px-3 py-1 rounded-full mb-8">
            #1 Em Soluções Digitais
            </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            IMPULSIONAMOS SUA MARCA COM ESTRATÉGIAS DIGITAIS
          </h1>
          <p className="text-xl md:text-2xl mb-4">
            Marketing, E-commerce e Vendas.
          </p>
          <div className='mb-8 flex'>
          <p className="text-lg md:text-xl ">
            Estratégias para 
          </p>
          <FlipWords words={words} className="text-lg md:text-xl " />
          </div>

          <Button asChild className="bg-[#CB6CE6] hover:bg-[#7800FF] text-white px-8 py-3 rounded-full text-lg transition-colors duration-300">
            <Link href="/solucoes">
              Fale Conosco
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}