import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { FlipWords } from "@/components/ui/flip-words"
import GridPattern from "@/components/ui/grid-pattern"
import { cn } from "@/lib/utils"

export default function Main() {
  const words = ["Branding", "Social Media", "Loja Virtual", "Sites Profissionais"]


  return (
    <div>
 
    <section className="relative min-h-auto w-full bg-black px-4 py-12 text-white md:px-6 lg:px-8">
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
          <div className="space-y-6 z-10 min-h-screen">
          {/* <div className="inline-block bg-[#AEFF00] text-black text-sm font-medium px-3 py-1 rounded-full mb-8">#1 Em Soluções Digitais</div> */}
            <h1 className="text-2xl mt-52 font-bold leading-tight md:text-xl lg:text-5xl">
            IMPULSIONAMOS SUA MARCA COM{" "}
              <span className="relative">
              ESTRATÉGIAS DIGITAIS
          <span className="absolute bottom-1 md:bottom-0 lg:bottom-2 left-0 h-[2px] w-full bg-[#AEFF00]"></span>
              </span>{" "}
         
            </h1>
            <h2 className="text-lg md:text-lg lg:text-xl">
            Soluções para
            <FlipWords words={words} className="text-lg md:text-lg lg:text-xl" />
            </h2>
            <div className="flex flex-wrap gap-4">
            <Link
            href="https://api.whatsapp.com/send/?phone=5511953843871" target="_blank"
            className="rounded-full flex bg-[#AEFF00] px-8 py-3 text-base font-semibold text-black transition-colors hover:bg-[#9EEF00]"
            >
          Inicie seu projeto
          <ArrowUpRight className="w-6 h-6 text-black" />
              </Link>
              {/* <Link
          href="/quem-somos"
          className="rounded-full flex border border-white/20 bg-transparent px-12 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
          Quem somos
          <ArrowUpRight className="w-6 h-6 text-white" />
              </Link> */}
            </div>
          </div>

          {/* Right content - Image grid */}
          {/* <div className="relative md:mt-0">
              <div className="relative overflow-hidden">
                <img
                  src="/elements.png"
                  alt="Team working"
                  width={300}
                  height={200}
                  className="h-auto w-full  mt-44 md:ml-28 object-cover"
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