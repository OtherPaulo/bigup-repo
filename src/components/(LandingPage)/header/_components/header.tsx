'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerBg = scrollY > 50
    ? 'bg-primary/90 backdrop-blur-md z-50'
    : 'bg-transparent'

  const menuBg = isMenuOpen
    ? 'bg-primary/90 backdrop-blur-md z-50'
    : headerBg

  return (
    <header className={`fixed text-white py-2 left-0 right-0 z-50 transition-all duration-300 ${menuBg}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <img src="/Logo Big Deal (Branco).png" alt="Logo" className="h-10 w-34 mr-2" />
          </Link>
          <nav className="hidden lg:grid grid-flow-col">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/quem-somos" className="hover:text-gray-300 px-4">QUEM SOMOS</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/servicos" className="hover:text-gray-300 px-4">SERVIÇOS</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/cases" className="hover:text-gray-300 px-4">CASES</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blog" className="hover:text-gray-300 px-4">BLOG</Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="hidden lg:flex items-center">
            <Link href="https://api.whatsapp.com/send/?phone=5511953843871" target="_blank" rel="noopener noreferrer" className="bg-[#FFFFFF] flex text-black px-4 py-2 rounded-full hover:bg-[#aeff00] transition-colors">
              Entre em Contato
              <ArrowUpRight className="w-6 h-6 text-black" />
            </Link>
          </div>
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
            <Link href="https://api.whatsapp.com/send/?phone=5511953843871" target="_blank" rel="noopener noreferrer" className="bg-[#ffffff] text-black px-4 py-2 rounded-md hover:bg-[#aeff00] transition-colors text-center">
              Entre em Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}