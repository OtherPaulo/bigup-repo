'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function PrivacidadeModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button variant="link" onClick={() => setIsOpen(true)}>Política de Privacidade</Button>
      {isOpen && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white text-black rounded-lg shadow-xl w-full max-w-2xl my-8 flex flex-col animate-in fade-in duration-300">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold">Política de Privacidade</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex-grow p-6 overflow-y-auto max-h-[60vh]">
            <div className="space-y-6 text-left">
                                <section>
                                    <p className='text-base'>A sua privacidade é importante para nós. É política do <span className='font-semibold'>Big Deal Marketing</span> respeitar a sua privacidade em relação a qualquer informação que possamos coletar no site <span className='font-semibold'>Big Deal Marketing</span>, e outros sites que possuímos e operamos.</p> <br />
                                    <h1 className='text-base'>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</h1> <br />
                                    <h2 className='text-base'>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</h2> <br />
                                    <h3 className='text-base'>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</h3> <br />
                                    <h4 className='text-base'>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</h4> <br />
                                    <h5 className='text-base'>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</h5> <br />
                                    <h6 className='text-base'>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.</h6>

                                </section>
                                <section>
                                    <p className='text-base'>O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.</p> <br />
                                    <h1 className='text-base'>Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.</h1> <br />
                                    <h2 className='text-base'>Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados ​​por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.</h2> <br />
                                    <h3 className='text-base'>Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.</h3> <br />
                                </section>
                                <section>
                                <h3 className="text-xl font-semibold mb-2"> Compromisso do Usuário</h3>
                                    <p className='text-base'>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o <span className='font-semibold'>Big Deal Marketing</span> oferece no site e com caráter enunciativo, mas não limitativo:</p> <br />
                                    <h1 className='text-base'>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</h1> <br />
                                    <h2 className='text-base'>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou casas de apostas legais (jogos de sorte e azar, apostas);</h2> <br />
                                    <h3 className='text-base'>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do <span className='font-semibold'>Big Deal Marketing</span>, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</h3> <br />
                                    <h4 className='text-base'>Esta política é efetiva a partir de 8 Novembro de 2024 09:00AM</h4> <br />
                                </section>
                                <section>
                                    <h3 className="text-xl font-semibold mb-2">1. Termos</h3>
                                    <p className='text-base'> Ao acessar ao site <span className='font-semibold'>Big Deal Marketing</span>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</p>
                                </section>
                                <section>
                                    <h3 className="text-xl font-semibold mb-2">2. Uso de Licença</h3>
                                    <p className='text-base'>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site <span className='font-semibold'>Big Deal Marketing</span> , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:</p> <br />
                                    <h1 className='text-base'><span className='font-semibold'>2.1</span> Modificar ou copiar os materiais;</h1> <br />
                                    <h2 className='text-base'><span className='font-semibold'>2.2</span> Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</h2> <br />
                                    <h3 className='text-base'><span className='font-semibold'>2.3</span> Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site <span className='font-semibold'>Big Deal Marketing</span>;</h3> <br />
                                    <h4 className='text-base'><span className='font-semibold'>2.4</span> Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</h4> <br />
                                    <h5 className='text-base'><span className='font-semibold'>2.5</span> Transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</h5> <br />
                                    <h6 className='text-base'>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por <span className='font-semibold'>Big Deal Marketing</span> a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.</h6>
                                </section>
                                <section>
                                    <h3 className="text-xl font-semibold mb-2">3. Isenção de responsabilidade</h3>
                                    <p className='text-base'><span className='font-semibold'>3.1</span> Os materiais no site da <span className='font-semibold'>Big Deal Marketing</span> são fornecidos 'como estão'. <span className='font-semibold'>Big Deal Marketing</span> não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</p> <br />
                                    <h1 className='text-base'><span className='font-semibold'>3.2</span> Além disso, o <span className='font-semibold'>Big Deal Marketing</span> não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</h1>
                                </section>
                                <section>
                                    <h3 className="text-xl font-semibold mb-2">4. Limitações</h3>
                                    <p className='text-base'>Em nenhum caso o <span className='font-semibold'>Big Deal Marketing</span> ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em <span className='font-semibold'>Big Deal Marketing</span>, mesmo que <span className='font-semibold'>Big Deal Marketing</span> ou um representante autorizado da <span className='font-semibold'>Big Deal Marketing</span> tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.</p>
                                </section>
                                <section>
                                    <h3 className="text-xl font-semibold mb-2">5. Precisão dos materiais</h3>
                                    <p className='text-base'>Os materiais exibidos no site da <span className='font-semibold'>Big Deal Marketing</span> podem incluir erros técnicos, tipográficos ou fotográficos. <span className='font-semibold'>Big Deal Marketing</span> não garante que qualquer material em seu site seja preciso, completo ou atual. <span className='font-semibold'>Big Deal Marketing</span> pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, <span className='font-semibold'>Big Deal Marketing</span> não se compromete a atualizar os materiais.</p>
                                </section>
                                <section>
                                    <h3 className="text-xl font-semibold mb-2">6. Links</h3>
                                    <p className='text-base'>O <span className='font-semibold'>Big Deal Marketing</span> não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por <span className='font-semibold'>Big Deal Marketing</span> do site. O uso de qualquer site vinculado é por conta e risco do usuário.
                                    Modificações</p> <br />
                                    <h1 className='text-base'>O <span className='font-semibold'>Big Deal Marketing</span> pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</h1> <br />
                                    <h2 className='text-xl font-semibold'>Lei aplicável</h2> <br />
                                    <h3 className='text-base'>Estes termos e condições são regidos e interpretados de acordo com as leis do <span className='font-semibold'>Big Deal Marketing</span> e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</h3>
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