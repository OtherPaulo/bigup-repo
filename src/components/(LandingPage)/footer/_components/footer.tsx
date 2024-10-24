import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#CB6CE6]/90 to-[#7800FF]/90 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-lg font-bold mb-4">Potencializamos seu negócio através de estratégias de marketing & vendas</h2>
            <p className="mb-4">Desafios digitais?</p>
            <p className=" mb-6">NÓS TE AJUDAMOS!</p>
            <div className="hidden lg:flex items-center">
            <Link href="https://api.whatsapp.com/send/?phone=5592994094783" target="_blank" rel="noopener noreferrer" className="bg-[#7800FF] px-4 py-2 rounded-full hover:bg-[#7800FF] transition-colors">
              Entre em Contato
            </Link>
          </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links úteis</h3>
            <ul className="space-y-2">
              <li><Link href="/quem-somos" className="hover:underline">QUEM SOMOS</Link></li>
              <li><Link href="/projetos" className="hover:underline">PROJETOS</Link></li>
              <li><Link href="/solucoes" className="hover:underline">SOLUÇÕES</Link></li>
              <li><Link href="/cases" className="hover:underline">CASES</Link></li>
              <li><Link href="/blog" className="hover:underline">BLOG</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <Instagram size={24} />
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <Facebook size={24} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white">
          <div className="flex flex-wrap justify-between items-center">
            <p className="text-sm">&copy; 2024 BIG DEAL MARKETING - AGÊNCIA DIGITAL. Todos os direitos reservados. Desenvolvido por: BIG DEAL</p>
            <div className="flex space-x-4 mt-4 lg:mt-0">
              <Link href="/politica-de-privacidade" className="text-sm hover:underline">Política de Privacidade</Link>
              <Link href="/politica-de-cookies" className="text-sm hover:underline">Política de Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}