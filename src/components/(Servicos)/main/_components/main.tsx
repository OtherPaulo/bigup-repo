import Image from "next/image"

export default function MainServices() {
  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
      <div className="inline-block bg-[#AEFF00] text-black text-sm font-medium px-3 py-1 rounded-full mt-8 mb-8">#SERVIÇOS</div>

        <div className=" mx-auto">
          {/* Title Section */}
          <h1 className="text-xl md:text-4xl font-bold mb-8 text-white drop-shadow-sm">
          Descubra nossos serviços personalizados para potencializar seus {" "}
                          <span className="relative">
                          projetos digitais
                  <span className="absolute bottom-0 md:bottom-0 lg:bottom-2 left-0 h-[2px] w-full bg-[#AEFF00]"></span>
                </span> 
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-300 mb-8">
          Na <span className="font-bold text-white">BIG DEAL</span>, oferecemos uma ampla gama de serviços projetados para elevar sua marca e impulsionar o crescimento. Nossa equipe multidisciplinar de designers, estrategistas,e os profissionais de marketing trabalham em colaboração para dar vida à sua visão por meio de soluções inovadoras e impactantes.
          </p>

          {/* Images Grid */}
          {/* <div className="grid md:grid-cols-2 gap-6 mb-12">

            <Image
              src="/placeholder.svg"
              alt="Professional at work"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-[300px]"
            />
          </div> */}
              <img
              src="/servicos-bg.jpeg"
              alt="Team collaboration"
              width={600}
              height={400}
              className="rounded-lg object-cover mb-8 w-full h-[300px]"
            />

          {/* <h1 className="text-2xl md:text-4xl font-bold mb-8 text-white drop-shadow-sm">
            Potencialize a performance dos seus projetos digitais.
          </h1> */}
          
          <p className="text-base md:text-lg text-gray-300 mb-8">
          Em um ambiente tecnológico em constante mudança, otimizar a performance dos projetos de TI é fundamental para alcançar resultados excepcionais. Confira algumas estratégias para aumentar a eficiência e o sucesso dos seus projetos:
          </p>

          {/* Text Content */}
          <div className="space-y-6 text-base md:text-lg text-gray-300">
            <p>
            O sucesso dessa jornada está intimamente ligado à qualidade da equipe envolvida. É nesse aspecto que os serviços da Big Deal se destacam.
            </p>
            
            <p>
            Na nossa empresa, entendemos a importância de prazos, qualidade e resultados. Por isso, oferecemos soluções personalizadas que combinam expertise técnica e flexibilidade operacional, assegurando uma gestão de custos eficaz e total transparência para nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}