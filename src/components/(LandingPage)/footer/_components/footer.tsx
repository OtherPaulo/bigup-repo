import Link from 'next/link'
import { ArrowUpRight, Facebook, Instagram, Linkedin } from 'lucide-react'
import GridPattern from '@/components/ui/grid-pattern'
import { cn } from '@/lib/utils'
import { CookiesModal } from '../../cookies-modal/cookies-modal'
import { Button } from '@/components/ui/button'
import { PrivacidadeModal } from '../../politicasPrivacidade/politicasPrivacidade'

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-base font-bold mb-4">Potencializamos seu negócio através de<br /> estratégias  de marketing & vendas</h2>
            <p>Entre em contato:</p>
            <p className="mb-6">
              <a href="mailto:contato@bigdealmarketing.com.br" className="hover:underline">
              contato@bigdealmarketing.com.br
              </a> <br />
              <a href="https://api.whatsapp.com/send/?phone=5511910029543" target="_blank" className="hover:underline">
              (11) 91002-9543
              </a>
            </p>
            <div className="hidden lg:flex items-center">
            {/* <Link href="https://api.whatsapp.com/send/?phone=5511910029543" target="_blank" rel="noopener noreferrer" className="bg-[#FFFFFF] text-black flex z-10 px-4 py-2 rounded-full hover:bg-[#ff6d1f] transition-colors">
              Entre em Contato
              <ArrowUpRight className="w-6 h-6 text-black" />
            </Link> */}
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4">Links úteis</h3>
            <ul className="space-y-2">
              <li><Link href="/quem-somos" className="hover:underline">Quem somos</Link></li>
              <li><Link href="/servicos" className="hover:underline">Serviços</Link></li>
              <li><Link href="/cases" className="hover:underline">Cases</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4">Redes sociais</h3>
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
              <PrivacidadeModal/>
              <CookiesModal/>
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
