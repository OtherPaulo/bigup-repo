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
        >
          <source src="https://videos.pexels.com/video-files/7507666/7507666-uhd_2560_1440_25fps.mp4" type="video/mp4" />
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
                            <h1 className="text-2xl font-bold text-[#ff6d1f] leading-tight md:text-lg lg:text-4xl">
                            Quem somos
                            </h1>
                            <p className="text-xl text-white font-bold leading-relaxed">
                            CONSULTORIA EM INOVAÇÃO TECNOLÓGICA
                            </p>
                            <p className="text-lg text-white leading-relaxed">
                            A <span className="text-orange-500 text-bold">Big Deal Marketing</span>, é uma empresa especializada em <span className="text-orange-500 text-bold">marketing digital</span>, 
                            tecnologia e <span className="text-orange-500 text-bold">audiovisual</span>.
                            </p>
                            <h1>Sabemos que muitas empresas <span className="text-orange-500 text-bold">enfrentam dificuldades</span> para se conectar com seu
                            público de forma eficaz, especialmente em um ambiente digital em constante mudança.</h1>
                            <h2>Por este motivo, <span className="text-orange-500 text-bold">orientamos empresas</span> a encontrarem a sua essência e aproveitarem
                            oportunidades para se diferenciar, crescer e <span className="text-orange-500 text-bold">modernizar a sua marca.</span> </h2>
                            <FlipWords words={words} className="text-base md:text-lg lg:text-lg" />
                            
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/cases"
                                    className="rounded-full flex border border-white/20 bg-transparent px-4 md:px-14 py-2 text-base font-semibold text-white transition-colors hover:bg-[#ff6d1f]"
                                >
                                    Saiba mais
                                    <ArrowUpRight className="w-6 h-6 text-white " />
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