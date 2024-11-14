import { ArrowUpRight, Target, Eye, ArrowUp, Gem } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Propositoo() {
  return (
    <section className="bg-black text-white min-h-screen relative py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-12">
        <div className="inline-block bg-[#AEFF00] text-black text-sm font-medium px-3 py-1 rounded-full mb-8">PROPÓSITO</div>
        <h1 className="text-2xl font-bold leading-tight md:text-4xl lg:text-4xl mt-4 mb-8">
            Oferecer serviços de alta qualidade com foco em {" "}
            <span className="text-[#C1FF02]">inovação tecnológica!</span> 
          </h1>
          <p className="text-lg text-gray-400">
          Na junção de visão e ação, transformamos ideias em soluções que realmente fazem a diferença.
          </p>
        </div>
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Support Card & Image */}
          <div className="space-y-6">
            <div className="bg-[#1A1A1A] p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Potencialize seu Negócio</h3>
              <p className="text-gray-400 mb-4">Estamos sempre disponíveis para nossos clientes</p>
              <a href="https://api.whatsapp.com/send/?phone=5511910029543" target="_blank">
              <Button variant="ghost" className="group">
                Fale com um Especialista
                <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
              </a>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/encaixa-ai.appspot.com/o/nosso-proposito.jpeg?alt=media&token=4e8a6b28-9097-4d3b-9a8f-a3e314a76661"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - Image & Features */}
          <div className="space-y-6">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/encaixa-ai.appspot.com/o/nosso-proposito2.jpeg?alt=media&token=5e3e13be-df61-4e08-a3e8-e9e510c45287"
                alt="Office environment"
                fill
                className="object-cover"
              />
            </div>

            {/* Features List */}
            <div className="space-y-8">
              <div className="flex items-start mt-16 gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C1FF02] flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Missão</h3>
                  <p className="text-gray-400">
                    Desenvolver soluções criativas que impactam vidas e maximizam resultados.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C1FF02] flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Visão</h3>
                  <p className="text-gray-400">
                    Ser reconhecida como a consultoria mais inovadora em tecnologia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C1FF02] flex items-center justify-center flex-shrink-0">
                  <Gem className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="font-bold">Valores</h3>
                  <p className="text-gray-400">
                    Transparência, Aliança, Progresso, Distinção e Conexão.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Button */}
        {/* <div className="text-center">
          <Button className="bg-[#C1FF02] text-black hover:bg-[#9FCC02] transition-colors">
            Mais Sobre Nós
          </Button>
        </div> */}
      </div>

      {/* Scroll to Top Button */}
      {/* <button className="fixed z-10 bottom-8 right-8 w-12 h-12 bg-[#C1FF02] rounded-full flex items-center justify-center hover:bg-[#9FCC02] transition-colors">
        <ArrowUp className="w-6 h-6 text-black" />
      </button> */}
    </section>
  )
}