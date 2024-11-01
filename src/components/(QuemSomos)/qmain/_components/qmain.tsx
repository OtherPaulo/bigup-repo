import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { FlipWords } from "@/components/ui/flip-words"
import GridPattern from "@/components/ui/grid-pattern"
import { cn } from "@/lib/utils"

export default function QMain() {
        const words = ["Descubra o Que Nos Torna Únicos!", "Venha Conhecer Nossa Abordagem!", "Explore Nossa Missão e Visão!"]
    
        return (
            <div>
                <section className="relative min-h-screen w-full bg-black px-4 py-12 text-white md:px-6 lg:px-8 flex items-center justify-center">
                    <GridPattern
                        width={20}
                        height={20}
                        x={-1}
                        y={-1}
                        className={cn(
                            "[mask-image:linear-gradient(to_bottom_right,white,transparent,white)] ",
                        )}
                    />
                    <div className="container mt-12 px-4 mx-auto">
                        {/* Top right explore button */}
                        <div className="absolute right-8  z-10  md:block">
                            <div className="absolute inset-0 ml-[-6.6rem] mt-[31.5rem] lg:mt-14 md:ml-[-28rem] animate-spin-slow">
                                {/* <Rotate /> */}
                            </div>
                        </div>
    
                        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                            {/* Left content */}
                            <div className="space-y-6 z-10">
                                <h1 className="text-2xl font-bold text-[#AEFF00] leading-tight md:text-lg lg:text-4xl">
                                    WE THINK BIG! 
                                </h1>
                                <p className="text-lg text-white">
                                Somos especializados em fornecer soluções de ponta e sob medida para suas necessidades. Não importa o que você esteja procurando, nós temos a solução.
                                </p>
                                <p className="text-lg text-white">
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
                        </div>
                    </div>
                </section>
            </div>
        )
    }
    