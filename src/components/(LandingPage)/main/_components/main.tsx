"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { FlipWords } from '@/components/ui/flip-words'

export default function Main() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const words = ["Branding", "Social Media", "Loja Virtual", "Sites Profissionais"]

  useEffect(() => {
    const video = document.querySelector('video')
    if (video) {
      video.addEventListener('loadeddata', () => setIsVideoLoaded(true))
      return () => video.removeEventListener('loadeddata', () => setIsVideoLoaded(true))
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image (shown while video is loading) */}
      {!isVideoLoaded && (
        <Image
          src="/thumb.jpg"
          alt="Thumbnail Video Institucional"
          layout="fill"
          objectFit="cover"
          priority
        />
      )}

      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        className={`absolute w-full h-full object-cover duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-100'}`}
      >
        <source src="https://klirva.nyc3.cdn.digitaloceanspaces.com/video3%20(1)%20(1).mp4" type="video/mp4" />
      </video>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

    <div className="container mx-auto px-4 mt-[-14rem] md:mt-[-12.5rem] z-10">
        <div className="max-w-2xl text-white">
          <div className="inline-block bg-[#e8ffa8] text-black text-sm font-medium px-3 py-1 rounded-full mb-8">
            #1 Em Soluções Digitais
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
            IMPULSIONAMOS SUA MARCA COM ESTRATÉGIAS DIGITAIS
          </h1>
          <p className="text-xl md:text-2xl mb-4">
            Marketing, E-commerce e Vendas.
          </p>
          <div className='mb-8 flex'>
            <p className="text-lg md:text-xl">
              Estratégias para 
            </p>
            <FlipWords words={words} className="text-lg md:text-xl" />
          </div>

          <Button asChild className="bg-[#CB6CE6] hover:bg-[#7800FF] text-white px-8 py-3 rounded-full text-lg transition-colors duration-300">
            <Link href="https://api.whatsapp.com/send/?phone=5592994094783" target="_blank" rel="noopener noreferrer">
              Fale Conosco
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}