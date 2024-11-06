import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { FlipWords } from "@/components/ui/flip-words"

export default function QMain() {
    const words = ["Descubra o Que Nos Torna Únicos!", "Venha Conhecer Nossa Abordagem!", "Explore Nossa Missão e Visão!"]

    return (
        <div>
            <section className="relative min-h-screen w-full bg-black px-4 py-12 text-white md:px-6 lg:px-8 flex items-center justify-center">
            <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full grayscale h-full object-cover z-0 opacity-40"
          poster="/video-quem-somos.svg"
        >
          <source src="/video-quem-somos.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black opacity-100 z-10"></div>

                <div className="container mt-12 px-4 mx-auto">
                    <div className="absolute right-8  z-10  md:block">
                        <div className="absolute inset-0 ml-[-6.6rem] mt-[31.5rem] lg:mt-14 md:ml-[-28rem] animate-spin-slow">
                        </div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                        <div className="space-y-6 z-10">
                            <h1 className="text-2xl font-bold text-[#AEFF00] leading-tight md:text-lg lg:text-4xl">
                                WE THINK BIG! 
                            </h1>
                            <p className="text-lg text-white leading-relaxed">
                            Somos especializados em fornecer soluções de ponta e sob medida para suas necessidades. Não importa o que você esteja procurando, nós temos a solução.
                            </p>
                            <p className="text-lg text-white leading-relaxed">
                            Na intersecção entre visão e execução, trazemos ideias criativas e uma equipe que transforma conceitos em narrativas atraentes.
                            </p>
                            <FlipWords words={words} className="text-base md:text-lg lg:text-lg" />
                            
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="https://api.whatsapp.com/send/?phone=5511953843871" target="_blank"
                                    className="rounded-full flex border border-white/20 bg-transparent px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
                                >
                                    QUERO UMA REUNIÃO
                                    <ArrowUpRight className="w-6 h-6 text-white" />
                                </Link>
                            </div>
                        </div>
                        {/* Right content */}
                    </div>
                </div>
            </section>
        </div>
    )
}