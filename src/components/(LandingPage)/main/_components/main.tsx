import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FlipWords } from "@/components/ui/flip-words";

export default function Main() {
  const words = ["Branding", "Social Media", "Loja Virtual", "Sites Profissionais"];

  return (
    <div>
      <section className="relative min-h-screen w-full bg-black px-4 py-12 text-white md:px-6 lg:px-8 flex items-center">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full grayscale h-full object-cover z-0 opacity-40"
          poster="/video-home.svg"
        >
          <source src="/video-home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black opacity-100 z-10"></div>

        <div className="container px-4 mx-auto z-20">
          <div className="absolute right-8 z-10 md:block">
            <div className="absolute inset-0 ml-[-6.6rem] mt-[31.5rem] lg:mt-14 md:ml-[-28rem] animate-spin-slow">
              {/* <Rotate /> */}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-6 z-10">
              <h1 className="text-xl leading-relaxed sm:leading-relaxed sm:text-2xl font-bold md:text-lg md:leading-normal lg:text-4xl lg:leading-normal">
                IMPULSIONAMOS SUA MARCA COM{" "}
                <span className="relative">
                  ESTRATÉGIAS DIGITAIS
                  <span className="absolute bottom-0 md:bottom-0 lg:bottom-2 left-0 h-[2px] w-full bg-[#AEFF00]"></span>
                </span>
              </h1>
              <h2 className="text-base sm:text-lg md:text-lg ">
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
