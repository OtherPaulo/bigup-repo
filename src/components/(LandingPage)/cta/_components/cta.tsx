import GridPattern from '@/components/ui/grid-pattern'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="relative bg-black overflow-hidden rounded-lg">
      {/* Background gradient */}
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,white)] ",
        )}
      />      
      {/* Content container */}
      <div className="relative container mx-auto px-4 py-16 md:py-16 flex flex-col md:flex-row items-center">
        {/* Text content */}
        <div className=" text-white z-10">
          <h2 className="text-xl md:text-4xl font-bold mb-4 leading-tight">
          Soluções Criativas Para o Mundo Moderno
          </h2>
          <p className="text-lg mb-8 ">
            Descubra como nossas soluções inovadoras podem transformar seu negócio e expandir seu alcance.
          </p>
          <Link href="/cases" className="bg-white font-semibold text-black px-16 py-3 rounded-full hover:bg-[#aeff00] transition-colors">
              Ver cases
            </Link>
        </div>
        
      </div>
      
      {/* Decorative elements */}
      {/* <div className="absolute top-10 right-10 w-16 h-16 bg-yellow-300 rounded-full blur-xl opacity-50" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-300 rounded-full blur-xl opacity-50" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-3xl bg-white opacity-5 rounded-full blur-3xl" /> */}
    </section>
  )
}