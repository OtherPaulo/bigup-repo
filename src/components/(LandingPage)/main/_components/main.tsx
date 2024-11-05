import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FlipWords } from "@/components/ui/flip-words";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function Main() {
  const words = ["Branding", "Social Media", "Loja Virtual", "Sites Profissionais"];

  return (
    <div>
      <section className="relative min-h-screen w-full bg-black px-4 py-12 text-white md:px-6 lg:px-8 flex items-center">
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          className={cn("[mask-image:linear-gradient(to_bottom_right,white,transparent,white)]")}
        />
        <div className="container px-4 mx-auto">
          <div className="absolute right-8 z-10 md:block">
            <div className="absolute inset-0 ml-[-6.6rem] mt-[31.5rem] lg:mt-14 md:ml-[-28rem] animate-spin-slow">
              {/* <Rotate /> */}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-6 z-10">
              <h1 className="text-xl sm:text-2xl font-bold leading-tight md:text-lg lg:text-4xl">
                IMPULSIONAMOS SUA MARCA COM{" "}
                <span className="relative">
                  ESTRATÉGIAS DIGITAIS
                  <span className="absolute bottom-0 md:bottom-0 lg:bottom-2 left-0 h-[2px] w-full bg-[#AEFF00]"></span>
                </span>
              </h1>
              <h2 className="text-base sm:text-lg md:text-lg">
                Soluções para
                <FlipWords words={words} className="text-base sm:text-lg md:text-lg" />
              </h2>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/servicos"
                  className="rounded-full flex bg-[#AEFF00] px-8 py-3 text-base font-semibold text-black transition-colors hover:bg-[#9EEF00]"
                >
                  QUERO SABER MAIS
                  <ArrowUpRight className="w-6 h-6 text-black" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
