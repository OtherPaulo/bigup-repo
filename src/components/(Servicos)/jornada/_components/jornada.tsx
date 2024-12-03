import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Lightbulb, Code, BarChart } from "lucide-react";
import { title } from "process";

export default function NossaJornada() {
  const data = [
    {
      title: "Definir",
      content: (
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary-100 p-3 rounded-full">
              <Lightbulb className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-2xl font-semibold text-[#ff6d1f]">Definir</h3>
          </div>
          <p className="text-white dark:text-neutral-200 text-lg md:text-lg font-normal mb-4">
            Através de um trabalho consultivo, ajudamos nossos clientes a definir as estratégias necessárias para executar seu projeto. Esta etapa é dividida em duas categorias essenciais:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg text-black mb-2">Estratégia</h4>
              <p className="text-lg md:text-lg text-gray-600">Análise e definição da estratégia de mercado e de negócios.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg text-black mb-2">Tecnologia</h4>
              <p className="text-lg md:text-lg text-gray-600">Análise e definição da arquitetura e tecnologias necessárias.</p>
            </div>
            {/* <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-black mb-2">Gestão e Governança</h4>
              <p className="text-lg md:text-lg text-gray-600">Elaboração do roteiro de execução e gestão eficiente do projeto.</p>
            </div> */}
          </div>
        </div>
      ),
    },
    {
      title: "Desenvolver",
      content: (
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary-100 p-3 rounded-full">
              <Code className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-2xl font-semibold text-[#ff6d1f]">Desenvolver</h3>
          </div>
          <p className="text-white dark:text-neutral-200 text-lg md:text-lg font-normal mb-8">
            Nesta etapa orientamos o cliente para a escolha do serviço que atenderá integralmente sua demanda, levando em consideração seus objetivos, prazos e orçamento:
          </p>
          {/* <div className="grid grid-cols-2 gap-4">
            <img
              src="/medias.png?height=240&width=360"
              alt="Desenvolvimento de software"
              width={360}
              height={240}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/placeholder.svg?height=240&width=360"
              alt="Planejamento de projeto"
              width={360}
              height={240}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div> */}
        </div>
      ),
    },
    {
      title: "Evoluir",
      content: (
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary-100 p-3 rounded-full">
              <BarChart className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-2xl font-semibold text-[#ff6d1f]">Evolução/otimização</h3>
          </div>
          <p className="text-white dark:text-neutral-200 text-lg md:text-lg font-normal mb-4">
            Iniciamos com uma avaliação detalhada do projeto atual, identificando pontos fortes, áreas de melhoria e oportunidades de crescimento.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-white dark:text-neutral-300 text-lg md:text-lg mb-2">
            {/* <Image
                src="/check.svg"
                alt="Check"
                width={16}
                height={16}
                className="inline-block "
              />*/}
              Evolução/otimização 
            </div>
            <div className="flex gap-2 items-center text-white dark:text-neutral-300 text-lg md:text-lg mb-2">
           Sustentação
            </div>
            <div className="flex gap-2 items-center text-white dark:text-neutral-300 text-lg md:text-lg mb-2">

              Análise de dados
            </div>
            <div className="flex gap-2 items-center text-white dark:text-neutral-300 text-lg md:text-lg mb-2">
            Assessorias
            </div>
          </div>
          {/* <div className="grid grid-cols-2 gap-4">
            <Image
              src="/placeholder.svg?height=240&width=360"
              alt="Evolução e otimização"
              width={360}
              height={240}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/placeholder.svg?height=240&width=360"
              alt="Análise de dados"
              width={360}
              height={240}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div> */}
        </div>
      ),
    },
  ];

  return (
          <Timeline data={data} />
  );
}