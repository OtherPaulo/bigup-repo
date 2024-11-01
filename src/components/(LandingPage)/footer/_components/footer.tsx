import Link from 'next/link'
import { ArrowUpRight, Facebook, Instagram, Linkedin } from 'lucide-react'
import GridPattern from '@/components/ui/grid-pattern'
import { cn } from '@/lib/utils'

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-lg font-bold mb-4">Potencializamos seu negócio através de<br /> estratégias  de marketing & vendas</h2>
            {/* <p className="mb-4">Desafios digitais?</p>
            <p className="mb-6">NÓS TE AJUDAMOS!</p> */}
            <div className="hidden lg:flex items-center">
            {/* <Link href="https://api.whatsapp.com/send/?phone=5511953843871" target="_blank" rel="noopener noreferrer" className="bg-[#FFFFFF] text-black flex z-10 px-4 py-2 rounded-full hover:bg-[#aeff00] transition-colors">
              Entre em Contato
              <ArrowUpRight className="w-6 h-6 text-black" />
            </Link> */}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links úteis</h3>
            <ul className="space-y-2">
              <li><Link href="/quem-somos" className="hover:underline">QUEM SOMOS</Link></li>
              <li><Link href="/servicos" className="hover:underline">SERVIÇOS</Link></li>
              <li><Link href="/cases" className="hover:underline">CASES</Link></li>
              <li><Link href="/blog" className="hover:underline">BLOG</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/bigdealmarketing/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <Instagram size={24} />
              </Link>
              <Link href="https://web.facebook.com/people/Big-Deal-Marketing/61567310259741/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <Facebook size={24} />
              </Link>
              <Link href="https://www.linkedin.com/company/agenciabigdeal/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white">
          <div className="flex flex-wrap justify-between items-center">
            <p className="text-sm">&copy; 2024 BIG DEAL MARKETING. Todos os direitos reservados.</p>
            <div className="flex space-x-4 mt-4 lg:mt-0">
              <Link href="/politica-de-privacidade" className="text-sm hover:underline">Política de Privacidade</Link>
              <Link href="/politica-de-cookies" className="text-sm hover:underline">Política de Cookies</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Componente GridPattern adicionado */}
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn("[mask-image:linear-gradient(to_bottom_right,white,transparent,white)]")}
      />
    </footer>
  )
}
