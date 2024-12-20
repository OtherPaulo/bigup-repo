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
        >
          <source src="https://videos.pexels.com/video-files/7668506/7668506-uhd_2560_1440_25fps.mp4" type="video/mp4" />
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
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#ff6d1f]"></span>
                </span>
                </h1>
                <h2 className="text-base sm:text-lg md:text-lg">
                Soluções para{" "}
                <FlipWords words={words} className="text-base sm:text-lg md:text-lg" />
                </h2>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/quem-somos"
                  className="rounded-full flex bg-[#ff6d1f] px-4 py-2 md:px-12 md:py-2 text-base font-semibold text-white transition-colors hover:bg-[#ff6d1f]"
                >
                  Quem somos
                  <ArrowUpRight className="w-6 h-6 text-white " />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
