'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Send, X } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-[#CB6CE6] to-[#7800FF] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <span className="text-xl font-bold">
              big
              <span className='bg-gradient-to-r from-[#CB6CE6] to-[#7800FF] bg-clip-text text-transparent'>
                .
              </span>
              up
            </span>
            <Send className='ml-2'/>
          </div>
          <nav className="hidden md:grid grid-flow-col">
        <NavigationMenu>
            <NavigationMenuList>
            <NavigationMenuItem>
                <Link href="/quem-somos" className="hover:text-gray-300 px-4">QUEM SOMOS</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/projetos" className="hover:text-gray-300 px-4">PROJETOS</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger>SOLUÇÕES</NavigationMenuTrigger>
                <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                    <NavigationMenuLink asChild>
                        <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                        >
                        <div className="mb-2 mt-4 text-lg font-medium">
                            Nossas Soluções
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                            Conheça todas as nossas soluções personalizadas para o seu negócio.
                        </p>
                        </a>
                    </NavigationMenuLink>
                    </li>
                    <li>
                    <NavigationMenuLink asChild>
                        <a href="/solucoes/desenvolvimento-web">Desenvolvimento Web</a>
                    </NavigationMenuLink>
                    </li>
                    <li>
                    <NavigationMenuLink asChild>
                        <a href="/solucoes/marketing-digital">Marketing Digital</a>
                    </NavigationMenuLink>
                    </li>
                    <li>
                    <NavigationMenuLink asChild>
                        <a href="/solucoes/consultoria">Consultoria</a>
                    </NavigationMenuLink>
                    </li>
                </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger>CASES</NavigationMenuTrigger>
                <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                    <NavigationMenuLink asChild>
                        <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/cases"
                        >
                        <div className="mb-2 mt-4 text-lg font-medium">
                            Nossos Cases
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                            Veja como ajudamos nossos clientes a alcançar o sucesso.
                        </p>
                        </a>
                    </NavigationMenuLink>
                    </li>
                    <li>
                    <NavigationMenuLink asChild>
                        <a href="/cases/e-commerce">E-commerce</a>
                    </NavigationMenuLink>
                    </li>
                    <li>
                    <NavigationMenuLink asChild>
                        <a href="/cases/startups">Startups</a>
                    </NavigationMenuLink>
                    </li>
                    <li>
                    <NavigationMenuLink asChild>
                        <a href="/cases/grandes-empresas">Grandes Empresas</a>
                    </NavigationMenuLink>
                    </li>
                </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/blog" className="hover:text-gray-300">BLOG</Link>
            </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        </nav>

          <div className="hidden md:flex items-center">
            <Link href="https://api.whatsapp.com/send/?phone=5592994094783" target="_blank" rel="noopener noreferrer" className="bg-[#CB6CE6] px-4 py-2 rounded-full hover:bg-[#CB6CE6] transition-colors">
              Entre em Contato
            </Link>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <Link href="/quem-somos" className="hover:text-gray-300">QUEM SOMOS</Link>
            <Link href="/projetos" className="hover:text-gray-300">PROJETOS</Link>
            <Link href="/solucoes" className="hover:text-gray-300">SOLUÇÕES</Link>
            <Link href="/cases" className="hover:text-gray-300">CASES</Link>
            <Link href="/blog" className="hover:text-gray-300">BLOG</Link>
            <Link href="https://api.whatsapp.com/send/?phone=5592994094783" target="_blank" rel="noopener noreferrer" className="bg-[#CB6CE6] px-4 py-2 rounded-md hover:bg-[#CB6CE6] transition-colors text-center">
              Entre em Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}