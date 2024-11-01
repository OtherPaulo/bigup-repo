import Image from "next/image"

export default function MainServices() {
  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
      <div className="inline-block bg-[#AEFF00] text-black text-sm font-medium px-3 py-1 rounded-full mt-8 mb-8">#SERVIÇOS</div>

        <div className=" mx-auto">
          {/* Title Section */}
          <h1 className="text-2xl md:text-4xl font-bold mb-8 text-white drop-shadow-sm">
          COMO TE AJUDAMOS: <span className="font-semibold">Maximizando o sucesso dos seus projetos digitais.</span> 
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-lg text-gray-300 mb-8">
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

          <h1 className="text-2xl md:text-4xl font-bold mb-8 text-white drop-shadow-sm">
            Potencialize a performance dos seus projetos digitais.
          </h1>
          
          <p className="text-lg md:text-lg text-gray-300 mb-8">
            Em um cenário tecnológico em constante evolução, otimizar a performance dos projetos de TI é essencial para alcançar resultados excepcionais. Aqui estão algumas estratégias para impulsionar a eficiência e o sucesso dos seus projetos:
          </p>

          {/* Text Content */}
          <div className="space-y-6 text-lg md:text-lg text-gray-300">
            <p>
              Entretanto, o sucesso dessa jornada está profundamente ligado à qualidade da equipe envolvida. É exatamente nesse aspecto que os serviços da Premiersoft se destacam.
            </p>
            
            <p>
              Na nossa empresa, reconhecemos a importância de prazos, qualidade e resultados. Por isso, oferecemos soluções sob medida que integram expertise técnica e flexibilidade operacional, garantindo uma gestão de custos eficiente e transparência total para nossos clientes.
            </p>

            <div className="pt-6 text-lg md:text-lg">
              <p className="text-white">
                Para assegurar o êxito de cada projeto, vamos além das habilidades técnicas; nosso compromisso é: 
                <span className="block text-lg md:text-2xl font-bold mt-2">
                  &quot;Prover ao cliente sempre a melhor solução.&quot;
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}