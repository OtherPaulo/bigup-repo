'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function CookiesModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button variant="link" onClick={() => setIsOpen(true)}>Política de Cookies</Button>
      {isOpen && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white text-black rounded-lg shadow-xl w-full max-w-2xl my-8 flex flex-col animate-in fade-in duration-300">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold">Política de Cookies</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex-grow p-6 overflow-y-auto max-h-[60vh]">
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold mb-2">1. O que são Cookies?</h3>
                  <p>Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita nosso site.</p>
                </section>
                <section>
                  <h3 className="text-xl font-semibold mb-2">2. Como Usamos os Cookies</h3>
                  <p>Utilizamos cookies para melhorar sua experiência de navegação, analisar o uso do site e personalizar conteúdo.</p>
                </section>
                <section>
                  <h3 className="text-xl font-semibold mb-2">3. Tipos de Cookies</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Cookies essenciais: necessários para o funcionamento do site.</li>
                    <li>Cookies de desempenho: ajudam a analisar como você usa o site.</li>
                    <li>Cookies de funcionalidade: lembram suas preferências.</li>
                    <li>Cookies de publicidade: usados para entregar anúncios relevantes.</li>
                  </ul>
                </section>
                <section>
                  <h3 className="text-xl font-semibold mb-2">4. Controle de Cookies</h3>
                  <p>Você pode gerenciar ou excluir cookies através das configurações do seu navegador.</p>
                </section>
                <section>
                  <h3 className="text-xl font-semibold mb-2">5. Cookies de Terceiros</h3>
                  <p>Alguns cookies podem ser definidos por serviços de terceiros que aparecem em nossas páginas.</p>
                </section>
                <section>
                  <h3 className="text-xl font-semibold mb-2">6. Atualizações da Política</h3>
                  <p>Esta política pode ser atualizada. Consulte-a regularmente para se manter informado.</p>
                </section>
              </div>
            </div>
            <div className="border-t p-6">
            <Button onClick={() => setIsOpen(false)} className="w-full text-black bg-[#AEFF00] hover:bg-[#AEFF00]">Fechar</Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}