import { BadgeCheck, CalendarDays, User } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from "@/components/(LandingPage)/footer/_components/footer"
import PostesBlog from "@/components/(Blog)/postes/posts/_components/posts"
import Header from "@/components/(LandingPage)/header/_components/header"

export default function Post3() {
  return (
    <>
        <div className="bg-gray-800">
        <Header />
        <div className="py-16"></div>
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Como Ter um Site Responsivo</CardTitle>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
          <div className="flex items-center">
            <CalendarDays className="mr-1 h-4 w-4" />
            <time dateTime="2023-10-29">29 de Outubro, 2023</time>
          </div>
          <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src="/perfil.jpg" alt="" />
            <AvatarFallback>Felipe Zavatti</AvatarFallback>
          </Avatar>
            <span className="text-sm font-medium group-hover:text-white transition-colors duration-300">Felipe Zavatti</span>
            <BadgeCheck className='w-4 h-4 ml-1 text-blue-500'/>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <img
          src="/responsive.jpg?height=400&width=800"
          alt="Site Responsivo em Diferentes Dispositivos"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <div className="prose prose-sm sm:prose lg:prose-lg">
          <p>
            Em um mundo onde o acesso à internet é cada vez mais feito por dispositivos móveis, ter um site responsivo é
            fundamental para garantir uma boa experiência ao usuário.
          </p>
          <br />
          <p>
            Um site responsivo se adapta automaticamente ao tamanho da tela do dispositivo que o está visualizando, seja
            um smartphone, tablet ou desktop. Isso não apenas melhora a experiência do usuário, mas também é um fator
            importante para SEO. Se você deseja criar ou reformular um site responsivo, aqui estão algumas etapas
            essenciais para guiá-lo nesse processo.
          </p>
          <br />
          <h2>1. Planejamento e Design Inicial</h2>
          <br />
          <p>
            Antes de começar a codificar, é essencial planejar o layout do seu site. Considere como o design funcionará
            em diferentes tamanhos de tela. Pense na hierarquia das informações e como elas devem ser apresentadas em
            dispositivos menores. Use wireframes para visualizar a estrutura do seu site.
          </p>
          <br />
          <h2>2. Use um Framework Responsivo</h2>
          <br />
          <p>
            Utilizar frameworks como Bootstrap ou Foundation pode facilitar muito o desenvolvimento de um site
            responsivo. Esses frameworks vêm com grids flexíveis e componentes prontos que se ajustam a diferentes
            tamanhos de tela, economizando tempo e esforço.
          </p>
          <br />
          <h2>3. Imagens e Mídia Flexíveis</h2>
          <br />
          <p>
            As imagens devem ser adaptáveis para não ultrapassarem os limites da tela. Utilize CSS para definir as
            imagens como 100% da largura do contêiner, garantindo que elas se ajustem automaticamente. Considere também
            utilizar formatos de imagem mais leves, como WebP, para melhorar o tempo de carregamento.
          </p>
          <br />
          <h2>4. CSS Media Queries</h2>
          <br />
          <p>
            As media queries são essenciais para personalizar o layout em diferentes dispositivos. Com elas, você pode
            aplicar estilos específicos com base na largura da tela. Por exemplo, você pode ajustar tamanhos de fonte,
            margens e layouts dependendo se o usuário está em um celular ou em um desktop.
          </p>
          <br />
          <pre>
            <code className="language-css">
              {`@media (max-width: 768px) {
    body {
        font-size: 14px;
    }
}`}
            </code>
          </pre>
          <br />
          <h2>5. Navegação Simples e Intuitiva</h2>
          <br />
          <p>
            Certifique-se de que a navegação do seu site seja fácil de usar em todos os dispositivos. Em telas menores,
            considere utilizar menus hambúrguer para economizar espaço. A navegação deve ser intuitiva e permitir que os
            usuários encontrem o que precisam rapidamente.
          </p>
          <br />
          <h2>6. Teste em Diferentes Dispositivos</h2>
          <br />
          <p>
            Após o desenvolvimento, teste seu site em diversos dispositivos e tamanhos de tela. Ferramentas como Google
            Chrome Developer Tools permitem que você simule diferentes resoluções. Certifique-se de que tudo, desde o
            layout até os formulários, funcione perfeitamente.
          </p>
          <br />
          <h2>7. Otimização para Velocidade</h2>
          <br />
          <p>
            Um site responsivo deve ser rápido e eficiente. Otimize o código, minimize arquivos CSS e JavaScript e
            utilize cache para melhorar o tempo de carregamento. Lembre-se de que usuários de dispositivos móveis podem
            estar em redes mais lentas, então a velocidade é crucial.
          </p>
          <br />
          <h2>8. Acessibilidade</h2>
          <br />
          <p>
            Garanta que seu site seja acessível a todos, incluindo pessoas com deficiências. Use contrastes adequados,
            textos alternativos para imagens e navegação por teclado. Uma abordagem inclusiva não só é ética, mas também
            amplia seu público.
          </p>
          <br />
          <h2>Conclusão</h2>
          <br />
          <p>
            Ter um site responsivo é uma necessidade no cenário digital atual. Seguindo essas etapas, você pode garantir
            que sua página ofereça uma experiência de usuário excepcional em qualquer dispositivo. Um site bem projetado
            não apenas atrai visitantes, mas também os mantém engajados, aumentando as chances de conversão. Se precisar
            de ajuda para desenvolver um site responsivo, a [Nome da Sua Empresa] está aqui para ajudar. Entre em
            contato e vamos construir um site que se destaque!
          </p>
        </div>
      </CardContent>
    </Card> 
    <PostesBlog/>
    <Footer />
    </div>
    </>
  )
}