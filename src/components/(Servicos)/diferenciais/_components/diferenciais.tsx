import {
    Users,
    UserPlus,
    Target,
    Cpu,
    MessageSquare,
    Lightbulb,
  } from "lucide-react"
  
  export default function DiferencialSection() {
    const differentials = [
      {
        icon: UserPlus,
        title: "Abordagem Personalizada",
        description:
          "Cada cliente é único, e nossas soluções são moldadas para atender às suas necessidades específicas. Trabalhamos lado a lado para entender sua visão e desenvolver estratégias sob medida.",
      },
      {
        icon: Users,
        title: "Equipe Multidisciplinar",
        description:
          "Contamos com uma equipe diversificada de especialistas em marketing digital, design, conteúdo e análise de dados. Essa combinação de habilidades nos permite criar campanhas integradas e inovadoras.",
      },
      {
        icon: Target,
        title: "Foco em Resultados",
        description:
          "Nossa prioridade é gerar resultados tangíveis. Monitoramos e analisamos cada campanha, ajustando estratégias em tempo real para maximizar o desempenho e o retorno sobre investimento.",
      },
      {
        icon: Cpu,
        title: "Tecnologia de Ponta",
        description:
          "Utilizamos as mais recentes ferramentas e tecnologias para otimizar nossas operações e oferecer soluções avançadas, garantindo que sua marca esteja sempre à frente da concorrência.",
      },
      {
        icon: MessageSquare,
        title: "Transparência e Comunicação",
        description:
          "Acreditamos em construir relacionamentos sólidos com nossos clientes, baseados em comunicação clara e transparente. Mantemos você informado em cada etapa do processo.",
      },
      {
        icon: Lightbulb,
        title: "Inovação Contínua",
        description:
          "Estamos sempre atentos às tendências e inovações do mercado, incorporando novas ideias e abordagens em nossas estratégias para garantir que sua marca se mantenha relevante.",
      },
    ]
  
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
          <div className="inline-block bg-[#ff6d1f] text-white text-sm font-medium px-3 py-1 rounded-full mb-8">Nosso Diferencial</div>

            <h3 className="text-xl md:text-4xl font-bold">
              Como potencializamos nossas entregas
            </h3>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((differential, index) => (
              <div
                key={index}
                className="relative p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="w-12 h-12 rounded-full bg-[#ff6d1f] flex items-center justify-center border-2 border-[#ff6d1f]">
                    <differential.icon className="w-6 h-6 text-[#ffffff]" />
                  </div>
                </div>
                <div className="pt-8 text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {differential.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {differential.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }