import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { FlipWords } from "@/components/ui/flip-words"
import GridPattern from "@/components/ui/grid-pattern"
import { cn } from "@/lib/utils"

export default function QMain() {
    const words = ["Branding", "Social Media", "Loja Virtual", "Sites Profissionais"]

    return (
        <div>
            <section className="relative min-h-screen w-full bg-black px-4 py-12 text-white md:px-6 lg:px-8">
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
                            <h1 className="text-2xl mt-40 font-bold text-[#AEFF00] leading-tight md:text-xl lg:text-5xl">
                                We think Big!
                            </h1>
                            <p className="text-sm text-white">
                                Com experiência no mercado validada, a Big Deal se destaca como uma referência em serviços de alta qualidade. Nossa missão é transformar as necessidades e ideias dos nossos clientes em soluções de grande sucesso, impulsionando o crescimento e a inovação em seus negócios.
                            </p>
                            <h2 className="text-lg md:text-lg lg:text-xl">
                                Soluções para
                                <FlipWords words={words} className="text-lg md:text-lg lg:text-xl" />
                            </h2>
                            <div className="flex flex-wrap gap-4">
                                {/* <Link
                                    href="https://api.whatsapp.com/send/?phone=5511953843871" target="_blank"
                                    className="rounded-full flex bg-[#AEFF00] px-8 py-3 text-base font-semibold text-black transition-colors hover:bg-[#9EEF00]"
                                >
                                    Inicie seu projeto
                                    <ArrowUpRight className="w-6 h-6 text-black" />
                                </Link> */}
                                <Link
                                    href="https://api.whatsapp.com/send/?phone=5511953843871" target="_blank"
                                    className="rounded-full flex border border-white/20 bg-transparent px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
                                >
                                    Agende uma reunião
                                    <ArrowUpRight className="w-6 h-6 text-white" />
                                </Link>
                            </div>
                        </div>

                        {/* Right content - Image grid */}
                        {/* <div className="relative mt-8 md:mt-0">
                            <div className="relative overflow-hidden">
                                <img
                                    src="/image-home.png"
                                    alt="Team working"
                                    width={300}
                                    height={200}
                                    className="h-auto w-full md:w-3/4 md:h-3/4 md:ml-28 object-cover"
                                />
                                <div className="absolute top-16 right-[4rem] lg:left-[30rem]">
                                    <Rotate />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}
